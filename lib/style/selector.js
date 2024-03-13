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
var _query = require("../utilities/query");
var _ruleNames = require("../ruleNames");
var _lexer = require("../markdownStyle/lexer");
var _parser = require("../markdownStyle/parser");
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
var ruleMap = _parser.markdownStyleParser.getRuleMap(), selectorRule = ruleMap[_ruleNames.SELECTOR_RULE_NAME], startRule = selectorRule; ///
var nameTerminalNodeQuery = (0, _query.nodeQuery)("/selector/@name");
var Selector = /*#__PURE__*/ function() {
    function Selector(content, noWhitespace) {
        _class_call_check(this, Selector);
        this.content = content;
        this.noWhitespace = noWhitespace;
    }
    _create_class(Selector, [
        {
            key: "getContent",
            value: function getContent() {
                return this.content;
            }
        },
        {
            key: "hasNoWhitespace",
            value: function hasNoWhitespace() {
                return this.noWhitespace;
            }
        },
        {
            key: "combine",
            value: function combine(selector) {
                var outerSelector = this, innerSelector = selector, outerSelectorContent = outerSelector.getContent(), innerSelectorContent = innerSelector.getContent(), innerSelectorNoWhitespace = innerSelector.hasNoWhitespace(), content = innerSelectorNoWhitespace ? "".concat(outerSelectorContent).concat(innerSelectorContent) : "".concat(outerSelectorContent, " ").concat(innerSelectorContent);
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
                var tokens = _lexer.markdownStyleLexer.tokenise(content), node = _parser.markdownStyleParser.parse(tokens, startRule), noWhitespace = noWhitespaceFromNode(node), selector = new Selector(content, noWhitespace);
                return selector;
            }
        },
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var noWhitespace = noWhitespaceFromNode(node), content = (0, _content.contentFromNodeAndTokens)(node, tokens), selector = new Selector(content, noWhitespace);
                return selector;
            }
        }
    ]);
    return Selector;
}();
function noWhitespaceFromNode(node) {
    var nameTerminalNode = nameTerminalNodeQuery(node), noWhitespace = nameTerminalNode === null;
    return noWhitespace;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgU0VMRUNUT1JfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgbWFya2Rvd25TdHlsZUxleGVyIH0gZnJvbSBcIi4uL21hcmtkb3duU3R5bGUvbGV4ZXJcIjtcbmltcG9ydCB7IG1hcmtkb3duU3R5bGVQYXJzZXIgfSBmcm9tIFwiLi4vbWFya2Rvd25TdHlsZS9wYXJzZXJcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jb25zdCBydWxlTWFwID0gbWFya2Rvd25TdHlsZVBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICBzZWxlY3RvclJ1bGUgPSBydWxlTWFwW1NFTEVDVE9SX1JVTEVfTkFNRV0sXG4gICAgICBzdGFydFJ1bGUgPSBzZWxlY3RvclJ1bGU7ICAvLy9cblxuY29uc3QgbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NlbGVjdG9yL0BuYW1lXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RvciB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBoYXNOb1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgY29tYmluZShzZWxlY3Rvcikge1xuICAgIGNvbnN0IG91dGVyU2VsZWN0b3IgPSB0aGlzLCAvLy9cbiAgICAgICAgICBpbm5lclNlbGVjdG9yID0gc2VsZWN0b3IsIC8vL1xuICAgICAgICAgIG91dGVyU2VsZWN0b3JDb250ZW50ID0gb3V0ZXJTZWxlY3Rvci5nZXRDb250ZW50KCksXG4gICAgICAgICAgaW5uZXJTZWxlY3RvckNvbnRlbnQgPSBpbm5lclNlbGVjdG9yLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBpbm5lclNlbGVjdG9yTm9XaGl0ZXNwYWNlID0gaW5uZXJTZWxlY3Rvci5oYXNOb1doaXRlc3BhY2UoKSxcbiAgICAgICAgICBjb250ZW50ID0gKGlubmVyU2VsZWN0b3JOb1doaXRlc3BhY2UpID9cbiAgICAgICAgICAgICAgICAgICAgICBgJHtvdXRlclNlbGVjdG9yQ29udGVudH0ke2lubmVyU2VsZWN0b3JDb250ZW50fWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7b3V0ZXJTZWxlY3RvckNvbnRlbnR9ICR7aW5uZXJTZWxlY3RvckNvbnRlbnR9YDtcblxuICAgIHNlbGVjdG9yID0gU2VsZWN0b3IuZnJvbUNvbnRlbnQoY29udGVudCk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cblxuICBhc0NTUygpIHtcbiAgICBjb25zdCBjc3MgPSB0aGlzLmNvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgdG9rZW5zID0gbWFya2Rvd25TdHlsZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBtYXJrZG93blN0eWxlUGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKSxcbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2VGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBzZWxlY3RvciA9IG5ldyBTZWxlY3Rvcihjb250ZW50LCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZUZyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzZWxlY3RvciA9IG5ldyBTZWxlY3Rvcihjb250ZW50LCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vV2hpdGVzcGFjZUZyb21Ob2RlKG5vZGUpIHtcbiAgY29uc3QgbmFtZVRlcm1pbmFsTm9kZSA9IG5hbWVUZXJtaW5hbE5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgbm9XaGl0ZXNwYWNlID0gKG5hbWVUZXJtaW5hbE5vZGUgPT09IG51bGwpO1xuXG4gIHJldHVybiBub1doaXRlc3BhY2U7XG59Il0sIm5hbWVzIjpbIlNlbGVjdG9yIiwicnVsZU1hcCIsIm1hcmtkb3duU3R5bGVQYXJzZXIiLCJnZXRSdWxlTWFwIiwic2VsZWN0b3JSdWxlIiwiU0VMRUNUT1JfUlVMRV9OQU1FIiwic3RhcnRSdWxlIiwibmFtZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiY29udGVudCIsIm5vV2hpdGVzcGFjZSIsImdldENvbnRlbnQiLCJoYXNOb1doaXRlc3BhY2UiLCJjb21iaW5lIiwic2VsZWN0b3IiLCJvdXRlclNlbGVjdG9yIiwiaW5uZXJTZWxlY3RvciIsIm91dGVyU2VsZWN0b3JDb250ZW50IiwiaW5uZXJTZWxlY3RvckNvbnRlbnQiLCJpbm5lclNlbGVjdG9yTm9XaGl0ZXNwYWNlIiwiZnJvbUNvbnRlbnQiLCJhc0NTUyIsImNzcyIsInRva2VucyIsIm1hcmtkb3duU3R5bGVMZXhlciIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwibm9XaGl0ZXNwYWNlRnJvbU5vZGUiLCJmcm9tTm9kZUFuZFRva2VucyIsImNvbnRlbnRGcm9tTm9kZUFuZFRva2VucyIsIm5hbWVUZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7O3FCQVpLO3lCQUNTO3FCQUNBO3NCQUNDO3VCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFNQyxVQUFVQywyQkFBbUIsQ0FBQ0MsVUFBVSxJQUN4Q0MsZUFBZUgsT0FBTyxDQUFDSSw2QkFBa0IsQ0FBQyxFQUMxQ0MsWUFBWUYsY0FBZSxHQUFHO0FBRXBDLElBQU1HLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV6QixJQUFBLEFBQU1SLHlCQUFELEFBQUw7YUFBTUEsU0FDUFMsT0FBTyxFQUFFQyxZQUFZO2dDQURkVjtRQUVqQixJQUFJLENBQUNTLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFlBQVksR0FBR0E7O2tCQUhIVjs7WUFNbkJXLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNyQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxRQUFRO2dCQUNkLElBQU1DLGdCQUFnQixJQUFJLEVBQ3BCQyxnQkFBZ0JGLFVBQ2hCRyx1QkFBdUJGLGNBQWNKLFVBQVUsSUFDL0NPLHVCQUF1QkYsY0FBY0wsVUFBVSxJQUMvQ1EsNEJBQTRCSCxjQUFjSixlQUFlLElBQ3pESCxVQUFVLEFBQUNVLDRCQUNDLEFBQUMsR0FBeUJELE9BQXZCRCxzQkFBNEMsT0FBckJDLHdCQUN4QixBQUFDLEdBQTBCQSxPQUF4QkQsc0JBQXFCLEtBQXdCLE9BQXJCQztnQkFFL0NKLFdBQVdkLEFBeEJNQSxTQXdCR29CLFdBQVcsQ0FBQ1g7Z0JBRWhDLE9BQU9LO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsTUFBTSxJQUFJLENBQUNiLE9BQU8sRUFBRSxHQUFHO2dCQUU3QixPQUFPYTtZQUNUOzs7O1lBRU9GLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlYLE9BQU87Z0JBQ3hCLElBQU1jLFNBQVNDLHlCQUFrQixDQUFDQyxRQUFRLENBQUNoQixVQUNyQ2lCLE9BQU94QiwyQkFBbUIsQ0FBQ3lCLEtBQUssQ0FBQ0osUUFBUWpCLFlBQ3pDSSxlQUFla0IscUJBQXFCRixPQUNwQ1osV0FBVyxJQXZDQWQsU0F1Q2FTLFNBQVNDO2dCQUV2QyxPQUFPSTtZQUNUOzs7WUFFT2UsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCSCxJQUFJLEVBQUVILE1BQU07Z0JBQ25DLElBQU1iLGVBQWVrQixxQkFBcUJGLE9BQ3BDakIsVUFBVXFCLElBQUFBLGlDQUF3QixFQUFDSixNQUFNSCxTQUN6Q1QsV0FBVyxJQS9DQWQsU0ErQ2FTLFNBQVNDO2dCQUV2QyxPQUFPSTtZQUNUOzs7V0FsRG1CZDs7QUFxRHJCLFNBQVM0QixxQkFBcUJGLElBQUk7SUFDaEMsSUFBTUssbUJBQW1CeEIsc0JBQXNCbUIsT0FDekNoQixlQUFnQnFCLHFCQUFxQjtJQUUzQyxPQUFPckI7QUFDVCJ9