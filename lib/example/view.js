"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _occamparsers = require("occam-parsers");
var _easylayout = require("easy-layout");
var _index = require("../index");
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _bnf = /*#__PURE__*/ _interop_require_default(require("./view/textarea/bnf"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/textarea/css"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _parseTree = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/textarea/markdownStyle"));
var _lexicalEntries = /*#__PURE__*/ _interop_require_default(require("./view/textarea/lexicalEntries"));
var _constants = require("./constants");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var bnf = _index.MarkdownStyleParser.bnf, entries = _index.MarkdownStyleLexer.entries, rulesFromBNF = _occamparsers.parserUtilities.rulesFromBNF;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "keyUpHandler", function(event, element) {
            _this.update();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "update",
            value: function update() {
                var bnf = this.getBNF(), markdownStyle = this.getMarkdownStyle(), lexicalEntries = this.getLexicalEntries();
                var rules = rulesFromBNF(bnf), lexer = lexerFromLexicalEntries(lexicalEntries), parser = parserFromRules(rules), content = markdownStyle; ///
                var tokens = lexer.tokenise(content), node = parser.parse(tokens);
                var css = _constants.EMPTY_STRING, parseTree = null;
                if (node !== null) {
                    var markdownStyle1 = _index.MarkdownStyle.fromNodeAndTokens(node, tokens);
                    css = markdownStyle1.asCSS();
                    parseTree = node.asParseTree(tokens);
                }
                this.setCSS(css);
                this.setParseTree(parseTree);
            }
        },
        {
            key: "getMarkdownStyleElement",
            value: function getMarkdownStyleElement() {
                var markdownStyleElement = this.properties.markdownStyleElement;
                return markdownStyleElement;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
                    onKeyUp: this.keyUpHandler
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                    onKeyUp: this.keyUpHandler
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null)), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "CSS"), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Markdown style"), /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                    onKeyUp: this.keyUpHandler
                }))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var initialMarkdownStyle = this.constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, lexicalEntries = entries; ///
                this.setBNF(bnf);
                this.setMarkdownStyle(markdownStyle);
                this.setLexicalEntries(lexicalEntries);
                this.update();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialMarkdownStyle", "paragraph {\n  :first-child {\n    padding: 0;  \n  }\n}\n");
_define_property(View, "_initialMarkdownStyle", 'margin: 1em;\nfont-family: "Computer Modern Serif";  \n\nprimaryHeading,\nsecondaryHeading,\ntertiaryHeading,\nquaternaryHeading {\n  font-weight: bold;\n}\n\nprimaryHeading {\n  font-size: 3em;\n  margin: 0.333333em 0 0.333333em 0;\n}\n\nsecondaryHeading {\n  font-size: 2em;\n  margin: 0.5em 0 0.5em 0;\n}\n\ntertiaryHeading {\n  font-size: 1.5em;\n  margin: 0.666666em 0 0.666666em 0;\n}\n\ntable,\nparagraph,\nblockListing,\norderedList,\nunorderedList,\nquaternaryHeading {\n  font-size: 1em;\n  margin: 1em 0 1em 0;\n}\n\norderedListItem,\nunorderedListItem {\n  margin: 0.5em 0 0.5em 0;\n}\n\ntable,\nparagraph,\nblockListing,\norderedList,\nunorderedList,\norderedListItem,\nunorderedListItem,\nprimaryHeading,\nsecondaryHeading,\ntertiaryHeading,\nquaternaryHeading {\n  :first-child {\n    margin-top: 0;\n  }\n}\n');
_define_property(View, "__initialMarkdownStyle", '\n \n  p:last-child,\n  h1:last-child,\n  h2:last-child,\n  h3:last-child,\n  ol:last-child,\n  ul:last-child,\n  li:last-child,\n  pre:not(.inline):last-child,\n  table:last-child {\n    margin-bottom: 0;\n  }\n  \n  ol,\n  ul {\n    margin-left: 1em;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  a:hover {\n    text-decoration: underline;\n  }\n\n  a.link {\n    font-size: 0.666666em;\n    font-weight: bold;\n    vertical-align: super;\n  }\n\n  li.footnote p {\n    margin: 0;\n  }\n\n  pre {\n    color: white;\n    background-color: black;\n    font-family: "Computer Modern Typewriter";\n  }\n\n  pre:not(.inline) {\n    padding: 1em;\n  }\n\n  pre.inline {\n    font-size: 1em;\n    padding: 0.25em;\n    display: inline;\n  }\n\n  table {\n    border-bottom: 1px solid black;\n    border-collapse: collapse;\n  }\n\n  table th,\n  table td {\n    padding: 1em;\n    text-align: right;\n  }\n    \n  table th {\n    font-weight: bold;\n    border-bottom: 2px solid black;\n  }\n  \n  table th:first-of-type,\n  table td:first-of-type {\n    text-align: left;\n  }\n\n  table th:not(:first-of-type),\n  table td:not(:first-of-type) {\n    padding-left: 0;\n  }\n  \n  span.error {\n    background-repeat: repeat-x;\n    background-position: bottom;\n    text-decoration-line: underline;\n    text-decoration-color: darkred;\n  }\n');
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function lexerFromLexicalEntries(lexicalEntries) {
    var entries = lexicalEntries, lexer = _index.MarkdownStyleLexer.fromEntries(entries);
    return lexer;
}
function parserFromRules(rules) {
    var parser = _index.MarkdownStyleParser.fromRules(rules); ///
    return parser;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuaW1wb3J0IHsgTWFya2Rvd25TdHlsZSwgTWFya2Rvd25TdHlsZUxleGVyLCBNYXJrZG93blN0eWxlUGFyc2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vdmlldy9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBDU1NUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2Nzc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBNYXJrZG93blN0eWxlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9tYXJrZG93blN0eWxlXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2xleGljYWxFbnRyaWVzXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGJuZiB9ID0gTWFya2Rvd25TdHlsZVBhcnNlcixcbiAgICAgIHsgZW50cmllcyB9ID0gTWFya2Rvd25TdHlsZUxleGVyLFxuICAgICAgeyBydWxlc0Zyb21CTkYgfSA9IHBhcnNlclV0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZSgpLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpO1xuXG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBsZXhlciA9IGxleGVyRnJvbUxleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKSxcbiAgICAgICAgICBwYXJzZXIgPSAgcGFyc2VyRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBjb250ZW50ID0gbWFya2Rvd25TdHlsZTsgLy8vXG5cbiAgICBjb25zdCB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBsZXQgY3NzID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1hcmtkb3duU3R5bGUgPSBNYXJrZG93blN0eWxlLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgIGNzcyA9IG1hcmtkb3duU3R5bGUuYXNDU1MoKTtcblxuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0Q1NTKGNzcyk7XG5cbiAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICB9XG5cbiAgZ2V0TWFya2Rvd25TdHlsZUVsZW1lbnQoKSB7XG4gICAgY29uc3QgeyBtYXJrZG93blN0eWxlRWxlbWVudCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVFbGVtZW50O1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIExleGljYWwgZW50cmllc1xuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIEJORlxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYS8+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdi8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ1NTXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q1NTVGV4dGFyZWEvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIE1hcmtkb3duIHN0eWxlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8TWFya2Rvd25TdHlsZVRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbE1hcmtkb3duU3R5bGUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IGluaXRpYWxNYXJrZG93blN0eWxlLCAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd25TdHlsZSA9IGBwYXJhZ3JhcGgge1xuICA6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmc6IDA7ICBcbiAgfVxufVxuYDtcblxuICBzdGF0aWMgX2luaXRpYWxNYXJrZG93blN0eWxlID0gYG1hcmdpbjogMWVtO1xuZm9udC1mYW1pbHk6IFwiQ29tcHV0ZXIgTW9kZXJuIFNlcmlmXCI7ICBcblxucHJpbWFyeUhlYWRpbmcsXG5zZWNvbmRhcnlIZWFkaW5nLFxudGVydGlhcnlIZWFkaW5nLFxucXVhdGVybmFyeUhlYWRpbmcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxucHJpbWFyeUhlYWRpbmcge1xuICBmb250LXNpemU6IDNlbTtcbiAgbWFyZ2luOiAwLjMzMzMzM2VtIDAgMC4zMzMzMzNlbSAwO1xufVxuXG5zZWNvbmRhcnlIZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogMC41ZW0gMCAwLjVlbSAwO1xufVxuXG50ZXJ0aWFyeUhlYWRpbmcge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW46IDAuNjY2NjY2ZW0gMCAwLjY2NjY2NmVtIDA7XG59XG5cbnRhYmxlLFxucGFyYWdyYXBoLFxuYmxvY2tMaXN0aW5nLFxub3JkZXJlZExpc3QsXG51bm9yZGVyZWRMaXN0LFxucXVhdGVybmFyeUhlYWRpbmcge1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luOiAxZW0gMCAxZW0gMDtcbn1cblxub3JkZXJlZExpc3RJdGVtLFxudW5vcmRlcmVkTGlzdEl0ZW0ge1xuICBtYXJnaW46IDAuNWVtIDAgMC41ZW0gMDtcbn1cblxudGFibGUsXG5wYXJhZ3JhcGgsXG5ibG9ja0xpc3RpbmcsXG5vcmRlcmVkTGlzdCxcbnVub3JkZXJlZExpc3QsXG5vcmRlcmVkTGlzdEl0ZW0sXG51bm9yZGVyZWRMaXN0SXRlbSxcbnByaW1hcnlIZWFkaW5nLFxuc2Vjb25kYXJ5SGVhZGluZyxcbnRlcnRpYXJ5SGVhZGluZyxcbnF1YXRlcm5hcnlIZWFkaW5nIHtcbiAgOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG5gO1xuXG4gIHN0YXRpYyBfX2luaXRpYWxNYXJrZG93blN0eWxlID0gYFxuIFxuICBwOmxhc3QtY2hpbGQsXG4gIGgxOmxhc3QtY2hpbGQsXG4gIGgyOmxhc3QtY2hpbGQsXG4gIGgzOmxhc3QtY2hpbGQsXG4gIG9sOmxhc3QtY2hpbGQsXG4gIHVsOmxhc3QtY2hpbGQsXG4gIGxpOmxhc3QtY2hpbGQsXG4gIHByZTpub3QoLmlubGluZSk6bGFzdC1jaGlsZCxcbiAgdGFibGU6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICBcbiAgb2wsXG4gIHVsIHtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cblxuICBhLmxpbmsge1xuICAgIGZvbnQtc2l6ZTogMC42NjY2NjZlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG4gIH1cblxuICBsaS5mb290bm90ZSBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBwcmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBmb250LWZhbWlseTogXCJDb21wdXRlciBNb2Rlcm4gVHlwZXdyaXRlclwiO1xuICB9XG5cbiAgcHJlOm5vdCguaW5saW5lKSB7XG4gICAgcGFkZGluZzogMWVtO1xuICB9XG5cbiAgcHJlLmlubGluZSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogMC4yNWVtO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuXG4gIHRhYmxlIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgfVxuXG4gIHRhYmxlIHRoLFxuICB0YWJsZSB0ZCB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG4gICAgXG4gIHRhYmxlIHRoIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gIH1cbiAgXG4gIHRhYmxlIHRoOmZpcnN0LW9mLXR5cGUsXG4gIHRhYmxlIHRkOmZpcnN0LW9mLXR5cGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICB0YWJsZSB0aDpub3QoOmZpcnN0LW9mLXR5cGUpLFxuICB0YWJsZSB0ZDpub3QoOmZpcnN0LW9mLXR5cGUpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbiAgXG4gIHNwYW4uZXJyb3Ige1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGRhcmtyZWQ7XG4gIH1cbmA7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm1hcmtkb3duU3R5bGVFbGVtZW50XCJcbiAgXVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmZ1bmN0aW9uIGxleGVyRnJvbUxleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKSB7XG4gIGNvbnN0IGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgIGxleGVyID0gTWFya2Rvd25TdHlsZUxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpO1xuXG4gIHJldHVybiBsZXhlcjtcbn1cblxuZnVuY3Rpb24gcGFyc2VyRnJvbVJ1bGVzKHJ1bGVzKSB7XG4gIGNvbnN0IHBhcnNlciA9IE1hcmtkb3duU3R5bGVQYXJzZXIuZnJvbVJ1bGVzKHJ1bGVzKTsgLy8vXG5cbiAgcmV0dXJuIHBhcnNlcjtcbn1cbiJdLCJuYW1lcyI6WyJibmYiLCJNYXJrZG93blN0eWxlUGFyc2VyIiwiZW50cmllcyIsIk1hcmtkb3duU3R5bGVMZXhlciIsInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsIlZpZXciLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ1cGRhdGUiLCJnZXRCTkYiLCJtYXJrZG93blN0eWxlIiwiZ2V0TWFya2Rvd25TdHlsZSIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJydWxlcyIsImxleGVyIiwibGV4ZXJGcm9tTGV4aWNhbEVudHJpZXMiLCJwYXJzZXIiLCJwYXJzZXJGcm9tUnVsZXMiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJwYXJzZVRyZWUiLCJNYXJrZG93blN0eWxlIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJhc0NTUyIsImFzUGFyc2VUcmVlIiwic2V0Q1NTIiwic2V0UGFyc2VUcmVlIiwiZ2V0TWFya2Rvd25TdHlsZUVsZW1lbnQiLCJtYXJrZG93blN0eWxlRWxlbWVudCIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIkxlZnRTaXplYWJsZURpdiIsIlN1YkhlYWRpbmciLCJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwib25LZXlVcCIsIkJORlRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiUm93c0RpdiIsIkNTU1RleHRhcmVhIiwiTWFya2Rvd25TdHlsZVRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsTWFya2Rvd25TdHlsZSIsImNvbnN0cnVjdG9yIiwic2V0Qk5GIiwic2V0TWFya2Rvd25TdHlsZSIsInNldExleGljYWxFbnRyaWVzIiwiRWxlbWVudCIsIl9pbml0aWFsTWFya2Rvd25TdHlsZSIsIl9faW5pdGlhbE1hcmtkb3duU3R5bGUiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImZyb21FbnRyaWVzIiwiZnJvbVJ1bGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxUkE7OztlQUFBOzs7b0VBblJzQjtvQkFFRTs0QkFDUTswQkFDb0M7cUJBQ0c7aUVBRWhEOzBEQUNDOzBEQUNBOzJEQUNJO2dFQUNFO29FQUNJO3FFQUNDO3lCQUVOOzs7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