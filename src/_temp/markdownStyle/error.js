"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class ErrorMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownStyleNode.fromRuleNameChildNodesAndAmbiguous(ErrorMarkdownStyleNode, ruleName, childNodes, ambiguous); }
}