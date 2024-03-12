"use strict";

import withStyle from "easy-with-style";  ///

import Textarea from "../textarea";

class BNFTextarea extends Textarea {
  setBNF(bnf) {
    const value = bnf;

    this.setValue(value);
  }

  parentContext() {
    const setBNF = this.setBNF.bind(this);

    return ({
      setBNF
    });
  }

  static defaultProperties = {
    className: "bnf",
    spellCheck: "false"
  };
}

export default withStyle(BNFTextarea)`

  height: 16rem;

`;