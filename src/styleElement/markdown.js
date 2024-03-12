"use strict";

import StyleElement from "../styleElement";
import MarkdownStyle from "../markdownStyle";

import { EMPTY_STRING } from "../constants";
import { createDOMElement } from "../styleElement";

export default class MarkdownStyleElement extends StyleElement {
  constructor(domElement, selector) {
    super(domElement);

    this.selector = selector;
  }

  getSelector() {
    return selector;
  }

  update(node, tokens) {
    let css = EMPTY_STRING;

    if (node !== null) {
      const markdownStyle = MarkdownStyle.fromNodeAndTokens(node, tokens);

      css = markdownStyle.asCSS(this.selector);
    }

    this.setCSS(css);

    return css;
  }



  static fromSelector(selector) {
    const domElement = createDOMElement(),
          markdownStyleElement = new MarkdownStyleElement(domElement, selector);

    return markdownStyleElement;
  }
}
