"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Division;
    }
});
var _ruleSets = /*#__PURE__*/ _interop_require_default(require("./ruleSets"));
var _declarations = /*#__PURE__*/ _interop_require_default(require("./declarations"));
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
var Division = /*#__PURE__*/ function() {
    function Division(ruleSets, declarations, selectorsList) {
        _class_call_check(this, Division);
        this.ruleSets = ruleSets;
        this.declarations = declarations;
        this.selectorsList = selectorsList;
    }
    _create_class(Division, [
        {
            key: "getRuleSets",
            value: function getRuleSets() {
                return this.ruleSets;
            }
        },
        {
            key: "getDeclarations",
            value: function getDeclarations() {
                return this.declarations;
            }
        },
        {
            key: "getSelectorsList",
            value: function getSelectorsList() {
                return this.selectorsList;
            }
        },
        {
            key: "asCSS",
            value: function asCSS() {
                var outermost = true, ruleSetsCSS = this.ruleSets.asCSS(this.selectorsList, outermost), declarationsCSS = this.declarations.asCSS(this.selectorsList, outermost), css = declarationsCSS === _constants.EMPTY_STRING ? ruleSetsCSS : "".concat(declarationsCSS, "\n").concat(ruleSetsCSS);
                return css;
            }
        }
    ], [
        {
            key: "fromNodeTokensAndSelectorsList",
            value: function fromNodeTokensAndSelectorsList(node, tokens, selectorsList) {
                var ruleSets = _ruleSets.default.fromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), division = new Division(ruleSets, declarations, selectorsList);
                return division;
            }
        }
    ]);
    return Division;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXZpc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVTZXRzIGZyb20gXCIuL3J1bGVTZXRzXCI7XG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb24ge1xuICBjb25zdHJ1Y3RvcihydWxlU2V0cywgZGVjbGFyYXRpb25zLCBzZWxlY3RvcnNMaXN0KSB7XG4gICAgdGhpcy5ydWxlU2V0cyA9IHJ1bGVTZXRzO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAgIHRoaXMuc2VsZWN0b3JzTGlzdCA9IHNlbGVjdG9yc0xpc3Q7XG4gIH1cblxuICBnZXRSdWxlU2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlU2V0cztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRTZWxlY3RvcnNMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdG9yc0xpc3Q7XG4gIH1cblxuICBhc0NTUygpIHtcbiAgICBjb25zdCBvdXRlcm1vc3QgPSB0cnVlLFxuICAgICAgICAgIHJ1bGVTZXRzQ1NTID0gdGhpcy5ydWxlU2V0cy5hc0NTUyh0aGlzLnNlbGVjdG9yc0xpc3QsIG91dGVybW9zdCksXG4gICAgICAgICAgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5kZWNsYXJhdGlvbnMuYXNDU1ModGhpcy5zZWxlY3RvcnNMaXN0LCBvdXRlcm1vc3QpLFxuICAgICAgICAgIGNzcyA9IChkZWNsYXJhdGlvbnNDU1MgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICAgICAgcnVsZVNldHNDU1MgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgYCR7ZGVjbGFyYXRpb25zQ1NTfVxuJHtydWxlU2V0c0NTU31gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZVRva2Vuc0FuZFNlbGVjdG9yc0xpc3Qobm9kZSwgdG9rZW5zLCBzZWxlY3RvcnNMaXN0KSB7XG4gICAgY29uc3QgcnVsZVNldHMgPSBSdWxlU2V0cy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRpdmlzaW9uID0gbmV3IERpdmlzaW9uKHJ1bGVTZXRzLCBkZWNsYXJhdGlvbnMsIHNlbGVjdG9yc0xpc3QpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGl2aXNpb24iLCJydWxlU2V0cyIsImRlY2xhcmF0aW9ucyIsInNlbGVjdG9yc0xpc3QiLCJnZXRSdWxlU2V0cyIsImdldERlY2xhcmF0aW9ucyIsImdldFNlbGVjdG9yc0xpc3QiLCJhc0NTUyIsIm91dGVybW9zdCIsInJ1bGVTZXRzQ1NTIiwiZGVjbGFyYXRpb25zQ1NTIiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vZGVUb2tlbnNBbmRTZWxlY3RvcnNMaXN0Iiwibm9kZSIsInRva2VucyIsIlJ1bGVTZXRzIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJEZWNsYXJhdGlvbnMiLCJkaXZpc2lvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsrREFMQTttRUFDSTt5QkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEseUJBQUQsQUFBTDthQUFNQSxTQUNQQyxRQUFRLEVBQUVDLFlBQVksRUFBRUMsYUFBYTtnQ0FEOUJIO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztrQkFKSkg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFlBQVk7WUFDMUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGFBQWE7WUFDM0I7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWSxNQUNaQyxjQUFjLElBQUksQ0FBQ1IsUUFBUSxDQUFDTSxLQUFLLENBQUMsSUFBSSxDQUFDSixhQUFhLEVBQUVLLFlBQ3RERSxrQkFBa0IsSUFBSSxDQUFDUixZQUFZLENBQUNLLEtBQUssQ0FBQyxJQUFJLENBQUNKLGFBQWEsRUFBRUssWUFDOURHLE1BQU0sQUFBQ0Qsb0JBQW9CRSx1QkFBWSxHQUMvQkgsY0FDRSxBQUFDLEdBQ25CQSxPQURxQkMsaUJBQWdCLE1BQ3pCLE9BQVpEO2dCQUVFLE9BQU9FO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsK0JBQStCQyxJQUFJLEVBQUVDLE1BQU0sRUFBRVosYUFBYTtnQkFDL0QsSUFBTUYsV0FBV2UsaUJBQVEsQ0FBQ0MsaUJBQWlCLENBQUNILE1BQU1DLFNBQzVDYixlQUFlZ0IscUJBQVksQ0FBQ0QsaUJBQWlCLENBQUNILE1BQU1DLFNBQ3BESSxXQUFXLElBbENBbkIsU0FrQ2FDLFVBQVVDLGNBQWNDO2dCQUV0RCxPQUFPZ0I7WUFDVDs7O1dBckNtQm5CIn0=