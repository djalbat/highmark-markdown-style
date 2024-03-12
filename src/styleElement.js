"use strict";

import { HEAD, STYLE } from "./constants";

export default class StyleElement {
  constructor(domElement) {
    this.domElement = domElement;
  }

  getDOMElement() {
    return this.domElement;
  }

  setDOMElement(domElement) {
    this.domElement = domElement;
  }

  getInnerHTML() {  return this.domElement.innerHTML; }

  setInnerHTML(innerHTML) { this.domElement.innerHTML = innerHTML; }

  setCSS(css) {
    const innerHTML = `
${css}
`;

    this.setInnerHTML(innerHTML);
  }

  static fromNothing(Class) {
    if (Class === undefined) {
      Class = StyleElement; ///
    }

    const domElement = createDOMElement(),
          styleElement = new Class(domElement);

    return styleElement;
  }
}

function createDOMElement() {
  const headDOMElement = document.querySelector(HEAD),
        styleDOMElement = document.createElement(STYLE);

  headDOMElement.appendChild(styleDOMElement);

  const domElement = styleDOMElement; ///

  return domElement;
}
