"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ValuesMarkdownStyleNode;
    }
});
var _content = /*#__PURE__*/ _interop_require_default(require("../../mixins/content"));
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
var ValuesMarkdownStyleNode = /*#__PURE__*/ function(MarkdownStyleNode) {
    _inherits(ValuesMarkdownStyleNode, MarkdownStyleNode);
    var _super = _create_super(ValuesMarkdownStyleNode);
    function ValuesMarkdownStyleNode() {
        _class_call_check(this, ValuesMarkdownStyleNode);
        return _super.apply(this, arguments);
    }
    _create_class(ValuesMarkdownStyleNode, [
        {
            key: "asCSS",
            value: function asCSS(prepend, context) {
                var content = this.getContent(context), css = content; ///
                return css;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) {
                return _markdownStyle.default.fromRuleNameChildNodesAndAmbiguous(ValuesMarkdownStyleNode, ruleName, childNodes, ambiguous);
            }
        }
    ]);
    return ValuesMarkdownStyleNode;
}(_markdownStyle.default);
Object.assign(ValuesMarkdownStyleNode.prototype, _content.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9fdGVtcC9tYXJrZG93blN0eWxlL3ZhbHVlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGNvbnRlbnRNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9jb250ZW50XCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZU5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25TdHlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWx1ZXNNYXJrZG93blN0eWxlTm9kZSBleHRlbmRzIE1hcmtkb3duU3R5bGVOb2RlIHtcbiAgYXNDU1MocHJlcGVuZCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoY29udGV4dCksXG4gICAgICAgICAgY3NzID0gY29udGVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpIHsgcmV0dXJuIE1hcmtkb3duU3R5bGVOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMoVmFsdWVzTWFya2Rvd25TdHlsZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmFsdWVzTWFya2Rvd25TdHlsZU5vZGUucHJvdG90eXBlLCBjb250ZW50TWl4aW5zKTtcbiJdLCJuYW1lcyI6WyJWYWx1ZXNNYXJrZG93blN0eWxlTm9kZSIsImFzQ1NTIiwicHJlcGVuZCIsImNvbnRleHQiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImNzcyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJhbWJpZ3VvdXMiLCJNYXJrZG93blN0eWxlTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImNvbnRlbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7OzhEQUhLO29FQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsSUFBQSxBQUFNQSx3Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsT0FBTyxFQUFFQyxPQUFPO2dCQUNwQixJQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxDQUFDRixVQUMxQkcsTUFBTUYsU0FBVSxHQUFHO2dCQUV6QixPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLG1DQUFtQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFNBQVM7Z0JBQUksT0FBT0Msc0JBQWlCLENBQUNKLGtDQUFrQyxDQVJySFAseUJBUStJUSxVQUFVQyxZQUFZQztZQUFZOzs7V0FSakxWO0VBQWdDVyxzQkFBaUI7QUFXdEVDLE9BQU9DLE1BQU0sQ0FBQ2Isd0JBQXdCYyxTQUFTLEVBQUVDLGdCQUFhIn0=