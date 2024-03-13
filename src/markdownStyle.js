"use strict";

import RuleSet from "./style/ruleSet";
import RuleSets from "./style/ruleSets";
import Declarations from "./style/declarations";

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
