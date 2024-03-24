"use strict";

import RuleSets from "./ruleSets";

export default class Document {
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

  static fromNodeTokensAndSelectorsList(node, tokens, selectorsList) {
    const ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          document = new Document(ruleSets, selectorsList);

    return document;
  }
}
