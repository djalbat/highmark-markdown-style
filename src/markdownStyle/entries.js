"use strict";

import { ruleNameToHTMLMap } from "highmark-markdown";

import { ruleNamesExpressionFromRuleNameToHTMLMap } from "../utilities/entries"; ///

const ruleNamesExpression = ruleNamesExpressionFromRuleNameToHTMLMap(ruleNameToHTMLMap);

const entries = [
  {
    "escaped": "^\\\\[^\\s]"
  },
  {
    "rule-name": `^(?:${ruleNamesExpression})`
  },
  {
    "number": "^(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?"
  },
  {
    "colour": "^#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})"
  },
  {
    "unit": "^(?:deg|%)"
  },
  {
    "name": "^[_a-zA-Z0-9]+"
  },
  {
    "bracket": "^(?:\\{|\\})"
  },
  {
    "special": "^(?:,|:|;|-|\\.|\\(|\\)|\\[|\\])"
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default entries;
