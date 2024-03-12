"use strict";

import { arrayUtilities } from "necessary";

import MarkdownStyleNode from "../../node/markdownStyle";

const { third } = arrayUtilities;

export default class PseudoClassMarkdownStyleNode extends MarkdownStyleNode {
  asCSS(prepend, context) {
    const childNodes = this.getChildNodes(),
          thirdChildNode = third(childNodes),
          nameTerminalNode = thirdChildNode,  ///
          nameTerminalNodeContent = nameTerminalNode.getContent(),
          css = `:${nameTerminalNodeContent}`;

    return css;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownStyleNode.fromRuleNameChildNodesAndAmbiguous(PseudoClassMarkdownStyleNode, ruleName, childNodes, ambiguous); }
}