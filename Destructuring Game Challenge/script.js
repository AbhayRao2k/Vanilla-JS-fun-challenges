const character = {
  name: "Ezra",
  class: "Warrior",
  stats: {
    health: 100,
    attack: 20,
    defense: 15,
  },
  abilities: ["Slash", "Shield Block", "Berserk", "Charge", "Power Strike", "Whirlwind", "Lambo", "Huracan"]
};

/*
const { name, class: characterClass, stats: {health, attack}, abilities: [, two, , four, ...exclude] } = character;
const last = exclude.pop()
console.log(`${two}, ${four} ${last}`)
console.log(`${name} ${characterClass} ${health} ${attack} ${remaining}`)
*/

const { abilities } = character;

// Keep only odd-indexed abilities (1-based indexing)
const evenIndexedAbilities = abilities.filter((val, index) => (index + 1) % 2 === 0);

console.log(evenIndexedAbilities.join(", "));