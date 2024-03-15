"use strict";

import ruleNamesExpression from "../ruleNamesExpression";

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
    "unit": "^(?:deg|em|%)"
  },
  {
    "name": "^[_a-zA-Z0-9-]+"
  },
  {
    "delimiter": "^(?:;|\\{|\\})"
  },
  {
    "special": "^(?:,|:|\\.|\\(|\\)|\\[|\\])"
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default entries;
