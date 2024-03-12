"use strict";

import { nodeQuery } from "../utilities/query";
import { TWO_SPACES } from "../constants";
import { contentFromNonTerminalNodeAndTokens } from "../utilities/content";

const nameTerminalNodeQuery = nodeQuery("/*/@name"),
      valuesNonTerminalNodeQuery = nodeQuery("/*/values");

export default class Declaration {
  constructor(name, values) {
    this.name = name;
    this.values = values;
  }

  getName() {
    return this.name;
  }

  getValues() {
    return this.values;
  }

  asCSS(indent) {
    indent = indent + TWO_SPACES;

    const css = `${indent}${this.name}: ${this.values};\n`;

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const nameTerminalNode = nameTerminalNodeQuery(node),
          valuesNonTerminalNode = valuesNonTerminalNodeQuery(node),
          nameTerminalNodeContent = nameTerminalNode.getContent(),
          valuesNonTerminalNodesContent = contentFromNonTerminalNodeAndTokens(valuesNonTerminalNode, tokens),
          name = nameTerminalNodeContent, ///
          values = valuesNonTerminalNodesContent, ///
          declaration = new Declaration(name, values);

    return declaration;
  }
}
