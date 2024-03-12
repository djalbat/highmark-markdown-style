"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleSet;
    }
});
var _occamquery = require("occam-query");
var _declarations = /*#__PURE__*/ _interop_require_default(require("./declarations"));
var _constants = require("../constants");
var _content = require("../utilities/content");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var selectorsQuery = _occamquery.Query.fromExpression("//selectors");
var RuleSet = /*#__PURE__*/ function() {
    function RuleSet(selectors, declarations) {
        _class_call_check(this, RuleSet);
        this.selectors = selectors;
        this.declarations = declarations;
    }
    _create_class(RuleSet, [
        {
            key: "getSelectors",
            value: function getSelectors() {
                return this.selectors;
            }
        },
        {
            key: "getDeclarations",
            value: function getDeclarations() {
                return this.declarations;
            }
        },
        {
            key: "unshift",
            value: function unshift(ruleSet) {
                var declarations = ruleSet.getDeclarations();
                this.declarations.unshift(declarations);
            }
        },
        {
            key: "findMatchingRuleSet",
            value: function findMatchingRuleSet(ruleSets) {
                var _this = this;
                var matchingRuleSet = ruleSets.find(function(ruleSet) {
                    var selectors = ruleSet.getSelectors(), selectorsMatch = selectors === _this.selectors, ruleSetsMatch = selectorsMatch; ///
                    if (ruleSetsMatch) {
                        return true;
                    }
                }) || null; ///
                return matchingRuleSet;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(indent) {
                var css = _constants.EMPTY_STRING;
                var declarationsCSS = this.declarations.asCSS(null, indent);
                if (declarationsCSS !== _constants.EMPTY_STRING) {
                    css = "".concat(indent).concat(this.selectors, " {\n").concat(declarationsCSS).concat(indent, "}\n\n");
                }
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var selectors = selectorsFromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), media = new RuleSet(selectors, declarations);
                return media;
            }
        }
    ]);
    return RuleSet;
}();
function selectorsFromNodeAndTokens(node, tokens) {
    var selectorsNodeContent = (0, _content.contentFromQueryNodeAndTokens)(selectorsQuery, node, tokens), selectors = "".concat(selectorsNodeContent);
    return selectors;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jb25zdCBzZWxlY3RvcnNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9zZWxlY3RvcnNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVTZXQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucykge1xuICAgIHRoaXMuc2VsZWN0b3JzID0gc2VsZWN0b3JzO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0U2VsZWN0b3JzKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdG9ycztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICB1bnNoaWZ0KHJ1bGVTZXQpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBydWxlU2V0LmdldERlY2xhcmF0aW9ucygpO1xuXG4gICAgdGhpcy5kZWNsYXJhdGlvbnMudW5zaGlmdChkZWNsYXJhdGlvbnMpO1xuICB9XG5cbiAgZmluZE1hdGNoaW5nUnVsZVNldChydWxlU2V0cykge1xuICAgIGNvbnN0IG1hdGNoaW5nUnVsZVNldCA9IHJ1bGVTZXRzLmZpbmQoKHJ1bGVTZXQpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IHJ1bGVTZXQuZ2V0U2VsZWN0b3JzKCksXG4gICAgICAgICAgICBzZWxlY3RvcnNNYXRjaCA9IChzZWxlY3RvcnMgPT09IHRoaXMuc2VsZWN0b3JzKSxcbiAgICAgICAgICAgIHJ1bGVTZXRzTWF0Y2ggPSBzZWxlY3RvcnNNYXRjaDsgLy8vXG5cbiAgICAgIGlmIChydWxlU2V0c01hdGNoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7IC8vL1xuXG4gICAgcmV0dXJuIG1hdGNoaW5nUnVsZVNldDtcbiAgfVxuXG4gIGFzQ1NTKGluZGVudCkge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUyhudWxsLCBpbmRlbnQpO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc0NTUyAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgY3NzID0gYCR7aW5kZW50fSR7dGhpcy5zZWxlY3RvcnN9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfSR7aW5kZW50fX1cblxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IHNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbWVkaWEgPSBuZXcgUnVsZVNldChzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucyk7XG5cbiAgICByZXR1cm4gbWVkaWE7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IHNlbGVjdG9yc05vZGVDb250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMoc2VsZWN0b3JzUXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgIHNlbGVjdG9ycyA9IGAke3NlbGVjdG9yc05vZGVDb250ZW50fWA7XG5cbiAgcmV0dXJuIHNlbGVjdG9ycztcbn1cbiJdLCJuYW1lcyI6WyJSdWxlU2V0Iiwic2VsZWN0b3JzUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwic2VsZWN0b3JzIiwiZGVjbGFyYXRpb25zIiwiZ2V0U2VsZWN0b3JzIiwiZ2V0RGVjbGFyYXRpb25zIiwidW5zaGlmdCIsInJ1bGVTZXQiLCJmaW5kTWF0Y2hpbmdSdWxlU2V0IiwicnVsZVNldHMiLCJtYXRjaGluZ1J1bGVTZXQiLCJmaW5kIiwic2VsZWN0b3JzTWF0Y2giLCJydWxlU2V0c01hdGNoIiwiYXNDU1MiLCJpbmRlbnQiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJkZWNsYXJhdGlvbnNDU1MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2VucyIsIkRlY2xhcmF0aW9ucyIsIm1lZGlhIiwic2VsZWN0b3JzTm9kZUNvbnRlbnQiLCJjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7MEJBVEM7bUVBRUc7eUJBRUk7dUJBQ2lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlDLElBQU1DLGlCQUFpQkMsaUJBQUssQ0FBQ0MsY0FBYyxDQUFDO0FBRTdCLElBQUEsQUFBTUgsd0JBQUQsQUFBTDthQUFNQSxRQUNQSSxTQUFTLEVBQUVDLFlBQVk7Z0NBRGhCTDtRQUVqQixJQUFJLENBQUNJLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOztrQkFISEw7O1lBTW5CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFNSixlQUFlSSxRQUFRRixlQUFlO2dCQUU1QyxJQUFJLENBQUNGLFlBQVksQ0FBQ0csT0FBTyxDQUFDSDtZQUM1Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLFFBQVE7O2dCQUMxQixJQUFNQyxrQkFBa0JELFNBQVNFLElBQUksQ0FBQyxTQUFDSjtvQkFDckMsSUFBTUwsWUFBWUssUUFBUUgsWUFBWSxJQUNoQ1EsaUJBQWtCVixjQUFjLE1BQUtBLFNBQVMsRUFDOUNXLGdCQUFnQkQsZ0JBQWdCLEdBQUc7b0JBRXpDLElBQUlDLGVBQWU7d0JBQ2pCLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTSxNQUFNLEdBQUc7Z0JBRWYsT0FBT0g7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxNQUFNO2dCQUNWLElBQUlDLE1BQU1DLHVCQUFZO2dCQUV0QixJQUFNQyxrQkFBa0IsSUFBSSxDQUFDZixZQUFZLENBQUNXLEtBQUssQ0FBQyxNQUFNQztnQkFFdEQsSUFBSUcsb0JBQW9CRCx1QkFBWSxFQUFFO29CQUNuQ0QsTUFBTSxBQUFDLEdBQVcsT0FBVEQsUUFDZEcsT0FEdUIsSUFBSSxDQUFDaEIsU0FBUyxFQUFDLFFBQ3BCYSxPQUFsQkcsaUJBQXlCLE9BQVBILFFBQU87Z0JBR3ZCO2dCQUVBLE9BQU9DO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1uQixZQUFZb0IsMkJBQTJCRixNQUFNQyxTQUM3Q2xCLGVBQWVvQixxQkFBWSxDQUFDSixpQkFBaUIsQ0FBQ0MsTUFBTUMsU0FDcERHLFFBQVEsSUFwREcxQixRQW9EU0ksV0FBV0M7Z0JBRXJDLE9BQU9xQjtZQUNUOzs7V0F2RG1CMUI7O0FBMERyQixTQUFTd0IsMkJBQTJCRixJQUFJLEVBQUVDLE1BQU07SUFDOUMsSUFBTUksdUJBQXVCQyxJQUFBQSxzQ0FBNkIsRUFBQzNCLGdCQUFnQnFCLE1BQU1DLFNBQzNFbkIsWUFBWSxBQUFDLEdBQXVCLE9BQXJCdUI7SUFFckIsT0FBT3ZCO0FBQ1QifQ==