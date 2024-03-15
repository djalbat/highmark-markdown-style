"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefaultMarkdownStyleElement;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_wildcard(require("../../styleElement/markdown"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var DefaultMarkdownStyleElement = /*#__PURE__*/ function(MarkdownStyleElement) {
    _inherits(DefaultMarkdownStyleElement, MarkdownStyleElement);
    var _super = _create_super(DefaultMarkdownStyleElement);
    function DefaultMarkdownStyleElement() {
        _class_call_check(this, DefaultMarkdownStyleElement);
        return _super.apply(this, arguments);
    }
    _create_class(DefaultMarkdownStyleElement, [
        {
            key: "update",
            value: function update(markdownStyle) {
            ///
            }
        }
    ], [
        {
            key: "fromSelectorString",
            value: function fromSelectorString(selectorString) {
                var defaultMarkdownStyleElement = _markdown.default.fromSelectorString(DefaultMarkdownStyleElement, selectorString), markdownStyle = defaultMarkdownStyle, selectors = defaultMarkdownStyleElement.getSelectors(), css = (0, _markdown.cssFromMarkdownStyleAndSelectors)(markdownStyle, selectors);
                defaultMarkdownStyleElement.setCSS(css);
            }
        }
    ]);
    return DefaultMarkdownStyleElement;
}(_markdown.default);
var defaultMarkdownStyle = 'font-family: "Computer Modern Serif";\n  \nprimaryHeading {\n  font-size: 3em;\n  margin: 0.333333em 0 0.333333em 0;\n}\n\nsecondaryHeading {\n  font-size: 2em;\n  margin: 0.5em 0 0.5em 0;\n}\n\ntertiaryHeading {\n  font-size: 1.5em;\n  margin: 0.75em 0 0.75em 0;\n}\n\ntable,\norderedList,\nunorderedList,\nblockListing,\ninlineListing,\nquaternaryHeading {\n  font-size: 1em;\n  margin: 1em 0 1em 0;\n}\n\nprimaryHeading,\nsecondaryHeading,\ntertiaryHeading,\nquaternaryHeading {\n  font-weight: bold;\n}\n\norderedListItem,\nunorderedListItem {\n  margin: 0.5em 0 0.5em 0;\n}\n\ntable,\norderedList,\nunorderedList,\norderedListItem,\nunorderedListItem,\nblockListing,\ninlineListing,\nprimaryHeading,\nsecondaryHeading,\ntertiaryHeading,\nquaternaryHeading {\n  :first-child {\n    margin-top: 0;\n  }\n  \n  :last-child {\n    margin-top: 0;\n  }\n}\n\nblockListing,\ninlineListing {\n  font-family: "Computer Modern Typewriter";\n}\n\nstrongText {\n  font-weight: bold;\n}\n\nemphasisedText {\n  font-style: italic;\n}\n\nstronglyEmphasisedText {\n  font-style: italic;\n  font-weight: bold;\n}\n\nfootnotesList {\n  font-size: 0.75em;\n}\n\nerror {\n  text-decoration: underline red;\n}\n';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24vZGVmYXVsdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duU3R5bGVFbGVtZW50IGZyb20gXCIuLi8uLi9zdHlsZUVsZW1lbnQvbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRTZWxlY3RvcnMgfSBmcm9tIFwiLi4vLi4vc3R5bGVFbGVtZW50L21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRNYXJrZG93blN0eWxlRWxlbWVudCBleHRlbmRzIE1hcmtkb3duU3R5bGVFbGVtZW50IHtcbiAgdXBkYXRlKG1hcmtkb3duU3R5bGUpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VsZWN0b3JTdHJpbmcoc2VsZWN0b3JTdHJpbmcpIHtcbiAgICBjb25zdCBkZWZhdWx0TWFya2Rvd25TdHlsZUVsZW1lbnQgPSBNYXJrZG93blN0eWxlRWxlbWVudC5mcm9tU2VsZWN0b3JTdHJpbmcoRGVmYXVsdE1hcmtkb3duU3R5bGVFbGVtZW50LCBzZWxlY3RvclN0cmluZyksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IGRlZmF1bHRNYXJrZG93blN0eWxlLCAvLy9cbiAgICAgICAgICBzZWxlY3RvcnMgPSBkZWZhdWx0TWFya2Rvd25TdHlsZUVsZW1lbnQuZ2V0U2VsZWN0b3JzKCksXG4gICAgICAgICAgY3NzID0gY3NzRnJvbU1hcmtkb3duU3R5bGVBbmRTZWxlY3RvcnMobWFya2Rvd25TdHlsZSwgc2VsZWN0b3JzKTtcblxuICAgIGRlZmF1bHRNYXJrZG93blN0eWxlRWxlbWVudC5zZXRDU1MoY3NzKTtcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0TWFya2Rvd25TdHlsZSA9IGBmb250LWZhbWlseTogXCJDb21wdXRlciBNb2Rlcm4gU2VyaWZcIjtcbiAgXG5wcmltYXJ5SGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBtYXJnaW46IDAuMzMzMzMzZW0gMCAwLjMzMzMzM2VtIDA7XG59XG5cbnNlY29uZGFyeUhlYWRpbmcge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjVlbSAwIDAuNWVtIDA7XG59XG5cbnRlcnRpYXJ5SGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbjogMC43NWVtIDAgMC43NWVtIDA7XG59XG5cbnRhYmxlLFxub3JkZXJlZExpc3QsXG51bm9yZGVyZWRMaXN0LFxuYmxvY2tMaXN0aW5nLFxuaW5saW5lTGlzdGluZyxcbnF1YXRlcm5hcnlIZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1hcmdpbjogMWVtIDAgMWVtIDA7XG59XG5cbnByaW1hcnlIZWFkaW5nLFxuc2Vjb25kYXJ5SGVhZGluZyxcbnRlcnRpYXJ5SGVhZGluZyxcbnF1YXRlcm5hcnlIZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbm9yZGVyZWRMaXN0SXRlbSxcbnVub3JkZXJlZExpc3RJdGVtIHtcbiAgbWFyZ2luOiAwLjVlbSAwIDAuNWVtIDA7XG59XG5cbnRhYmxlLFxub3JkZXJlZExpc3QsXG51bm9yZGVyZWRMaXN0LFxub3JkZXJlZExpc3RJdGVtLFxudW5vcmRlcmVkTGlzdEl0ZW0sXG5ibG9ja0xpc3RpbmcsXG5pbmxpbmVMaXN0aW5nLFxucHJpbWFyeUhlYWRpbmcsXG5zZWNvbmRhcnlIZWFkaW5nLFxudGVydGlhcnlIZWFkaW5nLFxucXVhdGVybmFyeUhlYWRpbmcge1xuICA6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgXG4gIDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG5cbmJsb2NrTGlzdGluZyxcbmlubGluZUxpc3Rpbmcge1xuICBmb250LWZhbWlseTogXCJDb21wdXRlciBNb2Rlcm4gVHlwZXdyaXRlclwiO1xufVxuXG5zdHJvbmdUZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmVtcGhhc2lzZWRUZXh0IHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5zdHJvbmdseUVtcGhhc2lzZWRUZXh0IHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZm9vdG5vdGVzTGlzdCB7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xufVxuXG5lcnJvciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHJlZDtcbn1cbmA7XG4iXSwibmFtZXMiOlsiRGVmYXVsdE1hcmtkb3duU3R5bGVFbGVtZW50IiwidXBkYXRlIiwibWFya2Rvd25TdHlsZSIsImZyb21TZWxlY3RvclN0cmluZyIsInNlbGVjdG9yU3RyaW5nIiwiZGVmYXVsdE1hcmtkb3duU3R5bGVFbGVtZW50IiwiTWFya2Rvd25TdHlsZUVsZW1lbnQiLCJkZWZhdWx0TWFya2Rvd25TdHlsZSIsInNlbGVjdG9ycyIsImdldFNlbGVjdG9ycyIsImNzcyIsImNzc0Zyb21NYXJrZG93blN0eWxlQW5kU2VsZWN0b3JzIiwic2V0Q1NTIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztnRUFKWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlsQixJQUFBLEFBQU1BLDRDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhO1lBQ2xCLEdBQUc7WUFDTDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGNBQWM7Z0JBQ3RDLElBQU1DLDhCQUE4QkMsaUJBQW9CLENBQUNILGtCQUFrQixDQU4xREgsNkJBTXdGSSxpQkFDbkdGLGdCQUFnQkssc0JBQ2hCQyxZQUFZSCw0QkFBNEJJLFlBQVksSUFDcERDLE1BQU1DLElBQUFBLDBDQUFnQyxFQUFDVCxlQUFlTTtnQkFFNURILDRCQUE0Qk8sTUFBTSxDQUFDRjtZQUNyQzs7O1dBWm1CVjtFQUFvQ00saUJBQW9CO0FBZTdFLElBQU1DLHVCQUF3QiJ9