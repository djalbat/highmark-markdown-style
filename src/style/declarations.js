"use strict";

import Declaration from "./declaration";

import { nodesQuery } from "../utilities/query";
import { EMPTY_STRING } from "../constants";

const declarationNonTerminalNodesQuery = nodesQuery("/*/declaration");

export default class Declarations {
  constructor(array) {
    this.array = array;
  }

  someDeclaration(callback) { return this.array.some(callback); }

  asCSS(indent) {
    const declarationsCSS = this.array.reduce((declarationsCSS, declaration) => {
            const declarationCSS = declaration.asCSS(indent);

            declarationsCSS += declarationCSS;

            return declarationsCSS;
          }, EMPTY_STRING),
          css = declarationsCSS;  ///

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const declarationNonTerminalNodes = declarationNonTerminalNodesQuery(node),
          array = declarationNonTerminalNodes.map((declarationNonTerminalNode) => {
            const node = declarationNonTerminalNode, ///
                  declaration = Declaration.fromNodeAndTokens(node, tokens);

            return declaration;
          }),
          declarations = new Declarations(array);

    return declarations;
  }
}
