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
var declarationNonTerminalNodesQuery = (0, _query.nodesQuery)("/*/declaration");
var Declarations = /*#__PURE__*/ function() {
    function Declarations(array) {
        _class_call_check(this, Declarations);
        this.array = array;
    }
    _create_class(Declarations, [
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
                    var declarationsCSS = this.array.reduce(function(declarationsCSS, declaration) {
                        var declarationCSS = declaration.asCSS();
                        declarationsCSS = declarationsCSS === null ? declarationCSS : "".concat(declarationsCSS, "\n").concat(declarationCSS);
                        return declarationsCSS;
                    }, null), selectorsListCSS = selectorsList.asCSS();
                    css = "".concat(selectorsListCSS, " {\n").concat(declarationsCSS, "\n}\n");
                }
                return css;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var array = [], declarations = new Declarations(array);
                return declarations;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiLyovZGVjbGFyYXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2xhcmF0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIGFzQ1NTKHNlbGVjdG9yc0xpc3QpIHtcbiAgICBsZXQgY3NzID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0TGVuZ3RoID0gc2VsZWN0b3JzTGlzdC5nZXRMZW5ndGgoKTtcblxuICAgIGlmICgobGVuZ3RoID4gMCkgJiYgKHNlbGVjdG9yc0xpc3RMZW5ndGggPiAwKSkge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5hcnJheS5yZWR1Y2UoKGRlY2xhcmF0aW9uc0NTUywgZGVjbGFyYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb25DU1MgPSBkZWNsYXJhdGlvbi5hc0NTUygpO1xuXG4gICAgICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyA9IChkZWNsYXJhdGlvbnNDU1MgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbkNTUyA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVjbGFyYXRpb25zQ1NTfVxuJHtkZWNsYXJhdGlvbkNTU31gO1xuXG4gICAgICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbnNDU1M7XG4gICAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICAgIHNlbGVjdG9yc0xpc3RDU1MgPSBzZWxlY3RvcnNMaXN0LmFzQ1NTKCk7XG5cbiAgICAgIGNzcyA9IGAke3NlbGVjdG9yc0xpc3RDU1N9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfVxufVxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gbmV3IERlY2xhcmF0aW9ucyhhcnJheSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2RlcyA9IGRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGVzLm1hcCgoZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBuZXcgRGVjbGFyYXRpb25zKGFycmF5KTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbnM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWNsYXJhdGlvbnMiLCJkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJhcnJheSIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiYXNDU1MiLCJzZWxlY3RvcnNMaXN0IiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwic2VsZWN0b3JzTGlzdExlbmd0aCIsImRlY2xhcmF0aW9uc0NTUyIsInJlZHVjZSIsImRlY2xhcmF0aW9uIiwiZGVjbGFyYXRpb25DU1MiLCJzZWxlY3RvcnNMaXN0Q1NTIiwiZnJvbU5vdGhpbmciLCJkZWNsYXJhdGlvbnMiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZXMiLCJtYXAiLCJkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZSIsIkRlY2xhcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OztrRUFQRztxQkFFRzt5QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNQyxtQ0FBbUNDLElBQUFBLGlCQUFVLEVBQUM7QUFFckMsSUFBQSxBQUFNRiw2QkFBRCxBQUFMO2FBQU1BLGFBQ1BHLEtBQUs7Z0NBREVIO1FBRWpCLElBQUksQ0FBQ0csS0FBSyxHQUFHQTs7a0JBRklIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxLQUFLO1lBQ25COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDRixLQUFLLENBQUNHLE1BQU07WUFBRTs7O1lBRXhDQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsYUFBYTtnQkFDakIsSUFBSUMsTUFBTUMsdUJBQVk7Z0JBRXRCLElBQU1KLFNBQVMsSUFBSSxDQUFDRCxTQUFTLElBQ3ZCTSxzQkFBc0JILGNBQWNILFNBQVM7Z0JBRW5ELElBQUksQUFBQ0MsU0FBUyxLQUFPSyxzQkFBc0IsR0FBSTtvQkFDN0MsSUFBTUMsa0JBQWtCLElBQUksQ0FBQ1QsS0FBSyxDQUFDVSxNQUFNLENBQUMsU0FBQ0QsaUJBQWlCRTt3QkFDcEQsSUFBTUMsaUJBQWlCRCxZQUFZUCxLQUFLO3dCQUV4Q0ssa0JBQWtCLEFBQUNBLG9CQUFvQixPQUNuQkcsaUJBQ0UsQUFBQyxHQUNuQ0EsT0FEcUNILGlCQUFnQixNQUN0QyxPQUFmRzt3QkFFWSxPQUFPSDtvQkFDVCxHQUFHLE9BQ0hJLG1CQUFtQlIsY0FBY0QsS0FBSztvQkFFNUNFLE1BQU0sQUFBQyxHQUNYRyxPQURhSSxrQkFBaUIsUUFDZCxPQUFoQkosaUJBQWdCO2dCQUdkO2dCQUVBLE9BQU9IO1lBQ1Q7Ozs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTWQsUUFBUSxFQUFFLEVBQ1ZlLGVBQWUsSUF6Q0psQixhQXlDcUJHO2dCQUV0QyxPQUFPZTtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1DLDhCQUE4QnJCLGlDQUFpQ21CLE9BQy9EakIsUUFBUW1CLDRCQUE0QkMsR0FBRyxDQUFDLFNBQUNDO29CQUN2QyxJQUFNSixTQUFPSSw0QkFDUFYsY0FBY1csb0JBQVcsQ0FBQ04saUJBQWlCLENBQUNDLFFBQU1DO29CQUV4RCxPQUFPUDtnQkFDVCxJQUNBSSxlQUFlLElBdERKbEIsYUFzRHFCRztnQkFFdEMsT0FBT2U7WUFDVDs7O1dBekRtQmxCIn0=