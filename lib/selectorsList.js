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
                var outermost = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var outerSelectorsList = SelectorsList.fromArray(this.array), innerSelectorsList = selectorsList, array = outerSelectorsList.reduceSelectors(function(array, outerSelectors) {
                    innerSelectorsList.forEachSelectors(function(innerSelectors) {
                        var selectors = outerSelectors.combine(innerSelectors, outermost);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3RvcnNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2VsZWN0b3JzIGZyb20gXCIuL3NlbGVjdG9yc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3NlbGVjdG9yc0xpc3Qvc2VsZWN0b3JzXCIpLFxuICAgICAgc2VsZWN0b3JzTGlzdE5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVTZXQvc2VsZWN0b3JzTGlzdFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JzTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICByZWR1Y2VTZWxlY3RvcnMoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICBmb3JFYWNoU2VsZWN0b3JzKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBjb21iaW5lKHNlbGVjdG9yc0xpc3QsIG91dGVybW9zdCA9IGZhbHNlKSB7XG4gICAgY29uc3Qgb3V0ZXJTZWxlY3RvcnNMaXN0ID0gU2VsZWN0b3JzTGlzdC5mcm9tQXJyYXkodGhpcy5hcnJheSksIC8vL1xuICAgICAgICAgIGlubmVyU2VsZWN0b3JzTGlzdCA9IHNlbGVjdG9yc0xpc3QsIC8vL1xuICAgICAgICAgIGFycmF5ID0gb3V0ZXJTZWxlY3RvcnNMaXN0LnJlZHVjZVNlbGVjdG9ycygoYXJyYXksIG91dGVyU2VsZWN0b3JzKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpbm5lclNlbGVjdG9yc0xpc3QuZm9yRWFjaFNlbGVjdG9ycygoaW5uZXJTZWxlY3RvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0gb3V0ZXJTZWxlY3RvcnMuY29tYmluZShpbm5lclNlbGVjdG9ycywgb3V0ZXJtb3N0KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3JzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChzZWxlY3RvcnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHNlbGVjdG9yc0xpc3QgPSBTZWxlY3RvcnNMaXN0LmZyb21BcnJheShhcnJheSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIGFzQ1NTKCkge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIHNlbGVjdG9ycykgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RvcnNDU1MgPSBzZWxlY3RvcnMuYXNDU1MoKTtcblxuICAgICAgICBjc3MgPSAoY3NzID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JzQ1NTIDogLy8vXG4gICAgICAgICAgICAgICAgICBgJHtjc3N9LFxuJHtzZWxlY3RvcnNDU1N9YDtcblxuICAgICAgICByZXR1cm4gY3NzO1xuICAgICAgfSwgbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXkoYXJyYXkpIHtcbiAgICBjb25zdCBzZWxlY3RvcnNMaXN0ID0gbmV3IFNlbGVjdG9yc0xpc3QoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc0xpc3Q7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzTGlzdE5vblRlcm1pbmFsTm9kZSA9IHNlbGVjdG9yc0xpc3ROb25UZXJtaW5hbE5vZGVRdWVyeShub2RlKTtcblxuICAgIG5vZGUgPSBzZWxlY3RvcnNMaXN0Tm9uVGVybWluYWxOb2RlOyAgLy8vXG5cbiAgICBjb25zdCBzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVzID0gc2VsZWN0b3JzTm9uVGVybWluYWxOb2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gc2VsZWN0b3JzTm9uVGVybWluYWxOb2Rlcy5tYXAoKHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgc2VsZWN0b3JzID0gU2VsZWN0b3JzLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnM7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc2VsZWN0b3JzTGlzdCA9IG5ldyBTZWxlY3RvcnNMaXN0KGFycmF5KTtcblxuICAgIHJldHVybiBzZWxlY3RvcnNMaXN0O1xuICB9XG5cbiAgc3RhdGljIGZyb21TZWxlY3RvclN0cmluZyhzZWxlY3RvclN0cmluZykge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IFNlbGVjdG9ycy5mcm9tU2VsZWN0b3JTdHJpbmcoc2VsZWN0b3JTdHJpbmcpLFxuICAgICAgICAgIGFycmF5ID0gW1xuICAgICAgICAgICAgc2VsZWN0b3JzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0ID0gbmV3IFNlbGVjdG9yc0xpc3QoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc0xpc3Q7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTZWxlY3RvcnNMaXN0Iiwic2VsZWN0b3JzTm9uVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInNlbGVjdG9yc0xpc3ROb25UZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwicmVkdWNlU2VsZWN0b3JzIiwiY2FsbGJhY2siLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoU2VsZWN0b3JzIiwiZm9yRWFjaCIsImNvbWJpbmUiLCJzZWxlY3RvcnNMaXN0Iiwib3V0ZXJtb3N0Iiwib3V0ZXJTZWxlY3RvcnNMaXN0IiwiZnJvbUFycmF5IiwiaW5uZXJTZWxlY3RvcnNMaXN0Iiwib3V0ZXJTZWxlY3RvcnMiLCJpbm5lclNlbGVjdG9ycyIsInNlbGVjdG9ycyIsInB1c2giLCJhc0NTUyIsImNzcyIsIkVNUFRZX1NUUklORyIsInNlbGVjdG9yc0NTUyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsInNlbGVjdG9yc0xpc3ROb25UZXJtaW5hbE5vZGUiLCJzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVzIiwibWFwIiwic2VsZWN0b3JzTm9uVGVybWluYWxOb2RlIiwiU2VsZWN0b3JzIiwiZnJvbVNlbGVjdG9yU3RyaW5nIiwic2VsZWN0b3JTdHJpbmciXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7Z0VBUkM7eUJBRU87cUJBQ1M7Ozs7Ozs7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