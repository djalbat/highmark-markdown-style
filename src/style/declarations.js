"use strict";

import Declaration from "./declaration";

import { nodesQuery } from "../utilities/query";
import { EMPTY_STRING } from "../constants";

const declarationNonTerminalNodesQuery = nodesQuery("/*/declaration");

export default class Declarations {
  constructor(array) {
    this.array = array;
  }

  getLength() { return this.array.length; }

  asCSS(selectors) {
    let css = EMPTY_STRING;

    const length = this.getLength(),
          selectorsLength = selectors.getLength();

    if ((length > 0) && (selectorsLength > 0)) {
      const declarationsCSS = this.array.reduce((declarationsCSS, declaration) => {
              const declarationCSS = declaration.asCSS();

              declarationsCSS = (declarationsCSS === null) ?
                                  declarationCSS : ///
                                    `${declarationsCSS}
${declarationCSS}`;

              return declarationsCSS;
            }, null),
            selectorsCSS = selectors.asCSS();

      css = `${selectorsCSS} {
${declarationsCSS}
}
`;
    }

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
