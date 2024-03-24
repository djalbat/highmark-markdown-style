"use strict";

import { colours } from "occam-styles";

const { woodsmoke, springWood, pomegranate } = colours;

const defaultMarkdownStyle = `
document {
  color: ${woodsmoke};
  margin: 1em;
  font-family: "Computer Modern Serif";
  background-color: ${springWood};
}
  
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
  color: ${springWood};
  background-color: ${woodsmoke};
  font-family: "Computer Modern Typewriter";
}

table {
  border-collapsed: collapse;
}

tableHead {
  border: 1px solid ${woodsmoke};
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
  text-decoration: underline ${pomegranate};
}
`;

export default defaultMarkdownStyle;
