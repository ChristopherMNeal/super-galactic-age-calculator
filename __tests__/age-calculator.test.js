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
  test('Should return age on each other planet when recieving age on Earth', () => {
    expect(calculator(age, "Mercury")).toBe(141.67);
    expect(calculator(age, "Venus")).toBe(54.84);
    expect(calculator(age, "Mars")).toBe(18.09);
    expect(calculator(age, "Jupiter")).toBe(2.87);
  });
  test('Should return age in dog earth years when recieveing age on Earth in dog years', () => {
    expect(calculator(age, "Earth", "dog-years")).toBe(272);
  });
});

