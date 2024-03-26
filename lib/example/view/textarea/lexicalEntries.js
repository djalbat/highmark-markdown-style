"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
var _constants = require("../../constants");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  height: 12rem;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var LexicalEntriesTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(LexicalEntriesTextarea, Textarea);
    var _super = _create_super(LexicalEntriesTextarea);
    function LexicalEntriesTextarea() {
        _class_call_check(this, LexicalEntriesTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(LexicalEntriesTextarea, [
        {
            key: "setLexicalEntries",
            value: function setLexicalEntries(lexicalEntries) {
                var lexicalEntriesString = JSON.stringify(lexicalEntries, null, _constants.DOUBLE_SPACE), value = lexicalEntriesString; ///
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var setLexicalEntries = this.setLexicalEntries.bind(this);
                return {
                    setLexicalEntries: setLexicalEntries
                };
            }
        }
    ]);
    return LexicalEntriesTextarea;
}(_textarea.default);
_define_property(LexicalEntriesTextarea, "defaultProperties", {
    readOnly: true,
    className: "lexical-entries",
    spellCheck: "false"
});
var _default = (0, _easywithstyle.default)(LexicalEntriesTextarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvbGV4aWNhbEVudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgRE9VQkxFX1NQQUNFIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBMZXhpY2FsRW50cmllc1RleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBzZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcykge1xuICAgIGNvbnN0IGxleGljYWxFbnRyaWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkobGV4aWNhbEVudHJpZXMsIG51bGwsIERPVUJMRV9TUEFDRSksXG4gICAgICAgICAgdmFsdWUgPSBsZXhpY2FsRW50cmllc1N0cmluZzsgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0TGV4aWNhbEVudHJpZXMgPSB0aGlzLnNldExleGljYWxFbnRyaWVzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNldExleGljYWxFbnRyaWVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgcmVhZE9ubHk6IHRydWUsXG4gICAgY2xhc3NOYW1lOiBcImxleGljYWwtZW50cmllc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTGV4aWNhbEVudHJpZXNUZXh0YXJlYSlgXG5cbiAgaGVpZ2h0OiAxMnJlbTtcblxuYDtcbiJdLCJuYW1lcyI6WyJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwic2V0TGV4aWNhbEVudHJpZXMiLCJsZXhpY2FsRW50cmllcyIsImxleGljYWxFbnRyaWVzU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsIkRPVUJMRV9TUEFDRSIsInZhbHVlIiwic2V0VmFsdWUiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsIlRleHRhcmVhIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJyZWFkT25seSIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJ3aXRoU3R5bGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStCQTs7O2VBQUE7OztvRUE3QnNCOytEQUVEO3lCQUVROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBQSxBQUFNQSx1Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLGNBQWM7Z0JBQzlCLElBQU1DLHVCQUF1QkMsS0FBS0MsU0FBUyxDQUFDSCxnQkFBZ0IsTUFBTUksdUJBQVksR0FDeEVDLFFBQVFKLHNCQUFzQixHQUFHO2dCQUV2QyxJQUFJLENBQUNLLFFBQVEsQ0FBQ0Q7WUFDaEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVIsb0JBQW9CLElBQUksQ0FBQ0EsaUJBQWlCLENBQUNTLElBQUksQ0FBQyxJQUFJO2dCQUUxRCxPQUFRO29CQUNOVCxtQkFBQUE7Z0JBQ0Y7WUFDRjs7O1dBZElEO0VBQStCVyxpQkFBUTtBQWdCM0MsaUJBaEJJWCx3QkFnQkdZLHFCQUFvQjtJQUN6QkMsVUFBVTtJQUNWQyxXQUFXO0lBQ1hDLFlBQVk7QUFDZDtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNoQiJ9