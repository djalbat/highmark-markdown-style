"use strict";

import withStyle from "easy-with-style";

import Textarea from "../textarea";

class MarkdownStyleTextarea extends Textarea {
  getMarkdownStyle() {
    const value = this.getValue(),
          markdownStyle = value; ///

    return markdownStyle;
  }

  setMarkdownStyle(markdownStyle) {
    const value = markdownStyle;  ///

    this.setValue(value);
  }

  parentContext() {
    const getMarkdownStyle = this.getMarkdownStyle.bind(this),
          setMarkdownStyle = this.setMarkdownStyle.bind(this);

    return ({
      getMarkdownStyle,
      setMarkdownStyle
    });
  }

  static defaultProperties = {
    className: "markdown-style",
    spellCheck: "false"
  };
}

export default withStyle(MarkdownStyleTextarea)`

  height: 36rem;
  
`;