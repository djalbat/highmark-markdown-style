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
var _styleElement = /*#__PURE__*/ _interop_require_wildcard(require("../styleElement"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
    function MarkdownStyleElement(domElement, prepend) {
        _class_call_check(this, MarkdownStyleElement);
        var _this;
        _this = _super.call(this, domElement);
        _this.prepend = prepend;
        return _this;
    }
    _create_class(MarkdownStyleElement, [
        {
            key: "getPrepend",
            value: function getPrepend() {
                return this.prepend;
            }
        },
        {
            key: "update",
            value: function update(node, tokens) {
                var css = _constants.EMPTY_STRING;
                // if (node !== null) {
                //   const context = {
                //     tokens
                //   };
                //
                //   css = node.asCSS(this.prepend, context);
                // }
                this.setCSS(css);
            }
        }
    ], [
        {
            key: "fromPrepend",
            value: function fromPrepend(prepend) {
                var domElement = (0, _styleElement.createDOMElement)(), markdownStyleElement = new MarkdownStyleElement(domElement, prepend);
                return markdownStyleElement;
            }
        }
    ]);
    return MarkdownStyleElement;
}(_styleElement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdHlsZUVsZW1lbnQgZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVET01FbGVtZW50IH0gZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZG93blN0eWxlRWxlbWVudCBleHRlbmRzIFN0eWxlRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQsIHByZXBlbmQpIHtcbiAgICBzdXBlcihkb21FbGVtZW50KTtcblxuICAgIHRoaXMucHJlcGVuZCA9IHByZXBlbmQ7XG4gIH1cblxuICBnZXRQcmVwZW5kKCkge1xuICAgIHJldHVybiB0aGlzLnByZXBlbmQ7XG4gIH1cblxuICB1cGRhdGUobm9kZSwgdG9rZW5zKSB7XG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIC8vIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgLy8gICBjb25zdCBjb250ZXh0ID0ge1xuICAgIC8vICAgICB0b2tlbnNcbiAgICAvLyAgIH07XG4gICAgLy9cbiAgICAvLyAgIGNzcyA9IG5vZGUuYXNDU1ModGhpcy5wcmVwZW5kLCBjb250ZXh0KTtcbiAgICAvLyB9XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuICB9XG5cbiAgc3RhdGljIGZyb21QcmVwZW5kKHByZXBlbmQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gY3JlYXRlRE9NRWxlbWVudCgpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVFbGVtZW50ID0gbmV3IE1hcmtkb3duU3R5bGVFbGVtZW50KGRvbUVsZW1lbnQsIHByZXBlbmQpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVFbGVtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTWFya2Rvd25TdHlsZUVsZW1lbnQiLCJkb21FbGVtZW50IiwicHJlcGVuZCIsImdldFByZXBlbmQiLCJ1cGRhdGUiLCJub2RlIiwidG9rZW5zIiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwic2V0Q1NTIiwiZnJvbVByZXBlbmQiLCJjcmVhdGVET01FbGVtZW50IiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJTdHlsZUVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O29FQUxJO3lCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2QsSUFBQSxBQUFNQSxxQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxxQkFDUEMsVUFBVSxFQUFFQyxPQUFPO2dDQURaRjs7a0NBRVhDO1FBRU4sTUFBS0MsT0FBTyxHQUFHQTs7O2tCQUpFRjs7WUFPbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsT0FBTztZQUNyQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ2pCLElBQUlDLE1BQU1DLHVCQUFZO2dCQUV0Qix1QkFBdUI7Z0JBQ3ZCLHNCQUFzQjtnQkFDdEIsYUFBYTtnQkFDYixPQUFPO2dCQUNQLEVBQUU7Z0JBQ0YsNkNBQTZDO2dCQUM3QyxJQUFJO2dCQUVKLElBQUksQ0FBQ0MsTUFBTSxDQUFDRjtZQUNkOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlSLE9BQU87Z0JBQ3hCLElBQU1ELGFBQWFVLElBQUFBLDhCQUFnQixLQUM3QkMsdUJBQXVCLElBM0JaWixxQkEyQnFDQyxZQUFZQztnQkFFbEUsT0FBT1U7WUFDVDs7O1dBOUJtQlo7RUFBNkJhLHFCQUFZIn0=