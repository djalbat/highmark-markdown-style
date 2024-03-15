"use strict";

import Selectors from "../style/selectors";
import StyleElement from "../styleElement";
import MarkdownStyle from "../markdownStyle";
import MarkdownStyleLexer from "../markdownStyle/lexer";
import MarkdownStyleParser from "../markdownStyle/parser";

import { EMPTY_STRING } from "../constants";
import { createDOMElement } from "../styleElement";

const markdownStyleLexer = MarkdownStyleLexer.fromNothing(),
      markdownStyleParser = MarkdownStyleParser.fromNothing();

export default class MarkdownStyleElement extends StyleElement {
  constructor(domElement, selectors) {
    super(domElement);

    this.selectors = selectors;
  }

  getSelectors() {
    return this.selectors;
  }

  update(markdownStyle) {
    const css = cssFromMarkdownStyleAndSelectors(markdownStyle, this.selectors);

    this.setCSS(css);

    return css;
  }

  static fromSelectorString(Class, selectorString) {
    if (selectorString === undefined) {
      selectorString = Class; ///

      Class = MarkdownStyleElement; ///
    }

    const selectors = Selectors.fromSelectorString(selectorString),
          domElement = createDOMElement(),
          markdownStyleElement = new Class(domElement, selectors);

    return markdownStyleElement;
  }
}

export function cssFromMarkdownStyleAndSelectors(markdownStyle, selectors) {
  let css = EMPTY_STRING;

  const lexer = markdownStyleLexer, ///
        parser =  markdownStyleParser,  ///
        content = markdownStyle, ///
        tokens = lexer.tokenise(content),
        node = parser.parse(tokens);

  if (node !== null) {
    const markdownStyle = MarkdownStyle.fromNodeTokensAndSelectors(node, tokens, selectors);

    css = markdownStyle.asCSS();
  }

  return css;
}
