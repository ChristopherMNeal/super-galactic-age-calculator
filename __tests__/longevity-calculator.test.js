import { Demographic } from '../src/js/longevity-calculator';

describe('Demographic', () => {
  const myDemographic = new Demographic(3, 2, 5);
  test('Should create a class with inputted demographic information', () => {
    expect(myDemographic.geneticFactors).toBe(3);
    expect(myDemographic.lifestyleNegatives).toBe(2);
    expect(myDemographic.lifestylePositives).toBe(5);
  });
  test('Should return standard US life expectancy when no longevity factors are inputted', () => {
    const myDemographic = new Demographic(0, 0, 0);
    expect(myDemographic.longevityAdjuster()).toBe(79);
  });
  // test('Should return adjusted US life expectancy when one genetic factor is inputted.', () => {
  //   const myDemographic = new Demographic(1, 0, 0);
  //   expect(longevityAdjuster(myDemographic)).toBe(76.63);
  // });
});