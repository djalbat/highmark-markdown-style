"use strict";

const entries = [
  {
    "escaped": "^\\\\[^\\s]"
  },
  {
    "number": "^(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?"
  },
  {
    "colour": "^#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})"
  },
  {
    "unit": "^(?:em|%)"
  },
  {
    "name": "^[_a-zA-Z0-9-]+"
  },
  {
    "special": "^;|::|:|\\.|,|\\{|\\}|\\(|\\)|\\[|\\]"
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default entries;
