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
var DIVISION_RULE_NAME = _highmarkmarkdown.ruleNames.DIVISION_RULE_NAME, STRONG_TEXT_RULE_NAME = _highmarkmarkdown.ruleNames.STRONG_TEXT_RULE_NAME, ORDERED_LIST_RULE_NAME = _highmarkmarkdown.ruleNames.ORDERED_LIST_RULE_NAME, UNORDERED_LIST_RULE_NAME = _highmarkmarkdown.ruleNames.UNORDERED_LIST_RULE_NAME, ORDERED_LIST_ITEM_RULE_NAME = _highmarkmarkdown.ruleNames.ORDERED_LIST_ITEM_RULE_NAME, UNORDERED_LIST_ITEM_RULE_NAME = _highmarkmarkdown.ruleNames.UNORDERED_LIST_ITEM_RULE_NAME, STRONGLY_EMPHASISED_TEXT_RULE_NAME = _highmarkmarkdown.ruleNames.STRONGLY_EMPHASISED_TEXT_RULE_NAME, strongTextHTML = _highmarkmarkdown.ruleNameToHTMLMap[STRONG_TEXT_RULE_NAME], orderedListHTML = _highmarkmarkdown.ruleNameToHTMLMap[ORDERED_LIST_RULE_NAME], unorderedListHTML = _highmarkmarkdown.ruleNameToHTMLMap[UNORDERED_LIST_RULE_NAME], strongTextTagName = strongTextHTML.tagName, orderedListTagName = orderedListHTML.tagName, unorderedListTagName = unorderedListHTML.tagName;
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
                var selector = null;
                var content = contentFromNodeAndTokens(node, tokens);
                if (content !== null) {
                    var whitespace = whitespaceFromNode(node);
                    selector = new Selector(content, whitespace);
                }
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
    var content;
    var ruleNameTerminalNode = ruleNameTerminalNodeQuery(node);
    if (ruleNameTerminalNode !== null) {
        content = _constants.EMPTY_STRING;
        var ruleNameTerminalNodeContent = ruleNameTerminalNode.getContent(), ruleName = ruleNameTerminalNodeContent, html = _highmarkmarkdown.ruleNameToHTMLMap[ruleName] || null;
        if (html !== null) {
            var tagName = html.tagName, className = html.className;
            if (tagName !== null) {
                content = "".concat(content).concat(tagName);
            }
            switch(ruleName){
                case DIVISION_RULE_NAME:
                    {
                        content = null;
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
                case STRONGLY_EMPHASISED_TEXT_RULE_NAME:
                    {
                        content = "".concat(content, " > ").concat(strongTextTagName);
                        break;
                    }
            }
            if (className !== null) {
                content = "".concat(content, ".").concat(className);
            }
            if (ruleName === DIVISION_RULE_NAME) {
                content = null;
            } else {
                var offset = 1, remainingContent = (0, _content.remainingContentFromNodeTokensAndOffset)(node, tokens, offset);
                content = "".concat(content).concat(remainingContent);
            }
        }
    } else {
        var offset1 = 0, remainingContent1 = (0, _content.remainingContentFromNodeTokensAndOffset)(node, tokens, offset1);
        content = remainingContent1; ///
    }
    return content;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVzLCBydWxlTmFtZVRvSFRNTE1hcCB9IGZyb20gXCJoaWdobWFyay1tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgeyBESVZJU0lPTl9SVUxFX05BTUUsXG4gICAgICAgIFNUUk9OR19URVhUX1JVTEVfTkFNRSxcbiAgICAgICAgT1JERVJFRF9MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgVU5PUkRFUkVEX0xJU1RfUlVMRV9OQU1FLFxuICAgICAgICBPUkRFUkVEX0xJU1RfSVRFTV9SVUxFX05BTUUsXG4gICAgICAgIFVOT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FLFxuICAgICAgICBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfUlVMRV9OQU1FIH0gPSBydWxlTmFtZXMsXG4gICAgICBzdHJvbmdUZXh0SFRNTCA9IHJ1bGVOYW1lVG9IVE1MTWFwW1NUUk9OR19URVhUX1JVTEVfTkFNRV0sXG4gICAgICBvcmRlcmVkTGlzdEhUTUwgPSBydWxlTmFtZVRvSFRNTE1hcFtPUkRFUkVEX0xJU1RfUlVMRV9OQU1FXSxcbiAgICAgIHVub3JkZXJlZExpc3RIVE1MID0gcnVsZU5hbWVUb0hUTUxNYXBbVU5PUkRFUkVEX0xJU1RfUlVMRV9OQU1FXSxcbiAgICAgIHsgdGFnTmFtZTogc3Ryb25nVGV4dFRhZ05hbWUgfSA9IHN0cm9uZ1RleHRIVE1MLFxuICAgICAgeyB0YWdOYW1lOiBvcmRlcmVkTGlzdFRhZ05hbWUgfSA9IG9yZGVyZWRMaXN0SFRNTCxcbiAgICAgIHsgdGFnTmFtZTogdW5vcmRlcmVkTGlzdFRhZ05hbWUgfSA9IHVub3JkZXJlZExpc3RIVE1MO1xuXG5jb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NlbGVjdG9yL0BydWxlLW5hbWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9yIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgd2hpdGVzcGFjZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy53aGl0ZXNwYWNlID0gd2hpdGVzcGFjZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGhhc1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMud2hpdGVzcGFjZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBsZXQgc2VsZWN0b3IgPSBudWxsO1xuXG4gICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHdoaXRlc3BhY2UgPSB3aGl0ZXNwYWNlRnJvbU5vZGUobm9kZSk7XG5cbiAgICAgIHNlbGVjdG9yID0gbmV3IFNlbGVjdG9yKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiB3aGl0ZXNwYWNlRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZSA9IHJ1bGVOYW1lVGVybWluYWxOb2RlUXVlcnkobm9kZSksXG4gICAgICAgIHdoaXRlc3BhY2UgPSAocnVsZU5hbWVUZXJtaW5hbE5vZGUgIT09IG51bGwpO1xuXG4gIHJldHVybiB3aGl0ZXNwYWNlO1xufVxuXG5mdW5jdGlvbiBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBjb250ZW50O1xuXG4gIGNvbnN0IHJ1bGVOYW1lVGVybWluYWxOb2RlID0gcnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeShub2RlKTtcblxuICBpZiAocnVsZU5hbWVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgY29uc3QgcnVsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gcnVsZU5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50LCAvLy9cbiAgICAgICAgICBodG1sID0gcnVsZU5hbWVUb0hUTUxNYXBbcnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICBpZiAoaHRtbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyB0YWdOYW1lLCBjbGFzc05hbWUgfSA9IGh0bWw7XG5cbiAgICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSR7dGFnTmFtZX1gO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgIGNhc2UgRElWSVNJT05fUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29udGVudCA9IG51bGw7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29udGVudCA9IGAke29yZGVyZWRMaXN0VGFnTmFtZX0gPiAke2NvbnRlbnR9YDtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBVTk9SREVSRURfTElTVF9JVEVNX1JVTEVfTkFNRToge1xuICAgICAgICAgIGNvbnRlbnQgPSBgJHt1bm9yZGVyZWRMaXN0VGFnTmFtZX0gPiAke2NvbnRlbnR9YDtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29udGVudCA9IGAke2NvbnRlbnR9ID4gJHtzdHJvbmdUZXh0VGFnTmFtZX1gO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNsYXNzTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0uJHtjbGFzc05hbWV9YDtcbiAgICAgIH1cblxuICAgICAgaWYgKHJ1bGVOYW1lID09PSBESVZJU0lPTl9SVUxFX05BTUUpIHtcbiAgICAgICAgY29udGVudCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSAxLFxuICAgICAgICAgICAgICByZW1haW5pbmdDb250ZW50ID0gcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0KG5vZGUsIHRva2Vucywgb2Zmc2V0KTtcblxuICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0ke3JlbWFpbmluZ0NvbnRlbnR9YDtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gMCxcbiAgICAgICAgICByZW1haW5pbmdDb250ZW50ID0gcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0KG5vZGUsIHRva2Vucywgb2Zmc2V0KTtcblxuICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50OyAvLy9cbiAgfVxuXG4gIHJldHVybiBjb250ZW50O1xufVxuIl0sIm5hbWVzIjpbIlNlbGVjdG9yIiwiRElWSVNJT05fUlVMRV9OQU1FIiwicnVsZU5hbWVzIiwiU1RST05HX1RFWFRfUlVMRV9OQU1FIiwiT1JERVJFRF9MSVNUX1JVTEVfTkFNRSIsIlVOT1JERVJFRF9MSVNUX1JVTEVfTkFNRSIsIk9SREVSRURfTElTVF9JVEVNX1JVTEVfTkFNRSIsIlVOT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FIiwiU1RST05HTFlfRU1QSEFTSVNFRF9URVhUX1JVTEVfTkFNRSIsInN0cm9uZ1RleHRIVE1MIiwicnVsZU5hbWVUb0hUTUxNYXAiLCJvcmRlcmVkTGlzdEhUTUwiLCJ1bm9yZGVyZWRMaXN0SFRNTCIsInRhZ05hbWUiLCJzdHJvbmdUZXh0VGFnTmFtZSIsIm9yZGVyZWRMaXN0VGFnTmFtZSIsInVub3JkZXJlZExpc3RUYWdOYW1lIiwicnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbnRlbnQiLCJ3aGl0ZXNwYWNlIiwiZ2V0Q29udGVudCIsImhhc1doaXRlc3BhY2UiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvciIsImNvbnRlbnRGcm9tTm9kZUFuZFRva2VucyIsIndoaXRlc3BhY2VGcm9tTm9kZSIsInJ1bGVOYW1lVGVybWluYWxOb2RlIiwiRU1QVFlfU1RSSU5HIiwicnVsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwicnVsZU5hbWUiLCJodG1sIiwiY2xhc3NOYW1lIiwib2Zmc2V0IiwicmVtYWluaW5nQ29udGVudCIsInJlbWFpbmluZ0NvbnRlbnRGcm9tTm9kZVRva2Vuc0FuZE9mZnNldCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUF3QnFCQTs7O2dDQXRCd0I7cUJBRW5CO3lCQUNHO3VCQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsSUFBUUMscUJBTXVDQywyQkFBUyxDQU5oREQsb0JBQ0FFLHdCQUt1Q0QsMkJBQVMsQ0FMaERDLHVC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