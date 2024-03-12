"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { MarkdownStyleLexer, MarkdownStyleParser } from "../index";  ///
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import SubHeading from "./view/subHeading";
import BNFTextarea from "./view/textarea/bnf";
import CSSTextarea from "./view/textarea/css";
import LeftSizeableDiv from "./view/div/sizeable/left";
import ParseTreeTextarea from "./view/textarea/parseTree";
import MarkdownStyleTextarea from "./view/textarea/markdownStyle";
import LexicalEntriesTextarea from "./view/textarea/lexicalEntries";

const { bnf } = MarkdownStyleParser,
      { entries } = MarkdownStyleLexer;

const markdownStyleLexer = MarkdownStyleLexer.fromNothing(),
      markdownStyleParser = MarkdownStyleParser.fromNothing();

class View extends Element {
  keyUpHandler = (event, element) => {
    this.update();
  }

  update() {
    const markdownStyle = this.getMarkdownStyle(),
          markdownStyleElement = this.getMarkdownStyleElement(),
          css = markdownStyleElement.update(markdownStyle);

    this.setCSS(css);

    let parseTree = null;

    const lexer = markdownStyleLexer,
          parser =  markdownStyleParser,
          content = markdownStyle, ///
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens);

    if (node !== null) {
      parseTree = node.asParseTree(tokens);
    }

    this.setParseTree(parseTree);
  }

  getMarkdownStyleElement() {
    const { markdownStyleElement } = this.properties;

    return markdownStyleElement;
  }

  childElements() {
    return (

      <ColumnsDiv>
        <LeftSizeableDiv>
          <SubHeading>
            Lexical entries
          </SubHeading>
          <LexicalEntriesTextarea onKeyUp={this.keyUpHandler} />
          <SubHeading>
            BNF
          </SubHeading>
          <BNFTextarea onKeyUp={this.keyUpHandler} />
          <SubHeading>
            Parse tree
          </SubHeading>
          <ParseTreeTextarea/>
        </LeftSizeableDiv>
        <VerticalSplitterDiv/>
        <ColumnDiv>
          <RowsDiv>
            <SubHeading>
              CSS
            </SubHeading>
            <CSSTextarea/>
            <SubHeading>
              Markdown style
            </SubHeading>
            <MarkdownStyleTextarea onKeyUp={this.keyUpHandler} />
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>

    );
  }

  initialise() {
    this.assignContext();

    const { initialMarkdownStyle } = this.constructor,
          markdownStyle = initialMarkdownStyle, ///
          lexicalEntries = entries; ///

    this.setBNF(bnf);

    this.setMarkdownStyle(markdownStyle);

    this.setLexicalEntries(lexicalEntries);

    this.update();
  }

  static initialMarkdownStyle = `paragraph {
  margin: 0;
}
`;

  static tagName = "div";

  static ignoredProperties = [
    "markdownStyleElement"
  ]

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;
