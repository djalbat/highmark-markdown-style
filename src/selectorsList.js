"use strict";

import Selectors from "./selectors";

import { EMPTY_STRING } from "./constants";
import { nodeQuery, nodesQuery } from "./utilities/query";

const selectorsNonTerminalNodesQuery = nodesQuery("/selectorsList/selectors"),
      selectorsListNonTerminalNodeQuery = nodeQuery("/ruleSet/selectorsList");

export default class SelectorsList {
  constructor(array) {
    this.array = array;
  }

  getLength() { return this.array.length; }

  reduceSelectors(callback, initialValue) { return this.array.reduce(callback, initialValue); }

  forEachSelectors(callback) { this.array.forEach(callback); }

  combine(selectorsList, outermost = false) {
    const outerSelectorsList = SelectorsList.fromArray(this.array), ///
          innerSelectorsList = selectorsList, ///
          array = outerSelectorsList.reduceSelectors((array, outerSelectors) => {
                  innerSelectorsList.forEachSelectors((innerSelectors) => {
                    const selectors = outerSelectors.combine(innerSelectors, outermost);

                    if (selectors !== null) {
                      array.push(selectors);
                    }
                  });

            return array;
          }, []);

    selectorsList = SelectorsList.fromArray(array);

    return selectorsList;
  }

  asCSS() {
    let css = EMPTY_STRING;

    const length = this.getLength();

    if (length > 0) {
      css = this.array.reduce((css, selectors) => {
        const selectorsCSS = selectors.asCSS();

        css = (css === null) ?
                selectorsCSS : ///
                  `${css},
${selectorsCSS}`;

        return css;
      }, null);
    }

    return css;
  }

  static fromArray(array) {
    const selectorsList = new SelectorsList(array);

    return selectorsList;
  }

  static fromNodeAndTokens(node, tokens) {
    const selectorsListNonTerminalNode = selectorsListNonTerminalNodeQuery(node);

    node = selectorsListNonTerminalNode;  ///

    const selectorsNonTerminalNodes = selectorsNonTerminalNodesQuery(node),
          array = selectorsNonTerminalNodes.map((selectorsNonTerminalNode) => {
            const node = selectorsNonTerminalNode,  ///
                  selectors = Selectors.fromNodeAndTokens(node, tokens);

            return selectors;
          }),
          selectorsList = new SelectorsList(array);

    return selectorsList;
  }

  static fromSelectorsString(selectorsString) {
    const selectors = Selectors.fromSelectorsString(selectorsString),
          array = [
            selectors
          ],
          selectorsList = new SelectorsList(array);

    return selectorsList;
  }
}
