"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class ValueMarkdownStyleNode extends MarkdownStyleNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownStyleNode.fromRuleNameChildNodesAndAmbiguous(ValueMarkdownStyleNode, ruleName, childNodes, ambiguous); }
}
