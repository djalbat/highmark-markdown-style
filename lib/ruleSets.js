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
            key: "getLength",
            value: function getLength() {
                return this.array.length;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(selectorsList) {
                var outermost = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var css = _constants.EMPTY_STRING;
                var length = this.getLength(), selectorsListLength = selectorsList.getLength();
                if (length > 0 && selectorsListLength > 0) {
                    css = this.array.reduce(function(css, ruleSet) {
                        var ruleSetCSS = ruleSet.asCSS(selectorsList, outermost);
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
        },
        {
            key: "fromNodeTokensAndDivisionNames",
            value: function fromNodeTokensAndDivisionNames(node, tokens, divisionNames) {
                var ruleSetNonTerminalNodes = ruleSetNonTerminalNodesQuery(node), array = ruleSetNonTerminalNodes.map(function(ruleSetNonTerminalNode) {
                    var _$node = ruleSetNonTerminalNode, ruleSet = _ruleSet.default.fromRuleSetsNodeTokensAndDivisionNames(RuleSets, _$node, tokens, divisionNames);
                    return ruleSet;
                }), ruleSets = new RuleSets(array);
                return ruleSets;
            }
        }
    ]);
    return RuleSets;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlU2V0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVTZXQgZnJvbSBcIi4vcnVsZVNldFwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgcnVsZVNldE5vblRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvKi9ydWxlU2V0XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0cyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICBhc0NTUyhzZWxlY3RvcnNMaXN0LCBvdXRlcm1vc3QgPSBmYWxzZSkge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpLFxuICAgICAgICAgIHNlbGVjdG9yc0xpc3RMZW5ndGggPSBzZWxlY3RvcnNMaXN0LmdldExlbmd0aCgpO1xuXG4gICAgaWYgKChsZW5ndGggPiAwKSAmJiAoc2VsZWN0b3JzTGlzdExlbmd0aCA+IDApKSB7XG4gICAgICBjc3MgPSB0aGlzLmFycmF5LnJlZHVjZSgoY3NzLCBydWxlU2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVTZXRDU1MgPSBydWxlU2V0LmFzQ1NTKHNlbGVjdG9yc0xpc3QsIG91dGVybW9zdCk7XG5cbiAgICAgICAgY3NzID0gKGNzcyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIHJ1bGVTZXRDU1MgOiAgLy8vXG4gICAgICAgICAgICAgICAgICBgJHtjc3N9JHtydWxlU2V0Q1NTfWA7XG5cbiAgICAgICAgcmV0dXJuIGNzcztcbiAgICAgIH0sIG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBydWxlU2V0cyA9IG5ldyBSdWxlU2V0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcnVsZVNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcnVsZVNldE5vblRlcm1pbmFsTm9kZXMgPSBydWxlU2V0Tm9uVGVybWluYWxOb2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gcnVsZVNldE5vblRlcm1pbmFsTm9kZXMubWFwKChydWxlU2V0Tm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gcnVsZVNldE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBydWxlU2V0ID0gUnVsZVNldC5mcm9tUnVsZVNldHNOb2RlQW5kVG9rZW5zKFJ1bGVTZXRzLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZVNldDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlU2V0cyA9IG5ldyBSdWxlU2V0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcnVsZVNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVUb2tlbnNBbmREaXZpc2lvbk5hbWVzKG5vZGUsIHRva2VucywgZGl2aXNpb25OYW1lcykge1xuICAgIGNvbnN0IHJ1bGVTZXROb25UZXJtaW5hbE5vZGVzID0gcnVsZVNldE5vblRlcm1pbmFsTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IHJ1bGVTZXROb25UZXJtaW5hbE5vZGVzLm1hcCgocnVsZVNldE5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHJ1bGVTZXROb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgcnVsZVNldCA9IFJ1bGVTZXQuZnJvbVJ1bGVTZXRzTm9kZVRva2Vuc0FuZERpdmlzaW9uTmFtZXMoUnVsZVNldHMsIG5vZGUsIHRva2VucywgZGl2aXNpb25OYW1lcyk7XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlU2V0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJ1bGVTZXRzID0gbmV3IFJ1bGVTZXRzKGFycmF5KTtcblxuICAgIHJldHVybiBydWxlU2V0cztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVTZXRzIiwicnVsZVNldE5vblRlcm1pbmFsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJhcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImFzQ1NTIiwic2VsZWN0b3JzTGlzdCIsIm91dGVybW9zdCIsImNzcyIsIkVNUFRZX1NUUklORyIsInNlbGVjdG9yc0xpc3RMZW5ndGgiLCJyZWR1Y2UiLCJydWxlU2V0IiwicnVsZVNldENTUyIsImZyb21Ob3RoaW5nIiwicnVsZVNldHMiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJydWxlU2V0Tm9uVGVybWluYWxOb2RlcyIsIm1hcCIsInJ1bGVTZXROb25UZXJtaW5hbE5vZGUiLCJSdWxlU2V0IiwiZnJvbVJ1bGVTZXRzTm9kZUFuZFRva2VucyIsImZyb21Ob2RlVG9rZW5zQW5kRGl2aXNpb25OYW1lcyIsImRpdmlzaW9uTmFtZXMiLCJmcm9tUnVsZVNldHNOb2RlVG9rZW5zQW5kRGl2aXNpb25OYW1lcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7OERBUEQ7cUJBRU87eUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTUMsK0JBQStCQyxJQUFBQSxpQkFBVSxFQUFDO0FBRWpDLElBQUEsQUFBTUYseUJBQUQsQUFBTDthQUFNQSxTQUNQRyxLQUFLO2dDQURFSDtRQUVqQixJQUFJLENBQUNHLEtBQUssR0FBR0E7O2tCQUZJSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0QsS0FBSyxDQUFDRSxNQUFNO1lBQUU7OztZQUV4Q0MsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLGFBQWE7b0JBQUVDLFlBQUFBLGlFQUFZO2dCQUMvQixJQUFJQyxNQUFNQyx1QkFBWTtnQkFFdEIsSUFBTUwsU0FBUyxJQUFJLENBQUNELFNBQVMsSUFDdkJPLHNCQUFzQkosY0FBY0gsU0FBUztnQkFFbkQsSUFBSSxBQUFDQyxTQUFTLEtBQU9NLHNCQUFzQixHQUFJO29CQUM3Q0YsTUFBTSxJQUFJLENBQUNOLEtBQUssQ0FBQ1MsTUFBTSxDQUFDLFNBQUNILEtBQUtJO3dCQUM1QixJQUFNQyxhQUFhRCxRQUFRUCxLQUFLLENBQUNDLGVBQWVDO3dCQUVoREMsTUFBTSxBQUFDQSxRQUFRLE9BQ1BLLGFBQ0UsQUFBQyxHQUFRQSxPQUFOTCxLQUFpQixPQUFYSzt3QkFFbkIsT0FBT0w7b0JBQ1QsR0FBRztnQkFDTDtnQkFFQSxPQUFPQTtZQUNUOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1aLFFBQVEsRUFBRSxFQUNWYSxXQUFXLElBOUJBaEIsU0E4QmFHO2dCQUU5QixPQUFPYTtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1DLDBCQUEwQm5CLDZCQUE2QmlCLE9BQ3ZEZixRQUFRaUIsd0JBQXdCQyxHQUFHLENBQUMsU0FBQ0M7b0JBQ25DLElBQU1KLFNBQU9JLHdCQUNQVCxVQUFVVSxnQkFBTyxDQUFDQyx5QkFBeUIsQ0F2Q3hDeEIsVUF1Q21Ea0IsUUFBTUM7b0JBRWxFLE9BQU9OO2dCQUNULElBQ0FHLFdBQVcsSUEzQ0FoQixTQTJDYUc7Z0JBRTlCLE9BQU9hO1lBQ1Q7OztZQUVPUyxLQUFBQTttQkFBUCxTQUFPQSwrQkFBK0JQLElBQUksRUFBRUMsTUFBTSxFQUFFTyxhQUFhO2dCQUMvRCxJQUFNTiwwQkFBMEJuQiw2QkFBNkJpQixPQUN2RGYsUUFBUWlCLHdCQUF3QkMsR0FBRyxDQUFDLFNBQUNDO29CQUNuQyxJQUFNSixTQUFPSSx3QkFDUFQsVUFBVVUsZ0JBQU8sQ0FBQ0ksc0NBQXNDLENBcERyRDNCLFVBb0RnRWtCLFFBQU1DLFFBQVFPO29CQUV2RixPQUFPYjtnQkFDVCxJQUNBRyxXQUFXLElBeERBaEIsU0F3RGFHO2dCQUU5QixPQUFPYTtZQUNUOzs7V0EzRG1CaEIifQ==