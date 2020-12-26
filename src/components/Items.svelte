<script>
    import { player } from '../stores/stores';
    import { intoTheOddItems } from '../data/itemLists';

    function itemClick(e) {
        let item = JSON.parse(e.target.dataset.item);
        // find the id of the last item in the player items list. If it doesn't exist, make it = 0.
        let id;
        if (!!$player.playerItems[$player.playerItems.length -1]) {
            id = $player.playerItems[$player.playerItems.length -1].id +1 || 0;
        } else {
            id = 0;
        }
        item.id = id;
        if ($player.stats.money - item.cost >= 0) {
            $player.stats.money -= item.cost;
            $player.playerItems.push(item);
        }
    };

    function canAfford(funds, cost) {
        return (funds - cost) >= 0 ? 'able' : 'unable'
    }
    
</script>

<style type="text/scss">
    .purchase-item {
        &.able {
            color: black;
            transition: 0.2s;
        }
        
        &.unable {
            transition: 0.2s;
            color: rgb(122, 122, 122);
            text-decoration: line-through;
        }
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
                    class="purchase-item {canAfford($player.stats.money, item.cost)}"
                >{item.name}</div>
            {/each}
        {/each}

    </ul>
</div>