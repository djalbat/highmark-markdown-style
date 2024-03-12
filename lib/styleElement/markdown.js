"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkdownStyleElement;
    }
});
var _styleElement = /*#__PURE__*/ _interop_require_default(require("../styleElement"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../markdownStyle"));
var _constants = require("../constants");
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
var MarkdownStyleElement = /*#__PURE__*/ function(StyleElement) {
    _inherits(MarkdownStyleElement, StyleElement);
    var _super = _create_super(MarkdownStyleElement);
    function MarkdownStyleElement() {
        _class_call_check(this, MarkdownStyleElement);
        return _super.apply(this, arguments);
    }
    _create_class(MarkdownStyleElement, [
        {
            key: "update",
            value: function update(node, tokens, selector) {
                var css = _constants.EMPTY_STRING;
                if (node !== null) {
                    var markdownStyle = _markdownStyle.default.fromNodeTokensAndSelector(node, tokens, selector);
                    css = markdownStyle.asCSS();
                }
                this.setCSS(css);
                return css;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _styleElement.default.fromNothing(MarkdownStyleElement);
            }
        }
    ]);
    return MarkdownStyleElement;
}(_styleElement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdHlsZUVsZW1lbnQgZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGUgZnJvbSBcIi4uL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZG93blN0eWxlRWxlbWVudCBleHRlbmRzIFN0eWxlRWxlbWVudCB7XG4gIHVwZGF0ZShub2RlLCB0b2tlbnMsIHNlbGVjdG9yKSB7XG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtYXJrZG93blN0eWxlID0gTWFya2Rvd25TdHlsZS5mcm9tTm9kZVRva2Vuc0FuZFNlbGVjdG9yKG5vZGUsIHRva2Vucywgc2VsZWN0b3IpO1xuXG4gICAgICBjc3MgPSBtYXJrZG93blN0eWxlLmFzQ1NTKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRDU1MoY3NzKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBTdHlsZUVsZW1lbnQuZnJvbU5vdGhpbmcoTWFya2Rvd25TdHlsZUVsZW1lbnQpOyB9XG59XG4iXSwibmFtZXMiOlsiTWFya2Rvd25TdHlsZUVsZW1lbnQiLCJ1cGRhdGUiLCJub2RlIiwidG9rZW5zIiwic2VsZWN0b3IiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJtYXJrZG93blN0eWxlIiwiTWFya2Rvd25TdHlsZSIsImZyb21Ob2RlVG9rZW5zQW5kU2VsZWN0b3IiLCJhc0NTUyIsInNldENTUyIsImZyb21Ob3RoaW5nIiwiU3R5bGVFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzttRUFMSTtvRUFDQzt5QkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEscUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLElBQUksRUFBRUMsTUFBTSxFQUFFQyxRQUFRO2dCQUMzQixJQUFJQyxNQUFNQyx1QkFBWTtnQkFFdEIsSUFBSUosU0FBUyxNQUFNO29CQUNqQixJQUFNSyxnQkFBZ0JDLHNCQUFhLENBQUNDLHlCQUF5QixDQUFDUCxNQUFNQyxRQUFRQztvQkFFNUVDLE1BQU1FLGNBQWNHLEtBQUs7Z0JBQzNCO2dCQUVBLElBQUksQ0FBQ0MsTUFBTSxDQUFDTjtnQkFFWixPQUFPQTtZQUNUOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxxQkFBWSxDQUFDRCxXQUFXLENBZm5DWjtZQWUyRDs7O1dBZjNEQTtFQUE2QmEscUJBQVkifQ==