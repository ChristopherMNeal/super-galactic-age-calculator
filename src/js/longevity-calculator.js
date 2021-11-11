export class Demographic {
  constructor(geneticFactors, lifestyleNegatives, lifestylePositives) {
    this.geneticFactors = geneticFactors;
    this.lifestyleNegatives = lifestyleNegatives;
    this.lifestylePositives = lifestylePositives;
  }
}

export function longevityAdjuster(demographicClass) {
  return 79;
}