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
var selectorNonTerminalNodesQuery = (0, _query.nodesQuery)("/selectors/selector");
var Selectors = /*#__PURE__*/ function() {
    function Selectors(array) {
        _class_call_check(this, Selectors);
        this.array = array;
    }
    _create_class(Selectors, [
        {
            key: "getLength",
            value: function getLength() {
                return this.array.length;
            }
        },
        {
            key: "reduceSelector",
            value: function reduceSelector(callback, initialValue) {
                return this.array.reduce(callback, initialValue);
            }
        },
        {
            key: "forEachSelector",
            value: function forEachSelector(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "combine",
            value: function combine(selectors) {
                var outermost = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var outerSelectors = Selectors.fromArray(this.array), innerSelectors = selectors, array = outerSelectors.reduceSelector(function(array, outerSelector) {
                    innerSelectors.forEachSelector(function(innerSelector) {
                        var selector = outerSelector.combine(innerSelector, outermost);
                        if (selector !== null) {
                            array.push(selector);
                        }
                    });
                    return array;
                }, []), length = array.length;
                selectors = length === 0 ? null : Selectors.fromArray(array);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3RvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi9zZWxlY3RvclwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3Qgc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3NlbGVjdG9ycy9zZWxlY3RvclwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIHJlZHVjZVNlbGVjdG9yKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZm9yRWFjaFNlbGVjdG9yKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBjb21iaW5lKHNlbGVjdG9ycywgb3V0ZXJtb3N0ID0gZmFsc2UpIHtcbiAgICBjb25zdCBvdXRlclNlbGVjdG9ycyA9IFNlbGVjdG9ycy5mcm9tQXJyYXkodGhpcy5hcnJheSksIC8vL1xuICAgICAgICAgIGlubmVyU2VsZWN0b3JzID0gc2VsZWN0b3JzLCAvLy9cbiAgICAgICAgICBhcnJheSA9IG91dGVyU2VsZWN0b3JzLnJlZHVjZVNlbGVjdG9yKChhcnJheSwgb3V0ZXJTZWxlY3RvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgaW5uZXJTZWxlY3RvcnMuZm9yRWFjaFNlbGVjdG9yKChpbm5lclNlbGVjdG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gb3V0ZXJTZWxlY3Rvci5jb21iaW5lKGlubmVyU2VsZWN0b3IsIG91dGVybW9zdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICAgIHNlbGVjdG9ycyA9IChsZW5ndGggPT09IDApID9cbiAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICBTZWxlY3RvcnMuZnJvbUFycmF5KGFycmF5KTtcblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICBhc0NTUygpIHtcbiAgICBsZXQgY3NzID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBjc3MgPSB0aGlzLmFycmF5LnJlZHVjZSgoY3NzLCBzZWxlY3RvcikgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RvckNTUyA9IHNlbGVjdG9yLmFzQ1NTKCk7XG5cbiAgICAgICAgY3NzID0gKGNzcyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yQ1NTIDogLy8vXG4gICAgICAgICAgICAgICAgICBgJHtjc3N9ICR7c2VsZWN0b3JDU1N9YDtcblxuICAgICAgICByZXR1cm4gY3NzO1xuICAgICAgfSwgbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXkoYXJyYXkpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBuZXcgU2VsZWN0b3JzKGFycmF5KTtcblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzID0gc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMubWFwKChzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHNlbGVjdG9yTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvciA9IFNlbGVjdG9yLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzZWxlY3RvcnMgPSBuZXcgU2VsZWN0b3JzKGFycmF5KTtcblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yU3RyaW5nKHNlbGVjdG9yU3RyaW5nKSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBTZWxlY3Rvci5mcm9tU2VsZWN0b3JTdHJpbmcoc2VsZWN0b3JTdHJpbmcpLFxuICAgICAgICAgIGFycmF5ID0gW1xuICAgICAgICAgICAgc2VsZWN0b3JcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlbGVjdG9ycyA9IG5ldyBTZWxlY3RvcnMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNlbGVjdG9ycyIsInNlbGVjdG9yTm9uVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwicmVkdWNlU2VsZWN0b3IiLCJjYWxsYmFjayIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2hTZWxlY3RvciIsImZvckVhY2giLCJjb21iaW5lIiwic2VsZWN0b3JzIiwib3V0ZXJtb3N0Iiwib3V0ZXJTZWxlY3RvcnMiLCJmcm9tQXJyYXkiLCJpbm5lclNlbGVjdG9ycyIsIm91dGVyU2VsZWN0b3IiLCJpbm5lclNlbGVjdG9yIiwic2VsZWN0b3IiLCJwdXNoIiwiYXNDU1MiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJzZWxlY3RvckNTUyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsInNlbGVjdG9yTm9uVGVybWluYWxOb2RlcyIsIm1hcCIsInNlbGVjdG9yTm9uVGVybWluYWxOb2RlIiwiU2VsZWN0b3IiLCJmcm9tU2VsZWN0b3JTdHJpbmciLCJzZWxlY3RvclN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7K0RBUEE7cUJBRU07eUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTUMsZ0NBQWdDQyxJQUFBQSxpQkFBVSxFQUFDO0FBRWxDLElBQUEsQUFBTUYsMEJBQUQsQUFBTDthQUFNQSxVQUNQRyxLQUFLO2dDQURFSDtRQUVqQixJQUFJLENBQUNHLEtBQUssR0FBR0E7O2tCQUZJSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0QsS0FBSyxDQUFDRSxNQUFNO1lBQUU7OztZQUV4Q0MsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLFFBQVEsRUFBRUMsWUFBWTtnQkFBSSxPQUFPLElBQUksQ0FBQ0wsS0FBSyxDQUFDTSxNQUFNLENBQUNGLFVBQVVDO1lBQWU7OztZQUUzRkUsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkgsUUFBUTtnQkFBSSxJQUFJLENBQUNKLEtBQUssQ0FBQ1EsT0FBTyxDQUFDSjtZQUFXOzs7WUFFMURLLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxTQUFTO29CQUFFQyxZQUFBQSxpRUFBWTtnQkFDN0IsSUFBTUMsaUJBQWlCZixBQVpOQSxVQVlnQmdCLFNBQVMsQ0FBQyxJQUFJLENBQUNiLEtBQUssR0FDL0NjLGlCQUFpQkosV0FDakJWLFFBQVFZLGVBQWVULGNBQWMsQ0FBQyxTQUFDSCxPQUFPZTtvQkFDdENELGVBQWVQLGVBQWUsQ0FBQyxTQUFDUzt3QkFDOUIsSUFBTUMsV0FBV0YsY0FBY04sT0FBTyxDQUFDTyxlQUFlTDt3QkFFdEQsSUFBSU0sYUFBYSxNQUFNOzRCQUNyQmpCLE1BQU1rQixJQUFJLENBQUNEO3dCQUNiO29CQUNGO29CQUVOLE9BQU9qQjtnQkFDVCxHQUFHLEVBQUUsR0FDTEUsU0FBU0YsTUFBTUUsTUFBTTtnQkFFM0JRLFlBQVksQUFBQ1IsV0FBVyxJQUNWLE9BQ0VMLEFBN0JDQSxVQTZCU2dCLFNBQVMsQ0FBQ2I7Z0JBRXBDLE9BQU9VO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsTUFBTUMsdUJBQVk7Z0JBRXRCLElBQU1uQixTQUFTLElBQUksQ0FBQ0QsU0FBUztnQkFFN0IsSUFBSUMsU0FBUyxHQUFHO29CQUNka0IsTUFBTSxJQUFJLENBQUNwQixLQUFLLENBQUNNLE1BQU0sQ0FBQyxTQUFDYyxLQUFLSDt3QkFDNUIsSUFBTUssY0FBY0wsU0FBU0UsS0FBSzt3QkFFbENDLE1BQU0sQUFBQ0EsUUFBUSxPQUNQRSxjQUNFLEFBQUMsR0FBU0EsT0FBUEYsS0FBSSxLQUFlLE9BQVpFO3dCQUVwQixPQUFPRjtvQkFDVCxHQUFHO2dCQUNMO2dCQUVBLE9BQU9BO1lBQ1Q7Ozs7WUFFT1AsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVWIsS0FBSztnQkFDcEIsSUFBTVUsWUFBWSxJQXZERGIsVUF1RGVHO2dCQUVoQyxPQUFPVTtZQUNUOzs7WUFFT2EsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1DLDJCQUEyQjVCLDhCQUE4QjBCLE9BQ3pEeEIsUUFBUTBCLHlCQUF5QkMsR0FBRyxDQUFDLFNBQUNDO29CQUNwQyxJQUFNSixTQUFPSSx5QkFDUFgsV0FBV1ksaUJBQVEsQ0FBQ04saUJBQWlCLENBQUNDLFFBQU1DO29CQUVsRCxPQUFPUjtnQkFDVCxJQUNBUCxZQUFZLElBcEVEYixVQW9FZUc7Z0JBRWhDLE9BQU9VO1lBQ1Q7OztZQUVPb0IsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxjQUFjO2dCQUN0QyxJQUFNZCxXQUFXWSxpQkFBUSxDQUFDQyxrQkFBa0IsQ0FBQ0MsaUJBQ3ZDL0IsUUFBUTtvQkFDTmlCO2lCQUNELEVBQ0RQLFlBQVksSUE5RURiLFVBOEVlRztnQkFFaEMsT0FBT1U7WUFDVDs7O1dBakZtQmIifQ==