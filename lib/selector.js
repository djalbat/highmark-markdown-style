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
                var divisionName = null, content = contentFromNodeTokensAndDivisionName(node, tokens, divisionName), whitespace = whitespaceFromNode(node), selector = new Selector(content, whitespace);
                return selector;
            }
        },
        {
            key: "fromNodeTokensAndDivisionName",
            value: function fromNodeTokensAndDivisionName(node, tokens, divisionName) {
                var content = contentFromNodeTokensAndDivisionName(node, tokens, divisionName), whitespace = whitespaceFromNode(node), selector = new Selector(content, whitespace);
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
                    case DIVISION_RULE_NAME:
                        {
                            if (divisionName !== null) {
                                var className1 = divisionName; ///
                                content = "".concat(content, ".").concat(className1);
                            }
                            break;
                        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcnVsZU5hbWVzLCBydWxlTmFtZVRvSFRNTE1hcCB9IGZyb20gXCJoaWdobWFyay1tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmVtYWluaW5nQ29udGVudEZyb21Ob2RlVG9rZW5zQW5kT2Zmc2V0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgeyBESVZJU0lPTl9SVUxFX05BTUUsXG4gICAgICAgIFNUUk9OR19URVhUX1JVTEVfTkFNRSxcbiAgICAgICAgT1JERVJFRF9MSVNUX1JVTEVfTkFNRSxcbiAgICAgICAgVU5PUkRFUkVEX0xJU1RfUlVMRV9OQU1FLFxuICAgICAgICBPUkRFUkVEX0xJU1RfSVRFTV9SVUxFX05BTUUsXG4gICAgICAgIFVOT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FLFxuICAgICAgICBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfUlVMRV9OQU1FIH0gPSBydWxlTmFtZXMsXG4gICAgICBzdHJvbmdUZXh0SFRNTCA9IHJ1bGVOYW1lVG9IVE1MTWFwW1NUUk9OR19URVhUX1JVTEVfTkFNRV0sXG4gICAgICBvcmRlcmVkTGlzdEhUTUwgPSBydWxlTmFtZVRvSFRNTE1hcFtPUkRFUkVEX0xJU1RfUlVMRV9OQU1FXSxcbiAgICAgIHVub3JkZXJlZExpc3RIVE1MID0gcnVsZU5hbWVUb0hUTUxNYXBbVU5PUkRFUkVEX0xJU1RfUlVMRV9OQU1FXSxcbiAgICAgIHsgdGFnTmFtZTogc3Ryb25nVGV4dFRhZ05hbWUgfSA9IHN0cm9uZ1RleHRIVE1MLFxuICAgICAgeyB0YWdOYW1lOiBvcmRlcmVkTGlzdFRhZ05hbWUgfSA9IG9yZGVyZWRMaXN0SFRNTCxcbiAgICAgIHsgdGFnTmFtZTogdW5vcmRlcmVkTGlzdFRhZ05hbWUgfSA9IHVub3JkZXJlZExpc3RIVE1MO1xuXG5jb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NlbGVjdG9yL0BydWxlLW5hbWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9yIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgd2hpdGVzcGFjZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy53aGl0ZXNwYWNlID0gd2hpdGVzcGFjZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGhhc1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMud2hpdGVzcGFjZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VsZWN0b3JTdHJpbmcoc2VsZWN0b3JTdHJpbmcpIHtcbiAgICBjb25zdCBjb250ZW50ID0gc2VsZWN0b3JTdHJpbmcsIC8vL1xuICAgICAgICAgIHdoaXRlc3BhY2UgPSB0cnVlLFxuICAgICAgICAgIHNlbGVjdG9yID0gbmV3IFNlbGVjdG9yKGNvbnRlbnQsIHdoaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRpdmlzaW9uTmFtZSA9IG51bGwsXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tTm9kZVRva2Vuc0FuZERpdmlzaW9uTmFtZShub2RlLCB0b2tlbnMsIGRpdmlzaW9uTmFtZSksXG4gICAgICAgICAgd2hpdGVzcGFjZSA9IHdoaXRlc3BhY2VGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBzZWxlY3RvciA9IG5ldyBTZWxlY3Rvcihjb250ZW50LCB3aGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZVRva2Vuc0FuZERpdmlzaW9uTmFtZShub2RlLCB0b2tlbnMsIGRpdmlzaW9uTmFtZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50RnJvbU5vZGVUb2tlbnNBbmREaXZpc2lvbk5hbWUobm9kZSwgdG9rZW5zLCBkaXZpc2lvbk5hbWUpLFxuICAgICAgICAgIHdoaXRlc3BhY2UgPSB3aGl0ZXNwYWNlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgc2VsZWN0b3IgPSBuZXcgU2VsZWN0b3IoY29udGVudCwgd2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2hpdGVzcGFjZUZyb21Ob2RlKG5vZGUpIHtcbiAgY29uc3QgcnVsZU5hbWVUZXJtaW5hbE5vZGUgPSBydWxlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpLFxuICAgICAgICB3aGl0ZXNwYWNlID0gKHJ1bGVOYW1lVGVybWluYWxOb2RlICE9PSBudWxsKTtcblxuICByZXR1cm4gd2hpdGVzcGFjZTtcbn1cblxuZnVuY3Rpb24gY29udGVudEZyb21Ob2RlVG9rZW5zQW5kRGl2aXNpb25OYW1lKG5vZGUsIHRva2VucywgZGl2aXNpb25OYW1lID0gbnVsbCkge1xuICBsZXQgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICBjb25zdCBydWxlTmFtZVRlcm1pbmFsTm9kZSA9IHJ1bGVOYW1lVGVybWluYWxOb2RlUXVlcnkobm9kZSk7XG5cbiAgbGV0IG9mZnNldCA9IDA7XG5cbiAgaWYgKHJ1bGVOYW1lVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcnVsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gcnVsZU5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50LCAvLy9cbiAgICAgICAgICBodG1sID0gcnVsZU5hbWVUb0hUTUxNYXBbcnVsZU5hbWVdIHx8IG51bGw7XG5cbiAgICBpZiAoaHRtbCA9PT0gbnVsbCkge1xuICAgICAgY29udGVudCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChodG1sICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHsgdGFnTmFtZSwgY2xhc3NOYW1lIH0gPSBodG1sO1xuXG4gICAgICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGVudCA9IGAke2NvbnRlbnR9JHt0YWdOYW1lfWA7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgICAgY2FzZSBESVZJU0lPTl9SVUxFX05BTUU6IHtcbiAgICAgICAgICAgIGlmIChkaXZpc2lvbk5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gZGl2aXNpb25OYW1lOyAvLy9cblxuICAgICAgICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0uJHtjbGFzc05hbWV9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBTVFJPTkdMWV9FTVBIQVNJU0VEX1RFWFRfUlVMRV9OQU1FOiB7XG4gICAgICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0gPiAke3N0cm9uZ1RleHRUYWdOYW1lfWA7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FOiB7XG4gICAgICAgICAgICBjb250ZW50ID0gYCR7b3JkZXJlZExpc3RUYWdOYW1lfSA+ICR7Y29udGVudH1gO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIFVOT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FOiB7XG4gICAgICAgICAgICBjb250ZW50ID0gYCR7dW5vcmRlcmVkTGlzdFRhZ05hbWV9ID4gJHtjb250ZW50fWA7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGFzc05hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb250ZW50ID0gYCR7Y29udGVudH0uJHtjbGFzc05hbWV9YDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvZmZzZXQgPSAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmVtYWluaW5nQ29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnRGcm9tTm9kZVRva2Vuc0FuZE9mZnNldChub2RlLCB0b2tlbnMsIG9mZnNldCk7XG5cbiAgICBjb250ZW50ID0gYCR7Y29udGVudH0ke3JlbWFpbmluZ0NvbnRlbnR9YDtcbiAgfVxuXG4gIHJldHVybiBjb250ZW50O1xufVxuIl0sIm5hbWVzIjpbIlNlbGVjdG9yIiwiRElWSVNJT05fUlVMRV9OQU1FIiwicnVsZU5hbWVzIiwiU1RST05HX1RFWFRfUlVMRV9OQU1FIiwiT1JERVJFRF9MSVNUX1JVTEVfTkFNRSIsIlVOT1JERVJFRF9MSVNUX1JVTEVfTkFNRSIsIk9SREVSRURfTElTVF9JVEVNX1JVTEVfTkFNRSIsIlVOT1JERVJFRF9MSVNUX0lURU1fUlVMRV9OQU1FIiwiU1RST05HTFlfRU1QSEFTSVNFRF9URVhUX1JVTEVfTkFNRSIsInN0cm9uZ1RleHRIVE1MIiwicnVsZU5hbWVUb0hUTUxNYXAiLCJvcmRlcmVkTGlzdEhUTUwiLCJ1bm9yZGVyZWRMaXN0SFRNTCIsInRhZ05hbWUiLCJzdHJvbmdUZXh0VGFnTmFtZSIsIm9yZGVyZWRMaXN0VGFnTmFtZSIsInVub3JkZXJlZExpc3RUYWdOYW1lIiwicnVsZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbnRlbnQiLCJ3aGl0ZXNwYWNlIiwiZ2V0Q29udGVudCIsImhhc1doaXRlc3BhY2UiLCJmcm9tU2VsZWN0b3JTdHJpbmciLCJzZWxlY3RvclN0cmluZyIsInNlbGVjdG9yIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwiZGl2aXNpb25OYW1lIiwiY29udGVudEZyb21Ob2RlVG9rZW5zQW5kRGl2aXNpb25OYW1lIiwid2hpdGVzcGFjZUZyb21Ob2RlIiwiZnJvbU5vZGVUb2tlbnNBbmREaXZpc2lvbk5hbWUiLCJydWxlTmFtZVRlcm1pbmFsTm9kZSIsIkVNUFRZX1NUUklORyIsIm9mZnNldCIsInJ1bGVOYW1lVGVybWluYWxOb2RlQ29udGVudCIsInJ1bGVOYW1lIiwiaHRtbCIsImNsYXNzTmFtZSIsInJlbWFpbmluZ0NvbnRlbnQiLCJyZW1haW5pbmdDb250ZW50RnJvbU5vZGVUb2tlbnNBbmRPZmZzZXQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXdCcUJBOzs7Z0NBdEJ3QjtxQkFFbkI7eUJBQ0c7dUJBQzJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RCxJQUFRQyxxQkFNdUNDLDJCQUFTLENBTmhERCxvQkFDQUUsd0JBS3VDRCwyQkFBUyxDQUxoREMsdUJBQ0FDLHlCQUl1Q0YsMkJBQVMsQ0FKaERFLHdCQUNBQywyQkFHdUNILDJCQUFTLENBSGhERywwQkFDQUMsOEJBRXVDSiwyQkFBUyxDQUZoREksNkJBQ0FDLGdDQUN1Q0wsMkJBQVMsQ0FEaERLLCtCQUNBQyxxQ0FBdUNOLDJCQUFTLENBQWhETSxvQ0FDRkMsaUJBQWlCQyxtQ0FBaUIsQ0FBQ1Asc0JBQXNCLEVBQ3pEUSxrQkFBa0JELG1DQUFpQixDQUFDTix1QkFBdUIsRUFDM0RRLG9CQUFvQkYsbUNBQWlCLENBQUNMLHlCQUF5QixFQUM3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