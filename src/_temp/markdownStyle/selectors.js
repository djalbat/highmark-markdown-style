"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class SelectorsMarkdownStyleNode extends MarkdownStyleNode {
  asCSS(prepend, context) {
    const childNodesCSS = this.childNodesAsCSS(prepend, context),
          css = childNodesCSS;  ///

    return css;
  }

  static separator = ",\n";

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownStyleNode.fromRuleNameChildNodesAndAmbiguous(SelectorsMarkdownStyleNode, ruleName, childNodes, ambiguous); }
}