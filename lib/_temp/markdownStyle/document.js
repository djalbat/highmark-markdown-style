"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DocumentMarkdownStyleNode;
    }
});
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../node/markdownStyle"));
var _ruleNameToHTMLMap = /*#__PURE__*/ _interop_require_default(require("../../ruleNameToHTMLMap"));
var _ruleNames = require("../../ruleNames");
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
var html = _ruleNameToHTMLMap.default[_ruleNames.DOCUMENT_RULE_NAME], tagName = html.tagName, className = html.className;
var DocumentMarkdownStyleNode = /*#__PURE__*/ function(MarkdownStyleNode) {
    _inherits(DocumentMarkdownStyleNode, MarkdownStyleNode);
    var _super = _create_super(DocumentMarkdownStyleNode);
    function DocumentMarkdownStyleNode() {
        _class_call_check(this, DocumentMarkdownStyleNode);
        return _super.apply(this, arguments);
    }
    _create_class(DocumentMarkdownStyleNode, [
        {
            key: "asCSS",
            value: function asCSS(prepend, context) {
                prepend = "".concat(prepend, " ").concat(tagName, ".").concat(className); ///
                var childNodesCSS = this.childNodesAsCSS(prepend, context), css = childNodesCSS; ///
                return css;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdownStyle.default.fromRuleNameChildNodesAndAmbiguous(DocumentMarkdownStyleNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return DocumentMarkdownStyleNode;
}(_markdownStyle.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9fdGVtcC9tYXJrZG93blN0eWxlL2RvY3VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25TdHlsZU5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd25TdHlsZVwiO1xuXG5pbXBvcnQgcnVsZU5hbWVUb0hUTUxNYXAgZnJvbSBcIi4uLy4uL3J1bGVOYW1lVG9IVE1MTWFwXCI7XG5cbmltcG9ydCB7IERPQ1VNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgaHRtbCA9IHJ1bGVOYW1lVG9IVE1MTWFwW0RPQ1VNRU5UX1JVTEVfTkFNRV0sXG4gICAgICB7IHRhZ05hbWUsIGNsYXNzTmFtZSB9ID0gaHRtbDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSBleHRlbmRzIE1hcmtkb3duU3R5bGVOb2RlIHtcbiAgYXNDU1MocHJlcGVuZCwgY29udGV4dCkge1xuICAgIHByZXBlbmQgPSBgJHtwcmVwZW5kfSAke3RhZ05hbWV9LiR7Y2xhc3NOYW1lfWA7IC8vL1xuXG4gICAgY29uc3QgY2hpbGROb2Rlc0NTUyA9IHRoaXMuY2hpbGROb2Rlc0FzQ1NTKHByZXBlbmQsIGNvbnRleHQpLFxuICAgICAgICAgIGNzcyA9IGNoaWxkTm9kZXNDU1M7ICAvLy9cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzKSB7IHJldHVybiBNYXJrZG93blN0eWxlTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKERvY3VtZW50TWFya2Rvd25TdHlsZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpOyB9XG59XG4iXSwibmFtZXMiOlsiRG9jdW1lbnRNYXJrZG93blN0eWxlTm9kZSIsImh0bWwiLCJydWxlTmFtZVRvSFRNTE1hcCIsIkRPQ1VNRU5UX1JVTEVfTkFNRSIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJhc0NTUyIsInByZXBlbmQiLCJjb250ZXh0IiwiY2hpbGROb2Rlc0NTUyIsImNoaWxkTm9kZXNBc0NTUyIsImNzcyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJhbWJpZ3VvdXMiLCJNYXJrZG93blN0eWxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7b0VBVFM7d0VBRUE7eUJBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBTUMsT0FBT0MsMEJBQWlCLENBQUNDLDZCQUFrQixDQUFDLEVBQzFDQyxVQUF1QkgsS0FBdkJHLFNBQVNDLFlBQWNKLEtBQWRJO0FBRUYsSUFBQSxBQUFNTCwwQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CTSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsT0FBTyxFQUFFQyxPQUFPO2dCQUNwQkQsVUFBVSxBQUFDLEdBQWFILE9BQVhHLFNBQVEsS0FBY0YsT0FBWEQsU0FBUSxLQUFhLE9BQVZDLFlBQWEsR0FBRztnQkFFbkQsSUFBTUksZ0JBQWdCLElBQUksQ0FBQ0MsZUFBZSxDQUFDSCxTQUFTQyxVQUM5Q0csTUFBTUYsZUFBZ0IsR0FBRztnQkFFL0IsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxtQ0FBbUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxTQUFTO2dCQUFJLE9BQU9DLHNCQUFpQixDQUFDSixrQ0FBa0MsQ0FWckhaLDJCQVVpSmEsVUFBVUMsWUFBWUM7WUFBWTs7O1dBVm5MZjtFQUFrQ2dCLHNCQUFpQiJ9