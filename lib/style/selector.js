"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Selector;
    }
});
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
var Selector = /*#__PURE__*/ function() {
    function Selector(content) {
        _class_call_check(this, Selector);
        this.content = content;
    }
    _create_class(Selector, [
        {
            key: "getContent",
            value: function getContent() {
                return this.content;
            }
        },
        {
            key: "combine",
            value: function combine(selector) {
                var outerSelector = this, innerSelector = selector, outerSelectorContent = outerSelector.getContent(), innerSelectorContent = innerSelector.getContent(), content = "".concat(outerSelectorContent, " ").concat(innerSelectorContent);
                selector = Selector.fromContent(content);
                return selector;
            }
        },
        {
            key: "asCSS",
            value: function asCSS() {
                var css = this.content; ///
                return css;
            }
        }
    ], [
        {
            key: "fromContent",
            value: function fromContent(content) {
                var selector = new Selector(content);
                return selector;
            }
        },
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var content = (0, _content.contentFromNodeAndTokens)(node, tokens), selector = new Selector(content);
                return selector;
            }
        }
    ]);
    return Selector;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29udGVudEZyb21Ob2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdG9yIHtcbiAgY29uc3RydWN0b3IoY29udGVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBjb21iaW5lKHNlbGVjdG9yKSB7XG4gICAgY29uc3Qgb3V0ZXJTZWxlY3RvciA9IHRoaXMsIC8vL1xuICAgICAgICAgIGlubmVyU2VsZWN0b3IgPSBzZWxlY3RvciwgLy8vXG4gICAgICAgICAgb3V0ZXJTZWxlY3RvckNvbnRlbnQgPSBvdXRlclNlbGVjdG9yLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBpbm5lclNlbGVjdG9yQ29udGVudCA9IGlubmVyU2VsZWN0b3IuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBgJHtvdXRlclNlbGVjdG9yQ29udGVudH0gJHtpbm5lclNlbGVjdG9yQ29udGVudH1gO1xuXG4gICAgc2VsZWN0b3IgPSBTZWxlY3Rvci5mcm9tQ29udGVudChjb250ZW50KTtcblxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxuXG4gIGFzQ1NTKCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuY29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IG5ldyBTZWxlY3Rvcihjb250ZW50KTtcblxuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBjb250ZW50ID0gY29udGVudEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgc2VsZWN0b3IgPSBuZXcgU2VsZWN0b3IoY29udGVudCk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTZWxlY3RvciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29tYmluZSIsInNlbGVjdG9yIiwib3V0ZXJTZWxlY3RvciIsImlubmVyU2VsZWN0b3IiLCJvdXRlclNlbGVjdG9yQ29udGVudCIsImlubmVyU2VsZWN0b3JDb250ZW50IiwiZnJvbUNvbnRlbnQiLCJhc0NTUyIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsImNvbnRlbnRGcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7dUJBRm9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFBLEFBQU1BLHlCQUFELEFBQUw7YUFBTUEsU0FDUEMsT0FBTztnQ0FEQUQ7UUFFakIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBOztrQkFGRUQ7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELE9BQU87WUFDckI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsUUFBUTtnQkFDZCxJQUFNQyxnQkFBZ0IsSUFBSSxFQUNwQkMsZ0JBQWdCRixVQUNoQkcsdUJBQXVCRixjQUFjSCxVQUFVLElBQy9DTSx1QkFBdUJGLGNBQWNKLFVBQVUsSUFDL0NELFVBQVUsQUFBQyxHQUEwQk8sT0FBeEJELHNCQUFxQixLQUF3QixPQUFyQkM7Z0JBRTNDSixXQUFXSixBQWhCTUEsU0FnQkdTLFdBQVcsQ0FBQ1I7Z0JBRWhDLE9BQU9HO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsTUFBTSxJQUFJLENBQUNWLE9BQU8sRUFBRSxHQUFHO2dCQUU3QixPQUFPVTtZQUNUOzs7O1lBRU9GLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlSLE9BQU87Z0JBQ3hCLElBQU1HLFdBQVcsSUE1QkFKLFNBNEJhQztnQkFFOUIsT0FBT0c7WUFDVDs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUNuQyxJQUFNYixVQUFVYyxJQUFBQSxpQ0FBd0IsRUFBQ0YsTUFBTUMsU0FDekNWLFdBQVcsSUFuQ0FKLFNBbUNhQztnQkFFOUIsT0FBT0c7WUFDVDs7O1dBdENtQkoifQ==