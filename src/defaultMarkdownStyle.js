"use strict";

import { colours } from "occam-styles";

const { woodsmoke, springWood, stormDust, pomegranate } = colours;

const defaultMarkdownStyle = `
document {
  colour: ${woodsmoke};
  padding: 1em;
  min-height: 100%;
  font-family: "Computer Modern Serif";
  background-colour: ${springWood};
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
primaryHeading,
secondaryHeading,
tertiaryHeading,
quaternaryHeading {
  :first-child {
    margin-top: 0;
  }
  
  :last-child {
    margin-bottom: 0;
  }
}

primaryHeading,
secondaryHeading,
tertiaryHeading,
quaternaryHeading {
  font-weight: bold;
}

inlineListing {
  font-size: 1em;
}

blockListing,
inlineListing {
  colour: ${springWood};
  background-colour: ${woodsmoke};
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
  border-top: 1px solid ${stormDust};
  padding-top: 1em;
}

footnoteItem {
  margin-left: 1.333333em;
  
  paragraph {
    margin: 0;
  }
}

link {
  font-size: 0.8em;
  vertical-align: super;
}

error {
  text-decoration: underline ${pomegranate};
}
`;

export default defaultMarkdownStyle;
