"use strict";

import Selector from "./selector";

import { EMPTY_STRING } from "../constants";
import { markdownStyleLexer } from "../markdownStyle/lexer";
import { markdownStyleParser } from "../markdownStyle/parser";
import { SELECTORS_RULE_NAME } from "../ruleNames";
import { nodeQuery, nodesQuery } from "../utilities/query";

const selectorsNonTerminalNodeQuery = nodeQuery("/ruleSet/selectors"),
      selectorNonTerminalNodesQuery = nodesQuery("/selectors/selector");

const ruleMap = markdownStyleParser.getRuleMap(),
      selectorsRule = ruleMap[SELECTORS_RULE_NAME],
      startRule = selectorsRule;  ///

export default class Selectors {
  constructor(array) {
    this.array = array;
  }

  getLength() { return this.array.length; }

  reduceSelector(callback, initialValue) { return this.array.reduce(callback, initialValue); }

  forEachSelector(callback) { this.array.forEach(callback); }

  combine(selectors) {
    const outerSelectors = Selectors.fromArray(this.array), ///
          innerSelectors = selectors, ///
          array = outerSelectors.reduceSelector((array, outerSelector) => {
            innerSelectors.forEachSelector((innerSelector) => {
              const selector = outerSelector.combine(innerSelector);

              array.push(selector);
            });

            return array;
          }, []);

    selectors = Selectors.fromArray(array);

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
                  `${css},
${selectorCSS}`;

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
    const selectorsNonTerminalNode = selectorsNonTerminalNodeQuery(node);

    node = selectorsNonTerminalNode;  ///

    const selectorNonTerminalNodes = selectorNonTerminalNodesQuery(node),
          array = selectorNonTerminalNodes.map((selectorNonTerminalNode) => {
            const node = selectorNonTerminalNode,  ///
                  selector = Selector.fromNodeAndTokens(node, tokens);

            return selector;
          }),
          selectors = new Selectors(array);

    return selectors;
  }

  static fromSelectorsString(selectorsString) {
    let selectors = null;

    const lexer = markdownStyleLexer,
          parser =  markdownStyleParser,
          content = selectorsString,  ///
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens, startRule);

    if (node !== null) {
      const selectorNonTerminalNodes = selectorNonTerminalNodesQuery(node),
            array = selectorNonTerminalNodes.map((selectorNonTerminalNode) => {
              const node = selectorNonTerminalNode,  ///
                    selector = Selector.fromNodeAndTokens(node, tokens);

              return selector;
            });

      selectors = new Selectors(array);
    }

    return selectors;
  }
}
