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
var _declarations = /*#__PURE__*/ _interop_require_default(require("./declarations"));
var _selectorsList = /*#__PURE__*/ _interop_require_default(require("./selectorsList"));
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
var RuleSet = /*#__PURE__*/ function() {
    function RuleSet(ruleSets, declarations, selectorsList) {
        _class_call_check(this, RuleSet);
        this.ruleSets = ruleSets;
        this.declarations = declarations;
        this.selectorsList = selectorsList;
    }
    _create_class(RuleSet, [
        {
            key: "getRuleSets",
            value: function getRuleSets() {
                return this.ruleSets;
            }
        },
        {
            key: "getDeclarations",
            value: function getDeclarations() {
                return this.declarations;
            }
        },
        {
            key: "getSelectorsList",
            value: function getSelectorsList() {
                return this.selectorsList;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(selectorsList) {
                var outermost = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                selectorsList = selectorsList.combine(this.selectorsList, outermost); ///
                var declarationsCSS = this.declarations.asCSS(selectorsList), ruleSetsCSS = this.ruleSets.asCSS(selectorsList), css = declarationsCSS === _constants.EMPTY_STRING ? ruleSetsCSS : "".concat(declarationsCSS, "\n").concat(ruleSetsCSS);
                return css;
            }
        }
    ], [
        {
            key: "fromRuleSetsNodeAndTokens",
            value: function fromRuleSetsNodeAndTokens(RuleSets, node, tokens) {
                var ruleSets = RuleSets.fromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), selectorsList = _selectorsList.default.fromNodeAndTokens(node, tokens), ruleSet = new RuleSet(ruleSets, declarations, selectorsList);
                return ruleSet;
            }
        },
        {
            key: "fromRuleSetsNodeTokensAndDivisionNames",
            value: function fromRuleSetsNodeTokensAndDivisionNames(RuleSets, node, tokens, divisionNames) {
                var ruleSets = RuleSets.fromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), selectorsList = _selectorsList.default.fromNodeTokensAndDivisionNames(node, tokens, divisionNames), ruleSet = new RuleSet(ruleSets, declarations, selectorsList);
                return ruleSet;
            }
        }
    ]);
    return RuleSet;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuaW1wb3J0IFNlbGVjdG9yc0xpc3QgZnJvbSBcIi4vc2VsZWN0b3JzTGlzdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZVNldCB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVTZXRzLCBkZWNsYXJhdGlvbnMsIHNlbGVjdG9yc0xpc3QpIHtcbiAgICB0aGlzLnJ1bGVTZXRzID0gcnVsZVNldHM7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gICAgdGhpcy5zZWxlY3RvcnNMaXN0ID0gc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIGdldFJ1bGVTZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTZXRzO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFNlbGVjdG9yc0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIGFzQ1NTKHNlbGVjdG9yc0xpc3QsIG91dGVybW9zdCA9IGZhbHNlKSB7XG4gICAgc2VsZWN0b3JzTGlzdCA9IHNlbGVjdG9yc0xpc3QuY29tYmluZSh0aGlzLnNlbGVjdG9yc0xpc3QsIG91dGVybW9zdCk7ICAvLy9cblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKHNlbGVjdG9yc0xpc3QpLFxuICAgICAgICAgIHJ1bGVTZXRzQ1NTID0gdGhpcy5ydWxlU2V0cy5hc0NTUyhzZWxlY3RvcnNMaXN0KSxcbiAgICAgICAgICBjc3MgPSAoZGVjbGFyYXRpb25zQ1NTID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgICAgIHJ1bGVTZXRzQ1NTIDogLy8vXG4gICAgICAgICAgICAgICAgICAgIGAke2RlY2xhcmF0aW9uc0NTU31cbiR7cnVsZVNldHNDU1N9YDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVTZXRzTm9kZUFuZFRva2VucyhSdWxlU2V0cywgbm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcnVsZVNldHMgPSBSdWxlU2V0cy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHNlbGVjdG9yc0xpc3QgPSBTZWxlY3RvcnNMaXN0LmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcnVsZVNldCA9IG5ldyBSdWxlU2V0KHJ1bGVTZXRzLCBkZWNsYXJhdGlvbnMsIHNlbGVjdG9yc0xpc3QpO1xuXG4gICAgcmV0dXJuIHJ1bGVTZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVTZXRzTm9kZVRva2Vuc0FuZERpdmlzaW9uTmFtZXMoUnVsZVNldHMsIG5vZGUsIHRva2VucywgZGl2aXNpb25OYW1lcykge1xuICAgIGNvbnN0IHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0ID0gU2VsZWN0b3JzTGlzdC5mcm9tTm9kZVRva2Vuc0FuZERpdmlzaW9uTmFtZXMobm9kZSwgdG9rZW5zLCBkaXZpc2lvbk5hbWVzKSxcbiAgICAgICAgICBydWxlU2V0ID0gbmV3IFJ1bGVTZXQocnVsZVNldHMsIGRlY2xhcmF0aW9ucywgc2VsZWN0b3JzTGlzdCk7XG5cbiAgICByZXR1cm4gcnVsZVNldDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVTZXQiLCJydWxlU2V0cyIsImRlY2xhcmF0aW9ucyIsInNlbGVjdG9yc0xpc3QiLCJnZXRSdWxlU2V0cyIsImdldERlY2xhcmF0aW9ucyIsImdldFNlbGVjdG9yc0xpc3QiLCJhc0NTUyIsIm91dGVybW9zdCIsImNvbWJpbmUiLCJkZWNsYXJhdGlvbnNDU1MiLCJydWxlU2V0c0NTUyIsImNzcyIsIkVNUFRZX1NUUklORyIsImZyb21SdWxlU2V0c05vZGVBbmRUb2tlbnMiLCJSdWxlU2V0cyIsIm5vZGUiLCJ0b2tlbnMiLCJmcm9tTm9kZUFuZFRva2VucyIsIkRlY2xhcmF0aW9ucyIsIlNlbGVjdG9yc0xpc3QiLCJydWxlU2V0IiwiZnJvbVJ1bGVTZXRzTm9kZVRva2Vuc0FuZERpdmlzaW9uTmFtZXMiLCJkaXZpc2lvbk5hbWVzIiwiZnJvbU5vZGVUb2tlbnNBbmREaXZpc2lvbk5hbWVzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O21FQUxJO29FQUNDO3lCQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSx3QkFBRCxBQUFMO2FBQU1BLFFBQ1BDLFFBQVEsRUFBRUMsWUFBWSxFQUFFQyxhQUFhO2dDQUQ5Qkg7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2tCQUpKSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsWUFBWTtZQUMxQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsYUFBYTtZQUMzQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNSixhQUFhO29CQUFFSyxZQUFBQSxpRUFBWTtnQkFDL0JMLGdCQUFnQkEsY0FBY00sT0FBTyxDQUFDLElBQUksQ0FBQ04sYUFBYSxFQUFFSyxZQUFhLEdBQUc7Z0JBRTFFLElBQU1FLGtCQUFrQixJQUFJLENBQUNSLFlBQVksQ0FBQ0ssS0FBSyxDQUFDSixnQkFDMUNRLGNBQWMsSUFBSSxDQUFDVixRQUFRLENBQUNNLEtBQUssQ0FBQ0osZ0JBQ2xDUyxNQUFNLEFBQUNGLG9CQUFvQkcsdUJBQVksR0FDL0JGLGNBQ0UsQUFBQyxHQUNuQkEsT0FEcUJELGlCQUFnQixNQUN6QixPQUFaQztnQkFFRSxPQUFPQztZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLDBCQUEwQkMsUUFBUSxFQUFFQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ3JELElBQU1oQixXQUFXYyxTQUFTRyxpQkFBaUIsQ0FBQ0YsTUFBTUMsU0FDNUNmLGVBQWVpQixxQkFBWSxDQUFDRCxpQkFBaUIsQ0FBQ0YsTUFBTUMsU0FDcERkLGdCQUFnQmlCLHNCQUFhLENBQUNGLGlCQUFpQixDQUFDRixNQUFNQyxTQUN0REksVUFBVSxJQXBDQ3JCLFFBb0NXQyxVQUFVQyxjQUFjQztnQkFFcEQsT0FBT2tCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx1Q0FBdUNQLFFBQVEsRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVNLGFBQWE7Z0JBQ2pGLElBQU10QixXQUFXYyxTQUFTRyxpQkFBaUIsQ0FBQ0YsTUFBTUMsU0FDNUNmLGVBQWVpQixxQkFBWSxDQUFDRCxpQkFBaUIsQ0FBQ0YsTUFBTUMsU0FDcERkLGdCQUFnQmlCLHNCQUFhLENBQUNJLDhCQUE4QixDQUFDUixNQUFNQyxRQUFRTSxnQkFDM0VGLFVBQVUsSUE3Q0NyQixRQTZDV0MsVUFBVUMsY0FBY0M7Z0JBRXBELE9BQU9rQjtZQUNUOzs7V0FoRG1CckIifQ==