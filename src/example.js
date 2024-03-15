"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { PREVIEW_PANE_SELECTOR_STRING } from "./example/constants";
import { MarkdownStyleElement, DefaultMarkdownStyleElement } from "./index"; ///

import View from "./example/view";

const { renderStyles } = withStyle;

const selectorString = PREVIEW_PANE_SELECTOR_STRING;

renderStyles();

DefaultMarkdownStyleElement.fromSelectorString(selectorString);

const body = new Body(),
      markdownStyleElement = MarkdownStyleElement.fromSelectorString(selectorString);

body.mount(

  <View markdownStyleElement={markdownStyleElement} />

);
