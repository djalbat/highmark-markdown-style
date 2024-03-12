"use strict";

import { Query } from "occam-query";
import { arrayUtilities } from "necessary";

import Declaration from "./declaration";

import { EMPTY_STRING } from "../constants";

const { forwardsForEach, backwardsForEach } = arrayUtilities;

const declarationQuery = Query.fromExpression("/*/declaration");

export default class Declarations {
  constructor(array) {
    this.array = array;
  }

  someDeclaration(callback) { return this.array.some(callback); }

  forwardsForEachDeclaration(callback) { forwardsForEach(this.array, callback); }

  backwardsForEachDeclaration(callback) { backwardsForEach(this.array, callback); }

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
    const declarationNodes = declarationQuery.execute(node),
          array = declarationNodes.map((declarationNode) => {
            const node = declarationNode, ///
                  declaration = Declaration.fromNodeAndTokens(node, tokens);

            return declaration;
          }),
          declarations = new Declarations(array);

    return declarations;
  }
}
