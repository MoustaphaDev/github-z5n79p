<script lang="ts">
    let count = 0;
    const add = () => count++;
    const subtract = () => count--;
</script>

<div class="counter">
    Svelte counter
    <button on:click={subtract}>-</button>
    {count}
    <button on:click={add}>+</button>
</div>
