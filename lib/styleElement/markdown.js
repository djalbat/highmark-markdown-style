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
    function MarkdownStyleElement(domElement, selector1) {
        _class_call_check(this, MarkdownStyleElement);
        var _this;
        _this = _super.call(this, domElement);
        _this.selector = selector1;
        return _this;
    }
    _create_class(MarkdownStyleElement, [
        {
            key: "getSelector",
            value: function getSelector() {
                return selector;
            }
        },
        {
            key: "update",
            value: function update(markdownStyle) {
                var css = _constants.EMPTY_STRING;
                var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), node = parser.parse(tokens);
                if (node !== null) {
                    var _$markdownStyle = _markdownStyle.default.fromNodeAndTokens(node, tokens);
                    css = _$markdownStyle.asCSS(this.selector);
                }
                this.setCSS(css);
                return css;
            }
        }
    ], [
        {
            key: "fromSelector",
            value: function fromSelector(selector1) {
                var domElement = (0, _styleElement.createDOMElement)(), markdownStyleElement = new MarkdownStyleElement(domElement, selector1);
                return markdownStyleElement;
            }
        }
    ]);
    return MarkdownStyleElement;
}(_styleElement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdHlsZUVsZW1lbnQgZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGUgZnJvbSBcIi4uL21hcmtkb3duU3R5bGVcIjtcbmltcG9ydCBNYXJrZG93blN0eWxlTGV4ZXIgZnJvbSBcIi4uL21hcmtkb3duU3R5bGUvbGV4ZXJcIjtcbmltcG9ydCBNYXJrZG93blN0eWxlUGFyc2VyIGZyb20gXCIuLi9tYXJrZG93blN0eWxlL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVET01FbGVtZW50IH0gZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuXG5jb25zdCBtYXJrZG93blN0eWxlTGV4ZXIgPSBNYXJrZG93blN0eWxlTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duU3R5bGVQYXJzZXIgPSBNYXJrZG93blN0eWxlUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtkb3duU3R5bGVFbGVtZW50IGV4dGVuZHMgU3R5bGVFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBzdXBlcihkb21FbGVtZW50KTtcblxuICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgfVxuXG4gIGdldFNlbGVjdG9yKCkge1xuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxuXG4gIHVwZGF0ZShtYXJrZG93blN0eWxlKSB7XG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IGxleGVyID0gbWFya2Rvd25TdHlsZUxleGVyLFxuICAgICAgICAgIHBhcnNlciA9ICBtYXJrZG93blN0eWxlUGFyc2VyLFxuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93blN0eWxlLCAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWFya2Rvd25TdHlsZSA9IE1hcmtkb3duU3R5bGUuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgY3NzID0gbWFya2Rvd25TdHlsZS5hc0NTUyh0aGlzLnNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG5cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGNyZWF0ZURPTUVsZW1lbnQoKSxcbiAgICAgICAgICBtYXJrZG93blN0eWxlRWxlbWVudCA9IG5ldyBNYXJrZG93blN0eWxlRWxlbWVudChkb21FbGVtZW50LCBzZWxlY3Rvcik7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZUVsZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNYXJrZG93blN0eWxlRWxlbWVudCIsIm1hcmtkb3duU3R5bGVMZXhlciIsIk1hcmtkb3duU3R5bGVMZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25TdHlsZVBhcnNlciIsIk1hcmtkb3duU3R5bGVQYXJzZXIiLCJkb21FbGVtZW50Iiwic2VsZWN0b3IiLCJnZXRTZWxlY3RvciIsInVwZGF0ZSIsIm1hcmtkb3duU3R5bGUiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsIk1hcmtkb3duU3R5bGUiLCJmcm9tTm9kZUFuZFRva2VucyIsImFzQ1NTIiwic2V0Q1NTIiwiZnJvbVNlbGVjdG9yIiwiY3JlYXRlRE9NRWxlbWVudCIsIm1hcmtkb3duU3R5bGVFbGVtZW50IiwiU3R5bGVFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7OztvRUFYSTtvRUFDQzs0REFDSzs2REFDQzt5QkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzdCLElBQU1DLHFCQUFxQkMsY0FBa0IsQ0FBQ0MsV0FBVyxJQUNuREMsc0JBQXNCQyxlQUFtQixDQUFDRixXQUFXO0FBRTVDLElBQUEsQUFBTUgscUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEscUJBQ1BNLFVBQVUsRUFBRUMsU0FBUTtnQ0FEYlA7O2tDQUVYTTtRQUVOLE1BQUtDLFFBQVEsR0FBR0E7OztrQkFKQ1A7O1lBT25CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhO2dCQUNsQixJQUFJQyxNQUFNQyx1QkFBWTtnQkFFdEIsSUFBTUMsUUFBUVosb0JBQ1JhLFNBQVVWLHFCQUNWVyxVQUFVTCxlQUNWTSxTQUFTSCxNQUFNSSxRQUFRLENBQUNGLFVBQ3hCRyxPQUFPSixPQUFPSyxLQUFLLENBQUNIO2dCQUUxQixJQUFJRSxTQUFTLE1BQU07b0JBQ2pCLElBQU1SLGtCQUFnQlUsc0JBQWEsQ0FBQ0MsaUJBQWlCLENBQUNILE1BQU1GO29CQUU1REwsTUFBTUQsZ0JBQWNZLEtBQUssQ0FBQyxJQUFJLENBQUNmLFFBQVE7Z0JBQ3pDO2dCQUVBLElBQUksQ0FBQ2dCLE1BQU0sQ0FBQ1o7Z0JBRVosT0FBT0E7WUFDVDs7OztZQUlPYSxLQUFBQTttQkFBUCxTQUFPQSxhQUFhakIsU0FBUTtnQkFDMUIsSUFBTUQsYUFBYW1CLElBQUFBLDhCQUFnQixLQUM3QkMsdUJBQXVCLElBbkNaMUIscUJBbUNxQ00sWUFBWUM7Z0JBRWxFLE9BQU9tQjtZQUNUOzs7V0F0Q21CMUI7RUFBNkIyQixxQkFBWSJ9