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
var _constants = require("./constants");
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
            value: function asCSS() {
                var indent = _constants.EMPTY_STRING, ruleSetsCSS = this.ruleSets.asCSS(indent), css = ruleSetsCSS; ///
                return css;
            }
        }
    ], [
        {
            key: "fromNodeTokensAndSelector",
            value: function fromNodeTokensAndSelector(node, tokens, selector) {
                var declarations = _declarations.default.fromNodeAndTokens(node, tokens), ruleSets = _ruleSets.default.fromNodeAndTokens(node, tokens), ruleSet = _ruleSet.default.fromSelectorAndDeclarations(selector, declarations);
                ruleSets.pushRuleSet(ruleSet);
                var style = new MarkdownStyle(ruleSets);
                return style;
            }
        }
    ]);
    return MarkdownStyle;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXJrZG93blN0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZVNldCBmcm9tIFwiLi9zdHlsZS9ydWxlU2V0XCI7XG5pbXBvcnQgUnVsZVNldHMgZnJvbSBcIi4vc3R5bGUvcnVsZVNldHNcIjtcbmltcG9ydCBEZWNsYXJhdGlvbnMgZnJvbSBcIi4vc3R5bGUvZGVjbGFyYXRpb25zXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZG93blN0eWxlIHtcbiAgY29uc3RydWN0b3IocnVsZVNldHMpIHtcbiAgICB0aGlzLnJ1bGVTZXRzID0gcnVsZVNldHM7XG4gIH1cblxuICBnZXRSdWxlU2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlU2V0cztcbiAgfVxuXG4gIGFzQ1NTKCkge1xuICAgIGNvbnN0IGluZGVudCA9IEVNUFRZX1NUUklORywgIC8vL1xuICAgICAgICAgIHJ1bGVTZXRzQ1NTID0gdGhpcy5ydWxlU2V0cy5hc0NTUyhpbmRlbnQpLFxuICAgICAgICAgIGNzcyA9IHJ1bGVTZXRzQ1NTOyAgLy8vXG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlVG9rZW5zQW5kU2VsZWN0b3Iobm9kZSwgdG9rZW5zLCBzZWxlY3Rvcikge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBydWxlU2V0ID0gUnVsZVNldC5mcm9tU2VsZWN0b3JBbmREZWNsYXJhdGlvbnMoc2VsZWN0b3IsIGRlY2xhcmF0aW9ucyk7XG5cbiAgICBydWxlU2V0cy5wdXNoUnVsZVNldChydWxlU2V0KTtcblxuICAgIGNvbnN0IHN0eWxlID0gbmV3IE1hcmtkb3duU3R5bGUocnVsZVNldHMpO1xuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTWFya2Rvd25TdHlsZSIsInJ1bGVTZXRzIiwiZ2V0UnVsZVNldHMiLCJhc0NTUyIsImluZGVudCIsIkVNUFRZX1NUUklORyIsInJ1bGVTZXRzQ1NTIiwiY3NzIiwiZnJvbU5vZGVUb2tlbnNBbmRTZWxlY3RvciIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvciIsImRlY2xhcmF0aW9ucyIsIkRlY2xhcmF0aW9ucyIsImZyb21Ob2RlQW5kVG9rZW5zIiwiUnVsZVNldHMiLCJydWxlU2V0IiwiUnVsZVNldCIsImZyb21TZWxlY3RvckFuZERlY2xhcmF0aW9ucyIsInB1c2hSdWxlU2V0Iiwic3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzhEQU5EOytEQUNDO21FQUNJO3lCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSw4QkFBRCxBQUFMO2FBQU1BLGNBQ1BDLFFBQVE7Z0NBREREO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBRkNEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVNDLHVCQUFZLEVBQ3JCQyxjQUFjLElBQUksQ0FBQ0wsUUFBUSxDQUFDRSxLQUFLLENBQUNDLFNBQ2xDRyxNQUFNRCxhQUFjLEdBQUc7Z0JBRTdCLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMEJBQTBCQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsUUFBUTtnQkFDckQsSUFBTUMsZUFBZUMscUJBQVksQ0FBQ0MsaUJBQWlCLENBQUNMLE1BQU1DLFNBQ3BEVCxXQUFXYyxpQkFBUSxDQUFDRCxpQkFBaUIsQ0FBQ0wsTUFBTUMsU0FDNUNNLFVBQVVDLGdCQUFPLENBQUNDLDJCQUEyQixDQUFDUCxVQUFVQztnQkFFOURYLFNBQVNrQixXQUFXLENBQUNIO2dCQUVyQixJQUFNSSxRQUFRLElBeEJHcEIsY0F3QmVDO2dCQUVoQyxPQUFPbUI7WUFDVDs7O1dBM0JtQnBCIn0=