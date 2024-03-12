"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class DeclarationsMarkdownStyleNode extends MarkdownStyleNode {
  asCSS(prepend, context) {
    const childNodesCSS = this.childNodesAsCSS(prepend, context),
          css = `${prepend} {
${childNodesCSS}
}
`;

    return css;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownStyleNode.fromRuleNameChildNodesAndAmbiguous(DeclarationsMarkdownStyleNode, ruleName, childNodes, ambiguous); }
}
