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
                var selectors = selectorsFromNodeAndTokens(node, tokens);
                return selectors;
            }
        },
        {
            key: "fromSelectorsString",
            value: function fromSelectorsString(selectorsString) {
                var content = selectorsString, whitespace = false, selectors = new Selectors(content, whitespace);
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
function selectorsFromNodeAndTokens(node, tokens) {
    var selectors = null;
    var selectorNonTerminalNodes = selectorNonTerminalNodesQuery(node), selectorArray = selectorNonTerminalNodes.reduce(function(selectorArray, selectorNonTerminalNode) {
        var _$node = selectorNonTerminalNode, selector = _selector.default.fromNodeAndTokens(_$node, tokens);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3RvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4vc2VsZWN0b3JcIjtcblxuaW1wb3J0IHsgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc2VsZWN0b3JzL3NlbGVjdG9yXCIpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JzIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgd2hpdGVzcGFjZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy53aGl0ZXNwYWNlID0gd2hpdGVzcGFjZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGhhc1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMud2hpdGVzcGFjZTtcbiAgfVxuXG4gIGNvbWJpbmUoc2VsZWN0b3JzLCBvdXRlcm1vc3QgPSBmYWxzZSkge1xuICAgIGlmIChzZWxlY3RvcnMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG91dGVyU2VsZWN0b3JzID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgaW5uZXJTZWxlY3RvcnMgPSBzZWxlY3RvcnMsIC8vL1xuICAgICAgICAgICAgb3V0ZXJTZWxlY3RvcnNDb250ZW50ID0gb3V0ZXJTZWxlY3RvcnMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgaW5uZXJTZWxlY3RvcnNDb250ZW50ID0gaW5uZXJTZWxlY3RvcnMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgb3V0ZXJTZWxlY3RvcnNXaGl0ZXNwYWNlID0gb3V0ZXJTZWxlY3RvcnMuaGFzV2hpdGVzcGFjZSgpLFxuICAgICAgICAgICAgaW5uZXJTZWxlY3RvcnNXaGl0ZXNwYWNlID0gaW5uZXJTZWxlY3RvcnMuaGFzV2hpdGVzcGFjZSgpO1xuXG4gICAgICBzZWxlY3RvcnMgPSBudWxsO1xuXG4gICAgICBpZiAob3V0ZXJtb3N0ICYmICFpbm5lclNlbGVjdG9yc1doaXRlc3BhY2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoKG91dGVyU2VsZWN0b3JzQ29udGVudCAhPT0gbnVsbCkgJiYgKGlubmVyU2VsZWN0b3JzQ29udGVudCAhPT0gbnVsbCkpIHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gYCR7b3V0ZXJTZWxlY3RvcnNDb250ZW50fSR7aW5uZXJTZWxlY3RvcnNDb250ZW50fWAsXG4gICAgICAgICAgICAgICAgd2hpdGVzcGFjZSA9IG91dGVyU2VsZWN0b3JzV2hpdGVzcGFjZTtcblxuICAgICAgICAgIHNlbGVjdG9ycyA9IFNlbGVjdG9ycy5mcm9tQ29udGVudEFuZFdoaXRlc3BhY2UoY29udGVudCwgd2hpdGVzcGFjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzO1xuICB9XG5cbiAgYXNDU1MoKSB7XG4gICAgY29uc3QgY3NzID0gdGhpcy5jb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gc2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yc1N0cmluZyhzZWxlY3RvcnNTdHJpbmcpIHtcbiAgICBjb25zdCBjb250ZW50ID0gc2VsZWN0b3JzU3RyaW5nLFxuICAgICAgICAgIHdoaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBzZWxlY3RvcnMgPSBuZXcgU2VsZWN0b3JzKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZFdoaXRlc3BhY2UoY29udGVudCwgd2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IG5ldyBTZWxlY3RvcnMoY29udGVudCwgd2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBsZXQgc2VsZWN0b3JzID0gbnVsbDtcblxuICBjb25zdCBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgc2VsZWN0b3JBcnJheSA9IHNlbGVjdG9yTm9uVGVybWluYWxOb2Rlcy5yZWR1Y2UoKHNlbGVjdG9yQXJyYXksIHNlbGVjdG9yTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IHNlbGVjdG9yTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBTZWxlY3Rvci5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzZWxlY3RvckFycmF5LnB1c2goc2VsZWN0b3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzZWxlY3RvckFycmF5O1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIHNlbGVjdG9yc0FycmF5TGVuZ3RoID0gc2VsZWN0b3JBcnJheS5sZW5ndGg7XG5cbiAgaWYgKHNlbGVjdG9yc0FycmF5TGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGZpcnN0U2VsZWN0b3IgPSBmaXJzdChzZWxlY3RvckFycmF5KSxcbiAgICAgICAgICBzZWxlY3RvciA9IGZpcnN0U2VsZWN0b3IsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBzZWxlY3RvckFycmF5LnJlZHVjZSgoY29udGVudCwgc2VsZWN0b3IpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yQ29udGVudCA9IHNlbGVjdG9yLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yV2hpdGVzcGFjZSA9IHNlbGVjdG9yLmhhc1doaXRlc3BhY2UoKTtcblxuICAgICAgICAgICAgaWYgKGNvbnRlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IHNlbGVjdG9yV2hpdGVzcGFjZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgYCAke3NlbGVjdG9yQ29udGVudH1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3NlbGVjdG9yQ29udGVudH1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IHNlbGVjdG9yV2hpdGVzcGFjZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y29udGVudH0gJHtzZWxlY3RvckNvbnRlbnR9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtjb250ZW50fSR7c2VsZWN0b3JDb250ZW50fWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHdoaXRlc3BhY2UgPSBzZWxlY3Rvci5oYXNXaGl0ZXNwYWNlKCk7XG5cbiAgICBzZWxlY3RvcnMgPSBuZXcgU2VsZWN0b3JzKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGVjdG9ycztcbn1cbiJdLCJuYW1lcyI6WyJTZWxlY3RvcnMiLCJzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiY29udGVudCIsIndoaXRlc3BhY2UiLCJnZXRDb250ZW50IiwiaGFzV2hpdGVzcGFjZSIsImNvbWJpbmUiLCJzZWxlY3RvcnMiLCJvdXRlcm1vc3QiLCJvdXRlclNlbGVjdG9ycyIsImlubmVyU2VsZWN0b3JzIiwib3V0ZXJTZWxlY3RvcnNDb250ZW50IiwiaW5uZXJTZWxlY3RvcnNDb250ZW50Iiwib3V0ZXJTZWxlY3RvcnNXaGl0ZXNwYWNlIiwiaW5uZXJTZWxlY3RvcnNXaGl0ZXNwYWNlIiwiZnJvbUNvbnRlbnRBbmRXaGl0ZXNwYWNlIiwiYXNDU1MiLCJjc3MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2VucyIsImZyb21TZWxlY3RvcnNTdHJpbmciLCJzZWxlY3RvcnNTdHJpbmciLCJzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMiLCJzZWxlY3RvckFycmF5IiwicmVkdWNlIiwic2VsZWN0b3JOb25UZXJtaW5hbE5vZGUiLCJzZWxlY3RvciIsIlNlbGVjdG9yIiwicHVzaCIsInNlbGVjdG9yc0FycmF5TGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RTZWxlY3RvciIsInNlbGVjdG9yQ29udGVudCIsInNlbGVjdG9yV2hpdGVzcGFjZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7eUJBVlU7K0RBRVY7cUJBRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBTUMsZ0NBQWdDQyxJQUFBQSxpQkFBVSxFQUFDO0FBRWpELElBQU0sQUFBRUMsUUFBVUMseUJBQWMs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