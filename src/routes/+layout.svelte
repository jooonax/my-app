<script>
    import Home from "./+page.svelte";
    import Header from "../lib/Header.svelte";
    import Navbar from "../lib/Navbar.svelte";
    import Footer from "../lib/Footer.svelte";

    export const prerender = true;
    let div;
    let p;
    let pageId;
</script>

<style>


    /* Clear floats after the columns */
    section::after {
        content: "";
        display: table;
        clear: both;
    }


</style>

<Navbar div={div} p="{p}" bind:navIndex={pageId}/>

<Header bind:div={div} bind:p={p}/>

<section>
    {#if pageId == 0}
        <Home/>
    {/if}
</section>

<Footer/>

