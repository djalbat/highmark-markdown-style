"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _index = require("./index");
var _view = /*#__PURE__*/ _interop_require_default(require("./example/view"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyles = _easywithstyle.default.renderStyles;
renderStyles();
var body = new _easy.Body(), markdownStyleElement = _index.MarkdownStyleElement.fromNothing();
body.mount(/*#__PURE__*/ React.createElement(_view.default, {
    markdownStyleElement: markdownStyleElement
}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBNYXJrZG93blN0eWxlRWxlbWVudCB9IGZyb20gXCIuL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXdcIjtcblxuY29uc3QgeyByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxucmVuZGVyU3R5bGVzKCk7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgbWFya2Rvd25TdHlsZUVsZW1lbnQgPSBNYXJrZG93blN0eWxlRWxlbWVudC5mcm9tTm90aGluZygpO1xuXG5ib2R5Lm1vdW50KFxuXG4gIDxWaWV3IG1hcmtkb3duU3R5bGVFbGVtZW50PXttYXJrZG93blN0eWxlRWxlbWVudH0gLz5cblxuKTtcbiJdLCJuYW1lcyI6WyJyZW5kZXJTdHlsZXMiLCJ3aXRoU3R5bGUiLCJib2R5IiwiQm9keSIsIm1hcmtkb3duU3R5bGVFbGVtZW50IiwiTWFya2Rvd25TdHlsZUVsZW1lbnQiLCJmcm9tTm90aGluZyIsIm1vdW50IiwiVmlldyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7UUFFTztvRUFFZTtvQkFFRDtxQkFDZ0I7MkRBRXBCOzs7Ozs7QUFFakIsSUFBTSxBQUFFQSxlQUFpQkMsc0JBQVMsQ0FBMUJEO0FBRVJBO0FBRUEsSUFBTUUsT0FBTyxJQUFJQyxVQUFJLElBQ2ZDLHVCQUF1QkMsMkJBQW9CLENBQUNDLFdBQVc7QUFFN0RKLEtBQUtLLEtBQUssZUFFUixvQkFBQ0MsYUFBSTtJQUFDSixzQkFBc0JBIn0=