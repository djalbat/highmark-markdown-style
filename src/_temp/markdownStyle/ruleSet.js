"use strict";

import { arrayUtilities } from "necessary";

import MarkdownStyleNode from "../../node/markdownStyle";

const { first, second } = arrayUtilities;

export default class RuleSetMarkdownStyleNode extends MarkdownStyleNode {
  asCSS(prepend, context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          selectorsMarkdownStyleNode = firstChildNode, ///
          selectorsMarkdownStyleNodeCSS = selectorsMarkdownStyleNode.asCSS(prepend, context);

    prepend = `${selectorsMarkdownStyleNodeCSS}`; ///

    const secondChildNode = second(childNodes),
          declarationBlockMarkdownNode = secondChildNode, ///
          declarationBlockMarkdownNodeCSS = declarationBlockMarkdownNode.asCSS(prepend, context),
          css = declarationBlockMarkdownNodeCSS;  ///

    return css;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownStyleNode.fromRuleNameChildNodesAndAmbiguous(RuleSetMarkdownStyleNode, ruleName, childNodes, ambiguous); }
}
