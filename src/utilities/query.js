"use strict";

import { Query } from "occam-query";
import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export function nodeQuery(expression) {
  const query = Query.fromExpression(expression);

  return function(node) {
    const nodes = query.execute(node),
          nodesLength = nodes.length;

    if (nodesLength > 0) {
      const firstNode = first(nodes);

      node = firstNode; ///
    } else {
      node = null;
    }

    return node;
  }
}

export function nodesQuery(expression) {
  const query = Query.fromExpression(expression);

  return function(node) {
    const nodes = query.execute(node);

    return nodes;
  }
}
