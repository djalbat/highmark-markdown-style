"use strict";

import { arrayUtilities } from "necessary";

import { EMPTY_STRING } from "../constants";

const { first } = arrayUtilities;

export function contentFromQueryNodeAndTokens(query, node, tokens) {
  let content = null;

  const nodes = query.execute(node),
        nodesLength = nodes.length;

  if (nodesLength > 0) {
    const firstNode = first(nodes);

    node = firstNode; ///

    content = contentFromNodeAndTokens(node, tokens);
  }

  return content;
}

function contentFromNodeAndTokens(node, tokens) {
  const firstSignificantToken = node.getFirstSignificantToken(),
        lastSignificantToken = node.getLastSignificantToken(),
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
