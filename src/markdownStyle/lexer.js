"use strict";

import { CommonLexer } from "occam-lexers";
import { WhitespaceToken,
         EndOfLineNonSignificantToken,
         CStyleSingleLineCommentToken,
         DoublyQuotedStringLiteralToken,
         EndOfLineCommentSignificantToken,
         CStyleEndOfMultiLineCommentToken,
         CStyleStartOfMultiLineCommentToken,
         CStyleMiddleOfMultiLineCommentToken } from "occam-lexers";

import entries from "./entries";

export default class MarkdownStyleLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineNonSignificantToken;

  static WhitespaceToken = WhitespaceToken;

  static EndOfLineCommentToken = EndOfLineCommentSignificantToken;  ///

  static SingleLineCommentToken = CStyleSingleLineCommentToken; ///

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = CStyleEndOfMultiLineCommentToken; ///

  static StartOfMultiLineCommentToken = CStyleStartOfMultiLineCommentToken; ///

  static MiddleOfMultiLineCommentToken = CStyleMiddleOfMultiLineCommentToken; ///

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = DoublyQuotedStringLiteralToken;

  static fromNothing() { return CommonLexer.fromNothing(MarkdownStyleLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(MarkdownStyleLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(MarkdownStyleLexer, entries); }
}
