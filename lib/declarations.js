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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiLyovZGVjbGFyYXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2xhcmF0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICBhc0NTUyhzZWxlY3RvcnNMaXN0KSB7XG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgc2VsZWN0b3JzTGlzdExlbmd0aCA9IHNlbGVjdG9yc0xpc3QuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAoKGxlbmd0aCA+IDApICYmIChzZWxlY3RvcnNMaXN0TGVuZ3RoID4gMCkpIHtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuYXJyYXkucmVkdWNlKChkZWNsYXJhdGlvbnNDU1MsIGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uQ1NTID0gZGVjbGFyYXRpb24uYXNDU1MoKTtcblxuICAgICAgICAgICAgICBkZWNsYXJhdGlvbnNDU1MgPSAoZGVjbGFyYXRpb25zQ1NTID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25DU1MgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlY2xhcmF0aW9uc0NTU31cbiR7ZGVjbGFyYXRpb25DU1N9YDtcblxuICAgICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25zQ1NTO1xuICAgICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgICBzZWxlY3RvcnNMaXN0Q1NTID0gc2VsZWN0b3JzTGlzdC5hc0NTUygpO1xuXG4gICAgICBjc3MgPSBgJHtzZWxlY3RvcnNMaXN0Q1NTfSB7XG4ke2RlY2xhcmF0aW9uc0NTU31cbn1cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IG5ldyBEZWNsYXJhdGlvbnMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZXMgPSBkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IGRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2Rlcy5tYXAoKGRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gbmV3IERlY2xhcmF0aW9ucyhhcnJheSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVjbGFyYXRpb25zIiwiZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiYXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJhc0NTUyIsInNlbGVjdG9yc0xpc3QiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJzZWxlY3RvcnNMaXN0TGVuZ3RoIiwiZGVjbGFyYXRpb25zQ1NTIiwicmVkdWNlIiwiZGVjbGFyYXRpb24iLCJkZWNsYXJhdGlvbkNTUyIsInNlbGVjdG9yc0xpc3RDU1MiLCJmcm9tTm90aGluZyIsImRlY2xhcmF0aW9ucyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsImRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2RlcyIsIm1hcCIsImRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2RlIiwiRGVjbGFyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O2tFQVBHO3FCQUVHO3lCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU1DLG1DQUFtQ0MsSUFBQUEsaUJBQVUsRUFBQztBQUVyQyxJQUFBLEFBQU1GLDZCQUFELEFBQUw7YUFBTUEsYUFDUEcsS0FBSztnQ0FERUg7UUFFakIsSUFBSSxDQUFDRyxLQUFLLEdBQUdBOztrQkFGSUg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNELEtBQUssQ0FBQ0UsTUFBTTtZQUFFOzs7WUFFeENDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxhQUFhO2dCQUNqQixJQUFJQyxNQUFNQyx1QkFBWTtnQkFFdEIsSUFBTUosU0FBUyxJQUFJLENBQUNELFNBQVMsSUFDdkJNLHNCQUFzQkgsY0FBY0gsU0FBUztnQkFFbkQsSUFBSSxBQUFDQyxTQUFTLEtBQU9LLHNCQUFzQixHQUFJO29CQUM3QyxJQUFNQyxrQkFBa0IsSUFBSSxDQUFDUixLQUFLLENBQUNTLE1BQU0sQ0FBQyxTQUFDRCxpQkFBaUJFO3dCQUNwRCxJQUFNQyxpQkFBaUJELFlBQVlQLEtBQUs7d0JBRXhDSyxrQkFBa0IsQUFBQ0Esb0JBQW9CLE9BQ25CRyxpQkFDRSxBQUFDLEdBQ25DQSxPQURxQ0gsaUJBQWdCLE1BQ3RDLE9BQWZHO3dCQUVZLE9BQU9IO29CQUNULEdBQUcsT0FDSEksbUJBQW1CUixjQUFjRCxLQUFLO29CQUU1Q0UsTUFBTSxBQUFDLEdBQ1hHLE9BRGFJLGtCQUFpQixRQUNkLE9BQWhCSixpQkFBZ0I7Z0JBR2Q7Z0JBRUEsT0FBT0g7WUFDVDs7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNYixRQUFRLEVBQUUsRUFDVmMsZUFBZSxJQXJDSmpCLGFBcUNxQkc7Z0JBRXRDLE9BQU9jO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBTUMsOEJBQThCcEIsaUNBQWlDa0IsT0FDL0RoQixRQUFRa0IsNEJBQTRCQyxHQUFHLENBQUMsU0FBQ0M7b0JBQ3ZDLElBQU1KLFNBQU9JLDRCQUNQVixjQUFjVyxvQkFBVyxDQUFDTixpQkFBaUIsQ0FBQ0MsUUFBTUM7b0JBRXhELE9BQU9QO2dCQUNULElBQ0FJLGVBQWUsSUFsREpqQixhQWtEcUJHO2dCQUV0QyxPQUFPYztZQUNUOzs7V0FyRG1CakIifQ==