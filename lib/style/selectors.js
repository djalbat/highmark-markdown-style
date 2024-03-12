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
var _lexer = /*#__PURE__*/ _interop_require_default(require("../markdownStyle/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("../markdownStyle/parser"));
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
var markdownStyleLexer = _lexer.default.fromNothing(), markdownStyleParser = _parser.default.fromNothing(), selectorsNonTerminalNodeQuery = (0, _query.nodeQuery)("/ruleSet/selectors"), selectorNonTerminalNodesQuery = (0, _query.nodesQuery)("/selectors/selector");
var ruleMap = markdownStyleParser.getRuleMap(), selectorsRule = ruleMap[_constants.SELECTORS_RULE_NAME], startRule = selectorsRule; ///
var Selectors = /*#__PURE__*/ function() {
    function Selectors(array) {
        _class_call_check(this, Selectors);
        this.array = array;
    }
    _create_class(Selectors, [
        {
            key: "forEachSelector",
            value: function forEachSelector(callback) {
                this.array.forEach(callback);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var array = [], selectors = new Selectors(array);
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
            key: "fromSelectorsString",
            value: function fromSelectorsString(selectorsString) {
                var selectors = null;
                var lexer = markdownStyleLexer, parser = markdownStyleParser, content = selectorsString, tokens = lexer.tokenise(content), node = parser.parse(tokens, startRule);
                if (node !== null) {
                    var selectorNonTerminalNodes = selectorNonTerminalNodesQuery(node), array = selectorNonTerminalNodes.map(function(selectorNonTerminalNode) {
                        var node = selectorNonTerminalNode, selector = _selector.default.fromNodeAndTokens(node, tokens);
                        return selector;
                    });
                    selectors = new Selectors(array);
                }
                return selectors;
            }
        }
    ]);
    return Selectors;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3RvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi9zZWxlY3RvclwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVMZXhlciBmcm9tIFwiLi4vbWFya2Rvd25TdHlsZS9sZXhlclwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVQYXJzZXIgZnJvbSBcIi4uL21hcmtkb3duU3R5bGUvcGFyc2VyXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFNFTEVDVE9SU19SVUxFX05BTUUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IG1hcmtkb3duU3R5bGVMZXhlciA9IE1hcmtkb3duU3R5bGVMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZVBhcnNlciA9IE1hcmtkb3duU3R5bGVQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVTZXQvc2VsZWN0b3JzXCIpLFxuICAgICAgc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3NlbGVjdG9ycy9zZWxlY3RvclwiKTtcblxuY29uc3QgcnVsZU1hcCA9IG1hcmtkb3duU3R5bGVQYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgc2VsZWN0b3JzUnVsZSA9IHJ1bGVNYXBbU0VMRUNUT1JTX1JVTEVfTkFNRV0sXG4gICAgICBzdGFydFJ1bGUgPSBzZWxlY3RvcnNSdWxlOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9ycyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZm9yRWFjaFNlbGVjdG9yKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBzZWxlY3RvcnMgPSBuZXcgU2VsZWN0b3JzKGFycmF5KTtcblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlID0gc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlUXVlcnkobm9kZSk7XG5cbiAgICBub2RlID0gc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlOyAgLy8vXG5cbiAgICBjb25zdCBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IHNlbGVjdG9yTm9uVGVybWluYWxOb2Rlcy5tYXAoKHNlbGVjdG9yTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gc2VsZWN0b3JOb25UZXJtaW5hbE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gU2VsZWN0b3IuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHNlbGVjdG9ycyA9IG5ldyBTZWxlY3RvcnMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VsZWN0b3JzU3RyaW5nKHNlbGVjdG9yc1N0cmluZykge1xuICAgIGxldCBzZWxlY3RvcnMgPSBudWxsO1xuXG4gICAgY29uc3QgbGV4ZXIgPSBtYXJrZG93blN0eWxlTGV4ZXIsXG4gICAgICAgICAgcGFyc2VyID0gIG1hcmtkb3duU3R5bGVQYXJzZXIsXG4gICAgICAgICAgY29udGVudCA9IHNlbGVjdG9yc1N0cmluZywgIC8vL1xuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yTm9uVGVybWluYWxOb2RlcyA9IHNlbGVjdG9yTm9uVGVybWluYWxOb2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgICAgYXJyYXkgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMubWFwKChzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBub2RlID0gc2VsZWN0b3JOb25UZXJtaW5hbE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBTZWxlY3Rvci5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBzZWxlY3RvcnMgPSBuZXcgU2VsZWN0b3JzKGFycmF5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2VsZWN0b3JzIiwibWFya2Rvd25TdHlsZUxleGVyIiwiTWFya2Rvd25TdHlsZUxleGVyIiwiZnJvbU5vdGhpbmciLCJtYXJrZG93blN0eWxlUGFyc2VyIiwiTWFya2Rvd25TdHlsZVBhcnNlciIsInNlbGVjdG9yc05vblRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicnVsZU1hcCIsImdldFJ1bGVNYXAiLCJzZWxlY3RvcnNSdWxlIiwiU0VMRUNUT1JTX1JVTEVfTkFNRSIsInN0YXJ0UnVsZSIsImFycmF5IiwiZm9yRWFjaFNlbGVjdG9yIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwic2VsZWN0b3JzIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwic2VsZWN0b3JzTm9uVGVybWluYWxOb2RlIiwic2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzIiwibWFwIiwic2VsZWN0b3JOb25UZXJtaW5hbE5vZGUiLCJzZWxlY3RvciIsIlNlbGVjdG9yIiwiZnJvbVNlbGVjdG9yc1N0cmluZyIsInNlbGVjdG9yc1N0cmluZyIsImxleGVyIiwicGFyc2VyIiwiY29udGVudCIsInRva2VuaXNlIiwicGFyc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBa0JxQkE7OzsrREFoQkE7NERBQ1U7NkRBQ0M7cUJBRU07eUJBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBTUMscUJBQXFCQyxjQUFrQixDQUFDQyxXQUFXLElBQ25EQyxzQkFBc0JDLGVBQW1CLENBQUNGLFdBQVcsSUFDckRHLGdDQUFnQ0MsSUFBQUEsZ0JBQVMsRUFBQyx1QkFDMUNDLGdDQUFnQ0MsSUFBQUEsaUJBQVUsRUFBQztBQUVqRCxJQUFNQyxVQUFVTixvQkFBb0JPLFVBQVUsSUFDeENDLGdCQUFnQkYsT0FBTyxDQUFDRyw4QkFBbUIsQ0FBQyxFQUM1Q0MsWUFBWUYsZUFBZ0IsR0FBRztBQUV0QixJQUFBLEFBQU1aLDBCQUFELEFBQUw7YUFBTUEsVUFDUGUsS0FBSztnQ0FERWY7UUFFakIsSUFBSSxDQUFDZSxLQUFLLEdBQUdBOztrQkFGSWY7O1lBS25CZ0IsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkMsUUFBUTtnQkFBSSxJQUFJLENBQUNGLEtBQUssQ0FBQ0csT0FBTyxDQUFDRDtZQUFXOzs7O1lBRW5EZCxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNWSxRQUFRLEVBQUUsRUFDVkksWUFBWSxJQVREbkIsVUFTZWU7Z0JBRWhDLE9BQU9JO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBTUMsMkJBQTJCakIsOEJBQThCZTtnQkFFL0RBLE9BQU9FLDBCQUEyQixHQUFHO2dCQUVyQyxJQUFNQywyQkFBMkJoQiw4QkFBOEJhLE9BQ3pETixRQUFRUyx5QkFBeUJDLEdBQUcsQ0FBQyxTQUFDQztvQkFDcEMsSUFBTUwsU0FBT0sseUJBQ1BDLFdBQVdDLGlCQUFRLENBQUNSLGlCQUFpQixDQUFDQyxRQUFNQztvQkFFbEQsT0FBT0s7Z0JBQ1QsSUFDQVIsWUFBWSxJQTFCRG5CLFVBMEJlZTtnQkFFaEMsT0FBT0k7WUFDVDs7O1lBRU9VLEtBQUFBO21CQUFQLFNBQU9BLG9CQUFvQkMsZUFBZTtnQkFDeEMsSUFBSVgsWUFBWTtnQkFFaEIsSUFBTVksUUFBUTlCLG9CQUNSK0IsU0FBVTVCLHFCQUNWNkIsVUFBVUgsaUJBQ1ZSLFNBQVNTLE1BQU1HLFFBQVEsQ0FBQ0QsVUFDeEJaLE9BQU9XLE9BQU9HLEtBQUssQ0FBQ2IsUUFBUVI7Z0JBRWxDLElBQUlPLFNBQVMsTUFBTTtvQkFDakIsSUFBTUcsMkJBQTJCaEIsOEJBQThCYSxPQUN6RE4sUUFBUVMseUJBQXlCQyxHQUFHLENBQUMsU0FBQ0M7d0JBQ3BDLElBQU1MLE9BQU9LLHlCQUNQQyxXQUFXQyxpQkFBUSxDQUFDUixpQkFBaUIsQ0FBQ0MsTUFBTUM7d0JBRWxELE9BQU9LO29CQUNUO29CQUVOUixZQUFZLElBakRHbkIsVUFpRFdlO2dCQUM1QjtnQkFFQSxPQUFPSTtZQUNUOzs7V0FyRG1CbkIifQ==