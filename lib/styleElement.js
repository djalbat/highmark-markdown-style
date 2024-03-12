"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createDOMElement: function() {
        return createDOMElement;
    },
    default: function() {
        return StyleElement;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
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
var renderStyle = _easywithstyle.default.renderStyle;
var StyleElement = /*#__PURE__*/ function() {
    function StyleElement(domElement) {
        _class_call_check(this, StyleElement);
        this.domElement = domElement;
    }
    _create_class(StyleElement, [
        {
            key: "getDOMElement",
            value: function getDOMElement() {
                return this.domElement;
            }
        },
        {
            key: "setDOMElement",
            value: function setDOMElement(domElement) {
                this.domElement = domElement;
            }
        },
        {
            key: "getCSS",
            value: function getCSS() {
                var innerHTML = this.domElement.innerHTML, css = innerHTML; //
                return css;
            }
        },
        {
            key: "setCSS",
            value: function setCSS(css) {
                var innerHTML = "\n".concat(css, "\n");
                this.domElement.innerHTML = innerHTML;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var domElement = createDOMElement(), styleElement = new StyleElement(domElement);
                return styleElement;
            }
        }
    ]);
    return StyleElement;
}();
function createDOMElement() {
    var style = _constants.EMPTY_STRING, domElement = renderStyle(style);
    return domElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZUVsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlIH0gPSB3aXRoU3R5bGU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgc2V0RE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldENTUygpIHtcbiAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MLFxuICAgICAgICAgIGNzcyA9IGlubmVySFRNTDsgIC8vXG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc2V0Q1NTKGNzcykge1xuICAgIGNvbnN0IGlubmVySFRNTCA9IGBcbiR7Y3NzfVxuYDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGNyZWF0ZURPTUVsZW1lbnQoKSxcbiAgICAgICAgICBzdHlsZUVsZW1lbnQgPSBuZXcgU3R5bGVFbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRE9NRWxlbWVudCgpIHtcbiAgY29uc3Qgc3R5bGUgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgIGRvbUVsZW1lbnQgPSByZW5kZXJTdHlsZShzdHlsZSk7XG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlRE9NRWxlbWVudCIsIlN0eWxlRWxlbWVudCIsInJlbmRlclN0eWxlIiwid2l0aFN0eWxlIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwiZ2V0Q1NTIiwiaW5uZXJIVE1MIiwiY3NzIiwic2V0Q1NTIiwiZnJvbU5vdGhpbmciLCJzdHlsZUVsZW1lbnQiLCJzdHlsZSIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBNENnQkEsZ0JBQWdCO2VBQWhCQTs7O2VBcENLQzs7O29FQU5DO3lCQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU0sQUFBRUMsY0FBZ0JDLHNCQUFTLENBQXpCRDtBQUVPLElBQUEsQUFBTUQsNkJBQUQsQUFBTDthQUFNQSxhQUNQRyxVQUFVO2dDQURISDtRQUVqQixJQUFJLENBQUNHLFVBQVUsR0FBR0E7O2tCQUZESDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjRixVQUFVO2dCQUN0QixJQUFJLENBQUNBLFVBQVUsR0FBR0E7WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWSxJQUFJLENBQUNKLFVBQVUsQ0FBQ0ksU0FBUyxFQUNyQ0MsTUFBTUQsV0FBWSxFQUFFO2dCQUUxQixPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9ELEdBQUc7Z0JBQ1IsSUFBTUQsWUFBWSxBQUFDLEtBQ2pCLE9BQUpDLEtBQUk7Z0JBR0YsSUFBSSxDQUFDTCxVQUFVLENBQUNJLFNBQVMsR0FBR0E7WUFDOUI7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTVAsYUFBYUosb0JBQ2JZLGVBQWUsSUE5QkpYLGFBOEJxQkc7Z0JBRXRDLE9BQU9RO1lBQ1Q7OztXQWpDbUJYOztBQW9DZCxTQUFTRDtJQUNkLElBQU1hLFFBQVFDLHVCQUFZLEVBQ3BCVixhQUFhRixZQUFZVztJQUUvQixPQUFPVDtBQUNUIn0=