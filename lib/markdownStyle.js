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
var _ruleSet = /*#__PURE__*/ _interop_require_default(require("./ruleSet"));
var _ruleSets = /*#__PURE__*/ _interop_require_default(require("./ruleSets"));
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
                var ruleSets = _ruleSets.default.fromNodeAndTokens(node, tokens), ruleSet = _ruleSet.default.fromRuleSetsAndSelectors(ruleSets, selectors), style = new MarkdownStyle(ruleSet);
                return style;
            }
        }
    ]);
    return MarkdownStyle;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXJrZG93blN0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZVNldCBmcm9tIFwiLi9ydWxlU2V0XCI7XG5pbXBvcnQgUnVsZVNldHMgZnJvbSBcIi4vcnVsZVNldHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Rvd25TdHlsZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVTZXQpIHtcbiAgICB0aGlzLnJ1bGVTZXQgPSBydWxlU2V0O1xuICB9XG5cbiAgZ2V0UnVsZVNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlU2V0O1xuICB9XG5cbiAgYXNDU1MoKSB7XG4gICAgY29uc3QgcnVsZVNldHNDU1MgPSB0aGlzLnJ1bGVTZXQuYXNDU1MoKSxcbiAgICAgICAgICBjc3MgPSBydWxlU2V0c0NTUzsgIC8vL1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZVRva2Vuc0FuZFNlbGVjdG9ycyhub2RlLCB0b2tlbnMsIHNlbGVjdG9ycykge1xuICAgIGNvbnN0IHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBydWxlU2V0ID0gUnVsZVNldC5mcm9tUnVsZVNldHNBbmRTZWxlY3RvcnMocnVsZVNldHMsIHNlbGVjdG9ycyksXG4gICAgICAgICAgc3R5bGUgPSBuZXcgTWFya2Rvd25TdHlsZShydWxlU2V0KTtcblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1hcmtkb3duU3R5bGUiLCJydWxlU2V0IiwiZ2V0UnVsZVNldCIsImFzQ1NTIiwicnVsZVNldHNDU1MiLCJjc3MiLCJmcm9tTm9kZVRva2Vuc0FuZFNlbGVjdG9ycyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvcnMiLCJydWxlU2V0cyIsIlJ1bGVTZXRzIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJSdWxlU2V0IiwiZnJvbVJ1bGVTZXRzQW5kU2VsZWN0b3JzIiwic3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7OzhEQUhEOytEQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU4sSUFBQSxBQUFNQSw4QkFBRCxBQUFMO2FBQU1BLGNBQ1BDLE9BQU87Z0NBREFEO1FBRWpCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTs7a0JBRkVEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxPQUFPO1lBQ3JCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGNBQWMsSUFBSSxDQUFDSCxPQUFPLENBQUNFLEtBQUssSUFDaENFLE1BQU1ELGFBQWMsR0FBRztnQkFFN0IsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwyQkFBMkJDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxTQUFTO2dCQUN2RCxJQUFNQyxXQUFXQyxpQkFBUSxDQUFDQyxpQkFBaUIsQ0FBQ0wsTUFBTUMsU0FDNUNQLFVBQVVZLGdCQUFPLENBQUNDLHdCQUF3QixDQUFDSixVQUFVRCxZQUNyRE0sUUFBUSxJQW5CR2YsY0FtQmVDO2dCQUVoQyxPQUFPYztZQUNUOzs7V0F0Qm1CZiJ9