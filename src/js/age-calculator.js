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
  if (animal === "dog-years") {
    age *= 8;
  } else if (animal === "mayfly-lifetimes") {
    age *= 105120;
  }
  const ageInt = parseInt(age);
  return parseFloat((ageInt/planets.get(planet)).toFixed(2));
}