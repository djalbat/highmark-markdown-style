"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { MarkdownStyleElement, DefaultMarkdownStyleElement } from "./index";  ///

import View from "./example/view";

import { COVER_SELECTORS_STRING } from "./example/constants";

const { renderStyles } = withStyle;

const selectorSString = COVER_SELECTORS_STRING;

DefaultMarkdownStyleElement.fromSelectorsString(selectorSString);

const markdownStyleElement = MarkdownStyleElement.fromSelectorsString(selectorSString);

renderStyles();

const body = new Body();

body.mount(

  <View markdownStyleElement={markdownStyleElement} />

);
