"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SelectorMarkdownStyleNode;
    }
});
var _necessary = require("necessary");
var _ruleNameToHTMLMap = /*#__PURE__*/ _interop_require_default(require("../../ruleNameToHTMLMap"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../../node/markdownStyle"));
var _constants = require("../../constants");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var first = _necessary.arrayUtilities.first, third = _necessary.arrayUtilities.third;
var SelectorMarkdownStyleNode = /*#__PURE__*/ function(MarkdownStyleNode) {
    _inherits(SelectorMarkdownStyleNode, MarkdownStyleNode);
    var _super = _create_super(SelectorMarkdownStyleNode);
    function SelectorMarkdownStyleNode() {
        _class_call_check(this, SelectorMarkdownStyleNode);
        return _super.apply(this, arguments);
    }
    _create_class(SelectorMarkdownStyleNode, [
        {
            key: "asCSS",
            value: function asCSS(prepend, context) {
                var css = null;
                var ruleName = this.getRuleName(), html = _ruleNameToHTMLMap.default[ruleName] || null;
                if (html !== null) {
                    var tagName = html.tagName;
                    if (tagName !== null) {
                        var className = html.className, pseudoClassCSS = this.pseudoClassAsCSS(prepend, context);
                        css = className === null ? "".concat(prepend, " ").concat(tagName).concat(pseudoClassCSS) : "".concat(prepend, " ").concat(tagName, ".").concat(className).concat(pseudoClassCSS);
                    }
                }
                return css;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), nameTerminalNode = firstChildNode, nameTerminalNodeContent = nameTerminalNode.getContent(), ruleName = nameTerminalNodeContent; ///
                return ruleName;
            }
        },
        {
            key: "pseudoClassAsCSS",
            value: function pseudoClassAsCSS(prepend, context) {
                var pseudoClassCSS = _constants.EMPTY_STRING;
                var childNodes = this.getChildNodes(), childNodesLength = childNodes.length;
                if (childNodesLength > 1) {
                    var thirdChildNode = third(childNodes), pseudoClassMarkdownStyleNode = thirdChildNode, pseudoClassMarkdownStyleNodeCSS = pseudoClassMarkdownStyleNode.asCSS(prepend, context);
                    pseudoClassCSS = pseudoClassMarkdownStyleNodeCSS; ///
                }
                return pseudoClassCSS;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdownStyle.default.fromRuleNameChildNodesAndAmbiguous(SelectorMarkdownStyleNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return SelectorMarkdownStyleNode;
}(_markdownStyle.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9fdGVtcC9tYXJrZG93blN0eWxlL3NlbGVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHJ1bGVOYW1lVG9IVE1MTWFwIGZyb20gXCIuLi8uLi9ydWxlTmFtZVRvSFRNTE1hcFwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVOb2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZpcnN0LCB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9yTWFya2Rvd25TdHlsZU5vZGUgZXh0ZW5kcyBNYXJrZG93blN0eWxlTm9kZSB7XG4gIGFzQ1NTKHByZXBlbmQsIGNvbnRleHQpIHtcbiAgICBsZXQgY3NzID0gbnVsbDtcblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGh0bWwgPSBydWxlTmFtZVRvSFRNTE1hcFtydWxlTmFtZV0gfHwgbnVsbDtcblxuICAgIGlmIChodG1sICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHRhZ05hbWUgfSA9IGh0bWw7XG5cbiAgICAgIGlmICh0YWdOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBodG1sLFxuICAgICAgICAgICAgICBwc2V1ZG9DbGFzc0NTUyA9IHRoaXMucHNldWRvQ2xhc3NBc0NTUyhwcmVwZW5kLCBjb250ZXh0KTtcblxuICAgICAgICBjc3MgPSAoY2xhc3NOYW1lID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBgJHtwcmVwZW5kfSAke3RhZ05hbWV9JHtwc2V1ZG9DbGFzc0NTU31gIDpcbiAgICAgICAgICAgICAgICAgYCR7cHJlcGVuZH0gJHt0YWdOYW1lfS4ke2NsYXNzTmFtZX0ke3BzZXVkb0NsYXNzQ1NTfWA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIG5hbWVUZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gbmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgcnVsZU5hbWUgPSBuYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBwc2V1ZG9DbGFzc0FzQ1NTKHByZXBlbmQsIGNvbnRleHQpIHtcbiAgICBsZXQgcHNldWRvQ2xhc3NDU1MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCB0aGlyZENoaWxkTm9kZSA9IHRoaXJkKGNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgcHNldWRvQ2xhc3NNYXJrZG93blN0eWxlTm9kZSA9IHRoaXJkQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBwc2V1ZG9DbGFzc01hcmtkb3duU3R5bGVOb2RlQ1NTID0gcHNldWRvQ2xhc3NNYXJrZG93blN0eWxlTm9kZS5hc0NTUyhwcmVwZW5kLCBjb250ZXh0KTtcblxuICAgICAgcHNldWRvQ2xhc3NDU1MgPSBwc2V1ZG9DbGFzc01hcmtkb3duU3R5bGVOb2RlQ1NTOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gcHNldWRvQ2xhc3NDU1M7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzKSB7IHJldHVybiBNYXJrZG93blN0eWxlTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKFNlbGVjdG9yTWFya2Rvd25TdHlsZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpOyB9XG59XG4iXSwibmFtZXMiOlsiU2VsZWN0b3JNYXJrZG93blN0eWxlTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJ0aGlyZCIsImFzQ1NTIiwicHJlcGVuZCIsImNvbnRleHQiLCJjc3MiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiaHRtbCIsInJ1bGVOYW1lVG9IVE1MTWFwIiwidGFnTmFtZSIsImNsYXNzTmFtZSIsInBzZXVkb0NsYXNzQ1NTIiwicHNldWRvQ2xhc3NBc0NTUyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJuYW1lVGVybWluYWxOb2RlIiwibmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiRU1QVFlfU1RSSU5HIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInRoaXJkQ2hpbGROb2RlIiwicHNldWRvQ2xhc3NNYXJrZG93blN0eWxlTm9kZSIsInBzZXVkb0NsYXNzTWFya2Rvd25TdHlsZU5vZGVDU1MiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzIiwiYW1iaWd1b3VzIiwiTWFya2Rvd25TdHlsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O3lCQVRVO3dFQUVEO29FQUNBO3lCQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQVFDLFFBQWlCQyx5QkFBYyxDQUEvQkQsT0FBT0UsUUFBVUQseUJBQWMsQ0FBeEJDO0FBRUEsSUFBQSxBQUFNSCwwQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CSSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsT0FBTyxFQUFFQyxPQUFPO2dCQUNwQixJQUFJQyxNQUFNO2dCQUVWLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCQyxPQUFPQywwQkFBaUIsQ0FBQ0gsU0FBUyxJQUFJO2dCQUU1QyxJQUFJRSxTQUFTLE1BQU07b0JBQ2pCLElBQU0sQUFBRUUsVUFBWUYsS0FBWkU7b0JBRVIsSUFBSUEsWUFBWSxNQUFNO3dCQUNwQixJQUFNLEFBQUVDLFlBQWNILEtBQWRHLFdBQ0ZDLGlCQUFpQixJQUFJLENBQUNDLGdCQUFnQixDQUFDVixTQUFTQzt3QkFFdERDLE1BQU0sQUFBQ00sY0FBYyxPQUNkLEFBQUMsR0FBYUQsT0FBWFAsU0FBUSxLQUFhUyxPQUFWRixTQUF5QixPQUFmRSxrQkFDdEIsQUFBQyxHQUFhRixPQUFYUCxTQUFRLEtBQWNRLE9BQVhELFNBQVEsS0FBZUUsT0FBWkQsV0FBMkIsT0FBZkM7b0JBQ2hEO2dCQUNGO2dCQUVBLE9BQU9QO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTU8sYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGlCQUFpQmpCLE1BQU1lLGFBQ3ZCRyxtQkFBbUJELGdCQUNuQkUsMEJBQTBCRCxpQkFBaUJFLFVBQVUsSUFDckRiLFdBQVdZLHlCQUF5QixHQUFHO2dCQUU3QyxPQUFPWjtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQlYsT0FBTyxFQUFFQyxPQUFPO2dCQUMvQixJQUFJUSxpQkFBaUJRLHVCQUFZO2dCQUVqQyxJQUFNTixhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQk0sbUJBQW1CUCxXQUFXUSxNQUFNO2dCQUUxQyxJQUFJRCxtQkFBbUIsR0FBRztvQkFDeEIsSUFBTUUsaUJBQWlCdEIsTUFBTWEsYUFDdkJVLCtCQUErQkQsZ0JBQy9CRSxrQ0FBa0NELDZCQUE2QnRCLEtBQUssQ0FBQ0MsU0FBU0M7b0JBRXBGUSxpQkFBaUJhLGlDQUFpQyxHQUFHO2dCQUN2RDtnQkFFQSxPQUFPYjtZQUNUOzs7O1lBRU9jLEtBQUFBO21CQUFQLFNBQU9BLG1DQUFtQ3BCLFFBQVEsRUFBRVEsVUFBVSxFQUFFYSxTQUFTO2dCQUFJLE9BQU9DLHNCQUFpQixDQUFDRixrQ0FBa0MsQ0FsRHJINUIsMkJBa0RpSlEsVUFBVVEsWUFBWWE7WUFBWTs7O1dBbERuTDdCO0VBQWtDOEIsc0JBQWlCIn0=