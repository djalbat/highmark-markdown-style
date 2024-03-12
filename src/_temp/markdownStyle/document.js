"use strict";

import MarkdownStyleNode from "../node/markdownStyle";

import ruleNameToHTMLMap from "../../ruleNameToHTMLMap";

import { DOCUMENT_RULE_NAME } from "../../ruleNames";

const html = ruleNameToHTMLMap[DOCUMENT_RULE_NAME],
      { tagName, className } = html;

export default class DocumentMarkdownStyleNode extends MarkdownStyleNode {
  asCSS(prepend, context) {
    prepend = `${prepend} ${tagName}.${className}`; ///

    const childNodesCSS = this.childNodesAsCSS(prepend, context),
          css = childNodesCSS;  ///

    return css;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownStyleNode.fromRuleNameChildNodesAndAmbiguous(DocumentMarkdownStyleNode, ruleName, childNodes, ambiguous); }
}
