"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleSetMarkdownStyleNode;
    }
});
var _necessary = require("necessary");
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../../node/markdownStyle"));
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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
var RuleSetMarkdownStyleNode = /*#__PURE__*/ function(MarkdownStyleNode) {
    _inherits(RuleSetMarkdownStyleNode, MarkdownStyleNode);
    var _super = _create_super(RuleSetMarkdownStyleNode);
    function RuleSetMarkdownStyleNode() {
        _class_call_check(this, RuleSetMarkdownStyleNode);
        return _super.apply(this, arguments);
    }
    _create_class(RuleSetMarkdownStyleNode, [
        {
            key: "asCSS",
            value: function asCSS(prepend, context) {
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), selectorsMarkdownStyleNode = firstChildNode, selectorsMarkdownStyleNodeCSS = selectorsMarkdownStyleNode.asCSS(prepend, context);
                prepend = "".concat(selectorsMarkdownStyleNodeCSS); ///
                var secondChildNode = second(childNodes), declarationBlockMarkdownNode = secondChildNode, declarationBlockMarkdownNodeCSS = declarationBlockMarkdownNode.asCSS(prepend, context), css = declarationBlockMarkdownNodeCSS; ///
                return css;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdownStyle.default.fromRuleNameChildNodesAndAmbiguous(RuleSetMarkdownStyleNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return RuleSetMarkdownStyleNode;
}(_markdownStyle.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9fdGVtcC9tYXJrZG93blN0eWxlL3J1bGVTZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWFya2Rvd25TdHlsZU5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25TdHlsZVwiO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0TWFya2Rvd25TdHlsZU5vZGUgZXh0ZW5kcyBNYXJrZG93blN0eWxlTm9kZSB7XG4gIGFzQ1NTKHByZXBlbmQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBzZWxlY3RvcnNNYXJrZG93blN0eWxlTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAvLy9cbiAgICAgICAgICBzZWxlY3RvcnNNYXJrZG93blN0eWxlTm9kZUNTUyA9IHNlbGVjdG9yc01hcmtkb3duU3R5bGVOb2RlLmFzQ1NTKHByZXBlbmQsIGNvbnRleHQpO1xuXG4gICAgcHJlcGVuZCA9IGAke3NlbGVjdG9yc01hcmtkb3duU3R5bGVOb2RlQ1NTfWA7IC8vL1xuXG4gICAgY29uc3Qgc2Vjb25kQ2hpbGROb2RlID0gc2Vjb25kKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uQmxvY2tNYXJrZG93bk5vZGUgPSBzZWNvbmRDaGlsZE5vZGUsIC8vL1xuICAgICAgICAgIGRlY2xhcmF0aW9uQmxvY2tNYXJrZG93bk5vZGVDU1MgPSBkZWNsYXJhdGlvbkJsb2NrTWFya2Rvd25Ob2RlLmFzQ1NTKHByZXBlbmQsIGNvbnRleHQpLFxuICAgICAgICAgIGNzcyA9IGRlY2xhcmF0aW9uQmxvY2tNYXJrZG93bk5vZGVDU1M7ICAvLy9cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzKSB7IHJldHVybiBNYXJrZG93blN0eWxlTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKFJ1bGVTZXRNYXJrZG93blN0eWxlTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlU2V0TWFya2Rvd25TdHlsZU5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwiYXNDU1MiLCJwcmVwZW5kIiwiY29udGV4dCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJzZWxlY3RvcnNNYXJrZG93blN0eWxlTm9kZSIsInNlbGVjdG9yc01hcmtkb3duU3R5bGVOb2RlQ1NTIiwic2Vjb25kQ2hpbGROb2RlIiwiZGVjbGFyYXRpb25CbG9ja01hcmtkb3duTm9kZSIsImRlY2xhcmF0aW9uQmxvY2tNYXJrZG93bk5vZGVDU1MiLCJjc3MiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzIiwicnVsZU5hbWUiLCJhbWJpZ3VvdXMiLCJNYXJrZG93blN0eWxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTlU7b0VBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBUUMsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkM7QUFFQSxJQUFBLEFBQU1ILHlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPLEVBQUVDLE9BQU87Z0JBQ3BCLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxpQkFBaUJSLE1BQU1NLGFBQ3ZCRyw2QkFBNkJELGdCQUM3QkUsZ0NBQWdDRCwyQkFBMkJOLEtBQUssQ0FBQ0MsU0FBU0M7Z0JBRWhGRCxVQUFVLEFBQUMsR0FBZ0MsT0FBOUJNLGdDQUFpQyxHQUFHO2dCQUVqRCxJQUFNQyxrQkFBa0JULE9BQU9JLGFBQ3pCTSwrQkFBK0JELGlCQUMvQkUsa0NBQWtDRCw2QkFBNkJULEtBQUssQ0FBQ0MsU0FBU0MsVUFDOUVTLE1BQU1ELGlDQUFrQyxHQUFHO2dCQUVqRCxPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLG1DQUFtQ0MsUUFBUSxFQUFFVixVQUFVLEVBQUVXLFNBQVM7Z0JBQUksT0FBT0Msc0JBQWlCLENBQUNILGtDQUFrQyxDQWpCckhoQiwwQkFpQmdKaUIsVUFBVVYsWUFBWVc7WUFBWTs7O1dBakJsTGxCO0VBQWlDbUIsc0JBQWlCIn0=