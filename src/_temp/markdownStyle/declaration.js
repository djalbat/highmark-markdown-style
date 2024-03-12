"use strict";

import { arrayUtilities } from "necessary";

import MarkdownStyleNode from "../../node/markdownStyle";

const { first, third } = arrayUtilities;

export default class DeclarationMarkdownStyleNode extends MarkdownStyleNode {
  asCSS(prepend, context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          thirdChildNode = third(childNodes),
          nameTerminalNode = firstChildNode, ///
          valuesMarkdownStyleNode = thirdChildNode,
          nameTerminalNodeContent = nameTerminalNode.getContent(),
          valuesMarkdownStyleNodeCSS = valuesMarkdownStyleNode.asCSS(prepend, context),
          css = `  ${nameTerminalNodeContent}:${valuesMarkdownStyleNodeCSS};`;

    return css;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownStyleNode.fromRuleNameChildNodesAndAmbiguous(DeclarationMarkdownStyleNode, ruleName, childNodes, ambiguous); }
}
