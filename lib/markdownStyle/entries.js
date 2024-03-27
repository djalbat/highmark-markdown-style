"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _highmarkmarkdown = require("highmark-markdown");
var _entries = require("../utilities/entries");
var ruleNamesExpression = (0, _entries.ruleNamesExpressionFromRuleNameToHTMLMap)(_highmarkmarkdown.ruleNameToHTMLMap);
var entries = [
    {
        "escaped": "^\\\\[^\\s]"
    },
    {
        "rule-name": "^(?:".concat(ruleNamesExpression, ")")
    },
    {
        "number": "^(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?"
    },
    {
        "colour": "^#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})"
    },
    {
        "unit": "^(?:deg|%)"
    },
    {
        "name": "^[_a-zA-Z0-9]+"
    },
    {
        "bracket": "^(?:\\{|\\})"
    },
    {
        "special": "^(?:,|:|;|-|\\.|\\(|\\)|\\[|\\])"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var _default = entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93blN0eWxlL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBydWxlTmFtZVRvSFRNTE1hcCB9IGZyb20gXCJoaWdobWFyay1tYXJrZG93blwiO1xyXG5cclxuaW1wb3J0IHsgcnVsZU5hbWVzRXhwcmVzc2lvbkZyb21SdWxlTmFtZVRvSFRNTE1hcCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZW50cmllc1wiOyAvLy9cclxuXHJcbmNvbnN0IHJ1bGVOYW1lc0V4cHJlc3Npb24gPSBydWxlTmFtZXNFeHByZXNzaW9uRnJvbVJ1bGVOYW1lVG9IVE1MTWFwKHJ1bGVOYW1lVG9IVE1MTWFwKTtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcbiAge1xyXG4gICAgXCJlc2NhcGVkXCI6IFwiXlxcXFxcXFxcW15cXFxcc11cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJydWxlLW5hbWVcIjogYF4oPzoke3J1bGVOYW1lc0V4cHJlc3Npb259KWBcclxuICB9LFxyXG4gIHtcclxuICAgIFwibnVtYmVyXCI6IFwiXig/OjB8WzEtOV1bMC05XSopKD86XFxcXC5bMC05XSspP1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImNvbG91clwiOiBcIl4jKD86WzAtOWEtZkEtRl17Nn18WzAtOWEtZkEtRl17M30pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5pdFwiOiBcIl4oPzpkZWd8JSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJuYW1lXCI6IFwiXltfYS16QS1aMC05XStcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJicmFja2V0XCI6IFwiXig/OlxcXFx7fFxcXFx9KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNwZWNpYWxcIjogXCJeKD86LHw6fDt8LXxcXFxcLnxcXFxcKHxcXFxcKXxcXFxcW3xcXFxcXSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW50cmllcztcclxuIl0sIm5hbWVzIjpbInJ1bGVOYW1lc0V4cHJlc3Npb24iLCJydWxlTmFtZXNFeHByZXNzaW9uRnJvbVJ1bGVOYW1lVG9IVE1MTWFwIiwicnVsZU5hbWVUb0hUTUxNYXAiLCJlbnRyaWVzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0NBOzs7ZUFBQTs7O2dDQXBDa0M7dUJBRXVCO0FBRXpELElBQU1BLHNCQUFzQkMsSUFBQUEsaURBQXdDLEVBQUNDLG1DQUFpQjtBQUV0RixJQUFNQyxVQUFVO0lBQ2Q7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLGFBQWEsQUFBQyxPQUEwQixPQUFwQkgscUJBQW9CO0lBQzFDO0lBQ0E7UUFDRSxVQUFVO0lBQ1o7SUFDQTtRQUNFLFVBQVU7SUFDWjtJQUNBO1FBQ0UsUUFBUTtJQUNWO0lBQ0E7UUFDRSxRQUFRO0lBQ1Y7SUFDQTtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0NBQ0Q7SUFFRCxXQUFlRyJ9