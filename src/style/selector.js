"use strict";

import { nodeQuery } from "../utilities/query";
import { SELECTOR_RULE_NAME } from "../ruleNames";
import { markdownStyleLexer } from "../markdownStyle/lexer";
import { markdownStyleParser } from "../markdownStyle/parser";
import { contentFromNodeAndTokens } from "../utilities/content";

const ruleMap = markdownStyleParser.getRuleMap(),
      selectorRule = ruleMap[SELECTOR_RULE_NAME],
      startRule = selectorRule;  ///

const nameTerminalNodeQuery = nodeQuery("/selector/@name");

export default class Selector {
  constructor(content, noWhitespace) {
    this.content = content;
    this.noWhitespace = noWhitespace;
  }

  getContent() {
    return this.content;
  }

  hasNoWhitespace() {
    return this.noWhitespace;
  }

  combine(selector) {
    const outerSelector = this, ///
          innerSelector = selector, ///
          outerSelectorContent = outerSelector.getContent(),
          innerSelectorContent = innerSelector.getContent(),
          innerSelectorNoWhitespace = innerSelector.hasNoWhitespace(),
          content = (innerSelectorNoWhitespace) ?
                      `${outerSelectorContent}${innerSelectorContent}` :
                        `${outerSelectorContent} ${innerSelectorContent}`;

    selector = Selector.fromContent(content);

    return selector;
  }

  asCSS() {
    const css = this.content; ///

    return css;
  }

  static fromContent(content) {
    const tokens = markdownStyleLexer.tokenise(content),
          node = markdownStyleParser.parse(tokens, startRule),
          noWhitespace = noWhitespaceFromNode(node),
          selector = new Selector(content, noWhitespace);

    return selector;
  }

  static fromNodeAndTokens(node, tokens) {
    const noWhitespace = noWhitespaceFromNode(node),
          content = contentFromNodeAndTokens(node, tokens),
          selector = new Selector(content, noWhitespace);

    return selector;
  }
}

function noWhitespaceFromNode(node) {
  const nameTerminalNode = nameTerminalNodeQuery(node),
        noWhitespace = (nameTerminalNode === null);

  return noWhitespace;
}