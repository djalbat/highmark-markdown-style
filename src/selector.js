"use strict";

import { ruleNames, ruleNameToHTMLMap } from "highmark-markdown";

import { nodeQuery } from "./utilities/query";
import { EMPTY_STRING } from "./constants";
import { remainingContentFromNodeTokensAndOffset } from "./utilities/content";

const { DIVISION_RULE_NAME,
        STRONG_TEXT_RULE_NAME,
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

  static fromSelectorString(selectorString) {
    const content = selectorString, ///
          whitespace = true,
          selector = new Selector(content, whitespace);

    return selector;
  }

  static fromNodeAndTokens(node, tokens) {
    const divisionName = null,
          content = contentFromNodeTokensAndDivisionName(node, tokens, divisionName),
          whitespace = whitespaceFromNode(node),
          selector = new Selector(content, whitespace);

    return selector;
  }

  static fromNodeTokensAndDivisionName(node, tokens, divisionName) {
    const content = contentFromNodeTokensAndDivisionName(node, tokens, divisionName),
          whitespace = whitespaceFromNode(node),
          selector = new Selector(content, whitespace);

    return selector;
  }
}

function whitespaceFromNode(node) {
  const ruleNameTerminalNode = ruleNameTerminalNodeQuery(node),
        whitespace = (ruleNameTerminalNode !== null);

  return whitespace;
}

function contentFromNodeTokensAndDivisionName(node, tokens, divisionName = null) {
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
          case DIVISION_RULE_NAME: {
            if (divisionName !== null) {
              const className = divisionName; ///

              content = `${content}.${className}`;
            }

            break;
          }

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
