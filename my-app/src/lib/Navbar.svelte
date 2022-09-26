<script lang="ts">
    import { onMount } from 'svelte';
    export let div;
    export let p;
    let themeID = 0;
    let themes = ["#04AA6D", "#33b5e5", "#ff4444"];

    let r;
    onMount(() => {
        r = document.querySelector(':root');
    });
    const updateStyle = () => {
        r.style.setProperty('--theme', themes[themeID]);
        console.log(themeID);
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
        }
    }
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
        <li><p>Home</p></li>
        <li><p>Void</p></li>
        <li><p>Space</p></li>

        <li style="float: right;">
            <select style="background-color: {themes[themeID]}" bind:value="{themeID}" on:change="{updateStyle}">
                {#each themes as theme, i}
                    <option style="background-color: {themes[i]}" value="{i}"></option>
                {/each}
            </select>
        </li>
    </ul>
</nav>