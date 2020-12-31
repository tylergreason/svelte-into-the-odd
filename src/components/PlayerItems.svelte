<script>
    import { player } from '../stores/stores';
    function itemClick(item) {
        $player.playerItems = $player.playerItems.filter(i => JSON.stringify(i) !== JSON.stringify(item));
        $player.stats.money += item.cost;
    }
</script>

<style type="text/scss">
    div {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: flex-start;

        h3 {
            padding: 0;
            margin: 0;
        }
    }
</style>

<div>
    <h3 class="title">Player Items</h3>
    <ul>
        {#each $player.playerItems as item}
            <li 
               on:click={() => itemClick(item)}
                data-item={JSON.stringify(item)}>
                {item.name}{!!item.damage ? ', ' + item.damage : ''} (${item.cost})
            </li>
        {/each}
    </ul>
</div>