"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Selectors;
    }
});
var _selector = /*#__PURE__*/ _interop_require_default(require("./selector"));
var _query = require("./utilities/query");
var _constants = require("./constants");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var selectorNonTerminalNodesQuery = (0, _query.nodesQuery)("/selectors/selector");
var Selectors = /*#__PURE__*/ function() {
    function Selectors(array) {
        _class_call_check(this, Selectors);
        this.array = array;
    }
    _create_class(Selectors, [
        {
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                return this.array.length;
            }
        },
        {
            key: "combine",
            value: function combine(selectors) {
                var selectorsArray = selectors.getArray(), array = _to_consumable_array(this.array).concat(_to_consumable_array(selectorsArray));
                selectors = Selectors.fromArray(array); ///
                return selectors;
            }
        },
        {
            key: "asCSS",
            value: function asCSS() {
                var css = _constants.EMPTY_STRING;
                var length = this.getLength();
                if (length > 0) {
                    css = this.array.reduce(function(css, selector) {
                        var selectorCSS = selector.asCSS();
                        css = css === null ? selectorCSS : "".concat(css, " ").concat(selectorCSS);
                        return css;
                    }, null);
                }
                return css;
            }
        }
    ], [
        {
            key: "fromArray",
            value: function fromArray(array) {
                var selectors = new Selectors(array);
                return selectors;
            }
        },
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var selectorNonTerminalNodes = selectorNonTerminalNodesQuery(node), array = selectorNonTerminalNodes.map(function(selectorNonTerminalNode) {
                    var _$node = selectorNonTerminalNode, selector = _selector.default.fromNodeAndTokens(_$node, tokens);
                    return selector;
                }), selectors = new Selectors(array);
                return selectors;
            }
        },
        {
            key: "fromSelectorString",
            value: function fromSelectorString(selectorString) {
                var selector = _selector.default.fromSelectorString(selectorString), array = [
                    selector
                ], selectors = new Selectors(array);
                return selectors;
            }
        }
    ]);
    return Selectors;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3RvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi9zZWxlY3RvclwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3Qgc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3NlbGVjdG9ycy9zZWxlY3RvclwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHsgcmV0dXJuIHRoaXMuYXJyYXkubGVuZ3RoOyB9XG5cbiAgY29tYmluZShzZWxlY3RvcnMpIHtcbiAgICBjb25zdCBzZWxlY3RvcnNBcnJheSA9IHNlbGVjdG9ycy5nZXRBcnJheSgpLFxuICAgICAgICAgIGFycmF5ID0gW1xuICAgICAgICAgICAgLi4udGhpcy5hcnJheSxcbiAgICAgICAgICAgIC4uLnNlbGVjdG9yc0FycmF5XG4gICAgICAgICAgXTtcblxuICAgIHNlbGVjdG9ycyA9IFNlbGVjdG9ycy5mcm9tQXJyYXkoYXJyYXkpOyAvLy9cblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICBhc0NTUygpIHtcbiAgICBsZXQgY3NzID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBjc3MgPSB0aGlzLmFycmF5LnJlZHVjZSgoY3NzLCBzZWxlY3RvcikgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RvckNTUyA9IHNlbGVjdG9yLmFzQ1NTKCk7XG5cbiAgICAgICAgY3NzID0gKGNzcyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yQ1NTIDogLy8vXG4gICAgICAgICAgICAgICAgICBgJHtjc3N9ICR7c2VsZWN0b3JDU1N9YDtcblxuICAgICAgICByZXR1cm4gY3NzO1xuICAgICAgfSwgbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXkoYXJyYXkpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBuZXcgU2VsZWN0b3JzKGFycmF5KTtcblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzID0gc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMubWFwKChzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHNlbGVjdG9yTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvciA9IFNlbGVjdG9yLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzZWxlY3RvcnMgPSBuZXcgU2VsZWN0b3JzKGFycmF5KTtcblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yU3RyaW5nKHNlbGVjdG9yU3RyaW5nKSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBTZWxlY3Rvci5mcm9tU2VsZWN0b3JTdHJpbmcoc2VsZWN0b3JTdHJpbmcpLFxuICAgICAgICAgIGFycmF5ID0gW1xuICAgICAgICAgICAgc2VsZWN0b3JcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlbGVjdG9ycyA9IG5ldyBTZWxlY3RvcnMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNlbGVjdG9ycyIsInNlbGVjdG9yTm9uVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImFycmF5IiwiZ2V0QXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJjb21iaW5lIiwic2VsZWN0b3JzIiwic2VsZWN0b3JzQXJyYXkiLCJmcm9tQXJyYXkiLCJhc0NTUyIsImNzcyIsIkVNUFRZX1NUUklORyIsInJlZHVjZSIsInNlbGVjdG9yIiwic2VsZWN0b3JDU1MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMiLCJtYXAiLCJzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSIsIlNlbGVjdG9yIiwiZnJvbVNlbGVjdG9yU3RyaW5nIiwic2VsZWN0b3JTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OytEQVBBO3FCQUVNO3lCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNQyxnQ0FBZ0NDLElBQUFBLGlCQUFVLEVBQUM7QUFFbEMsSUFBQSxBQUFNRiwwQkFBRCxBQUFMO2FBQU1BLFVBQ1BHLEtBQUs7Z0NBREVIO1FBRWpCLElBQUksQ0FBQ0csS0FBSyxHQUFHQTs7a0JBRklIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxLQUFLO1lBQ25COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDRixLQUFLLENBQUNHLE1BQU07WUFBRTs7O1lBRXhDQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsU0FBUztnQkFDZixJQUFNQyxpQkFBaUJELFVBQVVKLFFBQVEsSUFDbkNELFFBQVEsQUFDTixxQkFBRyxJQUFJLENBQUNBLEtBQUssU0FDYixxQkFBR007Z0JBR1hELFlBQVlSLEFBbEJLQSxVQWtCS1UsU0FBUyxDQUFDUCxRQUFRLEdBQUc7Z0JBRTNDLE9BQU9LO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsTUFBTUMsdUJBQVk7Z0JBRXRCLElBQU1QLFNBQVMsSUFBSSxDQUFDRCxTQUFTO2dCQUU3QixJQUFJQyxTQUFTLEdBQUc7b0JBQ2RNLE1BQU0sSUFBSSxDQUFDVCxLQUFLLENBQUNXLE1BQU0sQ0FBQyxTQUFDRixLQUFLRzt3QkFDNUIsSUFBTUMsY0FBY0QsU0FBU0osS0FBSzt3QkFFbENDLE1BQU0sQUFBQ0EsUUFBUSxPQUNQSSxjQUNFLEFBQUMsR0FBU0EsT0FBUEosS0FBSSxLQUFlLE9BQVpJO3dCQUVwQixPQUFPSjtvQkFDVCxHQUFHO2dCQUNMO2dCQUVBLE9BQU9BO1lBQ1Q7Ozs7WUFFT0YsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVVAsS0FBSztnQkFDcEIsSUFBTUssWUFBWSxJQTVDRFIsVUE0Q2VHO2dCQUVoQyxPQUFPSztZQUNUOzs7WUFFT1MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1DLDJCQUEyQm5CLDhCQUE4QmlCLE9BQ3pEZixRQUFRaUIseUJBQXlCQyxHQUFHLENBQUMsU0FBQ0M7b0JBQ3BDLElBQU1KLFNBQU9JLHlCQUNQUCxXQUFXUSxpQkFBUSxDQUFDTixpQkFBaUIsQ0FBQ0MsUUFBTUM7b0JBRWxELE9BQU9KO2dCQUNULElBQ0FQLFlBQVksSUF6RERSLFVBeURlRztnQkFFaEMsT0FBT0s7WUFDVDs7O1lBRU9nQixLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGNBQWM7Z0JBQ3RDLElBQU1WLFdBQVdRLGlCQUFRLENBQUNDLGtCQUFrQixDQUFDQyxpQkFDdkN0QixRQUFRO29CQUNOWTtpQkFDRCxFQUNEUCxZQUFZLElBbkVEUixVQW1FZUc7Z0JBRWhDLE9BQU9LO1lBQ1Q7OztXQXRFbUJSIn0=