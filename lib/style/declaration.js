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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgY29udGVudEZyb21Ob2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IG5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL0BuYW1lXCIpLFxuICAgICAgdmFsdWVzTm9uVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi92YWx1ZXNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgdmFsdWVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZXM7XG4gIH1cblxuICBhc0NTUygpIHtcbiAgICBjb25zdCBjc3MgPSBgICAke3RoaXMubmFtZX06ICR7dGhpcy52YWx1ZXN9O2A7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IG5hbWVUZXJtaW5hbE5vZGUgPSBuYW1lVGVybWluYWxOb2RlUXVlcnkobm9kZSksXG4gICAgICAgICAgdmFsdWVzTm9uVGVybWluYWxOb2RlID0gdmFsdWVzTm9uVGVybWluYWxOb2RlUXVlcnkobm9kZSksXG4gICAgICAgICAgbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBuYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB2YWx1ZXNOb25UZXJtaW5hbE5vZGVzQ29udGVudCA9IGNvbnRlbnRGcm9tTm9kZUFuZFRva2Vucyh2YWx1ZXNOb25UZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgbmFtZSA9IG5hbWVUZXJtaW5hbE5vZGVDb250ZW50LCAvLy9cbiAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXNOb25UZXJtaW5hbE5vZGVzQ29udGVudCwgLy8vXG4gICAgICAgICAgZGVjbGFyYXRpb24gPSBuZXcgRGVjbGFyYXRpb24obmFtZSwgdmFsdWVzKTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRlY2xhcmF0aW9uIiwibmFtZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFsdWVzTm9uVGVybWluYWxOb2RlUXVlcnkiLCJuYW1lIiwidmFsdWVzIiwiZ2V0TmFtZSIsImdldFZhbHVlcyIsImFzQ1NTIiwiY3NzIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwibmFtZVRlcm1pbmFsTm9kZSIsInZhbHVlc05vblRlcm1pbmFsTm9kZSIsIm5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsInZhbHVlc05vblRlcm1pbmFsTm9kZXNDb250ZW50IiwiY29udGVudEZyb21Ob2RlQW5kVG9rZW5zIiwiZGVjbGFyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3FCQU5LO3VCQUNlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFNQyx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUMsYUFDbENDLDZCQUE2QkQsSUFBQUEsZ0JBQVMsRUFBQztBQUU5QixJQUFBLEFBQU1GLDRCQUFELEFBQUw7YUFBTUEsWUFDUEksSUFBSSxFQUFFQyxNQUFNO2dDQURMTDtRQUVqQixJQUFJLENBQUNJLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2tCQUhHTDs7WUFNbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxNQUFNLEFBQUMsS0FBa0IsT0FBZCxJQUFJLENBQUNMLElBQUksRUFBQyxNQUFnQixPQUFaLElBQUksQ0FBQ0MsTUFBTSxFQUFDO2dCQUUzQyxPQUFPSTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUNuQyxJQUFNQyxtQkFBbUJaLHNCQUFzQlUsT0FDekNHLHdCQUF3QlgsMkJBQTJCUSxPQUNuREksMEJBQTBCRixpQkFBaUJHLFVBQVUsSUFDckRDLGdDQUFnQ0MsSUFBQUEsaUNBQXdCLEVBQUNKLHVCQUF1QkYsU0FDaEZSLE9BQU9XLHlCQUNQVixTQUFTWSwrQkFDVEUsY0FBYyxJQTNCSG5CLFlBMkJtQkksTUFBTUM7Z0JBRTFDLE9BQU9jO1lBQ1Q7OztXQTlCbUJuQiJ9