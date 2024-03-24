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
var _document = /*#__PURE__*/ _interop_require_default(require("../document"));
var _styleElement = /*#__PURE__*/ _interop_require_wildcard(require("../styleElement"));
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
        var document = _document.default.fromNodeTokensAndSelectorsList(node, tokens, selectorsList);
        css = document.asCSS();
    }
    return css;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEb2N1bWVudCBmcm9tIFwiLi4vZG9jdW1lbnRcIjtcbmltcG9ydCBTdHlsZUVsZW1lbnQgZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuaW1wb3J0IFNlbGVjdG9yc0xpc3QgZnJvbSBcIi4uL3NlbGVjdG9yc0xpc3RcIjtcbmltcG9ydCBNYXJrZG93blN0eWxlTGV4ZXIgZnJvbSBcIi4uL21hcmtkb3duU3R5bGUvbGV4ZXJcIjtcbmltcG9ydCBNYXJrZG93blN0eWxlUGFyc2VyIGZyb20gXCIuLi9tYXJrZG93blN0eWxlL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVET01FbGVtZW50IH0gZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuXG5jb25zdCBtYXJrZG93blN0eWxlTGV4ZXIgPSBNYXJrZG93blN0eWxlTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duU3R5bGVQYXJzZXIgPSBNYXJrZG93blN0eWxlUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtkb3duU3R5bGVFbGVtZW50IGV4dGVuZHMgU3R5bGVFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCwgc2VsZWN0b3JzTGlzdCkge1xuICAgIHN1cGVyKGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5zZWxlY3RvcnNMaXN0ID0gc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIGdldFNlbGVjdG9yc0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIHVwZGF0ZShtYXJrZG93blN0eWxlKSB7XG4gICAgY29uc3QgY3NzID0gY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRTZWxlY3RvcnNMaXN0KG1hcmtkb3duU3R5bGUsIHRoaXMuc2VsZWN0b3JzTGlzdCk7XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGUgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnVwZGF0ZShtYXJrZG93blN0eWxlKVxuICB9XG5cbiAgc3RhdGljIGZyb21TZWxlY3RvclN0cmluZyhDbGFzcywgc2VsZWN0b3JTdHJpbmcpIHtcbiAgICBpZiAoc2VsZWN0b3JTdHJpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZWN0b3JTdHJpbmcgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gTWFya2Rvd25TdHlsZUVsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBjcmVhdGVET01FbGVtZW50KCksXG4gICAgICAgICAgc2VsZWN0b3JzTGlzdCA9IFNlbGVjdG9yc0xpc3QuZnJvbVNlbGVjdG9yU3RyaW5nKHNlbGVjdG9yU3RyaW5nKSxcbiAgICAgICAgICBtYXJrZG93blN0eWxlRWxlbWVudCA9IG5ldyBDbGFzcyhkb21FbGVtZW50LCBzZWxlY3RvcnNMaXN0KTtcblxuICAgIHJldHVybiBtYXJrZG93blN0eWxlRWxlbWVudDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjc3NGcm9tTWFya2Rvd25TdHlsZUFuZFNlbGVjdG9yc0xpc3QobWFya2Rvd25TdHlsZSwgc2VsZWN0b3JzTGlzdCkge1xuICBsZXQgY3NzID0gRU1QVFlfU1RSSU5HO1xuXG4gIGNvbnN0IGxleGVyID0gbWFya2Rvd25TdHlsZUxleGVyLCAvLy9cbiAgICAgICAgcGFyc2VyID0gIG1hcmtkb3duU3R5bGVQYXJzZXIsICAvLy9cbiAgICAgICAgY29udGVudCA9IG1hcmtkb3duU3R5bGUsIC8vL1xuICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgZG9jdW1lbnQgPSBEb2N1bWVudC5mcm9tTm9kZVRva2Vuc0FuZFNlbGVjdG9yc0xpc3Qobm9kZSwgdG9rZW5zLCBzZWxlY3RvcnNMaXN0KTtcblxuICAgIGNzcyA9IGRvY3VtZW50LmFzQ1NTKCk7XG4gIH1cblxuICByZXR1cm4gY3NzO1xufVxuIl0sIm5hbWVzIjpbIk1hcmtkb3duU3R5bGVFbGVtZW50IiwibWFya2Rvd25TdHlsZUxleGVyIiwiTWFya2Rvd25TdHlsZUxleGVyIiwiZnJvbU5vdGhpbmciLCJtYXJrZG93blN0eWxlUGFyc2VyIiwiTWFya2Rvd25TdHlsZVBhcnNlciIsImRvbUVsZW1lbnQiLCJzZWxlY3RvcnNMaXN0IiwiZ2V0U2VsZWN0b3JzTGlzdCIsInVwZGF0ZSIsIm1hcmtkb3duU3R5bGUiLCJjc3MiLCJjc3NGcm9tTWFya2Rvd25TdHlsZUFuZFNlbGVjdG9yc0xpc3QiLCJzZXRDU1MiLCJyZXNldCIsIkVNUFRZX1NUUklORyIsImZyb21TZWxlY3RvclN0cmluZyIsIkNsYXNzIiwic2VsZWN0b3JTdHJpbmciLCJ1bmRlZmluZWQiLCJjcmVhdGVET01FbGVtZW50IiwiU2VsZWN0b3JzTGlzdCIsIm1hcmtkb3duU3R5bGVFbGVtZW50IiwiU3R5bGVFbGVtZW50IiwibGV4ZXIiLCJwYXJzZXIiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJkb2N1bWVudCIsIkRvY3VtZW50IiwiZnJvbU5vZGVUb2tlbnNBbmRTZWxlY3RvcnNMaXN0IiwiYXNDU1MiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7OytEQVpBO29FQUNJO29FQUNDOzREQUNLOzZEQUNDO3lCQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHN0IsSUFBTUMscUJBQXFCQyxjQUFrQixDQUFDQyxXQUFXLElBQ25EQyxzQkFBc0JDLGVBQW1CLENBQUNGLFdBQVc7QUFFNUMsSUFBQSxBQUFNSCxxQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxxQkFDUE0sVUFBVSxFQUFFQyxhQUFhO2dDQURsQlA7O2tDQUVYTTtRQUVOLE1BQUtDLGFBQWEsR0FBR0E7OztrQkFKSlA7O1lBT25CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGFBQWE7WUFDM0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsYUFBYTtnQkFDbEIsSUFBTUMsTUFBTUMscUNBQXFDRixlQUFlLElBQUksQ0FBQ0gsYUFBYTtnQkFFbEYsSUFBSSxDQUFDTSxNQUFNLENBQUNGO2dCQUVaLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosZ0JBQWdCSyx1QkFBWTtnQkFFbEMsSUFBSSxDQUFDTixNQUFNLENBQUNDO1lBQ2Q7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxLQUFLLEVBQUVDLGNBQWM7Z0JBQzdDLElBQUlBLG1CQUFtQkMsV0FBVztvQkFDaENELGlCQUFpQkQsT0FBTyxHQUFHO29CQUUzQkEsUUE3QmVqQixzQkE2QmUsR0FBRztnQkFDbkM7Z0JBRUEsSUFBTU0sYUFBYWMsSUFBQUEsOEJBQWdCLEtBQzdCYixnQkFBZ0JjLHNCQUFhLENBQUNMLGtCQUFrQixDQUFDRSxpQkFDakRJLHVCQUF1QixJQUFJTCxNQUFNWCxZQUFZQztnQkFFbkQsT0FBT2U7WUFDVDs7O1dBckNtQnRCO0VBQTZCdUIscUJBQVk7QUF3QzlELFNBQVNYLHFDQUFxQ0YsYUFBYSxFQUFFSCxhQUFhO0lBQ3hFLElBQUlJLE1BQU1JLHVCQUFZO0lBRXRCLElBQU1TLFFBQVF2QixvQkFDUndCLFNBQVVyQixxQkFDVnNCLFVBQVVoQixlQUNWaUIsU0FBU0gsTUFBTUksUUFBUSxDQUFDRixVQUN4QkcsT0FBT0osT0FBT0ssS0FBSyxDQUFDSDtJQUUxQixJQUFJRSxTQUFTLE1BQU07UUFDakIsSUFBTUUsV0FBV0MsaUJBQVEsQ0FBQ0MsOEJBQThCLENBQUNKLE1BQU1GLFFBQVFwQjtRQUV2RUksTUFBTW9CLFNBQVNHLEtBQUs7SUFDdEI7SUFFQSxPQUFPdkI7QUFDVCJ9