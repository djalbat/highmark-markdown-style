"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DeclarationMarkdownStyleNode;
    }
});
var _necessary = require("necessary");
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
var first = _necessary.arrayUtilities.first, third = _necessary.arrayUtilities.third;
var DeclarationMarkdownStyleNode = /*#__PURE__*/ function(MarkdownStyleNode) {
    _inherits(DeclarationMarkdownStyleNode, MarkdownStyleNode);
    var _super = _create_super(DeclarationMarkdownStyleNode);
    function DeclarationMarkdownStyleNode() {
        _class_call_check(this, DeclarationMarkdownStyleNode);
        return _super.apply(this, arguments);
    }
    _create_class(DeclarationMarkdownStyleNode, [
        {
            key: "asCSS",
            value: function asCSS(prepend, context) {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), thirdChildNode = third(childNodes), nameTerminalNode = firstChildNode, valuesMarkdownStyleNode = thirdChildNode, nameTerminalNodeContent = nameTerminalNode.getContent(), valuesMarkdownStyleNodeCSS = valuesMarkdownStyleNode.asCSS(prepend, context), css = "  ".concat(nameTerminalNodeContent, ":").concat(valuesMarkdownStyleNodeCSS, ";");
                return css;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdownStyle.default.fromRuleNameChildNodesAndAmbiguous(DeclarationMarkdownStyleNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return DeclarationMarkdownStyleNode;
}(_markdownStyle.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9fdGVtcC9tYXJrZG93blN0eWxlL2RlY2xhcmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hcmtkb3duU3R5bGVOb2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duU3R5bGVcIjtcblxuY29uc3QgeyBmaXJzdCwgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNsYXJhdGlvbk1hcmtkb3duU3R5bGVOb2RlIGV4dGVuZHMgTWFya2Rvd25TdHlsZU5vZGUge1xuICBhc0NTUyhwcmVwZW5kLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGhpcmRDaGlsZE5vZGUgPSB0aGlyZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBuYW1lVGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIHZhbHVlc01hcmtkb3duU3R5bGVOb2RlID0gdGhpcmRDaGlsZE5vZGUsXG4gICAgICAgICAgbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBuYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB2YWx1ZXNNYXJrZG93blN0eWxlTm9kZUNTUyA9IHZhbHVlc01hcmtkb3duU3R5bGVOb2RlLmFzQ1NTKHByZXBlbmQsIGNvbnRleHQpLFxuICAgICAgICAgIGNzcyA9IGAgICR7bmFtZVRlcm1pbmFsTm9kZUNvbnRlbnR9OiR7dmFsdWVzTWFya2Rvd25TdHlsZU5vZGVDU1N9O2A7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMocnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cykgeyByZXR1cm4gTWFya2Rvd25TdHlsZU5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhEZWNsYXJhdGlvbk1hcmtkb3duU3R5bGVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzKTsgfVxufVxuIl0sIm5hbWVzIjpbIkRlY2xhcmF0aW9uTWFya2Rvd25TdHlsZU5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwidGhpcmQiLCJhc0NTUyIsInByZXBlbmQiLCJjb250ZXh0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsInRoaXJkQ2hpbGROb2RlIiwibmFtZVRlcm1pbmFsTm9kZSIsInZhbHVlc01hcmtkb3duU3R5bGVOb2RlIiwibmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwidmFsdWVzTWFya2Rvd25TdHlsZU5vZGVDU1MiLCJjc3MiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzIiwicnVsZU5hbWUiLCJhbWJpZ3VvdXMiLCJNYXJrZG93blN0eWxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTlU7b0VBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBUUMsUUFBaUJDLHlCQUFjLENBQS9CRCxPQUFPRSxRQUFVRCx5QkFBYyxDQUF4QkM7QUFFQSxJQUFBLEFBQU1ILDZDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPLEVBQUVDLE9BQU87Z0JBQ3BCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxpQkFBaUJSLE1BQU1NLGFBQ3ZCRyxpQkFBaUJQLE1BQU1JLGFBQ3ZCSSxtQkFBbUJGLGdCQUNuQkcsMEJBQTBCRixnQkFDMUJHLDBCQUEwQkYsaUJBQWlCRyxVQUFVLElBQ3JEQyw2QkFBNkJILHdCQUF3QlIsS0FBSyxDQUFDQyxTQUFTQyxVQUNwRVUsTUFBTSxBQUFDLEtBQStCRCxPQUEzQkYseUJBQXdCLEtBQThCLE9BQTNCRSw0QkFBMkI7Z0JBRXZFLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsbUNBQW1DQyxRQUFRLEVBQUVYLFVBQVUsRUFBRVksU0FBUztnQkFBSSxPQUFPQyxzQkFBaUIsQ0FBQ0gsa0NBQWtDLENBZHJIakIsOEJBY29Ka0IsVUFBVVgsWUFBWVk7WUFBWTs7O1dBZHRMbkI7RUFBcUNvQixzQkFBaUIifQ==