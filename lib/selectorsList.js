"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SelectorsList;
    }
});
var _selectors = /*#__PURE__*/ _interop_require_default(require("./selectors"));
var _constants = require("./constants");
var _query = require("./utilities/query");
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
var selectorsNonTerminalNodesQuery = (0, _query.nodesQuery)("/selectorsList/selectors"), selectorsListNonTerminalNodeQuery = (0, _query.nodeQuery)("/ruleSet/selectorsList");
var SelectorsList = /*#__PURE__*/ function() {
    function SelectorsList(array) {
        _class_call_check(this, SelectorsList);
        this.array = array;
    }
    _create_class(SelectorsList, [
        {
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                return this.array.length;
            }
        },
        {
            key: "reduceSelectors",
            value: function reduceSelectors(callback, initialValue) {
                return this.array.reduce(callback, initialValue);
            }
        },
        {
            key: "forEachSelectors",
            value: function forEachSelectors(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "combine",
            value: function combine(selectorsList) {
                var outerSelectorsList = SelectorsList.fromArray(this.array), innerSelectorsList = selectorsList, array = outerSelectorsList.reduceSelectors(function(array, outerSelectors) {
                    innerSelectorsList.forEachSelectors(function(innerSelectors) {
                        var selectors = outerSelectors.combine(innerSelectors);
                        if (selectors !== null) {
                            array.push(selectors);
                        }
                    });
                    return array;
                }, []);
                selectorsList = SelectorsList.fromArray(array);
                return selectorsList;
            }
        },
        {
            key: "asCSS",
            value: function asCSS() {
                var css = _constants.EMPTY_STRING;
                var length = this.getLength();
                if (length > 0) {
                    css = this.array.reduce(function(css, selectors) {
                        var selectorsCSS = selectors.asCSS();
                        css = css === null ? selectorsCSS : "".concat(css, ",\n").concat(selectorsCSS);
                        return css;
                    }, null);
                }
                return css;
            }
        }
    ], [
        {
            key: "fromArray",
            value: function fromArray(array) {
                var selectorsList = new SelectorsList(array);
                return selectorsList;
            }
        },
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var selectorsListNonTerminalNode = selectorsListNonTerminalNodeQuery(node);
                node = selectorsListNonTerminalNode; ///
                var selectorsNonTerminalNodes = selectorsNonTerminalNodesQuery(node), array = selectorsNonTerminalNodes.map(function(selectorsNonTerminalNode) {
                    var _$node = selectorsNonTerminalNode, selectors = _selectors.default.fromNodeAndTokens(_$node, tokens);
                    return selectors;
                }), selectorsList = new SelectorsList(array);
                return selectorsList;
            }
        },
        {
            key: "fromSelectorString",
            value: function fromSelectorString(selectorString) {
                var selectors = _selectors.default.fromSelectorString(selectorString), array = [
                    selectors
                ], selectorsList = new SelectorsList(array);
                return selectorsList;
            }
        }
    ]);
    return SelectorsList;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3RvcnNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2VsZWN0b3JzIGZyb20gXCIuL3NlbGVjdG9yc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3NlbGVjdG9yc0xpc3Qvc2VsZWN0b3JzXCIpLFxuICAgICAgc2VsZWN0b3JzTGlzdE5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVTZXQvc2VsZWN0b3JzTGlzdFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JzTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIHJlZHVjZVNlbGVjdG9ycyhjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIGZvckVhY2hTZWxlY3RvcnMoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGNvbWJpbmUoc2VsZWN0b3JzTGlzdCkge1xuICAgIGNvbnN0IG91dGVyU2VsZWN0b3JzTGlzdCA9IFNlbGVjdG9yc0xpc3QuZnJvbUFycmF5KHRoaXMuYXJyYXkpLCAvLy9cbiAgICAgICAgICBpbm5lclNlbGVjdG9yc0xpc3QgPSBzZWxlY3RvcnNMaXN0LCAvLy9cbiAgICAgICAgICBhcnJheSA9IG91dGVyU2VsZWN0b3JzTGlzdC5yZWR1Y2VTZWxlY3RvcnMoKGFycmF5LCBvdXRlclNlbGVjdG9ycykgPT4ge1xuICAgICAgICAgICAgaW5uZXJTZWxlY3RvcnNMaXN0LmZvckVhY2hTZWxlY3RvcnMoKGlubmVyU2VsZWN0b3JzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IG91dGVyU2VsZWN0b3JzLmNvbWJpbmUoaW5uZXJTZWxlY3RvcnMpO1xuXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RvcnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHNlbGVjdG9ycyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgc2VsZWN0b3JzTGlzdCA9IFNlbGVjdG9yc0xpc3QuZnJvbUFycmF5KGFycmF5KTtcblxuICAgIHJldHVybiBzZWxlY3RvcnNMaXN0O1xuICB9XG5cbiAgYXNDU1MoKSB7XG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgY3NzID0gdGhpcy5hcnJheS5yZWR1Y2UoKGNzcywgc2VsZWN0b3JzKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yc0NTUyA9IHNlbGVjdG9ycy5hc0NTUygpO1xuXG4gICAgICAgIGNzcyA9IChjc3MgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBzZWxlY3RvcnNDU1MgOiAvLy9cbiAgICAgICAgICAgICAgICAgIGAke2Nzc30sXG4ke3NlbGVjdG9yc0NTU31gO1xuXG4gICAgICAgIHJldHVybiBjc3M7XG4gICAgICB9LCBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21BcnJheShhcnJheSkge1xuICAgIGNvbnN0IHNlbGVjdG9yc0xpc3QgPSBuZXcgU2VsZWN0b3JzTGlzdChhcnJheSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBzZWxlY3RvcnNMaXN0Tm9uVGVybWluYWxOb2RlID0gc2VsZWN0b3JzTGlzdE5vblRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpO1xuXG4gICAgbm9kZSA9IHNlbGVjdG9yc0xpc3ROb25UZXJtaW5hbE5vZGU7ICAvLy9cblxuICAgIGNvbnN0IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZXMgPSBzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVzLm1hcCgoc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gc2VsZWN0b3JzTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICBzZWxlY3RvcnMgPSBTZWxlY3RvcnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0ID0gbmV3IFNlbGVjdG9yc0xpc3QoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc0xpc3Q7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yU3RyaW5nKHNlbGVjdG9yU3RyaW5nKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gU2VsZWN0b3JzLmZyb21TZWxlY3RvclN0cmluZyhzZWxlY3RvclN0cmluZyksXG4gICAgICAgICAgYXJyYXkgPSBbXG4gICAgICAgICAgICBzZWxlY3RvcnNcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlbGVjdG9yc0xpc3QgPSBuZXcgU2VsZWN0b3JzTGlzdChhcnJheSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzTGlzdDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNlbGVjdG9yc0xpc3QiLCJzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic2VsZWN0b3JzTGlzdE5vblRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiYXJyYXkiLCJnZXRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsInJlZHVjZVNlbGVjdG9ycyIsImNhbGxiYWNrIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaFNlbGVjdG9ycyIsImZvckVhY2giLCJjb21iaW5lIiwic2VsZWN0b3JzTGlzdCIsIm91dGVyU2VsZWN0b3JzTGlzdCIsImZyb21BcnJheSIsImlubmVyU2VsZWN0b3JzTGlzdCIsIm91dGVyU2VsZWN0b3JzIiwiaW5uZXJTZWxlY3RvcnMiLCJzZWxlY3RvcnMiLCJwdXNoIiwiYXNDU1MiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJzZWxlY3RvcnNDU1MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvcnNMaXN0Tm9uVGVybWluYWxOb2RlIiwic2VsZWN0b3JzTm9uVGVybWluYWxOb2RlcyIsIm1hcCIsInNlbGVjdG9yc05vblRlcm1pbmFsTm9kZSIsIlNlbGVjdG9ycyIsImZyb21TZWxlY3RvclN0cmluZyIsInNlbGVjdG9yU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OztnRUFSQzt5QkFFTztxQkFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQyxpQ0FBaUNDLElBQUFBLGlCQUFVLEVBQUMsNkJBQzVDQyxvQ0FBb0NDLElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNSiw4QkFBRCxBQUFMO2FBQU1BLGNBQ1BLLEtBQUs7Z0NBREVMO1FBRWpCLElBQUksQ0FBQ0ssS0FBSyxH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