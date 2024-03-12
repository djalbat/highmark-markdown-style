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
var _occamquery = require("occam-query");
var _necessary = require("necessary");
var _declaration = /*#__PURE__*/ _interop_require_default(require("./declaration"));
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
var forwardsForEach = _necessary.arrayUtilities.forwardsForEach, backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
var declarationQuery = _occamquery.Query.fromExpression("/*/declaration");
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
            key: "forwardsForEachDeclaration",
            value: function forwardsForEachDeclaration(callback) {
                forwardsForEach(this.array, callback);
            }
        },
        {
            key: "backwardsForEachDeclaration",
            value: function backwardsForEachDeclaration(callback) {
                backwardsForEach(this.array, callback);
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
                var declarationNodes = declarationQuery.execute(node), array = declarationNodes.map(function(declarationNode) {
                    var _$node = declarationNode, declaration = _declaration.default.fromNodeAndTokens(_$node, tokens);
                    return declaration;
                }), declarations = new Declarations(array);
                return declarations;
            }
        }
    ]);
    return Declarations;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmb3J3YXJkc0ZvckVhY2gsIGJhY2t3YXJkc0ZvckVhY2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBkZWNsYXJhdGlvblF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9kZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBzb21lRGVjbGFyYXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBmb3J3YXJkc0ZvckVhY2hEZWNsYXJhdGlvbihjYWxsYmFjaykgeyBmb3J3YXJkc0ZvckVhY2godGhpcy5hcnJheSwgY2FsbGJhY2spOyB9XG5cbiAgYmFja3dhcmRzRm9yRWFjaERlY2xhcmF0aW9uKGNhbGxiYWNrKSB7IGJhY2t3YXJkc0ZvckVhY2godGhpcy5hcnJheSwgY2FsbGJhY2spOyB9XG5cbiAgYXNDU1MoaW5kZW50KSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5hcnJheS5yZWR1Y2UoKGRlY2xhcmF0aW9uc0NTUywgZGVjbGFyYXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uQ1NTID0gZGVjbGFyYXRpb24uYXNDU1MoaW5kZW50KTtcblxuICAgICAgICAgICAgZGVjbGFyYXRpb25zQ1NTICs9IGRlY2xhcmF0aW9uQ1NTO1xuXG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25zQ1NTO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgY3NzID0gZGVjbGFyYXRpb25zQ1NTOyAgLy8vXG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvblF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBkZWNsYXJhdGlvbk5vZGVzLm1hcCgoZGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24uZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IG5ldyBEZWNsYXJhdGlvbnMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9ucztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRlY2xhcmF0aW9ucyIsImZvcndhcmRzRm9yRWFjaCIsImFycmF5VXRpbGl0aWVzIiwiYmFja3dhcmRzRm9yRWFjaCIsImRlY2xhcmF0aW9uUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiYXJyYXkiLCJzb21lRGVjbGFyYXRpb24iLCJjYWxsYmFjayIsInNvbWUiLCJmb3J3YXJkc0ZvckVhY2hEZWNsYXJhdGlvbiIsImJhY2t3YXJkc0ZvckVhY2hEZWNsYXJhdGlvbiIsImFzQ1NTIiwiaW5kZW50IiwiZGVjbGFyYXRpb25zQ1NTIiwicmVkdWNlIiwiZGVjbGFyYXRpb24iLCJkZWNsYXJhdGlvbkNTUyIsIkVNUFRZX1NUUklORyIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsImRlY2xhcmF0aW9uTm9kZXMiLCJleGVjdXRlIiwibWFwIiwiZGVjbGFyYXRpb25Ob2RlIiwiRGVjbGFyYXRpb24iLCJkZWNsYXJhdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7OzBCQVhDO3lCQUNTO2tFQUVQO3lCQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQVFDLGtCQUFzQ0MseUJBQWMsQ0FBcERELGlCQUFpQkUsbUJBQXFCRCx5QkFBYyxDQUFuQ0M7QUFFekIsSUFBTUMsbUJBQW1CQyxpQkFBSyxDQUFDQyxjQUFjLENBQUM7QUFFL0IsSUFBQSxBQUFNTiw2QkFBRCxBQUFMO2FBQU1BLGFBQ1BPLEtBQUs7Z0NBREVQO1FBRWpCLElBQUksQ0FBQ08sS0FBSyxHQUFHQTs7a0JBRklQOztZQUtuQlEsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkMsUUFBUTtnQkFBSSxPQUFPLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxJQUFJLENBQUNEO1lBQVc7OztZQUU5REUsS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQkYsUUFBUTtnQkFBSVIsZ0JBQWdCLElBQUksQ0FBQ00sS0FBSyxFQUFFRTtZQUFXOzs7WUFFOUVHLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJILFFBQVE7Z0JBQUlOLGlCQUFpQixJQUFJLENBQUNJLEtBQUssRUFBRUU7WUFBVzs7O1lBRWhGSSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsTUFBTTtnQkFDVixJQUFNQyxrQkFBa0IsSUFBSSxDQUFDUixLQUFLLENBQUNTLE1BQU0sQ0FBQyxTQUFDRCxpQkFBaUJFO29CQUNwRCxJQUFNQyxpQkFBaUJELFlBQVlKLEtBQUssQ0FBQ0M7b0JBRXpDQyxtQkFBbUJHO29CQUVuQixPQUFPSDtnQkFDVCxHQUFHSSx1QkFBWSxHQUNmQyxNQUFNTCxpQkFBa0IsR0FBRztnQkFFakMsT0FBT0s7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBTUMsbUJBQW1CcEIsaUJBQWlCcUIsT0FBTyxDQUFDSCxPQUM1Q2YsUUFBUWlCLGlCQUFpQkUsR0FBRyxDQUFDLFNBQUNDO29CQUM1QixJQUFNTCxTQUFPSyxpQkFDUFYsY0FBY1csb0JBQVcsQ0FBQ1AsaUJBQWlCLENBQUNDLFFBQU1DO29CQUV4RCxPQUFPTjtnQkFDVCxJQUNBWSxlQUFlLElBaENKN0IsYUFnQ3FCTztnQkFFdEMsT0FBT3NCO1lBQ1Q7OztXQW5DbUI3QiJ9