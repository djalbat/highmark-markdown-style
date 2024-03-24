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
var _constants = require("./constants");
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
                var name = this.name.replace(/colour/g, _constants.COLOUR), css = "  ".concat(name, ": ").concat(this.values, ";");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ09MT1VSIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IG5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL0BuYW1lXCIpLFxuICAgICAgdmFsdWVzTm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi92YWx1ZXNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgdmFsdWVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZXM7XG4gIH1cblxuICBhc0NTUygpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLnJlcGxhY2UoL2NvbG91ci9nLCBDT0xPVVIpLFxuICAgICAgICAgIGNzcyA9IGAgICR7bmFtZX06ICR7dGhpcy52YWx1ZXN9O2A7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IG5hbWVUZXJtaW5hbE5vZGUgPSBuYW1lVGVybWluYWxOb2RlUXVlcnkobm9kZSksXG4gICAgICAgICAgdmFsdWVzTm9uVGVybWluYWxOb2RlID0gdmFsdWVzTm9uVGVybWluYWxOb2RlUXVlcnkobm9kZSksXG4gICAgICAgICAgbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBuYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB2YWx1ZXNOb25UZXJtaW5hbE5vZGVzQ29udGVudCA9IGNvbnRlbnRGcm9tTm9kZUFuZFRva2Vucyh2YWx1ZXNOb25UZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgbmFtZSA9IG5hbWVUZXJtaW5hbE5vZGVDb250ZW50LCAvLy9cbiAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXNOb25UZXJtaW5hbE5vZGVzQ29udGVudCwgLy8vXG4gICAgICAgICAgZGVjbGFyYXRpb24gPSBuZXcgRGVjbGFyYXRpb24obmFtZSwgdmFsdWVzKTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRlY2xhcmF0aW9uIiwibmFtZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFsdWVzTm9uVGVybWluYWxOb2RlUXVlcnkiLCJuYW1lIiwidmFsdWVzIiwiZ2V0TmFtZSIsImdldFZhbHVlcyIsImFzQ1NTIiwicmVwbGFjZSIsIkNPTE9VUiIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsIm5hbWVUZXJtaW5hbE5vZGUiLCJ2YWx1ZXNOb25UZXJtaW5hbE5vZGUiLCJuYW1lVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJ2YWx1ZXNOb25UZXJtaW5hbE5vZGVzQ29udGVudCIsImNvbnRlbnRGcm9tTm9kZUFuZFRva2VucyIsImRlY2xhcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozt5QkFQRTtxQkFDRzt1QkFDZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBTUMsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLGFBQ2xDQyw2QkFBNkJELElBQUFBLGdCQUFTLEVBQUM7QUFFOUIsSUFBQSxBQUFNRiw0QkFBRCxBQUFMO2FBQU1BLFlBQ1BJLElBQUksRUFBRUMsTUFBTTtnQ0FETEw7UUFFakIsSUFBSSxDQUFDSSxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFIR0w7O1lBTW5CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosT0FBTyxJQUFJLENBQUNBLElBQUksQ0FBQ0ssT0FBTyxDQUFDLFdBQVdDLGlCQUFNLEdBQzFDQyxNQUFNLEFBQUMsS0FBYSxPQUFUUCxNQUFLLE1BQWdCLE9BQVosSUFBSSxDQUFDQyxNQUFNLEVBQUM7Z0JBRXRDLE9BQU9NO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1DLG1CQUFtQmQsc0JBQXNCWSxPQUN6Q0csd0JBQXdCYiwyQkFBMkJVLE9BQ25ESSwwQkFBMEJGLGlCQUFpQkcsVUFBVSxJQUNyREMsZ0NBQWdDQyxJQUFBQSxpQ0FBd0IsRUFBQ0osdUJBQXVCRixTQUNoRlYsT0FBT2EseUJBQ1BaLFNBQVNjLCtCQUNURSxjQUFjLElBNUJIckIsWUE0Qm1CSSxNQUFNQztnQkFFMUMsT0FBT2dCO1lBQ1Q7OztXQS9CbUJyQiJ9