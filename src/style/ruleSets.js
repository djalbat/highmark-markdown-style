"use strict";

import { Query } from "occam-query";

import RuleSet from "./ruleSet";

import { EMPTY_STRING } from "../constants";

const ruleSetQuery = Query.fromExpression("/*/ruleSet");

export default class RuleSets {
  constructor(array) {
    this.array = array;
  }

  forEach(callback) {
    this.array.forEach(callback);
  }

  asCSS(indent) {
    const css = this.array.reduce((css, ruleSet) => {
      const ruleSetCSS = ruleSet.asCSS(indent);

      css += ruleSetCSS;

      return css;
    }, EMPTY_STRING);

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const ruleSetNodes = ruleSetQuery.execute(node),
          array = ruleSetNodes.map((ruleSetNode) => {
            const node = ruleSetNode, ///
                  ruleSet = RuleSet.fromNodeAndTokens(node, tokens);

            return ruleSet;
          }),
          ruleSets = new RuleSets(array);

    return ruleSets;
  }
}
