<script>
    import Home from "./+page.svelte";
    import Header from "../lib/Header.svelte";
    import Navbar from "../lib/Navbar.svelte";
    import Footer from "../lib/Footer.svelte";
    import {onMount} from "svelte";

    export const prerender = true;
    let div;
    let p;
    let pageId = 0;


    let navIndex = 0;
    let themeID = 0;
    let themes = ["#04AA6D", "#33b5e5", "#ff4444", "#ff9244"];

    let r;
    onMount(() => {
        r = document.querySelector(':root');
        if(localStorage.getItem("themeID") != null) {
            themeID = parseInt(localStorage.getItem("themeID"));
        } else {
            themeID = 0;
        }
    });
    const updateStyle = () => {
        console.log("hhhh");
        r.style.setProperty('--theme', themes[themeID]);
        localStorage.setItem("themeID", String(themeID));
        switch (themeID) {
            case 0:
                div.style.backgroundImage = "url(/BgImage1.jpg)";
                p.innerText = "Speik Steiermark";
                break;
            case 1:
                div.style.backgroundImage = "url(/BgImage2.jpg)";
                p.innerText = "Kitzbühl Panoramaalm";
                break;
            case 2:
                div.style.backgroundImage = "url(/BgImage3.jpg)";
                p.innerText = "Mein Daumen";
                break;
            case 3:
                div.style.backgroundImage = "url(/BgImage4.jpg)";
                p.innerText = "Picture from Internet";
                break;
        }
    }
</script>

<style>


    /* Clear floats after the columns */
    section::after {
        content: "";
        display: table;
        clear: both;
    }


</style>

<Navbar bind:themeID={themeID} navIndex="{navIndex}" updateStyle={updateStyle} themes="{themes}"/>

<Header bind:div={div} bind:p={p}/>

<section>
    {#if pageId == 0}
        <Home/>
    {/if}
</section>

<Footer/>

