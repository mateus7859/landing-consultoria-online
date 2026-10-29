(function (site) {
  "use strict";
  site.components.Brand = function () {
    const brand = site.el("div", "brand");
    const symbol = site.el("span", "brand-symbol");
    symbol.setAttribute("aria-hidden", "true");
    symbol.append(site.el("span", "brand-symbol-line"));
    brand.append(symbol, site.el("span", "brand-name", site.content.brand.name));
    return brand;
  };
})(window.Consultoria);
