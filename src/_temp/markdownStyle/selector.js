"use strict";

import { arrayUtilities } from "necessary";

import ruleNameToHTMLMap from "../../ruleNameToHTMLMap";
import MarkdownStyleNode from "../../node/markdownStyle";

import { EMPTY_STRING } from "../../constants";

const { first, third } = arrayUtilities;

export default class SelectorMarkdownStyleNode extends MarkdownStyleNode {
  asCSS(prepend, context) {
    let css = null;

    const ruleName = this.getRuleName(),
          html = ruleNameToHTMLMap[ruleName] || null;

    if (html !== null) {
      const { tagName } = html;

      if (tagName !== null) {
        const { className } = html,
              pseudoClassCSS = this.pseudoClassAsCSS(prepend, context);

        css = (className === null) ?
               `${prepend} ${tagName}${pseudoClassCSS}` :
                 `${prepend} ${tagName}.${className}${pseudoClassCSS}`;
      }
    }

    return css;
  }

  getRuleName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          nameTerminalNode = firstChildNode,  ///
          nameTerminalNodeContent = nameTerminalNode.getContent(),
          ruleName = nameTerminalNodeContent; ///

    return ruleName;
  }

  pseudoClassAsCSS(prepend, context) {
    let pseudoClassCSS = EMPTY_STRING;

    const childNodes = this.getChildNodes(),
          childNodesLength = childNodes.length;

    if (childNodesLength > 1) {
      const thirdChildNode = third(childNodes),
            pseudoClassMarkdownStyleNode = thirdChildNode,  ///
            pseudoClassMarkdownStyleNodeCSS = pseudoClassMarkdownStyleNode.asCSS(prepend, context);

      pseudoClassCSS = pseudoClassMarkdownStyleNodeCSS; ///
    }

    return pseudoClassCSS;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownStyleNode.fromRuleNameChildNodesAndAmbiguous(SelectorMarkdownStyleNode, ruleName, childNodes, ambiguous); }
}
