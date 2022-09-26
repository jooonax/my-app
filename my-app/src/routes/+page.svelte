
<script lang="ts">
    import {debug} from "svelte/internal";
    import School from "/src/lib/Articels/School.svelte";
    import About from "/src/lib/Articels/About.svelte";

    export let active = 0;
    export let classes = ["","",""];
    classes[active] = "active";

    $: if(classes[active] === "") {
        classes = ["","",""];
        classes[active] = "active";
    }

    

    let number = 0;
    $: console.log(number);
    let navbar = ["","",""];

</script>

<style lang="scss">
  @use "../lib/colors";

    /* Create two columns/boxes that floats next to each other */
    nav {
        float: left;
        width: 100%;
        background: #ccc;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }
    li {
        float: left;
        margin: 8px;
        border-radius: 10px;
    }
    li p {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 20px;
        margin: 0px;
        text-decoration: none;
        border-radius: 10px;
    }

    /* Change the link color to #111 (black) on hover */
    li p:hover {
        background-color: colors.$black;
    }
    .active {
        background-color: colors.$theme;
    }
</style>

<nav>
    <ul>
        <li class="{classes[0]}"><p on:click={() => {active = 0;}}>About Me</p></li>
        <li class="{classes[1]}"><p on:click={() => {active = 1;}}>School</p></li>
        <li class="{classes[2]}"><p on:click={() => {active = 2;}}>Virus</p></li>
    </ul>
</nav>


{#if active === 0}
    <About/>
{:else if active === 1}
    <School/>
{/if}