export class Demographic {
  constructor(geneticFactors, lifestyleNegatives, lifestylePositives) {
    this.geneticFactors = geneticFactors;
    this.lifestyleNegatives = lifestyleNegatives;
    this.lifestylePositives = lifestylePositives;
  }
  longevityAdjuster() {
    return 79;
  }
}

const myDemographic = new Demographic(0, 0, 0);