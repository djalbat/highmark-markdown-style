"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkdownStyle;
    }
});
var _ruleSet = /*#__PURE__*/ _interop_require_default(require("./style/ruleSet"));
var _ruleSets = /*#__PURE__*/ _interop_require_default(require("./style/ruleSets"));
var _declarations = /*#__PURE__*/ _interop_require_default(require("./style/declarations"));
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
var MarkdownStyle = /*#__PURE__*/ function() {
    function MarkdownStyle(ruleSet) {
        _class_call_check(this, MarkdownStyle);
        this.ruleSet = ruleSet;
    }
    _create_class(MarkdownStyle, [
        {
            key: "getRuleSet",
            value: function getRuleSet() {
                return this.ruleSet;
            }
        },
        {
            key: "asCSS",
            value: function asCSS() {
                var ruleSetsCSS = this.ruleSet.asCSS(), css = ruleSetsCSS; ///
                return css;
            }
        }
    ], [
        {
            key: "fromNodeTokensAndSelectors",
            value: function fromNodeTokensAndSelectors(node, tokens, selectors) {
                var declarations = _declarations.default.fromNodeAndTokens(node, tokens), ruleSets = _ruleSets.default.fromNodeAndTokens(node, tokens), ruleSet = _ruleSet.default.fromRuleSetsSelectorsAndDeclarations(ruleSets, selectors, declarations), style = new MarkdownStyle(ruleSet);
                return style;
            }
        }
    ]);
    return MarkdownStyle;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXJrZG93blN0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZVNldCBmcm9tIFwiLi9zdHlsZS9ydWxlU2V0XCI7XG5pbXBvcnQgUnVsZVNldHMgZnJvbSBcIi4vc3R5bGUvcnVsZVNldHNcIjtcbmltcG9ydCBEZWNsYXJhdGlvbnMgZnJvbSBcIi4vc3R5bGUvZGVjbGFyYXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtkb3duU3R5bGUge1xuICBjb25zdHJ1Y3RvcihydWxlU2V0KSB7XG4gICAgdGhpcy5ydWxlU2V0ID0gcnVsZVNldDtcbiAgfVxuXG4gIGdldFJ1bGVTZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZVNldDtcbiAgfVxuXG4gIGFzQ1NTKCkge1xuICAgIGNvbnN0IHJ1bGVTZXRzQ1NTID0gdGhpcy5ydWxlU2V0LmFzQ1NTKCksXG4gICAgICAgICAgY3NzID0gcnVsZVNldHNDU1M7ICAvLy9cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVUb2tlbnNBbmRTZWxlY3RvcnMobm9kZSwgdG9rZW5zLCBzZWxlY3RvcnMpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBydWxlU2V0cyA9IFJ1bGVTZXRzLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcnVsZVNldCA9IFJ1bGVTZXQuZnJvbVJ1bGVTZXRzU2VsZWN0b3JzQW5kRGVjbGFyYXRpb25zKHJ1bGVTZXRzLCBzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucyksXG4gICAgICAgICAgc3R5bGUgPSBuZXcgTWFya2Rvd25TdHlsZShydWxlU2V0KTtcblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1hcmtkb3duU3R5bGUiLCJydWxlU2V0IiwiZ2V0UnVsZVNldCIsImFzQ1NTIiwicnVsZVNldHNDU1MiLCJjc3MiLCJmcm9tTm9kZVRva2Vuc0FuZFNlbGVjdG9ycyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvcnMiLCJkZWNsYXJhdGlvbnMiLCJEZWNsYXJhdGlvbnMiLCJmcm9tTm9kZUFuZFRva2VucyIsInJ1bGVTZXRzIiwiUnVsZVNldHMiLCJSdWxlU2V0IiwiZnJvbVJ1bGVTZXRzU2VsZWN0b3JzQW5kRGVjbGFyYXRpb25zIiwic3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzhEQUpEOytEQUNDO21FQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVYsSUFBQSxBQUFNQSw4QkFBRCxBQUFMO2FBQU1BLGNBQ1BDLE9BQU87Z0NBREFEO1FBRWpCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTs7a0JBRkVEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxPQUFPO1lBQ3JCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGNBQWMsSUFBSSxDQUFDSCxPQUFPLENBQUNFLEtBQUssSUFDaENFLE1BQU1ELGFBQWMsR0FBRztnQkFFN0IsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwyQkFBMkJDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxTQUFTO2dCQUN2RCxJQUFNQyxlQUFlQyxxQkFBWSxDQUFDQyxpQkFBaUIsQ0FBQ0wsTUFBTUMsU0FDcERLLFdBQVdDLGlCQUFRLENBQUNGLGlCQUFpQixDQUFDTCxNQUFNQyxTQUM1Q1AsVUFBVWMsZ0JBQU8sQ0FBQ0Msb0NBQW9DLENBQUNILFVBQVVKLFdBQVdDLGVBQzVFTyxRQUFRLElBcEJHakIsY0FvQmVDO2dCQUVoQyxPQUFPZ0I7WUFDVDs7O1dBdkJtQmpCIn0=