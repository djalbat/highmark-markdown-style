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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2VsZWN0b3JzIGZyb20gXCIuL3NlbGVjdG9yc1wiO1xuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tIFwiLi9kZWNsYXJhdGlvbnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVTZXQge1xuICBjb25zdHJ1Y3RvcihydWxlU2V0cywgc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpIHtcbiAgICB0aGlzLnJ1bGVTZXRzID0gcnVsZVNldHM7XG4gICAgdGhpcy5zZWxlY3RvcnMgPSBzZWxlY3RvcnM7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRSdWxlU2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlU2V0cztcbiAgfVxuXG4gIGdldFNlbGVjdG9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RvcnM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgYXNDU1Moc2VsZWN0b3JzID0gbnVsbCkge1xuICAgIHNlbGVjdG9ycyA9IChzZWxlY3RvcnMgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0b3JzIDpcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JzLmNvbWJpbmUodGhpcy5zZWxlY3RvcnMpO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5kZWNsYXJhdGlvbnMuYXNDU1Moc2VsZWN0b3JzKSxcbiAgICAgICAgICBydWxlU2V0c0NTUyA9IHRoaXMucnVsZVNldHMuYXNDU1Moc2VsZWN0b3JzKSxcbiAgICAgICAgICBjc3MgPSAoZGVjbGFyYXRpb25zQ1NTID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgICAgIHJ1bGVTZXRzQ1NTIDogLy8vXG4gICAgICAgICAgICAgICAgICAgIGAke2RlY2xhcmF0aW9uc0NTU31cbiR7cnVsZVNldHNDU1N9YDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVTZXRzTm9kZUFuZFRva2VucyhSdWxlU2V0cywgbm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcnVsZVNldHMgPSBSdWxlU2V0cy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHNlbGVjdG9ycyA9IFNlbGVjdG9ycy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXQgPSBuZXcgUnVsZVNldChydWxlU2V0cywgc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHJ1bGVTZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVTZXRzU2VsZWN0b3JzQW5kRGVjbGFyYXRpb25zKHJ1bGVTZXRzLCBzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucykge1xuICAgIGNvbnN0IHJ1bGVTZXQgPSBuZXcgUnVsZVNldChydWxlU2V0cywgc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHJ1bGVTZXQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlU2V0IiwicnVsZVNldHMiLCJzZWxlY3RvcnMiLCJkZWNsYXJhdGlvbnMiLCJnZXRSdWxlU2V0cyIsImdldFNlbGVjdG9ycyIsImdldERlY2xhcmF0aW9ucyIsImFzQ1NTIiwiY29tYmluZSIsImRlY2xhcmF0aW9uc0NTUyIsInJ1bGVTZXRzQ1NTIiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwiZnJvbVJ1bGVTZXRzTm9kZUFuZFRva2VucyIsIlJ1bGVTZXRzIiwibm9kZSIsInRva2VucyIsImZyb21Ob2RlQW5kVG9rZW5zIiwiU2VsZWN0b3JzIiwiRGVjbGFyYXRpb25zIiwicnVsZVNldCIsImZyb21SdWxlU2V0c1NlbGVjdG9yc0FuZERlY2xhcmF0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7Z0VBTEM7bUVBQ0c7eUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLHdCQUFELEFBQUw7YUFBTUEsUUFDUEMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFlBQVk7Z0NBRDFCSDtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7a0JBSkhIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxZQUFZO1lBQzFCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFNTCxZQUFBQSxpRUFBWTtnQkFDaEJBLFlBQVksQUFBQ0EsY0FBYyxPQUNiLElBQUksQ0FBQ0EsU0FBUyxHQUNaQSxVQUFVTSxPQUFPLENBQUMsSUFBSSxDQUFDTixTQUFTO2dCQUVoRCxJQUFNTyxrQkFBa0IsSUFBSSxDQUFDTixZQUFZLENBQUNJLEtBQUssQ0FBQ0wsWUFDMUNRLGNBQWMsSUFBSSxDQUFDVCxRQUFRLENBQUNNLEtBQUssQ0FBQ0wsWUFDbENTLE1BQU0sQUFBQ0Ysb0JBQW9CRyx1QkFBWSxHQUMvQkYsY0FDRSxBQUFDLEdBQ25CQSxPQURxQkQsaUJBQWdCLE1BQ3pCLE9BQVpDO2dCQUVFLE9BQU9DO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsMEJBQTBCQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsTUFBTTtnQkFDckQsSUFBTWYsV0FBV2EsU0FBU0csaUJBQWlCLENBQUNGLE1BQU1DLFNBQzVDZCxZQUFZZ0Isa0JBQVMsQ0FBQ0QsaUJBQWlCLENBQUNGLE1BQU1DLFNBQzlDYixlQUFlZ0IscUJBQVksQ0FBQ0YsaUJBQWlCLENBQUNGLE1BQU1DLFNBQ3BESSxVQUFVLElBdENDcEIsUUFzQ1dDLFVBQVVDLFdBQVdDO2dCQUVqRCxPQUFPaUI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHFDQUFxQ3BCLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxZQUFZO2dCQUMzRSxJQUFNaUIsVUFBVSxJQTVDQ3BCLFFBNENXQyxVQUFVQyxXQUFXQztnQkFFakQsT0FBT2lCO1lBQ1Q7OztXQS9DbUJwQiJ9