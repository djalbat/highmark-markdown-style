"use strict";

import RuleSet from "./style/ruleSet";
import RuleSets from "./style/ruleSets";
import Declarations from "./style/declarations";

export default class MarkdownStyle {
  constructor(ruleSets) {
    this.ruleSets = ruleSets;
  }

  getRuleSets() {
    return this.ruleSets;
  }

  asCSS(selector) {
    const ruleSetsCSS = this.ruleSets.asCSS(selector),
          css = ruleSetsCSS;  ///

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const declarations = Declarations.fromNodeAndTokens(node, tokens),
          ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          ruleSet = RuleSet.fromRuleSetsAndDeclarations(RuleSets, declarations);

    ruleSets.unshiftRuleSet(ruleSet);

    const style = new MarkdownStyle(ruleSets);

    return style;
  }
}
