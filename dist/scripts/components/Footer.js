(function (site) {
  "use strict";
  site.components.Footer = function () {
    const footer = site.el("footer", "site-footer");
    const container = site.el("div", "container footer-inner");
    container.append(site.components.Brand(), site.el("p", "footer-text", site.content.footer.text));
    footer.append(container);
    return footer;
  };
})(window.Consultoria);
