"use strict";

import { contentFromNodeAndTokens } from "../utilities/content";

export default class Selector {
  constructor(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  combine(selector) {
    const outerSelector = this, ///
          innerSelector = selector, ///
          outerSelectorContent = outerSelector.getContent(),
          innerSelectorContent = innerSelector.getContent(),
          content = `${outerSelectorContent} ${innerSelectorContent}`;

    selector = Selector.fromContent(content);

    return selector;
  }

  asCSS() {
    const css = this.content; ///

    return css;
  }

  static fromContent(content) {
    const selector = new Selector(content);

    return selector;
  }

  static fromNodeAndTokens(node, tokens) {
    const content = contentFromNodeAndTokens(node, tokens),
          selector = new Selector(content);

    return selector;
  }
}
