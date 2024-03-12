"use strict";

import StyleElement from "../styleElement";
import MarkdownStyle from "../markdownStyle";

import { EMPTY_STRING } from "../constants";

export default class MarkdownStyleElement extends StyleElement {
  update(node, tokens, selector) {
    let css = EMPTY_STRING;

    if (node !== null) {
      const markdownStyle = MarkdownStyle.fromNodeTokensAndSelector(node, tokens, selector);

      css = markdownStyle.asCSS();
    }

    this.setCSS(css);

    return css;
  }

  static fromNothing() { return StyleElement.fromNothing(MarkdownStyleElement); }
}
