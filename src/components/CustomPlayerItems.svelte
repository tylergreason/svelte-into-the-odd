<script>
    import { player } from '../stores/stores';

    function addItem(e) {
        e.preventDefault();
        let id;
        id = $player?.playerItems[$player.playerItems?.length -1]?.id + 1 || 0;
        let value = e.target.firstChild.value;
        $player.playerItems = [... $player.playerItems, {value: value, id: id}];
        e.target.firstChild.value = '';
    }

    function removeItem(e) {
        const id = e.target.dataset.id;
        console.log(id);
        $player.playerItems = $player.playerItems.filter(item => item.id !== +id);
    }
</script>

<div>
    <h3>Player Items</h3>
    <ul>
        {#each $player.playerItems as item}
            <button on:click={removeItem} data-id={item.id}>X</button><li>{item.value}</li>
        {/each}   
    </ul>
    <form on:submit|preventDefault={addItem}>  
        <input type="text" name="item">
        <!-- <input type="submit" for="item"/> -->
        <button type="submit">Add</button>
    </form>
</div>