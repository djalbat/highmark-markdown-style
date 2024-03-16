"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { MarkdownStyleElement, DefaultMarkdownStyleElement } from "./index";  ///

import View from "./example/view";

import { PREVIEW_PANE_SELECTOR_STRING } from "./example/constants";

const { renderStyles } = withStyle;
const selectorString = PREVIEW_PANE_SELECTOR_STRING;

DefaultMarkdownStyleElement.fromSelectorString(selectorString);

const markdownStyleElement = MarkdownStyleElement.fromSelectorString(selectorString);

renderStyles();

const body = new Body();

body.mount(

  <View markdownStyleElement={markdownStyleElement} />

);
