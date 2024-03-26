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
            value: function update(markdownStyle) {
                var divisionName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var css = cssFromMarkdownStyleDivisionNameAndSelectorsList(markdownStyle, divisionName, this.selectorsList);
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
function cssFromMarkdownStyleDivisionNameAndSelectorsList(markdownStyle, divisionName, selectorsList) {
    var css = _constants.EMPTY_STRING;
    var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), node = parser.parse(tokens);
    if (node !== null) {
        var division = _division.default.fromNodeTokensDivisionNameAndSelectorsList(node, tokens, divisionName, selectorsList);
        css = division.asCSS();
    }
    return css;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEaXZpc2lvbiBmcm9tIFwiLi4vZGl2aXNpb25cIjtcbmltcG9ydCBTdHlsZUVsZW1lbnQgZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuaW1wb3J0IFNlbGVjdG9yc0xpc3QgZnJvbSBcIi4uL3NlbGVjdG9yc0xpc3RcIjtcbmltcG9ydCBNYXJrZG93blN0eWxlTGV4ZXIgZnJvbSBcIi4uL21hcmtkb3duU3R5bGUvbGV4ZXJcIjtcbmltcG9ydCBNYXJrZG93blN0eWxlUGFyc2VyIGZyb20gXCIuLi9tYXJrZG93blN0eWxlL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVET01FbGVtZW50IH0gZnJvbSBcIi4uL3N0eWxlRWxlbWVudFwiO1xuXG5jb25zdCBtYXJrZG93blN0eWxlTGV4ZXIgPSBNYXJrZG93blN0eWxlTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIG1hcmtkb3duU3R5bGVQYXJzZXIgPSBNYXJrZG93blN0eWxlUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtkb3duU3R5bGVFbGVtZW50IGV4dGVuZHMgU3R5bGVFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCwgc2VsZWN0b3JzTGlzdCkge1xuICAgIHN1cGVyKGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5zZWxlY3RvcnNMaXN0ID0gc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIGdldFNlbGVjdG9yc0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIHVwZGF0ZShtYXJrZG93blN0eWxlLCBkaXZpc2lvbk5hbWUgPSBudWxsKSB7XG4gICAgY29uc3QgY3NzID0gY3NzRnJvbU1hcmtkb3duU3R5bGVEaXZpc2lvbk5hbWVBbmRTZWxlY3RvcnNMaXN0KG1hcmtkb3duU3R5bGUsIGRpdmlzaW9uTmFtZSwgdGhpcy5zZWxlY3RvcnNMaXN0KTtcblxuICAgIHRoaXMuc2V0Q1NTKGNzcyk7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgY29uc3QgbWFya2Rvd25TdHlsZSA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMudXBkYXRlKG1hcmtkb3duU3R5bGUpXG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yU3RyaW5nKENsYXNzLCBzZWxlY3RvclN0cmluZykge1xuICAgIGlmIChzZWxlY3RvclN0cmluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvclN0cmluZyA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBNYXJrZG93blN0eWxlRWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGNyZWF0ZURPTUVsZW1lbnQoKSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0ID0gU2VsZWN0b3JzTGlzdC5mcm9tU2VsZWN0b3JTdHJpbmcoc2VsZWN0b3JTdHJpbmcpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVFbGVtZW50ID0gbmV3IENsYXNzKGRvbUVsZW1lbnQsIHNlbGVjdG9yc0xpc3QpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVFbGVtZW50O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNzc0Zyb21NYXJrZG93blN0eWxlRGl2aXNpb25OYW1lQW5kU2VsZWN0b3JzTGlzdChtYXJrZG93blN0eWxlLCBkaXZpc2lvbk5hbWUsIHNlbGVjdG9yc0xpc3QpIHtcbiAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICBjb25zdCBsZXhlciA9IG1hcmtkb3duU3R5bGVMZXhlciwgLy8vXG4gICAgICAgIHBhcnNlciA9ICBtYXJrZG93blN0eWxlUGFyc2VyLCAgLy8vXG4gICAgICAgIGNvbnRlbnQgPSBtYXJrZG93blN0eWxlLCAvLy9cbiAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGRpdmlzaW9uID0gRGl2aXNpb24uZnJvbU5vZGVUb2tlbnNEaXZpc2lvbk5hbWVBbmRTZWxlY3RvcnNMaXN0KG5vZGUsIHRva2VucywgZGl2aXNpb25OYW1lLCBzZWxlY3RvcnNMaXN0KTtcblxuICAgIGNzcyA9IGRpdmlzaW9uLmFzQ1NTKCk7XG4gIH1cblxuICByZXR1cm4gY3NzO1xufVxuIl0sIm5hbWVzIjpbIk1hcmtkb3duU3R5bGVFbGVtZW50IiwibWFya2Rvd25TdHlsZUxleGVyIiwiTWFya2Rvd25TdHlsZUxleGVyIiwiZnJvbU5vdGhpbmciLCJtYXJrZG93blN0eWxlUGFyc2VyIiwiTWFya2Rvd25TdHlsZVBhcnNlciIsImRvbUVsZW1lbnQiLCJzZWxlY3RvcnNMaXN0IiwiZ2V0U2VsZWN0b3JzTGlzdCIsInVwZGF0ZSIsIm1hcmtkb3duU3R5bGUiLCJkaXZpc2lvbk5hbWUiLCJjc3MiLCJjc3NGcm9tTWFya2Rvd25TdHlsZURpdmlzaW9uTmFtZUFuZFNlbGVjdG9yc0xpc3QiLCJzZXRDU1MiLCJyZXNldCIsIkVNUFRZX1NUUklORyIsImZyb21TZWxlY3RvclN0cmluZyIsIkNsYXNzIiwic2VsZWN0b3JTdHJpbmciLCJ1bmRlZmluZWQiLCJjcmVhdGVET01FbGVtZW50IiwiU2VsZWN0b3JzTGlzdCIsIm1hcmtkb3duU3R5bGVFbGVtZW50IiwiU3R5bGVFbGVtZW50IiwibGV4ZXIiLCJwYXJzZXIiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJkaXZpc2lvbiIsIkRpdmlzaW9uIiwiZnJvbU5vZGVUb2tlbnNEaXZpc2lvbk5hbWVBbmRTZWxlY3RvcnNMaXN0IiwiYXNDU1MiXSwicmFuZ2VNYXBw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