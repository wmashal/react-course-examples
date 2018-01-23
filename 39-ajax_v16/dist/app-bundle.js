webpackJsonp([0],{

/***/ 8:
/*!************************!*\
  !*** multi ./main.jsx ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./main.jsx */9);


/***/ }),

/***/ 9:
/*!******************!*\
  !*** ./main.jsx ***!
  \******************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(/*! react-dom */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.search = function () {\n      var xhr = new XMLHttpRequest();\n      xhr.open('GET', 'http://omdbapi.com/?apikey=4bc20e4a&s=' + _this.state.search);\n      xhr.addEventListener('load', function () {\n        var results = JSON.parse(xhr.responseText).Search;\n        _this.setState(function (oldState) {\n          return { results: results };\n        });\n      });\n      xhr.send();\n    };\n\n    _this.setSearchText = function (e) {\n      var text = e.target.value;\n      _this.setState(function (oldState) {\n        return { search: text };\n      });\n    };\n\n    _this.state = {\n      results: [{\n        Title: \"Fargo\",\n        Year: \"1996\",\n        imdbID: \"tt0116282\",\n        Type: \"movie\",\n        Poster: \"http://ia.media-imdb.com/images/M/MV5BMTgxNzY3MzUxOV5BMl5BanBnXkFtZTcwMDA0NjMyNA@@._V1_SX300.jpg\"\n      }],\n      search: ''\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'div',\n        null,\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {\n          type: 'text',\n          onChange: this.setSearchText }),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          'button',\n          { onClick: this.search },\n          'Search'\n        ),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          'ul',\n          null,\n          this.state.results.map(function (item) {\n            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              'li',\n              { key: item.imdbID },\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                'a',\n                { href: \"http://www.imdb.com/title/\" + item.imdbID, target: '_blank' },\n                item.Title,\n                ' (',\n                item.Year,\n                ')'\n              )\n            );\n          })\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\n__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(App, null), document.querySelector('main'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWFpbi5qc3g/MjNhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZXN1bHRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBUaXRsZTogXCJGYXJnb1wiLFxuICAgICAgICAgIFllYXI6IFwiMTk5NlwiLFxuICAgICAgICAgIGltZGJJRDogXCJ0dDAxMTYyODJcIixcbiAgICAgICAgICBUeXBlOiBcIm1vdmllXCIsXG4gICAgICAgICAgUG9zdGVyOiBcImh0dHA6Ly9pYS5tZWRpYS1pbWRiLmNvbS9pbWFnZXMvTS9NVjVCTVRneE56WTNNelV4T1Y1Qk1sNUJhbkJuWGtGdFpUY3dNREEwTmpNeU5BQEAuX1YxX1NYMzAwLmpwZ1wiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBzZWFyY2g6ICcnXG4gICAgfTtcbiAgfVxuXG4gIHNlYXJjaCA9ICgpID0+IHtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4oJ0dFVCcsICdodHRwOi8vb21kYmFwaS5jb20vP2FwaWtleT00YmMyMGU0YSZzPScgKyB0aGlzLnN0YXRlLnNlYXJjaCk7XG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHRzID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KS5TZWFyY2g7ICAgICAgXG4gICAgICB0aGlzLnNldFN0YXRlKG9sZFN0YXRlID0+ICh7cmVzdWx0czogcmVzdWx0cyB9KSk7XG4gICAgfSk7XG4gICAgeGhyLnNlbmQoKTtcbiAgfTtcblxuICBzZXRTZWFyY2hUZXh0ID0gKGUpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZShvbGRTdGF0ZSA9PiAoeyBzZWFyY2g6IHRleHQgfSkpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxpbnB1dCBcbiAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2V0U2VhcmNoVGV4dH0gLz5cbiAgICAgIFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlYXJjaH0+U2VhcmNoPC9idXR0b24+XG4gICAgICBcbiAgICAgIDx1bD5cbiAgICAgICAge3RoaXMuc3RhdGUucmVzdWx0cy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpdGVtLmltZGJJRH0+XG4gICAgICAgICAgICA8YSBocmVmPXtcImh0dHA6Ly93d3cuaW1kYi5jb20vdGl0bGUvXCIgKyBpdGVtLmltZGJJRH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICB7aXRlbS5UaXRsZX0gKHtpdGVtLlllYXJ9KVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9tYWluLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpCQTtBQTJCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUE1QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBVkE7QUFGQTtBQWNBO0FBQ0E7OztBQWdCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQURBO0FBREE7QUFQQTtBQWlCQTs7OztBQWxEQTtBQUNBO0FBb0RBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ })

},[8]);