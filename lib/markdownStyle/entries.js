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
var _ruleNamesExpression = /*#__PURE__*/ _interop_require_default(require("../ruleNamesExpression"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var entries = [
    {
        "escaped": "^\\\\[^\\s]"
    },
    {
        "rule-name": "^(?:".concat(_ruleNamesExpression.default, ")")
    },
    {
        "number": "^(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?"
    },
    {
        "colour": "^#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})"
    },
    {
        "unit": "^(?:deg|em|%)"
    },
    {
        "name": "^[_a-zA-Z0-9-]+"
    },
    {
        "delimiter": "^(?:;|\\{|\\})"
    },
    {
        "special": "^(?:,|:|\\.|\\(|\\)|\\[|\\])"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var _default = entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93blN0eWxlL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgcnVsZU5hbWVzRXhwcmVzc2lvbiBmcm9tIFwiLi4vcnVsZU5hbWVzRXhwcmVzc2lvblwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcImVzY2FwZWRcIjogXCJeXFxcXFxcXFxbXlxcXFxzXVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInJ1bGUtbmFtZVwiOiBgXig/OiR7cnVsZU5hbWVzRXhwcmVzc2lvbn0pYFxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJudW1iZXJcIjogXCJeKD86MHxbMS05XVswLTldKikoPzpcXFxcLlswLTldKyk/XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiY29sb3VyXCI6IFwiXiMoPzpbMC05YS1mQS1GXXs2fXxbMC05YS1mQS1GXXszfSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bml0XCI6IFwiXig/OmRlZ3xlbXwlKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm5hbWVcIjogXCJeW19hLXpBLVowLTktXStcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJkZWxpbWl0ZXJcIjogXCJeKD86O3xcXFxce3xcXFxcfSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzcGVjaWFsXCI6IFwiXig/Oix8OnxcXFxcLnxcXFxcKHxcXFxcKXxcXFxcW3xcXFxcXSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW50cmllcztcclxuIl0sIm5hbWVzIjpbImVudHJpZXMiLCJydWxlTmFtZXNFeHByZXNzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQ0E7OztlQUFBOzs7MEVBaENnQzs7Ozs7O0FBRWhDLElBQU1BLFVBQVU7SUFDZDtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsYUFBYSxBQUFDLE9BQTBCLE9BQXBCQyw0QkFBbUIsRUFBQztJQUMxQztJQUNBO1FBQ0UsVUFBVTtJQUNaO0lBQ0E7UUFDRSxVQUFVO0lBQ1o7SUFDQTtRQUNFLFFBQVE7SUFDVjtJQUNBO1FBQ0UsUUFBUTtJQUNWO0lBQ0E7UUFDRSxhQUFhO0lBQ2Y7SUFDQTtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsY0FBYztJQUNoQjtDQUNEO0lBRUQsV0FBZUQifQ==