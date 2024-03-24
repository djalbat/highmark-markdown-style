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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlU2V0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVTZXQgZnJvbSBcIi4vcnVsZVNldFwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgcnVsZVNldE5vblRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvKi9ydWxlU2V0XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0cyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICBhc0NTUyhzZWxlY3RvcnNMaXN0KSB7XG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgc2VsZWN0b3JzTGlzdExlbmd0aCA9IHNlbGVjdG9yc0xpc3QuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAoKGxlbmd0aCA+IDApICYmIChzZWxlY3RvcnNMaXN0TGVuZ3RoID4gMCkpIHtcbiAgICAgIGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIHJ1bGVTZXQpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZVNldENTUyA9IHJ1bGVTZXQuYXNDU1Moc2VsZWN0b3JzTGlzdCk7XG5cbiAgICAgICAgY3NzID0gKGNzcyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIHJ1bGVTZXRDU1MgOiAgLy8vXG4gICAgICAgICAgICAgICAgICBgJHtjc3N9JHtydWxlU2V0Q1NTfWA7XG5cbiAgICAgICAgcmV0dXJuIGNzcztcbiAgICAgIH0sIG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBydWxlU2V0cyA9IG5ldyBSdWxlU2V0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcnVsZVNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcnVsZVNldE5vblRlcm1pbmFsTm9kZXMgPSBydWxlU2V0Tm9uVGVybWluYWxOb2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gcnVsZVNldE5vblRlcm1pbmFsTm9kZXMubWFwKChydWxlU2V0Tm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gcnVsZVNldE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBydWxlU2V0ID0gUnVsZVNldC5mcm9tUnVsZVNldHNOb2RlQW5kVG9rZW5zKFJ1bGVTZXRzLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZVNldDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlU2V0cyA9IG5ldyBSdWxlU2V0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcnVsZVNldHM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlU2V0cyIsInJ1bGVTZXROb25UZXJtaW5hbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiYXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJhc0NTUyIsInNlbGVjdG9yc0xpc3QiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJzZWxlY3RvcnNMaXN0TGVuZ3RoIiwicmVkdWNlIiwicnVsZVNldCIsInJ1bGVTZXRDU1MiLCJmcm9tTm90aGluZyIsInJ1bGVTZXRzIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwicnVsZVNldE5vblRlcm1pbmFsTm9kZXMiLCJtYXAiLCJydWxlU2V0Tm9uVGVybWluYWxOb2RlIiwiUnVsZVNldCIsImZyb21SdWxlU2V0c05vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzhEQVBEO3FCQUVPO3lCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU1DLCtCQUErQkMsSUFBQUEsaUJBQVUsRUFBQztBQUVqQyxJQUFBLEFBQU1GLHlCQUFELEFBQUw7YUFBTUEsU0FDUEcsS0FBSztnQ0FERUg7UUFFakIsSUFBSSxDQUFDRyxLQUFLLEdBQUdBOztrQkFGSUg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNELEtBQUssQ0FBQ0UsTUFBTTtZQUFFOzs7WUFFeENDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxhQUFhO2dCQUNqQixJQUFJQyxNQUFNQyx1QkFBWTtnQkFFdEIsSUFBTUosU0FBUyxJQUFJLENBQUNELFNBQVMsSUFDdkJNLHNCQUFzQkgsY0FBY0gsU0FBUztnQkFFbkQsSUFBSSxBQUFDQyxTQUFTLEtBQU9LLHNCQUFzQixHQUFJO29CQUM3Q0YsTUFBTSxJQUFJLENBQUNMLEtBQUssQ0FBQ1EsTUFBTSxDQUFDLFNBQUNILEtBQUtJO3dCQUM1QixJQUFNQyxhQUFhRCxRQUFRTixLQUFLLENBQUNDO3dCQUVqQ0MsTUFBTSxBQUFDQSxRQUFRLE9BQ1BLLGFBQ0UsQUFBQyxHQUFRQSxPQUFOTCxLQUFpQixPQUFYSzt3QkFFbkIsT0FBT0w7b0JBQ1QsR0FBRztnQkFDTDtnQkFFQSxPQUFPQTtZQUNUOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1YLFFBQVEsRUFBRSxFQUNWWSxXQUFXLElBOUJBZixTQThCYUc7Z0JBRTlCLE9BQU9ZO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBTUMsMEJBQTBCbEIsNkJBQTZCZ0IsT0FDdkRkLFFBQVFnQix3QkFBd0JDLEdBQUcsQ0FBQyxTQUFDQztvQkFDbkMsSUFBTUosU0FBT0ksd0JBQ1BULFVBQVVVLGdCQUFPLENBQUNDLHlCQUF5QixDQXZDeEN2QixVQXVDbURpQixRQUFNQztvQkFFbEUsT0FBT047Z0JBQ1QsSUFDQUcsV0FBVyxJQTNDQWYsU0EyQ2FHO2dCQUU5QixPQUFPWTtZQUNUOzs7V0E5Q21CZiJ9