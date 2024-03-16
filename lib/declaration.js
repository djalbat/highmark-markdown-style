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
var _query = require("./utilities/query");
var _content = require("./utilities/content");
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
                var css = "  ".concat(this.name, ": ").concat(this.values, ";");
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var nameTerminalNode = nameTerminalNodeQuery(node), valuesNonTerminalNode = valuesNonTerminalNodeQuery(node), nameTerminalNodeContent = nameTerminalNode.getContent(), valuesNonTerminalNodesContent = (0, _content.contentFromNodeAndTokens)(valuesNonTerminalNode, tokens), name = nameTerminalNodeContent, values = valuesNonTerminalNodesContent, declaration = new Declaration(name, values);
                return declaration;
            }
        }
    ]);
    return Declaration;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jb25zdCBuYW1lVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9AbmFtZVwiKSxcbiAgICAgIHZhbHVlc05vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovdmFsdWVzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHZhbHVlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzO1xuICB9XG5cbiAgYXNDU1MoKSB7XG4gICAgY29uc3QgY3NzID0gYCAgJHt0aGlzLm5hbWV9OiAke3RoaXMudmFsdWVzfTtgO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBuYW1lVGVybWluYWxOb2RlID0gbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpLFxuICAgICAgICAgIHZhbHVlc05vblRlcm1pbmFsTm9kZSA9IHZhbHVlc05vblRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpLFxuICAgICAgICAgIG5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gbmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgdmFsdWVzTm9uVGVybWluYWxOb2Rlc0NvbnRlbnQgPSBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnModmFsdWVzTm9uVGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lVGVybWluYWxOb2RlQ29udGVudCwgLy8vXG4gICAgICAgICAgdmFsdWVzID0gdmFsdWVzTm9uVGVybWluYWxOb2Rlc0NvbnRlbnQsIC8vL1xuICAgICAgICAgIGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKG5hbWUsIHZhbHVlcyk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWNsYXJhdGlvbiIsIm5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhbHVlc05vblRlcm1pbmFsTm9kZVF1ZXJ5IiwibmFtZSIsInZhbHVlcyIsImdldE5hbWUiLCJnZXRWYWx1ZXMiLCJhc0NTUyIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsIm5hbWVUZXJtaW5hbE5vZGUiLCJ2YWx1ZXNOb25UZXJtaW5hbE5vZGUiLCJuYW1lVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJ2YWx1ZXNOb25UZXJtaW5hbE5vZGVzQ29udGVudCIsImNvbnRlbnRGcm9tTm9kZUFuZFRva2VucyIsImRlY2xhcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztxQkFOSzt1QkFDZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBTUMsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLGFBQ2xDQyw2QkFBNkJELElBQUFBLGdCQUFTLEVBQUM7QUFFOUIsSUFBQSxBQUFNRiw0QkFBRCxBQUFMO2FBQU1BLFlBQ1BJLElBQUksRUFBRUMsTUFBTTtnQ0FETEw7UUFFakIsSUFBSSxDQUFDSSxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFIR0w7O1lBTW5CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsTUFBTSxBQUFDLEtBQWtCLE9BQWQsSUFBSSxDQUFDTCxJQUFJLEVBQUMsTUFBZ0IsT0FBWixJQUFJLENBQUNDLE1BQU0sRUFBQztnQkFFM0MsT0FBT0k7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBTUMsbUJBQW1CWixzQkFBc0JVLE9BQ3pDRyx3QkFBd0JYLDJCQUEyQlEsT0FDbkRJLDBCQUEwQkYsaUJBQWlCRyxVQUFVLElBQ3JEQyxnQ0FBZ0NDLElBQUFBLGlDQUF3QixFQUFDSix1QkFBdUJGLFNBQ2hGUixPQUFPVyx5QkFDUFYsU0FBU1ksK0JBQ1RFLGNBQWMsSUEzQkhuQixZQTJCbUJJLE1BQU1DO2dCQUUxQyxPQUFPYztZQUNUOzs7V0E5Qm1CbkIifQ==