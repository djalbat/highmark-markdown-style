"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleSet;
    }
});
var _declarations = /*#__PURE__*/ _interop_require_default(require("./declarations"));
var _query = require("../utilities/query");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var selectorsNonTerminalNodeQuery = (0, _query.nodeQuery)("/*/selectors");
var RuleSet = /*#__PURE__*/ function() {
    function RuleSet(ruleSets, selectors, declarations) {
        _class_call_check(this, RuleSet);
        this.ruleSets = ruleSets;
        this.selectors = selectors;
        this.declarations = declarations;
    }
    _create_class(RuleSet, [
        {
            key: "getRuleSets",
            value: function getRuleSets() {
                return this.ruleSets;
            }
        },
        {
            key: "getSelectors",
            value: function getSelectors() {
                return this.selectors;
            }
        },
        {
            key: "getDeclarations",
            value: function getDeclarations() {
                return this.declarations;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(selectors) {
                selectors = this.selectors === _constants.EMPTY_STRING ? selectors : "".concat(selectors, " ").concat(this.selectors);
                var css = _constants.EMPTY_STRING;
                var declarationsCSS = this.declarations.asCSS(), ruleSetsCSS = this.ruleSets.asCSS(selectors);
                if (declarationsCSS !== _constants.EMPTY_STRING) {
                    css = "".concat(css).concat(selectors, " {\n").concat(declarationsCSS, "}\n\n");
                }
                if (ruleSetsCSS !== _constants.EMPTY_STRING) {
                    css = "".concat(css).concat(ruleSetsCSS, "\n      ");
                }
                return css;
            }
        }
    ], [
        {
            key: "fromRuleSetsAndDeclarations",
            value: function fromRuleSetsAndDeclarations(RuleSets, declarations) {
                var ruleSets = RuleSets.fromNothing(), selectors = _constants.EMPTY_STRING, ruleSet = new RuleSet(ruleSets, selectors, declarations);
                return ruleSet;
            }
        },
        {
            key: "fromRuleSetsNodeAndTokens",
            value: function fromRuleSetsNodeAndTokens(RuleSets, node, tokens) {
                var ruleSets = RuleSets.fromNodeAndTokens(node, tokens), selectors = selectorsFromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), ruleSet = new RuleSet(ruleSets, selectors, declarations);
                return ruleSet;
            }
        }
    ]);
    return RuleSet;
}();
function selectorsFromNodeAndTokens(node, tokens) {
    var selectorsNonTerminalNode = selectorsNonTerminalNodeQuery(node), selectorsNonTerminalNodeContent = (0, _content.contentFromNonTerminalNodeAndTokens)(selectorsNonTerminalNode, tokens), selectors = "".concat(selectorsNonTerminalNodeContent);
    return selectors;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjb250ZW50RnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jb25zdCBzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3NlbGVjdG9yc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZVNldCB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVTZXRzLCBzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucykge1xuICAgIHRoaXMucnVsZVNldHMgPSBydWxlU2V0cztcbiAgICB0aGlzLnNlbGVjdG9ycyA9IHNlbGVjdG9ycztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFJ1bGVTZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTZXRzO1xuICB9XG5cbiAgZ2V0U2VsZWN0b3JzKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdG9ycztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBhc0NTUyhzZWxlY3RvcnMpIHtcbiAgICBzZWxlY3RvcnMgPSAodGhpcy5zZWxlY3RvcnMgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICAgICAgc2VsZWN0b3JzIDpcbiAgICAgICAgICAgICAgICAgICBgJHtzZWxlY3RvcnN9ICR7dGhpcy5zZWxlY3RvcnN9YDtcblxuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUygpLFxuICAgICAgICAgIHJ1bGVTZXRzQ1NTID0gdGhpcy5ydWxlU2V0cy5hc0NTUyhzZWxlY3RvcnMpO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc0NTUyAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICBjc3MgPSBgJHtjc3N9JHtzZWxlY3RvcnN9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfX1cblxuYDtcbiAgICB9XG5cbiAgICBpZiAocnVsZVNldHNDU1MgIT09IEVNUFRZX1NUUklORykge1xuICAgICAgY3NzID0gYCR7Y3NzfSR7cnVsZVNldHNDU1N9XG4gICAgICBgO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVTZXRzQW5kRGVjbGFyYXRpb25zKFJ1bGVTZXRzLCBkZWNsYXJhdGlvbnMpIHtcbiAgICBjb25zdCBydWxlU2V0cyA9IFJ1bGVTZXRzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc2VsZWN0b3JzID0gRU1QVFlfU1RSSU5HLCAvLy9cbiAgICAgICAgICBydWxlU2V0ID0gbmV3IFJ1bGVTZXQocnVsZVNldHMsIHNlbGVjdG9ycywgZGVjbGFyYXRpb25zKTtcblxuICAgIHJldHVybiBydWxlU2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlU2V0c05vZGVBbmRUb2tlbnMoUnVsZVNldHMsIG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzZWxlY3RvcnMgPSBzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXQgPSBuZXcgUnVsZVNldChydWxlU2V0cywgc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIHJ1bGVTZXQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZSA9IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpLFxuICAgICAgICBzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVDb250ZW50ID0gY29udGVudEZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMoc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICBzZWxlY3RvcnMgPSBgJHtzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVDb250ZW50fWA7XG5cbiAgcmV0dXJuIHNlbGVjdG9ycztcbn1cbiJdLCJuYW1lcyI6WyJSdWxlU2V0Iiwic2VsZWN0b3JzTm9uVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJydWxlU2V0cyIsInNlbGVjdG9ycyIsImRlY2xhcmF0aW9ucyIsImdldFJ1bGVTZXRzIiwiZ2V0U2VsZWN0b3JzIiwiZ2V0RGVjbGFyYXRpb25zIiwiYXNDU1MiLCJFTVBUWV9TVFJJTkciLCJjc3MiLCJkZWNsYXJhdGlvbnNDU1MiLCJydWxlU2V0c0NTUyIsImZyb21SdWxlU2V0c0FuZERlY2xhcmF0aW9ucyIsIlJ1bGVTZXRzIiwiZnJvbU5vdGhpbmciLCJydWxlU2V0IiwiZnJvbVJ1bGVTZXRzTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJmcm9tTm9kZUFuZFRva2VucyIsInNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zIiwiRGVjbGFyYXRpb25zIiwic2VsZWN0b3JzTm9uVGVybWluYWxOb2RlIiwic2VsZWN0b3JzTm9uVGVybWluYWxOb2RlQ29udGVudCIsImNvbnRlbnRGcm9tTm9uVGVy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