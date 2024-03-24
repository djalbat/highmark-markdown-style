"use strict";

import Selectors from "./selectors";
import Declarations from "./declarations";

import { EMPTY_STRING } from "./constants";

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

  asCSS(selectors = null) {
    selectors = (selectors === null) ?
                  this.selectors :
                    selectors.combine(this.selectors);

    const declarationsCSS = this.declarations.asCSS(selectors),
          ruleSetsCSS = this.ruleSets.asCSS(selectors),
          css = (declarationsCSS === EMPTY_STRING) ?
                  ruleSetsCSS : ///
                    `${declarationsCSS}
${ruleSetsCSS}`;

    return css;
  }

  static fromRuleSetsNodeAndTokens(RuleSets, node, tokens) {
    const ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          selectors = Selectors.fromNodeAndTokens(node, tokens),
          declarations = Declarations.fromNodeAndTokens(node, tokens),
          ruleSet = new RuleSet(ruleSets, selectors, declarations);

    return ruleSet;
  }

  static fromRuleSetsAndSelectors(ruleSets, selectors) {
    const declarations = Declarations.fromNothing(),
          ruleSet = new RuleSet(ruleSets, selectors, declarations);

    return ruleSet;
  }
}
