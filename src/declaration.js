"use strict";

import { COLOUR } from "./constants";
import { nodeQuery } from "./utilities/query";
import { contentFromNodeAndTokens } from "./utilities/content";

const nameNonTerminalNodeQuery = nodeQuery("/*/name"),
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
    const nameNonTerminalNode = nameNonTerminalNodeQuery(node),
          valuesNonTerminalNode = valuesNonTerminalNodeQuery(node),
          nameNonTerminalNodeContent = contentFromNodeAndTokens(nameNonTerminalNode, tokens),
          valuesNonTerminalNodesContent = contentFromNodeAndTokens(valuesNonTerminalNode, tokens),
          name = nameNonTerminalNodeContent, ///
          values = valuesNonTerminalNodesContent, ///
          declaration = new Declaration(name, values);

    return declaration;
  }
}
