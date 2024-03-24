"use strict";

import RuleSet from "./ruleSet";
import RuleSets from "./ruleSets";

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
    const ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          ruleSet = RuleSet.fromRuleSetsAndSelectors(ruleSets, selectors),
          style = new MarkdownStyle(ruleSet);

    return style;
  }
}
