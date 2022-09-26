<script>
    import Page from "./+page.svelte";
    import Header from "../lib/Header.svelte";
    import Navbar from "../lib/Navbar.svelte";
    import Footer from "../lib/Footer.svelte";

    let div;
    let p;
</script>

<style>


    /* Clear floats after the columns */
    section::after {
        content: "";
        display: table;
        clear: both;
    }


</style>

<Navbar div={div} p="{p}"/>

<Header bind:div={div} bind:p={p}/>

<section>
    <Page/>
</section>

<Footer/>

