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
var _occamparsers = require("occam-parsers");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
var MarkdownStyleNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(MarkdownStyleNode, NonTerminalNode);
    var _super = _create_super(MarkdownStyleNode);
    function MarkdownStyleNode() {
        _class_call_check(this, MarkdownStyleNode);
        return _super.apply(this, arguments);
    }
    _create_class(MarkdownStyleNode, [
        {
            key: "asCSS",
            value: function asCSS(prepend, context) {
                var css = null; ///
                return css;
            }
        },
        {
            key: "childNodesAsCSS",
            value: function childNodesAsCSS(prepend, context) {
                var separator = this.constructor.separator, childNodes = this.getChildNodes(), childNodesCSS = childNodes.reduce(function(childNodesCSS, childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var nonTerminalNode = childNode, nonTerminalNodeCSS = nonTerminalNode.asCSS(prepend, context);
                        if (nonTerminalNodeCSS !== null) {
                            childNodesCSS = childNodesCSS === null ? nonTerminalNodeCSS : "".concat(childNodesCSS).concat(separator).concat(nonTerminalNodeCSS);
                        }
                    }
                    return childNodesCSS;
                }, null);
                return childNodesCSS;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(Class, ruleName, childNodes, ambiguous) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
                    remainingArguments[_key - 4] = arguments[_key];
                }
                var _NonTerminalNode;
                var markdownStyleNode = (_NonTerminalNode = _occamparsers.NonTerminalNode).fromRuleNameChildNodesAndAmbiguous.apply(_NonTerminalNode, [
                    Class,
                    ruleName,
                    childNodes,
                    ambiguous
                ].concat(_to_consumable_array(remainingArguments)));
                return markdownStyleNode;
            }
        }
    ]);
    return MarkdownStyleNode;
}(_occamparsers.NonTerminalNode);
_define_property(MarkdownStyleNode, "separator", "\n");
var _default = MarkdownStyleNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fdGVtcC9tYXJrZG93blN0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5jbGFzcyBNYXJrZG93blN0eWxlTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGFzQ1NTKHByZXBlbmQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjc3MgPSBudWxsOyAvLy9cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBjaGlsZE5vZGVzQXNDU1MocHJlcGVuZCwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgc2VwYXJhdG9yIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzQ1NTID0gY2hpbGROb2Rlcy5yZWR1Y2UoKGNoaWxkTm9kZXNDU1MsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUNTUyA9IG5vblRlcm1pbmFsTm9kZS5hc0NTUyhwcmVwZW5kLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAobm9uVGVybWluYWxOb2RlQ1NTICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc0NTUyA9IChjaGlsZE5vZGVzQ1NTID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQ1NTIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2NoaWxkTm9kZXNDU1N9JHtzZXBhcmF0b3J9JHtub25UZXJtaW5hbE5vZGVDU1N9YDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2Rlc0NTUztcbiAgICAgICAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzQ1NTO1xuICB9XG5cbiAgc3RhdGljIHNlcGFyYXRvciA9IFwiXFxuXCI7XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGVOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZU5vZGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFya2Rvd25TdHlsZU5vZGU7XG4iXSwibmFtZXMiOlsiTWFya2Rvd25TdHlsZU5vZGUiLCJhc0NTUyIsInByZXBlbmQiLCJjb250ZXh0IiwiY3NzIiwiY2hpbGROb2Rlc0FzQ1NTIiwic2VwYXJhdG9yIiwiY29uc3RydWN0b3IiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNDU1MiLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUNTUyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMiLCJDbGFzcyIsInJ1bGVOYW1lIiwiYW1iaWd1b3VzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiTm9uVGVybWluYWxOb2RlIiwibWFya2Rvd25TdHlsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJDQTs7O2VBQUE7Ozs0QkF6Q2dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLElBQUEsQUFBTUEsa0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsT0FBTyxFQUFFQyxPQUFPO2dCQUNwQixJQUFNQyxNQUFNLE1BQU0sR0FBRztnQkFFckIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JILE9BQU8sRUFBRUMsT0FBTztnQkFDOUIsSUFBTSxBQUFFRyxZQUFjLElBQUksQ0FBQ0MsV0FBVyxDQUE5QkQsV0FDRkUsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGdCQUFnQkYsV0FBV0csTUFBTSxDQUFDLFNBQUNELGVBQWVFO29CQUNoRCxJQUFNQywyQkFBMkJELFVBQVVFLGlCQUFpQjtvQkFFNUQsSUFBSUQsMEJBQTBCO3dCQUM1QixJQUFNRSxrQkFBa0JILFdBQ2xCSSxxQkFBcUJELGdCQUFnQmQsS0FBSyxDQUFDQyxTQUFTQzt3QkFFMUQsSUFBSWEsdUJBQXVCLE1BQU07NEJBQy9CTixnQkFBZ0IsQUFBQ0Esa0JBQWtCLE9BQ2pCTSxxQkFDRSxBQUFDLEdBQWtCVixPQUFoQkksZUFBNEJNLE9BQVpWLFdBQStCLE9BQW5CVTt3QkFDckQ7b0JBQ0Y7b0JBRUEsT0FBT047Z0JBQ1QsR0FBRztnQkFFVCxPQUFPQTtZQUNUOzs7O1lBSU9PLEtBQUFBO21CQUFQLFNBQU9BLG1DQUFtQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQUVYLFVBQVUsRUFBRVksU0FBUztnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O29CQUMzRUM7Z0JBQTFCLElBQU1DLG9CQUFvQkQsQ0FBQUEsbUJBQUFBLDZCQUFlLEVBQUNMLGtDQUFrQyxDQUFsREssTUFBQUEsa0JBQUFBO29CQUFtREo7b0JBQU9DO29CQUFVWDtvQkFBWVk7aUJBQWlDLENBQWpIRSxPQUEyRixxQkFBR0Q7Z0JBRXhILE9BQU9FO1lBQ1Q7OztXQXBDSXZCO0VBQTBCc0IsNkJBQWU7QUE4QjdDLGlCQTlCSXRCLG1CQThCR00sYUFBWTtJQVNyQixXQUFlTiJ9