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
  const age = 34;
  test('Should return age on Earth when recieveing age on Earth', () => {
    expect(calculator(age, "Earth")).toBe(34);
  });
  test('Should return age on Mercury when recieving age on Earth', () => {
    expect(calculator(age, "Mercury")).toBe(142);
    expect(calculator(age, "Venus")).toBe(55);
    expect(calculator(age, "Mars")).toBe(18);
    expect(calculator(age, "Jupiter")).toBe(3);
  });
});