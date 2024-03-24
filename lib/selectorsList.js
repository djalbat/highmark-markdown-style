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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3RvcnNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2VsZWN0b3JzIGZyb20gXCIuL3NlbGVjdG9yc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3NlbGVjdG9yc0xpc3Qvc2VsZWN0b3JzXCIpLFxuICAgICAgc2VsZWN0b3JzTGlzdE5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVTZXQvc2VsZWN0b3JzTGlzdFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0b3JzTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICByZWR1Y2VTZWxlY3RvcnMoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICBmb3JFYWNoU2VsZWN0b3JzKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBjb21iaW5lKHNlbGVjdG9yc0xpc3QpIHtcbiAgICBjb25zdCBvdXRlclNlbGVjdG9yc0xpc3QgPSBTZWxlY3RvcnNMaXN0LmZyb21BcnJheSh0aGlzLmFycmF5KSwgLy8vXG4gICAgICAgICAgaW5uZXJTZWxlY3RvcnNMaXN0ID0gc2VsZWN0b3JzTGlzdCwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBvdXRlclNlbGVjdG9yc0xpc3QucmVkdWNlU2VsZWN0b3JzKChhcnJheSwgb3V0ZXJTZWxlY3RvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlubmVyU2VsZWN0b3JzTGlzdC5mb3JFYWNoU2VsZWN0b3JzKChpbm5lclNlbGVjdG9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSBvdXRlclNlbGVjdG9ycy5jb21iaW5lKGlubmVyU2VsZWN0b3JzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3JzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChzZWxlY3RvcnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHNlbGVjdG9yc0xpc3QgPSBTZWxlY3RvcnNMaXN0LmZyb21BcnJheShhcnJheSk7XG5cbiAgICByZXR1cm4gc2VsZWN0b3JzTGlzdDtcbiAgfVxuXG4gIGFzQ1NTKCkge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIHNlbGVjdG9ycykgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RvcnNDU1MgPSBzZWxlY3RvcnMuYXNDU1MoKTtcblxuICAgICAgICBjc3MgPSAoY3NzID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JzQ1NTIDogLy8vXG4gICAgICAgICAgICAgICAgICBgJHtjc3N9LFxuJHtzZWxlY3RvcnNDU1N9YDtcblxuICAgICAgICByZXR1cm4gY3NzO1xuICAgICAgfSwgbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXkoYXJyYXkpIHtcbiAgICBjb25zdCBzZWxlY3RvcnNMaXN0ID0gbmV3IFNlbGVjdG9yc0xpc3QoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc0xpc3Q7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzTGlzdE5vblRlcm1pbmFsTm9kZSA9IHNlbGVjdG9yc0xpc3ROb25UZXJtaW5hbE5vZGVRdWVyeShub2RlKTtcblxuICAgIG5vZGUgPSBzZWxlY3RvcnNMaXN0Tm9uVGVybWluYWxOb2RlOyAgLy8vXG5cbiAgICBjb25zdCBzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVzID0gc2VsZWN0b3JzTm9uVGVybWluYWxOb2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gc2VsZWN0b3JzTm9uVGVybWluYWxOb2Rlcy5tYXAoKHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHNlbGVjdG9yc05vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgc2VsZWN0b3JzID0gU2VsZWN0b3JzLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnM7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc2VsZWN0b3JzTGlzdCA9IG5ldyBTZWxlY3RvcnNMaXN0KGFycmF5KTtcblxuICAgIHJldHVybiBzZWxlY3RvcnNMaXN0O1xuICB9XG5cbiAgc3RhdGljIGZyb21TZWxlY3RvclN0cmluZyhzZWxlY3RvclN0cmluZykge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IFNlbGVjdG9ycy5mcm9tU2VsZWN0b3JTdHJpbmcoc2VsZWN0b3JTdHJpbmcpLFxuICAgICAgICAgIGFycmF5ID0gW1xuICAgICAgICAgICAgc2VsZWN0b3JzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZWxlY3RvcnNMaXN0ID0gbmV3IFNlbGVjdG9yc0xpc3QoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc0xpc3Q7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTZWxlY3RvcnNMaXN0Iiwic2VsZWN0b3JzTm9uVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInNlbGVjdG9yc0xpc3ROb25UZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwicmVkdWNlU2VsZWN0b3JzIiwiY2FsbGJhY2siLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoU2VsZWN0b3JzIiwiZm9yRWFjaCIsImNvbWJpbmUiLCJzZWxlY3RvcnNMaXN0Iiwib3V0ZXJTZWxlY3RvcnNMaXN0IiwiZnJvbUFycmF5IiwiaW5uZXJTZWxlY3RvcnNMaXN0Iiwib3V0ZXJTZWxlY3RvcnMiLCJpbm5lclNlbGVjdG9ycyIsInNlbGVjdG9ycyIsInB1c2giLCJhc0NTUyIsImNzcyIsIkVNUFRZX1NUUklORyIsInNlbGVjdG9yc0NTUyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsInNlbGVjdG9yc0xpc3ROb25UZXJtaW5hbE5vZGUiLCJzZWxlY3RvcnNOb25UZXJtaW5hbE5vZGVzIiwibWFwIiwic2VsZWN0b3JzTm9uVGVybWluYWxOb2RlIiwiU2VsZWN0b3JzIiwiZnJvbVNlbGVjdG9yU3RyaW5nIiwic2VsZWN0b3JTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O2dFQVJDO3lCQUVPO3FCQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1DLGlDQUFpQ0MsSUFBQUEsaUJBQVUsRUFBQyw2QkFDNUNDLG9DQUFvQ0MsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQyxJQUFBLEFBQU1KLDhCQUFELEFBQUw7YUFBTUEsY0FDUEssS0FBSztnQ0FERUw7UUFFakIsSUFBSSxDQUFDSyxLQUFLLEdBQUdBOztrQkFGSUw7O1lBS25CTSxL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