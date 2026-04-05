import { GeneticAlgorithm } from './core/genetic-algorithm'
import type { IFitnessFunction } from './domain/interfaces'
import { AckleyProblem } from './problems/ackley'
import { BohachevskyProblem } from './problems/bohachevsky'
import { ArithmeticCrossover } from './strategies/crossover/arithmetic-crossover'
import { SimpleMutation } from './strategies/mutation/simple-mutation'
import { TournamentSelection } from './strategies/selection/tournament-selection'

const NUM_REPETICOES = 100
const TARGET_FITNESS = 0

type ExperimentConfig = {
  problemName: string
  problemFactory: () => IFitnessFunction
  tolerance: number
}

class CountingFitnessFunction implements IFitnessFunction {
  public evaluations = 0

  constructor(private baseFitness: IFitnessFunction) {}

  get upperBound(): number {
    return this.baseFitness.upperBound
  }

  get lowerBound(): number {
    return this.baseFitness.lowerBound
  }

  get dimension(): number {
    return this.baseFitness.dimension
  }

  calculateFitness(genes: number[]): number {
    this.evaluations++
    return this.baseFitness.calculateFitness(genes)
  }
}

type ResultRow = {
  problem: string
  dimension: number
  nfe: string
  sr: string
}

function runTests(config: ExperimentConfig): ResultRow {
  const { problemFactory, problemName, tolerance } = config
  const dimension = problemFactory().dimension
  let NFEFinal = 0
  let SRFinal = 0

  for (let i = 0; i < NUM_REPETICOES; i++) {
    let NFE = 0
    const problem = new CountingFitnessFunction(problemFactory())
    const selection = new TournamentSelection(3)
    const crossover = new ArithmeticCrossover()
    const mutation = new SimpleMutation(0.05, problem.lowerBound, problem.upperBound)

    const ag = new GeneticAlgorithm(problem, selection, crossover, mutation)
    const bestIndividual = ag.execute()

    NFE = problem.evaluations
    NFEFinal += NFE

    if (Math.abs(bestIndividual.fitness - TARGET_FITNESS) < tolerance) {
      SRFinal++
    }
  }

  const successRate = (SRFinal / NUM_REPETICOES) * 100

  return {
    problem: problemName,
    dimension,
    nfe: `${NFEFinal}`,
    sr: `${successRate.toFixed(2)}%`,
  }
}

function padCell(value: string, width: number): string {
  return value.padEnd(width, ' ')
}

function printResults(rows: ResultRow[]): void {
  const headers = ['Problem', 'n', 'NFE (bruto)', 'SR']

  const tableRows = rows.map((row) => [row.problem, String(row.dimension), row.nfe, row.sr])
  const widths = headers.map((header, index) => {
    const maxContentWidth = tableRows.reduce((max, row) => Math.max(max, row[index]?.length ?? 0), 0)
    return Math.max(header.length, maxContentWidth)
  })

  const border = `+-${widths.map((width) => '-'.repeat(width)).join('-+-')}-+`
  const headerLine = `| ${headers.map((header, i) => padCell(header, widths[i] ?? header.length)).join(' | ')} |`

  console.log('Resumo')
  console.log(border)
  console.log(headerLine)
  console.log(border)

  for (const row of tableRows) {
    console.log(`| ${row.map((value, i) => padCell(value, widths[i] ?? value.length)).join(' | ')} |`)
  }

  console.log(border)
}

const results: ResultRow[] = []

results.push(
  runTests({
    problemName: 'BF1',
    problemFactory: () => new BohachevskyProblem(),
    tolerance: 0.01,
  }),
)

results.push(
  runTests({
    problemName: 'ACK',
    problemFactory: () => new AckleyProblem(),
    tolerance: 0.01,
  }),
)

printResults(results)