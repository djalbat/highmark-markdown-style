"use strict";

import RuleSet from "./ruleSet";
import RuleSets from "./ruleSets";
import Declarations from "./declarations";

export default class MarkdownStyle {
  constructor(ruleSet) {
    this.ruleSet = ruleSet;
  }

  getRuleSet() {
    return this.ruleSet;
  }

  asCSS() {
    const ruleSetsCSS = this.ruleSet.asCSS(),
          css = ruleSetsCSS;  ///

    return css;
  }

  static fromNodeTokensAndSelectors(node, tokens, selectors) {
    const declarations = Declarations.fromNodeAndTokens(node, tokens),
          ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          ruleSet = RuleSet.fromRuleSetsSelectorsAndDeclarations(ruleSets, selectors, declarations),
          style = new MarkdownStyle(ruleSet);

    return style;
  }
}
