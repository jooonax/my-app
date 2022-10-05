import { c as create_ssr_component, d as each, e as escape, v as validate_component, g as null_to_empty } from "../../chunks/index.js";
const School_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ':root{--theme:#04AA6D}.svelte-a1cj9y.svelte-a1cj9y{font-family:"Lato", sans-serif;box-sizing:border-box}article.svelte-a1cj9y.svelte-a1cj9y{float:left;padding-top:20px;padding-bottom:20px;background-color:#ededef;width:100%}article.svelte-a1cj9y>.svelte-a1cj9y{margin-right:25%;margin-left:25%}@media(max-width: 720px){article.svelte-a1cj9y>.svelte-a1cj9y{margin-right:5%;margin-left:5%}}@media(max-width: 900px){article.svelte-a1cj9y.svelte-a1cj9y{width:100%;height:auto}article.svelte-a1cj9y>.svelte-a1cj9y{margin-right:10%;margin-left:10%}}h1.svelte-a1cj9y.svelte-a1cj9y,h3.svelte-a1cj9y.svelte-a1cj9y,p.svelte-a1cj9y.svelte-a1cj9y{text-align:center}h1.svelte-a1cj9y.svelte-a1cj9y{font-size:24px}h3.svelte-a1cj9y.svelte-a1cj9y{font-size:16px;font-style:italic;color:#686868}',
  map: null
};
const School = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<article class="${"svelte-a1cj9y"}"><h1 class="${"svelte-a1cj9y"}">HTBLA Kaindorf</h1>
    <h3 class="${"svelte-a1cj9y"}">Computer Science</h3>
    <p class="${"svelte-a1cj9y"}">Im studying computer science at HTBLA Kaindorf since 2020 and I would say it isn&#39;t to bad. I have learned a lot about how a computer works, how to
        write programs etc.. It also motivated me to build some small applications, websites and Games In my free time like this one.
        I love experimenting with new things and that&#39;s why i like that you get a lot of freedom how and when u make something as long as u have it till the deadline.
        But there are also downsides. For example this school is pretty hard, which can be seen by all the people who have to redo a year or even leave.
        But if you work hard it will hopefully be worth it.
    </p></article>`;
});
const Timeline_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ':root{--theme:#04AA6D}.svelte-dm855j.svelte-dm855j.svelte-dm855j{margin:0;padding:0}.timeline.svelte-dm855j.svelte-dm855j.svelte-dm855j{background:#ededef;margin:20px auto;padding:20px}.card.svelte-dm855j.svelte-dm855j.svelte-dm855j{position:relative;z-index:0}.card.svelte-dm855j.svelte-dm855j.svelte-dm855j:nth-child(odd){padding:30px 0 30px 30px}.card.svelte-dm855j.svelte-dm855j.svelte-dm855j:nth-child(even){padding:30px 30px 30px 0}.card.svelte-dm855j.svelte-dm855j.svelte-dm855j::before{content:"";position:absolute;width:50%;border:solid var(--theme)}.card.svelte-dm855j.svelte-dm855j.svelte-dm855j:nth-child(odd)::before{left:0px;top:-4.5px;bottom:-4.5px;border-width:5px 0 5px 5px;border-radius:50px 0 0 50px}.card.svelte-dm855j.svelte-dm855j.svelte-dm855j:nth-child(even)::before{right:0;top:0;bottom:0;border-width:5px 5px 5px 0;border-radius:0 50px 50px 0}.card.svelte-dm855j.svelte-dm855j.svelte-dm855j:first-child::before{border-top:0;border-top-left-radius:0}.card.svelte-dm855j.svelte-dm855j.svelte-dm855j:last-child:nth-child(odd)::before{border-bottom:0;border-bottom-left-radius:0}.card.svelte-dm855j.svelte-dm855j.svelte-dm855j:last-child:nth-child(even)::before{border-bottom:0;border-bottom-right-radius:0}.info.svelte-dm855j.svelte-dm855j.svelte-dm855j{display:flex;flex-direction:column;background:#333334;color:#a8a8a8;border-radius:10px;padding:10px}.title.svelte-dm855j.svelte-dm855j.svelte-dm855j{color:var(--theme);position:relative}.title.svelte-dm855j.svelte-dm855j.svelte-dm855j::before{content:"";position:absolute;width:10px;height:10px;background:#ededef;border-radius:999px;border:3px solid var(--theme)}.card.svelte-dm855j:nth-child(even)>.info.svelte-dm855j>.title.svelte-dm855j{text-align:right}.card.svelte-dm855j:nth-child(odd)>.info.svelte-dm855j>.title.svelte-dm855j::before{left:-45px}.card.svelte-dm855j:nth-child(even)>.info.svelte-dm855j>.title.svelte-dm855j::before{right:-45px}',
  map: null
};
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="${"timeline svelte-dm855j"}"><div class="${"outer svelte-dm855j"}"><div class="${"card svelte-dm855j"}"><div class="${"info svelte-dm855j"}"><h3 class="${"title svelte-dm855j"}">Primary school</h3>
        <p class="${"svelte-dm855j"}">VS Hengsberg<br class="${"svelte-dm855j"}">
          2013 - 2016
        </p></div></div>
    <div class="${"card svelte-dm855j"}"><div class="${"info svelte-dm855j"}"><h3 class="${"title svelte-dm855j"}">Middle School</h3>
        <p class="${"svelte-dm855j"}">Bisch\xF6fliches Gymnasium Augustinum<br class="${"svelte-dm855j"}">
          2016 - 2020
        </p></div></div>
    <div class="${"card svelte-dm855j"}"><div class="${"info svelte-dm855j"}"><h3 class="${"title svelte-dm855j"}">High School</h3>
        <p class="${"svelte-dm855j"}">HTBLA Kaindorf<br class="${"svelte-dm855j"}">
          Computer Science<br class="${"svelte-dm855j"}">
          2020 - now
        </p></div></div>
    <div class="${"card svelte-dm855j"}"><div class="${"info svelte-dm855j"}"><h3 class="${"title svelte-dm855j"}">Future</h3>
        <p class="${"svelte-dm855j"}">Future things <br class="${"svelte-dm855j"}">
          Loading...
        </p></div></div></div></div>`;
});
const ProgressBar_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ":root{--theme:#04AA6D}.dashboard.svelte-i5ti8{display:flex;justify-content:center;background-color:#686868}svg.svelte-i5ti8{width:114px;height:174px;margin:1em}.bg.svelte-i5ti8{fill:none;stroke-width:10px;stroke:#333334}[class^=meter].svelte-i5ti8{fill:none;stroke-width:10px;stroke-linecap:round;transform:rotate(-90deg);transform-origin:50% 50%}.meter.svelte-i5ti8{stroke-dasharray:360;stroke-dashoffset:100;stroke:var(--theme);animation:progress 1s ease-out}@media(max-width: 700px){.dashboard.svelte-i5ti8{display:block}}",
  map: null
};
const ProgressBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bars = [{ title: "Test", deg: 200 }] } = $$props;
  if ($$props.bars === void 0 && $$bindings.bars && bars !== void 0)
    $$bindings.bars(bars);
  $$result.css.add(css$3);
  return `<div class="${"dashboard svelte-i5ti8"}">${each(bars, (bar, i) => {
    return `<svg class="${"svelte-i5ti8"}"><text x="${"5"}" y="${"17"}" fill="${"white"}">${escape(bar.title)}</text><circle class="${"bg svelte-i5ti8"}" cx="${"57"}" cy="${"87"}" r="${"52"}"></circle><circle class="${"meter svelte-i5ti8"}" style="${"stroke-dashoffset: " + escape(bar.deg, true)}" cx="${"57"}" cy="${"87"}" r="${"52"}"></circle></svg>`;
  })}</div>`;
});
const About_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ':root{--theme:#04AA6D}.svelte-1c7aazq.svelte-1c7aazq{font-family:"Lato", sans-serif;box-sizing:border-box}article.svelte-1c7aazq.svelte-1c7aazq{float:left;padding-top:20px;background-color:#ededef;padding-bottom:0px}article.svelte-1c7aazq>.svelte-1c7aazq{margin-right:25%;margin-left:25%}.fiftee.svelte-1c7aazq.svelte-1c7aazq{width:50%}@media(max-width: 720px){article.svelte-1c7aazq>.svelte-1c7aazq{margin-right:5%;margin-left:5%}.fiftee.svelte-1c7aazq.svelte-1c7aazq{width:100%}}@media(max-width: 900px){article.svelte-1c7aazq.svelte-1c7aazq{width:100%;height:auto}article.svelte-1c7aazq>.svelte-1c7aazq{margin-right:10%;margin-left:10%}}h1.svelte-1c7aazq.svelte-1c7aazq,h2.svelte-1c7aazq.svelte-1c7aazq,h3.svelte-1c7aazq.svelte-1c7aazq,p.svelte-1c7aazq.svelte-1c7aazq{text-align:center}h1.svelte-1c7aazq.svelte-1c7aazq{font-size:24px}h2.svelte-1c7aazq.svelte-1c7aazq{font-size:20px}h3.svelte-1c7aazq.svelte-1c7aazq{font-size:16px;font-style:italic;color:#686868}img.svelte-1c7aazq.svelte-1c7aazq{margin:0px;opacity:80%;transition:200ms}img.svelte-1c7aazq.svelte-1c7aazq:hover{opacity:100%}section.svelte-1c7aazq.svelte-1c7aazq::after{content:"";display:table;clear:both}',
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const bars = [
    { title: "Programming", deg: 100 },
    { title: "Football", deg: 110 },
    { title: "English", deg: 160 },
    { title: "Spanish", deg: 330 }
  ];
  $$result.css.add(css$2);
  return `<article class="${"svelte-1c7aazq"}"><h1 class="${"svelte-1c7aazq"}">About Me</h1>
  <h3 class="${"svelte-1c7aazq"}">upcoming Gamedev</h3>
  <p class="${"svelte-1c7aazq"}">Welcome to my Website! by the time writing this, im a 15 year old boy living in the south of the beautiful country Austria in Europe.
    Currently im studying computer science at HTBLA Kaindorf. There I alos learnt how to make websites like this one. This website by the way was not created for school purposes.
    In my freetime I like to create games in unity, from which sadly not one really has been finished YET. I also play football at a local footbal club two to three times a week.
    In the future i hope i can improve my programming skills and finish things i have started.
  </p>
  <section class="${"svelte-1c7aazq"}"><article class="${"fiftee svelte-1c7aazq"}"><h2 class="${"svelte-1c7aazq"}">Jonas Koch</h2>
      <img src="${"/Me.jpg"}" width="${"100%"}" alt="${"Loading..."}" class="${"svelte-1c7aazq"}"></article>
    <article class="${"fiftee svelte-1c7aazq"}">${validate_component(Timeline, "Timeline").$$render($$result, {}, {}, {})}</article></section>

  <h1 class="${"svelte-1c7aazq"}">My Skills</h1>
  ${validate_component(ProgressBar, "ProgressBar").$$render($$result, { bars }, {}, {})}</article>`;
});
const Projects_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ':root{--theme:#04AA6D}.svelte-a1cj9y.svelte-a1cj9y{font-family:"Lato", sans-serif;box-sizing:border-box}article.svelte-a1cj9y.svelte-a1cj9y{float:left;padding-top:20px;padding-bottom:20px;background-color:#ededef;width:100%}article.svelte-a1cj9y>.svelte-a1cj9y{margin-right:25%;margin-left:25%}@media(max-width: 720px){article.svelte-a1cj9y>.svelte-a1cj9y{margin-right:5%;margin-left:5%}}@media(max-width: 900px){article.svelte-a1cj9y.svelte-a1cj9y{width:100%;height:auto}article.svelte-a1cj9y>.svelte-a1cj9y{margin-right:10%;margin-left:10%}}h1.svelte-a1cj9y.svelte-a1cj9y,h3.svelte-a1cj9y.svelte-a1cj9y,p.svelte-a1cj9y.svelte-a1cj9y{text-align:center}h1.svelte-a1cj9y.svelte-a1cj9y{font-size:24px}h3.svelte-a1cj9y.svelte-a1cj9y{font-size:16px;font-style:italic;color:#686868}',
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<article class="${"svelte-a1cj9y"}"><h1 class="${"svelte-a1cj9y"}">Projects</h1>
    <h3 class="${"svelte-a1cj9y"}">They will be here sometime</h3>
    <p class="${"svelte-a1cj9y"}">loading...
    </p></article>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--theme:#04AA6D}nav.svelte-1iyycm9.svelte-1iyycm9{float:left;width:100%;background:#ccc}ul.svelte-1iyycm9.svelte-1iyycm9{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#333}li.svelte-1iyycm9.svelte-1iyycm9{float:left;margin:8px;border-radius:10px}li.svelte-1iyycm9 p.svelte-1iyycm9{display:block;color:white;text-align:center;padding:14px 20px;margin:0px;text-decoration:none;border-radius:10px}li.svelte-1iyycm9 p.svelte-1iyycm9:hover{background-color:#111}.active.svelte-1iyycm9.svelte-1iyycm9{background-color:var(--theme)}",
  map: null
};
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
  return `<nav class="${"svelte-1iyycm9"}"><ul class="${"svelte-1iyycm9"}"><li class="${escape(null_to_empty(classes[0]), true) + " svelte-1iyycm9"}"><p class="${"svelte-1iyycm9"}">About Me</p></li>
        <li class="${escape(null_to_empty(classes[1]), true) + " svelte-1iyycm9"}"><p class="${"svelte-1iyycm9"}">School</p></li>
        <li class="${escape(null_to_empty(classes[2]), true) + " svelte-1iyycm9"}"><p class="${"svelte-1iyycm9"}">Projects</p></li></ul></nav>


${active === 0 ? `${validate_component(About, "About").$$render($$result, {}, {}, {})}` : `${active === 1 ? `${validate_component(School, "School").$$render($$result, {}, {}, {})}` : `${active === 2 ? `${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}` : ``}`}`}`;
});
export {
  Page as default
};
