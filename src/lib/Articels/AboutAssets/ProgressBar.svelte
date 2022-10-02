<script lang="ts">
    export let progress;
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
  }

  svg {
    width: 114px;
    height: 114px;
    margin: 1em;
  }

  .bg {
    fill: none;
    stroke-width: 10px;
    stroke: #1A2C34;
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

  @keyframes progress {
    from {
      stroke-dashoffset: 360;
    }
    to {
      stroke-dashoffset: 100;
    }
  }

</style>

<div class="dashboard">
    <svg>
        <circle class="bg" cx="57" cy="57" r="52" />
        <circle class="meter" cx="57" cy="57" r="52" />
    </svg>
</div>