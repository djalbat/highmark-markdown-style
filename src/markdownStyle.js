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

  static fromNodeTokensAndSelectorsList(node, tokens, selectorsList) {
    const ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          ruleSet = RuleSet.fromRuleSetsAndSelectorsList(ruleSets, selectorsList),
          style = new MarkdownStyle(ruleSet);

    return style;
  }
}
