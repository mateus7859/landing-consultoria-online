(function (site) {
  "use strict";
  // Conteúdo tratado como texto: não é necessário editar HTML nos componentes.
  site.el = function (tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };
})(window.Consultoria);
