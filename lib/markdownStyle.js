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
            key: "fromNodeTokensAndSelectorsList",
            value: function fromNodeTokensAndSelectorsList(node, tokens, selectorsList) {
                var ruleSets = _ruleSets.default.fromNodeAndTokens(node, tokens), ruleSet = _ruleSet.default.fromRuleSetsAndSelectorsList(ruleSets, selectorsList), style = new MarkdownStyle(ruleSet);
                return style;
            }
        }
    ]);
    return MarkdownStyle;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXJrZG93blN0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZVNldCBmcm9tIFwiLi9ydWxlU2V0XCI7XG5pbXBvcnQgUnVsZVNldHMgZnJvbSBcIi4vcnVsZVNldHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Rvd25TdHlsZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVTZXQpIHtcbiAgICB0aGlzLnJ1bGVTZXQgPSBydWxlU2V0O1xuICB9XG5cbiAgZ2V0UnVsZVNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlU2V0O1xuICB9XG5cbiAgYXNDU1MoKSB7XG4gICAgY29uc3QgcnVsZVNldHNDU1MgPSB0aGlzLnJ1bGVTZXQuYXNDU1MoKSxcbiAgICAgICAgICBjc3MgPSBydWxlU2V0c0NTUzsgIC8vL1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZVRva2Vuc0FuZFNlbGVjdG9yc0xpc3Qobm9kZSwgdG9rZW5zLCBzZWxlY3RvcnNMaXN0KSB7XG4gICAgY29uc3QgcnVsZVNldHMgPSBSdWxlU2V0cy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXQgPSBSdWxlU2V0LmZyb21SdWxlU2V0c0FuZFNlbGVjdG9yc0xpc3QocnVsZVNldHMsIHNlbGVjdG9yc0xpc3QpLFxuICAgICAgICAgIHN0eWxlID0gbmV3IE1hcmtkb3duU3R5bGUocnVsZVNldCk7XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNYXJrZG93blN0eWxlIiwicnVsZVNldCIsImdldFJ1bGVTZXQiLCJhc0NTUyIsInJ1bGVTZXRzQ1NTIiwiY3NzIiwiZnJvbU5vZGVUb2tlbnNBbmRTZWxlY3RvcnNMaXN0Iiwibm9kZSIsInRva2VucyIsInNlbGVjdG9yc0xpc3QiLCJydWxlU2V0cyIsIlJ1bGVTZXRzIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJSdWxlU2V0IiwiZnJvbVJ1bGVTZXRzQW5kU2VsZWN0b3JzTGlzdCIsInN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7Ozs4REFIRDsrREFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVOLElBQUEsQUFBTUEsOEJBQUQsQUFBTDthQUFNQSxjQUNQQyxPQUFPO2dDQURBRDtRQUVqQixJQUFJLENBQUNDLE9BQU8sR0FBR0E7O2tCQUZFRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsT0FBTztZQUNyQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxjQUFjLElBQUksQ0FBQ0gsT0FBTyxDQUFDRSxLQUFLLElBQ2hDRSxNQUFNRCxhQUFjLEdBQUc7Z0JBRTdCLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsK0JBQStCQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsYUFBYTtnQkFDL0QsSUFBTUMsV0FBV0MsaUJBQVEsQ0FBQ0MsaUJBQWlCLENBQUNMLE1BQU1DLFNBQzVDUCxVQUFVWSxnQkFBTyxDQUFDQyw0QkFBNEIsQ0FBQ0osVUFBVUQsZ0JBQ3pETSxRQUFRLElBbkJHZixjQW1CZUM7Z0JBRWhDLE9BQU9jO1lBQ1Q7OztXQXRCbUJmIn0=