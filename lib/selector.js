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
                var divisionNames = null, content = contentFromNodeTokensAndDivisionNames(node, tokens, divisionNames);
                if (content !== null) {
                    var whitespace = whitespaceFromNode(node);
                    selector = new Selector(content, whitespace);
                }
                return selector;
            }
        },
        {
            key: "fromNodeTokensAndDivisionNames",
            value: function fromNodeTokensAndDivisionNames(node, tokens, divisionNames) {
                var selector = null;
                var content = contentFromNodeTokensAndDivisionNames(node, tokens, divisionNames);
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
function contentFromNodeTokensAndDivisionNames(node, tokens) {
    var divisionNames = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
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
                        if (divisionNames !== null) {
                            divisionNames.forEach(function(divisionName) {
                                var className = divisionName; ///
                                content = "".concat(content, ".").concat(className);
                            });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVzLCBydWxlTmFtZVRvSFRNTE1hcCB9IGZyb20gXCJoaWdobWFyay1tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgeyBESVZJU0lPTl9SVUxFX05BTUUsXG4gICAgICAgIFNUUk9OR19URVhUX1JVTEVfTkFNRSxcbiAgICAgICAgT1JERVJFRF9MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgVU5PUkRFUkVEX0xJU1RfUlVMRV9OQU1FLFxuICAgICAgICBPUkRFUkVEX0xJU1RfSVRFTV9SVUxFX05BTUUsXG4gICAgICAgIFVOT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FLFxuICAgICAgICBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfUlVMRV9OQU1FIH0gPSBydWxlTmFtZXMsXG4gICAgICBzdHJvbmdUZXh0SFRNTCA9IHJ1bGVOYW1lVG9IVE1MTWFwW1NUUk9OR19URVhUX1JVTEVfTkFNRV0sXG4gICAgICBvcmRlcmVkTGlzdEhUTUwgPSBydWxlTmFtZVRvSFRNTE1hcFtPUkRFUkVEX0xJU1RfUlVMRV9OQU1FXSxcbiAgICAgIHVub3JkZXJlZExpc3RIVE1MID0gcnVsZU5hbWVUb0hUTUxNYXBbVU5PUkRFUkVEX0xJU1RfUlVMRV9OQU1FXSxcbiAgICAgIHsgdGFnTmFtZTogc3Ryb25nVGV4dFRhZ05hbWUgfSA9IHN0cm9uZ1RleHRIVE1MLFxuICAgICAgeyB0YWdOYW1lOiBvcmRlcmVkTGlzdFRhZ05hbWUgfSA9IG9yZGVyZWRMaXN0SFRNTCxcbiAgICAgIHsgdGFnTmFtZTogdW5vcmRlcmVkTGlzdFRhZ05hbWUgfSA9IHVub3JkZXJlZExpc3RIVE1MO1xuXG5jb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NlbGVjdG9yL0BydWxlLW5hbWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9yIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgd2hpdGVzcGFjZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy53aGl0ZXNwYWNlID0gd2hpdGVzcGFjZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGhhc1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMud2hpdGVzcGFjZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VsZWN0b3JTdHJpbmcoc2VsZWN0b3JTdHJpbmcpIHtcbiAgICBjb25zdCBjb250ZW50ID0gc2VsZWN0b3JTdHJpbmcsIC8vL1xuICAgICAgICAgIHdoaXRlc3BhY2UgPSB0cnVlLFxuICAgICAgICAgIHNlbGVjdG9yID0gbmV3IFNlbGVjdG9yKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGxldCBzZWxlY3RvciA9IG51bGw7XG5cbiAgICBjb25zdCBkaXZpc2lvbk5hbWVzID0gbnVsbCxcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEZyb21Ob2RlVG9rZW5zQW5kRGl2aXNpb25OYW1lcyhub2RlLCB0b2tlbnMsIGRpdmlzaW9uTmFtZXMpO1xuXG4gICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHdoaXRlc3BhY2UgPSB3aGl0ZXNwYWNlRnJvbU5vZGUobm9kZSk7XG5cbiAgICAgIHNlbGVjdG9yID0gbmV3IFNlbGVjdG9yKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZVRva2Vuc0FuZERpdmlzaW9uTmFtZXMobm9kZSwgdG9rZW5zLCBkaXZpc2lvbk5hbWVzKSB7XG4gICAgbGV0IHNlbGVjdG9yID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbU5vZGVUb2tlbnNBbmREaXZpc2lvbk5hbWVzKG5vZGUsIHRva2VucywgZGl2aXNpb25OYW1lcyk7XG5cbiAgICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgd2hpdGVzcGFjZSA9IHdoaXRlc3BhY2VGcm9tTm9kZShub2RlKTtcblxuICAgICAgc2VsZWN0b3IgPSBuZXcgU2VsZWN0b3IoY29udGVudCwgd2hpdGVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdoaXRlc3BhY2VGcm9tTm9kZShub2RlKSB7XG4gIGNvbnN0IHJ1bGVOYW1lVGVybWluYWxOb2RlID0gcnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgd2hpdGVzcGFjZSA9IChydWxlTmFtZVRlcm1pbmFsTm9kZSAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHdoaXRlc3BhY2U7XG59XG5cbmZ1bmN0aW9uIGNvbnRlbnRGcm9tTm9kZVRva2Vuc0FuZERpdmlzaW9uTmFtZXMobm9kZSwgdG9rZW5zLCBkaXZpc2lvbk5hbWVzID0gbnVsbCkge1xuICBsZXQgY29udGVudDtcblxuICBjb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZSA9IHJ1bGVOYW1lVGVybWluYWxOb2RlUXVlcnkobm9kZSk7XG5cbiAgaWYgKHJ1bGVOYW1lVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IHJ1bGVOYW1lVGVybWluYWxOb2RlQ29udGVudCA9IHJ1bGVOYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lVGVybWluYWxOb2RlQ29udGVudCwgLy8vXG4gICAgICAgICAgaHRtbCA9IHJ1bGVOYW1lVG9IVE1MTWFwW3J1bGVOYW1lXSB8fCBudWxsO1xuXG4gICAgaWYgKGh0bWwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgdGFnTmFtZSwgY2xhc3NOYW1lIH0gPSBodG1sO1xuXG4gICAgICBpZiAodGFnTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0ke3RhZ05hbWV9YDtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgICBjYXNlIERJVklTSU9OX1JVTEVfTkFNRToge1xuICAgICAgICAgIGlmIChkaXZpc2lvbk5hbWVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBkaXZpc2lvbk5hbWVzLmZvckVhY2goKGRpdmlzaW9uTmFtZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBkaXZpc2lvbk5hbWU7IC8vL1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fS4ke2NsYXNzTmFtZX1gO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIE9SREVSRURfTElTVF9JVEVNX1JVTEVfTkFNRToge1xuICAgICAgICAgIGNvbnRlbnQgPSBgJHtvcmRlcmVkTGlzdFRhZ05hbWV9ID4gJHtjb250ZW50fWA7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgVU5PUkRFUkVEX0xJU1RfSVRFTV9SVUxFX05BTUU6IHtcbiAgICAgICAgICBjb250ZW50ID0gYCR7dW5vcmRlcmVkTGlzdFRhZ05hbWV9ID4gJHtjb250ZW50fWA7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgU1RST05HTFlfRU1QSEFTSVNFRF9URVhUX1JVTEVfTkFNRToge1xuICAgICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSA+ICR7c3Ryb25nVGV4dFRhZ05hbWV9YDtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29udGVudCA9IGAke2NvbnRlbnR9LiR7Y2xhc3NOYW1lfWA7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9mZnNldCA9IDEsXG4gICAgICAgICAgICByZW1haW5pbmdDb250ZW50ID0gcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0KG5vZGUsIHRva2Vucywgb2Zmc2V0KTtcblxuICAgICAgaWYgKChydWxlTmFtZSA9PT0gRElWSVNJT05fUlVMRV9OQU1FKSAmJiAocmVtYWluaW5nQ29udGVudCAhPT0gRU1QVFlfU1RSSU5HKSkge1xuICAgICAgICBjb250ZW50ID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnQgPSBgJHtjb250ZW50fSR7cmVtYWluaW5nQ29udGVudH1gO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBvZmZzZXQgPSAwLFxuICAgICAgICAgIHJlbWFpbmluZ0NvbnRlbnQgPSByZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQobm9kZSwgdG9rZW5zLCBvZmZzZXQpO1xuXG4gICAgY29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iXSwibmFtZXMiOlsiU2VsZWN0b3IiLCJESVZJU0lPTl9SVUxFX05BTUUiLCJydWxlTmFtZXMiLCJTVFJPTkdfVEVYVF9SVUxFX05BTUUiLCJPUkRFUkVEX0xJU1RfUlVMRV9OQU1FIiwiVU5PUkRFUkVEX0xJU1RfUlVMRV9OQU1FIiwiT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FIiwiVU5PUkRFUkVEX0xJU1RfSVRFTV9SVUxFX05BTUUiLCJTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfUlVMRV9OQU1FIiwic3Ryb25nVGV4dEhUTUwiLCJydWxlTmFtZVRvSFRNTE1hcCIsIm9yZGVyZWRMaXN0SFRNTCIsInVub3JkZXJlZExpc3RIVE1MIiwidGFnTmFtZSIsInN0cm9uZ1RleHRUYWdOYW1lIiwib3JkZXJlZExpc3RUYWdOYW1lIiwidW5vcmRlcmVkTGlzdFRhZ05hbWUiLCJydWxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiY29udGVudCIsIndoaXRlc3BhY2UiLCJnZXRDb250ZW50IiwiaGFzV2hpdGVzcGFjZSIsImZyb21TZWxlY3RvclN0cmluZyIsInNlbGVjdG9yU3RyaW5nIiwic2VsZWN0b3IiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJkaXZpc2lvbk5hbWVzIiwiY29udGVudEZyb21Ob2RlVG9rZW5zQW5kRGl2aXNpb25OYW1lcyIsIndoaXRlc3BhY2VGcm9tTm9kZSIsImZyb21Ob2RlVG9rZW5zQW5kRGl2aXNpb25OYW1lcyIsInJ1bGVOYW1lVGVybWluYWxOb2RlIiwiRU1QVFlfU1RSSU5HIiwicnVsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwicnVsZU5hbWUiLCJodG1sIiwiY2xhc3NOYW1lIiwiZm9yRWFjaCIsImRpdmlzaW9uTmFtZSIsIm9mZnNldCIsInJlbWFpbmluZ0NvbnRlbnQiLCJyZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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