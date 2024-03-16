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
            value: function fromSelectorString(selectorString) {
                var defaultMarkdownStyleElement = _markdown.default.fromSelectorString(DefaultMarkdownStyleElement, selectorString);
                defaultMarkdownStyleElement.reset();
                return defaultMarkdownStyleElement;
            }
        }
    ]);
    return DefaultMarkdownStyleElement;
}(_markdown.default);
var defaultMarkdownStyle = 'font-family: "Computer Modern Serif";\n  \nprimaryHeading {\n  font-size: 3em;\n  margin: 0.333333em 0 0.333333em 0;\n}\n\nsecondaryHeading {\n  font-size: 2em;\n  margin: 0.5em 0 0.5em 0;\n}\n\ntertiaryHeading {\n  font-size: 1.5em;\n  margin: 0.75em 0 0.75em 0;\n}\n\ntable,\norderedList,\nunorderedList,\nblockListing,\ninlineListing,\nquaternaryHeading {\n  font-size: 1em;\n  margin: 1em 0 1em 0;\n}\n\nprimaryHeading,\nsecondaryHeading,\ntertiaryHeading,\nquaternaryHeading {\n  font-weight: bold;\n}\n\norderedListItem,\nunorderedListItem {\n  margin: 0.5em 0 0.5em 0;\n}\n\ntable,\norderedList,\nunorderedList,\norderedListItem,\nunorderedListItem,\nblockListing,\ninlineListing,\nprimaryHeading,\nsecondaryHeading,\ntertiaryHeading,\nquaternaryHeading {\n  :first-child {\n    margin-top: 0;\n  }\n  \n  :last-child {\n    margin-top: 0;\n  }\n}\n\n\nblockListing,\ninlineListing {\n  font-family: "Computer Modern Typewriter";\n}\n\ntableHead {\n  border: 1px solid blackl;\n}\n\ntableBodyCell,\ntableHeadCell {\n  padding: 1em;\n}\n\nstrongText {\n  font-weight: bold;\n}\n\nemphasisedText {\n  font-style: italic;\n}\n\nstronglyEmphasisedText {\n  font-style: italic;\n  font-weight: bold;\n}\n\nfootnotesList {\n  font-size: 0.75em;\n}\n\nerror {\n  text-decoration: underline red;\n}\n';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZUVsZW1lbnQvbWFya2Rvd24vZGVmYXVsdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hcmtkb3duU3R5bGVFbGVtZW50IGZyb20gXCIuLi8uLi9zdHlsZUVsZW1lbnQvbWFya2Rvd25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdE1hcmtkb3duU3R5bGVFbGVtZW50IGV4dGVuZHMgTWFya2Rvd25TdHlsZUVsZW1lbnQge1xuICByZXNldCgpIHtcbiAgICBjb25zdCBtYXJrZG93blN0eWxlID0gZGVmYXVsdE1hcmtkb3duU3R5bGU7IC8vL1xuXG4gICAgdGhpcy51cGRhdGUobWFya2Rvd25TdHlsZSlcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VsZWN0b3JTdHJpbmcoc2VsZWN0b3JTdHJpbmcpIHtcbiAgICBjb25zdCBkZWZhdWx0TWFya2Rvd25TdHlsZUVsZW1lbnQgPSBNYXJrZG93blN0eWxlRWxlbWVudC5mcm9tU2VsZWN0b3JTdHJpbmcoRGVmYXVsdE1hcmtkb3duU3R5bGVFbGVtZW50LCBzZWxlY3RvclN0cmluZyk7XG5cbiAgICBkZWZhdWx0TWFya2Rvd25TdHlsZUVsZW1lbnQucmVzZXQoKTtcblxuICAgIHJldHVybiBkZWZhdWx0TWFya2Rvd25TdHlsZUVsZW1lbnQ7XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdE1hcmtkb3duU3R5bGUgPSBgZm9udC1mYW1pbHk6IFwiQ29tcHV0ZXIgTW9kZXJuIFNlcmlmXCI7XG4gIFxucHJpbWFyeUhlYWRpbmcge1xuICBmb250LXNpemU6IDNlbTtcbiAgbWFyZ2luOiAwLjMzMzMzM2VtIDAgMC4zMzMzMzNlbSAwO1xufVxuXG5zZWNvbmRhcnlIZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogMC41ZW0gMCAwLjVlbSAwO1xufVxuXG50ZXJ0aWFyeUhlYWRpbmcge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW46IDAuNzVlbSAwIDAuNzVlbSAwO1xufVxuXG50YWJsZSxcbm9yZGVyZWRMaXN0LFxudW5vcmRlcmVkTGlzdCxcbmJsb2NrTGlzdGluZyxcbmlubGluZUxpc3RpbmcsXG5xdWF0ZXJuYXJ5SGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW46IDFlbSAwIDFlbSAwO1xufVxuXG5wcmltYXJ5SGVhZGluZyxcbnNlY29uZGFyeUhlYWRpbmcsXG50ZXJ0aWFyeUhlYWRpbmcsXG5xdWF0ZXJuYXJ5SGVhZGluZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5vcmRlcmVkTGlzdEl0ZW0sXG51bm9yZGVyZWRMaXN0SXRlbSB7XG4gIG1hcmdpbjogMC41ZW0gMCAwLjVlbSAwO1xufVxuXG50YWJsZSxcbm9yZGVyZWRMaXN0LFxudW5vcmRlcmVkTGlzdCxcbm9yZGVyZWRMaXN0SXRlbSxcbnVub3JkZXJlZExpc3RJdGVtLFxuYmxvY2tMaXN0aW5nLFxuaW5saW5lTGlzdGluZyxcbnByaW1hcnlIZWFkaW5nLFxuc2Vjb25kYXJ5SGVhZGluZyxcbnRlcnRpYXJ5SGVhZGluZyxcbnF1YXRlcm5hcnlIZWFkaW5nIHtcbiAgOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIFxuICA6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuXG5cbmJsb2NrTGlzdGluZyxcbmlubGluZUxpc3Rpbmcge1xuICBmb250LWZhbWlseTogXCJDb21wdXRlciBNb2Rlcm4gVHlwZXdyaXRlclwiO1xufVxuXG50YWJsZUhlYWQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFja2w7XG59XG5cbnRhYmxlQm9keUNlbGwsXG50YWJsZUhlYWRDZWxsIHtcbiAgcGFkZGluZzogMWVtO1xufVxuXG5zdHJvbmdUZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmVtcGhhc2lzZWRUZXh0IHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5zdHJvbmdseUVtcGhhc2lzZWRUZXh0IHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZm9vdG5vdGVzTGlzdCB7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xufVxuXG5lcnJvciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHJlZDtcbn1cbmA7XG4iXSwibmFtZXMiOlsiRGVmYXVsdE1hcmtkb3duU3R5bGVFbGVtZW50IiwicmVzZXQiLCJtYXJrZG93blN0eWxlIiwiZGVmYXVsdE1hcmtkb3duU3R5bGUiLCJ1cGRhdGUiLCJmcm9tU2VsZWN0b3JTdHJpbmciLCJzZWxlY3RvclN0cmluZyIsImRlZmF1bHRNYXJrZG93blN0eWxlRWxlbWVudCIsIk1hcmtkb3duU3R5bGVFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsrREFGWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixJQUFBLEFBQU1BLDRDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0JDLHNCQUFzQixHQUFHO2dCQUUvQyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0Y7WUFDZDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGNBQWM7Z0JBQ3RDLElBQU1DLDhCQUE4QkMsaUJBQW9CLENBQUNILGtCQUFrQixDQVIxREwsNkJBUXdGTTtnQkFFekdDLDRCQUE0Qk4sS0FBSztnQkFFakMsT0FBT007WUFDVDs7O1dBYm1CUDtFQUFvQ1EsaUJBQW9CO0FBZ0I3RSxJQUFNTCx1QkFBd0IifQ==