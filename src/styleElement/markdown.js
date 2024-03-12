"use strict";

import StyleElement from "../styleElement";

import { EMPTY_STRING } from "../constants";
import { createDOMElement } from "../styleElement";

export default class MarkdownStyleElement extends StyleElement {
  constructor(domElement, prepend) {
    super(domElement);

    this.prepend = prepend;
  }

  getPrepend() {
    return this.prepend;
  }

  update(node, tokens) {
    let css = EMPTY_STRING;

    // if (node !== null) {
    //   const context = {
    //     tokens
    //   };
    //
    //   css = node.asCSS(this.prepend, context);
    // }

    this.setCSS(css);
  }

  static fromPrepend(prepend) {
    const domElement = createDOMElement(),
          markdownStyleElement = new MarkdownStyleElement(domElement, prepend);

    return markdownStyleElement;
  }
}
