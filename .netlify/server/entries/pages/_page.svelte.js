import { c as create_ssr_component, v as validate_component, e as escape, f as null_to_empty } from "../../chunks/index.js";
const School_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ':root{--theme:#04AA6D}.svelte-ix216m.svelte-ix216m{font-family:"Lato", sans-serif;box-sizing:border-box}article.svelte-ix216m.svelte-ix216m{float:left;padding-top:20px;padding-bottom:20px;background-color:#ededef;width:100%}article.svelte-ix216m>.svelte-ix216m{margin-right:25%;margin-left:25%}@media(max-width: 720px){article.svelte-ix216m.svelte-ix216m{width:100%;height:auto}article.svelte-ix216m>.svelte-ix216m{margin-right:10%;margin-left:10%}}h1.svelte-ix216m.svelte-ix216m,h3.svelte-ix216m.svelte-ix216m{text-align:center}h1.svelte-ix216m.svelte-ix216m{font-size:24px}h3.svelte-ix216m.svelte-ix216m{font-size:16px;font-style:italic;color:#686868}',
  map: null
};
const School = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<article class="${"svelte-ix216m"}"><h1 class="${"svelte-ix216m"}">HTBLA Kaindorf</h1>
    <h3 class="${"svelte-ix216m"}">Computer Science</h3>
    <p class="${"svelte-ix216m"}">Im studying computer science at HTBLA Kaindorf since 2020 and I would say it isn&#39;t to bad. I have learned a lot about how a computer works, how to
        write programs etc.. It also motivated me to build some small applications, websites and Games In my free time like this one.
        I love experimenting with new things and that&#39;s why i like that you get a lot of freedom how and when u make something as long as u have it till the deadline.
        But there are also downsides. For example this school is pretty hard, which can be seen by all the people who have to redo a year or even leave.
        But if you work hard it will hopefully be worth it.
    </p></article>`;
});
const Timeline_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ':root{--theme:#04AA6D}.svelte-6gtqm1.svelte-6gtqm1.svelte-6gtqm1{margin:0;padding:0}.timeline.svelte-6gtqm1.svelte-6gtqm1.svelte-6gtqm1{background:#ededef;margin:20px auto;padding:20px}.card.svelte-6gtqm1.svelte-6gtqm1.svelte-6gtqm1{position:relative}.card.svelte-6gtqm1.svelte-6gtqm1.svelte-6gtqm1:nth-child(odd){padding:30px 0 30px 30px}.card.svelte-6gtqm1.svelte-6gtqm1.svelte-6gtqm1:nth-child(even){padding:30px 30px 30px 0}.card.svelte-6gtqm1.svelte-6gtqm1.svelte-6gtqm1::before{content:"";position:absolute;width:50%;border:solid var(--theme)}.card.svelte-6gtqm1.svelte-6gtqm1.svelte-6gtqm1:nth-child(odd)::before{left:0px;top:-4.5px;bottom:-4.5px;border-width:5px 0 5px 5px;border-radius:50px 0 0 50px}.card.svelte-6gtqm1.svelte-6gtqm1.svelte-6gtqm1:nth-child(even)::before{right:0;top:0;bottom:0;border-width:5px 5px 5px 0;border-radius:0 50px 50px 0}.card.svelte-6gtqm1.svelte-6gtqm1.svelte-6gtqm1:first-child::before{border-top:0;border-top-left-radius:0}.card.svelte-6gtqm1.svelte-6gtqm1.svelte-6gtqm1:last-child:nth-child(odd)::before{border-bottom:0;border-bottom-left-radius:0}.card.svelte-6gtqm1.svelte-6gtqm1.svelte-6gtqm1:last-child:nth-child(even)::before{border-bottom:0;border-bottom-right-radius:0}.info.svelte-6gtqm1.svelte-6gtqm1.svelte-6gtqm1{display:flex;flex-direction:column;background:#333334;color:#a8a8a8;border-radius:10px;padding:10px}.title.svelte-6gtqm1.svelte-6gtqm1.svelte-6gtqm1{color:var(--theme);position:relative}.title.svelte-6gtqm1.svelte-6gtqm1.svelte-6gtqm1::before{content:"";position:absolute;width:10px;height:10px;background:#ededef;border-radius:999px;border:3px solid var(--theme)}.card.svelte-6gtqm1:nth-child(even)>.info.svelte-6gtqm1>.title.svelte-6gtqm1{text-align:right}.card.svelte-6gtqm1:nth-child(odd)>.info.svelte-6gtqm1>.title.svelte-6gtqm1::before{left:-45px}.card.svelte-6gtqm1:nth-child(even)>.info.svelte-6gtqm1>.title.svelte-6gtqm1::before{right:-45px}',
  map: null
};
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"timeline svelte-6gtqm1"}"><div class="${"outer svelte-6gtqm1"}"><div class="${"card svelte-6gtqm1"}"><div class="${"info svelte-6gtqm1"}"><h3 class="${"title svelte-6gtqm1"}">Primary school</h3>
        <p class="${"svelte-6gtqm1"}">VS Hengsberg<br class="${"svelte-6gtqm1"}">
          2013 - 2016
        </p></div></div>
    <div class="${"card svelte-6gtqm1"}"><div class="${"info svelte-6gtqm1"}"><h3 class="${"title svelte-6gtqm1"}">Middle School</h3>
        <p class="${"svelte-6gtqm1"}">Bisch\xF6fliches Gymnasium Augustinum<br class="${"svelte-6gtqm1"}">
          2016 - 2020
        </p></div></div>
    <div class="${"card svelte-6gtqm1"}"><div class="${"info svelte-6gtqm1"}"><h3 class="${"title svelte-6gtqm1"}">High School</h3>
        <p class="${"svelte-6gtqm1"}">HTBLA Kaindorf<br class="${"svelte-6gtqm1"}">
          Computer Science<br class="${"svelte-6gtqm1"}">
          2020 - now
        </p></div></div>
    <div class="${"card svelte-6gtqm1"}"><div class="${"info svelte-6gtqm1"}"><h3 class="${"title svelte-6gtqm1"}">Future</h3>
        <p class="${"svelte-6gtqm1"}">Future things <br class="${"svelte-6gtqm1"}">
          Loading...
        </p></div></div></div></div>`;
});
const About_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ':root{--theme:#04AA6D}.svelte-15utg92.svelte-15utg92{font-family:"Lato", sans-serif;box-sizing:border-box}article.svelte-15utg92.svelte-15utg92{float:left;padding-top:20px;padding-bottom:20px;background-color:#ededef}article.svelte-15utg92>.svelte-15utg92{margin-right:25%;margin-left:25%}.fiftee.svelte-15utg92.svelte-15utg92{width:50%}@media(max-width: 720px){article.svelte-15utg92.svelte-15utg92{width:100%;height:auto}article.svelte-15utg92>.svelte-15utg92{margin-right:10%;margin-left:10%}.fiftee.svelte-15utg92.svelte-15utg92{width:100%}}h1.svelte-15utg92.svelte-15utg92,h2.svelte-15utg92.svelte-15utg92,h3.svelte-15utg92.svelte-15utg92{text-align:center}h1.svelte-15utg92.svelte-15utg92{font-size:24px}h2.svelte-15utg92.svelte-15utg92{font-size:20px}h3.svelte-15utg92.svelte-15utg92{font-size:16px;font-style:italic;color:#686868}img.svelte-15utg92.svelte-15utg92{margin:0px;opacity:80%;transition:200ms}img.svelte-15utg92.svelte-15utg92:hover{opacity:100%}section.svelte-15utg92.svelte-15utg92::after{content:"";display:table;clear:both}',
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<article class="${"svelte-15utg92"}"><h1 class="${"svelte-15utg92"}">About Me</h1>
  <h3 class="${"svelte-15utg92"}">upcoming Gamedev</h3>
  <p class="${"svelte-15utg92"}">Welcome to my Website! by the time writing this, im a 15 year old boy living in the south of the beautiful country Austria in Europe.
    Currently im studying computer science at HTBLA Kaindorf. There I alos learnt how to make websites like this one. This website by the way was not created for school purposes.
    In my freetime I like to create games in unity, from which sadly not one really has been finished YET. I also play football at a local footbal club two to three times a week.
    In the future i hope i can improve my programming skills and finish things i have started.
  </p>
  <section class="${"svelte-15utg92"}"><article class="${"fiftee svelte-15utg92"}"><h2 class="${"svelte-15utg92"}">Jonas Koch</h2>
      <img src="${"/Me.jpg"}" width="${"100%"}" alt="${"Loading..."}" class="${"svelte-15utg92"}"></article>
    <article class="${"fiftee svelte-15utg92"}">${validate_component(Timeline, "Timeline").$$render($$result, {}, {}, {})}</article></section></article>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--theme:#04AA6D}nav.svelte-1iyycm9.svelte-1iyycm9{float:left;width:100%;background:#ccc}ul.svelte-1iyycm9.svelte-1iyycm9{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#333}li.svelte-1iyycm9.svelte-1iyycm9{float:left;margin:8px;border-radius:10px}li.svelte-1iyycm9 p.svelte-1iyycm9{display:block;color:white;text-align:center;padding:14px 20px;margin:0px;text-decoration:none;border-radius:10px}li.svelte-1iyycm9 p.svelte-1iyycm9:hover{background-color:#111}.active.svelte-1iyycm9.svelte-1iyycm9{background-color:var(--theme)}",
  map: null
};
let number = 0;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active = 0 } = $$props;
  let { classes = ["", "", ""] } = $$props;
  classes[active] = "active";
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  $$result.css.add(css);
  {
    if (classes[active] === "") {
      classes = ["", "", ""];
      classes[active] = "active";
    }
  }
  {
    console.log(number);
  }
  return `<nav class="${"svelte-1iyycm9"}"><ul class="${"svelte-1iyycm9"}"><li class="${escape(null_to_empty(classes[0]), true) + " svelte-1iyycm9"}"><p class="${"svelte-1iyycm9"}">About Me</p></li>
        <li class="${escape(null_to_empty(classes[1]), true) + " svelte-1iyycm9"}"><p class="${"svelte-1iyycm9"}">School</p></li>
        <li class="${escape(null_to_empty(classes[2]), true) + " svelte-1iyycm9"}"><p class="${"svelte-1iyycm9"}">Virus</p></li></ul></nav>


${active === 0 ? `${validate_component(About, "About").$$render($$result, {}, {}, {})}` : `${active === 1 ? `${validate_component(School, "School").$$render($$result, {}, {}, {})}` : ``}`}`;
});
export {
  Page as default
};
