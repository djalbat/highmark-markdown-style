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
var _occamquery = require("occam-query");
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
var propertyNameQuery = _occamquery.Query.fromExpression("/*/propertyName"), propertyValuesQuery = _occamquery.Query.fromExpression("/*/propertyValues");
var Declaration = /*#__PURE__*/ function() {
    function Declaration(propertyValues, propertyName) {
        _class_call_check(this, Declaration);
        this.propertyValues = propertyValues;
        this.propertyName = propertyName;
    }
    _create_class(Declaration, [
        {
            key: "getPropertyValues",
            value: function getPropertyValues() {
                return this.propertyValues;
            }
        },
        {
            key: "getPropertyName",
            value: function getPropertyName() {
                return this.propertyName;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(indent) {
                indent = indent + _constants.TWO_SPACES;
                var css = "".concat(indent).concat(this.propertyName, ": ").concat(this.propertyValues, ";\n");
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var propertyValuesContent = (0, _content.contentFromQueryNodeAndTokens)(propertyValuesQuery, node, tokens), propertyNameContent = (0, _content.contentFromQueryNodeAndTokens)(propertyNameQuery, node, tokens), propertyValues = propertyValuesContent, propertyName = propertyNameContent, declaration = new Declaration(propertyValues, propertyName);
                return declaration;
            }
        }
    ]);
    return Declaration;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IHsgVFdPX1NQQUNFUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IHByb3BlcnR5TmFtZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9wcm9wZXJ0eU5hbWVcIiksXG4gICAgICBwcm9wZXJ0eVZhbHVlc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9wcm9wZXJ0eVZhbHVlc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0eVZhbHVlcywgcHJvcGVydHlOYW1lKSB7XG4gICAgdGhpcy5wcm9wZXJ0eVZhbHVlcyA9IHByb3BlcnR5VmFsdWVzO1xuICAgIHRoaXMucHJvcGVydHlOYW1lID0gcHJvcGVydHlOYW1lO1xuICB9XG5cbiAgZ2V0UHJvcGVydHlWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHlWYWx1ZXM7XG4gIH1cblxuICBnZXRQcm9wZXJ0eU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHlOYW1lO1xuICB9XG5cbiAgYXNDU1MoaW5kZW50KSB7XG4gICAgaW5kZW50ID0gaW5kZW50ICsgVFdPX1NQQUNFUztcblxuICAgIGNvbnN0IGNzcyA9IGAke2luZGVudH0ke3RoaXMucHJvcGVydHlOYW1lfTogJHt0aGlzLnByb3BlcnR5VmFsdWVzfTtcXG5gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBwcm9wZXJ0eVZhbHVlc0NvbnRlbnQgPSBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2Vucyhwcm9wZXJ0eVZhbHVlc1F1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHByb3BlcnR5TmFtZUNvbnRlbnQgPSBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2Vucyhwcm9wZXJ0eU5hbWVRdWVyeSwgbm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwcm9wZXJ0eVZhbHVlcyA9IHByb3BlcnR5VmFsdWVzQ29udGVudCwgLy8vXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOYW1lQ29udGVudCwgLy8vXG4gICAgICAgICAgZGVjbGFyYXRpb24gPSBuZXcgRGVjbGFyYXRpb24ocHJvcGVydHlWYWx1ZXMsIHByb3BlcnR5TmFtZSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWNsYXJhdGlvbiIsInByb3BlcnR5TmFtZVF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsInByb3BlcnR5VmFsdWVzUXVlcnkiLCJwcm9wZXJ0eVZhbHVlcyIsInByb3BlcnR5TmFtZSIsImdldFByb3BlcnR5VmFsdWVzIiwiZ2V0UHJvcGVydHlOYW1lIiwiYXNDU1MiLCJpbmRlbnQiLCJUV09fU1BBQ0VTIiwiY3NzIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwicHJvcGVydHlWYWx1ZXNDb250ZW50IiwiY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMiLCJwcm9wZXJ0eU5hbWVDb250ZW50IiwiZGVjbGFyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7OzBCQVJDO3lCQUVLO3VCQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBTUMsb0JBQW9CQyxpQkFBSyxDQUFDQyxjQUFjLENBQUMsb0JBQ3pDQyxzQkFBc0JGLGlCQUFLLENBQUNDLGNBQWMsQ0FBQztBQUVsQyxJQUFBLEFBQU1ILDRCQUFELEFBQUw7YUFBTUEsWUFDUEssY0FBYyxFQUFFQyxZQUFZO2dDQURyQk47UUFFakIsSUFBSSxDQUFDSyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7a0JBSEhOOztZQU1uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixjQUFjO1lBQzVCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE1BQU07Z0JBQ1ZBLFNBQVNBLFNBQVNDLHFCQUFVO2dCQUU1QixJQUFNQyxNQUFNLEFBQUMsR0FBVyxPQUFURixRQUErQixPQUF0QixJQUFJLENBQUNKLFlBQVksRUFBQyxNQUF3QixPQUFwQixJQUFJLENBQUNELGNBQWMsRUFBQztnQkFFbEUsT0FBT087WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBTUMsd0JBQXdCQyxJQUFBQSxzQ0FBNkIsRUFBQ2IscUJBQXFCVSxNQUFNQyxTQUNqRkcsc0JBQXNCRCxJQUFBQSxzQ0FBNkIsRUFBQ2hCLG1CQUFtQmEsTUFBTUMsU0FDN0VWLGlCQUFpQlcsdUJBQ2pCVixlQUFlWSxxQkFDZkMsY0FBYyxJQTNCSG5CLFlBMkJtQkssZ0JBQWdCQztnQkFFcEQsT0FBT2E7WUFDVDs7O1dBOUJtQm5CIn0=