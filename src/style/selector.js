"use strict";

import { ruleNameToHTMLMap } from "highmark-markdown";

import { nodeQuery } from "../utilities/query";
import { EMPTY_STRING } from "../constants";
import { remainingContentFromNodeTokensAndOffset } from "../utilities/content";

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
  const nameTerminalNode = nameTerminalNodeQuery(node),
        noWhitespace = (nameTerminalNode === null);

  return noWhitespace;
}

function contentFromNodeAndTokens(node, tokens) {
  let content = EMPTY_STRING;

  const nameTerminalNode = nameTerminalNodeQuery(node);

  let offset = 0;

  if (nameTerminalNode !== null) {
    const nameTerminalNodeContent = nameTerminalNode.getContent(),
          ruleName = nameTerminalNodeContent, ///
          html = ruleNameToHTMLMap[ruleName] || null;

    if (html === null) {
      content = null;
    } else {
      if (html !== null) {
        const { tagName, className } = html;

        if (tagName !== null) {
          content = `${content}${tagName}`;
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
