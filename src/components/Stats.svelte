<script>
    import { player } from '../stores/stores';

    const rollDice =(sides = 20, qty = 1, mod = 0) => { 
        let total = 0;
        for (let i = 0; i < qty; i++) {
            total += Math.floor(Math.random()*sides) + 1;
        }
        return total;
    }

    const fadeTime = 200;

    const rollStats = stats => {
        const valueElements = Array.from(document.getElementsByClassName('stat-value'));
        valueElements.forEach(ele => ele.classList.add('generating'));
        window.setTimeout(() => {
            valueElements.forEach(ele => ele.classList.remove('generating'));
            stats.str = rollDice(6, 3);
            stats.dex = rollDice(6, 3);
            stats.wil = rollDice(6, 3);
            stats.hp = rollDice(6);
            stats.currentHp = stats.hp;
            stats.money = rollDice(6, 3);
            $player.playerItems = [];
        }, 200);
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
        align-items: center;

        &.money {
            input::after {
                content: '$';
            }   
        }
    .stat-name {
        // text-transform: uppercase;
        // color: black;
        }

    .stat-value {
        max-width: 50px;
        opacity: 1;
        transition: .2s;
        border: none;
    }

    :global(.stat-value.generating) {
            opacity: 0; 
            transition: .2s;
        }
    }
    
    .container button {
        align-self: center;
    }
</style>

<div class="container">
    <h3 class="title">Stats</h3>

    <div class="stat-container hp">
        <div class="stat-name title">hp</div>
        <!-- <div>{$player.stats.currentHp}</div> -->
        <input type="number" class="stat-value" bind:value={$player.stats.currentHp}> 
        /
        <div>{$player.stats.hp}</div>
    </div>

    <div class="stat-container str">
        <div class="stat-name title">str</div>
        <input type="number" class="stat-value" bind:value={$player.stats.str}>
    </div>

    <div class="stat-container dex">
        <div class="stat-name title">dex</div>
        <input type="number" class="stat-value" bind:value={$player.stats.dex}>
    </div>

    <div class="stat-container wil">
        <div class="stat-name title">wil</div>
        <input type="number" class="stat-value" bind:value={$player.stats.wil}>
    </div>

    <div class="stat-container money">
        <div class="stat-name title">money</div>
        <input type="number" class="stat-value" bind:value={$player.stats.money}>
    </div>

    <!-- {#each statsKeys as statKey}
    <div class="stat-container">
        <div class="stat-name title">{statKey}:</div>
        <input type="number" class="stat-value" bind:value={$player.stats[statKey]}>
    </div>
    {/each} -->
    <button on:click={() => $player.stats = rollStats($player.stats)}>Roll Stats</button>
</div>