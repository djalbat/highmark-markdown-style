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
                var outerSelector = this, innerSelector = selector, outerSelectorContent = outerSelector.getContent(), innerSelectorContent = innerSelector.getContent(), innerSelectorNoWhitespace = innerSelector.hasNoWhitespace(), content = innerSelectorNoWhitespace ? "".concat(outerSelectorContent).concat(innerSelectorContent) : "".concat(outerSelectorContent, " ").concat(innerSelectorContent);
                selector = Selector.fromContent(content);
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
    var content = _constants.EMPTY_STRING;
    var nameTerminalNode = nameTerminalNodeQuery(node);
    var offset = 0;
    if (nameTerminalNode !== null) {
        var nameTerminalNodeContent = nameTerminalNode.getContent(), ruleName = nameTerminalNodeContent, html = _highmarkmarkdown.ruleNameToHTMLMap[ruleName] || null;
        if (html !== null) {
            var tagName = html.tagName, className = html.className;
            if (tagName !== null) {
                content = "".concat(content).concat(tagName);
            }
            if (className !== null) {
                content = "".concat(content, ".").concat(className);
            }
        }
        offset = 1;
    }
    var remainingContent = (0, _content.remainingContentFromNodeTokensAndOffset)(node, tokens, offset);
    content = "".concat(content).concat(remainingContent);
    return content;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVUb0hUTUxNYXAgfSBmcm9tIFwiaGlnaG1hcmstbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IG5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zZWxlY3Rvci9AbmFtZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgaGFzTm9XaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLm5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIGNvbWJpbmUoc2VsZWN0b3IpIHtcbiAgICBjb25zdCBvdXRlclNlbGVjdG9yID0gdGhpcywgLy8vXG4gICAgICAgICAgaW5uZXJTZWxlY3RvciA9IHNlbGVjdG9yLCAvLy9cbiAgICAgICAgICBvdXRlclNlbGVjdG9yQ29udGVudCA9IG91dGVyU2VsZWN0b3IuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGlubmVyU2VsZWN0b3JDb250ZW50ID0gaW5uZXJTZWxlY3Rvci5nZXRDb250ZW50KCksXG4gICAgICAgICAgaW5uZXJTZWxlY3Rvck5vV2hpdGVzcGFjZSA9IGlubmVyU2VsZWN0b3IuaGFzTm9XaGl0ZXNwYWNlKCksXG4gICAgICAgICAgY29udGVudCA9IChpbm5lclNlbGVjdG9yTm9XaGl0ZXNwYWNlKSA/XG4gICAgICAgICAgICAgICAgICAgICAgYCR7b3V0ZXJTZWxlY3RvckNvbnRlbnR9JHtpbm5lclNlbGVjdG9yQ29udGVudH1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke291dGVyU2VsZWN0b3JDb250ZW50fSAke2lubmVyU2VsZWN0b3JDb250ZW50fWA7XG5cbiAgICBzZWxlY3RvciA9IFNlbGVjdG9yLmZyb21Db250ZW50KGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG5cbiAgYXNDU1MoKSB7XG4gICAgY29uc3QgY3NzID0gdGhpcy5jb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLCAvLy9cbiAgICAgICAgICBzZWxlY3RvciA9IG5ldyBTZWxlY3Rvcihjb250ZW50LCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2VGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBzZWxlY3RvciA9IG5ldyBTZWxlY3Rvcihjb250ZW50LCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21TZWxlY3RvclN0cmluZyhzZWxlY3RvclN0cmluZykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBzZWxlY3RvclN0cmluZywgLy8vXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgc2VsZWN0b3IgPSBuZXcgU2VsZWN0b3IoY29udGVudCwgbm9XaGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBub1doaXRlc3BhY2VGcm9tTm9kZShub2RlKSB7XG4gIGNvbnN0IG5hbWVUZXJtaW5hbE5vZGUgPSBuYW1lVGVybWluYWxOb2RlUXVlcnkobm9kZSksXG4gICAgICAgIG5vV2hpdGVzcGFjZSA9IChuYW1lVGVybWluYWxOb2RlID09PSBudWxsKTtcblxuICByZXR1cm4gbm9XaGl0ZXNwYWNlO1xufVxuZnVuY3Rpb24gY29udGVudEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBsZXQgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICBjb25zdCBuYW1lVGVybWluYWxOb2RlID0gbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpO1xuXG4gIGxldCBvZmZzZXQgPSAwO1xuXG4gIGlmIChuYW1lVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBuYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IG5hbWVUZXJtaW5hbE5vZGVDb250ZW50LCAvLy9cbiAgICAgICAgICBodG1sID0gcnVsZU5hbWVUb0hUTUxNYXBbcnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICBpZiAoaHRtbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyB0YWdOYW1lLCBjbGFzc05hbWUgfSA9IGh0bWw7XG5cbiAgICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSR7dGFnTmFtZX1gO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fS4ke2NsYXNzTmFtZX1gO1xuICAgICAgfVxuICAgIH1cblxuICAgIG9mZnNldCA9IDE7XG4gIH1cblxuICBjb25zdCByZW1haW5pbmdDb250ZW50ID0gcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0KG5vZGUsIHRva2Vucywgb2Zmc2V0KTtcblxuICBjb250ZW50ID0gYCR7Y29udGVudH0ke3JlbWFpbmluZ0NvbnRlbnR9YDtcblxuICByZXR1cm4gY29udGVudDtcbn1cbiJdLCJuYW1lcyI6WyJTZWxlY3RvciIsIm5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbnRlbnQiLCJub1doaXRlc3BhY2UiLCJnZXRDb250ZW50IiwiaGFzTm9XaGl0ZXNwYWNlIiwiY29tYmluZSIsInNlbGVjdG9yIiwib3V0ZXJTZWxlY3RvciIsImlubmVyU2VsZWN0b3IiLCJvdXRlclNlbGVjdG9yQ29udGVudCIsImlubmVyU2VsZWN0b3JDb250ZW50IiwiaW5uZXJTZWxlY3Rvck5vV2hpdGVzcGFjZSIsImZyb21Db250ZW50IiwiYXNDU1MiLCJjc3MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMiLCJub1doaXRlc3BhY2VGcm9tTm9kZSIsImZyb21TZWxlY3RvclN0cmluZyIsInNlbGVjdG9yU3RyaW5nIiwibmFtZVRlcm1pbmFsTm9kZSIsIkVNUFRZX1NUUklORyIsIm9mZnNldCIsIm5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwicnVsZU5hbWUiLCJodG1sIiwicnVsZU5hbWVUb0hUTUxNYXAiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwicmVtYWluaW5nQ29udGVudCIsInJlbWFpbmluZ0NvbnRlbnRGcm9tTm9kZVRva2Vuc0FuZE9mZnNldCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7Z0NBUmE7cUJBRVI7eUJBQ0c7dUJBQzJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RCxJ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