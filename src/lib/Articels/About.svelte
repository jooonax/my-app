<script lang="ts">
  import Timeline from "./AboutAssets/Timeline.svelte";
  import ProgressBar from "./AboutAssets/ProgressBar.svelte";
  const bars = [{
      title: "Programming",
      deg: 100
    }, {
      title: "Football",
      deg: 110
    }, {
      title: "English",
      deg: 160
    }, {
      title: "Spanish",
      deg: 330
    }
  ]
</script>

<style lang="scss">
  @use "../colors";

  * {
    font-family: "Lato", sans-serif;
    box-sizing: border-box;
  }
  article {
    float: left;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: colors.$light;
  }
  article>* {
    margin-right: 25%;
    margin-left: 25%;
  }
  .fiftee {
    width: 50%;
  }
  /* Responsive layout - makes the two columns/boxes stack on top of each other instead of next to each other, on small screens */
  @media (max-width: 720px) {
    article>* {
      margin-right: 5%;
      margin-left: 5%;
    }
    .fiftee {
      width: 100%;
    }
  }
  @media (max-width: 900px) {
    article {
      width: 100%;
      height: auto;
    }
    article>* {
      margin-right: 10%;
      margin-left: 10%;
    }
  }
  h1, h2, h3, p {
    text-align: center;
  }
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 16px;
    font-style: italic;
    color: colors.$grey;
  }
  img {
    margin: 0px;
    opacity: 80%;
    transition: 200ms;
  }
  img:hover {
    opacity: 100%;
  }
  /* Clear floats after the columns */
  section::after {
    content: "";
    display: table;
    clear: both;
  }

</style>

<article>
  <h1>About Me</h1>
  <h3>upcoming Gamedev</h3>
  <p>
    Welcome to my Website! by the time writing this, im a 15 year old boy living in the south of the beautiful country Austria in Europe.
    Currently im studying computer science at HTBLA Kaindorf. There I alos learnt how to make websites like this one. This website by the way was not created for school purposes.
    In my freetime I like to create games in unity, from which sadly not one really has been finished YET. I also play football at a local footbal club two to three times a week.
    In the future i hope i can improve my programming skills and finish things i have started.
  </p>
  <section>
    <article class="fiftee">
      <h2>Jonas Koch</h2>
      <img src="/Me.jpg" width="100%" alt="Loading...">
    </article>
    <article class="fiftee">
      <Timeline/>
    </article>
  </section>

  <h1>My Skills</h1>
  <ProgressBar bars="{bars}"/>
</article>

