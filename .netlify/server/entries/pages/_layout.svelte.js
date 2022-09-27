import { c as create_ssr_component, e as escape, b as each, d as add_attribute, v as validate_component } from "../../chunks/index.js";
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
  code: ':root{--theme:#04AA6D}nav.svelte-bwept3.svelte-bwept3{float:left;width:100%;position:fixed}ul.svelte-bwept3.svelte-bwept3{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#111}li.svelte-bwept3.svelte-bwept3{float:left;margin:5px;border-radius:10px}li.svelte-bwept3 p.svelte-bwept3{display:block;color:white;text-align:center;padding:14px 16px;margin:0px;text-decoration:none;border-radius:10px}li.svelte-bwept3 p.svelte-bwept3:hover{background-color:#333334}li.svelte-bwept3 select.svelte-bwept3{border-radius:50%;width:30px;height:30px;margin:8px;-webkit-appearance:none;-moz-appearance:none;text-indent:1px;text-overflow:""}',
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { div } = $$props;
  let { p } = $$props;
  let themeID = 0;
  let themes = ["#04AA6D", "#33b5e5", "#ff4444"];
  if ($$props.div === void 0 && $$bindings.div && div !== void 0)
    $$bindings.div(div);
  if ($$props.p === void 0 && $$bindings.p && p !== void 0)
    $$bindings.p(p);
  $$result.css.add(css$2);
  return `<nav class="${"svelte-bwept3"}"><ul class="${"svelte-bwept3"}"><li class="${"svelte-bwept3"}"><p class="${"svelte-bwept3"}">Home</p></li>
        <li class="${"svelte-bwept3"}"><p class="${"svelte-bwept3"}">Void</p></li>
        <li class="${"svelte-bwept3"}"><p class="${"svelte-bwept3"}">Space</p></li>

        <li style="${"float: right;"}" class="${"svelte-bwept3"}"><select style="${"background-color: " + escape(themes[themeID], true)}" class="${"svelte-bwept3"}">${each(themes, (theme, i) => {
    return `<option style="${"background-color: " + escape(themes[i], true)}"${add_attribute("value", i, 0)}></option>`;
  })}</select></li></ul></nav>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--theme:#04AA6D}footer.svelte-9i1c0z{background-color:#686868;padding:10px;text-align:center;color:white}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-9i1c0z"}"><p>Footer</p></footer>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'section.svelte-1s55dqe::after{content:"";display:table;clear:both}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let div;
  let p;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Navbar, "Navbar").$$render($$result, { div, p }, {}, {})}

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

<section class="${"svelte-1s55dqe"}">${validate_component(Page, "Page").$$render($$result, {}, {}, {})}</section>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Layout as default
};
