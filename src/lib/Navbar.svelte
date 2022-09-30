<script lang="ts">
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let navIndex = 0;
    export let themeID = 0;
    export let updateStyle = () => {}
    export let themes: string[];



</script>

<style lang="scss">
    @use "colors";

    /* Create two columns/boxes that floats next to each other */
    nav {
        float: left;
        width: 100%;
        position: fixed;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: colors.$black;
    }
    li {
        float: left;
        margin: 5px;
        border-radius: 10px;
    }
    li p {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        margin: 0px;
        text-decoration: none;
        border-radius: 10px;
    }

    /* Change the link color to #111 (black) on hover */
    li p:hover {
        background-color: colors.$dark;
    }
    .active {
        background-color: colors.$theme;
    }
    li select {
      border-radius: 50%;
      width: 30px;
      height: 30px;
      margin: 8px;

      -webkit-appearance: none;
      -moz-appearance: none;
      text-indent: 1px;
      text-overflow: '';
    }
    .center {
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>

<nav>
    <ul>
        <li><p on:click={() => {navIndex = 0;}}>Home</p></li>
        <li><p on:click={() => {navIndex = 1;}}>Void</p></li>
        <li><p on:click={() => {navIndex = 2;}}>Space</p></li>

        <li style="float: right;">
            <select style="background-color: {themes[themeID]}" bind:value="{themeID}" on:change="{updateStyle}">
                {#each themes as theme, i}
                    <option style="background-color: {themes[i]}" value="{i}"></option>
                {/each}
            </select>
        </li>
    </ul>
</nav>