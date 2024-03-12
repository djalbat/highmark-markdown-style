"use strict";

import { NonTerminalNode } from "occam-parsers";

class MarkdownStyleNode extends NonTerminalNode {
  asCSS(prepend, context) {
    const css = null; ///

    return css;
  }

  childNodesAsCSS(prepend, context) {
    const { separator } = this.constructor,
          childNodes = this.getChildNodes(),
          childNodesCSS = childNodes.reduce((childNodesCSS, childNode) => {
            const childNodeNonTerminalNode = childNode.isNonTerminalNode();

            if (childNodeNonTerminalNode) {
              const nonTerminalNode = childNode,  ///
                    nonTerminalNodeCSS = nonTerminalNode.asCSS(prepend, context);

              if (nonTerminalNodeCSS !== null) {
                childNodesCSS = (childNodesCSS === null) ?
                                  nonTerminalNodeCSS :
                                    `${childNodesCSS}${separator}${nonTerminalNodeCSS}`;
              }
            }

            return childNodesCSS;
          }, null);

    return childNodesCSS;
  }

  static separator = "\n";

  static fromRuleNameChildNodesAndAmbiguous(Class, ruleName, childNodes, ambiguous, ...remainingArguments) {
    const markdownStyleNode = NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(Class, ruleName, childNodes, ambiguous, ...remainingArguments);

    return markdownStyleNode;
  }
}

export default MarkdownStyleNode;
