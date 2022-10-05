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
    @media (max-width: 700px) {
      footer {
        display: block;
      }
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
        <p>Website: <a href="https://www.htl-kaindorf.at" target="_blank"><span>HTBLA Kaindorf</span></a></p>
        <p>E-Mail: <a href="mailto: office@htl-kaindorf.at"><span>office@htl-kaindorf.at</span></a></p>
        <p>tel: <span>+4350248067</span></p>
        <p>str.: <span>Grazer Straße 202</span></p>
        <p>Ort: <span>8430 Kaindorf an der Sulm</span></p>
    </div>
</footer>