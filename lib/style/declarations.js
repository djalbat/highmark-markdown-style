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
            key: "someDeclaration",
            value: function someDeclaration(callback) {
                return this.array.some(callback);
            }
        },
        {
            key: "asCSS",
            value: function asCSS(indent) {
                var declarationsCSS = this.array.reduce(function(declarationsCSS, declaration) {
                    var declarationCSS = declaration.asCSS(indent);
                    declarationsCSS += declarationCSS;
                    return declarationsCSS;
                }, _constants.EMPTY_STRING), css = declarationsCSS; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvKi9kZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBzb21lRGVjbGFyYXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBhc0NTUyhpbmRlbnQpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmFycmF5LnJlZHVjZSgoZGVjbGFyYXRpb25zQ1NTLCBkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb25DU1MgPSBkZWNsYXJhdGlvbi5hc0NTUyhpbmRlbnQpO1xuXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnNDU1MgKz0gZGVjbGFyYXRpb25DU1M7XG5cbiAgICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbnNDU1M7XG4gICAgICAgICAgfSwgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgICBjc3MgPSBkZWNsYXJhdGlvbnNDU1M7ICAvLy9cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGVzID0gZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZXMubWFwKChkZWNsYXJhdGlvbk5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24uZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IG5ldyBEZWNsYXJhdGlvbnMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9ucztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRlY2xhcmF0aW9ucyIsImRlY2xhcmF0aW9uTm9uVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImFycmF5Iiwic29tZURlY2xhcmF0aW9uIiwiY2FsbGJhY2siLCJzb21lIiwiYXNDU1MiLCJpbmRlbnQiLCJkZWNsYXJhdGlvbnNDU1MiLCJyZWR1Y2UiLCJkZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9uQ1NTIiwiRU1QVFlfU1RSSU5HIiwiY3NzIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGVzIiwibWFwIiwiZGVjbGFyYXRpb25Ob25UZXJtaW5hbE5vZGUiLCJEZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7a0VBUEc7cUJBRUc7eUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTUMsbUNBQW1DQyxJQUFBQSxpQkFBVSxFQUFDO0FBRXJDLElBQUEsQUFBTUYsNkJBQUQsQUFBTDthQUFNQSxhQUNQRyxLQUFLO2dDQURFSDtRQUVqQixJQUFJLENBQUNHLEtBQUssR0FBR0E7O2tCQUZJSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JDLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNGLEtBQUssQ0FBQ0csSUFBSSxDQUFDRDtZQUFXOzs7WUFFOURFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxNQUFNO2dCQUNWLElBQU1DLGtCQUFrQixJQUFJLENBQUNOLEtBQUssQ0FBQ08sTUFBTSxDQUFDLFNBQUNELGlCQUFpQkU7b0JBQ3BELElBQU1DLGlCQUFpQkQsWUFBWUosS0FBSyxDQUFDQztvQkFFekNDLG1CQUFtQkc7b0JBRW5CLE9BQU9IO2dCQUNULEdBQUdJLHVCQUFZLEdBQ2ZDLE1BQU1MLGlCQUFrQixHQUFHO2dCQUVqQyxPQUFPSztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUNuQyxJQUFNQyw4QkFBOEJqQixpQ0FBaUNlLE9BQy9EYixRQUFRZSw0QkFBNEJDLEdBQUcsQ0FBQyxTQUFDQztvQkFDdkMsSUFBTUosU0FBT0ksNEJBQ1BULGNBQWNVLG9CQUFXLENBQUNOLGlCQUFpQixDQUFDQyxRQUFNQztvQkFFeEQsT0FBT047Z0JBQ1QsSUFDQVcsZUFBZSxJQTVCSnRCLGFBNEJxQkc7Z0JBRXRDLE9BQU9tQjtZQUNUOzs7V0EvQm1CdEIifQ==