"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DeclarationsMarkdownStyleNode;
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
var DeclarationsMarkdownStyleNode = /*#__PURE__*/ function(MarkdownStyleNode) {
    _inherits(DeclarationsMarkdownStyleNode, MarkdownStyleNode);
    var _super = _create_super(DeclarationsMarkdownStyleNode);
    function DeclarationsMarkdownStyleNode() {
        _class_call_check(this, DeclarationsMarkdownStyleNode);
        return _super.apply(this, arguments);
    }
    _create_class(DeclarationsMarkdownStyleNode, [
        {
            key: "asCSS",
            value: function asCSS(prepend, context) {
                var childNodesCSS = this.childNodesAsCSS(prepend, context), css = "".concat(prepend, " {\n").concat(childNodesCSS, "\n}\n");
                return css;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdownStyle.default.fromRuleNameChildNodesAndAmbiguous(DeclarationsMarkdownStyleNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return DeclarationsMarkdownStyleNode;
}(_markdownStyle.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9fdGVtcC9tYXJrZG93blN0eWxlL2RlY2xhcmF0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duU3R5bGVOb2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duU3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb25zTWFya2Rvd25TdHlsZU5vZGUgZXh0ZW5kcyBNYXJrZG93blN0eWxlTm9kZSB7XG4gIGFzQ1NTKHByZXBlbmQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzQ1NTID0gdGhpcy5jaGlsZE5vZGVzQXNDU1MocHJlcGVuZCwgY29udGV4dCksXG4gICAgICAgICAgY3NzID0gYCR7cHJlcGVuZH0ge1xuJHtjaGlsZE5vZGVzQ1NTfVxufVxuYDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzKSB7IHJldHVybiBNYXJrZG93blN0eWxlTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKERlY2xhcmF0aW9uc01hcmtkb3duU3R5bGVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzKTsgfVxufVxuIl0sIm5hbWVzIjpbIkRlY2xhcmF0aW9uc01hcmtkb3duU3R5bGVOb2RlIiwiYXNDU1MiLCJwcmVwZW5kIiwiY29udGV4dCIsImNoaWxkTm9kZXNDU1MiLCJjaGlsZE5vZGVzQXNDU1MiLCJjc3MiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwiYW1iaWd1b3VzIiwiTWFya2Rvd25TdHlsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O29FQUZTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsSUFBQSxBQUFNQSw4Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsT0FBTyxFQUFFQyxPQUFPO2dCQUNwQixJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDQyxlQUFlLENBQUNILFNBQVNDLFVBQzlDRyxNQUFNLEFBQUMsR0FDZkYsT0FEaUJGLFNBQVEsUUFDWCxPQUFkRSxlQUFjO2dCQUlaLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsbUNBQW1DQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsU0FBUztnQkFBSSxPQUFPQyxzQkFBaUIsQ0FBQ0osa0NBQWtDLENBWHJIUCwrQkFXcUpRLFVBQVVDLFlBQVlDO1lBQVk7OztXQVh2TFY7RUFBc0NXLHNCQUFpQiJ9