export const planets = new Map(
  [
    ["Earth", 1],
    ["Mercury", .24],
    ["Venus", .62],
    ["Mars", 1.88],
    ["Jupiter", 11.86]
  ]
);

export function calculator(age, planet, animal) {
  let planetMultiplyer = planets.get(planet);
  if (animal === "dog-years") {
    // return parseFloat(((age/planetMultiplyer) * 8).toFixed(2));
  // } else if (animal === "mayfly-lifetimes") {
  //   return parseFloat(((age/planetMultiplyer) * 105120).toFixed(2));
  } else {
    return parseFloat(((age/planetMultiplyer)).toFixed(2));
  }
}

export function remainingYears(age, lifeExpectancy) {
  let yearsLeft = lifeExpectancy - age;
  if (age > lifeExpectancy) {
    return yearsLeft *= -1;
  } else {
    return yearsLeft;
  }
}

export function getSunComparison(age) {
  return parseInt(4603000000/age);
}