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
        }
    ], [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVzLCBydWxlTmFtZVRvSFRNTE1hcCB9IGZyb20gXCJoaWdobWFyay1tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgeyBTVFJPTkdfVEVYVF9SVUxFX05BTUUsXG4gICAgICAgIE9SREVSRURfTElTVF9SVUxFX05BTUUsXG4gICAgICAgIFVOT1JERVJFRF9MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FLFxuICAgICAgICBVTk9SREVSRURfTElTVF9JVEVNX1JVTEVfTkFNRSxcbiAgICAgICAgU1RST05HTFlfRU1QSEFTSVNFRF9URVhUX1JVTEVfTkFNRSB9ID0gcnVsZU5hbWVzLFxuICAgICAgc3Ryb25nVGV4dEhUTUwgPSBydWxlTmFtZVRvSFRNTE1hcFtTVFJPTkdfVEVYVF9SVUxFX05BTUVdLFxuICAgICAgb3JkZXJlZExpc3RIVE1MID0gcnVsZU5hbWVUb0hUTUxNYXBbT1JERVJFRF9MSVNUX1JVTEVfTkFNRV0sXG4gICAgICB1bm9yZGVyZWRMaXN0SFRNTCA9IHJ1bGVOYW1lVG9IVE1MTWFwW1VOT1JERVJFRF9MSVNUX1JVTEVfTkFNRV0sXG4gICAgICB7IHRhZ05hbWU6IHN0cm9uZ1RleHRUYWdOYW1lIH0gPSBzdHJvbmdUZXh0SFRNTCxcbiAgICAgIHsgdGFnTmFtZTogb3JkZXJlZExpc3RUYWdOYW1lIH0gPSBvcmRlcmVkTGlzdEhUTUwsXG4gICAgICB7IHRhZ05hbWU6IHVub3JkZXJlZExpc3RUYWdOYW1lIH0gPSB1bm9yZGVyZWRMaXN0SFRNTDtcblxuY29uc3QgcnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zZWxlY3Rvci9AcnVsZS1uYW1lXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RvciB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIHdoaXRlc3BhY2UpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMud2hpdGVzcGFjZSA9IHdoaXRlc3BhY2U7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBoYXNXaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLndoaXRlc3BhY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHdoaXRlc3BhY2UgPSB3aGl0ZXNwYWNlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgc2VsZWN0b3IgPSBuZXcgU2VsZWN0b3IoY29udGVudCwgd2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yU3RyaW5nKHNlbGVjdG9yU3RyaW5nKSB7XG4gICAgY29uc3QgY29udGVudCA9IHNlbGVjdG9yU3RyaW5nLCAvLy9cbiAgICAgICAgICB3aGl0ZXNwYWNlID0gdHJ1ZSxcbiAgICAgICAgICBzZWxlY3RvciA9IG5ldyBTZWxlY3Rvcihjb250ZW50LCB3aGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiB3aGl0ZXNwYWNlRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZSA9IHJ1bGVOYW1lVGVybWluYWxOb2RlUXVlcnkobm9kZSksXG4gICAgICAgIHdoaXRlc3BhY2UgPSAocnVsZU5hbWVUZXJtaW5hbE5vZGUgIT09IG51bGwpO1xuXG4gIHJldHVybiB3aGl0ZXNwYWNlO1xufVxuXG5mdW5jdGlvbiBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gIGNvbnN0IHJ1bGVOYW1lVGVybWluYWxOb2RlID0gcnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeShub2RlKTtcblxuICBsZXQgb2Zmc2V0ID0gMDtcblxuICBpZiAocnVsZU5hbWVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBydWxlTmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQsIC8vL1xuICAgICAgICAgIGh0bWwgPSBydWxlTmFtZVRvSFRNTE1hcFtydWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIGlmIChodG1sID09PSBudWxsKSB7XG4gICAgICBjb250ZW50ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGh0bWwgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgeyB0YWdOYW1lLCBjbGFzc05hbWUgfSA9IGh0bWw7XG5cbiAgICAgICAgaWYgKHRhZ05hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0ke3RhZ05hbWV9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgICAgICBjYXNlIFNUUk9OR0xZX0VNUEhBU0lTRURfVEVYVF9SVUxFX05BTUU6IHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSA+ICR7c3Ryb25nVGV4dFRhZ05hbWV9YDtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBPUkRFUkVEX0xJU1RfSVRFTV9SVUxFX05BTUU6IHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBgJHtvcmRlcmVkTGlzdFRhZ05hbWV9ID4gJHtjb250ZW50fWA7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgVU5PUkRFUkVEX0xJU1RfSVRFTV9SVUxFX05BTUU6IHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBgJHt1bm9yZGVyZWRMaXN0VGFnTmFtZX0gPiAke2NvbnRlbnR9YDtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fS4ke2NsYXNzTmFtZX1gO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9mZnNldCA9IDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICBjb25zdCByZW1haW5pbmdDb250ZW50ID0gcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0KG5vZGUsIHRva2Vucywgb2Zmc2V0KTtcblxuICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSR7cmVtYWluaW5nQ29udGVudH1gO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iXSwibmFtZXMiOlsiU2VsZWN0b3IiLCJTVFJPTkdfVEVYVF9SVUxFX05BTUUiLCJydWxlTmFtZXMiLCJPUkRFUkVEX0xJU1RfUlVMRV9OQU1FIiwiVU5PUkRFUkVEX0xJU1RfUlVMRV9OQU1FIiwiT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FIiwiVU5PUkRFUkVEX0xJU1RfSVRFTV9SVUxFX05BTUUiLCJTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfUlVMRV9OQU1FIiwic3Ryb25nVGV4dEhUTUwiLCJydWxlTmFtZVRvSFRNTE1hcCIsIm9yZGVyZWRMaXN0SFRNTCIsInVub3JkZXJlZExpc3RIVE1MIiwidGFnTmFtZSIsInN0cm9uZ1RleHRUYWdOYW1lIiwib3JkZXJlZExpc3RUYWdOYW1lIiwidW5vcmRlcmVkTGlzdFRhZ05hbWUiLCJydWxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiY29udGVudCIsIndoaXRlc3BhY2UiLCJnZXRDb250ZW50IiwiaGFzV2hpdGVzcGFjZSIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsImNvbnRlbnRGcm9tTm9kZUFuZFRva2VucyIsIndoaXRlc3BhY2VGcm9tTm9kZSIsInNlbGVjdG9yIiwiZnJvbVNlbGVjdG9yU3RyaW5nIiwic2VsZWN0b3JTdHJpbmciLCJydWxlTmFtZVRlcm1pbmFsTm9kZSIsIkVNUFRZX1NUUklORyIsIm9mZnNldCIsInJ1bGVOYW1lVGVybWluYWxOb2RlQ29udGVudCIsInJ1bGVOYW1lIiwiaHRtbCIsImNsYXNzTmFtZSIsInJlbWFpbmluZ0NvbnRlbnQiLCJyZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBdUJxQkE7OztnQ0FyQndCO3FCQUVuQjt5QkFDRzt1QkFDMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhELElBQVFDLHdCQUt1Q0MsMkJBQVMsQ0FMaERELHVCQUNBRSx5QkFJdUNELDJCQUFTLENBSmhEQyx3QkFDQUMsMkJBR3VDRiwyQkFBUyxDQUhoREUsMEJBQ0FDLDhCQUV1Q0gsMkJBQVMsQ0FGaERHLDZCQUNBQyxnQ0FDdUNKLDJCQUFTLENBRGhESSwrQkFDQUMscUNBQXVD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