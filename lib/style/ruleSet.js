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
var _selectors = /*#__PURE__*/ _interop_require_default(require("./selectors"));
var _declarations = /*#__PURE__*/ _interop_require_default(require("./declarations"));
var _constants = require("../constants");
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
var RuleSet = /*#__PURE__*/ function() {
    function RuleSet(ruleSets, selectors, declarations) {
        _class_call_check(this, RuleSet);
        this.ruleSets = ruleSets;
        this.selectors = selectors;
        this.declarations = declarations;
    }
    _create_class(RuleSet, [
        {
            key: "getRuleSets",
            value: function getRuleSets() {
                return this.ruleSets;
            }
        },
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
            key: "asCSS",
            value: function asCSS() {
                var selectors = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                selectors = selectors === null ? this.selectors : selectors.combine(this.selectors);
                var declarationsCSS = this.declarations.asCSS(selectors), ruleSetsCSS = this.ruleSets.asCSS(selectors), css = declarationsCSS === _constants.EMPTY_STRING ? ruleSetsCSS : "".concat(declarationsCSS, "\n").concat(ruleSetsCSS);
                return css;
            }
        }
    ], [
        {
            key: "fromRuleSetsNodeAndTokens",
            value: function fromRuleSetsNodeAndTokens(RuleSets, node, tokens) {
                var ruleSets = RuleSets.fromNodeAndTokens(node, tokens), selectors = _selectors.default.fromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), ruleSet = new RuleSet(ruleSets, selectors, declarations);
                return ruleSet;
            }
        },
        {
            key: "fromRuleSetsSelectorsAndDeclarations",
            value: function fromRuleSetsSelectorsAndDeclarations(ruleSets, selectors, declarations) {
                var ruleSet = new RuleSet(ruleSets, selectors, declarations);
                return ruleSet;
            }
        }
    ]);
    return RuleSet;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2VsZWN0b3JzIGZyb20gXCIuL3NlbGVjdG9yc1wiO1xuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tIFwiLi9kZWNsYXJhdGlvbnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0IHtcbiAgY29uc3RydWN0b3IocnVsZVNldHMsIHNlbGVjdG9ycywgZGVjbGFyYXRpb25zKSB7XG4gICAgdGhpcy5ydWxlU2V0cyA9IHJ1bGVTZXRzO1xuICAgIHRoaXMuc2VsZWN0b3JzID0gc2VsZWN0b3JzO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0UnVsZVNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZVNldHM7XG4gIH1cblxuICBnZXRTZWxlY3RvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JzO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGFzQ1NTKHNlbGVjdG9ycyA9IG51bGwpIHtcbiAgICBzZWxlY3RvcnMgPSAoc2VsZWN0b3JzID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdG9ycyA6XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9ycy5jb21iaW5lKHRoaXMuc2VsZWN0b3JzKTtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKHNlbGVjdG9ycyksXG4gICAgICAgICAgcnVsZVNldHNDU1MgPSB0aGlzLnJ1bGVTZXRzLmFzQ1NTKHNlbGVjdG9ycyksXG4gICAgICAgICAgY3NzID0gKGRlY2xhcmF0aW9uc0NTUyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICAgICBydWxlU2V0c0NTUyA6IC8vL1xuICAgICAgICAgICAgICAgICAgICBgJHtkZWNsYXJhdGlvbnNDU1N9XG4ke3J1bGVTZXRzQ1NTfWA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlU2V0c05vZGVBbmRUb2tlbnMoUnVsZVNldHMsIG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzZWxlY3RvcnMgPSBTZWxlY3RvcnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBydWxlU2V0ID0gbmV3IFJ1bGVTZXQocnVsZVNldHMsIHNlbGVjdG9ycywgZGVjbGFyYXRpb25zKTtcblxuICAgIHJldHVybiBydWxlU2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlU2V0c1NlbGVjdG9yc0FuZERlY2xhcmF0aW9ucyhydWxlU2V0cywgc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpIHtcbiAgICBjb25zdCBydWxlU2V0ID0gbmV3IFJ1bGVTZXQocnVsZVNldHMsIHNlbGVjdG9ycywgZGVjbGFyYXRpb25zKTtcblxuICAgIHJldHVybiBydWxlU2V0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUnVsZVNldCIsInJ1bGVTZXRzIiwic2VsZWN0b3JzIiwiZGVjbGFyYXRpb25zIiwiZ2V0UnVsZVNldHMiLCJnZXRTZWxlY3RvcnMiLCJnZXREZWNsYXJhdGlvbnMiLCJhc0NTUyIsImNvbWJpbmUiLCJkZWNsYXJhdGlvbnNDU1MiLCJydWxlU2V0c0NTUyIsImNzcyIsIkVNUFRZX1NUUklORyIsImZyb21SdWxlU2V0c05vZGVBbmRUb2tlbnMiLCJSdWxlU2V0cyIsIm5vZGUiLCJ0b2tlbnMiLCJmcm9tTm9kZUFuZFRva2VucyIsIlNlbGVjdG9ycyIsIkRlY2xhcmF0aW9ucyIsInJ1bGVTZXQiLCJmcm9tUnVsZVNldHNTZWxlY3RvcnNBbmREZWNsYXJhdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O2dFQUxDO21FQUNHO3lCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSx3QkFBRCxBQUFMO2FBQU1BLFFBQ1BDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxZQUFZO2dDQUQxQkg7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFlBQVksR0FBR0E7O2tCQUpISDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsWUFBWTtZQUMxQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBTUwsWUFBQUEsaUVBQVk7Z0JBQ2hCQSxZQUFZLEFBQUNBLGNBQWMsT0FDYixJQUFJLENBQUNBLFNBQVMsR0FDWkEsVUFBVU0sT0FBTyxDQUFDLElBQUksQ0FBQ04sU0FBUztnQkFFaEQsSUFBTU8sa0JBQWtCLElBQUksQ0FBQ04sWUFBWSxDQUFDSSxLQUFLLENBQUNMLFlBQzFDUSxjQUFjLElBQUksQ0FBQ1QsUUFBUSxDQUFDTSxLQUFLLENBQUNMLFlBQ2xDUyxNQUFNLEFBQUNGLG9CQUFvQkcsdUJBQVksR0FDL0JGLGNBQ0UsQUFBQyxHQUNuQkEsT0FEcUJELGlCQUFnQixNQUN6QixPQUFaQztnQkFFRSxPQUFPQztZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLDBCQUEwQkMsUUFBUSxFQUFFQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ3JELElBQU1mLFdBQVdhLFNBQVNHLGlCQUFpQixDQUFDRixNQUFNQyxTQUM1Q2QsWUFBWWdCLGtCQUFTLENBQUNELGlCQUFpQixDQUFDRixNQUFNQyxTQUM5Q2IsZUFBZWdCLHFCQUFZLENBQUNGLGlCQUFpQixDQUFDRixNQUFNQyxTQUNwREksVUFBVSxJQXRDQ3BCLFFBc0NXQyxVQUFVQyxXQUFXQztnQkFFakQsT0FBT2lCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxxQ0FBcUNwQixRQUFRLEVBQUVDLFNBQVMsRUFBRUMsWUFBWTtnQkFDM0UsSUFBTWlCLFVBQVUsSUE1Q0NwQixRQTRDV0MsVUFBVUMsV0FBV0M7Z0JBRWpELE9BQU9pQjtZQUNUOzs7V0EvQ21CcEIifQ==