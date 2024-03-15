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
var STRONG_TEXT_RULE_NAME = _highmarkmarkdown.ruleNames.STRONG_TEXT_RULE_NAME, ORDERED_LIST_RULE_NAME = _highmarkmarkdown.ruleNames.ORDERED_LIST_RULE_NAME, UNORDERED_LIST_RULE_NAME = _highmarkmarkdown.ruleNames.UNORDERED_LIST_RULE_NAME, ORDERED_LIST_ITEM_RULE_NAME = _highmarkmarkdown.ruleNames.ORDERED_LIST_ITEM_RULE_NAME, UNORDERED_LIST_ITEM_RULE_NAME = _highmarkmarkdown.ruleNames.UNORDERED_LIST_ITEM_RULE_NAME, STRONGLY_EMPHASISED_TEXT_RULE_NAME = _highmarkmarkdown.ruleNames.STRONGLY_EMPHASISED_TEXT_RULE_NAME, strongTextHTML = _highmarkmarkdown.ruleNameToHTMLMap[STRONG_TEXT_RULE_NAME], orderedListHTML = _highmarkmarkdown.ruleNameToHTMLMap[ORDERED_LIST_RULE_NAME], unorderedListHTML = _highmarkmarkdown.ruleNameToHTMLMap[UNORDERED_LIST_RULE_NAME], strongTextTagName = strongTextHTML.tagName, orderedListTagName = orderedListHTML.tagName, unorderedListTagName = unorderedListHTML.tagName;
var ruleNameTerminalNodeQuery = (0, _query.nodeQuery)("/selector/@rule-name");
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
    var ruleNameTerminalNode = ruleNameTerminalNodeQuery(node), noWhitespace = ruleNameTerminalNode === null;
    return noWhitespace;
}
function contentFromNodeAndTokens(node, tokens) {
    var content = _constants.EMPTY_STRING;
    var ruleNameTerminalNode = ruleNameTerminalNodeQuery(node);
    var offset = 0;
    if (ruleNameTerminalNode !== null) {
        var ruleNameTerminalNodeContent = ruleNameTerminalNode.getContent(), ruleName = ruleNameTerminalNodeContent, html = _highmarkmarkdown.ruleNameToHTMLMap[ruleName] || null;
        if (html === null) {
            content = null;
        } else {
            if (html !== null) {
                var tagName = html.tagName, className = html.className;
                if (tagName !== null) {
                    content = "".concat(content).concat(tagName);
                }
                switch(ruleName){
                    case STRONGLY_EMPHASISED_TEXT_RULE_NAME:
                        {
                            content = "".concat(content, " > ").concat(strongTextTagName);
                            break;
                        }
                    case ORDERED_LIST_ITEM_RULE_NAME:
                        {
                            content = "".concat(orderedListTagName, " > ").concat(content);
                            break;
                        }
                    case UNORDERED_LIST_ITEM_RULE_NAME:
                        {
                            content = "".concat(unorderedListTagName, " > ").concat(content);
                            break;
                        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVzLCBydWxlTmFtZVRvSFRNTE1hcCB9IGZyb20gXCJoaWdobWFyay1tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgeyBTVFJPTkdfVEVYVF9SVUxFX05BTUUsXG4gICAgICAgIE9SREVSRURfTElTVF9SVUxFX05BTUUsXG4gICAgICAgIFVOT1JERVJFRF9MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FLFxuICAgICAgICBVTk9SREVSRURfTElTVF9JVEVNX1JVTEVfTkFNRSxcbiAgICAgICAgU1RST05HTFlfRU1QSEFTSVNFRF9URVhUX1JVTEVfTkFNRSB9ID0gcnVsZU5hbWVzLFxuICAgICAgc3Ryb25nVGV4dEhUTUwgPSBydWxlTmFtZVRvSFRNTE1hcFtTVFJPTkdfVEVYVF9SVUxFX05BTUVdLFxuICAgICAgb3JkZXJlZExpc3RIVE1MID0gcnVsZU5hbWVUb0hUTUxNYXBbT1JERVJFRF9MSVNUX1JVTEVfTkFNRV0sXG4gICAgICB1bm9yZGVyZWRMaXN0SFRNTCA9IHJ1bGVOYW1lVG9IVE1MTWFwW1VOT1JERVJFRF9MSVNUX1JVTEVfTkFNRV0sXG4gICAgICB7IHRhZ05hbWU6IHN0cm9uZ1RleHRUYWdOYW1lIH0gPSBzdHJvbmdUZXh0SFRNTCxcbiAgICAgIHsgdGFnTmFtZTogb3JkZXJlZExpc3RUYWdOYW1lIH0gPSBvcmRlcmVkTGlzdEhUTUwsXG4gICAgICB7IHRhZ05hbWU6IHVub3JkZXJlZExpc3RUYWdOYW1lIH0gPSB1bm9yZGVyZWRMaXN0SFRNTDtcblxuY29uc3QgcnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zZWxlY3Rvci9AcnVsZS1uYW1lXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RvciB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBoYXNOb1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgY29tYmluZShzZWxlY3Rvcikge1xuICAgIGNvbnN0IG91dGVyU2VsZWN0b3IgPSB0aGlzLCAvLy9cbiAgICAgICAgICBpbm5lclNlbGVjdG9yID0gc2VsZWN0b3IsIC8vL1xuICAgICAgICAgIGlubmVyU2VsZWN0b3JDb250ZW50ID0gaW5uZXJTZWxlY3Rvci5nZXRDb250ZW50KCk7XG5cbiAgICBzZWxlY3RvciA9IG51bGw7XG5cbiAgICBpZiAoaW5uZXJTZWxlY3RvckNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG91dGVyU2VsZWN0b3JDb250ZW50ID0gb3V0ZXJTZWxlY3Rvci5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBpbm5lclNlbGVjdG9yTm9XaGl0ZXNwYWNlID0gaW5uZXJTZWxlY3Rvci5oYXNOb1doaXRlc3BhY2UoKSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSAoaW5uZXJTZWxlY3Rvck5vV2hpdGVzcGFjZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgYCR7b3V0ZXJTZWxlY3RvckNvbnRlbnR9JHtpbm5lclNlbGVjdG9yQ29udGVudH1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7b3V0ZXJTZWxlY3RvckNvbnRlbnR9ICR7aW5uZXJTZWxlY3RvckNvbnRlbnR9YDtcblxuICAgICAgc2VsZWN0b3IgPSBTZWxlY3Rvci5mcm9tQ29udGVudChjb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cblxuICBhc0NTUygpIHtcbiAgICBjb25zdCBjc3MgPSB0aGlzLmNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsIC8vL1xuICAgICAgICAgIHNlbGVjdG9yID0gbmV3IFNlbGVjdG9yKGNvbnRlbnQsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZUZyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIHNlbGVjdG9yID0gbmV3IFNlbGVjdG9yKGNvbnRlbnQsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yU3RyaW5nKHNlbGVjdG9yU3RyaW5nKSB7XG4gICAgY29uc3QgY29udGVudCA9IHNlbGVjdG9yU3RyaW5nLCAvLy9cbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBzZWxlY3RvciA9IG5ldyBTZWxlY3Rvcihjb250ZW50LCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vV2hpdGVzcGFjZUZyb21Ob2RlKG5vZGUpIHtcbiAgY29uc3QgcnVsZU5hbWVUZXJtaW5hbE5vZGUgPSBydWxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpLFxuICAgICAgICBub1doaXRlc3BhY2UgPSAocnVsZU5hbWVUZXJtaW5hbE5vZGUgPT09IG51bGwpO1xuXG4gIHJldHVybiBub1doaXRlc3BhY2U7XG59XG5cbmZ1bmN0aW9uIGNvbnRlbnRGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgbGV0IGNvbnRlbnQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgY29uc3QgcnVsZU5hbWVUZXJtaW5hbE5vZGUgPSBydWxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpO1xuXG4gIGxldCBvZmZzZXQgPSAwO1xuXG4gIGlmIChydWxlTmFtZVRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lVGVybWluYWxOb2RlQ29udGVudCA9IHJ1bGVOYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lVGVybWluYWxOb2RlQ29udGVudCwgLy8vXG4gICAgICAgICAgaHRtbCA9IHJ1bGVOYW1lVG9IVE1MTWFwW3J1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgaWYgKGh0bWwgPT09IG51bGwpIHtcbiAgICAgIGNvbnRlbnQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaHRtbCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB7IHRhZ05hbWUsIGNsYXNzTmFtZSB9ID0gaHRtbDtcblxuICAgICAgICBpZiAodGFnTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSR7dGFnTmFtZX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgICAgIGNhc2UgU1RST05HTFlfRU1QSEFTSVNFRF9URVhUX1JVTEVfTkFNRToge1xuICAgICAgICAgICAgY29udGVudCA9IGAke2NvbnRlbnR9ID4gJHtzdHJvbmdUZXh0VGFnTmFtZX1gO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIE9SREVSRURfTElTVF9JVEVNX1JVTEVfTkFNRToge1xuICAgICAgICAgICAgY29udGVudCA9IGAke29yZGVyZWRMaXN0VGFnTmFtZX0gPiAke2NvbnRlbnR9YDtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBVTk9SREVSRURfTElTVF9JVEVNX1JVTEVfTkFNRToge1xuICAgICAgICAgICAgY29udGVudCA9IGAke3Vub3JkZXJlZExpc3RUYWdOYW1lfSA+ICR7Y29udGVudH1gO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGVudCA9IGAke2NvbnRlbnR9LiR7Y2xhc3NOYW1lfWA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb2Zmc2V0ID0gMTtcbiAgICB9XG4gIH1cblxuICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJlbWFpbmluZ0NvbnRlbnQgPSByZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQobm9kZSwgdG9rZW5zLCBvZmZzZXQpO1xuXG4gICAgY29udGVudCA9IGAke2NvbnRlbnR9JHtyZW1haW5pbmdDb250ZW50fWA7XG4gIH1cblxuICByZXR1cm4gY29udGVudDtcbn1cbiJdLCJuYW1lcyI6WyJTZWxlY3RvciIsIlNUUk9OR19URVhUX1JVTEVfTkFNRSIsInJ1bGVOYW1lcyIsIk9SREVSRURfTElTVF9SVUxFX05BTUUiLCJVTk9SREVSRURfTElTVF9SVUxFX05BTUUiLCJPUkRFUkVEX0xJU1RfSVRFTV9SVUxFX05BTUUiLCJVTk9SREVSRURfTElTVF9JVEVNX1JVTEVfTkFNRSIsIlNUUk9OR0xZX0VNUEhBU0lTRURfVEVYVF9SVUxFX05BTUUiLCJzdHJvbmdUZXh0SFRNTCIsInJ1bGVOYW1lVG9IVE1MTWFwIiwib3JkZXJlZExpc3RIVE1MIiwidW5vcmRlcmVkTGlzdEhUTUwiLCJ0YWdOYW1lIiwic3Ryb25nVGV4dFRhZ05hbWUiLCJvcmRlcmVkTGlzdFRhZ05hbWUiLCJ1bm9yZGVyZWRMaXN0VGFnTmFtZSIsInJ1bGVOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb250ZW50Iiwibm9XaGl0ZXNwYWNlIiwiZ2V0Q29udGVudCIsImhhc05vV2hpdGVzcGFjZSIsImNvbWJpbmUiLCJzZWxlY3RvciIsIm91dGVyU2VsZWN0b3IiLCJpbm5lclNlbGVjdG9yIiwiaW5uZXJTZWxlY3RvckNvbnRlbnQiLCJvdXRlclNlbGVjdG9yQ29udGVudCIsImlubmVyU2VsZWN0b3JOb1doaXRlc3BhY2UiLCJmcm9tQ29udGVudCIsImFzQ1NTIiwiY3NzIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwiY29udGVudEZyb21Ob2RlQW5kVG9rZW5zIiwibm9XaGl0ZXNwYWNlRnJvbU5vZGUiLCJmcm9tU2VsZWN0b3JTdHJpbmciLCJzZWxlY3RvclN0cmluZyIsInJ1bGVOYW1lVGVybWluYWxOb2RlIiwiRU1QVFlfU1RSSU5HIiwib2Zmc2V0IiwicnVsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwicnVsZU5hbWUiLCJodG1sIiwiY2xhc3NOYW1lIiwicmVtYWluaW5nQ29udGVudCIsInJlbWFpbmluZ0NvbnRlbnRGcm9tTm9kZVRva2Vuc0FuZE9mZnNldCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUF1QnFCQTs7O2dDQXJCd0I7cUJBRW5CO3lCQUNHO3VCQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsSUFBUUMsd0JBS3VDQywyQkFBUyxDQUxoREQsdUJBQ0FFLHlCQUl1Q0QsMkJBQVMsQ0FKaERDLHdCQUNBQywyQkFHdUNGLDJCQUFTLENBSGhERSwwQkFDQUMsOEJBRXVDSCwyQkFB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