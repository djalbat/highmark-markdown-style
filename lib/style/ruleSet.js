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
    function RuleSet(selectors, declarations) {
        _class_call_check(this, RuleSet);
        this.selectors = selectors;
        this.declarations = declarations;
    }
    _create_class(RuleSet, [
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
                var declarationsCSS = this.declarations.asCSS();
                if (declarationsCSS !== _constants.EMPTY_STRING) {
                    css = "".concat(this.selectors, " {\n").concat(declarationsCSS, "}\n\n");
                }
                return css;
            }
        }
    ], [
        {
            key: "fromSelectorAndDeclarations",
            value: function fromSelectorAndDeclarations(selector, declarations) {
                var selectors = selector, ruleSet = new RuleSet(selectors, declarations);
                return ruleSet;
            }
        },
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var selectors = selectorsFromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), ruleSet = new RuleSet(selectors, declarations);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjb250ZW50RnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jb25zdCBzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3NlbGVjdG9yc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZVNldCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9ycywgZGVjbGFyYXRpb25zKSB7XG4gICAgdGhpcy5zZWxlY3RvcnMgPSBzZWxlY3RvcnM7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRTZWxlY3RvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JzO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGFzQ1NTKCkge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUygpO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc0NTUyAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgY3NzID0gYCR7dGhpcy5zZWxlY3RvcnN9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfX1cblxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TZWxlY3RvckFuZERlY2xhcmF0aW9ucyhzZWxlY3RvciwgZGVjbGFyYXRpb25zKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gc2VsZWN0b3IsIC8vL1xuICAgICAgICAgIHJ1bGVTZXQgPSBuZXcgUnVsZVNldChzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucyk7XG5cbiAgICByZXR1cm4gcnVsZVNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXQgPSBuZXcgUnVsZVNldChzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucyk7XG5cbiAgICByZXR1cm4gcnVsZVNldDtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlID0gc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlUXVlcnkobm9kZSksXG4gICAgICAgIHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZUNvbnRlbnQgPSBjb250ZW50RnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyhzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgIHNlbGVjdG9ycyA9IGAke3NlbGVjdG9yc05vblRlcm1pbmFsTm9kZUNvbnRlbnR9YDtcblxuICByZXR1cm4gc2VsZWN0b3JzO1xufVxuIl0sIm5hbWVzIjpbIlJ1bGVTZXQiLCJzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInNlbGVjdG9ycyIsImRlY2xhcmF0aW9ucyIsImdldFNlbGVjdG9ycyIsImdldERlY2xhcmF0aW9ucyIsImFzQ1NTIiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwiZGVjbGFyYXRpb25zQ1NTIiwiZnJvbVNlbGVjdG9yQW5kRGVjbGFyYXRpb25zIiwic2VsZWN0b3IiLCJydWxlU2V0IiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwic2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMiLCJEZWNsYXJhdGlvbnMiLCJzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGUiLCJzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVDb250ZW50IiwiY29udGVudEZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O21FQVJJO3FCQUVDO3lCQUNHO3VCQUN1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRCxJQUFNQyxnQ0FBZ0NDLElBQUFBLGdCQUFTLEVBQUM7QUFFakMsSUFBQSxBQUFNRix3QkFBRCxBQUFMO2FBQU1BLFFBQ1BHLFNBQVMsRUFBRUMsWUFBWTtnQ0FEaEJKO1FBRWpCLElBQUksQ0FBQ0csU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFlBQVksR0FBR0E7O2tCQUhISjs7WUFNbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxNQUFNQyx1QkFBWTtnQkFFdEIsSUFBTUMsa0JBQWtCLElBQUksQ0FBQ04sWUFBWSxDQUFDRyxLQUFLO2dCQUUvQyxJQUFJRyxvQkFBb0JELHVCQUFZLEVBQUU7b0JBQ25DRCxNQUFNLEFBQUMsR0FDWkUsT0FEYyxJQUFJLENBQUNQLFNBQVMsRUFBQyxRQUNiLE9BQWhCTyxpQkFBZ0I7Z0JBR2Q7Z0JBRUEsT0FBT0Y7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJDLFFBQVEsRUFBRVIsWUFBWTtnQkFDdkQsSUFBTUQsWUFBWVMsVUFDWkMsVUFBVSxJQS9CQ2IsUUErQldHLFdBQVdDO2dCQUV2QyxPQUFPUztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1iLFlBQVljLDJCQUEyQkYsTUFBTUMsU0FDN0NaLGVBQWVjLHFCQUFZLENBQUNKLGlCQUFpQixDQUFDQyxNQUFNQyxTQUNwREgsVUFBVSxJQXZDQ2IsUUF1Q1dHLFdBQVdDO2dCQUV2QyxPQUFPUztZQUNUOzs7V0ExQ21CYjs7QUE2Q3JCLFNBQVNpQiwyQkFBMkJGLElBQUksRUFBRUMsTUFBTTtJQUM5QyxJQUFNRywyQkFBMkJsQiw4QkFBOEJjLE9BQ3pESyxrQ0FBa0NDLElBQUFBLDRDQUFtQyxFQUFDRiwwQkFBMEJILFNBQ2hHYixZQUFZLEFBQUMsR0FBa0MsT0FBaENpQjtJQUVyQixPQUFPakI7QUFDVCJ9