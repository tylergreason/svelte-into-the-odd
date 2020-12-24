let itemString =
  "EquipmentOne-Hundred Pennies (p) make a Shilling (s). One-hundred Shillings make a Guilder (g). Unarmed Attack: d4Damage. Hand Weapon (2s, one hand): d6Damage. Dagger, bow, pitchfork, sword, pistol, club etc. Field Weapon (10s, two hands): d8Damage. Musket, pistol brace, sword and dagger, halberd, etc.Noble Weapon (30s, one hand): d8Damage. Finely made sabre, duelling pistol, rapier, etc.Heavy Gun (1g, two hands) d10Damage. Cannot move and fire. Elephant gun, long rifle. etc.Shield Armour (10s, one hand): Armour 1. Outdated armour requiring a shield (included) to be effective.Modern Armour (50s): Armour 1. Breastplate and helm. Tools (1s each): Crowbar, Saw, Glue, Magnifying Glass, Manacles, Animal Trap, Lockpicks, Mirror, Writing Set, Fishing Pole, Shovel, Grappling Hook, Collapsible Pole, 20ft Rope, Spikes, etc. Luxuries (1g): Clockwork Items, Thermometer, Elaborate Clothes, Jewellery, Ornaments, Spyglass, etc. Flashbang (10s): Momentarily blinds anyone that fails a dex save. Fire Oil (10s): Sets an area alight. All inside take d6Damage each round. Bomb (20s): d12Damage to all within the blast. Rocket (20s): d12Damage and a colourful explosion. Smoke-bomb (10s): Fills a room with smoke when lit. Attacks through the smoke are Impaired. Poison (20s): Lose d20str if consumed. Ether (10s): Inhaled, str save or pass out for an hour.Acid (10s): d6Damage, burns through most materials.Antitoxin (10s): Neutralises most toxins. Board (per week): Bed in a Dormitory (1s), Room in a Boarding House (10s), Town House (20s). Food and Drink: Bread and Broth (10p), Bottle of Gin or Rum (50p), Pie and Wine (50p), Fine Meal (1s).Beasts: Mule or Llama (5s) to Horse (1g). +1 to rider’s Armour. Mutt (5s) to Hound (50s), strd10, d6 Bite. Birds: From parrots and ravens (10s, strd6, d4 claws.) to kestrels and hawks (50s, d6 claws)";

function uppercaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function createItemList(array, damage, cost, category) {
  const items = array.map((ele) => {
    return {
      name: uppercaseFirstLetter(ele),
      cost: cost,
      damage: damage.toUpperCase(),
    };
  });
  return {
    category: category,
    items: items,
  };
}

export const intoTheOddItems = [];

const handWeapons = createItemList(
  "Dagger, bow, pitchfork, sword, pistol, club".split(", "),
  "d6",
  2,
  "Hand Weapons"
);

const fieldWeapons = createItemList(
  "Musket, pistol brace, sword and dagger, halberd,".split(", "),
  "d8",
  10,
  "Field Weapons"
);

const nobleWeapons = createItemList(
  "Finely made sabre, duelling pistol, rapier,".split(", "),
  "d8",
  30,
  "Noble Weapons"
);

intoTheOddItems.push(handWeapons, fieldWeapons, nobleWeapons);
