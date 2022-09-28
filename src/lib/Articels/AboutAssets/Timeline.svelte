<script lang="ts">

</script>

<style lang="scss">

  @use "../../colors";

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: colors.$light;
    display: flex;
    justify-content: center;
  }

  /* Timeline Container */
  .timeline {
    background: colors.$light;
    margin: 20px auto;
    padding: 20px;
  }

  /* Card container */
  .card {
    position: relative;
  }

  /* setting padding based on even or odd */
  .card:nth-child(odd) {
    padding: 30px 0 30px 30px;
  }
  .card:nth-child(even) {
    padding: 30px 30px 30px 0;
  }
  /* Global ::before */
  .card::before {
    content: "";
    position: absolute;
    width: 50%;

    border: solid colors.$theme;
  }

  /* Setting the border of top, bottom, left */
  .card:nth-child(odd)::before {
    left: 0px;
    top: -4.5px;
    bottom: -4.5px;
    border-width: 5px 0 5px 5px;
    border-radius: 50px 0 0 50px;
  }

  /* Setting the border of top, bottom, right */
  .card:nth-child(even)::before {
    right: 0;
    top: 0;
    bottom: 0;
    border-width: 5px 5px 5px 0;
    border-radius: 0 50px 50px 0;
  }

  /* Removing the border if it is the first card */
  .card:first-child::before {
    border-top: 0;
    border-top-left-radius: 0;
  }

  /* Removing the border if it is the last card  and it's odd */
  .card:last-child:nth-child(odd)::before {
    border-bottom: 0;
    border-bottom-left-radius: 0;
  }

  /* Removing the border if it is the last card  and it's even */
  .card:last-child:nth-child(even)::before {
    border-bottom: 0;
    border-bottom-right-radius: 0;
  }

  /* Information about the timeline */
  .info {
    display: flex;
    flex-direction: column;
    background: colors.$dark;
    color: #a8a8a8;
    border-radius: 10px;
    padding: 10px;
  }
  /* Title of the card */
  .title {
    color: colors.$theme;
    position: relative;
  }

  /* Timeline dot  */
  .title::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: colors.$light;
    border-radius: 999px;
    border: 3px solid colors.$theme;
  }

  /* text right if the card is even  */
  .card:nth-child(even) > .info > .title {
    text-align: right;
  }

  /* setting dot to the left if the card is odd */
  .card:nth-child(odd) > .info > .title::before {
    left: -45px;
  }

  /* setting dot to the right if the card is odd */
  .card:nth-child(even) > .info > .title::before {
    right: -45px;
  }

</style>

<div class="timeline">
  <div class="outer">
    <div class="card">
      <div class="info">
        <h3 class="title">Primary school</h3>
        <p>
          VS Hengsberg<br>
          2013 - 2016
        </p>
      </div>
    </div>
    <div class="card">
      <div class="info">
        <h3 class="title">Middle School</h3>
        <p>
          Bischöfliches Gymnasium Augustinum<br>
          2016 - 2020
        </p>
      </div>
    </div>
    <div class="card">
      <div class="info">
        <h3 class="title">High School</h3>
        <p>
          HTBLA Kaindorf<br>
          Computer Science<br>
          2020 - now
        </p>
      </div>
    </div>
    <div class="card">
      <div class="info">
        <h3 class="title">Future</h3>
        <p>
          Future things <br>
          Loading...
        </p>
      </div>
    </div>
  </div>
</div>