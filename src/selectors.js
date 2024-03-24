"use strict";

import Selector from "./selector";

import { nodesQuery } from "./utilities/query";
import { EMPTY_STRING } from "./constants";

const selectorNonTerminalNodesQuery = nodesQuery("/selectors/selector");

export default class Selectors {
  constructor(array) {
    this.array = array;
  }

  getArray() {
    return this.array;
  }

  getLength() { return this.array.length; }

  combine(selectors) {
    const selectorsArray = selectors.getArray(),
          array = [
            ...this.array,
            ...selectorsArray
          ];

    selectors = Selectors.fromArray(array); ///

    return selectors;
  }

  asCSS() {
    let css = EMPTY_STRING;

    const length = this.getLength();

    if (length > 0) {
      css = this.array.reduce((css, selector) => {
        const selectorCSS = selector.asCSS();

        css = (css === null) ?
                selectorCSS : ///
                  `${css} ${selectorCSS}`;

        return css;
      }, null);
    }

    return css;
  }

  static fromArray(array) {
    const selectors = new Selectors(array);

    return selectors;
  }

  static fromNodeAndTokens(node, tokens) {
    const selectorNonTerminalNodes = selectorNonTerminalNodesQuery(node),
          array = selectorNonTerminalNodes.map((selectorNonTerminalNode) => {
            const node = selectorNonTerminalNode,  ///
                  selector = Selector.fromNodeAndTokens(node, tokens);

            return selector;
          }),
          selectors = new Selectors(array);

    return selectors;
  }

  static fromSelectorString(selectorString) {
    const selector = Selector.fromSelectorString(selectorString),
          array = [
            selector
          ],
          selectors = new Selectors(array);

    return selectors;
  }
}
