(function (site) {
  "use strict";
  site.components.Header = function () {
    const header = site.el("header", "site-header");
    const container = site.el("div", "container header-inner");
    container.append(site.components.Brand());
    header.append(container);
    return header;
  };
})(window.Consultoria);
