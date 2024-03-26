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
            key: "fromSelectorString",
            value: function fromSelectorString(selectorString) {
                var content = selectorString, whitespace = true, selector = new Selector(content, whitespace);
                return selector;
            }
        },
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var selector = null;
                var divisionName = null, content = contentFromNodeTokensAndDivisionName(node, tokens, divisionName);
                if (content !== null) {
                    var whitespace = whitespaceFromNode(node);
                    selector = new Selector(content, whitespace);
                }
                return selector;
            }
        },
        {
            key: "fromNodeTokensAndDivisionName",
            value: function fromNodeTokensAndDivisionName(node, tokens, divisionName) {
                var selector = null;
                var content = contentFromNodeTokensAndDivisionName(node, tokens, divisionName);
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
function contentFromNodeTokensAndDivisionName(node, tokens) {
    var divisionName = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
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
                        if (divisionName !== null) {
                            var className1 = divisionName; ///
                            content = "".concat(content, ".").concat(className1);
                        }
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
            var offset = 1, remainingContent = (0, _content.remainingContentFromNodeTokensAndOffset)(node, tokens, offset);
            if (ruleName === DIVISION_RULE_NAME && remainingContent !== _constants.EMPTY_STRING) {
                content = null;
            } else {
                content = "".concat(content).concat(remainingContent);
            }
        }
    } else {
        var offset1 = 0, remainingContent1 = (0, _content.remainingContentFromNodeTokensAndOffset)(node, tokens, offset1);
        content = remainingContent1; ///
    }
    return content;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVzLCBydWxlTmFtZVRvSFRNTE1hcCB9IGZyb20gXCJoaWdobWFyay1tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgeyBESVZJU0lPTl9SVUxFX05BTUUsXG4gICAgICAgIFNUUk9OR19URVhUX1JVTEVfTkFNRSxcbiAgICAgICAgT1JERVJFRF9MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgVU5PUkRFUkVEX0xJU1RfUlVMRV9OQU1FLFxuICAgICAgICBPUkRFUkVEX0xJU1RfSVRFTV9SVUxFX05BTUUsXG4gICAgICAgIFVOT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FLFxuICAgICAgICBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfUlVMRV9OQU1FIH0gPSBydWxlTmFtZXMsXG4gICAgICBzdHJvbmdUZXh0SFRNTCA9IHJ1bGVOYW1lVG9IVE1MTWFwW1NUUk9OR19URVhUX1JVTEVfTkFNRV0sXG4gICAgICBvcmRlcmVkTGlzdEhUTUwgPSBydWxlTmFtZVRvSFRNTE1hcFtPUkRFUkVEX0xJU1RfUlVMRV9OQU1FXSxcbiAgICAgIHVub3JkZXJlZExpc3RIVE1MID0gcnVsZU5hbWVUb0hUTUxNYXBbVU5PUkRFUkVEX0xJU1RfUlVMRV9OQU1FXSxcbiAgICAgIHsgdGFnTmFtZTogc3Ryb25nVGV4dFRhZ05hbWUgfSA9IHN0cm9uZ1RleHRIVE1MLFxuICAgICAgeyB0YWdOYW1lOiBvcmRlcmVkTGlzdFRhZ05hbWUgfSA9IG9yZGVyZWRMaXN0SFRNTCxcbiAgICAgIHsgdGFnTmFtZTogdW5vcmRlcmVkTGlzdFRhZ05hbWUgfSA9IHVub3JkZXJlZExpc3RIVE1MO1xuXG5jb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NlbGVjdG9yL0BydWxlLW5hbWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9yIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgd2hpdGVzcGFjZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy53aGl0ZXNwYWNlID0gd2hpdGVzcGFjZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGhhc1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMud2hpdGVzcGFjZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VsZWN0b3JTdHJpbmcoc2VsZWN0b3JTdHJpbmcpIHtcbiAgICBjb25zdCBjb250ZW50ID0gc2VsZWN0b3JTdHJpbmcsIC8vL1xuICAgICAgICAgIHdoaXRlc3BhY2UgPSB0cnVlLFxuICAgICAgICAgIHNlbGVjdG9yID0gbmV3IFNlbGVjdG9yKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGxldCBzZWxlY3RvciA9IG51bGw7XG5cbiAgICBjb25zdCBkaXZpc2lvbk5hbWUgPSBudWxsLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbU5vZGVUb2tlbnNBbmREaXZpc2lvbk5hbWUobm9kZSwgdG9rZW5zLCBkaXZpc2lvbk5hbWUpO1xuXG4gICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHdoaXRlc3BhY2UgPSB3aGl0ZXNwYWNlRnJvbU5vZGUobm9kZSk7XG5cbiAgICAgIHNlbGVjdG9yID0gbmV3IFNlbGVjdG9yKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZVRva2Vuc0FuZERpdmlzaW9uTmFtZShub2RlLCB0b2tlbnMsIGRpdmlzaW9uTmFtZSkge1xuICAgIGxldCBzZWxlY3RvciA9IG51bGw7XG5cbiAgICBjb25zdCBjb250ZW50ID0gY29udGVudEZyb21Ob2RlVG9rZW5zQW5kRGl2aXNpb25OYW1lKG5vZGUsIHRva2VucywgZGl2aXNpb25OYW1lKTtcblxuICAgIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB3aGl0ZXNwYWNlID0gd2hpdGVzcGFjZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgICBzZWxlY3RvciA9IG5ldyBTZWxlY3Rvcihjb250ZW50LCB3aGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2hpdGVzcGFjZUZyb21Ob2RlKG5vZGUpIHtcbiAgY29uc3QgcnVsZU5hbWVUZXJtaW5hbE5vZGUgPSBydWxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpLFxuICAgICAgICB3aGl0ZXNwYWNlID0gKHJ1bGVOYW1lVGVybWluYWxOb2RlICE9PSBudWxsKTtcblxuICByZXR1cm4gd2hpdGVzcGFjZTtcbn1cblxuZnVuY3Rpb24gY29udGVudEZyb21Ob2RlVG9rZW5zQW5kRGl2aXNpb25OYW1lKG5vZGUsIHRva2VucywgZGl2aXNpb25OYW1lID0gbnVsbCkge1xuICBsZXQgY29udGVudDtcblxuICBjb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZSA9IHJ1bGVOYW1lVGVybWluYWxOb2RlUXVlcnkobm9kZSk7XG5cbiAgaWYgKHJ1bGVOYW1lVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IHJ1bGVOYW1lVGVybWluYWxOb2RlQ29udGVudCA9IHJ1bGVOYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lVGVybWluYWxOb2RlQ29udGVudCwgLy8vXG4gICAgICAgICAgaHRtbCA9IHJ1bGVOYW1lVG9IVE1MTWFwW3J1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgaWYgKGh0bWwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgdGFnTmFtZSwgY2xhc3NOYW1lIH0gPSBodG1sO1xuXG4gICAgICBpZiAodGFnTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0ke3RhZ05hbWV9YDtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgICBjYXNlIERJVklTSU9OX1JVTEVfTkFNRToge1xuICAgICAgICAgIGlmIChkaXZpc2lvbk5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGRpdmlzaW9uTmFtZTsgLy8vXG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fS4ke2NsYXNzTmFtZX1gO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBPUkRFUkVEX0xJU1RfSVRFTV9SVUxFX05BTUU6IHtcbiAgICAgICAgICBjb250ZW50ID0gYCR7b3JkZXJlZExpc3RUYWdOYW1lfSA+ICR7Y29udGVudH1gO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFVOT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29udGVudCA9IGAke3Vub3JkZXJlZExpc3RUYWdOYW1lfSA+ICR7Y29udGVudH1gO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFNUUk9OR0xZX0VNUEhBU0lTRURfVEVYVF9SVUxFX05BTUU6IHtcbiAgICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0gPiAke3N0cm9uZ1RleHRUYWdOYW1lfWA7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fS4ke2NsYXNzTmFtZX1gO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvZmZzZXQgPSAxLFxuICAgICAgICAgICAgcmVtYWluaW5nQ29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnRGcm9tTm9kZVRva2Vuc0FuZE9mZnNldChub2RlLCB0b2tlbnMsIG9mZnNldCk7XG5cbiAgICAgIGlmICgocnVsZU5hbWUgPT09IERJVklTSU9OX1JVTEVfTkFNRSkgJiYgKHJlbWFpbmluZ0NvbnRlbnQgIT09IEVNUFRZX1NUUklORykpIHtcbiAgICAgICAgY29udGVudCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0ke3JlbWFpbmluZ0NvbnRlbnR9YDtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gMCxcbiAgICAgICAgICByZW1haW5pbmdDb250ZW50ID0gcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0KG5vZGUsIHRva2Vucywgb2Zmc2V0KTtcblxuICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50OyAvLy9cbiAgfVxuXG4gIHJldHVybiBjb250ZW50O1xufVxuIl0sIm5hbWVzIjpbIlNlbGVjdG9yIiwiRElWSVNJT05fUlVMRV9OQU1FIiwicnVsZU5hbWVzIiwiU1RST05HX1RFWFRfUlVMRV9OQU1FIiwiT1JERVJFRF9MSVNUX1JVTEVfTkFNRSIsIlVOT1JERVJFRF9MSVNUX1JVTEVfTkFNRSIsIk9SREVSRURfTElTVF9JVEVNX1JVTEVfTkFNRSIsIlVOT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FIiwiU1RST05HTFlfRU1QSEFTSVNFRF9URVhUX1JVTEVfTkFNRSIsInN0cm9uZ1RleHRIVE1MIiwicnVsZU5hbWVUb0hUTUxNYXAiLCJvcmRlcmVkTGlzdEhUTUwiLCJ1bm9yZGVyZWRMaXN0SFRNTCIsInRhZ05hbWUiLCJzdHJvbmdUZXh0VGFnTmFtZSIsIm9yZGVyZWRMaXN0VGFnTmFtZSIsInVub3JkZXJlZExpc3RUYWdOYW1lIiwicnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbnRlbnQiLCJ3aGl0ZXNwYWNlIiwiZ2V0Q29udGVudCIsImhhc1doaXRlc3BhY2UiLCJmcm9tU2VsZWN0b3JTdHJpbmciLCJzZWxlY3RvclN0cmluZyIsInNlbGVjdG9yIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwiZGl2aXNpb25OYW1lIiwiY29udGVudEZyb21Ob2RlVG9rZW5zQW5kRGl2aXNpb25OYW1lIiwid2hpdGVzcGFjZUZyb21Ob2RlIiwiZnJvbU5vZGVUb2tlbnNBbmREaXZpc2lvbk5hbWUiLCJydWxlTmFtZVRlcm1pbmFsTm9kZSIsIkVNUFRZX1NUUklORyIsInJ1bGVOYW1lVGVybWluYWxOb2RlQ29udGVudCIsInJ1bGVOYW1lIiwiaHRtbCIsImNsYXNzTmFtZSIsIm9mZnNldCIsInJlbWFpbmluZ0NvbnRlbnQiLCJyZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUF3QnFCQTs7O2dDQXRCd0I7cUJBRW5CO3lCQUNHO3VCQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsSUFBUUMscUJBTXVDQywy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