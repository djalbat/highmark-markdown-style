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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiLyovZGVjbGFyYXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2xhcmF0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICBhc0NTUyhzZWxlY3RvcnMpIHtcbiAgICBsZXQgY3NzID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBzZWxlY3RvcnNMZW5ndGggPSBzZWxlY3RvcnMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAoKGxlbmd0aCA+IDApICYmIChzZWxlY3RvcnNMZW5ndGggPiAwKSkge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5hcnJheS5yZWR1Y2UoKGRlY2xhcmF0aW9uc0NTUywgZGVjbGFyYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb25DU1MgPSBkZWNsYXJhdGlvbi5hc0NTUygpO1xuXG4gICAgICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyA9IChkZWNsYXJhdGlvbnNDU1MgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbkNTUyA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVjbGFyYXRpb25zQ1NTfVxuJHtkZWNsYXJhdGlvbkNTU31gO1xuXG4gICAgICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbnNDU1M7XG4gICAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICAgIHNlbGVjdG9yc0NTUyA9IHNlbGVjdG9ycy5hc0NTUygpO1xuXG4gICAgICBjc3MgPSBgJHtzZWxlY3RvcnNDU1N9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfVxufVxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2RlcyA9IGRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGVzLm1hcCgoZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBuZXcgRGVjbGFyYXRpb25zKGFycmF5KTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbnM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWNsYXJhdGlvbnMiLCJkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJhcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImFzQ1NTIiwic2VsZWN0b3JzIiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwic2VsZWN0b3JzTGVuZ3RoIiwiZGVjbGFyYXRpb25zQ1NTIiwicmVkdWNlIiwiZGVjbGFyYXRpb24iLCJkZWNsYXJhdGlvbkNTUyIsInNlbGVjdG9yc0NTUyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsImRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2RlcyIsIm1hcCIsImRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2RlIiwiRGVjbGFyYXRpb24iLCJkZWNsYXJhdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O2tFQVBHO3FCQUVHO3lCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU1DLG1DQUFtQ0MsSUFBQUEsaUJBQVUsRUFBQztBQUVyQyxJQUFBLEFBQU1GLDZCQUFELEFBQUw7YUFBTUEsYUFDUEcsS0FBSztnQ0FERUg7UUFFakIsSUFBSSxDQUFDRyxLQUFLLEdBQUdBOztrQkFGSUg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNELEtBQUssQ0FBQ0UsTUFBTTtZQUFFOzs7WUFFeENDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxTQUFTO2dCQUNiLElBQUlDLE1BQU1DLHVCQUFZO2dCQUV0QixJQUFNSixTQUFTLElBQUksQ0FBQ0QsU0FBUyxJQUN2Qk0sa0JBQWtCSCxVQUFVSCxTQUFTO2dCQUUzQyxJQUFJLEFBQUNDLFNBQVMsS0FBT0ssa0JBQWtCLEdBQUk7b0JBQ3pDLElBQU1DLGtCQUFrQixJQUFJLENBQUNSLEtBQUssQ0FBQ1MsTUFBTSxDQUFDLFNBQUNELGlCQUFpQkU7d0JBQ3BELElBQU1DLGlCQUFpQkQsWUFBWVAsS0FBSzt3QkFFeENLLGtCQUFrQixBQUFDQSxvQkFBb0IsT0FDbkJHLGlCQUNFLEFBQUMsR0FDbkNBLE9BRHFDSCxpQkFBZ0IsTUFDdEMsT0FBZkc7d0JBRVksT0FBT0g7b0JBQ1QsR0FBRyxPQUNISSxlQUFlUixVQUFVRCxLQUFLO29CQUVwQ0UsTUFBTSxBQUFDLEdBQ1hHLE9BRGFJLGNBQWEsUUFDVixPQUFoQkosaUJBQWdCO2dCQUdkO2dCQUVBLE9BQU9IO1lBQ1Q7Ozs7WUFFT1EsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1DLDhCQUE4QmxCLGlDQUFpQ2dCLE9BQy9EZCxRQUFRZ0IsNEJBQTRCQyxHQUFHLENBQUMsU0FBQ0M7b0JBQ3ZDLElBQU1KLFNBQU9JLDRCQUNQUixjQUFjUyxvQkFBVyxDQUFDTixpQkFBaUIsQ0FBQ0MsUUFBTUM7b0JBRXhELE9BQU9MO2dCQUNULElBQ0FVLGVBQWUsSUEzQ0p2QixhQTJDcUJHO2dCQUV0QyxPQUFPb0I7WUFDVDs7O1dBOUNtQnZCIn0=