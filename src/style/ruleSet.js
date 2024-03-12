"use strict";

import Declarations from "./declarations";

import { nodeQuery } from "../utilities/query";
import { EMPTY_STRING } from "../constants";
import { contentFromNodeAndTokens } from "../utilities/content";

const selectorsNonTerminalNodeQuery = nodeQuery("/*/selectors");

export default class RuleSet {
  constructor(selectors, declarations) {
    this.selectors = selectors;
    this.declarations = declarations;
  }

  getSelectors() {
    return this.selectors;
  }

  getDeclarations() {
    return this.declarations;
  }

  asCSS(indent) {
    let css = EMPTY_STRING;

    const declarationsCSS = this.declarations.asCSS(indent);

    if (declarationsCSS !== EMPTY_STRING) {
       css = `${indent}${this.selectors} {
${declarationsCSS}${indent}}

`;
    }

    return css;
  }

  static fromSelectorAndDeclarations(selector, declarations) {
    const selectors = selector, ///
          ruleSet = new RuleSet(selectors, declarations);

    return ruleSet;
  }

  static fromNodeAndTokens(node, tokens) {
    const selectors = selectorsFromNodeAndTokens(node, tokens),
          declarations = Declarations.fromNodeAndTokens(node, tokens),
          ruleSet = new RuleSet(selectors, declarations);

    return ruleSet;
  }
}

function selectorsFromNodeAndTokens(node, tokens) {
  const selectorsNonTerminalNode = selectorsNonTerminalNodeQuery(node),
        selectorsNonTerminalNodeContent = contentFromNodeAndTokens(selectorsNonTerminalNode, tokens),
        selectors = `${selectorsNonTerminalNodeContent}`;

  return selectors;
}
