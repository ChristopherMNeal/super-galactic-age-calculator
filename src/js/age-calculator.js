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
  return parseFloat((age/planets.get(planet)).toFixed(2));
}