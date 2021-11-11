export class Demographic {
  constructor(geneticFactors, lifestyleNegatives, lifestylePositives) {
    this.geneticFactors = geneticFactors;
    this.lifestyleNegatives = lifestyleNegatives;
    this.lifestylePositives = lifestylePositives;
  }
  longevityAdjuster() {
    let lifeExpectancy = 79;
    const longevityPercents = this.geneticFactors * 3 + this.lifestyleNegatives * 2 - this.lifestylePositives * 2.5;
    lifeExpectancy *= ((100 - (longevityPercents))/100);
    return parseFloat((lifeExpectancy).toFixed(2));
  }
}