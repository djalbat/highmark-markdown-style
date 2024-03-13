"use strict";

import Selectors from "../style/selectors";
import StyleElement from "../styleElement";
import MarkdownStyle from "../markdownStyle";

import { EMPTY_STRING } from "../constants";
import { createDOMElement } from "../styleElement";
import { markdownStyleLexer } from "../markdownStyle/lexer";
import { markdownStyleParser } from "../markdownStyle/parser";

export default class MarkdownStyleElement extends StyleElement {
  constructor(domElement, selectors) {
    super(domElement);

    this.selectors = selectors;
  }

  getSelectors() {
    return selectors;
  }

  update(markdownStyle) {
    let css = EMPTY_STRING;

    const lexer = markdownStyleLexer,
          parser =  markdownStyleParser,
          content = markdownStyle, ///
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens);

    if (node !== null) {
      const markdownStyle = MarkdownStyle.fromNodeTokensAndSelectors(node, tokens, this.selectors);

      css = markdownStyle.asCSS();
    }

    this.setCSS(css);

    return css;
  }

  static fromSelectorsString(selectorString) {
    const selectors = Selectors.fromSelectorsString(selectorString),
          domElement = createDOMElement(),
          markdownStyleElement = new MarkdownStyleElement(domElement, selectors);

    return markdownStyleElement;
  }
}
