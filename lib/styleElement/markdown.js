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
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../markdownStyle"));
var _selectorsList = /*#__PURE__*/ _interop_require_default(require("../selectorsList"));
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
    function MarkdownStyleElement(domElement, selectorsList) {
        _class_call_check(this, MarkdownStyleElement);
        var _this;
        _this = _super.call(this, domElement);
        _this.selectorsList = selectorsList;
        return _this;
    }
    _create_class(MarkdownStyleElement, [
        {
            key: "getSelectorsList",
            value: function getSelectorsList() {
                return this.selectorsList;
            }
        },
        {
            key: "update",
            value: function update(markdownStyle) {
                var css = cssFromMarkdownStyleAndSelectorsList(markdownStyle, this.selectorsList);
                this.setCSS(css);
                return css;
            }
        },
        {
            key: "reset",
            value: function reset() {
                var markdownStyle = _constants.EMPTY_STRING;
                this.update(markdownStyle);
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
                var domElement = (0, _styleElement.createDOMElement)(), selectorsList = _selectorsList.default.fromSelectorString(selectorString), markdownStyleElement = new Class(domElement, selectorsList);
                return markdownStyleElement;
            }
        }
    ]);
    return MarkdownStyleElement;
}(_styleElement.default);
function cssFromMarkdownStyleAndSelectorsList(markdownStyle, selectorsList) {
    var css = _constants.EMPTY_STRING;
    var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), node = parser.parse(tokens);
    if (node !== null) {
        var _$markdownStyle = _markdownStyle.default.fromNodeTokensAndSelectorsList(node, tokens, selectorsList);
        css = _$markdownStyle.asCSS();
    }
    return css;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdHlsZUVsZW1lbnQgZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGUgZnJvbSBcIi4uL21hcmtkb3duU3R5bGVcIjtcbmltcG9ydCBTZWxlY3RvcnNMaXN0IGZyb20gXCIuLi9zZWxlY3RvcnNMaXN0XCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZUxleGVyIGZyb20gXCIuLi9tYXJrZG93blN0eWxlL2xleGVyXCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZVBhcnNlciBmcm9tIFwiLi4vbWFya2Rvd25TdHlsZS9wYXJzZXJcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY3JlYXRlRE9NRWxlbWVudCB9IGZyb20gXCIuLi9zdHlsZUVsZW1lbnRcIjtcblxuY29uc3QgbWFya2Rvd25TdHlsZUxleGVyID0gTWFya2Rvd25TdHlsZUxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blN0eWxlUGFyc2VyID0gTWFya2Rvd25TdHlsZVBhcnNlci5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZG93blN0eWxlRWxlbWVudCBleHRlbmRzIFN0eWxlRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQsIHNlbGVjdG9yc0xpc3QpIHtcbiAgICBzdXBlcihkb21FbGVtZW50KTtcblxuICAgIHRoaXMuc2VsZWN0b3JzTGlzdCA9IHNlbGVjdG9yc0xpc3Q7XG4gIH1cblxuICBnZXRTZWxlY3RvcnNMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdG9yc0xpc3Q7XG4gIH1cblxuICB1cGRhdGUobWFya2Rvd25TdHlsZSkge1xuICAgIGNvbnN0IGNzcyA9IGNzc0Zyb21NYXJrZG93blN0eWxlQW5kU2VsZWN0b3JzTGlzdChtYXJrZG93blN0eWxlLCB0aGlzLnNlbGVjdG9yc0xpc3QpO1xuXG4gICAgdGhpcy5zZXRDU1MoY3NzKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy51cGRhdGUobWFya2Rvd25TdHlsZSlcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VsZWN0b3JTdHJpbmcoQ2xhc3MsIHNlbGVjdG9yU3RyaW5nKSB7XG4gICAgaWYgKHNlbGVjdG9yU3RyaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGVjdG9yU3RyaW5nID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IE1hcmtkb3duU3R5bGVFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gY3JlYXRlRE9NRWxlbWVudCgpLFxuICAgICAgICAgIHNlbGVjdG9yc0xpc3QgPSBTZWxlY3RvcnNMaXN0LmZyb21TZWxlY3RvclN0cmluZyhzZWxlY3RvclN0cmluZyksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZUVsZW1lbnQgPSBuZXcgQ2xhc3MoZG9tRWxlbWVudCwgc2VsZWN0b3JzTGlzdCk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZUVsZW1lbnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRTZWxlY3RvcnNMaXN0KG1hcmtkb3duU3R5bGUsIHNlbGVjdG9yc0xpc3QpIHtcbiAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICBjb25zdCBsZXhlciA9IG1hcmtkb3duU3R5bGVMZXhlciwgLy8vXG4gICAgICAgIHBhcnNlciA9ICBtYXJrZG93blN0eWxlUGFyc2VyLCAgLy8vXG4gICAgICAgIGNvbnRlbnQgPSBtYXJrZG93blN0eWxlLCAvLy9cbiAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGUgPSBNYXJrZG93blN0eWxlLmZyb21Ob2RlVG9rZW5zQW5kU2VsZWN0b3JzTGlzdChub2RlLCB0b2tlbnMsIHNlbGVjdG9yc0xpc3QpO1xuXG4gICAgY3NzID0gbWFya2Rvd25TdHlsZS5hc0NTUygpO1xuICB9XG5cbiAgcmV0dXJuIGNzcztcbn1cbiJdLCJuYW1lcyI6WyJNYXJrZG93blN0eWxlRWxlbWVudCIsIm1hcmtkb3duU3R5bGVMZXhlciIsIk1hcmtkb3duU3R5bGVMZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25TdHlsZVBhcnNlciIsIk1hcmtkb3duU3R5bGVQYXJzZXIiLCJkb21FbGVtZW50Iiwic2VsZWN0b3JzTGlzdCIsImdldFNlbGVjdG9yc0xpc3QiLCJ1cGRhdGUiLCJtYXJrZG93blN0eWxlIiwiY3NzIiwiY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRTZWxlY3RvcnNMaXN0Iiwic2V0Q1NTIiwicmVzZXQiLCJFTVBUWV9TVFJJTkciLCJmcm9tU2VsZWN0b3JTdHJpbmciLCJDbGFzcyIsInNlbGVjdG9yU3RyaW5nIiwidW5kZWZpbmVkIiwiY3JlYXRlRE9NRWxlbWVudCIsIlNlbGVjdG9yc0xpc3QiLCJtYXJrZG93blN0eWxlRWxlbWVudCIsIlN0eWxlRWxlbWVudCIsImxleGVyIiwicGFyc2VyIiwiY29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwiTWFya2Rvd25TdHlsZSIsImZyb21Ob2RlVG9rZW5zQW5kU2VsZWN0b3JzTGlzdCIsImFzQ1NTIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7OztvRUFaSTtvRUFDQztvRUFDQTs0REFDSzs2REFDQzt5QkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzdCLElBQU1DLHFCQUFxQkMsY0FBa0IsQ0FBQ0MsV0FBVyxJQUNuREMsc0JBQXNCQyxlQUFtQixDQUFDRixXQUFXO0FBRTVDLElBQUEsQUFBTUgscUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEscUJBQ1BNLFVBQVUsRUFBRUMsYUFBYTtnQ0FEbEJQOztrQ0FFWE07UUFFTixNQUFLQyxhQUFhLEdBQUdBOzs7a0JBSkpQOztZQU9uQlEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxhQUFhO1lBQzNCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGFBQWE7Z0JBQ2xCLElBQU1DLE1BQU1DLHFDQUFxQ0YsZUFBZSxJQUFJLENBQUNILGFBQWE7Z0JBRWxGLElBQUksQ0FBQ00sTUFBTSxDQUFDRjtnQkFFWixPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLGdCQUFnQkssdUJBQVk7Z0JBRWxDLElBQUksQ0FBQ04sTUFBTSxDQUFDQztZQUNkOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsS0FBSyxFQUFFQyxjQUFjO2dCQUM3QyxJQUFJQSxtQkFBbUJDLFdBQVc7b0JBQ2hDRCxpQkFBaUJELE9BQU8sR0FBRztvQkFFM0JBLFFBN0JlakIsc0JBNkJlLEdBQUc7Z0JBQ25DO2dCQUVBLElBQU1NLGFBQWFjLElBQUFBLDhCQUFnQixLQUM3QmIsZ0JBQWdCYyxzQkFBYSxDQUFDTCxrQkFBa0IsQ0FBQ0UsaUJBQ2pESSx1QkFBdUIsSUFBSUwsTUFBTVgsWUFBWUM7Z0JBRW5ELE9BQU9lO1lBQ1Q7OztXQXJDbUJ0QjtFQUE2QnVCLHFCQUFZO0FBd0M5RCxTQUFTWCxxQ0FBcUNGLGFBQWEsRUFBRUgsYUFBYTtJQUN4RSxJQUFJSSxNQUFNSSx1QkFBWTtJQUV0QixJQUFNUyxRQUFRdkIsb0JBQ1J3QixTQUFVckIscUJBQ1ZzQixVQUFVaEIsZUFDVmlCLFNBQVNILE1BQU1JLFFBQVEsQ0FBQ0YsVUFDeEJHLE9BQU9KLE9BQU9LLEtBQUssQ0FBQ0g7SUFFMUIsSUFBSUUsU0FBUyxNQUFNO1FBQ2pCLElBQU1uQixrQkFBZ0JxQixzQkFBYSxDQUFDQyw4QkFBOEIsQ0FBQ0gsTUFBTUYsUUFBUXBCO1FBRWpGSSxNQUFNRCxnQkFBY3VCLEtBQUs7SUFDM0I7SUFFQSxPQUFPdEI7QUFDVCJ9