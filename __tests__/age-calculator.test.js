import { planets } from '../src/js/age-calculator.js';
import { calculator } from '../src/js/age-calculator';

describe ('planets', () => {
  test('Should return information about each planet', () => {
    expect(planets.get("Earth")).toBe(1);
    expect(planets.get("Mercury")).toBe(.24);
    expect(planets.get("Venus")).toBe(.62);
    expect(planets.get("Mars")).toBe(1.88);
    expect(planets.get("Jupiter")).toBe(11.86);
  });
});

describe ('calculator', () => {
  test('Should return age on earth when recieveing age on earth', () => {
    const age = 34;
    expect(calculator(age, "Earth")).toBe(34);
  });
});