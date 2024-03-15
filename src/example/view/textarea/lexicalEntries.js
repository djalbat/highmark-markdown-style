"use strict";

import withStyle from "easy-with-style";  ///

import Textarea from "../textarea";

import { DOUBLE_SPACE } from "../../constants";

class LexicalEntriesTextarea extends Textarea {
  setLexicalEntries(lexicalEntries) {
    const lexicalEntriesString = JSON.stringify(lexicalEntries, null, DOUBLE_SPACE),
          value = lexicalEntriesString; ///

    this.setValue(value);
  }

  parentContext() {
    const setLexicalEntries = this.setLexicalEntries.bind(this);

    return ({
      setLexicalEntries
    });
  }

  static defaultProperties = {
    readOnly: true,
    className: "lexical-entries",
    spellCheck: "false"
  };
}

export default withStyle(LexicalEntriesTextarea)`

  height: 12rem;

`;
