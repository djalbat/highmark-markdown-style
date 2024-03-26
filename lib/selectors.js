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
                var divisionNames = null, selectors = selectorsFromNodeTokensAndDivisionNames(node, tokens, divisionNames);
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
            key: "fromNodeTokensAndDivisionNames",
            value: function fromNodeTokensAndDivisionNames(node, tokens, divisionNames) {
                var selectors = selectorsFromNodeTokensAndDivisionNames(node, tokens, divisionNames);
                return selectors;
            }
        }
    ]);
    return Selectors;
}();
function selectorsFromNodeTokensAndDivisionNames(node, tokens, divisionNames) {
    var selectors = null;
    var selectorNonTerminalNodes = selectorNonTerminalNodesQuery(node), selectorArray = selectorNonTerminalNodes.reduce(function(selectorArray, selectorNonTerminalNode) {
        var _$node = selectorNonTerminalNode, selector = _selector.default.fromNodeTokensAndDivisionNames(_$node, tokens, divisionNames);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3RvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4vc2VsZWN0b3JcIjtcblxuaW1wb3J0IHsgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc2VsZWN0b3JzL3NlbGVjdG9yXCIpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JzIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgd2hpdGVzcGFjZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy53aGl0ZXNwYWNlID0gd2hpdGVzcGFjZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGhhc1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMud2hpdGVzcGFjZTtcbiAgfVxuXG4gIGNvbWJpbmUoc2VsZWN0b3JzLCBvdXRlcm1vc3QgPSBmYWxzZSkge1xuICAgIGlmIChzZWxlY3RvcnMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG91dGVyU2VsZWN0b3JzID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgaW5uZXJTZWxlY3RvcnMgPSBzZWxlY3RvcnMsIC8vL1xuICAgICAgICAgICAgb3V0ZXJTZWxlY3RvcnNDb250ZW50ID0gb3V0ZXJTZWxlY3RvcnMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgaW5uZXJTZWxlY3RvcnNDb250ZW50ID0gaW5uZXJTZWxlY3RvcnMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgb3V0ZXJTZWxlY3RvcnNXaGl0ZXNwYWNlID0gb3V0ZXJTZWxlY3RvcnMuaGFzV2hpdGVzcGFjZSgpLFxuICAgICAgICAgICAgaW5uZXJTZWxlY3RvcnNXaGl0ZXNwYWNlID0gaW5uZXJTZWxlY3RvcnMuaGFzV2hpdGVzcGFjZSgpO1xuXG4gICAgICBzZWxlY3RvcnMgPSBudWxsO1xuXG4gICAgICBpZiAob3V0ZXJtb3N0ICYmICFpbm5lclNlbGVjdG9yc1doaXRlc3BhY2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoKG91dGVyU2VsZWN0b3JzQ29udGVudCAhPT0gbnVsbCkgJiYgKGlubmVyU2VsZWN0b3JzQ29udGVudCAhPT0gbnVsbCkpIHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gYCR7b3V0ZXJTZWxlY3RvcnNDb250ZW50fSR7aW5uZXJTZWxlY3RvcnNDb250ZW50fWAsXG4gICAgICAgICAgICAgICAgd2hpdGVzcGFjZSA9IG91dGVyU2VsZWN0b3JzV2hpdGVzcGFjZTtcblxuICAgICAgICAgIHNlbGVjdG9ycyA9IFNlbGVjdG9ycy5mcm9tQ29udGVudEFuZFdoaXRlc3BhY2UoY29udGVudCwgd2hpdGVzcGFjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzO1xuICB9XG5cbiAgYXNDU1MoKSB7XG4gICAgY29uc3QgY3NzID0gdGhpcy5jb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgZGl2aXNpb25OYW1lcyA9IG51bGwsXG4gICAgICAgICAgc2VsZWN0b3JzID0gc2VsZWN0b3JzRnJvbU5vZGVUb2tlbnNBbmREaXZpc2lvbk5hbWVzKG5vZGUsIHRva2VucywgZGl2aXNpb25OYW1lcyk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TZWxlY3RvclN0cmluZyhzZWxlY3RvclN0cmluZykge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gU2VsZWN0b3IuZnJvbVNlbGVjdG9yU3RyaW5nKHNlbGVjdG9yU3RyaW5nKSxcbiAgICAgICAgICBjb250ZW50ID0gc2VsZWN0b3IuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHdoaXRlc3BhY2UgPSBzZWxlY3Rvci5oYXNXaGl0ZXNwYWNlKCksXG4gICAgICAgICAgc2VsZWN0b3JzID0gbmV3IFNlbGVjdG9ycyhjb250ZW50LCB3aGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRXaGl0ZXNwYWNlKGNvbnRlbnQsIHdoaXRlc3BhY2UpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBuZXcgU2VsZWN0b3JzKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZVRva2Vuc0FuZERpdmlzaW9uTmFtZXMobm9kZSwgdG9rZW5zLCBkaXZpc2lvbk5hbWVzKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gc2VsZWN0b3JzRnJvbU5vZGVUb2tlbnNBbmREaXZpc2lvbk5hbWVzKG5vZGUsIHRva2VucywgZGl2aXNpb25OYW1lcyk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdG9yc0Zyb21Ob2RlVG9rZW5zQW5kRGl2aXNpb25OYW1lcyhub2RlLCB0b2tlbnMsIGRpdmlzaW9uTmFtZXMpIHtcbiAgbGV0IHNlbGVjdG9ycyA9IG51bGw7XG5cbiAgY29uc3Qgc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzID0gc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgIHNlbGVjdG9yQXJyYXkgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMucmVkdWNlKChzZWxlY3RvckFycmF5LCBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gU2VsZWN0b3IuZnJvbU5vZGVUb2tlbnNBbmREaXZpc2lvbk5hbWVzKG5vZGUsIHRva2VucywgZGl2aXNpb25OYW1lcyk7XG5cbiAgICAgICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yQXJyYXkucHVzaChzZWxlY3Rvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHNlbGVjdG9yQXJyYXk7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgc2VsZWN0b3JzQXJyYXlMZW5ndGggPSBzZWxlY3RvckFycmF5Lmxlbmd0aDtcblxuICBpZiAoc2VsZWN0b3JzQXJyYXlMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgZmlyc3RTZWxlY3RvciA9IGZpcnN0KHNlbGVjdG9yQXJyYXkpLFxuICAgICAgICAgIHNlbGVjdG9yID0gZmlyc3RTZWxlY3RvciwgLy8vXG4gICAgICAgICAgY29udGVudCA9IHNlbGVjdG9yQXJyYXkucmVkdWNlKChjb250ZW50LCBzZWxlY3RvcikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JDb250ZW50ID0gc2VsZWN0b3IuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0b3JXaGl0ZXNwYWNlID0gc2VsZWN0b3IuaGFzV2hpdGVzcGFjZSgpO1xuXG4gICAgICAgICAgICBpZiAoY29udGVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb250ZW50ID0gc2VsZWN0b3JXaGl0ZXNwYWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBgICR7c2VsZWN0b3JDb250ZW50fWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7c2VsZWN0b3JDb250ZW50fWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250ZW50ID0gc2VsZWN0b3JXaGl0ZXNwYWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBgJHtjb250ZW50fSAke3NlbGVjdG9yQ29udGVudH1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2NvbnRlbnR9JHtzZWxlY3RvckNvbnRlbnR9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgd2hpdGVzcGFjZSA9IHNlbGVjdG9yLmhhc1doaXRlc3BhY2UoKTtcblxuICAgIHNlbGVjdG9ycyA9IG5ldyBTZWxlY3RvcnMoY29udGVudCwgd2hpdGVzcGFjZSk7XG4gIH1cblxuICByZXR1cm4gc2VsZWN0b3JzO1xufVxuIl0sIm5hbWVzIjpbIlNlbGVjdG9ycyIsInNlbGVjdG9yTm9uVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJjb250ZW50Iiwid2hpdGVzcGFjZSIsImdldENvbnRlbnQiLCJoYXNXaGl0ZXNwYWNlIiwiY29tYmluZSIsInNlbGVjdG9ycyIsIm91dGVybW9zdCIsIm91dGVyU2VsZWN0b3JzIiwiaW5uZXJTZWxlY3RvcnMiLCJvdXRlclNlbGVjdG9yc0NvbnRlbnQiLCJpbm5lclNlbGVjdG9yc0NvbnRlbnQiLCJvdXRlclNlbGVjdG9yc1doaXRlc3BhY2UiLCJpbm5lclNlbGVjdG9yc1doaXRlc3BhY2UiLCJmcm9tQ29udGVudEFuZFdoaXRlc3BhY2UiLCJhc0NTUyIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsImRpdmlzaW9uTmFtZXMiLCJzZWxlY3RvcnNGcm9tTm9kZVRva2Vuc0FuZERpdmlzaW9uTmFtZXMiLCJmcm9tU2VsZWN0b3JTdHJpbmciLCJzZWxlY3RvclN0cmluZyIsInNlbGVjdG9yIiwiU2VsZWN0b3IiLCJmcm9tTm9kZVRva2Vuc0FuZERpdmlzaW9uTmFtZXMiLCJzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMiLCJzZWxlY3RvckFycmF5IiwicmVkdWNlIiwic2VsZWN0b3JOb25UZXJtaW5hbE5vZGUiLCJwdXNoIiwic2VsZWN0b3JzQXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFNlbGVjdG9yIiwic2VsZWN0b3JDb250ZW50Iiwic2VsZWN0b3JXaGl0ZXNwYWNlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7eUJBVlU7K0RBRVY7cUJBRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBTUMsZ0NBQWdDQyxJQUFBQSxpQkFBVSxFQUFDO0FBRWpELElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNSCwwQkFBRCxBQUFMO2FBQU1BLFVBQ1BLLE9BQU8sRUFBRUMsVUFBVTtnQ0FEWk47UUFFakIsSUFBSSxDQUFDSyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFIRE47O1lBTW5CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE9BQU87WUFDckI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsU0FBUztvQkFBRUMsWUFBQUEsaUVBQVk7Z0JBQzdCLElBQUlELGNBQWMsTUFBTTtvQkFDdEIsSUFBTUUsaUJBQWlCLElBQUksRUFDckJDLGlCQUFpQkgsV0FDakJJLHdCQUF3QkYsZUFBZUwsVUFBVSxJQUNqRFEsd0JBQXdCRixlQUFlTixVQUFVLElBQ2pE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