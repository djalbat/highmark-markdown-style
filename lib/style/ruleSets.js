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
            key: "asCSS",
            value: function asCSS(indent) {
                var css = this.array.reduce(function(css, ruleSet) {
                    var ruleSetCSS = ruleSet.asCSS(indent);
                    css += ruleSetCSS;
                    return css;
                }, _constants.EMPTY_STRING);
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var ruleSetNonTerminalNodes = ruleSetNonTerminalNodesQuery(node), array = ruleSetNonTerminalNodes.map(function(ruleSetNonTerminalNode) {
                    var _$node = ruleSetNonTerminalNode, ruleSet = _ruleSet.default.fromNodeAndTokens(_$node, tokens);
                    return ruleSet;
                }), ruleSets = new RuleSets(array);
                return ruleSets;
            }
        }
    ]);
    return RuleSets;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVTZXQgZnJvbSBcIi4vcnVsZVNldFwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBydWxlU2V0Tm9uVGVybWluYWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi8qL3J1bGVTZXRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVTZXRzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBwdXNoUnVsZVNldChydWxlU2V0KSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKHJ1bGVTZXQpO1xuICB9XG5cbiAgYXNDU1MoaW5kZW50KSB7XG4gICAgY29uc3QgY3NzID0gdGhpcy5hcnJheS5yZWR1Y2UoKGNzcywgcnVsZVNldCkgPT4ge1xuICAgICAgY29uc3QgcnVsZVNldENTUyA9IHJ1bGVTZXQuYXNDU1MoaW5kZW50KTtcblxuICAgICAgY3NzICs9IHJ1bGVTZXRDU1M7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcnVsZVNldE5vblRlcm1pbmFsTm9kZXMgPSBydWxlU2V0Tm9uVGVybWluYWxOb2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gcnVsZVNldE5vblRlcm1pbmFsTm9kZXMubWFwKChydWxlU2V0Tm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gcnVsZVNldE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBydWxlU2V0ID0gUnVsZVNldC5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZVNldDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlU2V0cyA9IG5ldyBSdWxlU2V0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcnVsZVNldHM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlU2V0cyIsInJ1bGVTZXROb25UZXJtaW5hbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiYXJyYXkiLCJwdXNoUnVsZVNldCIsInJ1bGVTZXQiLCJwdXNoIiwiYXNDU1MiLCJpbmRlbnQiLCJjc3MiLCJyZWR1Y2UiLCJydWxlU2V0Q1NTIiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwicnVsZVNldE5vblRlcm1pbmFsTm9kZXMiLCJtYXAiLCJydWxlU2V0Tm9uVGVybWluYWxOb2RlIiwiUnVsZVNldCIsInJ1bGVTZXRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs4REFQRDtxQkFFTzt5QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNQywrQkFBK0JDLElBQUFBLGlCQUFVLEVBQUM7QUFFakMsSUFBQSxBQUFNRix5QkFBRCxBQUFMO2FBQU1BLFNBQ1BHLEtBQUs7Z0NBREVIO1FBRWpCLElBQUksQ0FBQ0csS0FBSyxHQUFHQTs7a0JBRklIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLE9BQU87Z0JBQ2pCLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxJQUFJLENBQUNEO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE1BQU07Z0JBQ1YsSUFBTUMsTUFBTSxJQUFJLENBQUNOLEtBQUssQ0FBQ08sTUFBTSxDQUFDLFNBQUNELEtBQUtKO29CQUNsQyxJQUFNTSxhQUFhTixRQUFRRSxLQUFLLENBQUNDO29CQUVqQ0MsT0FBT0U7b0JBRVAsT0FBT0Y7Z0JBQ1QsR0FBR0csdUJBQVk7Z0JBRWYsT0FBT0g7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBTUMsMEJBQTBCZiw2QkFBNkJhLE9BQ3ZEWCxRQUFRYSx3QkFBd0JDLEdBQUcsQ0FBQyxTQUFDQztvQkFDbkMsSUFBTUosU0FBT0ksd0JBQ1BiLFVBQVVjLGdCQUFPLENBQUNOLGlCQUFpQixDQUFDQyxRQUFNQztvQkFFaEQsT0FBT1Y7Z0JBQ1QsSUFDQWUsV0FBVyxJQTdCQXBCLFNBNkJhRztnQkFFOUIsT0FBT2lCO1lBQ1Q7OztXQWhDbUJwQiJ9