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
    var content = _constants.EMPTY_STRING;
    var nameTerminalNode = nameTerminalNodeQuery(node);
    var offset = 0;
    if (nameTerminalNode !== null) {
        var nameTerminalNodeContent = nameTerminalNode.getContent(), ruleName = nameTerminalNodeContent, html = _highmarkmarkdown.ruleNameToHTMLMap[ruleName] || null;
        if (html === null) {
            content = null;
        } else {
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
    }
    if (content !== null) {
        var remainingContent = (0, _content.remainingContentFromNodeTokensAndOffset)(node, tokens, offset);
        content = "".concat(content).concat(remainingContent);
    }
    return content;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVUb0hUTUxNYXAgfSBmcm9tIFwiaGlnaG1hcmstbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IG5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zZWxlY3Rvci9AbmFtZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgaGFzTm9XaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLm5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIGNvbWJpbmUoc2VsZWN0b3IpIHtcbiAgICBjb25zdCBvdXRlclNlbGVjdG9yID0gdGhpcywgLy8vXG4gICAgICAgICAgaW5uZXJTZWxlY3RvciA9IHNlbGVjdG9yLCAvLy9cbiAgICAgICAgICBpbm5lclNlbGVjdG9yQ29udGVudCA9IGlubmVyU2VsZWN0b3IuZ2V0Q29udGVudCgpO1xuXG4gICAgc2VsZWN0b3IgPSBudWxsO1xuXG4gICAgaWYgKGlubmVyU2VsZWN0b3JDb250ZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBvdXRlclNlbGVjdG9yQ29udGVudCA9IG91dGVyU2VsZWN0b3IuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgaW5uZXJTZWxlY3Rvck5vV2hpdGVzcGFjZSA9IGlubmVyU2VsZWN0b3IuaGFzTm9XaGl0ZXNwYWNlKCksXG4gICAgICAgICAgICBjb250ZW50ID0gKGlubmVyU2VsZWN0b3JOb1doaXRlc3BhY2UpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGAke291dGVyU2VsZWN0b3JDb250ZW50fSR7aW5uZXJTZWxlY3RvckNvbnRlbnR9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke291dGVyU2VsZWN0b3JDb250ZW50fSAke2lubmVyU2VsZWN0b3JDb250ZW50fWA7XG5cbiAgICAgIHNlbGVjdG9yID0gU2VsZWN0b3IuZnJvbUNvbnRlbnQoY29udGVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG5cbiAgYXNDU1MoKSB7XG4gICAgY29uc3QgY3NzID0gdGhpcy5jb250ZW50OyAvLy9cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLCAvLy9cbiAgICAgICAgICBzZWxlY3RvciA9IG5ldyBTZWxlY3Rvcihjb250ZW50LCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2VGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBzZWxlY3RvciA9IG5ldyBTZWxlY3Rvcihjb250ZW50LCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21TZWxlY3RvclN0cmluZyhzZWxlY3RvclN0cmluZykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBzZWxlY3RvclN0cmluZywgLy8vXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgc2VsZWN0b3IgPSBuZXcgU2VsZWN0b3IoY29udGVudCwgbm9XaGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBub1doaXRlc3BhY2VGcm9tTm9kZShub2RlKSB7XG4gIGNvbnN0IG5hbWVUZXJtaW5hbE5vZGUgPSBuYW1lVGVybWluYWxOb2RlUXVlcnkobm9kZSksXG4gICAgICAgIG5vV2hpdGVzcGFjZSA9IChuYW1lVGVybWluYWxOb2RlID09PSBudWxsKTtcblxuICByZXR1cm4gbm9XaGl0ZXNwYWNlO1xufVxuXG5mdW5jdGlvbiBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gIGNvbnN0IG5hbWVUZXJtaW5hbE5vZGUgPSBuYW1lVGVybWluYWxOb2RlUXVlcnkobm9kZSk7XG5cbiAgbGV0IG9mZnNldCA9IDA7XG5cbiAgaWYgKG5hbWVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBuYW1lVGVybWluYWxOb2RlQ29udGVudCA9IG5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQsIC8vL1xuICAgICAgICAgIGh0bWwgPSBydWxlTmFtZVRvSFRNTE1hcFtydWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIGlmIChodG1sID09PSBudWxsKSB7XG4gICAgICBjb250ZW50ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGh0bWwgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgeyB0YWdOYW1lLCBjbGFzc05hbWUgfSA9IGh0bWw7XG5cbiAgICAgICAgaWYgKHRhZ05hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0ke3RhZ05hbWV9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0uJHtjbGFzc05hbWV9YDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvZmZzZXQgPSAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmVtYWluaW5nQ29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnRGcm9tTm9kZVRva2Vuc0FuZE9mZnNldChub2RlLCB0b2tlbnMsIG9mZnNldCk7XG5cbiAgICBjb250ZW50ID0gYCR7Y29udGVudH0ke3JlbWFpbmluZ0NvbnRlbnR9YDtcbiAgfVxuXG4gIHJldHVybiBjb250ZW50O1xufVxuIl0sIm5hbWVzIjpbIlNlbGVjdG9yIiwibmFtZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiY29udGVudCIsIm5vV2hpdGVzcGFjZSIsImdldENvbnRlbnQiLCJoYXNOb1doaXRlc3BhY2UiLCJjb21iaW5lIiwic2VsZWN0b3IiLCJvdXRlclNlbGVjdG9yIiwiaW5uZXJTZWxlY3RvciIsImlubmVyU2VsZWN0b3JDb250ZW50Iiwib3V0ZXJTZWxlY3RvckNvbnRlbnQiLCJpbm5lclNlbGVjdG9yTm9XaGl0ZXNwYWNlIiwiZnJvbUNvbnRlbnQiLCJhc0NTUyIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsImNvbnRlbnRGcm9tTm9kZUFuZFRva2VucyIsIm5vV2hpdGVzcGFjZUZyb21Ob2RlIiwiZnJvbVNlbGVjdG9yU3RyaW5nIiwic2VsZWN0b3JTdHJpbmciLCJuYW1lVGVybWluYWxOb2RlIiwiRU1QVFlfU1RSSU5HIiwib2Zmc2V0IiwibmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJydWxlTmFtZSIsImh0bWwiLCJydWxlTmFtZVRvSFRNTE1hcCIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJyZW1haW5pbmdDb250ZW50IiwicmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OztnQ0FSYTtxQkFFUjt5QkFDRzt1QkFDMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhELElBQU1DLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV6QixJQUFBLEFBQU1GLHlCQUFELEFBQUw7YUFBTUEsU0FDUEcsT0FBTyxFQUFFQyxZQUFZO2dDQURkSjtRQUVqQixJQUFJLENBQUNHLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFlBQVksR0FBR0E7O2tCQUhISjs7WUFNbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNyQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxRQUFRO2dCQUNkLElBQU1DLGdCQUFnQixJQUFJLEVBQ3BCQyxnQkFBZ0JGLFVBQ2hCRyx1QkFBdUJELGNBQWNMLFVBQVU7Z0JBRXJERyxXQUFXO2dCQUVYLElBQUlHLHlCQUF5QixNQUFNO29CQUNqQyxJQUFNQyx1QkFBdUJILGNBQWNKLFVBQVUsSUFDL0NRLDRCQUE0QkgsY0FBY0osZUFBZSxJQUN6REgsVUFBVSxBQUFDVSw0QkFDQyxBQUFDLEdBQXlCRixPQUF2QkMsc0JBQTRDLE9BQXJCRCx3QkFDeEIsQUFBQyxHQUEwQkEsT0FBeEJDLHNCQUFxQixLQUF3QixPQUFyQkQ7b0JBRS9DSCxXQUFXUixBQTVCSUEsU0E0QktjLFdBQVcsQ0FBQ1g7Z0JBQ2xDO2dCQUVBLE9BQU9LO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsTUFBTSxJQUFJLENBQUNiLE9BQU8sRUFBRSxHQUFHO2dCQUU3QixPQUFPYTtZQUNUOzs7O1lBRU9GLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlYLE9BQU87Z0JBQ3hCLElBQU1DLGVBQWUsT0FDZkksV0FBVyxJQTFDQVIsU0EwQ2FHLFNBQVNDO2dCQUV2QyxPQUFPSTtZQUNUOzs7WUFFT1MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1oQixVQUFVaUIseUJBQXlCRixNQUFNQyxTQUN6Q2YsZUFBZWlCLHFCQUFxQkgsT0FDcENWLFdBQVcsSUFsREFSLFNBa0RhRyxTQUFTQztnQkFFdkMsT0FBT0k7WUFDVDs7O1lBRU9jLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsY0FBYztnQkFDdEMsSUFBTXBCLFVBQVVvQixnQkFDVm5CLGVBQWUsT0FDZkksV0FBVyxJQTFEQVIsU0EwRGFHLFNBQVNDO2dCQUV2QyxPQUFPSTtZQUNUOzs7V0E3RG1CUjs7QUFnRXJCLFNBQVNxQixxQkFBcUJILElBQUk7SUFDaEMsSUFBTU0sbUJBQW1CdkIsc0JBQXNCaUIsT0FDekNkLGVBQWdCb0IscUJBQXFCO0lBRTNDLE9BQU9wQjtBQUNUO0FBRUEsU0FBU2dCLHlCQUF5QkYsSUFBSSxFQUFFQyxNQUFNO0lBQzVDLElBQUloQixVQUFVc0IsdUJBQVk7SUFFMUIsSUFBTUQsbUJBQW1CdkIsc0JBQXNCaUI7SUFFL0MsSUFBSVEsU0FBUztJQUViLElBQUlGLHFCQUFxQixNQUFNO1FBQzdCLElBQU1HLDBCQUEwQkgsaUJBQWlCbkIsVUFBVSxJQUNyRHVCLFdBQVdELHlCQUNYRSxPQUFPQyxtQ0FBaUIsQ0FBQ0YsU0FBUyxJQUFJO1FBRTVDLElBQUlDLFNBQVMsTUFBTTtZQUNqQjFCLFVBQVU7UUFDWixPQUFPO1lBQ0wsSUFBSTBCLFNBQVMsTUFBTTtnQkFDakIsSUFBUUUsVUFBdUJGLEtBQXZCRSxTQUFTQyxZQUFjSCxLQUFkRztnQkFFakIsSUFBSUQsWUFBWSxNQUFNO29CQUNwQjVCLFVBQVUsQUFBQyxHQUFZNEIsT0FBVjVCLFNBQWtCLE9BQVI0QjtnQkFDekI7Z0JBRUEsSUFBSUMsY0FBYyxNQUFNO29CQUN0QjdCLFVBQVUsQUFBQyxHQUFhNkIsT0FBWDdCLFNBQVEsS0FBYSxPQUFWNkI7Z0JBQzFCO1lBQ0Y7WUFFQU4sU0FBUztRQUNYO0lBQ0Y7SUFFQSxJQUFJdkIsWUFBWSxNQUFNO1FBQ3BCLElBQU04QixtQkFBbUJDLElBQUFBLGdEQUF1QyxFQUFDaEIsTUFBTUMsUUFBUU87UUFFL0V2QixVQUFVLEFBQUMsR0FBWThCLE9BQVY5QixTQUEyQixPQUFqQjhCO0lBQ3pCO0lBRUEsT0FBTzlCO0FBQ1QifQ==