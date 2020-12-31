<script>
    import { rollHistory } from '../stores/stores';
</script>

<style type="text/scss">
    li {
        color: white;
    }
</style>


<div>
    <h1>Roll History</h1>
    <ul>
        {#each $rollHistory as roll}
            <li>{roll}</li>
        {/each}
    </ul>
</div>