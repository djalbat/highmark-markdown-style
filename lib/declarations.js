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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiLyovZGVjbGFyYXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2xhcmF0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICBhc0NTUyhzZWxlY3RvcnMpIHtcbiAgICBsZXQgY3NzID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBzZWxlY3RvcnNMZW5ndGggPSBzZWxlY3RvcnMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAoKGxlbmd0aCA+IDApICYmIChzZWxlY3RvcnNMZW5ndGggPiAwKSkge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5hcnJheS5yZWR1Y2UoKGRlY2xhcmF0aW9uc0NTUywgZGVjbGFyYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb25DU1MgPSBkZWNsYXJhdGlvbi5hc0NTUygpO1xuXG4gICAgICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyA9IChkZWNsYXJhdGlvbnNDU1MgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbkNTUyA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVjbGFyYXRpb25zQ1NTfVxuJHtkZWNsYXJhdGlvbkNTU31gO1xuXG4gICAgICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbnNDU1M7XG4gICAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICAgIHNlbGVjdG9yc0NTUyA9IHNlbGVjdG9ycy5hc0NTUygpO1xuXG4gICAgICBjc3MgPSBgJHtzZWxlY3RvcnNDU1N9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfVxufVxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gbmV3IERlY2xhcmF0aW9ucyhhcnJheSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2RlcyA9IGRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGVzLm1hcCgoZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBuZXcgRGVjbGFyYXRpb25zKGFycmF5KTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbnM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWNsYXJhdGlvbnMiLCJkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJhcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImFzQ1NTIiwic2VsZWN0b3JzIiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwic2VsZWN0b3JzTGVuZ3RoIiwiZGVjbGFyYXRpb25zQ1NTIiwicmVkdWNlIiwiZGVjbGFyYXRpb24iLCJkZWNsYXJhdGlvbkNTUyIsInNlbGVjdG9yc0NTUyIsImZyb21Ob3RoaW5nIiwiZGVjbGFyYXRpb25zIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGVzIiwibWFwIiwiZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGUiLCJEZWNsYXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7a0VBUEc7cUJBRUc7eUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTUMsbUNBQW1DQyxJQUFBQSxpQkFBVSxFQUFDO0FBRXJDLElBQUEsQUFBTUYsNkJBQUQsQUFBTDthQUFNQSxhQUNQRyxLQUFLO2dDQURFSDtRQUVqQixJQUFJLENBQUNHLEtBQUssR0FBR0E7O2tCQUZJSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0QsS0FBSyxDQUFDRSxNQUFNO1lBQUU7OztZQUV4Q0MsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLFNBQVM7Z0JBQ2IsSUFBSUMsTUFBTUMsdUJBQVk7Z0JBRXRCLElBQU1KLFNBQVMsSUFBSSxDQUFDRCxTQUFTLElBQ3ZCTSxrQkFBa0JILFVBQVVILFNBQVM7Z0JBRTNDLElBQUksQUFBQ0MsU0FBUyxLQUFPSyxrQkFBa0IsR0FBSTtvQkFDekMsSUFBTUMsa0JBQWtCLElBQUksQ0FBQ1IsS0FBSyxDQUFDUyxNQUFNLENBQUMsU0FBQ0QsaUJBQWlCRTt3QkFDcEQsSUFBTUMsaUJBQWlCRCxZQUFZUCxLQUFLO3dCQUV4Q0ssa0JBQWtCLEFBQUNBLG9CQUFvQixPQUNuQkcsaUJBQ0UsQUFBQyxHQUNuQ0EsT0FEcUNILGlCQUFnQixNQUN0QyxPQUFmRzt3QkFFWSxPQUFPSDtvQkFDVCxHQUFHLE9BQ0hJLGVBQWVSLFVBQVVELEtBQUs7b0JBRXBDRSxNQUFNLEFBQUMsR0FDWEcsT0FEYUksY0FBYSxRQUNWLE9BQWhCSixpQkFBZ0I7Z0JBR2Q7Z0JBRUEsT0FBT0g7WUFDVDs7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNYixRQUFRLEVBQUUsRUFDVmMsZUFBZSxJQXJDSmpCLGFBcUNxQkc7Z0JBRXRDLE9BQU9jO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBTUMsOEJBQThCcEIsaUNBQWlDa0IsT0FDL0RoQixRQUFRa0IsNEJBQTRCQyxHQUFHLENBQUMsU0FBQ0M7b0JBQ3ZDLElBQU1KLFNBQU9JLDRCQUNQVixjQUFjVyxvQkFBVyxDQUFDTixpQkFBaUIsQ0FBQ0MsUUFBTUM7b0JBRXhELE9BQU9QO2dCQUNULElBQ0FJLGVBQWUsSUFsREpqQixhQWtEcUJHO2dCQUV0QyxPQUFPYztZQUNUOzs7V0FyRG1CakIifQ==