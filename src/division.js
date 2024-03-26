"use strict";

import RuleSets from "./ruleSets";
import Declarations from "./declarations";

import { EMPTY_STRING } from "./constants";

export default class Division {
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

  asCSS() {
    const outermost = true,
          ruleSetsCSS = this.ruleSets.asCSS(this.selectorsList, outermost),
          declarationsCSS = this.declarations.asCSS(this.selectorsList, outermost),
          css = (declarationsCSS === EMPTY_STRING) ?
                  ruleSetsCSS : ///
                    `${declarationsCSS}
${ruleSetsCSS}`;

    return css;
  }

  static fromNodeTokensAndSelectorsList(node, tokens, selectorsList) {
    const ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          declarations = Declarations.fromNodeAndTokens(node, tokens),
          division = new Division(ruleSets, declarations, selectorsList);

    return division;
  }
}
