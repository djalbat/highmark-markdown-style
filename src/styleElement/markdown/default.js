"use strict";

import MarkdownStyleElement from "../../styleElement/markdown";

export default class DefaultMarkdownStyleElement extends MarkdownStyleElement {
  reset() {
    const markdownStyle = defaultMarkdownStyle; ///

    this.update(markdownStyle)
  }

  static fromSelectorString(selectorString) {
    const defaultMarkdownStyleElement = MarkdownStyleElement.fromSelectorString(DefaultMarkdownStyleElement, selectorString);

    defaultMarkdownStyleElement.reset();

    return defaultMarkdownStyleElement;
  }
}

const defaultMarkdownStyle = `font-family: "Computer Modern Serif";
  
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
orderedList,
unorderedList,
blockListing,
inlineListing,
quaternaryHeading {
  font-size: 1em;
  margin: 1em 0 1em 0;
}

primaryHeading,
secondaryHeading,
tertiaryHeading,
quaternaryHeading {
  font-weight: bold;
}

orderedListItem,
unorderedListItem {
  margin: 0.5em 0 0.5em 0;
}

table,
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


blockListing,
inlineListing {
  font-family: "Computer Modern Typewriter";
}

tableHead {
  border: 1px solid blackl;
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
