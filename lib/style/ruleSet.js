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
            value: function asCSS(indent) {
                var css = _constants.EMPTY_STRING;
                var declarationsCSS = this.declarations.asCSS(indent);
                if (declarationsCSS !== _constants.EMPTY_STRING) {
                    css = "".concat(indent).concat(this.selectors, " {\n").concat(declarationsCSS).concat(indent, "}\n\n");
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
    var selectorsNonTerminalNode = selectorsNonTerminalNodeQuery(node), selectorsNonTerminalNodeContent = (0, _content.contentFromNodeAndTokens)(selectorsNonTerminalNode, tokens), selectors = "".concat(selectorsNonTerminalNodeContent);
    return selectors;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3Qgc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9zZWxlY3RvcnNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVTZXQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucykge1xuICAgIHRoaXMuc2VsZWN0b3JzID0gc2VsZWN0b3JzO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0U2VsZWN0b3JzKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdG9ycztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBhc0NTUyhpbmRlbnQpIHtcbiAgICBsZXQgY3NzID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5kZWNsYXJhdGlvbnMuYXNDU1MoaW5kZW50KTtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNDU1MgIT09IEVNUFRZX1NUUklORykge1xuICAgICAgIGNzcyA9IGAke2luZGVudH0ke3RoaXMuc2VsZWN0b3JzfSB7XG4ke2RlY2xhcmF0aW9uc0NTU30ke2luZGVudH19XG5cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VsZWN0b3JBbmREZWNsYXJhdGlvbnMoc2VsZWN0b3IsIGRlY2xhcmF0aW9ucykge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IHNlbGVjdG9yLCAvLy9cbiAgICAgICAgICBydWxlU2V0ID0gbmV3IFJ1bGVTZXQoc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHJ1bGVTZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gc2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBydWxlU2V0ID0gbmV3IFJ1bGVTZXQoc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHJ1bGVTZXQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZSA9IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpLFxuICAgICAgICBzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVDb250ZW50ID0gY29udGVudEZyb21Ob2RlQW5kVG9rZW5zKHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgc2VsZWN0b3JzID0gYCR7c2VsZWN0b3JzTm9uVGVybWluYWxOb2RlQ29udGVudH1gO1xuXG4gIHJldHVybiBzZWxlY3RvcnM7XG59XG4iXSwibmFtZXMiOlsiUnVsZVNldCIsInNlbGVjdG9yc05vblRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic2VsZWN0b3JzIiwiZGVjbGFyYXRpb25zIiwiZ2V0U2VsZWN0b3JzIiwiZ2V0RGVjbGFyYXRpb25zIiwiYXNDU1MiLCJpbmRlbnQiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJkZWNsYXJhdGlvbnNDU1MiLCJmcm9tU2VsZWN0b3JBbmREZWNsYXJhdGlvbnMiLCJzZWxlY3RvciIsInJ1bGVTZXQiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2VucyIsIkRlY2xhcmF0aW9ucyIsInNlbGVjdG9yc05vblRlcm1pbmFsTm9kZSIsInNlbGVjdG9yc05vblRlcm1pbmFsTm9kZUNvbnRlbnQiLCJjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O21FQVJJO3FCQUVDO3lCQUNHO3VCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU1DLGdDQUFnQ0MsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQyxJQUFBLEFBQU1GLHdCQUFELEFBQUw7YUFBTUEsUUFDUEcsU0FBUyxFQUFFQyxZQUFZO2dDQURoQko7UUFFakIsSUFBSSxDQUFDRyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7a0JBSEhKOztZQU1uQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE1BQU07Z0JBQ1YsSUFBSUMsTUFBTUMsdUJBQVk7Z0JBRXRCLElBQU1DLGtCQUFrQixJQUFJLENBQUNQLFlBQVksQ0FBQ0csS0FBSyxDQUFDQztnQkFFaEQsSUFBSUcsb0JBQW9CRCx1QkFBWSxFQUFFO29CQUNuQ0QsTUFBTSxBQUFDLEdBQVcsT0FBVEQsUUFDZEcsT0FEdUIsSUFBSSxDQUFDUixTQUFTLEVBQUMsUUFDcEJLLE9BQWxCRyxpQkFBeUIsT0FBUEgsUUFBTztnQkFHdkI7Z0JBRUEsT0FBT0M7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJDLFFBQVEsRUFBRVQsWUFBWTtnQkFDdkQsSUFBTUQsWUFBWVUsVUFDWkMsVUFBVSxJQS9CQ2QsUUErQldHLFdBQVdDO2dCQUV2QyxPQUFPVTtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1kLFlBQVllLDJCQUEyQkYsTUFBTUMsU0FDN0NiLGVBQWVlLHFCQUFZLENBQUNKLGlCQUFpQixDQUFDQyxNQUFNQyxTQUNwREgsVUFBVSxJQXZDQ2QsUUF1Q1dHLFdBQVdDO2dCQUV2QyxPQUFPVTtZQUNUOzs7V0ExQ21CZDs7QUE2Q3JCLFNBQVNrQiwyQkFBMkJGLElBQUksRUFBRUMsTUFBTTtJQUM5QyxJQUFNRywyQkFBMkJuQiw4QkFBOEJlLE9BQ3pESyxrQ0FBa0NDLElBQUFBLGlDQUF3QixFQUFDRiwwQkFBMEJILFNBQ3JGZCxZQUFZLEFBQUMsR0FBa0MsT0FBaENrQjtJQUVyQixPQUFPbEI7QUFDVCJ9