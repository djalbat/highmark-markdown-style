"use strict";

import RuleSets from "./style/ruleSets";
import Declarations from "./style/declarations";

import { EMPTY_STRING } from "./constants";

export default class MarkdownStyle {
  constructor(declarations, ruleSets) {
    this.declarations = declarations;
    this.ruleSets = ruleSets;
  }

  getDeclarations() {
    return this.declarations;
  }

  getRuleSets() {
    return this.ruleSets;
  }

  asCSS() {
    const indent = EMPTY_STRING,
          declarationsCSS = this.declarations.asCSS(indent),
          ruleSetsCSS = this.ruleSets.asCSS(indent),
          css = `${declarationsCSS}${ruleSetsCSS}`;

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const declarations = Declarations.fromNodeAndTokens(node, tokens),
          ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          style = new MarkdownStyle(declarations, ruleSets);

    return style;
  }
}
