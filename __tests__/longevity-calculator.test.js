import { Demographic } from '../src/js/longevity-calculator';
import { longevityAdjuster } from '../src/js/longevity-calculator';

describe('Demographic', () => {
  const myDemographic = new Demographic(3, 2, 5);
  test('Should create a class with inputted demographic information', () => {
    expect(myDemographic.geneticFactors).toBe(3);
    expect(myDemographic.lifestyleNegatives).toBe(2);
    expect(myDemographic.lifestylePositives).toBe(5);
  });
});

describe('longevityAdjuster', () => {
  const myDemographic = new Demographic(0, 0, 0);
  test('Should return standard US life expectantcy when no longevity factors are inputted', () => {
    expect(longevityAdjuster(myDemographic)).toBe(79);
  });
});