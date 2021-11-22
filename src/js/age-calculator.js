export const planets = new Map(
  [
    ["Earth", 1],
    ["Mercury", .24],
    ["Venus", .62],
    ["Mars", 1.88],
    ["Jupiter", 11.86]
  ]
);

export function calculator(age, planet) {
  const ageInt = parseInt(age);
  return parseFloat((ageInt/planets.get(planet)).toFixed(2));
}

export function animalConverter(age, animal) {
  if (animal === "dog-years") {
    return age *= 8;
  } else if (animal === "mayfly-lifetimes") {
    return age *= 105120;
  } else {
    return age;
  }
}

export function remainingYears(animal, age, lifeExpectancy) {
  const yearsLeft = lifeExpectancy - age;
  let animalYearsLeft = animalConverter(yearsLeft, animal);
  if (age > lifeExpectancy) {
    return animalYearsLeft *= -1;
  } else {
    return animalYearsLeft;
  }
}

export function getSunComparison(age) {
  return parseInt(4603000000/age);
}