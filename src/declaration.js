"use strict";

import { COLOUR } from "./constants";
import { nodeQuery } from "./utilities/query";
import { contentFromNodeAndTokens } from "./utilities/content";

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

  asCSS() {
    const name = this.name.replace(/colour/g, COLOUR),
          css = `  ${name}: ${this.values};`;

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const nameTerminalNode = nameTerminalNodeQuery(node),
          valuesNonTerminalNode = valuesNonTerminalNodeQuery(node),
          nameTerminalNodeContent = nameTerminalNode.getContent(),
          valuesNonTerminalNodesContent = contentFromNodeAndTokens(valuesNonTerminalNode, tokens),
          name = nameTerminalNodeContent, ///
          values = valuesNonTerminalNodesContent, ///
          declaration = new Declaration(name, values);

    return declaration;
  }
}
