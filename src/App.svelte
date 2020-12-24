<script>
    import { onMount, afterUpdate } from 'svelte';
    import Stats from './components/Stats.svelte';
    import Items from './components/Items.svelte';
    import PlayerItems from './components/PlayerItems.svelte';

	let name = 'world';
    const developer = 'Tyler';
    function clicked(){console.log('clicked')};
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
    .container {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }

    .player-container {
        display: flex;
        justify-content: space-between;
    }
</style>

<div class="container">
    <h1>WELCOME</h1>
    <input type="text" placeholder="Name">
    <div class="player-container">
        <Stats></Stats>
        <PlayerItems></PlayerItems>
    </div>
        <Items></Items>
</div>