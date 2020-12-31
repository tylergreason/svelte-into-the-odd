import { writable } from "svelte/store";

let stats = {
  hp: 0,
  currentHp: 0,
  str: 0,
  dex: 0,
  wil: 0,
  money: 0,
};

let playerItems = [];

export const player = writable({
  stats: stats,
  playerItems: playerItems,
});

export const rollHistory = writable(["a"]);
