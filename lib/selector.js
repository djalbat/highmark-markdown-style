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
var _query = require("./utilities/query");
var _constants = require("./constants");
var _content = require("./utilities/content");
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
    function Selector(content, whitespace) {
        _class_call_check(this, Selector);
        this.content = content;
        this.whitespace = whitespace;
    }
    _create_class(Selector, [
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
            value: function combine(selector) {
                var outermost = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var outerSelector = this, innerSelector = selector, innerSelectorContent = innerSelector.getContent();
                var content = null;
                if (innerSelectorContent !== null) {
                    var outerSelectorContent = outerSelector.getContent(), innerSelectorWhitespace = innerSelector.hasWhitespace();
                    if (innerSelectorWhitespace) {
                        content = "".concat(outerSelectorContent, " ").concat(innerSelectorContent);
                    } else {
                        if (!outermost) {
                            content = "".concat(outerSelectorContent).concat(innerSelectorContent);
                        }
                    }
                }
                selector = content === null ? null : Selector.fromContent(content);
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
                var whitespace = true, selector = new Selector(content, whitespace);
                return selector;
            }
        },
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var content = contentFromNodeAndTokens(node, tokens), whitespace = whitespaceFromNode(node), selector = new Selector(content, whitespace);
                return selector;
            }
        },
        {
            key: "fromSelectorString",
            value: function fromSelectorString(selectorString) {
                var content = selectorString, whitespace = true, selector = new Selector(content, whitespace);
                return selector;
            }
        }
    ]);
    return Selector;
}();
function whitespaceFromNode(node) {
    var ruleNameTerminalNode = ruleNameTerminalNodeQuery(node), whitespace = ruleNameTerminalNode !== null;
    return whitespace;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVzLCBydWxlTmFtZVRvSFRNTE1hcCB9IGZyb20gXCJoaWdobWFyay1tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgeyBTVFJPTkdfVEVYVF9SVUxFX05BTUUsXG4gICAgICAgIE9SREVSRURfTElTVF9SVUxFX05BTUUsXG4gICAgICAgIFVOT1JERVJFRF9MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FLFxuICAgICAgICBVTk9SREVSRURfTElTVF9JVEVNX1JVTEVfTkFNRSxcbiAgICAgICAgU1RST05HTFlfRU1QSEFTSVNFRF9URVhUX1JVTEVfTkFNRSB9ID0gcnVsZU5hbWVzLFxuICAgICAgc3Ryb25nVGV4dEhUTUwgPSBydWxlTmFtZVRvSFRNTE1hcFtTVFJPTkdfVEVYVF9SVUxFX05BTUVdLFxuICAgICAgb3JkZXJlZExpc3RIVE1MID0gcnVsZU5hbWVUb0hUTUxNYXBbT1JERVJFRF9MSVNUX1JVTEVfTkFNRV0sXG4gICAgICB1bm9yZGVyZWRMaXN0SFRNTCA9IHJ1bGVOYW1lVG9IVE1MTWFwW1VOT1JERVJFRF9MSVNUX1JVTEVfTkFNRV0sXG4gICAgICB7IHRhZ05hbWU6IHN0cm9uZ1RleHRUYWdOYW1lIH0gPSBzdHJvbmdUZXh0SFRNTCxcbiAgICAgIHsgdGFnTmFtZTogb3JkZXJlZExpc3RUYWdOYW1lIH0gPSBvcmRlcmVkTGlzdEhUTUwsXG4gICAgICB7IHRhZ05hbWU6IHVub3JkZXJlZExpc3RUYWdOYW1lIH0gPSB1bm9yZGVyZWRMaXN0SFRNTDtcblxuY29uc3QgcnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zZWxlY3Rvci9AcnVsZS1uYW1lXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RvciB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIHdoaXRlc3BhY2UpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMud2hpdGVzcGFjZSA9IHdoaXRlc3BhY2U7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBoYXNXaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLndoaXRlc3BhY2U7XG4gIH1cblxuICBjb21iaW5lKHNlbGVjdG9yLCBvdXRlcm1vc3QgPSB0cnVlKSB7XG4gICAgY29uc3Qgb3V0ZXJTZWxlY3RvciA9IHRoaXMsIC8vL1xuICAgICAgICAgIGlubmVyU2VsZWN0b3IgPSBzZWxlY3RvciwgLy8vXG4gICAgICAgICAgaW5uZXJTZWxlY3RvckNvbnRlbnQgPSBpbm5lclNlbGVjdG9yLmdldENvbnRlbnQoKTtcblxuICAgIGxldCBjb250ZW50ID0gbnVsbDtcblxuICAgIGlmIChpbm5lclNlbGVjdG9yQ29udGVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgb3V0ZXJTZWxlY3RvckNvbnRlbnQgPSBvdXRlclNlbGVjdG9yLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIGlubmVyU2VsZWN0b3JXaGl0ZXNwYWNlID0gaW5uZXJTZWxlY3Rvci5oYXNXaGl0ZXNwYWNlKCk7XG5cbiAgICAgIGlmIChpbm5lclNlbGVjdG9yV2hpdGVzcGFjZSkge1xuICAgICAgICBjb250ZW50ID0gYCR7b3V0ZXJTZWxlY3RvckNvbnRlbnR9ICR7aW5uZXJTZWxlY3RvckNvbnRlbnR9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghb3V0ZXJtb3N0KSB7XG4gICAgICAgICAgY29udGVudCA9IGAke291dGVyU2VsZWN0b3JDb250ZW50fSR7aW5uZXJTZWxlY3RvckNvbnRlbnR9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdG9yID0gKGNvbnRlbnQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICBTZWxlY3Rvci5mcm9tQ29udGVudChjb250ZW50KTtcblxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxuXG4gIGFzQ1NTKCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuY29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCB3aGl0ZXNwYWNlID0gdHJ1ZSwgLy8vXG4gICAgICAgICAgc2VsZWN0b3IgPSBuZXcgU2VsZWN0b3IoY29udGVudCwgd2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHdoaXRlc3BhY2UgPSB3aGl0ZXNwYWNlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgc2VsZWN0b3IgPSBuZXcgU2VsZWN0b3IoY29udGVudCwgd2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yU3RyaW5nKHNlbGVjdG9yU3RyaW5nKSB7XG4gICAgY29uc3QgY29udGVudCA9IHNlbGVjdG9yU3RyaW5nLCAvLy9cbiAgICAgICAgICB3aGl0ZXNwYWNlID0gdHJ1ZSxcbiAgICAgICAgICBzZWxlY3RvciA9IG5ldyBTZWxlY3Rvcihjb250ZW50LCB3aGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiB3aGl0ZXNwYWNlRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZSA9IHJ1bGVOYW1lVGVybWluYWxOb2RlUXVlcnkobm9kZSksXG4gICAgICAgIHdoaXRlc3BhY2UgPSAocnVsZU5hbWVUZXJtaW5hbE5vZGUgIT09IG51bGwpO1xuXG4gIHJldHVybiB3aGl0ZXNwYWNlO1xufVxuXG5mdW5jdGlvbiBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gIGNvbnN0IHJ1bGVOYW1lVGVybWluYWxOb2RlID0gcnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeShub2RlKTtcblxuICBsZXQgb2Zmc2V0ID0gMDtcblxuICBpZiAocnVsZU5hbWVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBydWxlTmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQsIC8vL1xuICAgICAgICAgIGh0bWwgPSBydWxlTmFtZVRvSFRNTE1hcFtydWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIGlmIChodG1sID09PSBudWxsKSB7XG4gICAgICBjb250ZW50ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGh0bWwgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgeyB0YWdOYW1lLCBjbGFzc05hbWUgfSA9IGh0bWw7XG5cbiAgICAgICAgaWYgKHRhZ05hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0ke3RhZ05hbWV9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgICAgICBjYXNlIFNUUk9OR0xZX0VNUEhBU0lTRURfVEVYVF9SVUxFX05BTUU6IHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSA+ICR7c3Ryb25nVGV4dFRhZ05hbWV9YDtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBPUkRFUkVEX0xJU1RfSVRFTV9SVUxFX05BTUU6IHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBgJHtvcmRlcmVkTGlzdFRhZ05hbWV9ID4gJHtjb250ZW50fWA7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgVU5PUkRFUkVEX0xJU1RfSVRFTV9SVUxFX05BTUU6IHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBgJHt1bm9yZGVyZWRMaXN0VGFnTmFtZX0gPiAke2NvbnRlbnR9YDtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fS4ke2NsYXNzTmFtZX1gO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9mZnNldCA9IDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCByZW1haW5pbmdDb250ZW50ID0gcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0KG5vZGUsIHRva2Vucywgb2Zmc2V0KTtcblxuICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSR7cmVtYWluaW5nQ29udGVudH1gO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iXSwibmFtZXMiOlsiU2VsZWN0b3IiLCJTVFJPTkdfVEVYVF9SVUxFX05BTUUiLCJydWxlTmFtZXMiLCJPUkRFUkVEX0xJU1RfUlVMRV9OQU1FIiwiVU5PUkRFUkVEX0xJU1RfUlVMRV9OQU1FIiwiT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FIiwiVU5PUkRFUkVEX0xJU1RfSVRFTV9SVUxFX05BTUUiLCJTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfUlVMRV9OQU1FIiwic3Ryb25nVGV4dEhUTUwiLCJydWxlTmFtZVRvSFRNTE1hcCIsIm9yZGVyZWRMaXN0SFRNTCIsInVub3JkZXJlZExpc3RIVE1MIiwidGFnTmFtZSIsInN0cm9uZ1RleHRUYWdOYW1lIiwib3JkZXJlZExpc3RUYWdOYW1lIiwidW5vcmRlcmVkTGlzdFRhZ05hbWUiLCJydWxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiY29udGVudCIsIndoaXRlc3BhY2UiLCJnZXRDb250ZW50IiwiaGFzV2hpdGVzcGFjZSIsImNvbWJpbmUiLCJzZWxlY3RvciIsIm91dGVybW9zdCIsIm91dGVyU2VsZWN0b3IiLCJpbm5lclNlbGVjdG9yIiwiaW5uZXJTZWxlY3RvckNvbnRlbnQiLCJvdXRlclNlbGVjdG9yQ29udGVudCIsImlubmVyU2VsZWN0b3JXaGl0ZXNwYWNlIiwiZnJvbUNvbnRlbnQiLCJhc0NTUyIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsImNvbnRlbnRGcm9tTm9kZUFuZFRva2VucyIsIndoaXRlc3BhY2VGcm9tTm9kZSIsImZyb21TZWxlY3RvclN0cmluZyIsInNlbGVjdG9yU3RyaW5nIiwicnVsZU5hbWVUZXJtaW5hbE5vZGUiLCJFTVBUWV9TVFJJTkciLCJvZmZzZXQiLCJydWxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJydWxlTmFtZSIsImh0bWwiLCJjbGFzc05hbWUiLCJyZW1haW5pbmdDb250ZW50IiwicmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXVCcUJBOzs7Z0NBckJ3QjtxQkFFbkI7eUJBQ0c7dUJBQzJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RCxJQUFRQyx3QkFLdUNDLDJCQUFTLENB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