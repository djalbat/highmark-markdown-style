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
    function MarkdownStyleElement(domElement, selectors1) {
        _class_call_check(this, MarkdownStyleElement);
        var _this;
        _this = _super.call(this, domElement);
        _this.selectors = selectors1;
        return _this;
    }
    _create_class(MarkdownStyleElement, [
        {
            key: "getSelectors",
            value: function getSelectors() {
                return selectors;
            }
        },
        {
            key: "update",
            value: function update(markdownStyle) {
                var css = _constants.EMPTY_STRING;
                var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), node = parser.parse(tokens);
                if (node !== null) {
                    var _$markdownStyle = _markdownStyle.default.fromNodeTokensAndSelectors(node, tokens, this.selectors);
                    css = _$markdownStyle.asCSS();
                }
                this.setCSS(css);
                return css;
            }
        }
    ], [
        {
            key: "fromSelectorsString",
            value: function fromSelectorsString(selectorString) {
                var selectors1 = _selectors.default.fromSelectorsString(selectorString), domElement = (0, _styleElement.createDOMElement)(), markdownStyleElement = new MarkdownStyleElement(domElement, selectors1);
                return markdownStyleElement;
            }
        }
    ]);
    return MarkdownStyleElement;
}(_styleElement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTZWxlY3RvcnMgZnJvbSBcIi4uL3N0eWxlL3NlbGVjdG9yc1wiO1xuaW1wb3J0IFN0eWxlRWxlbWVudCBmcm9tIFwiLi4vc3R5bGVFbGVtZW50XCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZSBmcm9tIFwiLi4vbWFya2Rvd25TdHlsZVwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVMZXhlciBmcm9tIFwiLi4vbWFya2Rvd25TdHlsZS9sZXhlclwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVQYXJzZXIgZnJvbSBcIi4uL21hcmtkb3duU3R5bGUvcGFyc2VyXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNyZWF0ZURPTUVsZW1lbnQgfSBmcm9tIFwiLi4vc3R5bGVFbGVtZW50XCI7XG5cbmNvbnN0IG1hcmtkb3duU3R5bGVMZXhlciA9IE1hcmtkb3duU3R5bGVMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZVBhcnNlciA9IE1hcmtkb3duU3R5bGVQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Rvd25TdHlsZUVsZW1lbnQgZXh0ZW5kcyBTdHlsZUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50LCBzZWxlY3RvcnMpIHtcbiAgICBzdXBlcihkb21FbGVtZW50KTtcblxuICAgIHRoaXMuc2VsZWN0b3JzID0gc2VsZWN0b3JzO1xuICB9XG5cbiAgZ2V0U2VsZWN0b3JzKCkge1xuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICB1cGRhdGUobWFya2Rvd25TdHlsZSkge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBsZXhlciA9IG1hcmtkb3duU3R5bGVMZXhlcixcbiAgICAgICAgICBwYXJzZXIgPSAgbWFya2Rvd25TdHlsZVBhcnNlcixcbiAgICAgICAgICBjb250ZW50ID0gbWFya2Rvd25TdHlsZSwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1hcmtkb3duU3R5bGUgPSBNYXJrZG93blN0eWxlLmZyb21Ob2RlVG9rZW5zQW5kU2VsZWN0b3JzKG5vZGUsIHRva2VucywgdGhpcy5zZWxlY3RvcnMpO1xuXG4gICAgICBjc3MgPSBtYXJrZG93blN0eWxlLmFzQ1NTKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRDU1MoY3NzKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yc1N0cmluZyhzZWxlY3RvclN0cmluZykge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IFNlbGVjdG9ycy5mcm9tU2VsZWN0b3JzU3RyaW5nKHNlbGVjdG9yU3RyaW5nKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gY3JlYXRlRE9NRWxlbWVudCgpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVFbGVtZW50ID0gbmV3IE1hcmtkb3duU3R5bGVFbGVtZW50KGRvbUVsZW1lbnQsIHNlbGVjdG9ycyk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZUVsZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNYXJrZG93blN0eWxlRWxlbWVudCIsIm1hcmtkb3duU3R5bGVMZXhlciIsIk1hcmtkb3duU3R5bGVMZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25TdHlsZVBhcnNlciIsIk1hcmtkb3duU3R5bGVQYXJzZXIiLCJkb21FbGVtZW50Iiwic2VsZWN0b3JzIiwiZ2V0U2VsZWN0b3JzIiwidXBkYXRlIiwibWFya2Rvd25TdHlsZSIsImNzcyIsIkVNUFRZX1NUUklORyIsImxleGVyIiwicGFyc2VyIiwiY29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwiTWFya2Rvd25TdHlsZSIsImZyb21Ob2RlVG9rZW5zQW5kU2VsZWN0b3JzIiwiYXNDU1MiLCJzZXRDU1MiLCJmcm9tU2VsZWN0b3JzU3RyaW5nIiwic2VsZWN0b3JTdHJpbmciLCJTZWxlY3RvcnMiLCJjcmVhdGVET01FbGVtZW50IiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJTdHlsZUVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7O2dFQVpDO29FQUNHO29FQUNDOzREQUNLOzZEQUNDO3lCQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHN0IsSUFBTUMscUJBQXFCQyxjQUFrQixDQUFDQyxXQUFXLElBQ25EQyxzQkFBc0JDLGVBQW1CLENBQUNGLFdBQVc7QUFFNUMsSUFBQSxBQUFNSCxxQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxxQkFDUE0sVUFBVSxFQUFFQyxVQUFTO2dDQURkUDs7a0NBRVhNO1FBRU4sTUFBS0MsU0FBUyxHQUFHQTs7O2tCQUpBUDs7WUFPbkJRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGFBQWE7Z0JBQ2xCLElBQUlDLE1BQU1DLHVCQUFZO2dCQUV0QixJQUFNQyxRQUFRWixvQkFDUmEsU0FBVVYscUJBQ1ZXLFVBQVVMLGVBQ1ZNLFNBQVNILE1BQU1JLFFBQVEsQ0FBQ0YsVUFDeEJHLE9BQU9KLE9BQU9LLEtBQUssQ0FBQ0g7Z0JBRTFCLElBQUlFLFNBQVMsTUFBTTtvQkFDakIsSUFBTVIsa0JBQWdCVSxzQkFBYSxDQUFDQywwQkFBMEIsQ0FBQ0gsTUFBTUYsUUFBUSxJQUFJLENBQUNULFNBQVM7b0JBRTNGSSxNQUFNRCxnQkFBY1ksS0FBSztnQkFDM0I7Z0JBRUEsSUFBSSxDQUFDQyxNQUFNLENBQUNaO2dCQUVaLE9BQU9BO1lBQ1Q7Ozs7WUFFT2EsS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CQyxjQUFjO2dCQUN2QyxJQUFNbEIsYUFBWW1CLGtCQUFTLENBQUNGLG1CQUFtQixDQUFDQyxpQkFDMUNuQixhQUFhcUIsSUFBQUEsOEJBQWdCLEtBQzdCQyx1QkFBdUIsSUFsQ1o1QixxQkFrQ3FDTSxZQUFZQztnQkFFbEUsT0FBT3FCO1lBQ1Q7OztXQXJDbUI1QjtFQUE2QjZCLHFCQUFZIn0=