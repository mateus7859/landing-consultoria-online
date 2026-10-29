(function (site) {
  "use strict";
  document.title = site.content.page.title;
  document.querySelector('meta[name="description"]').content = site.content.page.description;
  const main = site.el("main", "site-main");
  main.id = "conteudo";
  main.tabIndex = -1;
  main.append(site.components.Hero());
  document.getElementById("app").replaceChildren(site.components.Header(), main, site.components.Footer());
})(window.Consultoria);
