import { Demographic } from '../src/js/longevity-calculator';

describe('demographic', () => {
  const myDemographic = new Demographic(3, 2, 5);
  test('Should create a class with inputted demographic information', () => {
    expect(myDemographic.geneticFactors).toBe(3);
    expect(myDemographic.lifestyleNegatives).toBe(2);
    expect(myDemographic.lifestylePositives).toBe(5);
  });
});

