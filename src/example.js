"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { MarkdownStyleElement } from "./index"; ///

import View from "./example/view";

const { renderStyles } = withStyle;

renderStyles();

const body = new Body(),
      markdownStyleElement = MarkdownStyleElement.fromNothing();

body.mount(

  <View markdownStyleElement={markdownStyleElement} />

);
