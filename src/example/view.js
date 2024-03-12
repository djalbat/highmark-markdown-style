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
          lexicalEntries = this.getLexicalEntries();

    const rules = rulesFromBNF(bnf),
          lexer = lexerFromLexicalEntries(lexicalEntries),
          parser =  parserFromRules(rules),
          content = markdownStyle; ///

    const tokens = lexer.tokenise(content),
          node = parser.parse(tokens);

    let parseTree = null;

    if (node !== null) {
      parseTree = node.asParseTree(tokens);
    }

    const css = ""; ///

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
  :first-child {
    padding: 0;  
  }
}
`;

  static _initialMarkdownStyle = `margin: 1em;
font-family: "Computer Modern Serif";  

primaryHeading,
secondaryHeading,
tertiaryHeading,
quaternaryHeading {
  font-weight: bold;
}

primaryHeading {
  font-size: 3em;
  margin: 0.333333em 0 0.333333em 0;
}

secondaryHeading {
  font-size: 2em;
  margin: 0.5em 0 0.5em 0;
}

tertiaryHeading {
  font-size: 1.5em;
  margin: 0.666666em 0 0.666666em 0;
}

table,
paragraph,
blockListing,
orderedList,
unorderedList,
quaternaryHeading {
  font-size: 1em;
  margin: 1em 0 1em 0;
}

orderedListItem,
unorderedListItem {
  margin: 0.5em 0 0.5em 0;
}

table,
paragraph,
blockListing,
orderedList,
unorderedList,
orderedListItem,
unorderedListItem,
primaryHeading,
secondaryHeading,
tertiaryHeading,
quaternaryHeading {
  :first-child {
    margin-top: 0;
  }
}
`;

  static __initialMarkdownStyle = `
 
  p:last-child,
  h1:last-child,
  h2:last-child,
  h3:last-child,
  ol:last-child,
  ul:last-child,
  li:last-child,
  pre:not(.inline):last-child,
  table:last-child {
    margin-bottom: 0;
  }
  
  ol,
  ul {
    margin-left: 1em;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a.link {
    font-size: 0.666666em;
    font-weight: bold;
    vertical-align: super;
  }

  li.footnote p {
    margin: 0;
  }

  pre {
    color: white;
    background-color: black;
    font-family: "Computer Modern Typewriter";
  }

  pre:not(.inline) {
    padding: 1em;
  }

  pre.inline {
    font-size: 1em;
    padding: 0.25em;
    display: inline;
  }

  table {
    border-bottom: 1px solid black;
    border-collapse: collapse;
  }

  table th,
  table td {
    padding: 1em;
    text-align: right;
  }
    
  table th {
    font-weight: bold;
    border-bottom: 2px solid black;
  }
  
  table th:first-of-type,
  table td:first-of-type {
    text-align: left;
  }

  table th:not(:first-of-type),
  table td:not(:first-of-type) {
    padding-left: 0;
  }
  
  span.error {
    background-repeat: repeat-x;
    background-position: bottom;
    text-decoration-line: underline;
    text-decoration-color: darkred;
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
