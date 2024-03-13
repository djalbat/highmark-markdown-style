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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3RvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi9zZWxlY3RvclwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVMZXhlciBmcm9tIFwiLi4vbWFya2Rvd25TdHlsZS9sZXhlclwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVQYXJzZXIgZnJvbSBcIi4uL21hcmtkb3duU3R5bGUvcGFyc2VyXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORywgU0VMRUNUT1JTX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgbWFya2Rvd25TdHlsZUxleGVyID0gTWFya2Rvd25TdHlsZUxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blN0eWxlUGFyc2VyID0gTWFya2Rvd25TdHlsZVBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZVNldC9zZWxlY3RvcnNcIiksXG4gICAgICBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvc2VsZWN0b3JzL3NlbGVjdG9yXCIpO1xuXG5jb25zdCBydWxlTWFwID0gbWFya2Rvd25TdHlsZVBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICBzZWxlY3RvcnNSdWxlID0gcnVsZU1hcFtTRUxFQ1RPUlNfUlVMRV9OQU1FXSxcbiAgICAgIHN0YXJ0UnVsZSA9IHNlbGVjdG9yc1J1bGU7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIHJlZHVjZVNlbGVjdG9yKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZm9yRWFjaFNlbGVjdG9yKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBjb21iaW5lKHNlbGVjdG9ycykge1xuICAgIGNvbnN0IG91dGVyU2VsZWN0b3JzID0gU2VsZWN0b3JzLmZyb21BcnJheSh0aGlzLmFycmF5KSwgLy8vXG4gICAgICAgICAgaW5uZXJTZWxlY3RvcnMgPSBzZWxlY3RvcnMsIC8vL1xuICAgICAgICAgIGFycmF5ID0gb3V0ZXJTZWxlY3RvcnMucmVkdWNlU2VsZWN0b3IoKGFycmF5LCBvdXRlclNlbGVjdG9yKSA9PiB7XG4gICAgICAgICAgICBpbm5lclNlbGVjdG9ycy5mb3JFYWNoU2VsZWN0b3IoKGlubmVyU2VsZWN0b3IpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBvdXRlclNlbGVjdG9yLmNvbWJpbmUoaW5uZXJTZWxlY3Rvcik7XG5cbiAgICAgICAgICAgICAgYXJyYXkucHVzaChzZWxlY3Rvcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHNlbGVjdG9ycyA9IFNlbGVjdG9ycy5mcm9tQXJyYXkoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgfVxuXG4gIGFzQ1NTKCkge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIHNlbGVjdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yQ1NTID0gc2VsZWN0b3IuYXNDU1MoKTtcblxuICAgICAgICBjc3MgPSAoY3NzID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JDU1MgOiAvLy9cbiAgICAgICAgICAgICAgICAgIGAke2Nzc30sXG4ke3NlbGVjdG9yQ1NTfWA7XG5cbiAgICAgICAgcmV0dXJuIGNzcztcbiAgICAgIH0sIG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5KGFycmF5KSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gbmV3IFNlbGVjdG9ycyhhcnJheSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZSA9IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpO1xuXG4gICAgbm9kZSA9IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZTsgIC8vL1xuXG4gICAgY29uc3Qgc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzID0gc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMubWFwKChzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHNlbGVjdG9yTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvciA9IFNlbGVjdG9yLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzZWxlY3RvcnMgPSBuZXcgU2VsZWN0b3JzKGFycmF5KTtcblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yc1N0cmluZyhzZWxlY3RvcnNTdHJpbmcpIHtcbiAgICBsZXQgc2VsZWN0b3JzID0gbnVsbDtcblxuICAgIGNvbnN0IGxleGVyID0gbWFya2Rvd25TdHlsZUxleGVyLFxuICAgICAgICAgIHBhcnNlciA9ICBtYXJrZG93blN0eWxlUGFyc2VyLFxuICAgICAgICAgIGNvbnRlbnQgPSBzZWxlY3RvcnNTdHJpbmcsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgICAgIGFycmF5ID0gc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzLm1hcCgoc2VsZWN0b3JOb25UZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHNlbGVjdG9yTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gU2VsZWN0b3IuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgc2VsZWN0b3JzID0gbmV3IFNlbGVjdG9ycyhhcnJheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNlbGVjdG9ycyIsIm1hcmtkb3duU3R5bGVMZXhlciIsIk1hcmtkb3duU3R5bGVMZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25TdHlsZVBhcnNlciIsIk1hcmtkb3duU3R5bGVQYXJzZXIiLCJzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInNlbGVjdG9yTm9uVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwic2VsZWN0b3JzUnVsZSIsIlNFTEVDVE9SU19SVUxFX05BTUUiLCJzdGFydFJ1bGUiLCJhcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsInJlZHVjZVNlbGVjdG9yIiwiY2FsbGJhY2siLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoU2VsZWN0b3IiLCJmb3JFYWNoIiwiY29tYmluZSIsInNlbGVjdG9ycyIsIm91dGVyU2VsZWN0b3JzIiwiZnJvbUFycmF5IiwiaW5uZXJTZWxlY3RvcnMiLCJvdXRlclNlbGVjdG9yIiwiaW5uZXJTZWxlY3RvciIsInNlbGVjdG9yIiwicHVzaCIsImFzQ1NTIiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwic2VsZWN0b3JDU1MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGUiLCJzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMiLCJtYXAiLCJzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSIsIlNlbGVjdG9yIiwiZnJvbVNlbGVjdG9yc1N0cmluZyIsInNlbGVjdG9yc1N0cmluZyIsImxleGVyIiwicGFyc2VyIiwiY29udGVudCIsInRva2VuaXNlIiwicGFyc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBa0JxQkE7OzsrREFoQkE7NERBQ1U7NkRBQ0M7cUJBRU07eUJBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEQsSUFBTUMscUJBQXFCQyxjQUFrQixDQUFDQyxXQUFXLElBQ25EQyxzQkFBc0JDLGVBQW1CLENBQUNGLFdBQVcsSUFDckRHLGdDQUFnQ0MsSUFBQUEsZ0JBQVMsRUFBQyx1QkFDMUNDLGdDQUFnQ0MsSUFBQUEsaUJBQVUsRUFBQztBQUVqRCxJQUFNQyxVQUFVTixvQkFBb0JPLFVBQVUsSUFDeENDLGdC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