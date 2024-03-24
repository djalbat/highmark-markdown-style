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
                var outerSelectors = Selectors.fromArray(this.array), innerSelectors = selectors, array = outerSelectors.reduceSelector(function(array, outerSelector) {
                    innerSelectors.forEachSelector(function(innerSelector) {
                        var selector = outerSelector.combine(innerSelector);
                        if (selector !== null) {
                            array.push(selector);
                        }
                    });
                    return array;
                }, []);
                selectors = Selectors.fromArray(array);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3RvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi9zZWxlY3RvclwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3Qgc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3NlbGVjdG9ycy9zZWxlY3RvclwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIHJlZHVjZVNlbGVjdG9yKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZm9yRWFjaFNlbGVjdG9yKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBjb21iaW5lKHNlbGVjdG9ycykge1xuICAgIGNvbnN0IG91dGVyU2VsZWN0b3JzID0gU2VsZWN0b3JzLmZyb21BcnJheSh0aGlzLmFycmF5KSwgLy8vXG4gICAgICAgICAgaW5uZXJTZWxlY3RvcnMgPSBzZWxlY3RvcnMsIC8vL1xuICAgICAgICAgIGFycmF5ID0gb3V0ZXJTZWxlY3RvcnMucmVkdWNlU2VsZWN0b3IoKGFycmF5LCBvdXRlclNlbGVjdG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpbm5lclNlbGVjdG9ycy5mb3JFYWNoU2VsZWN0b3IoKGlubmVyU2VsZWN0b3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBvdXRlclNlbGVjdG9yLmNvbWJpbmUoaW5uZXJTZWxlY3Rvcik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgc2VsZWN0b3JzID0gU2VsZWN0b3JzLmZyb21BcnJheShhcnJheSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzO1xuICB9XG5cbiAgYXNDU1MoKSB7XG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgY3NzID0gdGhpcy5hcnJheS5yZWR1Y2UoKGNzcywgc2VsZWN0b3IpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JDU1MgPSBzZWxlY3Rvci5hc0NTUygpO1xuXG4gICAgICAgIGNzcyA9IChjc3MgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBzZWxlY3RvckNTUyA6IC8vL1xuICAgICAgICAgICAgICAgICAgYCR7Y3NzfSAke3NlbGVjdG9yQ1NTfWA7XG5cbiAgICAgICAgcmV0dXJuIGNzcztcbiAgICAgIH0sIG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5KGFycmF5KSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gbmV3IFNlbGVjdG9ycyhhcnJheSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHNlbGVjdG9yTm9uVGVybWluYWxOb2RlcyA9IHNlbGVjdG9yTm9uVGVybWluYWxOb2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzLm1hcCgoc2VsZWN0b3JOb25UZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBTZWxlY3Rvci5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc2VsZWN0b3JzID0gbmV3IFNlbGVjdG9ycyhhcnJheSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TZWxlY3RvclN0cmluZyhzZWxlY3RvclN0cmluZykge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gU2VsZWN0b3IuZnJvbVNlbGVjdG9yU3RyaW5nKHNlbGVjdG9yU3RyaW5nKSxcbiAgICAgICAgICBhcnJheSA9IFtcbiAgICAgICAgICAgIHNlbGVjdG9yXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZWxlY3RvcnMgPSBuZXcgU2VsZWN0b3JzKGFycmF5KTtcblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTZWxlY3RvcnMiLCJzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJhcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsInJlZHVjZVNlbGVjdG9yIiwiY2FsbGJhY2siLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoU2VsZWN0b3IiLCJmb3JFYWNoIiwiY29tYmluZSIsInNlbGVjdG9ycyIsIm91dGVyU2VsZWN0b3JzIiwiZnJvbUFycmF5IiwiaW5uZXJTZWxlY3RvcnMiLCJvdXRlclNlbGVjdG9yIiwiaW5uZXJTZWxlY3RvciIsInNlbGVjdG9yIiwicHVzaCIsImFzQ1NTIiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwic2VsZWN0b3JDU1MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMiLCJtYXAiLCJzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSIsIlNlbGVjdG9yIiwiZnJvbVNlbGVjdG9yU3RyaW5nIiwic2VsZWN0b3JTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OytEQVBBO3FCQUVNO3lCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU1DLGdDQUFnQ0MsSUFBQUEsaUJBQVUsRUFBQztBQUVsQyxJQUFBLEFBQU1GLDBCQUFELEFBQUw7YUFBTUEsVUFDUEcsS0FBSztnQ0FERUg7UUFFakIsSUFBSSxDQUFDRyxLQUFLLEdBQUdBOztrQkFGSUg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNELEtBQUssQ0FBQ0UsTUFBTTtZQUFFOzs7WUFFeENDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxRQUFRLEVBQUVDLFlBQVk7Z0JBQUksT0FBTyxJQUFJLENBQUNMLEtBQUssQ0FBQ00sTUFBTSxDQUFDRixVQUFVQztZQUFlOzs7WUFFM0ZFLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JILFFBQVE7Z0JBQUksSUFBSSxDQUFDSixLQUFLLENBQUNRLE9BQU8sQ0FBQ0o7WUFBVzs7O1lBRTFESyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsU0FBUztnQkFDZixJQUFNQyxpQkFBaUJkLEFBWk5BLFVBWWdCZSxTQUFTLENBQUMsSUFBSSxDQUFDWixLQUFLLEdBQy9DYSxpQkFBaUJILFdBQ2pCVixRQUFRVyxlQUFlUixjQUFjLENBQUMsU0FBQ0gsT0FBT2M7b0JBQ3RDRCxlQUFlTixlQUFlLENBQUMsU0FBQ1E7d0JBQzlCLElBQU1DLFdBQVdGLGNBQWNMLE9BQU8sQ0FBQ007d0JBRXZDLElBQUlDLGFBQWEsTUFBTTs0QkFDckJoQixNQUFNaUIsSUFBSSxDQUFDRDt3QkFDYjtvQkFDRjtvQkFFTixPQUFPaEI7Z0JBQ1QsR0FBRyxFQUFFO2dCQUVYVSxZQUFZYixBQTFCS0EsVUEwQktlLFNBQVMsQ0FBQ1o7Z0JBRWhDLE9BQU9VO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsTUFBTUMsdUJBQVk7Z0JBRXRCLElBQU1sQixTQUFTLElBQUksQ0FBQ0QsU0FBUztnQkFFN0IsSUFBSUMsU0FBUyxHQUFHO29CQUNkaUIsTUFBTSxJQUFJLENBQUNuQixLQUFLLENBQUNNLE1BQU0sQ0FBQyxTQUFDYSxLQUFLSDt3QkFDNUIsSUFBTUssY0FBY0wsU0FBU0UsS0FBSzt3QkFFbENDLE1BQU0sQUFBQ0EsUUFBUSxPQUNQRSxjQUNFLEFBQUMsR0FBU0EsT0FBUEYsS0FBSSxLQUFlLE9BQVpFO3dCQUVwQixPQUFPRjtvQkFDVCxHQUFHO2dCQUNMO2dCQUVBLE9BQU9BO1lBQ1Q7Ozs7WUFFT1AsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVVosS0FBSztnQkFDcEIsSUFBTVUsWUFBWSxJQXBERGIsVUFvRGVHO2dCQUVoQyxPQUFPVTtZQUNUOzs7WUFFT1ksS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1DLDJCQUEyQjNCLDhCQUE4QnlCLE9BQ3pEdkIsUUFBUXlCLHlCQUF5QkMsR0FBRyxDQUFDLFNBQUNDO29CQUNwQyxJQUFNSixTQUFPSSx5QkFDUFgsV0FBV1ksaUJBQVEsQ0FBQ04saUJBQWlCLENBQUNDLFFBQU1DO29CQUVsRCxPQUFPUjtnQkFDVCxJQUNBTixZQUFZLElBakVEYixVQWlFZUc7Z0JBRWhDLE9BQU9VO1lBQ1Q7OztZQUVPbUIsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxjQUFjO2dCQUN0QyxJQUFNZCxXQUFXWSxpQkFBUSxDQUFDQyxrQkFBa0IsQ0FBQ0MsaUJBQ3ZDOUIsUUFBUTtvQkFDTmdCO2lCQUNELEVBQ0ROLFlBQVksSUEzRURiLFVBMkVlRztnQkFFaEMsT0FBT1U7WUFDVDs7O1dBOUVtQmIifQ==