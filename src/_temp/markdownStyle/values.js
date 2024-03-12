"use strict";

import contentMixins from "../../mixins/content";
import MarkdownStyleNode from "../../node/markdownStyle";

export default class ValuesMarkdownStyleNode extends MarkdownStyleNode {
  asCSS(prepend, context) {
    const content = this.getContent(context),
          css = content;  ///

    return css;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownStyleNode.fromRuleNameChildNodesAndAmbiguous(ValuesMarkdownStyleNode, ruleName, childNodes, ambiguous); }
}

Object.assign(ValuesMarkdownStyleNode.prototype, contentMixins);
