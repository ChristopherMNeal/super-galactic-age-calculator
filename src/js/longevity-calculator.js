export class Demographic {
  constructor(geneticFactors, lifestyleNegatives, lifestylePositives) {
    this.geneticFactors = geneticFactors;
    this.lifestyleNegatives = lifestyleNegatives;
    this.lifestylePositives = lifestylePositives;
  }
  longevityAdjuster() {
    let lifeExpectancy = 79;
    lifeExpectancy *= ((100 - (this.geneticFactors * 3))/100);
    return lifeExpectancy;
  }
}