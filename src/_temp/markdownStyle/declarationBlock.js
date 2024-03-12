"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class DeclarationBlockMarkdownStyleNode extends MarkdownStyleNode {
  asCSS(prepend, context) {
    const childNodesCSS = this.childNodesAsCSS(prepend, context),
          css = childNodesCSS;  ///

    return css;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownStyleNode.fromRuleNameChildNodesAndAmbiguous(DeclarationBlockMarkdownStyleNode, ruleName, childNodes, ambiguous); }
}

