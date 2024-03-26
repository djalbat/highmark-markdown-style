"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkdownStyleParser;
    }
});
var _occamparsers = require("occam-parsers");
var _bnf = /*#__PURE__*/ _interop_require_default(require("./bnf"));
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
var MarkdownStyleParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(MarkdownStyleParser, CommonParser);
    var _super = _create_super(MarkdownStyleParser);
    function MarkdownStyleParser() {
        _class_call_check(this, MarkdownStyleParser);
        return _super.apply(this, arguments);
    }
    _create_class(MarkdownStyleParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamparsers.CommonParser.fromNothing(MarkdownStyleParser);
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                return _occamparsers.CommonParser.fromBNF(MarkdownStyleParser, bnf);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamparsers.CommonParser.fromRules(MarkdownStyleParser, rules);
            }
        }
    ]);
    return MarkdownStyleParser;
}(_occamparsers.CommonParser);
_define_property(MarkdownStyleParser, "bnf", _bnf.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93blN0eWxlL3BhcnNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IGJuZiBmcm9tIFwiLi9ibmZcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Rvd25TdHlsZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21Ob3RoaW5nKE1hcmtkb3duU3R5bGVQYXJzZXIpOyB9XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbUJORihNYXJrZG93blN0eWxlUGFyc2VyLCBibmYpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhNYXJrZG93blN0eWxlUGFyc2VyLCBydWxlcyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJNYXJrZG93blN0eWxlUGFyc2VyIiwiZnJvbU5vdGhpbmciLCJDb21tb25QYXJzZXIiLCJmcm9tQk5GIiwiYm5mIiwiZnJvbVJ1bGVzIiwicnVsZXMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozs0QkFKUTswREFFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxJQUFBLEFBQU1BLG9DQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFHWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLDBCQUFZLENBQUNELFdBQVcsQ0FIbkNEO1lBRzBEOzs7WUFFdEVHLEtBQUFBO21CQUFQLFNBQU9BLFFBQVFDLEdBQUc7Z0JBQUksT0FBT0YsMEJBQVksQ0FBQ0MsT0FBTyxDQUw5QkgscUJBS29ESTtZQUFNOzs7WUFFdEVDLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVDLEtBQUs7Z0JBQUksT0FBT0osMEJBQVksQ0FBQ0csU0FBUyxDQVBwQ0wscUJBTzBETTtZQUFROzs7V0FQbEVOO0VBQTRCRSwwQkFBWTtBQUMzRCxpQkFEbUJGLHFCQUNaSSxPQUFNQSxZQUFHIn0=