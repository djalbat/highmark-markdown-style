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
                var length = this.getLength();
                if (length > 0) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvKi9kZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIGFzQ1NTKHNlbGVjdG9ycykge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuYXJyYXkucmVkdWNlKChkZWNsYXJhdGlvbnNDU1MsIGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uQ1NTID0gZGVjbGFyYXRpb24uYXNDU1MoKTtcblxuICAgICAgICAgICAgICBkZWNsYXJhdGlvbnNDU1MgPSAoZGVjbGFyYXRpb25zQ1NTID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25DU1MgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlY2xhcmF0aW9uc0NTU31cbiR7ZGVjbGFyYXRpb25DU1N9YDtcblxuICAgICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25zQ1NTO1xuICAgICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgICBzZWxlY3RvcnNDU1MgPSBzZWxlY3RvcnMuYXNDU1MoKTtcblxuICAgICAgY3NzID0gYCR7c2VsZWN0b3JzQ1NTfSB7XG4ke2RlY2xhcmF0aW9uc0NTU31cbn1cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZXMgPSBkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IGRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2Rlcy5tYXAoKGRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gbmV3IERlY2xhcmF0aW9ucyhhcnJheSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVjbGFyYXRpb25zIiwiZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiYXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJhc0NTUyIsInNlbGVjdG9ycyIsImNzcyIsIkVNUFRZX1NUUklORyIsImRlY2xhcmF0aW9uc0NTUyIsInJlZHVjZSIsImRlY2xhcmF0aW9uIiwiZGVjbGFyYXRpb25DU1MiLCJzZWxlY3RvcnNDU1MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZXMiLCJtYXAiLCJkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZSIsIkRlY2xhcmF0aW9uIiwiZGVjbGFyYXRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OztrRUFQRztxQkFFRzt5QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNQyxtQ0FBbUNDLElBQUFBLGlCQUFVLEVBQUM7QUFFckMsSUFBQSxBQUFNRiw2QkFBRCxBQUFMO2FBQU1BLGFBQ1BHLEtBQUs7Z0NBREVIO1FBRWpCLElBQUksQ0FBQ0csS0FBSyxHQUFHQTs7a0JBRklIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDRCxLQUFLLENBQUNFLE1BQU07WUFBRTs7O1lBRXhDQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsU0FBUztnQkFDYixJQUFJQyxNQUFNQyx1QkFBWTtnQkFFdEIsSUFBTUosU0FBUyxJQUFJLENBQUNELFNBQVM7Z0JBRTdCLElBQUlDLFNBQVMsR0FBRztvQkFDZCxJQUFNSyxrQkFBa0IsSUFBSSxDQUFDUCxLQUFLLENBQUNRLE1BQU0sQ0FBQyxTQUFDRCxpQkFBaUJFO3dCQUNwRCxJQUFNQyxpQkFBaUJELFlBQVlOLEtBQUs7d0JBRXhDSSxrQkFBa0IsQUFBQ0Esb0JBQW9CLE9BQ25CRyxpQkFDRSxBQUFDLEdBQ25DQSxPQURxQ0gsaUJBQWdCLE1BQ3RDLE9BQWZHO3dCQUVZLE9BQU9IO29CQUNULEdBQUcsT0FDSEksZUFBZVAsVUFBVUQsS0FBSztvQkFFcENFLE1BQU0sQUFBQyxHQUNYRSxPQURhSSxjQUFhLFFBQ1YsT0FBaEJKLGlCQUFnQjtnQkFHZDtnQkFFQSxPQUFPRjtZQUNUOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUNuQyxJQUFNQyw4QkFBOEJqQixpQ0FBaUNlLE9BQy9EYixRQUFRZSw0QkFBNEJDLEdBQUcsQ0FBQyxTQUFDQztvQkFDdkMsSUFBTUosU0FBT0ksNEJBQ1BSLGNBQWNTLG9CQUFXLENBQUNOLGlCQUFpQixDQUFDQyxRQUFNQztvQkFFeEQsT0FBT0w7Z0JBQ1QsSUFDQVUsZUFBZSxJQTFDSnRCLGFBMENxQkc7Z0JBRXRDLE9BQU9tQjtZQUNUOzs7V0E3Q21CdEIifQ==