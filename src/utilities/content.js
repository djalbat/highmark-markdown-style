"use strict";

import { EMPTY_STRING } from "../constants";

export function contentFromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
  const firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
        lastSignificantToken = nonTerminalNode.getLastSignificantToken(),
        firstToken = firstSignificantToken, ///
        lastToken = lastSignificantToken, ///
        firstTokenIndex = tokens.indexOf(firstToken),
        lastTokenIndex = tokens.indexOf(lastToken);

  let content = EMPTY_STRING;

  for (let index = firstTokenIndex; index <= lastTokenIndex; index++) {
    const token = tokens[index],
          tokenContent = token.getContent();

    content += tokenContent;
  }

  return content;
}
