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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3RvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi9zZWxlY3RvclwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVTZXQvc2VsZWN0b3JzXCIpLFxuICAgICAgc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3NlbGVjdG9ycy9zZWxlY3RvclwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIHJlZHVjZVNlbGVjdG9yKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZm9yRWFjaFNlbGVjdG9yKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBjb21iaW5lKHNlbGVjdG9ycykge1xuICAgIGNvbnN0IG91dGVyU2VsZWN0b3JzID0gU2VsZWN0b3JzLmZyb21BcnJheSh0aGlzLmFycmF5KSwgLy8vXG4gICAgICAgICAgaW5uZXJTZWxlY3RvcnMgPSBzZWxlY3RvcnMsIC8vL1xuICAgICAgICAgIGFycmF5ID0gb3V0ZXJTZWxlY3RvcnMucmVkdWNlU2VsZWN0b3IoKGFycmF5LCBvdXRlclNlbGVjdG9yKSA9PiB7XG4gICAgICAgICAgICBpbm5lclNlbGVjdG9ycy5mb3JFYWNoU2VsZWN0b3IoKGlubmVyU2VsZWN0b3IpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBvdXRlclNlbGVjdG9yLmNvbWJpbmUoaW5uZXJTZWxlY3Rvcik7XG5cbiAgICAgICAgICAgICAgYXJyYXkucHVzaChzZWxlY3Rvcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHNlbGVjdG9ycyA9IFNlbGVjdG9ycy5mcm9tQXJyYXkoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgfVxuXG4gIGFzQ1NTKCkge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIHNlbGVjdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yQ1NTID0gc2VsZWN0b3IuYXNDU1MoKTtcblxuICAgICAgICBjc3MgPSAoY3NzID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JDU1MgOiAvLy9cbiAgICAgICAgICAgICAgICAgIGAke2Nzc30sXG4ke3NlbGVjdG9yQ1NTfWA7XG5cbiAgICAgICAgcmV0dXJuIGNzcztcbiAgICAgIH0sIG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5KGFycmF5KSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gbmV3IFNlbGVjdG9ycyhhcnJheSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZSA9IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpO1xuXG4gICAgbm9kZSA9IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZTsgIC8vL1xuXG4gICAgY29uc3Qgc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzID0gc2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBzZWxlY3Rvck5vblRlcm1pbmFsTm9kZXMubWFwKChzZWxlY3Rvck5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHNlbGVjdG9yTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvciA9IFNlbGVjdG9yLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzZWxlY3RvcnMgPSBuZXcgU2VsZWN0b3JzKGFycmF5KTtcblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yU3RyaW5nKHNlbGVjdG9yU3RyaW5nKSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBTZWxlY3Rvci5mcm9tU2VsZWN0b3JTdHJpbmcoc2VsZWN0b3JTdHJpbmcpLFxuICAgICAgICAgIGFycmF5ID0gW1xuICAgICAgICAgICAgc2VsZWN0b3JcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlbGVjdG9ycyA9IG5ldyBTZWxlY3RvcnMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNlbGVjdG9ycyIsInNlbGVjdG9yc05vblRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiYXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJyZWR1Y2VTZWxlY3RvciIsImNhbGxiYWNrIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaFNlbGVjdG9yIiwiZm9yRWFjaCIsImNvbWJpbmUiLCJzZWxlY3RvcnMiLCJvdXRlclNlbGVjdG9ycyIsImZyb21BcnJheSIsImlubmVyU2VsZWN0b3JzIiwib3V0ZXJTZWxlY3RvciIsImlubmVyU2VsZWN0b3IiLCJzZWxlY3RvciIsInB1c2giLCJhc0NTUyIsImNzcyIsIkVNUFRZX1NUUklORyIsInNlbGVjdG9yQ1NTIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwic2VsZWN0b3JzTm9uVGVybWluYWxOb2RlIiwic2VsZWN0b3JOb25UZXJtaW5hbE5vZGVzIiwibWFwIiwic2VsZWN0b3JOb25UZXJtaW5hbE5vZGUiLCJTZWxlY3RvciIsImZyb21TZWxlY3RvclN0cmluZyIsInNlbGVjdG9yU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzsrREFSQTt5QkFFUTtxQkFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQyxnQ0FBZ0NDLElBQUFBLGdCQUFTLEVBQUMsdUJBQzFDQyxnQ0FBZ0NDLElBQUFBLGlCQUFVLEVBQUM7QUFFbEMsSUFBQSxBQUFNSiwwQkFBRCxBQUFMO2FBQU1BLFVBQ1BLLEtBQUs7Z0NBREVMO1FBRWpCLElBQUksQ0FBQ0ssS0FBSyxHQUFHQTs7a0JBRklMOztZQUtuQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDRCxLQUFLLENBQUNFLE1BQU07WUFBRTs7O1lBRXhDQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsUUFBUSxFQUFFQyxZQUFZO2dCQUFJLE9BQU8sSUFBSSxDQUFDTCxLQUFLLENBQUNNLE1BQU0sQ0FBQ0YsVUFBVUM7WUFBZTs7O1lBRTNGRSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCSCxRQUFRO2dCQUFJLElBQUksQ0FBQ0osS0FBSyxDQUFDUSxPQUFPLENBQUNKO1lBQVc7OztZQUUxREssS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLFNBQVM7Z0JBQ2YsSUFBTUMsaUJBQWlCaEIsQUFaTkEsVUFZZ0JpQixTQUFTLENBQUMsSUFBSSxDQUFDWixLQUFLLEdBQy9DYSxpQkFBaUJILFdBQ2pCVixRQUFRVyxlQUFlUixjQUFjLENBQUMsU0FBQ0gsT0FBT2M7b0JBQzVDRCxlQUFlTixlQUFlLENBQUMsU0FBQ1E7d0JBQzlCLElBQU1DLFdBQVdGLGNBQWNMLE9BQU8sQ0FBQ007d0JBRXZDZixNQUFNaUIsSUFBSSxDQUFDRDtvQkFDYjtvQkFFQSxPQUFPaEI7Z0JBQ1QsR0FBRyxFQUFFO2dCQUVYVSxZQUFZZixBQXhCS0EsVUF3QktpQixTQUFTLENBQUNaO2dCQUVoQyxPQUFPVTtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLE1BQU1DLHVCQUFZO2dCQUV0QixJQUFNbEIsU0FBUyxJQUFJLENBQUNELFNBQVM7Z0JBRTdCLElBQUlDLFNBQVMsR0FBRztvQkFDZGlCLE1BQU0sSUFBSSxDQUFDbkIsS0FBSyxDQUFDTSxNQUFNLENBQUMsU0FBQ2EsS0FBS0g7d0JBQzVCLElBQU1LLGNBQWNMLFNBQVNFLEtBQUs7d0JBRWxDQyxNQUFNLEFBQUNBLFFBQVEsT0FDUEUsY0FDRSxBQUFDLEdBQ2pCQSxPQURtQkYsS0FBSSxPQUNYLE9BQVpFO3dCQUVNLE9BQU9GO29CQUNULEdBQUc7Z0JBQ0w7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPUCxLQUFBQTttQkFBUCxTQUFPQSxVQUFVWixLQUFLO2dCQUNwQixJQUFNVSxZQUFZLElBbkREZixVQW1EZUs7Z0JBRWhDLE9BQU9VO1lBQ1Q7OztZQUVPWSxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBTUMsMkJBQTJCN0IsOEJBQThCMkI7Z0JBRS9EQSxPQUFPRSwwQkFBMkIsR0FBRztnQkFFckMsSUFBTUMsMkJBQTJCNUIsOEJBQThCeUIsT0FDekR2QixRQUFRMEIseUJBQXlCQyxHQUFHLENBQUMsU0FBQ0M7b0JBQ3BDLElBQU1MLFNBQU9LLHlCQUNQWixXQUFXYSxpQkFBUSxDQUFDUCxpQkFBaUIsQ0FBQ0MsUUFBTUM7b0JBRWxELE9BQU9SO2dCQUNULElBQ0FOLFlBQVksSUFwRURmLFVBb0VlSztnQkFFaEMsT0FBT1U7WUFDVDs7O1lBRU9vQixLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGNBQWM7Z0JBQ3RDLElBQU1mLFdBQVdhLGlCQUFRLENBQUNDLGtCQUFrQixDQUFDQyxpQkFDdkMvQixRQUFRO29CQUNOZ0I7aUJBQ0QsRUFDRE4sWUFBWSxJQTlFRGYsVUE4RWVLO2dCQUVoQyxPQUFPVTtZQUNUOzs7V0FqRm1CZiJ9