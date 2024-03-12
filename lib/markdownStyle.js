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
    function MarkdownStyle(ruleSets) {
        _class_call_check(this, MarkdownStyle);
        this.ruleSets = ruleSets;
    }
    _create_class(MarkdownStyle, [
        {
            key: "getRuleSets",
            value: function getRuleSets() {
                return this.ruleSets;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(selectors) {
                var ruleSetsCSS = this.ruleSets.asCSS(selectors), css = ruleSetsCSS; ///
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var declarations = _declarations.default.fromNodeAndTokens(node, tokens), ruleSets = _ruleSets.default.fromNodeAndTokens(node, tokens), ruleSet = _ruleSet.default.fromRuleSetsAndDeclarations(_ruleSets.default, declarations);
                ruleSets.unshiftRuleSet(ruleSet);
                var style = new MarkdownStyle(ruleSets);
                return style;
            }
        }
    ]);
    return MarkdownStyle;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXJrZG93blN0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZVNldCBmcm9tIFwiLi9zdHlsZS9ydWxlU2V0XCI7XG5pbXBvcnQgUnVsZVNldHMgZnJvbSBcIi4vc3R5bGUvcnVsZVNldHNcIjtcbmltcG9ydCBEZWNsYXJhdGlvbnMgZnJvbSBcIi4vc3R5bGUvZGVjbGFyYXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtkb3duU3R5bGUge1xuICBjb25zdHJ1Y3RvcihydWxlU2V0cykge1xuICAgIHRoaXMucnVsZVNldHMgPSBydWxlU2V0cztcbiAgfVxuXG4gIGdldFJ1bGVTZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTZXRzO1xuICB9XG5cbiAgYXNDU1Moc2VsZWN0b3JzKSB7XG4gICAgY29uc3QgcnVsZVNldHNDU1MgPSB0aGlzLnJ1bGVTZXRzLmFzQ1NTKHNlbGVjdG9ycyksXG4gICAgICAgICAgY3NzID0gcnVsZVNldHNDU1M7ICAvLy9cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcnVsZVNldHMgPSBSdWxlU2V0cy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXQgPSBSdWxlU2V0LmZyb21SdWxlU2V0c0FuZERlY2xhcmF0aW9ucyhSdWxlU2V0cywgZGVjbGFyYXRpb25zKTtcblxuICAgIHJ1bGVTZXRzLnVuc2hpZnRSdWxlU2V0KHJ1bGVTZXQpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBuZXcgTWFya2Rvd25TdHlsZShydWxlU2V0cyk7XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNYXJrZG93blN0eWxlIiwicnVsZVNldHMiLCJnZXRSdWxlU2V0cyIsImFzQ1NTIiwic2VsZWN0b3JzIiwicnVsZVNldHNDU1MiLCJjc3MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJkZWNsYXJhdGlvbnMiLCJEZWNsYXJhdGlvbnMiLCJSdWxlU2V0cyIsInJ1bGVTZXQiLCJSdWxlU2V0IiwiZnJvbVJ1bGVTZXRzQW5kRGVjbGFyYXRpb25zIiwidW5zaGlmdFJ1bGVTZXQiLCJzdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7OERBSkQ7K0RBQ0M7bUVBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFVixJQUFBLEFBQU1BLDhCQUFELEFBQUw7YUFBTUEsY0FDUEMsUUFBUTtnQ0FEREQ7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFGQ0Q7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFFBQVE7WUFDdEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsU0FBUztnQkFDYixJQUFNQyxjQUFjLElBQUksQ0FBQ0osUUFBUSxDQUFDRSxLQUFLLENBQUNDLFlBQ2xDRSxNQUFNRCxhQUFjLEdBQUc7Z0JBRTdCLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1DLGVBQWVDLHFCQUFZLENBQUNKLGlCQUFpQixDQUFDQyxNQUFNQyxTQUNwRFIsV0FBV1csaUJBQVEsQ0FBQ0wsaUJBQWlCLENBQUNDLE1BQU1DLFNBQzVDSSxVQUFVQyxnQkFBTyxDQUFDQywyQkFBMkIsQ0FBQ0gsaUJBQVEsRUFBRUY7Z0JBRTlEVCxTQUFTZSxjQUFjLENBQUNIO2dCQUV4QixJQUFNSSxRQUFRLElBdkJHakIsY0F1QmVDO2dCQUVoQyxPQUFPZ0I7WUFDVDs7O1dBMUJtQmpCIn0=