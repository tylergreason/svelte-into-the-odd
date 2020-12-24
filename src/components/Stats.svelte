<script>
    import { player } from '../stores/stores';

    const rollDice =(sides = 20, qty = 1, mod = 0) => { 
        let total = 0;
        for (let i = 0; i < qty; i++) {
            total += Math.floor(Math.random()*sides) + 1;
        }
        return total;
    }

    const rollStats = stats => {
        stats.str = rollDice(6, 3);
        stats.dex = rollDice(6, 3);
        stats.wil = rollDice(6, 3);
        stats.hp = rollDice(6);
        stats.money = rollDice(6, 3);
        $player.playerItems = [];
        return stats;
    }

    let stats = {
        hp: 0,
        str: 0,
        dex: 0,
        wil: 0,
        money: 0
    };
    const statsKeys = Object.keys(stats);
    stats = rollStats($player.stats);
</script>

<style type="text/scss">
    .container {
        width: 150px;
        display: flex;
        flex-flow: column;
        h3 {
            justify-self: flex-start;
            align-self: center;
            margin: 0;
        }
    }

    .stat-container {
        display: flex;
        flex-flow: row;
        justify-content: space-between;

    div:first-of-type {
        text-transform: uppercase;
        color: black;
    }
    }
    
    .container button {
        align-self: center;
    }
</style>

<div class="container">
    <h3>Stats</h3>
    {#each statsKeys as statKey}
    <div class="stat-container">
        <div>{statKey}:</div><div>{$player.stats[statKey]}</div>
    </div>
    {/each}
    <button on:click={() => $player.stats = rollStats($player.stats)}>Roll Stats</button>
</div>