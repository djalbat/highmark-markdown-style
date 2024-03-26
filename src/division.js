"use strict";

import RuleSets from "./ruleSets";

export default class Division {
  constructor(ruleSets, selectorsList) {
    this.ruleSets = ruleSets;
    this.selectorsList = selectorsList;
  }

  getRuleSets() {
    return this.ruleSets;
  }

  getSelectorsList() {
    return this.selectorsList;
  }

  asCSS() {
    const outermost = true,
          ruleSetsCSS = this.ruleSets.asCSS(this.selectorsList, outermost),
          css = ruleSetsCSS;  ///

    return css;
  }

  static fromNodeTokensDivisionNameAndSelectorsList(node, tokens, divisionName, selectorsList) {
    const ruleSets = RuleSets.fromNodeTokensAndDivisionName(node, tokens, divisionName),
          division = new Division(ruleSets, selectorsList);

    return division;
  }
}
