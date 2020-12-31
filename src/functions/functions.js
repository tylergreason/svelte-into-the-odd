import { player } from "../stores/stores";

export const rollDice = (sides = 20, qty = 1, mod = 0) => {
  let total = 0;
  for (let i = 0; i < qty; i++) {
    total += Math.floor(Math.random() * sides) + 1;
  }
  return total;
};

export function rollStats(player) {
  player.stats.str = rollDice(6, 3);
  player.stats.dex = rollDice(6, 3);
  player.stats.wil = rollDice(6, 3);
  player.stats.hp = rollDice(6);
  player.stats.currentHp = stats.hp;
  player.stats.money = rollDice(6, 3);
  player.playerItems = [];
}

let stats = {
  hp: 0,
  str: 0,
  dex: 0,
  wil: 0,
  money: 0,
};
