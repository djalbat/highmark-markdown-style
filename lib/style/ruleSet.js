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
            value: function asCSS(selectors) {
                var _this = this;
                var css = _constants.EMPTY_STRING;
                var declarationsCSS = this.declarations.asCSS();
                if (declarationsCSS !== _constants.EMPTY_STRING) {
                    selectors.forEachSelector(function(selector) {
                        var outerSelector = selector, outerSelectorCSS = outerSelector.asCSS();
                        _this.selectors.forEachSelector(function(selector) {
                            var innerSelector = selector, innerSelectorCSS = innerSelector.asCSS();
                            css = "".concat(outerSelectorCSS, " ").concat(innerSelectorCSS, " {\n").concat(declarationsCSS, "}\n\n");
                        });
                    });
                }
                return css;
            }
        }
    ], [
        {
            key: "fromRuleSetsAndDeclarations",
            value: function fromRuleSetsAndDeclarations(RuleSets, declarations) {
                var ruleSets = RuleSets.fromNothing(), selectors = _selectors.default.fromNothing(), ruleSet = new RuleSet(ruleSets, selectors, declarations);
                return ruleSet;
            }
        },
        {
            key: "fromRuleSetsNodeAndTokens",
            value: function fromRuleSetsNodeAndTokens(RuleSets, node, tokens) {
                var ruleSets = RuleSets.fromNodeAndTokens(node, tokens), selectors = _selectors.default.fromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), ruleSet = new RuleSet(ruleSets, selectors, declarations);
                return ruleSet;
            }
        }
    ]);
    return RuleSet;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2VsZWN0b3JzIGZyb20gXCIuL3NlbGVjdG9yc1wiO1xuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tIFwiLi9kZWNsYXJhdGlvbnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0IHtcbiAgY29uc3RydWN0b3IocnVsZVNldHMsIHNlbGVjdG9ycywgZGVjbGFyYXRpb25zKSB7XG4gICAgdGhpcy5ydWxlU2V0cyA9IHJ1bGVTZXRzO1xuICAgIHRoaXMuc2VsZWN0b3JzID0gc2VsZWN0b3JzO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0UnVsZVNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZVNldHM7XG4gIH1cblxuICBnZXRTZWxlY3RvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JzO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGFzQ1NTKHNlbGVjdG9ycykge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUygpO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc0NTUyAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICBzZWxlY3RvcnMuZm9yRWFjaFNlbGVjdG9yKChzZWxlY3RvcikgPT4ge1xuICAgICAgICBjb25zdCBvdXRlclNlbGVjdG9yID0gc2VsZWN0b3IsIC8vL1xuICAgICAgICAgICAgICBvdXRlclNlbGVjdG9yQ1NTID0gb3V0ZXJTZWxlY3Rvci5hc0NTUygpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0b3JzLmZvckVhY2hTZWxlY3Rvcigoc2VsZWN0b3IpID0+IHtcbiAgICAgICAgICBjb25zdCBpbm5lclNlbGVjdG9yID0gc2VsZWN0b3IsIC8vL1xuICAgICAgICAgICAgICAgIGlubmVyU2VsZWN0b3JDU1MgPSBpbm5lclNlbGVjdG9yLmFzQ1NTKCk7XG5cbiAgICAgICAgICBjc3MgPSBgJHtvdXRlclNlbGVjdG9yQ1NTfSAke2lubmVyU2VsZWN0b3JDU1N9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfX1cblxuYDtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlU2V0c0FuZERlY2xhcmF0aW9ucyhSdWxlU2V0cywgZGVjbGFyYXRpb25zKSB7XG4gICAgY29uc3QgcnVsZVNldHMgPSBSdWxlU2V0cy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHNlbGVjdG9ycyA9IFNlbGVjdG9ycy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJ1bGVTZXQgPSBuZXcgUnVsZVNldChydWxlU2V0cywgc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHJ1bGVTZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVTZXRzTm9kZUFuZFRva2VucyhSdWxlU2V0cywgbm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcnVsZVNldHMgPSBSdWxlU2V0cy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHNlbGVjdG9ycyA9IFNlbGVjdG9ycy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXQgPSBuZXcgUnVsZVNldChydWxlU2V0cywgc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHJ1bGVTZXQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlU2V0IiwicnVsZVNldHMiLCJzZWxlY3RvcnMiLCJkZWNsYXJhdGlvbnMiLCJnZXRSdWxlU2V0cyIsImdldFNlbGVjdG9ycyIsImdldERlY2xhcmF0aW9ucyIsImFzQ1NTIiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwiZGVjbGFyYXRpb25zQ1NTIiwiZm9yRWFjaFNlbGVjdG9yIiwic2VsZWN0b3IiLCJvdXRlclNlbGVjdG9yIiwib3V0ZXJTZWxlY3RvckNTUyIsImlubmVyU2VsZWN0b3IiLCJpbm5lclNlbGVjdG9yQ1NTIiwiZnJvbVJ1bGVTZXRzQW5kRGVjbGFyYXRpb25zIiwiUnVsZVNldHMiLCJmcm9tTm90aGluZyIsIlNlbGVjdG9ycyIsInJ1bGVTZXQiLCJmcm9tUnVsZVNldHNOb2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsImZyb21Ob2RlQW5kVG9rZW5zIiwiRGVjbGFyYXRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OztnRUFMQzttRUFDRzt5QkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsd0JBQUQsQUFBTDthQUFNQSxRQUNQQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsWUFBWTtnQ0FEMUJIO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOztrQkFKSEg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFlBQVk7WUFDMUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUwsU0FBUzs7Z0JBQ2IsSUFBSU0sTUFBTUMsdUJBQVk7Z0JBRXRCLElBQU1DLGtCQUFrQixJQUFJLENBQUNQLFlBQVksQ0FBQ0ksS0FBSztnQkFFL0MsSUFBSUcsb0JBQW9CRCx1QkFBWSxFQUFFO29CQUNwQ1AsVUFBVVMsZUFBZSxDQUFDLFNBQUNDO3dCQUN6QixJQUFNQyxnQkFBZ0JELFVBQ2hCRSxtQkFBbUJELGNBQWNOLEtBQUs7d0JBRTVDLE1BQUtMLFNBQVMsQ0FBQ1MsZUFBZSxDQUFDLFNBQUNDOzRCQUM5QixJQUFNRyxnQkFBZ0JILFVBQ2hCSSxtQkFBbUJELGNBQWNSLEtBQUs7NEJBRTVDQyxNQUFNLEFBQUMsR0FBc0JRLE9BQXBCRixrQkFBaUIsS0FDbENKLE9BRHFDTSxrQkFBaUIsUUFDdEMsT0FBaEJOLGlCQUFnQjt3QkFHVjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7O1lBRU9TLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QkMsUUFBUSxFQUFFZixZQUFZO2dCQUN2RCxJQUFNRixXQUFXaUIsU0FBU0MsV0FBVyxJQUMvQmpCLFlBQVlrQixrQkFBUyxDQUFDRCxXQUFXLElBQ2pDRSxVQUFVLElBL0NDckIsUUErQ1dDLFVBQVVDLFdBQVdDO2dCQUVqRCxPQUFPa0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDBCQUEwQkosUUFBUSxFQUFFSyxJQUFJLEVBQUVDLE1BQU07Z0JBQ3JELElBQU12QixXQUFXaUIsU0FBU08saUJBQWlCLENBQUNGLE1BQU1DLFNBQzVDdEIsWUFBWWtCLGtCQUFTLENBQUNLLGlCQUFpQixDQUFDRixNQUFNQyxTQUM5Q3JCLGVBQWV1QixxQkFBWSxDQUFDRCxpQkFBaUIsQ0FBQ0YsTUFBTUMsU0FDcERILFVBQVUsSUF4RENyQixRQXdEV0MsVUFBVUMsV0FBV0M7Z0JBRWpELE9BQU9rQjtZQUNUOzs7V0EzRG1CckIifQ==