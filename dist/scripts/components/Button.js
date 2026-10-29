(function (site) {
  "use strict";
  site.components.Button = function () {
    const config = site.content.button;
    // Apenas destinos explícitos e protocolos seguros. Nesta fase: desativado.
    const validHref = /^(https?:\/\/|mailto:|tel:|#|\.\/)/i.test(config.href);
    const enabled = config.enabled === true && validHref;
    const button = site.el(enabled ? "a" : "button", "primary-button");
    if (enabled) {
      button.href = config.href;
    } else {
      button.type = "button";
      button.disabled = true;
      button.setAttribute("aria-describedby", "button-note");
    }
    const arrow = site.el("span", "button-arrow", "↗");
    arrow.setAttribute("aria-hidden", "true");
    button.append(site.el("span", "", config.label), arrow);
    return button;
  };
})(window.Consultoria);
