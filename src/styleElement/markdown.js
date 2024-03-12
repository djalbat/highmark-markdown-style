"use strict";

import StyleElement from "../styleElement";
import MarkdownStyle from "../markdownStyle";
import MarkdownStyleLexer from "../markdownStyle/lexer";
import MarkdownStyleParser from "../markdownStyle/parser";

import { EMPTY_STRING } from "../constants";
import { createDOMElement } from "../styleElement";

const markdownStyleLexer = MarkdownStyleLexer.fromNothing(),
      markdownStyleParser = MarkdownStyleParser.fromNothing();

export default class MarkdownStyleElement extends StyleElement {
  constructor(domElement, selector) {
    super(domElement);

    this.selector = selector;
  }

  getSelector() {
    return selector;
  }

  update(markdownStyle) {
    let css = EMPTY_STRING;

    const lexer = markdownStyleLexer,
          parser =  markdownStyleParser,
          content = markdownStyle, ///
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens);

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
