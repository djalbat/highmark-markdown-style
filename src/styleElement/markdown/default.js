"use strict";

import MarkdownStyleElement from "../../styleElement/markdown";

export default class DefaultMarkdownStyleElement extends MarkdownStyleElement {
  update(defaultMarkdownStyle) {
    const markdownStyle = defaultMarkdownStyle; ///

    super.update(markdownStyle)
  }

  reset() {
    this.update(defaultMarkdownStyle)
  }

  static fromSelectorString(Class, selectorString) {
    if (selectorString === undefined) {
      selectorString = Class; ///

      Class = DefaultMarkdownStyleElement;  ///
    }

    const defaultMarkdownStyleElement = MarkdownStyleElement.fromSelectorString(Class, selectorString);

    defaultMarkdownStyleElement.reset();

    return defaultMarkdownStyleElement;
  }
}

const defaultMarkdownStyle = `color: #0c0d0f;
margin: 1em;
font-family: "Computer Modern Serif";
background-color: #f8f6f1;
  
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
  margin: 0.75em 0 0.75em 0;
}

table,
paragraph,
orderedList,
unorderedList,
blockListing,
inlineListing,
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
orderedList,
unorderedList,
orderedListItem,
unorderedListItem,
blockListing,
inlineListing,
primaryHeading,
secondaryHeading,
tertiaryHeading,
quaternaryHeading {
  :first-child {
    margin-top: 0;
  }
  
  :last-child {
    margin-top: 0;
  }
}

primaryHeading,
secondaryHeading,
tertiaryHeading,
quaternaryHeading {
  font-weight: bold;
}

blockListing,
inlineListing {
  color: #f8f6f1;
  background-color: #0c0d0f;
  font-family: "Computer Modern Typewriter";
}

table {
  border-collapsed: collapse;
}

tableHead {
  border: 1px solid #0c0d0f;
}

tableBodyCell,
tableHeadCell {
  padding: 1em;
}

strongText {
  font-weight: bold;
}

emphasisedText {
  font-style: italic;
}

stronglyEmphasisedText {
  font-style: italic;
  font-weight: bold;
}

footnotesList {
  font-size: 0.75em;
}

error {
  text-decoration: underline red;
}
`;
