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

  asCSS() {
    const ruleSetsCSS = this.ruleSets.asCSS(),
          css = ruleSetsCSS;  ///

    return css;
  }

  static fromNodeTokensAndSelector(node, tokens, selector) {
    const declarations = Declarations.fromNodeAndTokens(node, tokens),
          ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          ruleSet = RuleSet.fromSelectorAndDeclarations(selector, declarations);

    ruleSets.pushRuleSet(ruleSet);

    const style = new MarkdownStyle(ruleSets);

    return style;
  }
}
