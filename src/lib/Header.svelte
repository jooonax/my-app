<script lang="ts">
    import { onMount } from 'svelte';

    export let div;
    export let p;
    let r;

    onMount(() => {
        r = document.querySelector(':root');
        div = document.getElementById("bg");
        p = document.getElementById("bgName");
        div.style.height = innerHeight-2 + "px";
    });


</script>

<style lang="scss">
    /* Style the header */
    $dark: #666;
    @use "colors";

    div {
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      padding: 1px;
      background-color: colors.$dark;
      background-image: url("/BgImage1.jpg");
      min-height: 100%;
    }

    h2 {
      text-align: center;
      font-size: 65px;
      color: white;
      margin-bottom: 0px;
    }
    h3 {
      text-align: center;
      font-size: 30px;
      font-weight: lighter;
      font-style: italic;
      color: white;
      margin-top: 0px;
    }

    .center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

</style>


<div id="bg" class="center">
    <h2>Hey There</h2>
    <h3 id="bgName">Speik Steiermark</h3>
</div>
