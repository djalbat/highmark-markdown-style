"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { MarkdownStyleElement } from "./index"; ///

import View from "./example/view";

import { PREVIEW_PANE_DIV_PREPEND } from "./example/constants";

const { renderStyles } = withStyle;

renderStyles();

const body = new Body(),
      prepend = PREVIEW_PANE_DIV_PREPEND,
      markdownStyleElement = MarkdownStyleElement.fromPrepend(prepend);

body.mount(

  <View markdownStyleElement={markdownStyleElement} />

);
