"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Selector;
    }
});
var _highmarkmarkdown = require("highmark-markdown");
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
var nameTerminalNodeQuery = (0, _query.nodeQuery)("/selector/@name");
var Selector = /*#__PURE__*/ function() {
    function Selector(content, noWhitespace) {
        _class_call_check(this, Selector);
        this.content = content;
        this.noWhitespace = noWhitespace;
    }
    _create_class(Selector, [
        {
            key: "getContent",
            value: function getContent() {
                return this.content;
            }
        },
        {
            key: "hasNoWhitespace",
            value: function hasNoWhitespace() {
                return this.noWhitespace;
            }
        },
        {
            key: "combine",
            value: function combine(selector) {
                var outerSelector = this, innerSelector = selector, innerSelectorContent = innerSelector.getContent();
                selector = null;
                if (innerSelectorContent !== null) {
                    var outerSelectorContent = outerSelector.getContent(), innerSelectorNoWhitespace = innerSelector.hasNoWhitespace(), content = innerSelectorNoWhitespace ? "".concat(outerSelectorContent).concat(innerSelectorContent) : "".concat(outerSelectorContent, " ").concat(innerSelectorContent);
                    selector = Selector.fromContent(content);
                }
                return selector;
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
            key: "fromContent",
            value: function fromContent(content) {
                var noWhitespace = false, selector = new Selector(content, noWhitespace);
                return selector;
            }
        },
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var content = contentFromNodeAndTokens(node, tokens), noWhitespace = noWhitespaceFromNode(node), selector = new Selector(content, noWhitespace);
                return selector;
            }
        },
        {
            key: "fromSelectorString",
            value: function fromSelectorString(selectorString) {
                var content = selectorString, noWhitespace = false, selector = new Selector(content, noWhitespace);
                return selector;
            }
        }
    ]);
    return Selector;
}();
function noWhitespaceFromNode(node) {
    var nameTerminalNode = nameTerminalNodeQuery(node), noWhitespace = nameTerminalNode === null;
    return noWhitespace;
}
function contentFromNodeAndTokens(node, tokens) {
    var content = null;
    var nameTerminalNode = nameTerminalNodeQuery(node);
    var offset = 0;
    if (nameTerminalNode !== null) {
        var nameTerminalNodeContent = nameTerminalNode.getContent(), ruleName = nameTerminalNodeContent, html = _highmarkmarkdown.ruleNameToHTMLMap[ruleName] || null;
        if (html !== null) {
            var tagName = html.tagName, className = html.className;
            content = _constants.EMPTY_STRING;
            if (tagName !== null) {
                content = "".concat(content).concat(tagName);
            }
            if (className !== null) {
                content = "".concat(content, ".").concat(className);
            }
        }
        offset = 1;
    }
    if (content !== null) {
        var remainingContent = (0, _content.remainingContentFromNodeTokensAndOffset)(node, tokens, offset);
        content = "".concat(content).concat(remainingContent);
    }
    return content;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVUb0hUTUxNYXAgfSBmcm9tIFwiaGlnaG1hcmstbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IG5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zZWxlY3Rvci9AbmFtZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgaGFzTm9XaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLm5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIGNvbWJpbmUoc2VsZWN0b3IpIHtcbiAgICBjb25zdCBvdXRlclNlbGVjdG9yID0gdGhpcywgLy8vXG4gICAgICAgICAgaW5uZXJTZWxlY3RvciA9IHNlbGVjdG9yLCAvLy9cbiAgICAgICAgICBpbm5lclNlbGVjdG9yQ29udGVudCA9IGlubmVyU2VsZWN0b3IuZ2V0Q29udGVudCgpO1xuXG4gICAgc2VsZWN0b3IgPSBudWxsO1xuXG4gICAgaWYgKGlubmVyU2VsZWN0b3JDb250ZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBvdXRlclNlbGVjdG9yQ29udGVudCA9IG91dGVyU2VsZWN0b3IuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgaW5uZXJTZWxlY3Rvck5vV2hpdGVzcGFjZSA9IGlubmVyU2VsZWN0b3IuaGFzTm9XaGl0ZXNwYWNlKCksXG4gICAgICAgICAgICBjb250ZW50ID0gKGlubmVyU2VsZWN0b3JOb1doaXRlc3BhY2UpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGAke291dGVyU2VsZWN0b3JDb250ZW50fSR7aW5uZXJTZWxlY3RvckNvbnRlbnR9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke291dGVyU2VsZWN0b3JDb250ZW50fSAke2lubmVyU2VsZWN0b3JDb250ZW50fWA7XG5cbiAgICAgIHNlbGVjdG9yID0gU2VsZWN0b3IuZnJvbUNvbnRlbnQoY29udGVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG5cbiAgYXNDU1MoKSB7XG4gICAgY29uc3QgY3NzID0gdGhpcy5jb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLCAvLy9cbiAgICAgICAgICBzZWxlY3RvciA9IG5ldyBTZWxlY3Rvcihjb250ZW50LCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2VGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBzZWxlY3RvciA9IG5ldyBTZWxlY3Rvcihjb250ZW50LCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21TZWxlY3RvclN0cmluZyhzZWxlY3RvclN0cmluZykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBzZWxlY3RvclN0cmluZywgLy8vXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgc2VsZWN0b3IgPSBuZXcgU2VsZWN0b3IoY29udGVudCwgbm9XaGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBub1doaXRlc3BhY2VGcm9tTm9kZShub2RlKSB7XG4gIGNvbnN0IG5hbWVUZXJtaW5hbE5vZGUgPSBuYW1lVGVybWluYWxOb2RlUXVlcnkobm9kZSksXG4gICAgICAgIG5vV2hpdGVzcGFjZSA9IChuYW1lVGVybWluYWxOb2RlID09PSBudWxsKTtcblxuICByZXR1cm4gbm9XaGl0ZXNwYWNlO1xufVxuXG5mdW5jdGlvbiBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBjb250ZW50ID0gbnVsbDtcblxuICBjb25zdCBuYW1lVGVybWluYWxOb2RlID0gbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpO1xuXG4gIGxldCBvZmZzZXQgPSAwO1xuXG4gIGlmIChuYW1lVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBuYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IG5hbWVUZXJtaW5hbE5vZGVDb250ZW50LCAvLy9cbiAgICAgICAgICBodG1sID0gcnVsZU5hbWVUb0hUTUxNYXBbcnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICBpZiAoaHRtbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyB0YWdOYW1lLCBjbGFzc05hbWUgfSA9IGh0bWw7XG5cbiAgICAgIGNvbnRlbnQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSR7dGFnTmFtZX1gO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fS4ke2NsYXNzTmFtZX1gO1xuICAgICAgfVxuICAgIH1cblxuICAgIG9mZnNldCA9IDE7XG4gIH1cblxuICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJlbWFpbmluZ0NvbnRlbnQgPSByZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQobm9kZSwgdG9rZW5zLCBvZmZzZXQpO1xuXG4gICAgY29udGVudCA9IGAke2NvbnRlbnR9JHtyZW1haW5pbmdDb250ZW50fWA7XG4gIH1cblxuICByZXR1cm4gY29udGVudDtcbn1cbiJdLCJuYW1lcyI6WyJTZWxlY3RvciIsIm5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbnRlbnQiLCJub1doaXRlc3BhY2UiLCJnZXRDb250ZW50IiwiaGFzTm9XaGl0ZXNwYWNlIiwiY29tYmluZSIsInNlbGVjdG9yIiwib3V0ZXJTZWxlY3RvciIsImlubmVyU2VsZWN0b3IiLCJpbm5lclNlbGVjdG9yQ29udGVudCIsIm91dGVyU2VsZWN0b3JDb250ZW50IiwiaW5uZXJTZWxlY3Rvck5vV2hpdGVzcGFjZSIsImZyb21Db250ZW50IiwiYXNDU1MiLCJjc3MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMiLCJub1doaXRlc3BhY2VGcm9tTm9kZSIsImZyb21TZWxlY3RvclN0cmluZyIsInNlbGVjdG9yU3RyaW5nIiwibmFtZVRlcm1pbmFsTm9kZSIsIm9mZnNldCIsIm5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwicnVsZU5hbWUiLCJodG1sIiwicnVsZU5hbWVUb0hUTUxNYXAiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwiRU1QVFlfU1RSSU5HIiwicmVtYWluaW5nQ29udGVudCIsInJlbWFpbmluZ0NvbnRlbnRGcm9tTm9kZVRva2Vuc0FuZE9mZnNldCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7Z0NBUmE7cUJBRVI7eUJBQ0c7dUJBQzJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RCxJQUFNQyx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFekIsSUFBQSxBQUFNRix5QkFBRCxBQUFMO2FBQU1BLFNBQ1BHLE9BQU8sRUFBRUMsWUFBWTtnQ0FEZEo7UUFFakIsSUFBSSxDQUFDRyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOztrQkFISEo7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE9BQU87WUFDckI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsUUFBUTtnQkFDZCxJQUFNQyxnQkFBZ0IsSUFBSSxFQUNwQkMsZ0JBQWdCRixVQUNoQkcsdUJBQXVCRCxjQUFjTCxVQUFVO2dCQUVyREcsV0FBVztnQkFFWCxJQUFJRyx5QkFBeUIsTUFBTTtvQkFDakMsSUFBTUMsdUJBQXVCSCxjQUFjSixVQUFVLElBQy9DUSw0QkFBNEJILGNBQWNKLGVBQWUsSUFDekRILFVBQVUsQUFBQ1UsNEJBQ0MsQUFBQyxHQUF5QkYsT0FBdkJDLHNCQUE0QyxPQUFyQkQsd0JBQ3hCLEFBQUMsR0FBMEJBLE9BQXhCQyxzQkFBcUIsS0FBd0IsT0FBckJEO29CQUUvQ0gsV0FBV1IsQUE1QklBLFNBNEJLYyxXQUFXLENBQUNYO2dCQUNsQztnQkFFQSxPQUFPSztZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE1BQU0sSUFBSSxDQUFDYixPQUFPLEVBQUUsR0FBRztnQkFFN0IsT0FBT2E7WUFDVDs7OztZQUVPRixLQUFBQTttQkFBUCxTQUFPQSxZQUFZWCxPQUFPO2dCQUN4QixJQUFNQyxlQUFlLE9BQ2ZJLFdBQVcsSUExQ0FSLFNBMENhRyxTQUFTQztnQkFFdkMsT0FBT0k7WUFDVDs7O1lBRU9TLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUNuQyxJQUFNaEIsVUFBVWlCLHlCQUF5QkYsTUFBTUMsU0FDekNmLGVBQWVpQixxQkFBcUJILE9BQ3BDVixXQUFXLElBbERBUixTQWtEYUcsU0FBU0M7Z0JBRXZDLE9BQU9JO1lBQ1Q7OztZQUVPYyxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGNBQWM7Z0JBQ3RDLElBQU1wQixVQUFVb0IsZ0JBQ1ZuQixlQUFlLE9BQ2ZJLFdBQVcsSUExREFSLFNBMERhRyxTQUFTQztnQkFFdkMsT0FBT0k7WUFDVDs7O1dBN0RtQlI7O0FBZ0VyQixTQUFTcUIscUJBQXFCSCxJQUFJO0lBQ2hDLElBQU1NLG1CQUFtQnZCLHNCQUFzQmlCLE9BQ3pDZCxlQUFnQm9CLHFCQUFxQjtJQUUzQyxPQUFPcEI7QUFDVDtBQUVBLFNBQVNnQix5QkFBeUJGLElBQUksRUFBRUMsTUFBTTtJQUM1QyxJQUFJaEIsVUFBVTtJQUVkLElBQU1xQixtQkFBbUJ2QixzQkFBc0JpQjtJQUUvQyxJQUFJTyxTQUFTO0lBRWIsSUFBSUQscUJBQXFCLE1BQU07UUFDN0IsSUFBTUUsMEJBQTBCRixpQkFBaUJuQixVQUFVLElBQ3JEc0IsV0FBV0QseUJBQ1hFLE9BQU9DLG1DQUFpQixDQUFDRixTQUFTLElBQUk7UUFFNUMsSUFBSUMsU0FBUyxNQUFNO1lBQ2pCLElBQVFFLFVBQXVCRixLQUF2QkUsU0FBU0MsWUFBY0gsS0FBZEc7WUFFakI1QixVQUFVNkIsdUJBQVk7WUFFdEIsSUFBSUYsWUFBWSxNQUFNO2dCQUNwQjNCLFVBQVUsQUFBQyxHQUFZMkIsT0FBVjNCLFNBQWtCLE9BQVIyQjtZQUN6QjtZQUVBLElBQUlDLGNBQWMsTUFBTTtnQkFDdEI1QixVQUFVLEFBQUMsR0FBYTRCLE9BQVg1QixTQUFRLEtBQWEsT0FBVjRCO1lBQzFCO1FBQ0Y7UUFFQU4sU0FBUztJQUNYO0lBRUEsSUFBSXRCLFlBQVksTUFBTTtRQUNwQixJQUFNOEIsbUJBQW1CQyxJQUFBQSxnREFBdUMsRUFBQ2hCLE1BQU1DLFFBQVFNO1FBRS9FdEIsVUFBVSxBQUFDLEdBQVk4QixPQUFWOUIsU0FBMkIsT0FBakI4QjtJQUN6QjtJQUVBLE9BQU85QjtBQUNUIn0=