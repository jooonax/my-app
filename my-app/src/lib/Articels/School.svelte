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
      article {
        width: 100%;
        height: auto;
      }
      article>* {
        margin-right: 10%;
        margin-left: 10%;
      }
    }
    h1, h2, h3 {
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
    <h1>HTBLA Kaindorf</h1>
    <h3>Computer Science</h3>
    <p>
        Im studying computer science at HTBLA Kaindorf since 2020 and I would say it isn't to bad. I have learned a lot about how a computer works, how to
        write programs etc.. It also motivated me to build some small applications, websites and Games In my free time like this one.
        I love experimenting with new things and that's why i like that you get a lot of freedom how and when u make something as long as u have it till the deadline.
        But there are also downsides. For example this school is pretty hard, which can be seen by all the people who have to redo a year or even leave.
        But if you work hard it will hopefully be worth it.
    </p>
</article>