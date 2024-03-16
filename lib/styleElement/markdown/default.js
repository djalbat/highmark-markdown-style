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
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../styleElement/markdown"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
            key: "reset",
            value: function reset() {
                var markdownStyle = defaultMarkdownStyle; ///
                this.update(markdownStyle);
            }
        }
    ], [
        {
            key: "fromSelectorString",
            value: function fromSelectorString(Class, selectorString) {
                if (selectorString === undefined) {
                    selectorString = Class; ///
                    Class = DefaultMarkdownStyleElement; ///
                }
                var defaultMarkdownStyleElement = Class.fromSelectorString(DefaultMarkdownStyleElement, selectorString);
                defaultMarkdownStyleElement.reset();
                return defaultMarkdownStyleElement;
            }
        }
    ]);
    return DefaultMarkdownStyleElement;
}(_markdown.default);
var defaultMarkdownStyle = 'font-family: "Computer Modern Serif";\n  \nprimaryHeading {\n  font-size: 3em;\n  margin: 0.333333em 0 0.333333em 0;\n}\n\nsecondaryHeading {\n  font-size: 2em;\n  margin: 0.5em 0 0.5em 0;\n}\n\ntertiaryHeading {\n  font-size: 1.5em;\n  margin: 0.75em 0 0.75em 0;\n}\n\ntable,\norderedList,\nunorderedList,\nblockListing,\ninlineListing,\nquaternaryHeading {\n  font-size: 1em;\n  margin: 1em 0 1em 0;\n}\n\nprimaryHeading,\nsecondaryHeading,\ntertiaryHeading,\nquaternaryHeading {\n  font-weight: bold;\n}\n\norderedListItem,\nunorderedListItem {\n  margin: 0.5em 0 0.5em 0;\n}\n\ntable,\norderedList,\nunorderedList,\norderedListItem,\nunorderedListItem,\nblockListing,\ninlineListing,\nprimaryHeading,\nsecondaryHeading,\ntertiaryHeading,\nquaternaryHeading {\n  :first-child {\n    margin-top: 0;\n  }\n  \n  :last-child {\n    margin-top: 0;\n  }\n}\n\n\nblockListing,\ninlineListing {\n  font-family: "Computer Modern Typewriter";\n}\n\ntableHead {\n  border: 1px solid blackl;\n}\n\ntableBodyCell,\ntableHeadCell {\n  padding: 1em;\n}\n\nstrongText {\n  font-weight: bold;\n}\n\nemphasisedText {\n  font-style: italic;\n}\n\nstronglyEmphasisedText {\n  font-style: italic;\n  font-weight: bold;\n}\n\nfootnotesList {\n  font-size: 0.75em;\n}\n\nerror {\n  text-decoration: underline red;\n}\n';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24vZGVmYXVsdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duU3R5bGVFbGVtZW50IGZyb20gXCIuLi8uLi9zdHlsZUVsZW1lbnQvbWFya2Rvd25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdE1hcmtkb3duU3R5bGVFbGVtZW50IGV4dGVuZHMgTWFya2Rvd25TdHlsZUVsZW1lbnQge1xuICByZXNldCgpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlID0gZGVmYXVsdE1hcmtkb3duU3R5bGU7IC8vL1xuXG4gICAgdGhpcy51cGRhdGUobWFya2Rvd25TdHlsZSlcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VsZWN0b3JTdHJpbmcoQ2xhc3MsIHNlbGVjdG9yU3RyaW5nKSB7XG4gICAgaWYgKHNlbGVjdG9yU3RyaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGVjdG9yU3RyaW5nID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IERlZmF1bHRNYXJrZG93blN0eWxlRWxlbWVudDsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRNYXJrZG93blN0eWxlRWxlbWVudCA9IENsYXNzLmZyb21TZWxlY3RvclN0cmluZyhEZWZhdWx0TWFya2Rvd25TdHlsZUVsZW1lbnQsIHNlbGVjdG9yU3RyaW5nKTtcblxuICAgIGRlZmF1bHRNYXJrZG93blN0eWxlRWxlbWVudC5yZXNldCgpO1xuXG4gICAgcmV0dXJuIGRlZmF1bHRNYXJrZG93blN0eWxlRWxlbWVudDtcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0TWFya2Rvd25TdHlsZSA9IGBmb250LWZhbWlseTogXCJDb21wdXRlciBNb2Rlcm4gU2VyaWZcIjtcbiAgXG5wcmltYXJ5SGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBtYXJnaW46IDAuMzMzMzMzZW0gMCAwLjMzMzMzM2VtIDA7XG59XG5cbnNlY29uZGFyeUhlYWRpbmcge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjVlbSAwIDAuNWVtIDA7XG59XG5cbnRlcnRpYXJ5SGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbjogMC43NWVtIDAgMC43NWVtIDA7XG59XG5cbnRhYmxlLFxub3JkZXJlZExpc3QsXG51bm9yZGVyZWRMaXN0LFxuYmxvY2tMaXN0aW5nLFxuaW5saW5lTGlzdGluZyxcbnF1YXRlcm5hcnlIZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1hcmdpbjogMWVtIDAgMWVtIDA7XG59XG5cbnByaW1hcnlIZWFkaW5nLFxuc2Vjb25kYXJ5SGVhZGluZyxcbnRlcnRpYXJ5SGVhZGluZyxcbnF1YXRlcm5hcnlIZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbm9yZGVyZWRMaXN0SXRlbSxcbnVub3JkZXJlZExpc3RJdGVtIHtcbiAgbWFyZ2luOiAwLjVlbSAwIDAuNWVtIDA7XG59XG5cbnRhYmxlLFxub3JkZXJlZExpc3QsXG51bm9yZGVyZWRMaXN0LFxub3JkZXJlZExpc3RJdGVtLFxudW5vcmRlcmVkTGlzdEl0ZW0sXG5ibG9ja0xpc3RpbmcsXG5pbmxpbmVMaXN0aW5nLFxucHJpbWFyeUhlYWRpbmcsXG5zZWNvbmRhcnlIZWFkaW5nLFxudGVydGlhcnlIZWFkaW5nLFxucXVhdGVybmFyeUhlYWRpbmcge1xuICA6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgXG4gIDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG5cblxuYmxvY2tMaXN0aW5nLFxuaW5saW5lTGlzdGluZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbXB1dGVyIE1vZGVybiBUeXBld3JpdGVyXCI7XG59XG5cbnRhYmxlSGVhZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrbDtcbn1cblxudGFibGVCb2R5Q2VsbCxcbnRhYmxlSGVhZENlbGwge1xuICBwYWRkaW5nOiAxZW07XG59XG5cbnN0cm9uZ1RleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZW1waGFzaXNlZFRleHQge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbnN0cm9uZ2x5RW1waGFzaXNlZFRleHQge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5mb290bm90ZXNMaXN0IHtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG59XG5cbmVycm9yIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgcmVkO1xufVxuYDtcbiJdLCJuYW1lcyI6WyJEZWZhdWx0TWFya2Rvd25TdHlsZUVsZW1lbnQiLCJyZXNldCIsIm1hcmtkb3duU3R5bGUiLCJkZWZhdWx0TWFya2Rvd25TdHlsZSIsInVwZGF0ZSIsImZyb21TZWxlY3RvclN0cmluZyIsIkNsYXNzIiwic2VsZWN0b3JTdHJpbmciLCJ1bmRlZmluZWQiLCJkZWZhdWx0TWFya2Rvd25TdHlsZUVsZW1lbnQiLCJNYXJrZG93blN0eWxlRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7K0RBRlk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSw0Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCQyxzQkFBc0IsR0FBRztnQkFFL0MsSUFBSSxDQUFDQyxNQUFNLENBQUNGO1lBQ2Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxLQUFLLEVBQUVDLGNBQWM7Z0JBQzdDLElBQUlBLG1CQUFtQkMsV0FBVztvQkFDaENELGlCQUFpQkQsT0FBTyxHQUFHO29CQUUzQkEsUUFYZU4sNkJBV3VCLEdBQUc7Z0JBQzNDO2dCQUVBLElBQU1TLDhCQUE4QkgsTUFBTUQsa0JBQWtCLENBZDNDTCw2QkFjeUVPO2dCQUUxRkUsNEJBQTRCUixLQUFLO2dCQUVqQyxPQUFPUTtZQUNUOzs7V0FuQm1CVDtFQUFvQ1UsaUJBQW9CO0FBc0I3RSxJQUFNUCx1QkFBd0IifQ==