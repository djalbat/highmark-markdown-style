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
var _division = /*#__PURE__*/ _interop_require_default(require("../division"));
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
            value: function update() {
                var markdownStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
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
            key: "fromSelectorsString",
            value: function fromSelectorsString(Class, selectorString) {
                if (selectorString === undefined) {
                    selectorString = Class; ///
                    Class = MarkdownStyleElement; ///
                }
                var domElement = (0, _styleElement.createDOMElement)(), selectorsList = _selectorsList.default.fromSelectorsString(selectorString), markdownStyleElement = new Class(domElement, selectorsList);
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
        var division = _division.default.fromNodeTokensAndSelectorsList(node, tokens, selectorsList);
        css = division.asCSS();
    }
    return css;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEaXZpc2lvbiBmcm9tIFwiLi4vZGl2aXNpb25cIjtcbmltcG9ydCBTdHlsZUVsZW1lbnQgZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuaW1wb3J0IFNlbGVjdG9yc0xpc3QgZnJvbSBcIi4uL3NlbGVjdG9yc0xpc3RcIjtcbmltcG9ydCBNYXJrZG93blN0eWxlTGV4ZXIgZnJvbSBcIi4uL21hcmtkb3duU3R5bGUvbGV4ZXJcIjtcbmltcG9ydCBNYXJrZG93blN0eWxlUGFyc2VyIGZyb20gXCIuLi9tYXJrZG93blN0eWxlL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVET01FbGVtZW50IH0gZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuXG5jb25zdCBtYXJrZG93blN0eWxlTGV4ZXIgPSBNYXJrZG93blN0eWxlTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duU3R5bGVQYXJzZXIgPSBNYXJrZG93blN0eWxlUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtkb3duU3R5bGVFbGVtZW50IGV4dGVuZHMgU3R5bGVFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCwgc2VsZWN0b3JzTGlzdCkge1xuICAgIHN1cGVyKGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5zZWxlY3RvcnNMaXN0ID0gc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIGdldFNlbGVjdG9yc0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIHVwZGF0ZShtYXJrZG93blN0eWxlID0gbnVsbCkge1xuICAgIGNvbnN0IGNzcyA9IGNzc0Zyb21NYXJrZG93blN0eWxlQW5kU2VsZWN0b3JzTGlzdChtYXJrZG93blN0eWxlLCB0aGlzLnNlbGVjdG9yc0xpc3QpO1xuXG4gICAgdGhpcy5zZXRDU1MoY3NzKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy51cGRhdGUobWFya2Rvd25TdHlsZSlcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VsZWN0b3JzU3RyaW5nKENsYXNzLCBzZWxlY3RvclN0cmluZykge1xuICAgIGlmIChzZWxlY3RvclN0cmluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvclN0cmluZyA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBNYXJrZG93blN0eWxlRWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGNyZWF0ZURPTUVsZW1lbnQoKSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0ID0gU2VsZWN0b3JzTGlzdC5mcm9tU2VsZWN0b3JzU3RyaW5nKHNlbGVjdG9yU3RyaW5nKSxcbiAgICAgICAgICBtYXJrZG93blN0eWxlRWxlbWVudCA9IG5ldyBDbGFzcyhkb21FbGVtZW50LCBzZWxlY3RvcnNMaXN0KTtcblxuICAgIHJldHVybiBtYXJrZG93blN0eWxlRWxlbWVudDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjc3NGcm9tTWFya2Rvd25TdHlsZUFuZFNlbGVjdG9yc0xpc3QobWFya2Rvd25TdHlsZSwgc2VsZWN0b3JzTGlzdCkge1xuICBsZXQgY3NzID0gRU1QVFlfU1RSSU5HO1xuXG4gIGNvbnN0IGxleGVyID0gbWFya2Rvd25TdHlsZUxleGVyLCAvLy9cbiAgICAgICAgcGFyc2VyID0gIG1hcmtkb3duU3R5bGVQYXJzZXIsICAvLy9cbiAgICAgICAgY29udGVudCA9IG1hcmtkb3duU3R5bGUsIC8vL1xuICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgZGl2aXNpb24gPSBEaXZpc2lvbi5mcm9tTm9kZVRva2Vuc0FuZFNlbGVjdG9yc0xpc3Qobm9kZSwgdG9rZW5zLCBzZWxlY3RvcnNMaXN0KTtcblxuICAgIGNzcyA9IGRpdmlzaW9uLmFzQ1NTKCk7XG4gIH1cblxuICByZXR1cm4gY3NzO1xufVxuIl0sIm5hbWVzIjpbIk1hcmtkb3duU3R5bGVFbGVtZW50IiwibWFya2Rvd25TdHlsZUxleGVyIiwiTWFya2Rvd25TdHlsZUxleGVyIiwiZnJvbU5vdGhpbmciLCJtYXJrZG93blN0eWxlUGFyc2VyIiwiTWFya2Rvd25TdHlsZVBhcnNlciIsImRvbUVsZW1lbnQiLCJzZWxlY3RvcnNMaXN0IiwiZ2V0U2VsZWN0b3JzTGlzdCIsInVwZGF0ZSIsIm1hcmtkb3duU3R5bGUiLCJjc3MiLCJjc3NGcm9tTWFya2Rvd25TdHlsZUFuZFNlbGVjdG9yc0xpc3QiLCJzZXRDU1MiLCJyZXNldCIsIkVNUFRZX1NUUklORyIsImZyb21TZWxlY3RvcnNTdHJpbmciLCJDbGFzcyIsInNlbGVjdG9yU3RyaW5nIiwidW5kZWZpbmVkIiwiY3JlYXRlRE9NRWxlbWVudCIsIlNlbGVjdG9yc0xpc3QiLCJtYXJrZG93blN0eWxlRWxlbWVudCIsIlN0eWxlRWxlbWVudCIsImxleGVyIiwicGFyc2VyIiwiY29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwiZGl2aXNpb24iLCJEaXZpc2lvbiIsImZyb21Ob2RlVG9rZW5zQW5kU2VsZWN0b3JzTGlzdCIsImFzQ1NTIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFjcUJBOzs7K0RBWkE7b0VBQ0k7b0VBQ0M7NERBQ0s7NkRBQ0M7eUJBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUc3QixJQUFNQyxxQkFBcUJDLGNBQWtCLENBQUNDLFdBQVcsSUFDbkRDLHNCQUFzQkMsZUFBbUIsQ0FBQ0YsV0FBVztBQUU1QyxJQUFBLEFBQU1ILHFDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLHFCQUNQTSxVQUFVLEVBQUVDLGFBQWE7Z0NBRGxCUDs7a0NBRVhNO1FBRU4sTUFBS0MsYUFBYSxHQUFHQTs7O2tCQUpKUDs7WUFPbkJRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsYUFBYTtZQUMzQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBT0MsZ0JBQUFBLGlFQUFnQjtnQkFDckIsSUFBTUMsTUFBTUMscUNBQXFDRixlQUFlLElBQUksQ0FBQ0gsYUFBYTtnQkFFbEYsSUFBSSxDQUFDTSxNQUFNLENBQUNGO2dCQUVaLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosZ0JBQWdCSyx1QkFBWTtnQkFFbEMsSUFBSSxDQUFDTixNQUFNLENBQUNDO1lBQ2Q7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CQyxLQUFLLEVBQUVDLGNBQWM7Z0JBQzlDLElBQUlBLG1CQUFtQkMsV0FBVztvQkFDaENELGlCQUFpQkQsT0FBTyxHQUFHO29CQUUzQkEsUUE3QmVqQixzQkE2QmUsR0FBRztnQkFDbkM7Z0JBRUEsSUFBTU0sYUFBYWMsSUFBQUEsOEJBQWdCLEtBQzdCYixnQkFBZ0JjLHNCQUFhLENBQUNMLG1CQUFtQixDQUFDRSxpQkFDbERJLHVCQUF1QixJQUFJTCxNQUFNWCxZQUFZQztnQkFFbkQsT0FBT2U7WUFDVDs7O1dBckNtQnRCO0VBQTZCdUIscUJBQVk7QUF3QzlELFNBQVNYLHFDQUFxQ0YsYUFBYSxFQUFFSCxhQUFhO0lBQ3hFLElBQUlJLE1BQU1JLHVCQUFZO0lBRXRCLElBQU1TLFFBQVF2QixvQkFDUndCLFNBQVVyQixxQkFDVnNCLFVBQVVoQixlQUNWaUIsU0FBU0gsTUFBTUksUUFBUSxDQUFDRixVQUN4QkcsT0FBT0osT0FBT0ssS0FBSyxDQUFDSDtJQUUxQixJQUFJRSxTQUFTLE1BQU07UUFDakIsSUFBTUUsV0FBV0MsaUJBQVEsQ0FBQ0MsOEJBQThCLENBQUNKLE1BQU1GLFFBQVFwQjtRQUV2RUksTUFBTW9CLFNBQVNHLEtBQUs7SUFDdEI7SUFFQSxPQUFPdkI7QUFDVCJ9