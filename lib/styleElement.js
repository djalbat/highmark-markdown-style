"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
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
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                if (Class === undefined) {
                    Class = StyleElement; ///
                }
                var domElement = createDOMElement(), styleElement = new Class(domElement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZUVsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEhFQUQsIFNUWUxFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgc2V0RE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldElubmVySFRNTCgpIHsgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MOyB9XG5cbiAgc2V0SW5uZXJIVE1MKGlubmVySFRNTCkgeyB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MOyB9XG5cbiAgc2V0Q1NTKGNzcykge1xuICAgIGNvbnN0IGlubmVySFRNTCA9IGBcbiR7Y3NzfVxuYDtcblxuICAgIHRoaXMuc2V0SW5uZXJIVE1MKGlubmVySFRNTCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgQ2xhc3MgPSBTdHlsZUVsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBjcmVhdGVET01FbGVtZW50KCksXG4gICAgICAgICAgc3R5bGVFbGVtZW50ID0gbmV3IENsYXNzKGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVET01FbGVtZW50KCkge1xuICBjb25zdCBoZWFkRE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoSEVBRCksXG4gICAgICAgIHN0eWxlRE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoU1RZTEUpO1xuXG4gIGhlYWRET01FbGVtZW50LmFwcGVuZENoaWxkKHN0eWxlRE9NRWxlbWVudCk7XG5cbiAgY29uc3QgZG9tRWxlbWVudCA9IHN0eWxlRE9NRWxlbWVudDsgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiU3R5bGVFbGVtZW50IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJzZXRET01FbGVtZW50IiwiZ2V0SW5uZXJIVE1MIiwiaW5uZXJIVE1MIiwic2V0SW5uZXJIVE1MIiwic2V0Q1NTIiwiY3NzIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsInVuZGVmaW5lZCIsImNyZWF0ZURPTUVsZW1lbnQiLCJzdHlsZUVsZW1lbnQiLCJoZWFkRE9NRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkhFQUQiLCJzdHlsZURPTUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiU1RZTEUiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7eUJBRk87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWIsSUFBQSxBQUFNQSw2QkFBRCxBQUFMO2FBQU1BLGFBQ1BDLFVBQVU7Z0NBREhEO1FBRWpCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBRkREOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxVQUFVO1lBQ3hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNGLFVBQVU7Z0JBQ3RCLElBQUksQ0FBQ0EsVUFBVSxHQUFHQTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBa0IsT0FBTyxJQUFJLENBQUNILFVBQVUsQ0FBQ0ksU0FBUztZQUFFOzs7WUFFcERDLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhRCxTQUFTO2dCQUFJLElBQUksQ0FBQ0osVUFBVSxDQUFDSSxTQUFTLEdBQUdBO1lBQVc7OztZQUVqRUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLEdBQUc7Z0JBQ1IsSUFBTUgsWUFBWSxBQUFDLEtBQ2pCLE9BQUpHLEtBQUk7Z0JBR0YsSUFBSSxDQUFDRixZQUFZLENBQUNEO1lBQ3BCOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLEtBQUs7Z0JBQ3RCLElBQUlBLFVBQVVDLFdBQVc7b0JBQ3ZCRCxRQTNCZVYsY0EyQk8sR0FBRztnQkFDM0I7Z0JBRUEsSUFBTUMsYUFBYVcsb0JBQ2JDLGVBQWUsSUFBSUgsTUFBTVQ7Z0JBRS9CLE9BQU9ZO1lBQ1Q7OztXQWxDbUJiOztBQXFDckIsU0FBU1k7SUFDUCxJQUFNRSxpQkFBaUJDLFNBQVNDLGFBQWEsQ0FBQ0MsZUFBSSxHQUM1Q0Msa0JBQWtCSCxTQUFTSSxhQUFhLENBQUNDLGdCQUFLO0lBRXBETixlQUFlTyxXQUFXLENBQUNIO0lBRTNCLElBQU1qQixhQUFhaUIsaUJBQWlCLEdBQUc7SUFFdkMsT0FBT2pCO0FBQ1QifQ==