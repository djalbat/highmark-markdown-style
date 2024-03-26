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
            key: "fromNodeTokensDivisionNameAndSelectorsList",
            value: function fromNodeTokensDivisionNameAndSelectorsList(node, tokens, divisionName, selectorsList) {
                var ruleSets = _ruleSets.default.fromNodeTokensAndDivisionName(node, tokens, divisionName), division = new Division(ruleSets, selectorsList);
                return division;
            }
        }
    ]);
    return Division;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXZpc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVTZXRzIGZyb20gXCIuL3J1bGVTZXRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uIHtcbiAgY29uc3RydWN0b3IocnVsZVNldHMsIHNlbGVjdG9yc0xpc3QpIHtcbiAgICB0aGlzLnJ1bGVTZXRzID0gcnVsZVNldHM7XG4gICAgdGhpcy5zZWxlY3RvcnNMaXN0ID0gc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIGdldFJ1bGVTZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTZXRzO1xuICB9XG5cbiAgZ2V0U2VsZWN0b3JzTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RvcnNMaXN0O1xuICB9XG5cbiAgYXNDU1MoKSB7XG4gICAgY29uc3Qgb3V0ZXJtb3N0ID0gdHJ1ZSxcbiAgICAgICAgICBydWxlU2V0c0NTUyA9IHRoaXMucnVsZVNldHMuYXNDU1ModGhpcy5zZWxlY3RvcnNMaXN0LCBvdXRlcm1vc3QpLFxuICAgICAgICAgIGNzcyA9IHJ1bGVTZXRzQ1NTOyAgLy8vXG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlVG9rZW5zRGl2aXNpb25OYW1lQW5kU2VsZWN0b3JzTGlzdChub2RlLCB0b2tlbnMsIGRpdmlzaW9uTmFtZSwgc2VsZWN0b3JzTGlzdCkge1xuICAgIGNvbnN0IHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVUb2tlbnNBbmREaXZpc2lvbk5hbWUobm9kZSwgdG9rZW5zLCBkaXZpc2lvbk5hbWUpLFxuICAgICAgICAgIGRpdmlzaW9uID0gbmV3IERpdmlzaW9uKHJ1bGVTZXRzLCBzZWxlY3RvcnNMaXN0KTtcblxuICAgIHJldHVybiBkaXZpc2lvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uIiwicnVsZVNldHMiLCJzZWxlY3RvcnNMaXN0IiwiZ2V0UnVsZVNldHMiLCJnZXRTZWxlY3RvcnNMaXN0IiwiYXNDU1MiLCJvdXRlcm1vc3QiLCJydWxlU2V0c0NTUyIsImNzcyIsImZyb21Ob2RlVG9rZW5zRGl2aXNpb25OYW1lQW5kU2VsZWN0b3JzTGlzdCIsIm5vZGUiLCJ0b2tlbnMiLCJkaXZpc2lvbk5hbWUiLCJSdWxlU2V0cyIsImZyb21Ob2RlVG9rZW5zQW5kRGl2aXNpb25OYW1lIiwiZGl2aXNpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7K0RBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTixJQUFBLEFBQU1BLHlCQUFELEFBQUw7YUFBTUEsU0FDUEMsUUFBUSxFQUFFQyxhQUFhO2dDQURoQkY7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7a0JBSEpGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixhQUFhO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksTUFDWkMsY0FBYyxJQUFJLENBQUNOLFFBQVEsQ0FBQ0ksS0FBSyxDQUFDLElBQUksQ0FBQ0gsYUFBYSxFQUFFSSxZQUN0REUsTUFBTUQsYUFBYyxHQUFHO2dCQUU3QixPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0MsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFlBQVksRUFBRVYsYUFBYTtnQkFDekYsSUFBTUQsV0FBV1ksaUJBQVEsQ0FBQ0MsNkJBQTZCLENBQUNKLE1BQU1DLFFBQVFDLGVBQ2hFRyxXQUFXLElBeEJBZixTQXdCYUMsVUFBVUM7Z0JBRXhDLE9BQU9hO1lBQ1Q7OztXQTNCbUJmIn0=