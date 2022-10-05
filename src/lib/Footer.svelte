<style lang="scss">
    @use "colors";
    /* Style the footer */
    footer {
        background-color: colors.$dark;
        padding: 10px;
        display: flex;
        justify-content: center;
        text-align: center;
        color: white;
    }
    span {
      color: colors.$light;
      font-weight: bold;
    }
    a {
      text-decoration: none;
      color: colors.$light;
    }
    div {
      margin: 10px;
    }
</style>

<footer>
    <div>
        <h1>Contact Me</h1>
        <p>E-Mail: <a href="mailto: jonaskoch.home@outlook.de"><span>jonaskoch.home@outlook.de</span></a></p>
        <p>tel.: <span>+4367764234130</span></p>
        <p>str.: <span>Matzelsdorf 62</span></p>
        <p>Ort: <span>8411 Hengsberg</span></p>
    </div>
    <div>
        <h1>School</h1>
        <p>Website: <a href="www.htl-kaindorf.at">HTBLA Kaindorf</a></p>
        <p>tel: <span>+4367764234130</span></p>
    </div>
</footer>