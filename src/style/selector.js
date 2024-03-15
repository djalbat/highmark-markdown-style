"use strict";

import { ruleNames, ruleNameToHTMLMap } from "highmark-markdown";

import { nodeQuery } from "../utilities/query";
import { EMPTY_STRING } from "../constants";
import { remainingContentFromNodeTokensAndOffset } from "../utilities/content";

const { STRONG_TEXT_RULE_NAME,
        ORDERED_LIST_RULE_NAME,
        UNORDERED_LIST_RULE_NAME,
        ORDERED_LIST_ITEM_RULE_NAME,
        UNORDERED_LIST_ITEM_RULE_NAME,
        STRONGLY_EMPHASISED_TEXT_RULE_NAME } = ruleNames,
      strongTextHTML = ruleNameToHTMLMap[STRONG_TEXT_RULE_NAME],
      orderedListHTML = ruleNameToHTMLMap[ORDERED_LIST_RULE_NAME],
      unorderedListHTML = ruleNameToHTMLMap[UNORDERED_LIST_RULE_NAME],
      { tagName: strongTextTagName } = strongTextHTML,
      { tagName: orderedListTagName } = orderedListHTML,
      { tagName: unorderedListTagName } = unorderedListHTML;

const ruleNameTerminalNodeQuery = nodeQuery("/selector/@rule-name");

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
          innerSelectorContent = innerSelector.getContent();

    selector = null;

    if (innerSelectorContent !== null) {
      const outerSelectorContent = outerSelector.getContent(),
            innerSelectorNoWhitespace = innerSelector.hasNoWhitespace(),
            content = (innerSelectorNoWhitespace) ?
                        `${outerSelectorContent}${innerSelectorContent}` :
                          `${outerSelectorContent} ${innerSelectorContent}`;

      selector = Selector.fromContent(content);
    }

    return selector;
  }

  asCSS() {
    const css = this.content; ///

    return css;
  }

  static fromContent(content) {
    const noWhitespace = false, ///
          selector = new Selector(content, noWhitespace);

    return selector;
  }

  static fromNodeAndTokens(node, tokens) {
    const content = contentFromNodeAndTokens(node, tokens),
          noWhitespace = noWhitespaceFromNode(node),
          selector = new Selector(content, noWhitespace);

    return selector;
  }

  static fromSelectorString(selectorString) {
    const content = selectorString, ///
          noWhitespace = false,
          selector = new Selector(content, noWhitespace);

    return selector;
  }
}

function noWhitespaceFromNode(node) {
  const ruleNameTerminalNode = ruleNameTerminalNodeQuery(node),
        noWhitespace = (ruleNameTerminalNode === null);

  return noWhitespace;
}

function contentFromNodeAndTokens(node, tokens) {
  let content = EMPTY_STRING;

  const ruleNameTerminalNode = ruleNameTerminalNodeQuery(node);

  let offset = 0;

  if (ruleNameTerminalNode !== null) {
    const ruleNameTerminalNodeContent = ruleNameTerminalNode.getContent(),
          ruleName = ruleNameTerminalNodeContent, ///
          html = ruleNameToHTMLMap[ruleName] || null;

    if (html === null) {
      content = null;
    } else {
      if (html !== null) {
        const { tagName, className } = html;

        if (tagName !== null) {
          content = `${content}${tagName}`;
        }

        switch (ruleName) {
          case STRONGLY_EMPHASISED_TEXT_RULE_NAME: {
            content = `${content} > ${strongTextTagName}`;

            break;
          }

          case ORDERED_LIST_ITEM_RULE_NAME: {
            content = `${orderedListTagName} > ${content}`;

            break;
          }

          case UNORDERED_LIST_ITEM_RULE_NAME: {
            content = `${unorderedListTagName} > ${content}`;

            break;
          }
        }

        if (className !== null) {
          content = `${content}.${className}`;
        }
      }

      offset = 1;
    }
  }

  if (content !== null) {
    const remainingContent = remainingContentFromNodeTokensAndOffset(node, tokens, offset);

    content = `${content}${remainingContent}`;
  }

  return content;
}
