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
            key: "fromRuleSetsNodeTokensAndDivisionName",
            value: function fromRuleSetsNodeTokensAndDivisionName(RuleSets, node, tokens, divisionName) {
                var ruleSets = RuleSets.fromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), selectorsList = _selectorsList.default.fromNodeTokensAndDivisionName(node, tokens, divisionName), ruleSet = new RuleSet(ruleSets, declarations, selectorsList);
                return ruleSet;
            }
        }
    ]);
    return RuleSet;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuaW1wb3J0IFNlbGVjdG9yc0xpc3QgZnJvbSBcIi4vc2VsZWN0b3JzTGlzdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZVNldCB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVTZXRzLCBkZWNsYXJhdGlvbnMsIHNlbGVjdG9yc0xpc3QpIHtcbiAgICB0aGlzLnJ1bGVTZXRzID0gcnVsZVNldHM7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gICAgdGhpcy5zZWxlY3RvcnNMaXN0ID0gc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIGdldFJ1bGVTZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTZXRzO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFNlbGVjdG9yc0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIGFzQ1NTKHNlbGVjdG9yc0xpc3QsIG91dGVybW9zdCA9IGZhbHNlKSB7XG4gICAgc2VsZWN0b3JzTGlzdCA9IHNlbGVjdG9yc0xpc3QuY29tYmluZSh0aGlzLnNlbGVjdG9yc0xpc3QsIG91dGVybW9zdCk7ICAvLy9cblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKHNlbGVjdG9yc0xpc3QpLFxuICAgICAgICAgIHJ1bGVTZXRzQ1NTID0gdGhpcy5ydWxlU2V0cy5hc0NTUyhzZWxlY3RvcnNMaXN0KSxcbiAgICAgICAgICBjc3MgPSAoZGVjbGFyYXRpb25zQ1NTID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgICAgIHJ1bGVTZXRzQ1NTIDogLy8vXG4gICAgICAgICAgICAgICAgICAgIGAke2RlY2xhcmF0aW9uc0NTU31cbiR7cnVsZVNldHNDU1N9YDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVTZXRzTm9kZUFuZFRva2VucyhSdWxlU2V0cywgbm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcnVsZVNldHMgPSBSdWxlU2V0cy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHNlbGVjdG9yc0xpc3QgPSBTZWxlY3RvcnNMaXN0LmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcnVsZVNldCA9IG5ldyBSdWxlU2V0KHJ1bGVTZXRzLCBkZWNsYXJhdGlvbnMsIHNlbGVjdG9yc0xpc3QpO1xuXG4gICAgcmV0dXJuIHJ1bGVTZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVTZXRzTm9kZVRva2Vuc0FuZERpdmlzaW9uTmFtZShSdWxlU2V0cywgbm9kZSwgdG9rZW5zLCBkaXZpc2lvbk5hbWUpIHtcbiAgICBjb25zdCBydWxlU2V0cyA9IFJ1bGVTZXRzLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgc2VsZWN0b3JzTGlzdCA9IFNlbGVjdG9yc0xpc3QuZnJvbU5vZGVUb2tlbnNBbmREaXZpc2lvbk5hbWUobm9kZSwgdG9rZW5zLCBkaXZpc2lvbk5hbWUpLFxuICAgICAgICAgIHJ1bGVTZXQgPSBuZXcgUnVsZVNldChydWxlU2V0cywgZGVjbGFyYXRpb25zLCBzZWxlY3RvcnNMaXN0KTtcblxuICAgIHJldHVybiBydWxlU2V0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUnVsZVNldCIsInJ1bGVTZXRzIiwiZGVjbGFyYXRpb25zIiwic2VsZWN0b3JzTGlzdCIsImdldFJ1bGVTZXRzIiwiZ2V0RGVjbGFyYXRpb25zIiwiZ2V0U2VsZWN0b3JzTGlzdCIsImFzQ1NTIiwib3V0ZXJtb3N0IiwiY29tYmluZSIsImRlY2xhcmF0aW9uc0NTUyIsInJ1bGVTZXRzQ1NTIiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwiZnJvbVJ1bGVTZXRzTm9kZUFuZFRva2VucyIsIlJ1bGVTZXRzIiwibm9kZSIsInRva2VucyIsImZyb21Ob2RlQW5kVG9rZW5zIiwiRGVjbGFyYXRpb25zIiwiU2VsZWN0b3JzTGlzdCIsInJ1bGVTZXQiLCJmcm9tUnVsZVNldHNOb2RlVG9rZW5zQW5kRGl2aXNpb25OYW1lIiwiZGl2aXNpb25OYW1lIiwiZnJvbU5vZGVUb2tlbnNBbmREaXZpc2lvbk5hbWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7bUVBTEk7b0VBQ0M7eUJBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLHdCQUFELEFBQUw7YUFBTUEsUUFDUEMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLGFBQWE7Z0NBRDlCSDtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7a0JBSkpIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxZQUFZO1lBQzFCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxhQUFhO1lBQzNCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1KLGFBQWE7b0JBQUVLLFlBQUFBLGlFQUFZO2dCQUMvQkwsZ0JBQWdCQSxjQUFjTSxPQUFPLENBQUMsSUFBSSxDQUFDTixhQUFhLEVBQUVLLFlBQWEsR0FBRztnQkFFMUUsSUFBTUUsa0JBQWtCLElBQUksQ0FBQ1IsWUFBWSxDQUFDSyxLQUFLLENBQUNKLGdCQUMxQ1EsY0FBYyxJQUFJLENBQUNWLFFBQVEsQ0FBQ00sS0FBSyxDQUFDSixnQkFDbENTLE1BQU0sQUFBQ0Ysb0JBQW9CRyx1QkFBWSxHQUMvQkYsY0FDRSxBQUFDLEdBQ25CQSxPQURxQkQsaUJBQWdCLE1BQ3pCLE9BQVpDO2dCQUVFLE9BQU9DO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsMEJBQTBCQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsTUFBTTtnQkFDckQsSUFBTWhCLFdBQVdjLFNBQVNHLGlCQUFpQixDQUFDRixNQUFNQyxTQUM1Q2YsZUFBZWlCLHFCQUFZLENBQUNELGlCQUFpQixDQUFDRixNQUFNQyxTQUNwRGQsZ0JBQWdCaUIsc0JBQWEsQ0FBQ0YsaUJBQWlCLENBQUNGLE1BQU1DLFNBQ3RESSxVQUFVLElBcENDckIsUUFvQ1dDLFVBQVVDLGNBQWNDO2dCQUVwRCxPQUFPa0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHNDQUFzQ1AsUUFBUSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRU0sWUFBWTtnQkFDL0UsSUFBTXRCLFdBQVdjLFNBQVNHLGlCQUFpQixDQUFDRixNQUFNQyxTQUM1Q2YsZUFBZWlCLHFCQUFZLENBQUNELGlCQUFpQixDQUFDRixNQUFNQyxTQUNwRGQsZ0JBQWdCaUIsc0JBQWEsQ0FBQ0ksNkJBQTZCLENBQUNSLE1BQU1DLFFBQVFNLGVBQzFFRixVQUFVLElBN0NDckIsUUE2Q1dDLFVBQVVDLGNBQWNDO2dCQUVwRCxPQUFPa0I7WUFDVDs7O1dBaERtQnJCIn0=