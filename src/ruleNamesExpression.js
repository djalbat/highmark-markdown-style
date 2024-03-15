"use strict";

import { ruleNameToHTMLMap } from "highmark-markdown"; ///

const ruleNames = Object.keys(ruleNameToHTMLMap).reverse(), ///
      ruleNamesExpression = ruleNames.reduce((ruleNamesExpression, ruleName) => {
        const html = ruleNameToHTMLMap[ruleName],
              { tagName } = html;

        if (tagName !== null) {
          ruleNamesExpression = (ruleNamesExpression === null) ?
                                  ruleName :
                                   `${ruleNamesExpression}|${ruleName}`;
        }

        return ruleNamesExpression;
      }, null);

export default ruleNamesExpression;

