"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return MarkdownStyleLexer;
    },
    markdownStyleLexer: function() {
        return markdownStyleLexer;
    }
});
var _occamlexers = require("occam-lexers");
var _entries = /*#__PURE__*/ _interop_require_default(require("./entries"));
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
var MarkdownStyleLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(MarkdownStyleLexer, CommonLexer);
    var _super = _create_super(MarkdownStyleLexer);
    function MarkdownStyleLexer() {
        _class_call_check(this, MarkdownStyleLexer);
        return _super.apply(this, arguments);
    }
    _create_class(MarkdownStyleLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamlexers.CommonLexer.fromNothing(MarkdownStyleLexer);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamlexers.CommonLexer.fromRules(MarkdownStyleLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamlexers.CommonLexer.fromEntries(MarkdownStyleLexer, entries);
            }
        }
    ]);
    return MarkdownStyleLexer;
}(_occamlexers.CommonLexer);
_define_property(MarkdownStyleLexer, "entries", _entries.default);
_define_property(MarkdownStyleLexer, "EndOfLineToken", _occamlexers.EndOfLineNonSignificantToken);
_define_property(MarkdownStyleLexer, "WhitespaceToken", _occamlexers.WhitespaceToken);
_define_property(MarkdownStyleLexer, "EndOfLineCommentToken", null);
_define_property(MarkdownStyleLexer, "SingleLineCommentToken", null);
_define_property(MarkdownStyleLexer, "RegularExpressionToken", null);
_define_property(MarkdownStyleLexer, "EndOfMultiLineCommentToken", null);
_define_property(MarkdownStyleLexer, "StartOfMultiLineCommentToken", null);
_define_property(MarkdownStyleLexer, "MiddleOfMultiLineCommentToken", null);
_define_property(MarkdownStyleLexer, "SinglyQuotedStringLiteralToken", null);
_define_property(MarkdownStyleLexer, "DoublyQuotedStringLiteralToken", _occamlexers.DoublyQuotedStringLiteralToken);
var markdownStyleLexer = MarkdownStyleLexer.fromNothing();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93blN0eWxlL2xleGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XHJcbmltcG9ydCB7IFdoaXRlc3BhY2VUb2tlbiwgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiwgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Rvd25TdHlsZUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbjtcclxuXHJcbiAgc3RhdGljIFdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbjtcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuO1xyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhNYXJrZG93blN0eWxlTGV4ZXIpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21SdWxlcyhNYXJrZG93blN0eWxlTGV4ZXIsIHJ1bGVzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoTWFya2Rvd25TdHlsZUxleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFya2Rvd25TdHlsZUxleGVyID0gTWFya2Rvd25TdHlsZUxleGVyLmZyb21Ob3RoaW5nKCk7XHJcbiJdLCJuYW1lcyI6WyJNYXJrZG93blN0eWxlTGV4ZXIiLCJtYXJrZG93blN0eWxlTGV4ZXIiLCJmcm9tTm90aGluZyIsIkNvbW1vbkxleGVyIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50VG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBT3FCQTs7SUE4QlJDLGtCQUFrQjtlQUFsQkE7OzsyQkFuQ2U7OERBR1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxBQUFNRCxtQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBdUJaRSxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0Msd0JBQVcsQ0FBQ0QsV0FBVyxDQXZCbENGO1lBdUJ3RDs7O1lBRXBFSSxLQUFBQTttQkFBUCxTQUFPQSxVQUFVQyxLQUFLO2dCQUFJLE9BQU9GLHdCQUFXLENBQUNDLFNBQVMsQ0F6Qm5DSixvQkF5QndESztZQUFROzs7WUFFNUVDLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLE9BQU87Z0JBQUksT0FBT0osd0JBQVcsQ0FBQ0csV0FBVyxDQTNCekNOLG9CQTJCOERPO1lBQVU7OztXQTNCeEVQO0VBQTJCRyx3QkFBVztBQUN6RCxpQkFEbUJILG9CQUNaTyxXQUFVQSxnQkFBTztBQUV4QixpQkFIbUJQLG9CQUdaUSxrQkFBaUJDLHlDQUE0QjtBQUVwRCxpQkFMbUJULG9CQUtaVSxtQkFBa0JBLDRCQUFlO0FBRXhDLGlCQVBtQlYsb0JBT1pXLHlCQUF3QjtBQUUvQixpQkFUbUJYLG9CQVNaWSwwQkFBeUI7QUFFaEMsaUJBWG1CWixvQkFXWmEsMEJBQXlCO0FBRWhDLGlCQWJtQmIsb0JBYVpjLDhCQUE2QjtBQUVwQyxpQkFmbUJkLG9CQWVaZSxnQ0FBK0I7QUFFdEMsaUJBakJtQmYsb0JBaUJaZ0IsaUNBQWdDO0FBRXZDLGlCQW5CbUJoQixvQkFtQlppQixrQ0FBaUM7QUFFeEMsaUJBckJtQmpCLG9CQXFCWmtCLGtDQUFpQ0EsMkNBQThCO0FBU2pFLElBQU1qQixxQkFBcUJELG1CQUFtQkUsV0FBVyJ9