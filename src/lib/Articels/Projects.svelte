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
    width: 100%;
  }
  article>* {
    margin-right: 25%;
    margin-left: 25%;
  }
  /* Responsive layout - makes the two columns/boxes stack on top of each other instead of next to each other, on small screens */
  @media (max-width: 720px) {
    article>* {
      margin-right: 5%;
      margin-left: 5%;
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
</style>

<article>
    <h1>Projects</h1>
    <h3>They will be here sometime</h3>
    <p>
        loading...
    </p>
</article>