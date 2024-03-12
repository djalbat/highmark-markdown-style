"use strict";

import RuleSet from "./ruleSet";

import { nodesQuery } from "../utilities/query";
import { EMPTY_STRING } from "../constants";

const ruleSetNonTerminalNodesQuery = nodesQuery("/*/ruleSet");

export default class RuleSets {
  constructor(array) {
    this.array = array;
  }

  pushRuleSet(ruleSet) {
    this.array.push(ruleSet);
  }

  getLength() { return this.array.length; }

  asCSS() {
    const css = this.array.reduce((css, ruleSet) => {
      const ruleSetCSS = ruleSet.asCSS();

      css += ruleSetCSS;

      return css;
    }, EMPTY_STRING);

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
