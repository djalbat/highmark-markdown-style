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
var _query = require("../utilities/query");
var _constants = require("../constants");
var _content = require("../utilities/content");
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
var selectorsNonTerminalNodeQuery = (0, _query.nodeQuery)("/*/selectors");
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
                var css = _constants.EMPTY_STRING;
                var declarationsLength = this.declarations.getLength(), ruleSetsLength = this.ruleSets.getLength(), length = declarationsLength + ruleSetsLength;
                if (length > 0) {
                    var declarationsCSS = this.declarations.asCSS(), ruleSetsCSS = this.ruleSets.asCSS();
                    css = "".concat(this.selectors, " {\n").concat(declarationsCSS, "}\n").concat(ruleSetsCSS, "\n\n");
                }
                return css;
            }
        }
    ], [
        {
            key: "fromRuleSetsSelectorAndDeclarations",
            value: function fromRuleSetsSelectorAndDeclarations(RuleSets, selector, declarations) {
                var ruleSets = RuleSets.fromNothing(), selectors = selector, ruleSet = new RuleSet(ruleSets, selectors, declarations);
                return ruleSet;
            }
        },
        {
            key: "fromRuleSetsNodeAndTokens",
            value: function fromRuleSetsNodeAndTokens(RuleSets, node, tokens) {
                var ruleSets = RuleSets.fromNodeAndTokens(node, tokens), selectors = selectorsFromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), ruleSet = new RuleSet(ruleSets, selectors, declarations);
                return ruleSet;
            }
        }
    ]);
    return RuleSet;
}();
function selectorsFromNodeAndTokens(node, tokens) {
    var selectorsNonTerminalNode = selectorsNonTerminalNodeQuery(node), selectorsNonTerminalNodeContent = (0, _content.contentFromNonTerminalNodeAndTokens)(selectorsNonTerminalNode, tokens), selectors = "".concat(selectorsNonTerminalNodeContent);
    return selectors;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjb250ZW50RnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jb25zdCBzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3NlbGVjdG9yc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZVNldCB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVTZXRzLCBzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucykge1xuICAgIHRoaXMucnVsZVNldHMgPSBydWxlU2V0cztcbiAgICB0aGlzLnNlbGVjdG9ycyA9IHNlbGVjdG9ycztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFJ1bGVTZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTZXRzO1xuICB9XG5cbiAgZ2V0U2VsZWN0b3JzKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdG9ycztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBhc0NTUygpIHtcbiAgICBsZXQgY3NzID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zTGVuZ3RoID0gdGhpcy5kZWNsYXJhdGlvbnMuZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgcnVsZVNldHNMZW5ndGggPSB0aGlzLnJ1bGVTZXRzLmdldExlbmd0aCgpLFxuICAgICAgICAgIGxlbmd0aCA9IGRlY2xhcmF0aW9uc0xlbmd0aCArIHJ1bGVTZXRzTGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKCksXG4gICAgICAgICAgICBydWxlU2V0c0NTUyA9IHRoaXMucnVsZVNldHMuYXNDU1MoKTtcblxuICAgICAgY3NzID0gYCR7dGhpcy5zZWxlY3RvcnN9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfX1cbiR7cnVsZVNldHNDU1N9XG5cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZVNldHNTZWxlY3RvckFuZERlY2xhcmF0aW9ucyhSdWxlU2V0cywgc2VsZWN0b3IsIGRlY2xhcmF0aW9ucykge1xuICAgIGNvbnN0IHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzZWxlY3RvcnMgPSBzZWxlY3RvciwgLy8vXG4gICAgICAgICAgcnVsZVNldCA9IG5ldyBSdWxlU2V0KHJ1bGVTZXRzLCBzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucyk7XG5cbiAgICByZXR1cm4gcnVsZVNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZVNldHNOb2RlQW5kVG9rZW5zKFJ1bGVTZXRzLCBub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBydWxlU2V0cyA9IFJ1bGVTZXRzLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgc2VsZWN0b3JzID0gc2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBydWxlU2V0ID0gbmV3IFJ1bGVTZXQocnVsZVNldHMsIHNlbGVjdG9ycywgZGVjbGFyYXRpb25zKTtcblxuICAgIHJldHVybiBydWxlU2V0O1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGUgPSBzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlQ29udGVudCA9IGNvbnRlbnRGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgc2VsZWN0b3JzID0gYCR7c2VsZWN0b3JzTm9uVGVybWluYWxOb2RlQ29udGVudH1gO1xuXG4gIHJldHVybiBzZWxlY3RvcnM7XG59XG4iXSwibmFtZXMiOlsiUnVsZVNldCIsInNlbGVjdG9yc05vblRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicnVsZVNldHMiLCJzZWxlY3RvcnMiLCJkZWNsYXJhdGlvbnMiLCJnZXRSdWxlU2V0cyIsImdldFNlbGVjdG9ycyIsImdldERlY2xhcmF0aW9ucyIsImFzQ1NTIiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwiZGVjbGFyYXRpb25zTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwicnVsZVNldHNMZW5ndGgiLCJsZW5ndGgiLCJkZWNsYXJhdGlvbnNDU1MiLCJydWxlU2V0c0NTUyIsImZyb21SdWxlU2V0c1NlbGVjdG9yQW5kRGVjbGFyYXRpb25zIiwiUnVsZVNldHMiLCJzZWxlY3RvciIsImZyb21Ob3RoaW5nIiwicnVsZVNldCIsImZyb21SdWxlU2V0c05vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2VucyIsIkRlY2xhcmF0aW9ucyIsInNlbGVjdG9yc05vblRlcm1pbmFsTm9kZSIsInNlbGVjdG9yc05vblRlcm1pbmFsTm9kZUNvbnRlbnQiLCJjb250ZW50RnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7bUVBUkk7cUJBRUM7eUJBQ0c7dUJBQ3VCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELElBQU1DLGdDQUFnQ0MsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQyxJQUFBLEFBQU1GLHdCQUFELEFBQUw7YUFBTUEsUUFDUEcsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFlBQVk7Z0NBRDFCTDtRQUVqQixJQUFJLENBQUNHLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7a0JBSkhMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxZQUFZO1lBQzFCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLE1BQU1DLHVCQUFZO2dCQUV0QixJQUFNQyxxQkFBcUIsSUFBSSxDQUFDUCxZQUFZLENBQUNRLFNBQVMsSUFDaERDLGlCQUFpQixJQUFJLENBQUNYLFFBQVEsQ0FBQ1UsU0FBUyxJQUN4Q0UsU0FBU0gscUJBQXFCRTtnQkFFcEMsSUFBSUMsU0FBUyxHQUFHO29CQUNkLElBQU1DLGtCQUFrQixJQUFJLENBQUNYLFlBQVksQ0FBQ0ksS0FBSyxJQUN6Q1EsY0FBYyxJQUFJLENBQUNkLFFBQVEsQ0FBQ00sS0FBSztvQkFFdkNDLE1BQU0sQUFBQyxHQUNYTSxPQURhLElBQUksQ0FBQ1osU0FBUyxFQUFDLFFBRTVCYSxPQURBRCxpQkFBZ0IsT0FDSixPQUFaQyxhQUFZO2dCQUdWO2dCQUVBLE9BQU9QO1lBQ1Q7Ozs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0Esb0NBQW9DQyxRQUFRLEVBQUVDLFFBQVEsRUFBRWYsWUFBWTtnQkFDekUsSUFBTUYsV0FBV2dCLFNBQVNFLFdBQVcsSUFDL0JqQixZQUFZZ0IsVUFDWkUsVUFBVSxJQTNDQ3RCLFFBMkNXRyxVQUFVQyxXQUFXQztnQkFFakQsT0FBT2lCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJKLFFBQVEsRUFBRUssSUFBSSxFQUFFQyxNQUFNO2dCQUNyRCxJQUFNdEIsV0FBV2dCLFNBQVNPLGlCQUFpQixDQUFDRixNQUFNQyxTQUM1Q3JCLFlBQVl1QiwyQkFBMkJILE1BQU1DLFNBQzdDcEIsZUFBZXVCLHFCQUFZLENBQUNGLGlCQUFpQixDQUFDRixNQUFNQyxTQUNwREgsVUFBVSxJQXBEQ3RCLFFBb0RXRyxVQUFVQyxXQUFXQztnQkFFakQsT0FBT2lCO1lBQ1Q7OztXQXZEbUJ0Qjs7QUEwRHJCLFNBQVMyQiwyQkFBMkJILElBQUksRUFBRUMsTUFBTTtJQUM5QyxJQUFNSSwyQkFBMkI1Qiw4QkFBOEJ1QixPQUN6RE0sa0NBQWtDQyxJQUFBQSw0Q0FBbUMsRUFBQ0YsMEJBQTBCSixTQUNoR3JCLFlBQVksQUFBQyxHQUFrQyxPQUFoQzBCO0lBRXJCLE9BQU8xQjtBQUNUIn0=