"use strict";

import Division from "../division";
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

  update(markdownStyle = null) {
    const css = cssFromMarkdownStyleAndSelectorsList(markdownStyle, this.selectorsList);

    this.setCSS(css);

    return css;
  }

  reset() {
    const markdownStyle = EMPTY_STRING;

    this.update(markdownStyle)
  }

  static fromSelectorsString(Class, selectorString) {
    if (selectorString === undefined) {
      selectorString = Class; ///

      Class = MarkdownStyleElement; ///
    }

    const domElement = createDOMElement(),
          selectorsList = SelectorsList.fromSelectorsString(selectorString),
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
    const division = Division.fromNodeTokensAndSelectorsList(node, tokens, selectorsList);

    css = division.asCSS();
  }

  return css;
}
