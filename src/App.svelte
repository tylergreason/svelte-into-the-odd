<script>
    import { onMount, afterUpdate } from 'svelte';
    import Stats from './components/Stats.svelte';
    import Items from './components/Items.svelte';
    import PlayerItems from './components/PlayerItems.svelte';
    import Stat from './components/Stat.svelte';
    import RollHistory from './components/RollHistory.svelte';
    import CustomPlayerItems from './components/CustomPlayerItems.svelte';


    // afterUpdate(() => console.log('updated'));
    const dice = [3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 30];
    const dices = dice.map(d => ({sides: d, result: 0}))
    const rollDice =(sides = 20, qty = 1, mod = 0) => { 
        let total = 0;
        for (let i = 0; i < qty; i++) {
            total += Math.floor(Math.random()*sides) + 1;
        }
        return total;
    }
</script>

<style type="text/scss">
    @font-face {
        font-family: "coventryGardenNFFont";
        src: url("/assets/fonts/coventrygarden/CoventryGardenNF.ttf");
    }
    :global(body){
        // @import url('https://fonts.googleapis.com/css2?family=Goudy+Bookletter+1911&display=swap');
        $rgbValue: 10;
        background-color: rgb($rgbValue,$rgbValue,$rgbValue);
        color: rgb(211, 187, 50);
    }
    :global(.title){
        font-family: 'coventryGardenNFFont', serif;
    }
    .container {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }

    .player-container {
        display: flex;
        justify-content: space-between;

        & :global(> div) {
            min-width: 200px;
        }
    }
</style>

<div class="container">
    <h1 class="title">Into the Odd Character Generator</h1>
    <input type="text" placeholder="Name">
    <div class="player-container">
        <Stat stat="str"></Stat>
        <Stat stat="dex"></Stat>
        <Stat stat="wil"></Stat>
        <CustomPlayerItems></CustomPlayerItems>
    </div>
        <!-- <Items></Items> -->
        <RollHistory></RollHistory>
</div>