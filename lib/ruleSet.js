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
            value: function asCSS() {
                var selectorsList = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                selectorsList = selectorsList === null ? this.selectorsList : selectorsList.combine(this.selectorsList);
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
            key: "fromRuleSetsAndSelectorsList",
            value: function fromRuleSetsAndSelectorsList(ruleSets, selectorsList) {
                var declarations = _declarations.default.fromNothing(), ruleSet = new RuleSet(ruleSets, declarations, selectorsList);
                return ruleSet;
            }
        }
    ]);
    return RuleSet;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuaW1wb3J0IFNlbGVjdG9yc0xpc3QgZnJvbSBcIi4vc2VsZWN0b3JzTGlzdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZVNldCB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVTZXRzLCBkZWNsYXJhdGlvbnMsIHNlbGVjdG9yc0xpc3QpIHtcbiAgICB0aGlzLnJ1bGVTZXRzID0gcnVsZVNldHM7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gICAgdGhpcy5zZWxlY3RvcnNMaXN0ID0gc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIGdldFJ1bGVTZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTZXRzO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFNlbGVjdG9yc0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIGFzQ1NTKHNlbGVjdG9yc0xpc3QgPSBudWxsKSB7XG4gICAgc2VsZWN0b3JzTGlzdCA9IChzZWxlY3RvcnNMaXN0ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RvcnNMaXN0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yc0xpc3QuY29tYmluZSh0aGlzLnNlbGVjdG9yc0xpc3QpO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5kZWNsYXJhdGlvbnMuYXNDU1Moc2VsZWN0b3JzTGlzdCksXG4gICAgICAgICAgcnVsZVNldHNDU1MgPSB0aGlzLnJ1bGVTZXRzLmFzQ1NTKHNlbGVjdG9yc0xpc3QpLFxuICAgICAgICAgIGNzcyA9IChkZWNsYXJhdGlvbnNDU1MgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICAgICAgcnVsZVNldHNDU1MgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgYCR7ZGVjbGFyYXRpb25zQ1NTfVxuJHtydWxlU2V0c0NTU31gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZVNldHNOb2RlQW5kVG9rZW5zKFJ1bGVTZXRzLCBub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBydWxlU2V0cyA9IFJ1bGVTZXRzLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgc2VsZWN0b3JzTGlzdCA9IFNlbGVjdG9yc0xpc3QuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBydWxlU2V0ID0gbmV3IFJ1bGVTZXQocnVsZVNldHMsIGRlY2xhcmF0aW9ucywgc2VsZWN0b3JzTGlzdCk7XG5cbiAgICByZXR1cm4gcnVsZVNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZVNldHNBbmRTZWxlY3RvcnNMaXN0KHJ1bGVTZXRzLCBzZWxlY3RvcnNMaXN0KSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcnVsZVNldCA9IG5ldyBSdWxlU2V0KHJ1bGVTZXRzLCBkZWNsYXJhdGlvbnMsIHNlbGVjdG9yc0xpc3QpO1xuXG4gICAgcmV0dXJuIHJ1bGVTZXQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlU2V0IiwicnVsZVNldHMiLCJkZWNsYXJhdGlvbnMiLCJzZWxlY3RvcnNMaXN0IiwiZ2V0UnVsZVNldHMiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXRTZWxlY3RvcnNMaXN0IiwiYXNDU1MiLCJjb21iaW5lIiwiZGVjbGFyYXRpb25zQ1NTIiwicnVsZVNldHNDU1MiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJmcm9tUnVsZVNldHNOb2RlQW5kVG9rZW5zIiwiUnVsZVNldHMiLCJub2RlIiwidG9rZW5zIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJEZWNsYXJhdGlvbnMiLCJTZWxlY3RvcnNMaXN0IiwicnVsZVNldCIsImZyb21SdWxlU2V0c0FuZFNlbGVjdG9yc0xpc3QiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7bUVBTEk7b0VBQ0M7eUJBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLHdCQUFELEFBQUw7YUFBTUEsUUFDUEMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLGFBQWE7Z0NBRDlCSDtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7a0JBSkpIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxZQUFZO1lBQzFCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxhQUFhO1lBQzNCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFNSixnQkFBQUEsaUVBQWdCO2dCQUNwQkEsZ0JBQWdCLEFBQUNBLGtCQUFrQixPQUNqQixJQUFJLENBQUNBLGFBQWEsR0FDaEJBLGNBQWNLLE9BQU8sQ0FBQyxJQUFJLENBQUNMLGFBQWE7Z0JBRTVELElBQU1NLGtCQUFrQixJQUFJLENBQUNQLFlBQVksQ0FBQ0ssS0FBSyxDQUFDSixnQkFDMUNPLGNBQWMsSUFBSSxDQUFDVCxRQUFRLENBQUNNLEtBQUssQ0FBQ0osZ0JBQ2xDUSxNQUFNLEFBQUNGLG9CQUFvQkcsdUJBQVksR0FDL0JGLGNBQ0UsQUFBQyxHQUNuQkEsT0FEcUJELGlCQUFnQixNQUN6QixPQUFaQztnQkFFRSxPQUFPQztZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLDBCQUEwQkMsUUFBUSxFQUFFQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ3JELElBQU1mLFdBQVdhLFNBQVNHLGlCQUFpQixDQUFDRixNQUFNQyxTQUM1Q2QsZUFBZWdCLHFCQUFZLENBQUNELGlCQUFpQixDQUFDRixNQUFNQyxTQUNwRGIsZ0JBQWdCZ0Isc0JBQWEsQ0FBQ0YsaUJBQWlCLENBQUNGLE1BQU1DLFNBQ3RESSxVQUFVLElBdENDcEIsUUFzQ1dDLFVBQVVDLGNBQWNDO2dCQUVwRCxPQUFPaUI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QnBCLFFBQVEsRUFBRUUsYUFBYTtnQkFDekQsSUFBTUQsZUFBZWdCLHFCQUFZLENBQUNJLFdBQVcsSUFDdkNGLFVBQVUsSUE3Q0NwQixRQTZDV0MsVUFBVUMsY0FBY0M7Z0JBRXBELE9BQU9pQjtZQUNUOzs7V0FoRG1CcEIifQ==