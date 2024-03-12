"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Declaration;
    }
});
var _query = require("../utilities/query");
var _content = require("../utilities/content");
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
var nameTerminalNodeQuery = (0, _query.nodeQuery)("/*/@name"), valuesNonTerminalNodeQuery = (0, _query.nodeQuery)("/*/values");
var Declaration = /*#__PURE__*/ function() {
    function Declaration(name, values) {
        _class_call_check(this, Declaration);
        this.name = name;
        this.values = values;
    }
    _create_class(Declaration, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getValues",
            value: function getValues() {
                return this.values;
            }
        },
        {
            key: "asCSS",
            value: function asCSS() {
                var css = "  ".concat(this.name, ": ").concat(this.values, ";\n");
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var nameTerminalNode = nameTerminalNodeQuery(node), valuesNonTerminalNode = valuesNonTerminalNodeQuery(node), nameTerminalNodeContent = nameTerminalNode.getContent(), valuesNonTerminalNodesContent = (0, _content.contentFromNonTerminalNodeAndTokens)(valuesNonTerminalNode, tokens), name = nameTerminalNodeContent, values = valuesNonTerminalNodesContent, declaration = new Declaration(name, values);
                return declaration;
            }
        }
    ]);
    return Declaration;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgY29udGVudEZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovQG5hbWVcIiksXG4gICAgICB2YWx1ZXNOb25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3ZhbHVlc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlcztcbiAgfVxuXG4gIGFzQ1NTKCkge1xuICAgIGNvbnN0IGNzcyA9IGAgICR7dGhpcy5uYW1lfTogJHt0aGlzLnZhbHVlc307XFxuYDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgbmFtZVRlcm1pbmFsTm9kZSA9IG5hbWVUZXJtaW5hbE5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgICB2YWx1ZXNOb25UZXJtaW5hbE5vZGUgPSB2YWx1ZXNOb25UZXJtaW5hbE5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgICBuYW1lVGVybWluYWxOb2RlQ29udGVudCA9IG5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHZhbHVlc05vblRlcm1pbmFsTm9kZXNDb250ZW50ID0gY29udGVudEZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnModmFsdWVzTm9uVGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lVGVybWluYWxOb2RlQ29udGVudCwgLy8vXG4gICAgICAgICAgdmFsdWVzID0gdmFsdWVzTm9uVGVybWluYWxOb2Rlc0NvbnRlbnQsIC8vL1xuICAgICAgICAgIGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKG5hbWUsIHZhbHVlcyk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWNsYXJhdGlvbiIsIm5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhbHVlc05vblRlcm1pbmFsTm9kZVF1ZXJ5IiwibmFtZSIsInZhbHVlcyIsImdldE5hbWUiLCJnZXRWYWx1ZXMiLCJhc0NTUyIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsIm5hbWVUZXJtaW5hbE5vZGUiLCJ2YWx1ZXNOb25UZXJtaW5hbE5vZGUiLCJuYW1lVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJ2YWx1ZXNOb25UZXJtaW5hbE5vZGVzQ29udGVudCIsImNvbnRlbnRGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwiZGVjbGFyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3FCQU5LO3VCQUMwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsSUFBTUMsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLGFBQ2xDQyw2QkFBNkJELElBQUFBLGdCQUFTLEVBQUM7QUFFOUIsSUFBQSxBQUFNRiw0QkFBRCxBQUFMO2FBQU1BLFlBQ1BJLElBQUksRUFBRUMsTUFBTTtnQ0FETEw7UUFFakIsSUFBSSxDQUFDSSxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFIR0w7O1lBTW5CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsTUFBTSxBQUFDLEtBQWtCLE9BQWQsSUFBSSxDQUFDTCxJQUFJLEVBQUMsTUFBZ0IsT0FBWixJQUFJLENBQUNDLE1BQU0sRUFBQztnQkFFM0MsT0FBT0k7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBTUMsbUJBQW1CWixzQkFBc0JVLE9BQ3pDRyx3QkFBd0JYLDJCQUEyQlEsT0FDbkRJLDBCQUEwQkYsaUJBQWlCRyxVQUFVLElBQ3JEQyxnQ0FBZ0NDLElBQUFBLDRDQUFtQyxFQUFDSix1QkFBdUJGLFNBQzNGUixPQUFPVyx5QkFDUFYsU0FBU1ksK0JBQ1RFLGNBQWMsSUEzQkhuQixZQTJCbUJJLE1BQU1DO2dCQUUxQyxPQUFPYztZQUNUOzs7V0E5Qm1CbkIifQ==