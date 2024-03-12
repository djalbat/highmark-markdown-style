"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { MarkdownStyleElement } from "./index"; ///
import { PREVIEW_PANE_DIV_SELECTORS } from "./example/constants";

import View from "./example/view";

const { renderStyles } = withStyle;

renderStyles();

const body = new Body(),
      selectorsString = PREVIEW_PANE_DIV_SELECTORS,
      markdownStyleElement = MarkdownStyleElement.fromSelectorsString(selectorsString);

body.mount(

  <View markdownStyleElement={markdownStyleElement} />

);
