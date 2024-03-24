"use strict";

import Document from "../document";
import StyleElement from "../styleElement";
import SelectorsList from "../selectorsList";
import MarkdownStyleLexer from "../markdownStyle/lexer";
import MarkdownStyleParser from "../markdownStyle/parser";

import { EMPTY_STRING } from "../constants";
import { createDOMElement } from "../styleElement";

const markdownStyleLexer = MarkdownStyleLexer.fromNothing(),
      markdownStyleParser = MarkdownStyleParser.fromNothing();

export default class MarkdownStyleElement extends StyleElement {
  constructor(domElement, selectorsList) {
    super(domElement);

    this.selectorsList = selectorsList;
  }

  getSelectorsList() {
    return this.selectorsList;
  }

  update(markdownStyle) {
    const css = cssFromMarkdownStyleAndSelectorsList(markdownStyle, this.selectorsList);

    this.setCSS(css);

    return css;
  }

  reset() {
    const markdownStyle = EMPTY_STRING;

    this.update(markdownStyle)
  }

  static fromSelectorString(Class, selectorString) {
    if (selectorString === undefined) {
      selectorString = Class; ///

      Class = MarkdownStyleElement; ///
    }

    const domElement = createDOMElement(),
          selectorsList = SelectorsList.fromSelectorString(selectorString),
          markdownStyleElement = new Class(domElement, selectorsList);

    return markdownStyleElement;
  }
}

function cssFromMarkdownStyleAndSelectorsList(markdownStyle, selectorsList) {
  let css = EMPTY_STRING;

  const lexer = markdownStyleLexer, ///
        parser =  markdownStyleParser,  ///
        content = markdownStyle, ///
        tokens = lexer.tokenise(content),
        node = parser.parse(tokens);

  if (node !== null) {
    const document = Document.fromNodeTokensAndSelectorsList(node, tokens, selectorsList);

    css = document.asCSS();
  }

  return css;
}
