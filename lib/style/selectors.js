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
var _constants = require("../constants");
var _query = require("../utilities/query");
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
var selectorsNonTerminalNodeQuery = (0, _query.nodeQuery)("/ruleSet/selectors"), selectorNonTerminalNodesQuery = (0, _query.nodesQuery)("/selectors/selector");
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
                        css = css === null ? selectorCSS : "".concat(css, ",\n").concat(selectorCSS);
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
                var selectorsNonTerminalNode = selectorsNonTerminalNodeQuery(node);
                node = selectorsNonTerminalNode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3RvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi9zZWxlY3RvclwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVTZXQvc2VsZWN0b3JzXCIpLFxuICAgICAgc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3NlbGVjdG9ycy9zZWxlY3RvclwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIHJlZHVjZVNlbGVjdG9yKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZm9yRWFjaFNlbGVjdG9yKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBjb21iaW5lKHNlbGVjdG9ycykge1xuICAgIGNvbnN0IG91dGVyU2VsZWN0b3JzID0gU2VsZWN0b3JzLmZyb21BcnJheSh0aGlzLmFycmF5KSwgLy8vXG4gICAgICAgICAgaW5uZXJTZWxlY3RvcnMgPSBzZWxlY3RvcnMsIC8vL1xuICAgICAgICAgIGFycmF5ID0gb3V0ZXJTZWxlY3RvcnMucmVkdWNlU2VsZWN0b3IoKGFycmF5LCBvdXRlclNlbGVjdG9yKSA9PiB7XG4gICAgICAgICAgICBpbm5lclNlbGVjdG9ycy5mb3JFYWNoU2VsZWN0b3IoKGlubmVyU2VsZWN0b3IpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBvdXRlclNlbGVjdG9yLmNvbWJpbmUoaW5uZXJTZWxlY3Rvcik7XG5cbiAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgc2VsZWN0b3JzID0gU2VsZWN0b3JzLmZyb21BcnJheShhcnJheSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzO1xuICB9XG5cbiAgYXNDU1MoKSB7XG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgY3NzID0gdGhpcy5hcnJheS5yZWR1Y2UoKGNzcywgc2VsZWN0b3IpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JDU1MgPSBzZWxlY3Rvci5hc0NTUygpO1xuXG4gICAgICAgIGNzcyA9IChjc3MgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBzZWxlY3RvckNTUyA6IC8vL1xuICAgICAgICAgICAgICAgICAgYCR7Y3NzfSxcbiR7c2VsZWN0b3JDU1N9YDtcblxuICAgICAgICByZXR1cm4gY3NzO1xuICAgICAgfSwgbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXkoYXJyYXkpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBuZXcgU2VsZWN0b3JzKGFycmF5KTtcblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlID0gc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlUXVlcnkobm9kZSk7XG5cbiAgICBub2RlID0gc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlOyAgLy8vXG5cbiAgICBjb25zdCBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IHNlbGVjdG9yTm9uVGVybWluYWxOb2Rlcy5tYXAoKHNlbGVjdG9yTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gc2VsZWN0b3JOb25UZXJtaW5hbE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gU2VsZWN0b3IuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHNlbGVjdG9ycyA9IG5ldyBTZWxlY3RvcnMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VsZWN0b3JTdHJpbmcoc2VsZWN0b3JTdHJpbmcpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IFNlbGVjdG9yLmZyb21TZWxlY3RvclN0cmluZyhzZWxlY3RvclN0cmluZyksXG4gICAgICAgICAgYXJyYXkgPSBbXG4gICAgICAgICAgICBzZWxlY3RvclxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2VsZWN0b3JzID0gbmV3IFNlbGVjdG9ycyhhcnJheSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2VsZWN0b3JzIiwic2VsZWN0b3JzTm9uVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJhcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsInJlZHVjZVNlbGVjdG9yIiwiY2FsbGJhY2siLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoU2VsZWN0b3IiLCJmb3JFYWNoIiwiY29tYmluZSIsInNlbGVjdG9ycyIsIm91dGVyU2VsZWN0b3JzIiwiZnJvbUFycmF5IiwiaW5uZXJTZWxlY3RvcnMiLCJvdXRlclNlbGVjdG9yIiwiaW5uZXJTZWxlY3RvciIsInNlbGVjdG9yIiwicHVzaCIsImFzQ1NTIiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwic2VsZWN0b3JDU1MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGUiLCJzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMiLCJtYXAiLCJzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSIsIlNlbGVjdG9yIiwiZnJvbVNlbGVjdG9yU3RyaW5nIiwic2VsZWN0b3JTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7OytEQVJBO3lCQUVRO3FCQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1DLGdDQUFnQ0MsSUFBQUEsZ0JBQVMsRUFBQyx1QkFDMUNDLGdDQUFnQ0MsSUFBQUEsaUJBQVUsRUFBQztBQUVsQyxJQUFBLEFBQU1KLDBCQUFELEFBQUw7YUFBTUEsVUFDUEssS0FBSztnQ0FERUw7UUFFakIsSUFBSSxDQUFDSyxLQUFLLEdBQUdBOztrQkFGSUw7O1lBS25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNELEtBQUssQ0FBQ0UsTUFBTTtZQUFFOzs7WUFFeENDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxRQUFRLEVBQUVDLFlBQVk7Z0JBQUksT0FBTyxJQUFJLENBQUNMLEtBQUssQ0FBQ00sTUFBTSxDQUFDRixVQUFVQztZQUFlOzs7WUFFM0ZFLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JILFFBQVE7Z0JBQUksSUFBSSxDQUFDSixLQUFLLENBQUNRLE9BQU8sQ0FBQ0o7WUFBVzs7O1lBRTFESyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsU0FBUztnQkFDZixJQUFNQyxpQkFBaUJoQixBQVpOQSxVQVlnQmlCLFNBQVMsQ0FBQyxJQUFJLENBQUNaLEtBQUssR0FDL0NhLGlCQUFpQkgsV0FDakJWLFFBQVFXLGVBQWVSLGNBQWMsQ0FBQyxTQUFDSCxPQUFPYztvQkFDNUNELGVBQWVOLGVBQWUsQ0FBQyxTQUFDUTt3QkFDOUIsSUFBTUMsV0FBV0YsY0FBY0wsT0FBTyxDQUFDTTt3QkFFdkMsSUFBSUMsYUFBYSxNQUFNOzRCQUNyQmhCLE1BQU1pQixJQUFJLENBQUNEO3dCQUNiO29CQUNGO29CQUVBLE9BQU9oQjtnQkFDVCxHQUFHLEVBQUU7Z0JBRVhVLFlBQVlmLEFBMUJLQSxVQTBCS2lCLFNBQVMsQ0FBQ1o7Z0JBRWhDLE9BQU9VO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsTUFBTUMsdUJBQVk7Z0JBRXRCLElBQU1sQixTQUFTLElBQUksQ0FBQ0QsU0FBUztnQkFFN0IsSUFBSUMsU0FBUyxHQUFHO29CQUNkaUIsTUFBTSxJQUFJLENBQUNuQixLQUFLLENBQUNNLE1BQU0sQ0FBQyxTQUFDYSxLQUFLSDt3QkFDNUIsSUFBTUssY0FBY0wsU0FBU0UsS0FBSzt3QkFFbENDLE1BQU0sQUFBQ0EsUUFBUSxPQUNQRSxjQUNFLEFBQUMsR0FDakJBLE9BRG1CRixLQUFJLE9BQ1gsT0FBWkU7d0JBRU0sT0FBT0Y7b0JBQ1QsR0FBRztnQkFDTDtnQkFFQSxPQUFPQTtZQUNUOzs7O1lBRU9QLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVaLEtBQUs7Z0JBQ3BCLElBQU1VLFlBQVksSUFyRERmLFVBcURlSztnQkFFaEMsT0FBT1U7WUFDVDs7O1lBRU9ZLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUNuQyxJQUFNQywyQkFBMkI3Qiw4QkFBOEIyQjtnQkFFL0RBLE9BQU9FLDBCQUEyQixHQUFHO2dCQUVyQyxJQUFNQywyQkFBMkI1Qiw4QkFBOEJ5QixPQUN6RHZCLFFBQVEwQix5QkFBeUJDLEdBQUcsQ0FBQyxTQUFDQztvQkFDcEMsSUFBTUwsU0FBT0sseUJBQ1BaLFdBQVdhLGlCQUFRLENBQUNQLGlCQUFpQixDQUFDQyxRQUFNQztvQkFFbEQsT0FBT1I7Z0JBQ1QsSUFDQU4sWUFBWSxJQXRFRGYsVUFzRWVLO2dCQUVoQyxPQUFPVTtZQUNUOzs7WUFFT29CLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsY0FBYztnQkFDdEMsSUFBTWYsV0FBV2EsaUJBQVEsQ0FBQ0Msa0JBQWtCLENBQUNDLGlCQUN2Qy9CLFFBQVE7b0JBQ05nQjtpQkFDRCxFQUNETixZQUFZLElBaEZEZixVQWdGZUs7Z0JBRWhDLE9BQU9VO1lBQ1Q7OztXQW5GbUJmIn0=