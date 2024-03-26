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
            key: "fromNodeTokensAndDivisionName",
            value: function fromNodeTokensAndDivisionName(node, tokens, divisionName) {
                var selectorNonTerminalNodes = selectorNonTerminalNodesQuery(node), selectorArray = selectorNonTerminalNodes.map(function(selectorNonTerminalNode) {
                    var _$node = selectorNonTerminalNode, selector = _selector.default.fromNodeTokensAndDivisionName(_$node, tokens, divisionName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3RvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4vc2VsZWN0b3JcIjtcblxuaW1wb3J0IHsgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc2VsZWN0b3JzL3NlbGVjdG9yXCIpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JzIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgd2hpdGVzcGFjZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy53aGl0ZXNwYWNlID0gd2hpdGVzcGFjZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGhhc1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMud2hpdGVzcGFjZTtcbiAgfVxuXG4gIGNvbWJpbmUoc2VsZWN0b3JzLCBvdXRlcm1vc3QgPSBmYWxzZSkge1xuICAgIGNvbnN0IG91dGVyU2VsZWN0b3JzID0gdGhpcywgIC8vL1xuICAgICAgICAgIGlubmVyU2VsZWN0b3JzID0gc2VsZWN0b3JzLCAvLy9cbiAgICAgICAgICBvdXRlclNlbGVjdG9yc0NvbnRlbnQgPSBvdXRlclNlbGVjdG9ycy5nZXRDb250ZW50KCksXG4gICAgICAgICAgaW5uZXJTZWxlY3RvcnNDb250ZW50ID0gaW5uZXJTZWxlY3RvcnMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG91dGVyU2VsZWN0b3JzV2hpdGVzcGFjZSA9IG91dGVyU2VsZWN0b3JzLmhhc1doaXRlc3BhY2UoKSxcbiAgICAgICAgICBpbm5lclNlbGVjdG9yc1doaXRlc3BhY2UgPSBpbm5lclNlbGVjdG9ycy5oYXNXaGl0ZXNwYWNlKCk7XG5cbiAgICBzZWxlY3RvcnMgPSBudWxsO1xuXG4gICAgaWYgKG91dGVybW9zdCAmJiAhaW5uZXJTZWxlY3RvcnNXaGl0ZXNwYWNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKChvdXRlclNlbGVjdG9yc0NvbnRlbnQgIT09IG51bGwpICYmIChpbm5lclNlbGVjdG9yc0NvbnRlbnQgIT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBgJHtvdXRlclNlbGVjdG9yc0NvbnRlbnR9JHtpbm5lclNlbGVjdG9yc0NvbnRlbnR9YCxcbiAgICAgICAgICAgICAgd2hpdGVzcGFjZSA9IG91dGVyU2VsZWN0b3JzV2hpdGVzcGFjZTtcblxuICAgICAgICBzZWxlY3RvcnMgPSBTZWxlY3RvcnMuZnJvbUNvbnRlbnRBbmRXaGl0ZXNwYWNlKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICBhc0NTUygpIHtcbiAgICBjb25zdCBjc3MgPSB0aGlzLmNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgICBzZWxlY3RvckFycmF5ID0gc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzLm1hcCgoc2VsZWN0b3JOb25UZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBTZWxlY3Rvci5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlyc3RTZWxlY3RvciA9IGZpcnN0KHNlbGVjdG9yQXJyYXkpLFxuICAgICAgICAgIHNlbGVjdG9yID0gZmlyc3RTZWxlY3RvciwgLy8vXG4gICAgICAgICAgY29udGVudCA9IHNlbGVjdG9yQXJyYXkucmVkdWNlKChjb250ZW50LCBzZWxlY3RvcikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JDb250ZW50ID0gc2VsZWN0b3IuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0b3JXaGl0ZXNwYWNlID0gc2VsZWN0b3IuaGFzV2hpdGVzcGFjZSgpO1xuXG4gICAgICAgICAgICBpZiAoY29udGVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb250ZW50ID0gc2VsZWN0b3JXaGl0ZXNwYWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBgICR7c2VsZWN0b3JDb250ZW50fWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7c2VsZWN0b3JDb250ZW50fWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250ZW50ID0gc2VsZWN0b3JXaGl0ZXNwYWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBgJHtjb250ZW50fSAke3NlbGVjdG9yQ29udGVudH1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2NvbnRlbnR9JHtzZWxlY3RvckNvbnRlbnR9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgd2hpdGVzcGFjZSA9IHNlbGVjdG9yLmhhc1doaXRlc3BhY2UoKSxcbiAgICAgICAgICBzZWxlY3RvcnMgPSBuZXcgU2VsZWN0b3JzKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZVRva2Vuc0FuZERpdmlzaW9uTmFtZShub2RlLCB0b2tlbnMsIGRpdmlzaW9uTmFtZSkge1xuICAgIGNvbnN0IHNlbGVjdG9yTm9uVGVybWluYWxOb2RlcyA9IHNlbGVjdG9yTm9uVGVybWluYWxOb2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIHNlbGVjdG9yQXJyYXkgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMubWFwKChzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHNlbGVjdG9yTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvciA9IFNlbGVjdG9yLmZyb21Ob2RlVG9rZW5zQW5kRGl2aXNpb25OYW1lKG5vZGUsIHRva2VucywgZGl2aXNpb25OYW1lKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpcnN0U2VsZWN0b3IgPSBmaXJzdChzZWxlY3RvckFycmF5KSxcbiAgICAgICAgICBzZWxlY3RvciA9IGZpcnN0U2VsZWN0b3IsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBzZWxlY3RvckFycmF5LnJlZHVjZSgoY29udGVudCwgc2VsZWN0b3IpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yQ29udGVudCA9IHNlbGVjdG9yLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yV2hpdGVzcGFjZSA9IHNlbGVjdG9yLmhhc1doaXRlc3BhY2UoKTtcblxuICAgICAgICAgICAgaWYgKGNvbnRlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IHNlbGVjdG9yV2hpdGVzcGFjZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgYCAke3NlbGVjdG9yQ29udGVudH1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtzZWxlY3RvckNvbnRlbnR9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBzZWxlY3RvcldoaXRlc3BhY2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGAke2NvbnRlbnR9ICR7c2VsZWN0b3JDb250ZW50fWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2NvbnRlbnR9JHtzZWxlY3RvckNvbnRlbnR9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgd2hpdGVzcGFjZSA9IHNlbGVjdG9yLmhhc1doaXRlc3BhY2UoKSxcbiAgICAgICAgICBzZWxlY3RvcnMgPSBuZXcgU2VsZWN0b3JzKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VsZWN0b3JTdHJpbmcoc2VsZWN0b3JTdHJpbmcpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IFNlbGVjdG9yLmZyb21TZWxlY3RvclN0cmluZyhzZWxlY3RvclN0cmluZyksXG4gICAgICAgICAgY29udGVudCA9IHNlbGVjdG9yLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB3aGl0ZXNwYWNlID0gc2VsZWN0b3IuaGFzV2hpdGVzcGFjZSgpLFxuICAgICAgICAgIHNlbGVjdG9ycyA9IG5ldyBTZWxlY3RvcnMoY29udGVudCwgd2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kV2hpdGVzcGFjZShjb250ZW50LCB3aGl0ZXNwYWNlKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gbmV3IFNlbGVjdG9ycyhjb250ZW50LCB3aGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTZWxlY3RvcnMiLCJzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiY29udGVudCIsIndoaXRlc3BhY2UiLCJnZXRDb250ZW50IiwiaGFzV2hpdGVzcGFjZSIsImNvbWJpbmUiLCJzZWxlY3RvcnMiLCJvdXRlcm1vc3QiLCJvdXRlclNlbGVjdG9ycyIsImlubmVyU2VsZWN0b3JzIiwib3V0ZXJTZWxlY3RvcnNDb250ZW50IiwiaW5uZXJTZWxlY3RvcnNDb250ZW50Iiwib3V0ZXJTZWxlY3RvcnNXaGl0ZXNwYWNlIiwiaW5uZXJTZWxlY3RvcnNXaGl0ZXNwYWNlIiwiZnJvbUNvbnRlbnRBbmRXaGl0ZXNwYWNlIiwiYXNDU1MiLCJjc3MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMiLCJzZWxlY3RvckFycmF5IiwibWFwIiwic2VsZWN0b3JOb25UZXJtaW5hbE5vZGUiLCJzZWxlY3RvciIsIlNlbGVjdG9yIiwiZmlyc3RTZWxlY3RvciIsInJlZHVjZSIsInNlbGVjdG9yQ29udGVudCIsInNlbGVjdG9yV2hpdGVzcGFjZSIsImZyb21Ob2RlVG9rZW5zQW5kRGl2aXNpb25OYW1lIiwiZGl2aXNpb25OYW1lIiwiZnJvbVNlbGVjdG9yU3RyaW5nIiwic2VsZWN0b3JTdHJpbmciXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O3lCQVZVOytEQUVWO3FCQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQU1DLGdDQUFnQ0MsSUFBQUEsaUJBQVUsRUFBQztBQUVqRCxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUgsMEJBQUQsQUFBTDthQUFNQSxVQUNQSyxPQUFPLEVBQUVDLFVBQVU7Z0NBRFpOO1FBRWpCLElBQUksQ0FBQ0ssT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBSEROOztZQU1uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixPQUFPO1lBQ3JCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLFNBQVM7b0JBQUVDLFlBQUFBLGlFQUFZO2dCQUM3QixJQUFNQyxpQkFBaUIsSUFBSSxFQUNyQkMsaUJBQWlCSCxXQUNqQkksd0JBQXdCRixlQUFlTCxVQUFVLElBQ2pEUSx3QkFBd0JGLGVBQWVOLFVBQVUsSUFDakRTLDJCQUEyQkosZUFBZUosYUFBYSxJQUN2RFMsMkJBQTJCSixlQUFlTCxhQUFhO2dCQUU3REUsWUFBWTtnQkFFWixJQUFJQyxhQUFhLENBQUNNLDBCQUEwQjtnQkFDMUMsR0FBRztnQkFDTCxPQUFPO29CQUNMLElBQUksQUFBQ0gsMEJBQTBCLFFBQVVDLDBCQUEwQixNQUFPO3dCQUN4RSxJQUFNVixVQUFVLEFBQUMsR0FBMEJVLE9BQXhCRCx1QkFBOEMsT0FBdEJDLHdCQUNyQ1QsYUFBYVU7d0JBRW5CTixZQUFZVixBQS9CQ0EsVUErQlNrQix3QkFBd0IsQ0FBQ2IsU0FBU0M7b0JBQzFEO2dCQUNGO2dCQUVBLE9BQU9JO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsTUFBTSxJQUFJLENBQUNmLE9BQU8sRUFBRSxHQUFHO2dCQUU3QixPQUFPZTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUNuQyxJQUFNQywyQkFBMkJ2Qiw4QkFBOEJxQixPQUN6REcsZ0JBQWdCRCx5QkFBeUJFLEdBQUcsQ0FBQyxTQUFDQztvQkFDNUMsSUFBTUwsU0FBT0sseUJBQ1BDLFdBQVdDLGlCQUFRLENBQUNSLGlCQUFpQixDQUFDQyxRQUFNQztvQkFFbEQsT0FBT0s7Z0JBQ1QsSUFDQUUsZ0JBQWdCM0IsTUFBTXNCLGdCQUN0QkcsV0FBV0UsZUFDWHpCLFVBQVVvQixjQUFjTSxNQUFNLENBQUMsU0FBQzFCLFNBQVN1QjtvQkFDdkMsSUFBTUksa0JBQWtCSixTQUFTckIsVUFBVSxJQUNyQzBCLHFCQUFxQkwsU0FBU3BCLGFBQWE7b0JBRWpELElBQUlILFlBQVksTUFBTTt3QkFDcEJBLFVBQVU0QixxQkFDQyxBQUFDLElBQW1CLE9BQWhCRCxtQkFDRixBQUFDLEdBQWtCLE9BQWhCQTtvQkFDbEIsT0FBTzt3QkFDTDNCLFVBQVU0QixxQkFDQyxBQUFDLEdBQWFELE9BQVgzQixTQUFRLEtBQW1CLE9BQWhCMkIsbUJBQ1osQUFBQyxHQUFZQSxPQUFWM0IsU0FBMEIsT0FBaEIyQjtvQkFDNUI7b0JBRUEsT0FBTzNCO2dCQUNULEdBQUcsT0FDSEMsYUFBYXNCLFNBQVNwQixhQUFhLElBQ25DRSxZQUFZLElBdkVEVixVQXVFZUssU0FBU0M7Z0JBRXpDLE9BQU9JO1lBQ1Q7OztZQUVPd0IsS0FBQUE7bUJBQVAsU0FBT0EsOEJBQThCWixJQUFJLEVBQUVDLE1BQU0sRUFBRVksWUFBWTtnQkFDN0QsSUFBTVgsMkJBQTJCdkIsOEJBQThCcUIsT0FDekRHLGdCQUFnQkQseUJBQXlCRSxHQUFHLENBQUMsU0FBQ0M7b0JBQzVDLElBQU1MLFNBQU9LLHlCQUNQQyxXQUFXQyxpQkFBUSxDQUFDSyw2QkFBNkIsQ0FBQ1osUUFBTUMsUUFBUVk7b0JBRXRFLE9BQU9QO2dCQUNULElBQ0FFLGdCQUFnQjNCLE1BQU1zQixnQkFDdEJHLFdBQVdFLGVBQ1h6QixVQUFVb0IsY0FBY00sTUFBTSxDQUFDLFNBQUMxQixTQUFTdUI7b0JBQ3ZDLElBQU1JLGtCQUFrQkosU0FBU3JCLFVBQVUsSUFDckMwQixxQkFBcUJMLFNBQVNwQixhQUFhO29CQUVqRCxJQUFJSCxZQUFZLE1BQU07d0JBQ3BCQSxVQUFVNEIscUJBQ0MsQUFBQyxJQUFtQixPQUFoQkQsbUJBQ0QsQUFBQyxHQUFrQixPQUFoQkE7b0JBQ25CLE9BQU87d0JBQ0wzQixVQUFVNEIscUJBQ0MsQUFBQyxHQUFhRCxPQUFYM0IsU0FBUSxLQUFtQixPQUFoQjJCLG1CQUNYLEFBQUMsR0FBWUEsT0FBVjNCLFNBQTBCLE9BQWhCMkI7b0JBQzdCO29CQUVBLE9BQU8zQjtnQkFDVCxHQUFHLE9BQ0hDLGFBQWFzQixTQUFTcEIsYUFBYSxJQUNuQ0UsWUFBWSxJQXZHRFYsVUF1R2VLLFNBQVNDO2dCQUV6QyxPQUFPSTtZQUNUOzs7WUFFTzBCLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsY0FBYztnQkFDdEMsSUFBTVQsV0FBV0MsaUJBQVEsQ0FBQ08sa0JBQWtCLENBQUNDLGlCQUN2Q2hDLFVBQVV1QixTQUFTckIsVUFBVSxJQUM3QkQsYUFBYXNCLFNBQVNwQixhQUFhLElBQ25DRSxZQUFZLElBaEhEVixVQWdIZUssU0FBU0M7Z0JBRXpDLE9BQU9JO1lBQ1Q7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJiLE9BQU8sRUFBRUMsVUFBVTtnQkFDakQsSUFBTUksWUFBWSxJQXRIRFYsVUFzSGVLLFNBQVNDO2dCQUV6QyxPQUFPSTtZQUNUOzs7V0F6SG1CViJ9