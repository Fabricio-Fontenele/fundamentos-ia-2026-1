import type { Individual } from '@src/domain/Individual'
import type { ISelectionStrategy } from '@src/domain/interfaces'

export class TournamentSelection implements ISelectionStrategy {
  constructor(private tournamentSize: number = 3) {}

  select(population: Individual[]): Individual[] {
    const parent1 = this.runTournament(population)
    const parent2 = this.runTournament(population)

    return [parent1, parent2]
  }

  private runTournament(population: Individual[]): Individual {
    let bestContender: Individual | null = null

    for (let i = 0; i < this.tournamentSize; i++) {
      const randomIndex = Math.floor(Math.random() * population.length)
      const contender = population[randomIndex]!

      if (bestContender === null || contender.fitness < bestContender.fitness) {
        bestContender = contender
      }
    }

    return bestContender!
  }
}
