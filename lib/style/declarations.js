"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Declarations;
    }
});
var _declaration = /*#__PURE__*/ _interop_require_default(require("./declaration"));
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
var declarationNonTerminalNodesQuery = (0, _query.nodesQuery)("/*/declaration");
var Declarations = /*#__PURE__*/ function() {
    function Declarations(array) {
        _class_call_check(this, Declarations);
        this.array = array;
    }
    _create_class(Declarations, [
        {
            key: "getLength",
            value: function getLength() {
                return this.array.length;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(selectors) {
                var css = _constants.EMPTY_STRING;
                var length = this.getLength(), selectorsLength = selectors.getLength();
                if (length > 0 && selectorsLength > 0) {
                    var declarationsCSS = this.array.reduce(function(declarationsCSS, declaration) {
                        var declarationCSS = declaration.asCSS();
                        declarationsCSS = declarationsCSS === null ? declarationCSS : "".concat(declarationsCSS, "\n").concat(declarationCSS);
                        return declarationsCSS;
                    }, null), selectorsCSS = selectors.asCSS();
                    css = "".concat(selectorsCSS, " {\n").concat(declarationsCSS, "\n}\n");
                }
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var declarationNonTerminalNodes = declarationNonTerminalNodesQuery(node), array = declarationNonTerminalNodes.map(function(declarationNonTerminalNode) {
                    var _$node = declarationNonTerminalNode, declaration = _declaration.default.fromNodeAndTokens(_$node, tokens);
                    return declaration;
                }), declarations = new Declarations(array);
                return declarations;
            }
        }
    ]);
    return Declarations;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvKi9kZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIGFzQ1NTKHNlbGVjdG9ycykge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpLFxuICAgICAgICAgIHNlbGVjdG9yc0xlbmd0aCA9IHNlbGVjdG9ycy5nZXRMZW5ndGgoKTtcblxuICAgIGlmICgobGVuZ3RoID4gMCkgJiYgKHNlbGVjdG9yc0xlbmd0aCA+IDApKSB7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmFycmF5LnJlZHVjZSgoZGVjbGFyYXRpb25zQ1NTLCBkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvbkNTUyA9IGRlY2xhcmF0aW9uLmFzQ1NTKCk7XG5cbiAgICAgICAgICAgICAgZGVjbGFyYXRpb25zQ1NTID0gKGRlY2xhcmF0aW9uc0NTUyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uQ1NTIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWNsYXJhdGlvbnNDU1N9XG4ke2RlY2xhcmF0aW9uQ1NTfWA7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uc0NTUztcbiAgICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgICAgc2VsZWN0b3JzQ1NTID0gc2VsZWN0b3JzLmFzQ1NTKCk7XG5cbiAgICAgIGNzcyA9IGAke3NlbGVjdG9yc0NTU30ge1xuJHtkZWNsYXJhdGlvbnNDU1N9XG59XG5gO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGVzID0gZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZXMubWFwKChkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24uZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IG5ldyBEZWNsYXJhdGlvbnMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9ucztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRlY2xhcmF0aW9ucyIsImRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiYXNDU1MiLCJzZWxlY3RvcnMiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJzZWxlY3RvcnNMZW5ndGgiLCJkZWNsYXJhdGlvbnNDU1MiLCJyZWR1Y2UiLCJkZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9uQ1NTIiwic2VsZWN0b3JzQ1NTIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGVzIiwibWFwIiwiZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGUiLCJEZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7a0VBUEc7cUJBRUc7eUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTUMsbUNBQW1DQyxJQUFBQSxpQkFBVSxFQUFDO0FBRXJDLElBQUEsQUFBTUYsNkJBQUQsQUFBTDthQUFNQSxhQUNQRyxLQUFLO2dDQURFSDtRQUVqQixJQUFJLENBQUNHLEtBQUssR0FBR0E7O2tCQUZJSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0QsS0FBSyxDQUFDRSxNQUFNO1lBQUU7OztZQUV4Q0MsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLFNBQVM7Z0JBQ2IsSUFBSUMsTUFBTUMsdUJBQVk7Z0JBRXRCLElBQU1KLFNBQVMsSUFBSSxDQUFDRCxTQUFTLElBQ3ZCTSxrQkFBa0JILFVBQVVILFNBQVM7Z0JBRTNDLElBQUksQUFBQ0MsU0FBUyxLQUFPSyxrQkFBa0IsR0FBSTtvQkFDekMsSUFBTUMsa0JBQWtCLElBQUksQ0FBQ1IsS0FBSyxDQUFDUyxNQUFNLENBQUMsU0FBQ0QsaUJBQWlCRTt3QkFDcEQsSUFBTUMsaUJBQWlCRCxZQUFZUCxLQUFLO3dCQUV4Q0ssa0JBQWtCLEFBQUNBLG9CQUFvQixPQUNuQkcsaUJBQ0UsQUFBQyxHQUNuQ0EsT0FEcUNILGlCQUFnQixNQUN0QyxPQUFmRzt3QkFFWSxPQUFPSDtvQkFDVCxHQUFHLE9BQ0hJLGVBQWVSLFVBQVVELEtBQUs7b0JBRXBDRSxNQUFNLEFBQUMsR0FDWEcsT0FEYUksY0FBYSxRQUNWLE9BQWhCSixpQkFBZ0I7Z0JBR2Q7Z0JBRUEsT0FBT0g7WUFDVDs7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBTUMsOEJBQThCbEIsaUNBQWlDZ0IsT0FDL0RkLFFBQVFnQiw0QkFBNEJDLEdBQUcsQ0FBQyxTQUFDQztvQkFDdkMsSUFBTUosU0FBT0ksNEJBQ1BSLGNBQWNTLG9CQUFXLENBQUNOLGlCQUFpQixDQUFDQyxRQUFNQztvQkFFeEQsT0FBT0w7Z0JBQ1QsSUFDQVUsZUFBZSxJQTNDSnZCLGFBMkNxQkc7Z0JBRXRDLE9BQU9vQjtZQUNUOzs7V0E5Q21CdkIifQ==