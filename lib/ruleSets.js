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
        }
    ]);
    return RuleSets;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlU2V0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVTZXQgZnJvbSBcIi4vcnVsZVNldFwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgcnVsZVNldE5vblRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvKi9ydWxlU2V0XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0cyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICBhc0NTUyhzZWxlY3RvcnNMaXN0LCBvdXRlcm1vc3QgPSBmYWxzZSkge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpLFxuICAgICAgICAgIHNlbGVjdG9yc0xpc3RMZW5ndGggPSBzZWxlY3RvcnNMaXN0LmdldExlbmd0aCgpO1xuXG4gICAgaWYgKChsZW5ndGggPiAwKSAmJiAoc2VsZWN0b3JzTGlzdExlbmd0aCA+IDApKSB7XG4gICAgICBjc3MgPSB0aGlzLmFycmF5LnJlZHVjZSgoY3NzLCBydWxlU2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVTZXRDU1MgPSBydWxlU2V0LmFzQ1NTKHNlbGVjdG9yc0xpc3QsIG91dGVybW9zdCk7XG5cbiAgICAgICAgY3NzID0gKGNzcyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIHJ1bGVTZXRDU1MgOiAgLy8vXG4gICAgICAgICAgICAgICAgICBgJHtjc3N9JHtydWxlU2V0Q1NTfWA7XG5cbiAgICAgICAgcmV0dXJuIGNzcztcbiAgICAgIH0sIG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBydWxlU2V0cyA9IG5ldyBSdWxlU2V0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcnVsZVNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcnVsZVNldE5vblRlcm1pbmFsTm9kZXMgPSBydWxlU2V0Tm9uVGVybWluYWxOb2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gcnVsZVNldE5vblRlcm1pbmFsTm9kZXMubWFwKChydWxlU2V0Tm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gcnVsZVNldE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBydWxlU2V0ID0gUnVsZVNldC5mcm9tUnVsZVNldHNOb2RlQW5kVG9rZW5zKFJ1bGVTZXRzLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZVNldDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlU2V0cyA9IG5ldyBSdWxlU2V0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcnVsZVNldHM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlU2V0cyIsInJ1bGVTZXROb25UZXJtaW5hbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiYXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJhc0NTUyIsInNlbGVjdG9yc0xpc3QiLCJvdXRlcm1vc3QiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJzZWxlY3RvcnNMaXN0TGVuZ3RoIiwicmVkdWNlIiwicnVsZVNldCIsInJ1bGVTZXRDU1MiLCJmcm9tTm90aGluZyIsInJ1bGVTZXRzIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwicnVsZVNldE5vblRlcm1pbmFsTm9kZXMiLCJtYXAiLCJydWxlU2V0Tm9uVGVybWluYWxOb2RlIiwiUnVsZVNldCIsImZyb21SdWxlU2V0c05vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzhEQVBEO3FCQUVPO3lCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU1DLCtCQUErQkMsSUFBQUEsaUJBQVUsRUFBQztBQUVqQyxJQUFBLEFBQU1GLHlCQUFELEFBQUw7YUFBTUEsU0FDUEcsS0FBSztnQ0FERUg7UUFFakIsSUFBSSxDQUFDRyxLQUFLLEdBQUdBOztrQkFGSUg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNELEtBQUssQ0FBQ0UsTUFBTTtZQUFFOzs7WUFFeENDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxhQUFhO29CQUFFQyxZQUFBQSxpRUFBWTtnQkFDL0IsSUFBSUMsTUFBTUMsdUJBQVk7Z0JBRXRCLElBQU1MLFNBQVMsSUFBSSxDQUFDRCxTQUFTLElBQ3ZCTyxzQkFBc0JKLGNBQWNILFNBQVM7Z0JBRW5ELElBQUksQUFBQ0MsU0FBUyxLQUFPTSxzQkFBc0IsR0FBSTtvQkFDN0NGLE1BQU0sSUFBSSxDQUFDTixLQUFLLENBQUNTLE1BQU0sQ0FBQyxTQUFDSCxLQUFLSTt3QkFDNUIsSUFBTUMsYUFBYUQsUUFBUVAsS0FBSyxDQUFDQyxlQUFlQzt3QkFFaERDLE1BQU0sQUFBQ0EsUUFBUSxPQUNQSyxhQUNFLEFBQUMsR0FBUUEsT0FBTkwsS0FBaUIsT0FBWEs7d0JBRW5CLE9BQU9MO29CQUNULEdBQUc7Z0JBQ0w7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNWixRQUFRLEVBQUUsRUFDVmEsV0FBVyxJQTlCQWhCLFNBOEJhRztnQkFFOUIsT0FBT2E7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUNuQyxJQUFNQywwQkFBMEJuQiw2QkFBNkJpQixPQUN2RGYsUUFBUWlCLHdCQUF3QkMsR0FBRyxDQUFDLFNBQUNDO29CQUNuQyxJQUFNSixTQUFPSSx3QkFDUFQsVUFBVVUsZ0JBQU8sQ0FBQ0MseUJBQXlCLENBdkN4Q3hCLFVBdUNtRGtCLFFBQU1DO29CQUVsRSxPQUFPTjtnQkFDVCxJQUNBRyxXQUFXLElBM0NBaEIsU0EyQ2FHO2dCQUU5QixPQUFPYTtZQUNUOzs7V0E5Q21CaEIifQ==