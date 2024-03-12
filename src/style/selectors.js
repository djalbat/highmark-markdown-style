"use strict";

import Selector from "./selector";
import MarkdownStyleLexer from "../markdownStyle/lexer";
import MarkdownStyleParser from "../markdownStyle/parser";

import { nodeQuery, nodesQuery } from "../utilities/query";
import { SELECTORS_RULE_NAME } from "../constants";

const markdownStyleLexer = MarkdownStyleLexer.fromNothing(),
      markdownStyleParser = MarkdownStyleParser.fromNothing(),
      selectorsNonTerminalNodeQuery = nodeQuery("/ruleSet/selectors"),
      selectorNonTerminalNodesQuery = nodesQuery("/selectors/selector");

const ruleMap = markdownStyleParser.getRuleMap(),
      selectorsRule = ruleMap[SELECTORS_RULE_NAME],
      startRule = selectorsRule;  ///

export default class Selectors {
  constructor(array) {
    this.array = array;
  }

  forEachSelector(callback) { this.array.forEach(callback); }

  static fromNothing() {
    const array = [],
          selectors = new Selectors(array);

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
