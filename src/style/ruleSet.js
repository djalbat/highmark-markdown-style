"use strict";

import Declarations from "./declarations";

import { nodeQuery } from "../utilities/query";
import { EMPTY_STRING } from "../constants";
import { contentFromNonTerminalNodeAndTokens } from "../utilities/content";

const selectorsNonTerminalNodeQuery = nodeQuery("/*/selectors");

export default class RuleSet {
  constructor(ruleSets, selectors, declarations) {
    this.ruleSets = ruleSets;
    this.selectors = selectors;
    this.declarations = declarations;
  }

  getRuleSets() {
    return this.ruleSets;
  }

  getSelectors() {
    return this.selectors;
  }

  getDeclarations() {
    return this.declarations;
  }

  asCSS() {
    let css = EMPTY_STRING;

    const declarationsLength = this.declarations.getLength(),
          ruleSetsLength = this.ruleSets.getLength(),
          length = declarationsLength + ruleSetsLength;

    if (length > 0) {
      const declarationsCSS = this.declarations.asCSS(),
            ruleSetsCSS = this.ruleSets.asCSS();

      css = `${this.selectors} {
${declarationsCSS}}
${ruleSetsCSS}

`;
    }

    return css;
  }

  static fromRuleSetsSelectorAndDeclarations(RuleSets, selector, declarations) {
    const ruleSets = RuleSets.fromNothing(),
          selectors = selector, ///
          ruleSet = new RuleSet(ruleSets, selectors, declarations);

    return ruleSet;
  }

  static fromRuleSetsNodeAndTokens(RuleSets, node, tokens) {
    const ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          selectors = selectorsFromNodeAndTokens(node, tokens),
          declarations = Declarations.fromNodeAndTokens(node, tokens),
          ruleSet = new RuleSet(ruleSets, selectors, declarations);

    return ruleSet;
  }
}

function selectorsFromNodeAndTokens(node, tokens) {
  const selectorsNonTerminalNode = selectorsNonTerminalNodeQuery(node),
        selectorsNonTerminalNodeContent = contentFromNonTerminalNodeAndTokens(selectorsNonTerminalNode, tokens),
        selectors = `${selectorsNonTerminalNodeContent}`;

  return selectors;
}
