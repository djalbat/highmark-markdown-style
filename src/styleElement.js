"use strict";

import withStyle from "easy-with-style";  ///

import { EMPTY_STRING } from "./constants";

const { renderStyle } = withStyle;

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

  getCSS() {
    const innerHTML = this.domElement.innerHTML,
          css = innerHTML;  //

    return css;
  }

  setCSS(css) {
    const innerHTML = `
${css}
`;

    this.domElement.innerHTML = innerHTML;
  }

  static fromNothing() {
    const domElement = createDOMElement(),
          styleElement = new StyleElement(domElement);

    return styleElement;
  }
}

export function createDOMElement() {
  const style = EMPTY_STRING,
        domElement = renderStyle(style);

  return domElement;
}
