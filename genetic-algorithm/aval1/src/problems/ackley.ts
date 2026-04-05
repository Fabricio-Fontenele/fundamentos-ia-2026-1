import type { IFitnessFunction } from "../domain/interfaces";

export class AckleyProblem implements IFitnessFunction {
  public readonly lowerBound: number = -30;
  public readonly upperBound: number = 30;
  public readonly dimension: number = 10;

  public calculateFitness(genes: number[]): number {
    this.ensureExpectedDimension(genes);

    let sumSq = 0;
    let sumCos = 0;

    for (const gene of genes) {
      sumSq += gene ** 2;
      sumCos += Math.cos(2 * Math.PI * gene);
    }

    const term1 = -20 * Math.exp(-0.2 * Math.sqrt(sumSq / this.dimension));
    const term2 = -Math.exp(sumCos / this.dimension);

    return term1 + term2 + 20 + Math.E;
  }

  private ensureExpectedDimension(genes: number[]): void {
    if (genes.length !== this.dimension) {
      throw new Error(
        `Ackley problem expects exactly ${this.dimension} genes, but received ${genes.length}.`,
      );
    }
  }
}
