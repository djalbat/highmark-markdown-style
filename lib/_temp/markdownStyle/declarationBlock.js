"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DeclarationBlockMarkdownStyleNode;
    }
});
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../../node/markdownStyle"));
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
var DeclarationBlockMarkdownStyleNode = /*#__PURE__*/ function(MarkdownStyleNode) {
    _inherits(DeclarationBlockMarkdownStyleNode, MarkdownStyleNode);
    var _super = _create_super(DeclarationBlockMarkdownStyleNode);
    function DeclarationBlockMarkdownStyleNode() {
        _class_call_check(this, DeclarationBlockMarkdownStyleNode);
        return _super.apply(this, arguments);
    }
    _create_class(DeclarationBlockMarkdownStyleNode, [
        {
            key: "asCSS",
            value: function asCSS(prepend, context) {
                var childNodesCSS = this.childNodesAsCSS(prepend, context), css = childNodesCSS; ///
                return css;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdownStyle.default.fromRuleNameChildNodesAndAmbiguous(DeclarationBlockMarkdownStyleNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return DeclarationBlockMarkdownStyleNode;
}(_markdownStyle.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9fdGVtcC9tYXJrZG93blN0eWxlL2RlY2xhcmF0aW9uQmxvY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93blN0eWxlTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93blN0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2xhcmF0aW9uQmxvY2tNYXJrZG93blN0eWxlTm9kZSBleHRlbmRzIE1hcmtkb3duU3R5bGVOb2RlIHtcbiAgYXNDU1MocHJlcGVuZCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNDU1MgPSB0aGlzLmNoaWxkTm9kZXNBc0NTUyhwcmVwZW5kLCBjb250ZXh0KSxcbiAgICAgICAgICBjc3MgPSBjaGlsZE5vZGVzQ1NTOyAgLy8vXG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMocnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cykgeyByZXR1cm4gTWFya2Rvd25TdHlsZU5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhEZWNsYXJhdGlvbkJsb2NrTWFya2Rvd25TdHlsZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpOyB9XG59XG5cbiJdLCJuYW1lcyI6WyJEZWNsYXJhdGlvbkJsb2NrTWFya2Rvd25TdHlsZU5vZGUiLCJhc0NTUyIsInByZXBlbmQiLCJjb250ZXh0IiwiY2hpbGROb2Rlc0NTUyIsImNoaWxkTm9kZXNBc0NTUyIsImNzcyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJhbWJpZ3VvdXMiLCJNYXJrZG93blN0eWxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7b0VBRlM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZixJQUFBLEFBQU1BLGtEQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPLEVBQUVDLE9BQU87Z0JBQ3BCLElBQU1DLGdCQUFnQixJQUFJLENBQUNDLGVBQWUsQ0FBQ0gsU0FBU0MsVUFDOUNHLE1BQU1GLGVBQWdCLEdBQUc7Z0JBRS9CLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsbUNBQW1DQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsU0FBUztnQkFBSSxPQUFPQyxzQkFBaUIsQ0FBQ0osa0NBQWtDLENBUnJIUCxtQ0FReUpRLFVBQVVDLFlBQVlDO1lBQVk7OztXQVIzTFY7RUFBMENXLHNCQUFpQiJ9