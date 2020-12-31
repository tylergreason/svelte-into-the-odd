<script>
    import { player, rollHistory } from '../stores/stores';
    import { rollDice, rollStats } from '../functions/functions'
    export let stat;

    let time;
    let interval;
    function statClickStart(first, second) {
        time = Date.now();
        interval = setInterval(modifyStat, 500, first, second);
    }

    function statClickEnd(stat){
        clearInterval(interval);
    }

    function modifyStat(stat, value) {
        $player.stats[`${stat}`] += value;
    }

    function testStat(stat) {
        const result = rollDice();
        if (result <= $player.stats[`${stat}`]) {
            $rollHistory = [... $rollHistory, 'Success! ' + result + ', ' + $player.stats[`${stat}`]]
        } else {
            $rollHistory = [... $rollHistory, 'Failure: ' + result + ', ' + $player.stats[`${stat}`]]
        }
        // $rollHistory.push('Success! ' + result + ', ' + $player.stats[`${stat}`])
    }



    console.log($player.stats);

    rollStats($player);
</script>

<style type="text/scss">

</style>

<div>
    <button 
        on:mousedown={() => statClickStart(stat, 10)}
        on:mouseup={() => statClickEnd(stat)}
        on:click={() => modifyStat(stat, 1)}
    >&lt</button>
    {stat}: {$player.stats[`${stat}`]}
    <button 
        on:mousedown={() => statClickStart(stat, -10)}
        on:mouseup={() => statClickEnd(stat)}
        on:click={() => modifyStat(stat, -1)}
    >&gt</button>
    <button on:click={() => testStat(stat)}>test</button>
</div>
