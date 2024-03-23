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
var _selectors = /*#__PURE__*/ _interop_require_default(require("../selectors"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTZWxlY3RvcnMgZnJvbSBcIi4uL3NlbGVjdG9yc1wiO1xuaW1wb3J0IFN0eWxlRWxlbWVudCBmcm9tIFwiLi4vc3R5bGVFbGVtZW50XCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZSBmcm9tIFwiLi4vbWFya2Rvd25TdHlsZVwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVMZXhlciBmcm9tIFwiLi4vbWFya2Rvd25TdHlsZS9sZXhlclwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVQYXJzZXIgZnJvbSBcIi4uL21hcmtkb3duU3R5bGUvcGFyc2VyXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNyZWF0ZURPTUVsZW1lbnQgfSBmcm9tIFwiLi4vc3R5bGVFbGVtZW50XCI7XG5cbmNvbnN0IG1hcmtkb3duU3R5bGVMZXhlciA9IE1hcmtkb3duU3R5bGVMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZVBhcnNlciA9IE1hcmtkb3duU3R5bGVQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Rvd25TdHlsZUVsZW1lbnQgZXh0ZW5kcyBTdHlsZUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50LCBzZWxlY3RvcnMpIHtcbiAgICBzdXBlcihkb21FbGVtZW50KTtcblxuICAgIHRoaXMuc2VsZWN0b3JzID0gc2VsZWN0b3JzO1xuICB9XG5cbiAgZ2V0U2VsZWN0b3JzKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdG9ycztcbiAgfVxuXG4gIHVwZGF0ZShtYXJrZG93blN0eWxlKSB7XG4gICAgY29uc3QgY3NzID0gY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRTZWxlY3RvcnMobWFya2Rvd25TdHlsZSwgdGhpcy5zZWxlY3RvcnMpO1xuXG4gICAgdGhpcy5zZXRDU1MoY3NzKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy51cGRhdGUobWFya2Rvd25TdHlsZSlcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VsZWN0b3JTdHJpbmcoQ2xhc3MsIHNlbGVjdG9yU3RyaW5nKSB7XG4gICAgaWYgKHNlbGVjdG9yU3RyaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGVjdG9yU3RyaW5nID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IE1hcmtkb3duU3R5bGVFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RvcnMgPSBTZWxlY3RvcnMuZnJvbVNlbGVjdG9yU3RyaW5nKHNlbGVjdG9yU3RyaW5nKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gY3JlYXRlRE9NRWxlbWVudCgpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVFbGVtZW50ID0gbmV3IENsYXNzKGRvbUVsZW1lbnQsIHNlbGVjdG9ycyk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZUVsZW1lbnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRTZWxlY3RvcnMobWFya2Rvd25TdHlsZSwgc2VsZWN0b3JzKSB7XG4gIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgY29uc3QgbGV4ZXIgPSBtYXJrZG93blN0eWxlTGV4ZXIsIC8vL1xuICAgICAgICBwYXJzZXIgPSAgbWFya2Rvd25TdHlsZVBhcnNlciwgIC8vL1xuICAgICAgICBjb250ZW50ID0gbWFya2Rvd25TdHlsZSwgLy8vXG4gICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlID0gTWFya2Rvd25TdHlsZS5mcm9tTm9kZVRva2Vuc0FuZFNlbGVjdG9ycyhub2RlLCB0b2tlbnMsIHNlbGVjdG9ycyk7XG5cbiAgICBjc3MgPSBtYXJrZG93blN0eWxlLmFzQ1NTKCk7XG4gIH1cblxuICByZXR1cm4gY3NzO1xufVxuIl0sIm5hbWVzIjpbIk1hcmtkb3duU3R5bGVFbGVtZW50IiwibWFya2Rvd25TdHlsZUxleGVyIiwiTWFya2Rvd25TdHlsZUxleGVyIiwiZnJvbU5vdGhpbmciLCJtYXJrZG93blN0eWxlUGFyc2VyIiwiTWFya2Rvd25TdHlsZVBhcnNlciIsImRvbUVsZW1lbnQiLCJzZWxlY3RvcnMiLCJnZXRTZWxlY3RvcnMiLCJ1cGRhdGUiLCJtYXJrZG93blN0eWxlIiwiY3NzIiwiY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRTZWxlY3RvcnMiLCJzZXRDU1MiLCJyZXNldCIsIkVNUFRZX1NUUklORyIsImZyb21TZWxlY3RvclN0cmluZyIsIkNsYXNzIiwic2VsZWN0b3JTdHJpbmciLCJ1bmRlZmluZWQiLCJTZWxlY3RvcnMiLCJjcmVhdGVET01FbGVtZW50IiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJTdHlsZUVsZW1lbnQiLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsIk1hcmtkb3duU3R5bGUiLCJmcm9tTm9kZVRva2Vuc0FuZFNlbGVjdG9ycyIsImFzQ1NTIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7OztnRUFaQztvRUFDRztvRUFDQzs0REFDSzs2REFDQzt5QkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzdCLElBQU1DLHFCQUFxQkMsY0FBa0IsQ0FBQ0MsV0FBVyxJQUNuREMsc0JBQXNCQyxlQUFtQixDQUFDRixXQUFXO0FBRTVDLElBQUEsQUFBTUgscUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEscUJBQ1BNLFVBQVUsRUFBRUMsU0FBUztnQ0FEZFA7O2tDQUVYTTtRQUVOLE1BQUtDLFNBQVMsR0FBR0E7OztrQkFKQVA7O1lBT25CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFNBQVM7WUFDdkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsYUFBYTtnQkFDbEIsSUFBTUMsTUFBTUMsaUNBQWlDRixlQUFlLElBQUksQ0FBQ0gsU0FBUztnQkFFMUUsSUFBSSxDQUFDTSxNQUFNLENBQUNGO2dCQUVaLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosZ0JBQWdCSyx1QkFBWTtnQkFFbEMsSUFBSSxDQUFDTixNQUFNLENBQUNDO1lBQ2Q7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxLQUFLLEVBQUVDLGNBQWM7Z0JBQzdDLElBQUlBLG1CQUFtQkMsV0FBVztvQkFDaENELGlCQUFpQkQsT0FBTyxHQUFHO29CQUUzQkEsUUE3QmVqQixzQkE2QmUsR0FBRztnQkFDbkM7Z0JBRUEsSUFBTU8sWUFBWWEsa0JBQVMsQ0FBQ0osa0JBQWtCLENBQUNFLGlCQUN6Q1osYUFBYWUsSUFBQUEsOEJBQWdCLEtBQzdCQyx1QkFBdUIsSUFBSUwsTUFBTVgsWUFBWUM7Z0JBRW5ELE9BQU9lO1lBQ1Q7OztXQXJDbUJ0QjtFQUE2QnVCLHFCQUFZO0FBd0M5RCxTQUFTWCxpQ0FBaUNGLGFBQWEsRUFBRUgsU0FBUztJQUNoRSxJQUFJSSxNQUFNSSx1QkFBWTtJQUV0QixJQUFNUyxRQUFRdkIsb0JBQ1J3QixTQUFVckIscUJBQ1ZzQixVQUFVaEIsZUFDVmlCLFNBQVNILE1BQU1JLFFBQVEsQ0FBQ0YsVUFDeEJHLE9BQU9KLE9BQU9LLEtBQUssQ0FBQ0g7SUFFMUIsSUFBSUUsU0FBUyxNQUFNO1FBQ2pCLElBQU1uQixrQkFBZ0JxQixzQkFBYSxDQUFDQywwQkFBMEIsQ0FBQ0gsTUFBTUYsUUFBUXBCO1FBRTdFSSxNQUFNRCxnQkFBY3VCLEtBQUs7SUFDM0I7SUFFQSxPQUFPdEI7QUFDVCJ9