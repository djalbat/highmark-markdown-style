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
            key: "getInnerHTML",
            value: function getInnerHTML() {
                return this.domElement.innerHTML;
            }
        },
        {
            key: "setInnerHTML",
            value: function setInnerHTML(innerHTML) {
                this.domElement.innerHTML = innerHTML;
            }
        },
        {
            key: "setCSS",
            value: function setCSS(css) {
                var innerHTML = "\n".concat(css, "\n");
                this.setInnerHTML(innerHTML);
            }
        },
        {
            key: "remove",
            value: function remove() {
                this.domElement.remove();
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
    var headDOMElement = document.querySelector(_constants.HEAD), styleDOMElement = document.createElement(_constants.STYLE);
    headDOMElement.appendChild(styleDOMElement);
    var domElement = styleDOMElement; ///
    return domElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZUVsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEhFQUQsIFNUWUxFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgc2V0RE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldElubmVySFRNTCgpIHsgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MOyB9XG5cbiAgc2V0SW5uZXJIVE1MKGlubmVySFRNTCkgeyB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MOyB9XG5cbiAgc2V0Q1NTKGNzcykge1xuICAgIGNvbnN0IGlubmVySFRNTCA9IGBcbiR7Y3NzfVxuYDtcblxuICAgIHRoaXMuc2V0SW5uZXJIVE1MKGlubmVySFRNTCk7XG4gIH1cblxuICByZW1vdmUoKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gY3JlYXRlRE9NRWxlbWVudCgpLFxuICAgICAgICAgIHN0eWxlRWxlbWVudCA9IG5ldyBTdHlsZUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gc3R5bGVFbGVtZW50O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVET01FbGVtZW50KCkge1xuICBjb25zdCBoZWFkRE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoSEVBRCksXG4gICAgICAgIHN0eWxlRE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoU1RZTEUpO1xuXG4gIGhlYWRET01FbGVtZW50LmFwcGVuZENoaWxkKHN0eWxlRE9NRWxlbWVudCk7XG5cbiAgY29uc3QgZG9tRWxlbWVudCA9IHN0eWxlRE9NRWxlbWVudDsgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlRE9NRWxlbWVudCIsIlN0eWxlRWxlbWVudCIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50Iiwic2V0RE9NRWxlbWVudCIsImdldElubmVySFRNTCIsImlubmVySFRNTCIsInNldElubmVySFRNTCIsInNldENTUyIsImNzcyIsInJlbW92ZSIsImZyb21Ob3RoaW5nIiwic3R5bGVFbGVtZW50IiwiaGVhZERPTUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJIRUFEIiwic3R5bGVET01FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIlNUWUxFIiwiYXBwZW5kQ2hpbGQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBdUNnQkEsZ0JBQWdCO2VBQWhCQTs7O2VBbkNLQzs7O3lCQUZPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViLElBQUEsQUFBTUEsNkJBQUQsQUFBTDthQUFNQSxhQUNQQyxVQUFVO2dDQURIRDtRQUVqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQUZERDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjRixVQUFVO2dCQUN0QixJQUFJLENBQUNBLFVBQVUsR0FBR0E7WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWtCLE9BQU8sSUFBSSxDQUFDSCxVQUFVLENBQUNJLFNBQVM7WUFBRTs7O1lBRXBEQyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUQsU0FBUztnQkFBSSxJQUFJLENBQUNKLFVBQVUsQ0FBQ0ksU0FBUyxHQUFHQTtZQUFXOzs7WUFFakVFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxHQUFHO2dCQUNSLElBQU1ILFlBQVksQUFBQyxLQUNqQixPQUFKRyxLQUFJO2dCQUdGLElBQUksQ0FBQ0YsWUFBWSxDQUFDRDtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBVyxJQUFJLENBQUNSLFVBQVUsQ0FBQ1EsTUFBTTtZQUFJOzs7O1lBRTlCQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNVCxhQUFhRixvQkFDYlksZUFBZSxJQTdCSlgsYUE2QnFCQztnQkFFdEMsT0FBT1U7WUFDVDs7O1dBaENtQlg7O0FBbUNkLFNBQVNEO0lBQ2QsSUFBTWEsaUJBQWlCQyxTQUFTQyxhQUFhLENBQUNDLGVBQUksR0FDNUNDLGtCQUFrQkgsU0FBU0ksYUFBYSxDQUFDQyxnQkFBSztJQUVwRE4sZUFBZU8sV0FBVyxDQUFDSDtJQUUzQixJQUFNZixhQUFhZSxpQkFBaUIsR0FBRztJQUV2QyxPQUFPZjtBQUNUIn0=