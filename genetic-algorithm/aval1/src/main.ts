import { GeneticAlgorithm } from './core/genetic-algorithm'
import type { ICrossoverStrategy, IFitnessFunction, IMutationStrategy, ISelectionStrategy } from './domain/interfaces'
import { BohachevskyProblem } from './problems/bohachevsky'
import { CamelBack3Problem } from './problems/camelback3'
import { ArithmeticCrossover } from './strategies/crossover/arithmetic-crossover'
import { SimpleMutation } from './strategies/mutation/simple-mutation'
import { RankSelection } from './strategies/selection/rank-selection'
import { TournamentSelection } from './strategies/selection/tournament-selection'
import { CountingFitnessFunction } from './utils/counting-fitness-function'

type GeneticAlgorithmConfig = {
  maxGenerations: number
  populationSize: number
  elitismCount: number
  crossoverRate: number
  mutationRate: number
}

type ExperimentCase = {
  problemName: string
  problemFactory: () => IFitnessFunction
  tolerance: number
  selectionFactory: () => ISelectionStrategy
  crossoverFactory: () => ICrossoverStrategy
  mutationFactory: (context: MutationFactoryContext) => IMutationStrategy
}

type MutationFactoryContext = {
  mutationRate: number
  lowerBound: number
  upperBound: number
}

type RunnerConfig = {
  totalRuns: number
  progressInterval: number
  targetFitness: number
  ga: GeneticAlgorithmConfig
}

const RUNNER_CONFIG: RunnerConfig = {
  totalRuns: 100,
  progressInterval: 10,
  targetFitness: 0,
  ga: {
    maxGenerations: 1000,
    populationSize: 100,
    elitismCount: 2,
    crossoverRate: 0.9,
    mutationRate: 0.01,
  },
}

type ResultRow = { problem: string; dimension: number; averageNfe: string; sr: string }

class ExperimentRunner {
  constructor(
    private config: RunnerConfig,
    private cases: ExperimentCase[],
  ) {}

  public execute(): void {
    const results = this.cases.map((experimentCase) => this.runExperiment(experimentCase))
    this.printResults(results)
  }

  private runExperiment(experimentCase: ExperimentCase): ResultRow {
    const { problemName, problemFactory, tolerance } = experimentCase
    const { totalRuns, progressInterval } = this.config

    console.log(`Iniciando ${totalRuns} execucoes para ${problemName}...`)

    const dimension = problemFactory().dimension
    let successCount = 0
    let totalNfe = 0

    for (let currentRun = 1; currentRun <= totalRuns; currentRun++) {
      const runResult = this.runSingleExecution(experimentCase)
      totalNfe += runResult.nfe

      if (runResult.success) {
        successCount++
      }

      if (currentRun % progressInterval === 0) {
        console.log(`Progresso ${problemName}: ${currentRun}/${totalRuns} execucoes concluidas.`)
      }
    }

    return {
      problem: problemName,
      dimension,
      averageNfe: Math.round(totalNfe / totalRuns).toString(),
      sr: `${((successCount / totalRuns) * 100).toFixed(2)}%`,
    }
  }

  private runSingleExecution(experimentCase: ExperimentCase): { success: boolean; nfe: number } {
    const { problemFactory, tolerance, selectionFactory, crossoverFactory, mutationFactory } = experimentCase
    const problem = new CountingFitnessFunction(problemFactory())
    const gaConfig = this.config.ga

    const ga = new GeneticAlgorithm(
      problem,
      selectionFactory(),
      crossoverFactory(),
      mutationFactory({
        mutationRate: gaConfig.mutationRate,
        lowerBound: problem.lowerBound,
        upperBound: problem.upperBound,
      }),
      gaConfig.populationSize,
      gaConfig.maxGenerations,
      gaConfig.crossoverRate,
      gaConfig.elitismCount,
      tolerance,
    )

    const bestIndividual = ga.execute()

    return {
      success: Math.abs(bestIndividual.fitness - this.config.targetFitness) < tolerance,
      nfe: problem.evaluations,
    }
  }

  private printResults(rows: ResultRow[]): void {
    console.log('\n=== RESULTADOS FINAIS ===')
    console.log('| Problem | n | NFE (media) | SR |')
    console.log('| :--- | :--- | :--- | :--- |')

    rows.forEach((row) => {
      console.log(`| **${row.problem}** | ${row.dimension} | ${row.averageNfe} | ${row.sr} |`)
    })
  }
}

const experimentRunner = new ExperimentRunner(RUNNER_CONFIG, [
  {
    problemName: 'BF1',
    problemFactory: () => new BohachevskyProblem(),
    tolerance: 0.01,
    selectionFactory: () => new TournamentSelection(3),
    crossoverFactory: () => new ArithmeticCrossover(),
    mutationFactory: ({ mutationRate, lowerBound, upperBound }) =>
      new SimpleMutation(mutationRate, lowerBound, upperBound),
  },
  {
    problemName: 'CB3',
    problemFactory: () => new CamelBack3Problem(),
    tolerance: 0.01,
    selectionFactory: () => new RankSelection(),
    crossoverFactory: () => new ArithmeticCrossover(),
    mutationFactory: ({ mutationRate, lowerBound, upperBound }) =>
      new SimpleMutation(mutationRate, lowerBound, upperBound),
  },
])

experimentRunner.execute()
