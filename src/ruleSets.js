"use strict";

import RuleSet from "./ruleSet";

import { nodesQuery } from "./utilities/query";
import { EMPTY_STRING } from "./constants";

const ruleSetNonTerminalNodesQuery = nodesQuery("/*/ruleSet");

export default class RuleSets {
  constructor(array) {
    this.array = array;
  }

  getLength() { return this.array.length; }

  asCSS(selectors) {
    let css = EMPTY_STRING;

    const length = this.getLength(),
          selectorsLength = selectors.getLength();

    if ((length > 0) && (selectorsLength > 0)) {
      css = this.array.reduce((css, ruleSet) => {
        const ruleSetCSS = ruleSet.asCSS(selectors);

        css = (css === null) ?
                ruleSetCSS :  ///
                  `${css}${ruleSetCSS}`;

        return css;
      }, null);
    }

    return css;
  }

  static fromNothing() {
    const array = [],
          ruleSets = new RuleSets(array);

    return ruleSets;
  }

  static fromNodeAndTokens(node, tokens) {
    const ruleSetNonTerminalNodes = ruleSetNonTerminalNodesQuery(node),
          array = ruleSetNonTerminalNodes.map((ruleSetNonTerminalNode) => {
            const node = ruleSetNonTerminalNode, ///
                  ruleSet = RuleSet.fromRuleSetsNodeAndTokens(RuleSets, node, tokens);

            return ruleSet;
          }),
          ruleSets = new RuleSets(array);

    return ruleSets;
  }
}
