"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cssFromMarkdownStyleAndSelectors: function() {
        return cssFromMarkdownStyleAndSelectors;
    },
    default: function() {
        return MarkdownStyleElement;
    }
});
var _selectors = /*#__PURE__*/ _interop_require_default(require("../style/selectors"));
var _styleElement = /*#__PURE__*/ _interop_require_wildcard(require("../styleElement"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../markdownStyle"));
var _lexer = /*#__PURE__*/ _interop_require_default(require("../markdownStyle/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("../markdownStyle/parser"));
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
var markdownStyleLexer = _lexer.default.fromNothing(), markdownStyleParser = _parser.default.fromNothing();
var MarkdownStyleElement = /*#__PURE__*/ function(StyleElement) {
    _inherits(MarkdownStyleElement, StyleElement);
    var _super = _create_super(MarkdownStyleElement);
    function MarkdownStyleElement(domElement, selectors) {
        _class_call_check(this, MarkdownStyleElement);
        var _this;
        _this = _super.call(this, domElement);
        _this.selectors = selectors;
        return _this;
    }
    _create_class(MarkdownStyleElement, [
        {
            key: "getSelectors",
            value: function getSelectors() {
                return this.selectors;
            }
        },
        {
            key: "update",
            value: function update(markdownStyle) {
                var css = cssFromMarkdownStyleAndSelectors(markdownStyle, this.selectors);
                this.setCSS(css);
                return css;
            }
        }
    ], [
        {
            key: "fromSelectorString",
            value: function fromSelectorString(Class, selectorString) {
                if (selectorString === undefined) {
                    selectorString = Class; ///
                    Class = MarkdownStyleElement; ///
                }
                var selectors = _selectors.default.fromSelectorString(selectorString), domElement = (0, _styleElement.createDOMElement)(), markdownStyleElement = new Class(domElement, selectors);
                return markdownStyleElement;
            }
        }
    ]);
    return MarkdownStyleElement;
}(_styleElement.default);
function cssFromMarkdownStyleAndSelectors(markdownStyle, selectors) {
    var css = _constants.EMPTY_STRING;
    var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), node = parser.parse(tokens);
    if (node !== null) {
        var _$markdownStyle = _markdownStyle.default.fromNodeTokensAndSelectors(node, tokens, selectors);
        css = _$markdownStyle.asCSS();
    }
    return css;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTZWxlY3RvcnMgZnJvbSBcIi4uL3N0eWxlL3NlbGVjdG9yc1wiO1xuaW1wb3J0IFN0eWxlRWxlbWVudCBmcm9tIFwiLi4vc3R5bGVFbGVtZW50XCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZSBmcm9tIFwiLi4vbWFya2Rvd25TdHlsZVwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVMZXhlciBmcm9tIFwiLi4vbWFya2Rvd25TdHlsZS9sZXhlclwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVQYXJzZXIgZnJvbSBcIi4uL21hcmtkb3duU3R5bGUvcGFyc2VyXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNyZWF0ZURPTUVsZW1lbnQgfSBmcm9tIFwiLi4vc3R5bGVFbGVtZW50XCI7XG5cbmNvbnN0IG1hcmtkb3duU3R5bGVMZXhlciA9IE1hcmtkb3duU3R5bGVMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZVBhcnNlciA9IE1hcmtkb3duU3R5bGVQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Rvd25TdHlsZUVsZW1lbnQgZXh0ZW5kcyBTdHlsZUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50LCBzZWxlY3RvcnMpIHtcbiAgICBzdXBlcihkb21FbGVtZW50KTtcblxuICAgIHRoaXMuc2VsZWN0b3JzID0gc2VsZWN0b3JzO1xuICB9XG5cbiAgZ2V0U2VsZWN0b3JzKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdG9ycztcbiAgfVxuXG4gIHVwZGF0ZShtYXJrZG93blN0eWxlKSB7XG4gICAgY29uc3QgY3NzID0gY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRTZWxlY3RvcnMobWFya2Rvd25TdHlsZSwgdGhpcy5zZWxlY3RvcnMpO1xuXG4gICAgdGhpcy5zZXRDU1MoY3NzKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yU3RyaW5nKENsYXNzLCBzZWxlY3RvclN0cmluZykge1xuICAgIGlmIChzZWxlY3RvclN0cmluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvclN0cmluZyA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBNYXJrZG93blN0eWxlRWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0b3JzID0gU2VsZWN0b3JzLmZyb21TZWxlY3RvclN0cmluZyhzZWxlY3RvclN0cmluZyksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGNyZWF0ZURPTUVsZW1lbnQoKSxcbiAgICAgICAgICBtYXJrZG93blN0eWxlRWxlbWVudCA9IG5ldyBDbGFzcyhkb21FbGVtZW50LCBzZWxlY3RvcnMpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVFbGVtZW50O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjc3NGcm9tTWFya2Rvd25TdHlsZUFuZFNlbGVjdG9ycyhtYXJrZG93blN0eWxlLCBzZWxlY3RvcnMpIHtcbiAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICBjb25zdCBsZXhlciA9IG1hcmtkb3duU3R5bGVMZXhlciwgLy8vXG4gICAgICAgIHBhcnNlciA9ICBtYXJrZG93blN0eWxlUGFyc2VyLCAgLy8vXG4gICAgICAgIGNvbnRlbnQgPSBtYXJrZG93blN0eWxlLCAvLy9cbiAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGUgPSBNYXJrZG93blN0eWxlLmZyb21Ob2RlVG9rZW5zQW5kU2VsZWN0b3JzKG5vZGUsIHRva2Vucywgc2VsZWN0b3JzKTtcblxuICAgIGNzcyA9IG1hcmtkb3duU3R5bGUuYXNDU1MoKTtcbiAgfVxuXG4gIHJldHVybiBjc3M7XG59XG4iXSwibmFtZXMiOlsiY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRTZWxlY3RvcnMiLCJNYXJrZG93blN0eWxlRWxlbWVudCIsIm1hcmtkb3duU3R5bGVMZXhlciIsIk1hcmtkb3duU3R5bGVMZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25TdHlsZVBhcnNlciIsIk1hcmtkb3duU3R5bGVQYXJzZXIiLCJkb21FbGVtZW50Iiwic2VsZWN0b3JzIiwiZ2V0U2VsZWN0b3JzIiwidXBkYXRlIiwibWFya2Rvd25TdHlsZSIsImNzcyIsInNldENTUyIsImZyb21TZWxlY3RvclN0cmluZyIsIkNsYXNzIiwic2VsZWN0b3JTdHJpbmciLCJ1bmRlZmluZWQiLCJTZWxlY3RvcnMiLCJjcmVhdGVET01FbGVtZW50IiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJTdHlsZUVsZW1lbnQiLCJFTVBUWV9TVFJJTkciLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsIk1hcmtkb3duU3R5bGUiLCJmcm9tTm9kZVRva2Vuc0FuZFNlbGVjdG9ycyIsImFzQ1NTIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFnRGdCQSxnQ0FBZ0M7ZUFBaENBOzs7ZUFsQ0tDOzs7Z0VBWkM7b0VBQ0c7b0VBQ0M7NERBQ0s7NkRBQ0M7eUJBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUc3QixJQUFNQyxxQkFBcUJDLGNBQWtCLENBQUNDLFdBQVcsSUFDbkRDLHNCQUFzQkMsZUFBbUIsQ0FBQ0YsV0FBVztBQUU1QyxJQUFBLEFBQU1ILHFDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLHFCQUNQTSxVQUFVLEVBQUVDLFNBQVM7Z0NBRGRQOztrQ0FFWE07UUFFTixNQUFLQyxTQUFTLEdBQUdBOzs7a0JBSkFQOztZQU9uQlEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxTQUFTO1lBQ3ZCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGFBQWE7Z0JBQ2xCLElBQU1DLE1BQU1aLGlDQUFpQ1csZUFBZSxJQUFJLENBQUNILFNBQVM7Z0JBRTFFLElBQUksQ0FBQ0ssTUFBTSxDQUFDRDtnQkFFWixPQUFPQTtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsS0FBSyxFQUFFQyxjQUFjO2dCQUM3QyxJQUFJQSxtQkFBbUJDLFdBQVc7b0JBQ2hDRCxpQkFBaUJELE9BQU8sR0FBRztvQkFFM0JBLFFBdkJlZCxzQkF1QmUsR0FBRztnQkFDbkM7Z0JBRUEsSUFBTU8sWUFBWVUsa0JBQVMsQ0FBQ0osa0JBQWtCLENBQUNFLGlCQUN6Q1QsYUFBYVksSUFBQUEsOEJBQWdCLEtBQzdCQyx1QkFBdUIsSUFBSUwsTUFBTVIsWUFBWUM7Z0JBRW5ELE9BQU9ZO1lBQ1Q7OztXQS9CbUJuQjtFQUE2Qm9CLHFCQUFZO0FBa0N2RCxTQUFTckIsaUNBQWlDVyxhQUFhLEVBQUVILFNBQVM7SUFDdkUsSUFBSUksTUFBTVUsdUJBQVk7SUFFdEIsSUFBTUMsUUFBUXJCLG9CQUNSc0IsU0FBVW5CLHFCQUNWb0IsVUFBVWQsZUFDVmUsU0FBU0gsTUFBTUksUUFBUSxDQUFDRixVQUN4QkcsT0FBT0osT0FBT0ssS0FBSyxDQUFDSDtJQUUxQixJQUFJRSxTQUFTLE1BQU07UUFDakIsSUFBTWpCLGtCQUFnQm1CLHNCQUFhLENBQUNDLDBCQUEwQixDQUFDSCxNQUFNRixRQUFRbEI7UUFFN0VJLE1BQU1ELGdCQUFjcUIsS0FBSztJQUMzQjtJQUVBLE9BQU9wQjtBQUNUIn0=