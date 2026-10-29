(function (site) {
  "use strict";
  site.components.Hero = function () {
    const content = site.content.hero;
    const section = site.el("section", "hero container");
    section.setAttribute("aria-labelledby", "hero-title");
    const copy = site.el("div", "hero-copy");
    const eyebrow = site.el("p", "eyebrow", content.marker + " " + content.eyebrow);
    const title = site.el("h1", "hero-title");
    title.id = "hero-title";
    title.append(
      site.el("span", "placeholder-marker", content.marker),
      site.el("span", "hero-title-main", content.title),
      site.el("em", "hero-title-accent", content.titleAccent)
    );
    const topics = site.el("ul", "topic-list");
    topics.setAttribute("aria-label", "Áreas da consultoria");
    content.topics.forEach(function (topic) { topics.append(site.el("li", "", topic)); });
    const actions = site.el("div", "hero-actions");
    const note = site.el("p", "button-note", content.buttonNote);
    note.id = "button-note";
    actions.append(site.components.Button(), note);
    copy.append(eyebrow, title, site.el("p", "hero-description", content.description), actions, topics);

    const visual = site.el("figure", "hero-visual");
    const art = site.el("div", "visual-art");
    art.setAttribute("aria-hidden", "true");
    art.append(site.el("span", "arch arch-back"), site.el("span", "arch arch-front"), site.el("span", "art-dot"));
    const caption = site.el("figcaption", "visual-caption");
    caption.append(
      site.el("span", "placeholder-marker", content.image.marker),
      site.el("p", "visual-title", content.image.title),
      site.el("p", "visual-description", content.image.caption)
    );
    visual.append(art, caption);
    if (content.image.src) {
      const image = site.el("img", "hero-image");
      image.alt = content.image.alt;
      image.style.objectPosition = content.image.position;
      image.width = 720;
      image.height = 900;
      image.addEventListener("load", function () {
        art.hidden = true;
        caption.hidden = true;
      });
      image.addEventListener("error", function () { image.remove(); });
      image.src = content.image.src;
      visual.prepend(image);
    }
    section.append(copy, visual);
    return section;
  };
})(window.Consultoria);
