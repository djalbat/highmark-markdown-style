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
                    var _$markdownStyle = _markdownStyle.default.fromNodeAndTokens(node, tokens);
                    css = _$markdownStyle.asCSS(this.selectors);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTZWxlY3RvcnMgZnJvbSBcIi4uL3N0eWxlL3NlbGVjdG9yc1wiO1xuaW1wb3J0IFN0eWxlRWxlbWVudCBmcm9tIFwiLi4vc3R5bGVFbGVtZW50XCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZSBmcm9tIFwiLi4vbWFya2Rvd25TdHlsZVwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVMZXhlciBmcm9tIFwiLi4vbWFya2Rvd25TdHlsZS9sZXhlclwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVQYXJzZXIgZnJvbSBcIi4uL21hcmtkb3duU3R5bGUvcGFyc2VyXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNyZWF0ZURPTUVsZW1lbnQgfSBmcm9tIFwiLi4vc3R5bGVFbGVtZW50XCI7XG5cbmNvbnN0IG1hcmtkb3duU3R5bGVMZXhlciA9IE1hcmtkb3duU3R5bGVMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZVBhcnNlciA9IE1hcmtkb3duU3R5bGVQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Rvd25TdHlsZUVsZW1lbnQgZXh0ZW5kcyBTdHlsZUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50LCBzZWxlY3RvcnMpIHtcbiAgICBzdXBlcihkb21FbGVtZW50KTtcblxuICAgIHRoaXMuc2VsZWN0b3JzID0gc2VsZWN0b3JzO1xuICB9XG5cbiAgZ2V0U2VsZWN0b3JzKCkge1xuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICB1cGRhdGUobWFya2Rvd25TdHlsZSkge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBsZXhlciA9IG1hcmtkb3duU3R5bGVMZXhlcixcbiAgICAgICAgICBwYXJzZXIgPSAgbWFya2Rvd25TdHlsZVBhcnNlcixcbiAgICAgICAgICBjb250ZW50ID0gbWFya2Rvd25TdHlsZSwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1hcmtkb3duU3R5bGUgPSBNYXJrZG93blN0eWxlLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgIGNzcyA9IG1hcmtkb3duU3R5bGUuYXNDU1ModGhpcy5zZWxlY3RvcnMpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0Q1NTKGNzcyk7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TZWxlY3RvcnNTdHJpbmcoc2VsZWN0b3JTdHJpbmcpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBTZWxlY3RvcnMuZnJvbVNlbGVjdG9yc1N0cmluZyhzZWxlY3RvclN0cmluZyksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGNyZWF0ZURPTUVsZW1lbnQoKSxcbiAgICAgICAgICBtYXJrZG93blN0eWxlRWxlbWVudCA9IG5ldyBNYXJrZG93blN0eWxlRWxlbWVudChkb21FbGVtZW50LCBzZWxlY3RvcnMpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVFbGVtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTWFya2Rvd25TdHlsZUVsZW1lbnQiLCJtYXJrZG93blN0eWxlTGV4ZXIiLCJNYXJrZG93blN0eWxlTGV4ZXIiLCJmcm9tTm90aGluZyIsIm1hcmtkb3duU3R5bGVQYXJzZXIiLCJNYXJrZG93blN0eWxlUGFyc2VyIiwiZG9tRWxlbWVudCIsInNlbGVjdG9ycyIsImdldFNlbGVjdG9ycyIsInVwZGF0ZSIsIm1hcmtkb3duU3R5bGUiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsIk1hcmtkb3duU3R5bGUiLCJmcm9tTm9kZUFuZFRva2VucyIsImFzQ1NTIiwic2V0Q1NTIiwiZnJvbVNlbGVjdG9yc1N0cmluZyIsInNlbGVjdG9yU3RyaW5nIiwiU2VsZWN0b3JzIiwiY3JlYXRlRE9NRWxlbWVudCIsIm1hcmtkb3duU3R5bGVFbGVtZW50IiwiU3R5bGVFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7OztnRUFaQztvRUFDRztvRUFDQzs0REFDSzs2REFDQzt5QkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzdCLElBQU1DLHFCQUFxQkMsY0FBa0IsQ0FBQ0MsV0FBVyxJQUNuREMsc0JBQXNCQyxlQUFtQixDQUFDRixXQUFXO0FBRTVDLElBQUEsQUFBTUgscUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEscUJBQ1BNLFVBQVUsRUFBRUMsVUFBUztnQ0FEZFA7O2tDQUVYTTtRQUVOLE1BQUtDLFNBQVMsR0FBR0E7OztrQkFKQVA7O1lBT25CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhO2dCQUNsQixJQUFJQyxNQUFNQyx1QkFBWTtnQkFFdEIsSUFBTUMsUUFBUVosb0JBQ1JhLFNBQVVWLHFCQUNWVyxVQUFVTCxlQUNWTSxTQUFTSCxNQUFNSSxRQUFRLENBQUNGLFVBQ3hCRyxPQUFPSixPQUFPSyxLQUFLLENBQUNIO2dCQUUxQixJQUFJRSxTQUFTLE1BQU07b0JBQ2pCLElBQU1SLGtCQUFnQlUsc0JBQWEsQ0FBQ0MsaUJBQWlCLENBQUNILE1BQU1GO29CQUU1REwsTUFBTUQsZ0JBQWNZLEtBQUssQ0FBQyxJQUFJLENBQUNmLFNBQVM7Z0JBQzFDO2dCQUVBLElBQUksQ0FBQ2dCLE1BQU0sQ0FBQ1o7Z0JBRVosT0FBT0E7WUFDVDs7OztZQUVPYSxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0JDLGNBQWM7Z0JBQ3ZDLElBQU1sQixhQUFZbUIsa0JBQVMsQ0FBQ0YsbUJBQW1CLENBQUNDLGlCQUMxQ25CLGFBQWFxQixJQUFBQSw4QkFBZ0IsS0FDN0JDLHVCQUF1QixJQWxDWjVCLHFCQWtDcUNNLFlBQVlDO2dCQUVsRSxPQUFPcUI7WUFDVDs7O1dBckNtQjVCO0VBQTZCNkIscUJBQVkifQ==