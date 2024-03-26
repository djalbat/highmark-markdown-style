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
    function Division(ruleSets, selectorsList) {
        _class_call_check(this, Division);
        this.ruleSets = ruleSets;
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
            key: "getSelectorsList",
            value: function getSelectorsList() {
                return this.selectorsList;
            }
        },
        {
            key: "asCSS",
            value: function asCSS() {
                var outermost = true, ruleSetsCSS = this.ruleSets.asCSS(this.selectorsList, outermost), css = ruleSetsCSS; ///
                return css;
            }
        }
    ], [
        {
            key: "fromNodeTokensDivisionNamesAndSelectorsList",
            value: function fromNodeTokensDivisionNamesAndSelectorsList(node, tokens, divisionNames, selectorsList) {
                var ruleSets = _ruleSets.default.fromNodeTokensAndDivisionNames(node, tokens, divisionNames), division = new Division(ruleSets, selectorsList);
                return division;
            }
        }
    ]);
    return Division;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXZpc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVTZXRzIGZyb20gXCIuL3J1bGVTZXRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uIHtcbiAgY29uc3RydWN0b3IocnVsZVNldHMsIHNlbGVjdG9yc0xpc3QpIHtcbiAgICB0aGlzLnJ1bGVTZXRzID0gcnVsZVNldHM7XG4gICAgdGhpcy5zZWxlY3RvcnNMaXN0ID0gc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIGdldFJ1bGVTZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTZXRzO1xuICB9XG5cbiAgZ2V0U2VsZWN0b3JzTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RvcnNMaXN0O1xuICB9XG5cbiAgYXNDU1MoKSB7XG4gICAgY29uc3Qgb3V0ZXJtb3N0ID0gdHJ1ZSxcbiAgICAgICAgICBydWxlU2V0c0NTUyA9IHRoaXMucnVsZVNldHMuYXNDU1ModGhpcy5zZWxlY3RvcnNMaXN0LCBvdXRlcm1vc3QpLFxuICAgICAgICAgIGNzcyA9IHJ1bGVTZXRzQ1NTOyAgLy8vXG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlVG9rZW5zRGl2aXNpb25OYW1lc0FuZFNlbGVjdG9yc0xpc3Qobm9kZSwgdG9rZW5zLCBkaXZpc2lvbk5hbWVzLCBzZWxlY3RvcnNMaXN0KSB7XG4gICAgY29uc3QgcnVsZVNldHMgPSBSdWxlU2V0cy5mcm9tTm9kZVRva2Vuc0FuZERpdmlzaW9uTmFtZXMobm9kZSwgdG9rZW5zLCBkaXZpc2lvbk5hbWVzKSxcbiAgICAgICAgICBkaXZpc2lvbiA9IG5ldyBEaXZpc2lvbihydWxlU2V0cywgc2VsZWN0b3JzTGlzdCk7XG5cbiAgICByZXR1cm4gZGl2aXNpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbiIsInJ1bGVTZXRzIiwic2VsZWN0b3JzTGlzdCIsImdldFJ1bGVTZXRzIiwiZ2V0U2VsZWN0b3JzTGlzdCIsImFzQ1NTIiwib3V0ZXJtb3N0IiwicnVsZVNldHNDU1MiLCJjc3MiLCJmcm9tTm9kZVRva2Vuc0RpdmlzaW9uTmFtZXNBbmRTZWxlY3RvcnNMaXN0Iiwibm9kZSIsInRva2VucyIsImRpdmlzaW9uTmFtZXMiLCJSdWxlU2V0cyIsImZyb21Ob2RlVG9rZW5zQW5kRGl2aXNpb25OYW1lcyIsImRpdmlzaW9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OytEQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU4sSUFBQSxBQUFNQSx5QkFBRCxBQUFMO2FBQU1BLFNBQ1BDLFFBQVEsRUFBRUMsYUFBYTtnQ0FEaEJGO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2tCQUhKRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsYUFBYTtZQUMzQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFZLE1BQ1pDLGNBQWMsSUFBSSxDQUFDTixRQUFRLENBQUNJLEtBQUssQ0FBQyxJQUFJLENBQUNILGFBQWEsRUFBRUksWUFDdERFLE1BQU1ELGFBQWMsR0FBRztnQkFFN0IsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSw0Q0FBNENDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxhQUFhLEVBQUVWLGFBQWE7Z0JBQzNGLElBQU1ELFdBQVdZLGlCQUFRLENBQUNDLDhCQUE4QixDQUFDSixNQUFNQyxRQUFRQyxnQkFDakVHLFdBQVcsSUF4QkFmLFNBd0JhQyxVQUFVQztnQkFFeEMsT0FBT2E7WUFDVDs7O1dBM0JtQmYifQ==