"use strict";

import { Query } from "occam-query";

import { TWO_SPACES } from "../constants";
import { contentFromQueryNodeAndTokens } from "../utilities/content";

const propertyNameQuery = Query.fromExpression("/*/propertyName"),
      propertyValuesQuery = Query.fromExpression("/*/propertyValues");

export default class Declaration {
  constructor(propertyValues, propertyName) {
    this.propertyValues = propertyValues;
    this.propertyName = propertyName;
  }

  getPropertyValues() {
    return this.propertyValues;
  }

  getPropertyName() {
    return this.propertyName;
  }

  asCSS(indent) {
    indent = indent + TWO_SPACES;

    const css = `${indent}${this.propertyName}: ${this.propertyValues};\n`;

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const propertyValuesContent = contentFromQueryNodeAndTokens(propertyValuesQuery, node, tokens),
          propertyNameContent = contentFromQueryNodeAndTokens(propertyNameQuery, node, tokens),
          propertyValues = propertyValuesContent, ///
          propertyName = propertyNameContent, ///
          declaration = new Declaration(propertyValues, propertyName);

    return declaration;
  }
}
