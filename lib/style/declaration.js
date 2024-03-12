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
var _constants = require("../constants");
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
            value: function asCSS(indent) {
                indent = indent + _constants.TWO_SPACES;
                var css = "".concat(indent).concat(this.name, ": ").concat(this.values, ";\n");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgVFdPX1NQQUNFUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IG5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL0BuYW1lXCIpLFxuICAgICAgdmFsdWVzTm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi92YWx1ZXNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgdmFsdWVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZXM7XG4gIH1cblxuICBhc0NTUyhpbmRlbnQpIHtcbiAgICBpbmRlbnQgPSBpbmRlbnQgKyBUV09fU1BBQ0VTO1xuXG4gICAgY29uc3QgY3NzID0gYCR7aW5kZW50fSR7dGhpcy5uYW1lfTogJHt0aGlzLnZhbHVlc307XFxuYDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgbmFtZVRlcm1pbmFsTm9kZSA9IG5hbWVUZXJtaW5hbE5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgICB2YWx1ZXNOb25UZXJtaW5hbE5vZGUgPSB2YWx1ZXNOb25UZXJtaW5hbE5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgICBuYW1lVGVybWluYWxOb2RlQ29udGVudCA9IG5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHZhbHVlc05vblRlcm1pbmFsTm9kZXNDb250ZW50ID0gY29udGVudEZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnModmFsdWVzTm9uVGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lVGVybWluYWxOb2RlQ29udGVudCwgLy8vXG4gICAgICAgICAgdmFsdWVzID0gdmFsdWVzTm9uVGVybWluYWxOb2Rlc0NvbnRlbnQsIC8vL1xuICAgICAgICAgIGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKG5hbWUsIHZhbHVlcyk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWNsYXJhdGlvbiIsIm5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhbHVlc05vblRlcm1pbmFsTm9kZVF1ZXJ5IiwibmFtZSIsInZhbHVlcyIsImdldE5hbWUiLCJnZXRWYWx1ZXMiLCJhc0NTUyIsImluZGVudCIsIlRXT19TUEFDRVMiLCJjc3MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJuYW1lVGVybWluYWxOb2RlIiwidmFsdWVzTm9uVGVybWluYWxOb2RlIiwibmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwidmFsdWVzTm9uVGVybWluYWxOb2Rlc0NvbnRlbnQiLCJjb250ZW50RnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyIsImRlY2xhcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OztxQkFQSzt5QkFDQzt1QkFDeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELElBQU1DLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQyxhQUNsQ0MsNkJBQTZCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRTlCLElBQUEsQUFBTUYsNEJBQUQsQUFBTDthQUFNQSxZQUNQSSxJQUFJLEVBQUVDLE1BQU07Z0NBRExMO1FBRWpCLElBQUksQ0FBQ0ksSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBSEdMOztZQU1uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE1BQU07Z0JBQ1ZBLFNBQVNBLFNBQVNDLHFCQUFVO2dCQUU1QixJQUFNQyxNQUFNLEFBQUMsR0FBVyxPQUFURixRQUF1QixPQUFkLElBQUksQ0FBQ0wsSUFBSSxFQUFDLE1BQWdCLE9BQVosSUFBSSxDQUFDQyxNQUFNLEVBQUM7Z0JBRWxELE9BQU9NO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1DLG1CQUFtQmQsc0JBQXNCWSxPQUN6Q0csd0JBQXdCYiwyQkFBMkJVLE9BQ25ESSwwQkFBMEJGLGlCQUFpQkcsVUFBVSxJQUNyREMsZ0NBQWdDQyxJQUFBQSw0Q0FBbUMsRUFBQ0osdUJBQXVCRixTQUMzRlYsT0FBT2EseUJBQ1BaLFNBQVNjLCtCQUNURSxjQUFjLElBN0JIckIsWUE2Qm1CSSxNQUFNQztnQkFFMUMsT0FBT2dCO1lBQ1Q7OztXQWhDbUJyQiJ9