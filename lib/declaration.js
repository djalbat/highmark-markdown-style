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
var nameNonTerminalNodeQuery = (0, _query.nodeQuery)("/*/name"), valuesNonTerminalNodeQuery = (0, _query.nodeQuery)("/*/values");
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
                var nameNonTerminalNode = nameNonTerminalNodeQuery(node), valuesNonTerminalNode = valuesNonTerminalNodeQuery(node), nameNonTerminalNodeContent = (0, _content.contentFromNodeAndTokens)(nameNonTerminalNode, tokens), valuesNonTerminalNodesContent = (0, _content.contentFromNodeAndTokens)(valuesNonTerminalNode, tokens), name = nameNonTerminalNodeContent, values = valuesNonTerminalNodesContent, declaration = new Declaration(name, values);
                return declaration;
            }
        }
    ]);
    return Declaration;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ09MT1VSIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IG5hbWVOb25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL25hbWVcIiksXG4gICAgICB2YWx1ZXNOb25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3ZhbHVlc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlcztcbiAgfVxuXG4gIGFzQ1NTKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUucmVwbGFjZSgvY29sb3VyL2csIENPTE9VUiksXG4gICAgICAgICAgY3NzID0gYCAgJHtuYW1lfTogJHt0aGlzLnZhbHVlc307YDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgbmFtZU5vblRlcm1pbmFsTm9kZSA9IG5hbWVOb25UZXJtaW5hbE5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgICB2YWx1ZXNOb25UZXJtaW5hbE5vZGUgPSB2YWx1ZXNOb25UZXJtaW5hbE5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgICBuYW1lTm9uVGVybWluYWxOb2RlQ29udGVudCA9IGNvbnRlbnRGcm9tTm9kZUFuZFRva2VucyhuYW1lTm9uVGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHZhbHVlc05vblRlcm1pbmFsTm9kZXNDb250ZW50ID0gY29udGVudEZyb21Ob2RlQW5kVG9rZW5zKHZhbHVlc05vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBuYW1lID0gbmFtZU5vblRlcm1pbmFsTm9kZUNvbnRlbnQsIC8vL1xuICAgICAgICAgIHZhbHVlcyA9IHZhbHVlc05vblRlcm1pbmFsTm9kZXNDb250ZW50LCAvLy9cbiAgICAgICAgICBkZWNsYXJhdGlvbiA9IG5ldyBEZWNsYXJhdGlvbihuYW1lLCB2YWx1ZXMpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVjbGFyYXRpb24iLCJuYW1lTm9uVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YWx1ZXNOb25UZXJtaW5hbE5vZGVRdWVyeSIsIm5hbWUiLCJ2YWx1ZXMiLCJnZXROYW1lIiwiZ2V0VmFsdWVzIiwiYXNDU1MiLCJyZXBsYWNlIiwiQ09MT1VSIiwiY3NzIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwibmFtZU5vblRlcm1pbmFsTm9kZSIsInZhbHVlc05vblRlcm1pbmFsTm9kZSIsIm5hbWVOb25UZXJtaW5hbE5vZGVDb250ZW50IiwiY29udGVudEZyb21Ob2RlQW5kVG9rZW5zIiwidmFsdWVzTm9uVGVybWluYWxOb2Rlc0NvbnRlbnQiLCJkZWNsYXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7eUJBUEU7cUJBQ0c7dUJBQ2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU1DLDJCQUEyQkMsSUFBQUEsZ0JBQVMsRUFBQyxZQUNyQ0MsNkJBQTZCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRTlCLElBQUEsQUFBTUYsNEJBQUQsQUFBTDthQUFNQSxZQUNQSSxJQUFJLEVBQUVDLE1BQU07Z0NBRExMO1FBRWpCLElBQUksQ0FBQ0ksSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBSEdMOztZQU1uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLE9BQU8sSUFBSSxDQUFDQSxJQUFJLENBQUNLLE9BQU8sQ0FBQyxXQUFXQyxpQkFBTSxHQUMxQ0MsTUFBTSxBQUFDLEtBQWEsT0FBVFAsTUFBSyxNQUFnQixPQUFaLElBQUksQ0FBQ0MsTUFBTSxFQUFDO2dCQUV0QyxPQUFPTTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUNuQyxJQUFNQyxzQkFBc0JkLHlCQUF5QlksT0FDL0NHLHdCQUF3QmIsMkJBQTJCVSxPQUNuREksNkJBQTZCQyxJQUFBQSxpQ0FBd0IsRUFBQ0gscUJBQXFCRCxTQUMzRUssZ0NBQWdDRCxJQUFBQSxpQ0FBd0IsRUFBQ0YsdUJBQXVCRixTQUNoRlYsT0FBT2EsNEJBQ1BaLFNBQVNjLCtCQUNUQyxjQUFjLElBNUJIcEIsWUE0Qm1CSSxNQUFNQztnQkFFMUMsT0FBT2U7WUFDVDs7O1dBL0JtQnBCIn0=