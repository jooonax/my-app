<script lang="ts">
    import {onMount} from "svelte";

    export let bars = [{
        title:"Test",
        deg:200
    }];

</script>

<style lang="scss">
  @use "../../colors";
  $progress: 100;
  body {
    display: grid;
    height: 100vh;
    place-items: center;
    background: #243b47;
  }

  .dashboard {
    display: flex;
    justify-content: center;
    background-color: colors.$dark;
  }

  svg {
    width: 114px;
    height: 174px;
    margin: 1em;
  }


  .bg {
    fill: none;
    stroke-width: 10px;
    stroke: colors.$grey;
  }

  [class^="meter"] {
    fill: none;
    stroke-width: 10px;
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;

  }

  .meter {
    stroke-dasharray: 360;
    stroke-dashoffset: 100;
    stroke: colors.$theme;
    animation: progress 1s ease-out;
  }
  @media (max-width: 700px) {
    .dashboard {
      display: block;
      background-color: colors.$dark;
    }
  }
  /*@keyframes progress {
    from {
      stroke-dashoffset: 360;
    }
    to {
      stroke-dashoffset: 100;
    }
  }*/

</style>

<div class="dashboard">
    {#each bars as bar, i}
        <svg>
            <text x="5" y="17" fill="white">{bar.title}</text>
            <circle class="bg" cx="57" cy="87" r="52" />
            <circle class="meter" style="stroke-dashoffset: {bar.deg}" cx="57" cy="87" r="52" />
        </svg>
    {/each}
</div>