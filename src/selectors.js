"use strict";

import { arrayUtilities } from "necessary";

import Selector from "./selector";

import { nodesQuery } from "./utilities/query";

const selectorNonTerminalNodesQuery = nodesQuery("/selectors/selector");

const { first } = arrayUtilities;

export default class Selectors {
  constructor(content, whitespace) {
    this.content = content;
    this.whitespace = whitespace;
  }

  getContent() {
    return this.content;
  }

  hasWhitespace() {
    return this.whitespace;
  }

  combine(selectors, outermost = false) {
    if (selectors !== null) {
      const outerSelectors = this,  ///
            innerSelectors = selectors, ///
            outerSelectorsContent = outerSelectors.getContent(),
            innerSelectorsContent = innerSelectors.getContent(),
            outerSelectorsWhitespace = outerSelectors.hasWhitespace(),
            innerSelectorsWhitespace = innerSelectors.hasWhitespace();

      selectors = null;

      if (outermost && !innerSelectorsWhitespace) {
        ///
      } else {
        if ((outerSelectorsContent !== null) && (innerSelectorsContent !== null)) {
          const content = `${outerSelectorsContent}${innerSelectorsContent}`,
                whitespace = outerSelectorsWhitespace;

          selectors = Selectors.fromContentAndWhitespace(content, whitespace);
        }
      }
    }

    return selectors;
  }

  asCSS() {
    const css = this.content; ///

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const divisionName = null,
          selectors = selectorsFromNodeTokensAndDivisionName(node, tokens, divisionName);

    return selectors;
  }

  static fromSelectorString(selectorString) {
    const selector = Selector.fromSelectorString(selectorString),
          content = selector.getContent(),
          whitespace = selector.hasWhitespace(),
          selectors = new Selectors(content, whitespace);

    return selectors;
  }

  static fromContentAndWhitespace(content, whitespace) {
    const selectors = new Selectors(content, whitespace);

    return selectors;
  }

  static fromNodeTokensAndDivisionName(node, tokens, divisionName) {
    const selectors = selectorsFromNodeTokensAndDivisionName(node, tokens, divisionName);

    return selectors;
  }
}

function selectorsFromNodeTokensAndDivisionName(node, tokens, divisionName) {
  let selectors = null;

  const selectorNonTerminalNodes = selectorNonTerminalNodesQuery(node),
        selectorArray = selectorNonTerminalNodes.reduce((selectorArray, selectorNonTerminalNode) => {
          const node = selectorNonTerminalNode,  ///
                selector = Selector.fromNodeTokensAndDivisionName(node, tokens, divisionName);

          if (selector !== null) {
            selectorArray.push(selector);
          }

          return selectorArray;
        }, []),
        selectorsArrayLength = selectorArray.length;

  if (selectorsArrayLength > 0) {
    const firstSelector = first(selectorArray),
          selector = firstSelector, ///
          content = selectorArray.reduce((content, selector) => {
            const selectorContent = selector.getContent(),
                  selectorWhitespace = selector.hasWhitespace();

            if (content === null) {
              content = selectorWhitespace ?
                         ` ${selectorContent}` :
                           `${selectorContent}`;
            } else {
              content = selectorWhitespace ?
                         `${content} ${selectorContent}` :
                           `${content}${selectorContent}`;
            }

            return content;
          }, null),
          whitespace = selector.hasWhitespace();

    selectors = new Selectors(content, whitespace);
  }

  return selectors;
}
