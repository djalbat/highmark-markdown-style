"use strict";

export function ruleNamesExpressionFromRuleNameToHTMLMap(ruleNameToHTMLMap) {
  const ruleNames = Object.keys(ruleNameToHTMLMap);

  ruleNames.reverse();

  const ruleNamesExpression = ruleNames.reduce((ruleNamesExpression, ruleName) => {
          const html = ruleNameToHTMLMap[ruleName],
                { tagName } = html;

          if (tagName !== null) {
            ruleNamesExpression = (ruleNamesExpression === null) ?
                                    ruleName :
                                     `${ruleNamesExpression}|${ruleName}`;
          }

          return ruleNamesExpression;
        }, null);

  return ruleNamesExpression
}


