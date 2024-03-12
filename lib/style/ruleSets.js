"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleSets;
    }
});
var _ruleSet = /*#__PURE__*/ _interop_require_default(require("./ruleSet"));
var _query = require("../utilities/query");
var _constants = require("../constants");
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
var ruleSetNonTerminalNodesQuery = (0, _query.nodesQuery)("/*/ruleSet");
var RuleSets = /*#__PURE__*/ function() {
    function RuleSets(array) {
        _class_call_check(this, RuleSets);
        this.array = array;
    }
    _create_class(RuleSets, [
        {
            key: "pushRuleSet",
            value: function pushRuleSet(ruleSet) {
                this.array.push(ruleSet);
            }
        },
        {
            key: "unshiftRuleSet",
            value: function unshiftRuleSet(ruleSet) {
                this.array.unshift(ruleSet);
            }
        },
        {
            key: "asCSS",
            value: function asCSS(selectors) {
                var css = this.array.reduce(function(css, ruleSet) {
                    var ruleSetCSS = ruleSet.asCSS(selectors);
                    css += ruleSetCSS;
                    return css;
                }, _constants.EMPTY_STRING);
                return css;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var array = [], ruleSets = new RuleSets(array);
                return ruleSets;
            }
        },
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var ruleSetNonTerminalNodes = ruleSetNonTerminalNodesQuery(node), array = ruleSetNonTerminalNodes.map(function(ruleSetNonTerminalNode) {
                    var _$node = ruleSetNonTerminalNode, ruleSet = _ruleSet.default.fromRuleSetsNodeAndTokens(RuleSets, _$node, tokens);
                    return ruleSet;
                }), ruleSets = new RuleSets(array);
                return ruleSets;
            }
        }
    ]);
    return RuleSets;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVTZXQgZnJvbSBcIi4vcnVsZVNldFwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBydWxlU2V0Tm9uVGVybWluYWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi8qL3J1bGVTZXRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVTZXRzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBwdXNoUnVsZVNldChydWxlU2V0KSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKHJ1bGVTZXQpO1xuICB9XG5cbiAgdW5zaGlmdFJ1bGVTZXQocnVsZVNldCkge1xuICAgIHRoaXMuYXJyYXkudW5zaGlmdChydWxlU2V0KTtcbiAgfVxuXG4gIGFzQ1NTKHNlbGVjdG9ycykge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIHJ1bGVTZXQpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVTZXRDU1MgPSBydWxlU2V0LmFzQ1NTKHNlbGVjdG9ycyk7XG5cbiAgICAgIGNzcyArPSBydWxlU2V0Q1NTO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgcnVsZVNldHMgPSBuZXcgUnVsZVNldHMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHJ1bGVTZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHJ1bGVTZXROb25UZXJtaW5hbE5vZGVzID0gcnVsZVNldE5vblRlcm1pbmFsTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IHJ1bGVTZXROb25UZXJtaW5hbE5vZGVzLm1hcCgocnVsZVNldE5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHJ1bGVTZXROb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgcnVsZVNldCA9IFJ1bGVTZXQuZnJvbVJ1bGVTZXRzTm9kZUFuZFRva2VucyhSdWxlU2V0cywgbm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVTZXQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcnVsZVNldHMgPSBuZXcgUnVsZVNldHMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHJ1bGVTZXRzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUnVsZVNldHMiLCJydWxlU2V0Tm9uVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImFycmF5IiwicHVzaFJ1bGVTZXQiLCJydWxlU2V0IiwicHVzaCIsInVuc2hpZnRSdWxlU2V0IiwidW5zaGlmdCIsImFzQ1NTIiwic2VsZWN0b3JzIiwiY3NzIiwicmVkdWNlIiwicnVsZVNldENTUyIsIkVNUFRZX1NUUklORyIsImZyb21Ob3RoaW5nIiwicnVsZVNldHMiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJydWxlU2V0Tm9uVGVybWluYWxOb2RlcyIsIm1hcCIsInJ1bGVTZXROb25UZXJtaW5hbE5vZGUiLCJSdWxlU2V0IiwiZnJvbVJ1bGVTZXRzTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7OERBUEQ7cUJBRU87eUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTUMsK0JBQStCQyxJQUFBQSxpQkFBVSxFQUFDO0FBRWpDLElBQUEsQUFBTUYseUJBQUQsQUFBTDthQUFNQSxTQUNQRyxLQUFLO2dDQURFSDtRQUVqQixJQUFJLENBQUNHLEtBQUssR0FBR0E7O2tCQUZJSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZQyxPQUFPO2dCQUNqQixJQUFJLENBQUNGLEtBQUssQ0FBQ0csSUFBSSxDQUFDRDtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlRixPQUFPO2dCQUNwQixJQUFJLENBQUNGLEtBQUssQ0FBQ0ssT0FBTyxDQUFDSDtZQUNyQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxTQUFTO2dCQUNiLElBQU1DLE1BQU0sSUFBSSxDQUFDUixLQUFLLENBQUNTLE1BQU0sQ0FBQyxTQUFDRCxLQUFLTjtvQkFDbEMsSUFBTVEsYUFBYVIsUUFBUUksS0FBSyxDQUFDQztvQkFFakNDLE9BQU9FO29CQUVQLE9BQU9GO2dCQUNULEdBQUdHLHVCQUFZO2dCQUVmLE9BQU9IO1lBQ1Q7Ozs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTVosUUFBUSxFQUFFLEVBQ1ZhLFdBQVcsSUEzQkFoQixTQTJCYUc7Z0JBRTlCLE9BQU9hO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBTUMsMEJBQTBCbkIsNkJBQTZCaUIsT0FDdkRmLFFBQVFpQix3QkFBd0JDLEdBQUcsQ0FBQyxTQUFDQztvQkFDbkMsSUFBTUosU0FBT0ksd0JBQ1BqQixVQUFVa0IsZ0JBQU8sQ0FBQ0MseUJBQXlCLENBcEN4Q3hCLFVBb0NtRGtCLFFBQU1DO29CQUVsRSxPQUFPZDtnQkFDVCxJQUNBVyxXQUFXLElBeENBaEIsU0F3Q2FHO2dCQUU5QixPQUFPYTtZQUNUOzs7V0EzQ21CaEIifQ==