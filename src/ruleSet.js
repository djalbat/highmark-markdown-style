"use strict";

import Declarations from "./declarations";
import SelectorsList from "./selectorsList";

import { EMPTY_STRING } from "./constants";

export default class RuleSet {
  constructor(ruleSets, declarations, selectorsList) {
    this.ruleSets = ruleSets;
    this.declarations = declarations;
    this.selectorsList = selectorsList;
  }

  getRuleSets() {
    return this.ruleSets;
  }

  getDeclarations() {
    return this.declarations;
  }

  getSelectorsList() {
    return this.selectorsList;
  }

  asCSS(selectorsList, outermost = false) {
    selectorsList = selectorsList.combine(this.selectorsList, outermost);  ///

    const declarationsCSS = this.declarations.asCSS(selectorsList),
          ruleSetsCSS = this.ruleSets.asCSS(selectorsList),
          css = (declarationsCSS === EMPTY_STRING) ?
                  ruleSetsCSS : ///
                    `${declarationsCSS}
${ruleSetsCSS}`;

    return css;
  }

  static fromRuleSetsNodeAndTokens(RuleSets, node, tokens) {
    const ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          declarations = Declarations.fromNodeAndTokens(node, tokens),
          selectorsList = SelectorsList.fromNodeAndTokens(node, tokens),
          ruleSet = new RuleSet(ruleSets, declarations, selectorsList);

    return ruleSet;
  }

  static fromRuleSetsNodeTokensAndDivisionName(RuleSets, node, tokens, divisionName) {
    const ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          declarations = Declarations.fromNodeAndTokens(node, tokens),
          selectorsList = SelectorsList.fromNodeTokensAndDivisionName(node, tokens, divisionName),
          ruleSet = new RuleSet(ruleSets, declarations, selectorsList);

    return ruleSet;
  }
}
