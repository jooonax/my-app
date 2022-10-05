import { c as create_ssr_component, b as createEventDispatcher, e as escape, d as each, f as add_attribute, v as validate_component } from "../../chunks/index.js";
import Page from "./_page.svelte.js";
const Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ':root{--theme:#04AA6D}div.svelte-lkjyha{background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;padding:1px;background-color:#333334;background-image:url("/BgImage1.jpg");min-height:100%}h2.svelte-lkjyha{text-align:center;font-size:65px;color:white;margin-bottom:0px}h3.svelte-lkjyha{text-align:center;font-size:30px;font-weight:lighter;font-style:italic;color:white;margin-top:0px}.center.svelte-lkjyha{display:flex;flex-direction:column;justify-content:center;align-items:center}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { div } = $$props;
  let { p } = $$props;
  if ($$props.div === void 0 && $$bindings.div && div !== void 0)
    $$bindings.div(div);
  if ($$props.p === void 0 && $$bindings.p && p !== void 0)
    $$bindings.p(p);
  $$result.css.add(css$3);
  return `<div id="${"bg"}" class="${"center svelte-lkjyha"}"><h2 class="${"svelte-lkjyha"}">Hey There</h2>
    <h3 id="${"bgName"}" class="${"svelte-lkjyha"}">Speik Steiermark</h3></div>`;
});
const Navbar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ':root{--theme:#04AA6D}nav.svelte-1seiryv.svelte-1seiryv{float:left;width:100%;position:fixed;z-index:2}ul.svelte-1seiryv.svelte-1seiryv{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#111}li.svelte-1seiryv.svelte-1seiryv{float:left;margin:5px;border-radius:10px}li.svelte-1seiryv p.svelte-1seiryv{display:block;color:white;text-align:center;padding:14px 16px;margin:0px;text-decoration:none;border-radius:10px}li.svelte-1seiryv p.svelte-1seiryv:hover{background-color:#333334}li.svelte-1seiryv select.svelte-1seiryv{border-radius:50%;width:30px;height:30px;margin:8px;-webkit-appearance:none;-moz-appearance:none;text-indent:1px;text-overflow:""}',
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { navIndex = 0 } = $$props;
  let { themeID = 0 } = $$props;
  let { updateStyle = () => {
  } } = $$props;
  let { themes } = $$props;
  if ($$props.navIndex === void 0 && $$bindings.navIndex && navIndex !== void 0)
    $$bindings.navIndex(navIndex);
  if ($$props.themeID === void 0 && $$bindings.themeID && themeID !== void 0)
    $$bindings.themeID(themeID);
  if ($$props.updateStyle === void 0 && $$bindings.updateStyle && updateStyle !== void 0)
    $$bindings.updateStyle(updateStyle);
  if ($$props.themes === void 0 && $$bindings.themes && themes !== void 0)
    $$bindings.themes(themes);
  $$result.css.add(css$2);
  return `<nav class="${"svelte-1seiryv"}"><ul class="${"svelte-1seiryv"}"><li class="${"svelte-1seiryv"}"><p class="${"svelte-1seiryv"}">Home</p></li>
        <li class="${"svelte-1seiryv"}"><p class="${"svelte-1seiryv"}">Void</p></li>
        <li class="${"svelte-1seiryv"}"><p class="${"svelte-1seiryv"}">Space</p></li>

        <li style="${"float: right;"}" class="${"svelte-1seiryv"}"><select style="${"background-color: " + escape(themes[themeID], true)}" class="${"svelte-1seiryv"}">${each(themes, (theme, i) => {
    return `<option style="${"background-color: " + escape(themes[i], true)}"${add_attribute("value", i, 0)}></option>`;
  })}</select></li></ul></nav>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--theme:#04AA6D}footer.svelte-1om5t1j{background-color:#333334;padding:10px;display:flex;justify-content:center;text-align:center;color:white}span.svelte-1om5t1j{color:#ededef;font-weight:bold}a.svelte-1om5t1j{text-decoration:none;color:#ededef}div.svelte-1om5t1j{margin:10px}@media(max-width: 700px){footer.svelte-1om5t1j{display:block}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-1om5t1j"}"><div class="${"svelte-1om5t1j"}"><h1>Contact Me</h1>
        <p>E-Mail: <a href="${"mailto: jonaskoch.home@outlook.de"}" class="${"svelte-1om5t1j"}"><span class="${"svelte-1om5t1j"}">jonaskoch.home@outlook.de</span></a></p>
        <p>tel.: <span class="${"svelte-1om5t1j"}">+4367764234130</span></p>
        <p>str.: <span class="${"svelte-1om5t1j"}">Matzelsdorf 62</span></p>
        <p>Ort: <span class="${"svelte-1om5t1j"}">8411 Hengsberg</span></p></div>
    <div class="${"svelte-1om5t1j"}"><h1>School</h1>
        <p>Website: <a href="${"https://www.htl-kaindorf.at"}" target="${"_blank"}" class="${"svelte-1om5t1j"}"><span class="${"svelte-1om5t1j"}">HTBLA Kaindorf</span></a></p>
        <p>E-Mail: <a href="${"mailto: office@htl-kaindorf.at"}" class="${"svelte-1om5t1j"}"><span class="${"svelte-1om5t1j"}">office@htl-kaindorf.at</span></a></p>
        <p>tel: <span class="${"svelte-1om5t1j"}">+4350248067</span></p>
        <p>str.: <span class="${"svelte-1om5t1j"}">Grazer Stra\xDFe 202</span></p>
        <p>Ort: <span class="${"svelte-1om5t1j"}">8430 Kaindorf an der Sulm</span></p></div></footer>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'section.svelte-1s55dqe::after{content:"";display:table;clear:both}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  let div;
  let p;
  let navIndex = 0;
  let themeID = 0;
  let themes = ["#04AA6D", "#33b5e5", "#ff4444", "#ff9244"];
  let r;
  const updateStyle = () => {
    console.log("hhhh");
    r.style.setProperty("--theme", themes[themeID]);
    localStorage.setItem("themeID", String(themeID));
    switch (themeID) {
      case 0:
        div.style.backgroundImage = "url(/BgImage1.jpg)";
        p.innerText = "Speik Steiermark";
        break;
      case 1:
        div.style.backgroundImage = "url(/BgImage2.jpg)";
        p.innerText = "Kitzb\xFChl Panoramaalm";
        break;
      case 2:
        div.style.backgroundImage = "url(/BgImage3.jpg)";
        p.innerText = "Mein Daumen";
        break;
      case 3:
        div.style.backgroundImage = "url(/BgImage4.jpg)";
        p.innerText = "Picture from Internet";
        break;
    }
  };
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Navbar, "Navbar").$$render(
      $$result,
      { updateStyle, themes, themeID, navIndex },
      {
        themeID: ($$value) => {
          themeID = $$value;
          $$settled = false;
        },
        navIndex: ($$value) => {
          navIndex = $$value;
          $$settled = false;
        }
      },
      {}
    )}

${validate_component(Header, "Header").$$render(
      $$result,
      { div, p },
      {
        div: ($$value) => {
          div = $$value;
          $$settled = false;
        },
        p: ($$value) => {
          p = $$value;
          $$settled = false;
        }
      },
      {}
    )}

<section class="${"svelte-1s55dqe"}">${navIndex === 0 ? `${validate_component(Page, "Home").$$render($$result, {}, {}, {})}` : `${navIndex === 1 ? `<p style="${"height: 10000px;text-align: center"}">VOID</p>` : `<p style="${"height: 10000px;background-color: black;text-align: center;margin: 0px;color: white; padding: 8px"}">SPACE</p>`}`}</section>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Layout as default
};
