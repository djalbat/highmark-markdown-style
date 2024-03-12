"use strict";

import Selectors from "./selectors";
import Declarations from "./declarations";

import { EMPTY_STRING } from "../constants";

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

  asCSS(selectors) {
    let css = EMPTY_STRING;

    const declarationsCSS = this.declarations.asCSS();

    if (declarationsCSS !== EMPTY_STRING) {
      selectors.forEachSelector((selector) => {
        const outerSelector = selector, ///
              outerSelectorCSS = outerSelector.asCSS();

        this.selectors.forEachSelector((selector) => {
          const innerSelector = selector, ///
                innerSelectorCSS = innerSelector.asCSS();

          css = `${outerSelectorCSS} ${innerSelectorCSS} {
${declarationsCSS}}

`;
        });
      });
    }

    return css;
  }

  static fromRuleSetsAndDeclarations(RuleSets, declarations) {
    const ruleSets = RuleSets.fromNothing(),
          selectors = Selectors.fromNothing(),
          ruleSet = new RuleSet(ruleSets, selectors, declarations);

    return ruleSet;
  }

  static fromRuleSetsNodeAndTokens(RuleSets, node, tokens) {
    const ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          selectors = Selectors.fromNodeAndTokens(node, tokens),
          declarations = Declarations.fromNodeAndTokens(node, tokens),
          ruleSet = new RuleSet(ruleSets, selectors, declarations);

    return ruleSet;
  }
}
