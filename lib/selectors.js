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
                if (selectors !== null) {
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
                var divisionName = null, selectors = selectorsFromNodeTokensAndDivisionName(node, tokens, divisionName);
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
        },
        {
            key: "fromNodeTokensAndDivisionName",
            value: function fromNodeTokensAndDivisionName(node, tokens, divisionName) {
                var selectors = selectorsFromNodeTokensAndDivisionName(node, tokens, divisionName);
                return selectors;
            }
        }
    ]);
    return Selectors;
}();
function selectorsFromNodeTokensAndDivisionName(node, tokens, divisionName) {
    var selectors = null;
    var selectorNonTerminalNodes = selectorNonTerminalNodesQuery(node), selectorArray = selectorNonTerminalNodes.reduce(function(selectorArray, selectorNonTerminalNode) {
        var _$node = selectorNonTerminalNode, selector = _selector.default.fromNodeTokensAndDivisionName(_$node, tokens, divisionName);
        if (selector !== null) {
            selectorArray.push(selector);
        }
        return selectorArray;
    }, []), selectorsArrayLength = selectorArray.length;
    if (selectorsArrayLength > 0) {
        var firstSelector = first(selectorArray), selector = firstSelector, content = selectorArray.reduce(function(content, selector) {
            var selectorContent = selector.getContent(), selectorWhitespace = selector.hasWhitespace();
            if (content === null) {
                content = selectorWhitespace ? " ".concat(selectorContent) : "".concat(selectorContent);
            } else {
                content = selectorWhitespace ? "".concat(content, " ").concat(selectorContent) : "".concat(content).concat(selectorContent);
            }
            return content;
        }, null), whitespace = selector.hasWhitespace();
        selectors = new Selectors(content, whitespace);
    }
    return selectors;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3RvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4vc2VsZWN0b3JcIjtcblxuaW1wb3J0IHsgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc2VsZWN0b3JzL3NlbGVjdG9yXCIpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JzIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgd2hpdGVzcGFjZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy53aGl0ZXNwYWNlID0gd2hpdGVzcGFjZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGhhc1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMud2hpdGVzcGFjZTtcbiAgfVxuXG4gIGNvbWJpbmUoc2VsZWN0b3JzLCBvdXRlcm1vc3QgPSBmYWxzZSkge1xuICAgIGlmIChzZWxlY3RvcnMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG91dGVyU2VsZWN0b3JzID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgaW5uZXJTZWxlY3RvcnMgPSBzZWxlY3RvcnMsIC8vL1xuICAgICAgICAgICAgb3V0ZXJTZWxlY3RvcnNDb250ZW50ID0gb3V0ZXJTZWxlY3RvcnMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgaW5uZXJTZWxlY3RvcnNDb250ZW50ID0gaW5uZXJTZWxlY3RvcnMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgb3V0ZXJTZWxlY3RvcnNXaGl0ZXNwYWNlID0gb3V0ZXJTZWxlY3RvcnMuaGFzV2hpdGVzcGFjZSgpLFxuICAgICAgICAgICAgaW5uZXJTZWxlY3RvcnNXaGl0ZXNwYWNlID0gaW5uZXJTZWxlY3RvcnMuaGFzV2hpdGVzcGFjZSgpO1xuXG4gICAgICBzZWxlY3RvcnMgPSBudWxsO1xuXG4gICAgICBpZiAob3V0ZXJtb3N0ICYmICFpbm5lclNlbGVjdG9yc1doaXRlc3BhY2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoKG91dGVyU2VsZWN0b3JzQ29udGVudCAhPT0gbnVsbCkgJiYgKGlubmVyU2VsZWN0b3JzQ29udGVudCAhPT0gbnVsbCkpIHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gYCR7b3V0ZXJTZWxlY3RvcnNDb250ZW50fSR7aW5uZXJTZWxlY3RvcnNDb250ZW50fWAsXG4gICAgICAgICAgICAgICAgd2hpdGVzcGFjZSA9IG91dGVyU2VsZWN0b3JzV2hpdGVzcGFjZTtcblxuICAgICAgICAgIHNlbGVjdG9ycyA9IFNlbGVjdG9ycy5mcm9tQ29udGVudEFuZFdoaXRlc3BhY2UoY29udGVudCwgd2hpdGVzcGFjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzO1xuICB9XG5cbiAgYXNDU1MoKSB7XG4gICAgY29uc3QgY3NzID0gdGhpcy5jb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgZGl2aXNpb25OYW1lID0gbnVsbCxcbiAgICAgICAgICBzZWxlY3RvcnMgPSBzZWxlY3RvcnNGcm9tTm9kZVRva2Vuc0FuZERpdmlzaW9uTmFtZShub2RlLCB0b2tlbnMsIGRpdmlzaW9uTmFtZSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TZWxlY3RvclN0cmluZyhzZWxlY3RvclN0cmluZykge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gU2VsZWN0b3IuZnJvbVNlbGVjdG9yU3RyaW5nKHNlbGVjdG9yU3RyaW5nKSxcbiAgICAgICAgICBjb250ZW50ID0gc2VsZWN0b3IuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHdoaXRlc3BhY2UgPSBzZWxlY3Rvci5oYXNXaGl0ZXNwYWNlKCksXG4gICAgICAgICAgc2VsZWN0b3JzID0gbmV3IFNlbGVjdG9ycyhjb250ZW50LCB3aGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRXaGl0ZXNwYWNlKGNvbnRlbnQsIHdoaXRlc3BhY2UpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBuZXcgU2VsZWN0b3JzKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZVRva2Vuc0FuZERpdmlzaW9uTmFtZShub2RlLCB0b2tlbnMsIGRpdmlzaW9uTmFtZSkge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IHNlbGVjdG9yc0Zyb21Ob2RlVG9rZW5zQW5kRGl2aXNpb25OYW1lKG5vZGUsIHRva2VucywgZGl2aXNpb25OYW1lKTtcblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0b3JzRnJvbU5vZGVUb2tlbnNBbmREaXZpc2lvbk5hbWUobm9kZSwgdG9rZW5zLCBkaXZpc2lvbk5hbWUpIHtcbiAgbGV0IHNlbGVjdG9ycyA9IG51bGw7XG5cbiAgY29uc3Qgc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzID0gc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgIHNlbGVjdG9yQXJyYXkgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMucmVkdWNlKChzZWxlY3RvckFycmF5LCBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gU2VsZWN0b3IuZnJvbU5vZGVUb2tlbnNBbmREaXZpc2lvbk5hbWUobm9kZSwgdG9rZW5zLCBkaXZpc2lvbk5hbWUpO1xuXG4gICAgICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzZWxlY3RvckFycmF5LnB1c2goc2VsZWN0b3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzZWxlY3RvckFycmF5O1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIHNlbGVjdG9yc0FycmF5TGVuZ3RoID0gc2VsZWN0b3JBcnJheS5sZW5ndGg7XG5cbiAgaWYgKHNlbGVjdG9yc0FycmF5TGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGZpcnN0U2VsZWN0b3IgPSBmaXJzdChzZWxlY3RvckFycmF5KSxcbiAgICAgICAgICBzZWxlY3RvciA9IGZpcnN0U2VsZWN0b3IsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBzZWxlY3RvckFycmF5LnJlZHVjZSgoY29udGVudCwgc2VsZWN0b3IpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yQ29udGVudCA9IHNlbGVjdG9yLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yV2hpdGVzcGFjZSA9IHNlbGVjdG9yLmhhc1doaXRlc3BhY2UoKTtcblxuICAgICAgICAgICAgaWYgKGNvbnRlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IHNlbGVjdG9yV2hpdGVzcGFjZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgYCAke3NlbGVjdG9yQ29udGVudH1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3NlbGVjdG9yQ29udGVudH1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IHNlbGVjdG9yV2hpdGVzcGFjZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y29udGVudH0gJHtzZWxlY3RvckNvbnRlbnR9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtjb250ZW50fSR7c2VsZWN0b3JDb250ZW50fWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHdoaXRlc3BhY2UgPSBzZWxlY3Rvci5oYXNXaGl0ZXNwYWNlKCk7XG5cbiAgICBzZWxlY3RvcnMgPSBuZXcgU2VsZWN0b3JzKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGVjdG9ycztcbn1cbiJdLCJuYW1lcyI6WyJTZWxlY3RvcnMiLCJzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiY29udGVudCIsIndoaXRlc3BhY2UiLCJnZXRDb250ZW50IiwiaGFzV2hpdGVzcGFjZSIsImNvbWJpbmUiLCJzZWxlY3RvcnMiLCJvdXRlcm1vc3QiLCJvdXRlclNlbGVjdG9ycyIsImlubmVyU2VsZWN0b3JzIiwib3V0ZXJTZWxlY3RvcnNDb250ZW50IiwiaW5uZXJTZWxlY3RvcnNDb250ZW50Iiwib3V0ZXJTZWxlY3RvcnNXaGl0ZXNwYWNlIiwiaW5uZXJTZWxlY3RvcnNXaGl0ZXNwYWNlIiwiZnJvbUNvbnRlbnRBbmRXaGl0ZXNwYWNlIiwiYXNDU1MiLCJjc3MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJkaXZpc2lvbk5hbWUiLCJzZWxlY3RvcnNGcm9tTm9kZVRva2Vuc0FuZERpdmlzaW9uTmFtZSIsImZyb21TZWxlY3RvclN0cmluZyIsInNlbGVjdG9yU3RyaW5nIiwic2VsZWN0b3IiLCJTZWxlY3RvciIsImZyb21Ob2RlVG9rZW5zQW5kRGl2aXNpb25OYW1lIiwic2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzIiwic2VsZWN0b3JBcnJheSIsInJlZHVjZSIsInNlbGVjdG9yTm9uVGVybWluYWxOb2RlIiwicHVzaCIsInNlbGVjdG9yc0FycmF5TGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RTZWxlY3RvciIsInNlbGVjdG9yQ29udGVudCIsInNlbGVjdG9yV2hpdGVzcGFjZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O3lCQVZVOytEQUVWO3FCQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQU1DLGdDQUFnQ0MsSUFBQUEsaUJBQVUsRUFBQztBQUVqRCxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUgsMEJBQUQsQUFBTDthQUFNQSxVQUNQSyxPQUFPLEVBQUVDLFVBQVU7Z0NBRFpOO1FBRWpCLElBQUksQ0FBQ0ssT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBSEROOztZQU1uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixPQUFPO1lBQ3JCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLFNBQVM7b0JBQUVDLFlBQUFBLGlFQUFZO2dCQUM3QixJQUFJRCxjQUFjLE1BQU07b0JBQ3RCLElBQU1FLGlCQUFpQixJQUFJLEVBQ3JCQyxpQkFBaUJILFdBQ2pCSSx3QkFBd0JGLGVBQWVMLFVBQVUsSUFDakRRLHdCQUF3QkYsZUFBZU4sVUFBVSxJQUNqRFMsMkJBQTJCSixlQUFl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