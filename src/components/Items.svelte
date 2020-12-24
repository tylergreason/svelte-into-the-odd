<script>
    import { player } from '../stores/stores';
    import { intoTheOddItems } from '../data/itemLists';

    function itemClick(e) {
        console.log(e.target);
        let item = JSON.parse(e.target.dataset.item);
        if ($player.stats.money - item.cost >= 0) {
            $player.stats.money -= item.cost;
            $player.playerItems.push(item);
        }
    };

    function canAfford(funds, cost) {
        return (funds - cost) >= 0 ? 'able' : 'unable'
    }
    
</script>

<style>
    .able {
        color: green;
    }

    .unable {
        color: darkred;
    }
</style>

<div>
    <h3>Items</h3>
    <ul>
        {#each intoTheOddItems as category}
                <h4>{category.category} - ${category.items[0].cost}, {category.items[0].damage} damage</h4>
            {#each category.items as item}
                <div
                    on:click={itemClick} data-item={JSON.stringify(item)}
                    class={canAfford($player.stats.money, item.cost)}
                >{item.name}</div>
            {/each}
        {/each}

    </ul>
</div>