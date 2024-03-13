"use strict";

import { EMPTY_STRING } from "../constants";

export function contentFromNodeAndTokens(node, tokens, offset = 0) {
  const firstSignificantToken = node.getFirstSignificantToken(),
        lastSignificantToken = node.getLastSignificantToken(),
        firstToken = firstSignificantToken, ///
        lastToken = lastSignificantToken, ///
        firstTokenIndex = tokens.indexOf(firstToken) + offset,  ///
        lastTokenIndex = tokens.indexOf(lastToken);

  let content = EMPTY_STRING;

  for (let index = firstTokenIndex; index <= lastTokenIndex; index++) {
    const token = tokens[index],
          tokenContent = token.getContent();

    content += tokenContent;
  }

  return content;
}

export function remainingContentFromNodeTokensAndOffset(node, tokens, offset) {
  const content = contentFromNodeAndTokens(node, tokens, offset),
        remainingContent = content; ///

  return remainingContent;
}
