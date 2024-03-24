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
var ruleSetNonTerminalNodesQuery = (0, _query.nodesQuery)("/*/ruleSet");
var RuleSets = /*#__PURE__*/ function() {
    function RuleSets(array) {
        _class_call_check(this, RuleSets);
        this.array = array;
    }
    _create_class(RuleSets, [
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
            key: "asCSS",
            value: function asCSS(selectorsList) {
                var css = _constants.EMPTY_STRING;
                var length = this.getLength(), selectorsListLength = selectorsList.getLength();
                if (length > 0 && selectorsListLength > 0) {
                    css = this.array.reduce(function(css, ruleSet) {
                        var ruleSetCSS = ruleSet.asCSS(selectorsList);
                        css = css === null ? ruleSetCSS : "".concat(css).concat(ruleSetCSS);
                        return css;
                    }, null);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlU2V0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVTZXQgZnJvbSBcIi4vcnVsZVNldFwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgcnVsZVNldE5vblRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvKi9ydWxlU2V0XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0cyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIGFzQ1NTKHNlbGVjdG9yc0xpc3QpIHtcbiAgICBsZXQgY3NzID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0TGVuZ3RoID0gc2VsZWN0b3JzTGlzdC5nZXRMZW5ndGgoKTtcblxuICAgIGlmICgobGVuZ3RoID4gMCkgJiYgKHNlbGVjdG9yc0xpc3RMZW5ndGggPiAwKSkge1xuICAgICAgY3NzID0gdGhpcy5hcnJheS5yZWR1Y2UoKGNzcywgcnVsZVNldCkgPT4ge1xuICAgICAgICBjb25zdCBydWxlU2V0Q1NTID0gcnVsZVNldC5hc0NTUyhzZWxlY3RvcnNMaXN0KTtcblxuICAgICAgICBjc3MgPSAoY3NzID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgcnVsZVNldENTUyA6ICAvLy9cbiAgICAgICAgICAgICAgICAgIGAke2Nzc30ke3J1bGVTZXRDU1N9YDtcblxuICAgICAgICByZXR1cm4gY3NzO1xuICAgICAgfSwgbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHJ1bGVTZXRzID0gbmV3IFJ1bGVTZXRzKGFycmF5KTtcblxuICAgIHJldHVybiBydWxlU2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBydWxlU2V0Tm9uVGVybWluYWxOb2RlcyA9IHJ1bGVTZXROb25UZXJtaW5hbE5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBydWxlU2V0Tm9uVGVybWluYWxOb2Rlcy5tYXAoKHJ1bGVTZXROb25UZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBydWxlU2V0Tm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHJ1bGVTZXQgPSBSdWxlU2V0LmZyb21SdWxlU2V0c05vZGVBbmRUb2tlbnMoUnVsZVNldHMsIG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlU2V0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJ1bGVTZXRzID0gbmV3IFJ1bGVTZXRzKGFycmF5KTtcblxuICAgIHJldHVybiBydWxlU2V0cztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVTZXRzIiwicnVsZVNldE5vblRlcm1pbmFsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJhcnJheSIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiYXNDU1MiLCJzZWxlY3RvcnNMaXN0IiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwic2VsZWN0b3JzTGlzdExlbmd0aCIsInJlZHVjZSIsInJ1bGVTZXQiLCJydWxlU2V0Q1NTIiwiZnJvbU5vdGhpbmciLCJydWxlU2V0cyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsInJ1bGVTZXROb25UZXJtaW5hbE5vZGVzIiwibWFwIiwicnVsZVNldE5vblRlcm1pbmFsTm9kZSIsIlJ1bGVTZXQiLCJmcm9tUnVsZVNldHNOb2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs4REFQRDtxQkFFTzt5QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNQywrQkFBK0JDLElBQUFBLGlCQUFVLEVBQUM7QUFFakMsSUFBQSxBQUFNRix5QkFBRCxBQUFMO2FBQU1BLFNBQ1BHLEtBQUs7Z0NBREVIO1FBRWpCLElBQUksQ0FBQ0csS0FBSyxHQUFHQTs7a0JBRklIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxLQUFLO1lBQ25COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDRixLQUFLLENBQUNHLE1BQU07WUFBRTs7O1lBRXhDQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsYUFBYTtnQkFDakIsSUFBSUMsTUFBTUMsdUJBQVk7Z0JBRXRCLElBQU1KLFNBQVMsSUFBSSxDQUFDRCxTQUFTLElBQ3ZCTSxzQkFBc0JILGNBQWNILFNBQVM7Z0JBRW5ELElBQUksQUFBQ0MsU0FBUyxLQUFPSyxzQkFBc0IsR0FBSTtvQkFDN0NGLE1BQU0sSUFBSSxDQUFDTixLQUFLLENBQUNTLE1BQU0sQ0FBQyxTQUFDSCxLQUFLSTt3QkFDNUIsSUFBTUMsYUFBYUQsUUFBUU4sS0FBSyxDQUFDQzt3QkFFakNDLE1BQU0sQUFBQ0EsUUFBUSxPQUNQSyxhQUNFLEFBQUMsR0FBUUEsT0FBTkwsS0FBaUIsT0FBWEs7d0JBRW5CLE9BQU9MO29CQUNULEdBQUc7Z0JBQ0w7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNWixRQUFRLEVBQUUsRUFDVmEsV0FBVyxJQWxDQWhCLFNBa0NhRztnQkFFOUIsT0FBT2E7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUNuQyxJQUFNQywwQkFBMEJuQiw2QkFBNkJpQixPQUN2RGYsUUFBUWlCLHdCQUF3QkMsR0FBRyxDQUFDLFNBQUNDO29CQUNuQyxJQUFNSixTQUFPSSx3QkFDUFQsVUFBVVUsZ0JBQU8sQ0FBQ0MseUJBQXlCLENBM0N4Q3hCLFVBMkNtRGtCLFFBQU1DO29CQUVsRSxPQUFPTjtnQkFDVCxJQUNBRyxXQUFXLElBL0NBaEIsU0ErQ2FHO2dCQUU5QixPQUFPYTtZQUNUOzs7V0FsRG1CaEIifQ==