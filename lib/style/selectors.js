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
var _lexer = require("../markdownStyle/lexer");
var _parser = require("../markdownStyle/parser");
var _ruleNames = require("../ruleNames");
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
var ruleMap = _parser.markdownStyleParser.getRuleMap(), selectorsRule = ruleMap[_ruleNames.SELECTORS_RULE_NAME], startRule = selectorsRule; ///
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
                        array.push(selector);
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
            key: "fromSelectorsString",
            value: function fromSelectorsString(selectorsString) {
                var selectors = null;
                var lexer = _lexer.markdownStyleLexer, parser = _parser.markdownStyleParser, content = selectorsString, tokens = lexer.tokenise(content), node = parser.parse(tokens, startRule);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3RvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi9zZWxlY3RvclwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtYXJrZG93blN0eWxlTGV4ZXIgfSBmcm9tIFwiLi4vbWFya2Rvd25TdHlsZS9sZXhlclwiO1xuaW1wb3J0IHsgbWFya2Rvd25TdHlsZVBhcnNlciB9IGZyb20gXCIuLi9tYXJrZG93blN0eWxlL3BhcnNlclwiO1xuaW1wb3J0IHsgU0VMRUNUT1JTX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZVNldC9zZWxlY3RvcnNcIiksXG4gICAgICBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc2VsZWN0b3JzL3NlbGVjdG9yXCIpO1xuXG5jb25zdCBydWxlTWFwID0gbWFya2Rvd25TdHlsZVBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICBzZWxlY3RvcnNSdWxlID0gcnVsZU1hcFtTRUxFQ1RPUlNfUlVMRV9OQU1FXSxcbiAgICAgIHN0YXJ0UnVsZSA9IHNlbGVjdG9yc1J1bGU7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIHJlZHVjZVNlbGVjdG9yKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZm9yRWFjaFNlbGVjdG9yKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBjb21iaW5lKHNlbGVjdG9ycykge1xuICAgIGNvbnN0IG91dGVyU2VsZWN0b3JzID0gU2VsZWN0b3JzLmZyb21BcnJheSh0aGlzLmFycmF5KSwgLy8vXG4gICAgICAgICAgaW5uZXJTZWxlY3RvcnMgPSBzZWxlY3RvcnMsIC8vL1xuICAgICAgICAgIGFycmF5ID0gb3V0ZXJTZWxlY3RvcnMucmVkdWNlU2VsZWN0b3IoKGFycmF5LCBvdXRlclNlbGVjdG9yKSA9PiB7XG4gICAgICAgICAgICBpbm5lclNlbGVjdG9ycy5mb3JFYWNoU2VsZWN0b3IoKGlubmVyU2VsZWN0b3IpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBvdXRlclNlbGVjdG9yLmNvbWJpbmUoaW5uZXJTZWxlY3Rvcik7XG5cbiAgICAgICAgICAgICAgYXJyYXkucHVzaChzZWxlY3Rvcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHNlbGVjdG9ycyA9IFNlbGVjdG9ycy5mcm9tQXJyYXkoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgfVxuXG4gIGFzQ1NTKCkge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIHNlbGVjdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yQ1NTID0gc2VsZWN0b3IuYXNDU1MoKTtcblxuICAgICAgICBjc3MgPSAoY3NzID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JDU1MgOiAvLy9cbiAgICAgICAgICAgICAgICAgIGAke2Nzc30sXG4ke3NlbGVjdG9yQ1NTfWA7XG5cbiAgICAgICAgcmV0dXJuIGNzcztcbiAgICAgIH0sIG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5KGFycmF5KSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gbmV3IFNlbGVjdG9ycyhhcnJheSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZSA9IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpO1xuXG4gICAgbm9kZSA9IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZTsgIC8vL1xuXG4gICAgY29uc3Qgc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzID0gc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMubWFwKChzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHNlbGVjdG9yTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvciA9IFNlbGVjdG9yLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzZWxlY3RvcnMgPSBuZXcgU2VsZWN0b3JzKGFycmF5KTtcblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yc1N0cmluZyhzZWxlY3RvcnNTdHJpbmcpIHtcbiAgICBsZXQgc2VsZWN0b3JzID0gbnVsbDtcblxuICAgIGNvbnN0IGxleGVyID0gbWFya2Rvd25TdHlsZUxleGVyLFxuICAgICAgICAgIHBhcnNlciA9ICBtYXJrZG93blN0eWxlUGFyc2VyLFxuICAgICAgICAgIGNvbnRlbnQgPSBzZWxlY3RvcnNTdHJpbmcsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgICAgIGFycmF5ID0gc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzLm1hcCgoc2VsZWN0b3JOb25UZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHNlbGVjdG9yTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gU2VsZWN0b3IuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgc2VsZWN0b3JzID0gbmV3IFNlbGVjdG9ycyhhcnJheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNlbGVjdG9ycyIsInNlbGVjdG9yc05vblRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicnVsZU1hcCIsIm1hcmtkb3duU3R5bGVQYXJzZXIiLCJnZXRSdWxlTWFwIiwic2VsZWN0b3JzUnVsZSIsIlNFTEVDVE9SU19SVUxFX05BTUUiLCJzdGFydFJ1bGUiLCJhcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsInJlZHVjZVNlbGVjdG9yIiwiY2FsbGJhY2siLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoU2VsZWN0b3IiLCJmb3JFYWNoIiwiY29tYmluZSIsInNlbGVjdG9ycyIsIm91dGVyU2VsZWN0b3JzIiwiZnJvbUFycmF5IiwiaW5uZXJTZWxlY3RvcnMiLCJvdXRlclNlbGVjdG9yIiwiaW5uZXJTZWxlY3RvciIsInNlbGVjdG9yIiwicHVzaCIsImFzQ1NTIiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwic2VsZWN0b3JDU1MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGUiLCJzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMiLCJtYXAiLCJzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSIsIlNlbGVjdG9yIiwiZnJvbVNlbGVjdG9yc1N0cmluZyIsInNlbGVjdG9yc1N0cmluZyIsImxleGVyIiwibWFya2Rvd25TdHlsZUxleGVyIiwicGFyc2VyIiwiY29udGVudCIsInRva2VuaXNlIiwicGFyc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBaUJxQkE7OzsrREFmQTt5QkFFUTtxQkFDTTtzQkFDQzt5QkFDQTtxQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQyxnQ0FBZ0NDLElBQUFBLGdCQUFTLEVBQUMsdUJBQzFDQyxnQ0FBZ0NDLElBQUFBLGlCQUFVLEVBQUM7QUFFakQsSUFBTUMsVUFBVUMsMkJBQW1CLENBQUNDLFVBQVUsSUFDeENDLGdCQUFnQkgsT0FBTyxDQUFDSSw4QkFBbUIsQ0FBQyxFQUM1Q0MsWUFBWUYsZUFBZ0IsR0FBRztBQUV0QixJQUFBLEFBQU1SLDBCQUFELEFBQUw7YUFBTUEsVUFDUFcsS0FBSztnQ0FERVg7UUFFakIsSUFBSSxDQUFDVyxLQUFLLEdBQUdBOztrQkFGSVg7O1lBS25CWSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNELEtBQUss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