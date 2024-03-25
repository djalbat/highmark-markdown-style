"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Selectors;
    }
});
var _necessary = require("necessary");
var _selector = /*#__PURE__*/ _interop_require_default(require("./selector"));
var _query = require("./utilities/query");
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
var selectorNonTerminalNodesQuery = (0, _query.nodesQuery)("/selectors/selector");
var first = _necessary.arrayUtilities.first;
var Selectors = /*#__PURE__*/ function() {
    function Selectors(content, whitespace) {
        _class_call_check(this, Selectors);
        this.content = content;
        this.whitespace = whitespace;
    }
    _create_class(Selectors, [
        {
            key: "getContent",
            value: function getContent() {
                return this.content;
            }
        },
        {
            key: "hasWhitespace",
            value: function hasWhitespace() {
                return this.whitespace;
            }
        },
        {
            key: "combine",
            value: function combine(selectors) {
                var outermost = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var outerSelectors = this, innerSelectors = selectors, outerSelectorsContent = outerSelectors.getContent(), innerSelectorsContent = innerSelectors.getContent(), outerSelectorsWhitespace = outerSelectors.hasWhitespace(), innerSelectorsWhitespace = innerSelectors.hasWhitespace();
                selectors = null;
                if (outermost && !innerSelectorsWhitespace) {
                ///
                } else {
                    if (outerSelectorsContent !== null && innerSelectorsContent !== null) {
                        var content = "".concat(outerSelectorsContent).concat(innerSelectorsContent), whitespace = outerSelectorsWhitespace;
                        selectors = Selectors.fromContentAndWhitespace(content, whitespace);
                    }
                }
                return selectors;
            }
        },
        {
            key: "asCSS",
            value: function asCSS() {
                var css = this.content; ///
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var selectorNonTerminalNodes = selectorNonTerminalNodesQuery(node), selectorArray = selectorNonTerminalNodes.map(function(selectorNonTerminalNode) {
                    var _$node = selectorNonTerminalNode, selector = _selector.default.fromNodeAndTokens(_$node, tokens);
                    return selector;
                }), firstSelector = first(selectorArray), selector = firstSelector, content = selectorArray.reduce(function(content, selector) {
                    var selectorContent = selector.getContent(), selectorWhitespace = selector.hasWhitespace();
                    if (content === null) {
                        content = selectorWhitespace ? " ".concat(selectorContent) : "".concat(selectorContent);
                    } else {
                        content = selectorWhitespace ? "".concat(content, " ").concat(selectorContent) : "".concat(content).concat(selectorContent);
                    }
                    return content;
                }, null), whitespace = selector.hasWhitespace(), selectors = new Selectors(content, whitespace);
                return selectors;
            }
        },
        {
            key: "fromSelectorString",
            value: function fromSelectorString(selectorString) {
                var selector = _selector.default.fromSelectorString(selectorString), content = selector.getContent(), whitespace = selector.hasWhitespace(), selectors = new Selectors(content, whitespace);
                return selectors;
            }
        },
        {
            key: "fromContentAndWhitespace",
            value: function fromContentAndWhitespace(content, whitespace) {
                var selectors = new Selectors(content, whitespace);
                return selectors;
            }
        }
    ]);
    return Selectors;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3RvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4vc2VsZWN0b3JcIjtcblxuaW1wb3J0IHsgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc2VsZWN0b3JzL3NlbGVjdG9yXCIpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JzIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgd2hpdGVzcGFjZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy53aGl0ZXNwYWNlID0gd2hpdGVzcGFjZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGhhc1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMud2hpdGVzcGFjZTtcbiAgfVxuXG4gIGNvbWJpbmUoc2VsZWN0b3JzLCBvdXRlcm1vc3QgPSBmYWxzZSkge1xuICAgIGNvbnN0IG91dGVyU2VsZWN0b3JzID0gdGhpcywgIC8vL1xuICAgICAgICAgIGlubmVyU2VsZWN0b3JzID0gc2VsZWN0b3JzLCAvLy9cbiAgICAgICAgICBvdXRlclNlbGVjdG9yc0NvbnRlbnQgPSBvdXRlclNlbGVjdG9ycy5nZXRDb250ZW50KCksXG4gICAgICAgICAgaW5uZXJTZWxlY3RvcnNDb250ZW50ID0gaW5uZXJTZWxlY3RvcnMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG91dGVyU2VsZWN0b3JzV2hpdGVzcGFjZSA9IG91dGVyU2VsZWN0b3JzLmhhc1doaXRlc3BhY2UoKSxcbiAgICAgICAgICBpbm5lclNlbGVjdG9yc1doaXRlc3BhY2UgPSBpbm5lclNlbGVjdG9ycy5oYXNXaGl0ZXNwYWNlKCk7XG5cbiAgICBzZWxlY3RvcnMgPSBudWxsO1xuXG4gICAgaWYgKG91dGVybW9zdCAmJiAhaW5uZXJTZWxlY3RvcnNXaGl0ZXNwYWNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKChvdXRlclNlbGVjdG9yc0NvbnRlbnQgIT09IG51bGwpICYmIChpbm5lclNlbGVjdG9yc0NvbnRlbnQgIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBgJHtvdXRlclNlbGVjdG9yc0NvbnRlbnR9JHtpbm5lclNlbGVjdG9yc0NvbnRlbnR9YCxcbiAgICAgICAgICAgICAgd2hpdGVzcGFjZSA9IG91dGVyU2VsZWN0b3JzV2hpdGVzcGFjZTtcblxuICAgICAgICBzZWxlY3RvcnMgPSBTZWxlY3RvcnMuZnJvbUNvbnRlbnRBbmRXaGl0ZXNwYWNlKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICBhc0NTUygpIHtcbiAgICBjb25zdCBjc3MgPSB0aGlzLmNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgICBzZWxlY3RvckFycmF5ID0gc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzLm1hcCgoc2VsZWN0b3JOb25UZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBTZWxlY3Rvci5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlyc3RTZWxlY3RvciA9IGZpcnN0KHNlbGVjdG9yQXJyYXkpLFxuICAgICAgICAgIHNlbGVjdG9yID0gZmlyc3RTZWxlY3RvciwgLy8vXG4gICAgICAgICAgY29udGVudCA9IHNlbGVjdG9yQXJyYXkucmVkdWNlKChjb250ZW50LCBzZWxlY3RvcikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JDb250ZW50ID0gc2VsZWN0b3IuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0b3JXaGl0ZXNwYWNlID0gc2VsZWN0b3IuaGFzV2hpdGVzcGFjZSgpO1xuXG4gICAgICAgICAgICBpZiAoY29udGVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb250ZW50ID0gc2VsZWN0b3JXaGl0ZXNwYWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBgICR7c2VsZWN0b3JDb250ZW50fWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3NlbGVjdG9yQ29udGVudH1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IHNlbGVjdG9yV2hpdGVzcGFjZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y29udGVudH0gJHtzZWxlY3RvckNvbnRlbnR9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y29udGVudH0ke3NlbGVjdG9yQ29udGVudH1gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICB3aGl0ZXNwYWNlID0gc2VsZWN0b3IuaGFzV2hpdGVzcGFjZSgpLFxuICAgICAgICAgIHNlbGVjdG9ycyA9IG5ldyBTZWxlY3RvcnMoY29udGVudCwgd2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TZWxlY3RvclN0cmluZyhzZWxlY3RvclN0cmluZykge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gU2VsZWN0b3IuZnJvbVNlbGVjdG9yU3RyaW5nKHNlbGVjdG9yU3RyaW5nKSxcbiAgICAgICAgICBjb250ZW50ID0gc2VsZWN0b3IuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHdoaXRlc3BhY2UgPSBzZWxlY3Rvci5oYXNXaGl0ZXNwYWNlKCksXG4gICAgICAgICAgc2VsZWN0b3JzID0gbmV3IFNlbGVjdG9ycyhjb250ZW50LCB3aGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRXaGl0ZXNwYWNlKGNvbnRlbnQsIHdoaXRlc3BhY2UpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBuZXcgU2VsZWN0b3JzKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNlbGVjdG9ycyIsInNlbGVjdG9yTm9uVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJjb250ZW50Iiwid2hpdGVzcGFjZSIsImdldENvbnRlbnQiLCJoYXNXaGl0ZXNwYWNlIiwiY29tYmluZSIsInNlbGVjdG9ycyIsIm91dGVybW9zdCIsIm91dGVyU2VsZWN0b3JzIiwiaW5uZXJTZWxlY3RvcnMiLCJvdXRlclNlbGVjdG9yc0NvbnRlbnQiLCJpbm5lclNlbGVjdG9yc0NvbnRlbnQiLCJvdXRlclNlbGVjdG9yc1doaXRlc3BhY2UiLCJpbm5lclNlbGVjdG9yc1doaXRlc3BhY2UiLCJmcm9tQ29udGVudEFuZFdoaXRlc3BhY2UiLCJhc0NTUyIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsInNlbGVjdG9yTm9uVGVybWluYWxOb2RlcyIsInNlbGVjdG9yQXJyYXkiLCJtYXAiLCJzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSIsInNlbGVjdG9yIiwiU2VsZWN0b3IiLCJmaXJzdFNlbGVjdG9yIiwicmVkdWNlIiwic2VsZWN0b3JDb250ZW50Iiwic2VsZWN0b3JXaGl0ZXNwYWNlIiwiZnJvbVNlbGVjdG9yU3RyaW5nIiwic2VsZWN0b3JTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O3lCQVZVOytEQUVWO3FCQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQU1DLGdDQUFnQ0MsSUFBQUEsaUJBQVUsRUFBQztBQUVqRCxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUgsMEJBQUQsQUFBTDthQUFNQSxVQUNQSyxPQUFPLEVBQUVDLFVBQVU7Z0NBRFpOO1FBRWpCLElBQUksQ0FBQ0ssT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBSEROOztZQU1uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixPQUFPO1lBQ3JCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLFNBQVM7b0JBQUVDLFlBQUFBLGlFQUFZO2dCQUM3QixJQUFNQyxpQkFBaUIsSUFBSSxFQUNyQkMsaUJBQWlCSCxXQUNqQkksd0JBQXdCRixlQUFlTCxVQUFVLElBQ2pEUSx3QkFBd0JGLGVBQWVOLFVBQVUsSUFDakRTLDJCQUEyQkosZUFBZUosYUFBYSxJQUN2RFMsMkJBQTJCSixlQUFlTCxhQUFhO2dCQUU3REUsWUFBWTtnQkFFWixJQUFJQyxhQUFhLENBQUNNLDBCQUEwQjtnQkFDMUMsR0FBRztnQkFDTCxPQUFPO29CQUNMLElBQUksQUFBQ0gsMEJBQTBCLFFBQVVDLDBCQUEwQixNQUFPO3dCQUN4RSxJQUFNVixVQUFVLEFBQUMsR0FBMEJVLE9BQXhCRCx1QkFBOEMsT0FBdEJDLHdCQUNyQ1QsYUFBYVU7d0JBRW5CTixZQUFZVixBQS9CQ0EsVUErQlNrQix3QkFBd0IsQ0FBQ2IsU0FBU0M7b0JBQzFEO2dCQUNGO2dCQUVBLE9BQU9JO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsTUFBTSxJQUFJLENBQUNmLE9BQU8sRUFBRSxHQUFHO2dCQUU3QixPQUFPZTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUNuQyxJQUFNQywyQkFBMkJ2Qiw4QkFBOEJxQixPQUN6REcsZ0JBQWdCRCx5QkFBeUJFLEdBQUcsQ0FBQyxTQUFDQztvQkFDNUMsSUFBTUwsU0FBT0sseUJBQ1BDLFdBQVdDLGlCQUFRLENBQUNSLGlCQUFpQixDQUFDQyxRQUFNQztvQkFFbEQsT0FBT0s7Z0JBQ1QsSUFDQUUsZ0JBQWdCM0IsTUFBTXNCLGdCQUN0QkcsV0FBV0UsZUFDWHpCLFVBQVVvQixjQUFjTSxNQUFNLENBQUMsU0FBQzFCLFNBQVN1QjtvQkFDdkMsSUFBTUksa0JBQWtCSixTQUFTckIsVUFBVSxJQUNyQzBCLHFCQUFxQkwsU0FBU3BCLGFBQWE7b0JBRWpELElBQUlILFlBQVksTUFBTTt3QkFDcEJBLFVBQVU0QixxQkFDQyxBQUFDLElBQW1CLE9BQWhCRCxtQkFDRCxBQUFDLEdBQWtCLE9BQWhCQTtvQkFDbkIsT0FBTzt3QkFDTDNCLFVBQVU0QixxQkFDQyxBQUFDLEdBQWFELE9BQVgzQixTQUFRLEtBQW1CLE9BQWhCMkIsbUJBQ1gsQUFBQyxHQUFZQSxPQUFWM0IsU0FBMEIsT0FBaEIyQjtvQkFDN0I7b0JBRUEsT0FBTzNCO2dCQUNULEdBQUcsT0FDSEMsYUFBYXNCLFNBQVNwQixhQUFhLElBQ25DRSxZQUFZLElBdkVEVixVQXVFZUssU0FBU0M7Z0JBRXpDLE9BQU9JO1lBQ1Q7OztZQUVPd0IsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxjQUFjO2dCQUN0QyxJQUFNUCxXQUFXQyxpQkFBUSxDQUFDSyxrQkFBa0IsQ0FBQ0MsaUJBQ3ZDOUIsVUFBVXVCLFNBQVNyQixVQUFVLElBQzdCRCxhQUFhc0IsU0FBU3BCLGFBQWEsSUFDbkNFLFlBQVksSUFoRkRWLFVBZ0ZlSyxTQUFTQztnQkFFekMsT0FBT0k7WUFDVDs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QmIsT0FBTyxFQUFFQyxVQUFVO2dCQUNqRCxJQUFNSSxZQUFZLElBdEZEVixVQXNGZUssU0FBU0M7Z0JBRXpDLE9BQU9JO1lBQ1Q7OztXQXpGbUJWIn0=