"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { parserUtilities } from "occam-parsers";
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
      { entries } = MarkdownStyleLexer,
      { rulesFromBNF } = parserUtilities;

class View extends Element {
  keyUpHandler = (event, element) => {
    this.update();
  }

  update() {
    const bnf = this.getBNF(),
          markdownStyle = this.getMarkdownStyle(),
          lexicalEntries = this.getLexicalEntries(),
          markdownStyleElement = this.getMarkdownStyleElement();

    const rules = rulesFromBNF(bnf),
          lexer = lexerFromLexicalEntries(lexicalEntries),
          parser =  parserFromRules(rules),
          content = markdownStyle, ///
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens),
          css = markdownStyleElement.update(node, tokens);

    let parseTree = null;

    if (node !== null) {
      parseTree = node.asParseTree(tokens);
    }

    this.setCSS(css);

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

function lexerFromLexicalEntries(lexicalEntries) {
  const entries = lexicalEntries, ///
        lexer = MarkdownStyleLexer.fromEntries(entries);

  return lexer;
}

function parserFromRules(rules) {
  const parser = MarkdownStyleParser.fromRules(rules); ///

  return parser;
}
