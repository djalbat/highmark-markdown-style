"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { MarkdownStyleElement } from "./index"; ///
import { PREVIEW_PANE_DIV_SELECTOR } from "./example/constants";

import View from "./example/view";

const { renderStyles } = withStyle;

renderStyles();

const body = new Body(),
      selector = PREVIEW_PANE_DIV_SELECTOR,
      markdownStyleElement = MarkdownStyleElement.fromSelector(selector);

body.mount(

  <View markdownStyleElement={markdownStyleElement} />

);
