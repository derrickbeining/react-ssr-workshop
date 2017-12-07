/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzNjNjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiP2NhNjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtcmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItY29uZmlnXCI/ZGE4NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1jb25maWdcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _HomePage = __webpack_require__(14);\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _UsersListPage = __webpack_require__(15);\n\nvar _UsersListPage2 = _interopRequireDefault(_UsersListPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [{\n  path: '/',\n  component: _HomePage2.default,\n  exact: true\n}, {\n  path: '/users',\n  component: _UsersListPage2.default,\n  loadData: _UsersListPage2.default.loadData\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUm91dGVzLmpzP2JmMGYiXSwibmFtZXMiOlsicGF0aCIsImNvbXBvbmVudCIsImV4YWN0IiwibG9hZERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlLENBQ2I7QUFDRUEsUUFBTSxHQURSO0FBRUVDLCtCQUZGO0FBR0VDLFNBQU87QUFIVCxDQURhLEVBTWI7QUFDRUYsUUFBTSxRQURSO0FBRUVDLG9DQUZGO0FBR0VFLFlBQVUsd0JBQWNBO0FBSDFCLENBTmEsQyIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIb21lUGFnZSBmcm9tICdjbGllbnQvcGFnZXMvSG9tZVBhZ2UnO1xuaW1wb3J0IFVzZXJzTGlzdFBhZ2UgZnJvbSAnY2xpZW50L3BhZ2VzL1VzZXJzTGlzdFBhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgY29tcG9uZW50OiBIb21lUGFnZSxcbiAgICBleGFjdDogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvdXNlcnMnLFxuICAgIGNvbXBvbmVudDogVXNlcnNMaXN0UGFnZSxcbiAgICBsb2FkRGF0YTogVXNlcnNMaXN0UGFnZS5sb2FkRGF0YSxcbiAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Sb3V0ZXMuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchUsers = exports.FETCH_USERS = undefined;\n\nvar _axios = __webpack_require__(5);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar FETCH_USERS = exports.FETCH_USERS = 'fetch_users';\n// ------------------------------------------------------- from thunk.withExtraArgument\n// ------------------------------------------------------- in client/index\nvar fetchUsers = exports.fetchUsers = function fetchUsers() {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, apiAxios) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _axios2.default.get('http://react-ssr-api.herokuapp.com/users');\n\n            case 2:\n              res = _context.sent;\n              return _context.abrupt('return', dispatch({\n                type: FETCH_USERS,\n                payload: res\n              }));\n\n            case 4:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined);\n    }));\n\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC5qcz8wNDIzIl0sIm5hbWVzIjpbIkZFVENIX1VTRVJTIiwiZmV0Y2hVc2VycyIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJhcGlBeGlvcyIsImdldCIsInJlcyIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRU8sSUFBTUEsb0NBQWMsYUFBcEI7QUFDUDtBQUNBO0FBQ08sSUFBTUMsa0NBQWEsU0FBYkEsVUFBYTtBQUFBO0FBQUEsdUVBQU0saUJBQU9DLFFBQVAsRUFBaUJDLFFBQWpCLEVBQTJCQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNaLGdCQUFNQyxHQUFOLENBQVUsMENBQVYsQ0FEWTs7QUFBQTtBQUN4QkMsaUJBRHdCO0FBQUEsK0NBRXZCSixTQUFTO0FBQ2RLLHNCQUFNUCxXQURRO0FBRWRRLHlCQUFTRjtBQUZLLGVBQVQsQ0FGdUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQW5CIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgRkVUQ0hfVVNFUlMgPSAnZmV0Y2hfdXNlcnMnO1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmcm9tIHRodW5rLndpdGhFeHRyYUFyZ3VtZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGluIGNsaWVudC9pbmRleFxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnMgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCBhcGlBeGlvcykgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9yZWFjdC1zc3ItYXBpLmhlcm9rdWFwcC5jb20vdXNlcnMnKTtcbiAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBGRVRDSF9VU0VSUyxcbiAgICBwYXlsb2FkOiByZXNcbiAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWN0aW9ucy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzI1MzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXhpb3NcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiPzVjOWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(8);\n\nvar _express = __webpack_require__(9);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _expressHttpProxy = __webpack_require__(10);\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _render = __webpack_require__(11);\n\nvar _render2 = _interopRequireDefault(_render);\n\nvar _reactRouterConfig = __webpack_require__(2);\n\nvar _Routes = __webpack_require__(3);\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _createStore = __webpack_require__(17);\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use('/api', (0, _expressHttpProxy2.default)('http;//react-ssr-api.herokuapp.com', {\n  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {\n    opts.headers['x-forwarded-host'] = 'localhost:3000';\n    return opts;\n  }\n}));\n\napp.use(_express2.default.static('public'));\n\napp.get('*', function (req, res) {\n  var store = (0, _createStore2.default)(req);\n  var dataLoading = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {\n    var route = _ref.route;\n\n    return route.loadData ? route.loadData(store) : null;\n  });\n\n  Promise.all(dataLoading).then(function () {\n    return res.send((0, _render2.default)(req, store));\n  });\n});\n\napp.listen(3000, function () {\n  console.log('Listenging of port 3000');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2luZGV4LmpzP2Q5YzIiXSwibmFtZXMiOlsiYXBwIiwidXNlIiwicHJveHlSZXFPcHREZWNvcmF0b3IiLCJvcHRzIiwiaGVhZGVycyIsInN0YXRpYyIsImdldCIsInJlcSIsInJlcyIsInN0b3JlIiwiZGF0YUxvYWRpbmciLCJwYXRoIiwibWFwIiwicm91dGUiLCJsb2FkRGF0YSIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwic2VuZCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsTUFBTSx3QkFBWjs7QUFFQUEsSUFBSUMsR0FBSixDQUFRLE1BQVIsRUFBZ0IsZ0NBQU0sb0NBQU4sRUFBNEM7QUFDMURDLHNCQUQwRCxnQ0FDcENDLElBRG9DLEVBQzlCO0FBQzFCQSxTQUFLQyxPQUFMLENBQWEsa0JBQWIsSUFBbUMsZ0JBQW5DO0FBQ0EsV0FBT0QsSUFBUDtBQUNEO0FBSnlELENBQTVDLENBQWhCOztBQU9BSCxJQUFJQyxHQUFKLENBQVEsa0JBQVFJLE1BQVIsQ0FBZSxRQUFmLENBQVI7O0FBRUFMLElBQUlNLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDekIsTUFBTUMsUUFBUSwyQkFBWUYsR0FBWixDQUFkO0FBQ0EsTUFBTUcsY0FBYyxzREFBb0JILElBQUlJLElBQXhCLEVBQThCQyxHQUE5QixDQUFrQyxnQkFBYTtBQUFBLFFBQVhDLEtBQVcsUUFBWEEsS0FBVzs7QUFDakUsV0FBT0EsTUFBTUMsUUFBTixHQUFpQkQsTUFBTUMsUUFBTixDQUFlTCxLQUFmLENBQWpCLEdBQXlDLElBQWhEO0FBQ0QsR0FGbUIsQ0FBcEI7O0FBSUFNLFVBQVFDLEdBQVIsQ0FBWU4sV0FBWixFQUNHTyxJQURILENBQ1E7QUFBQSxXQUFNVCxJQUFJVSxJQUFKLENBQVMsc0JBQVVYLEdBQVYsRUFBZUUsS0FBZixDQUFULENBQU47QUFBQSxHQURSO0FBRUQsQ0FSRDs7QUFXQVQsSUFBSW1CLE1BQUosQ0FBVyxJQUFYLEVBQWlCLFlBQU07QUFDckJDLFVBQVFDLEdBQVI7QUFDRCxDQUZEIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHByb3h5IGZyb20gJ2V4cHJlc3MtaHR0cC1wcm94eSc7XG5pbXBvcnQgcmVuZGVyQXBwIGZyb20gJ3NlcnZlci9yZW5kZXInO1xuaW1wb3J0IHttYXRjaFJvdXRlc30gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XG5pbXBvcnQgUm91dGVzIGZyb20gJ1JvdXRlcyc7XG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnc2VydmVyL2NyZWF0ZVN0b3JlJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKCcvYXBpJywgcHJveHkoJ2h0dHA7Ly9yZWFjdC1zc3ItYXBpLmhlcm9rdWFwcC5jb20nLCB7XG4gIHByb3h5UmVxT3B0RGVjb3JhdG9yIChvcHRzKSB7XG4gICAgb3B0cy5oZWFkZXJzWyd4LWZvcndhcmRlZC1ob3N0J10gPSAnbG9jYWxob3N0OjMwMDAnO1xuICAgIHJldHVybiBvcHRzO1xuICB9XG59KSlcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpO1xuXG5hcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVxKTtcbiAgY29uc3QgZGF0YUxvYWRpbmcgPSBtYXRjaFJvdXRlcyhSb3V0ZXMsIHJlcS5wYXRoKS5tYXAoKHtyb3V0ZX0pID0+IHtcbiAgICByZXR1cm4gcm91dGUubG9hZERhdGEgPyByb3V0ZS5sb2FkRGF0YShzdG9yZSkgOiBudWxsXG4gIH0pXG5cbiAgUHJvbWlzZS5hbGwoZGF0YUxvYWRpbmcpXG4gICAgLnRoZW4oKCkgPT4gcmVzLnNlbmQocmVuZGVyQXBwKHJlcSwgc3RvcmUpKSlcbn0pXG5cblxuYXBwLmxpc3RlbigzMDAwLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMaXN0ZW5naW5nIG9mIHBvcnQgMzAwMGApO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiP2QwZDYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/ZDJkMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLWh0dHAtcHJveHlcIj9iZmY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1odHRwLXByb3h5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzcy1odHRwLXByb3h5XCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(12);\n\nvar _reactRouterDom = __webpack_require__(13);\n\nvar _reactRedux = __webpack_require__(1);\n\nvar _reactRouterConfig = __webpack_require__(2);\n\nvar _Routes = __webpack_require__(3);\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _serializeJavascript = __webpack_require__(16);\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req, store) {\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.path, context: {} },\n      _react2.default.createElement(\n        'div',\n        null,\n        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n      )\n    )\n  ));\n  return '\\n    <html>\\n      <head></head>\\n      <body>\\n        <div id=\"root\">' + content + '</div>\\n        <script>                                          // see docs for this option\\n          window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState(), { isJSON: true }) + '\\n        </script>\\n        <script src=\"bundle.js\"></script>\\n      </body>\\n    </html>\\n  ';\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JlbmRlci5qcz9jODlmIl0sIm5hbWVzIjpbInJlcSIsInN0b3JlIiwiY29udGVudCIsInBhdGgiLCJnZXRTdGF0ZSIsImlzSlNPTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUsVUFBQ0EsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQzdCLE1BQU1DLFVBQVUsNEJBQ2Q7QUFBQTtBQUFBLE1BQVUsT0FBT0QsS0FBakI7QUFDRTtBQUFBO0FBQUEsUUFBYyxVQUFVRCxJQUFJRyxJQUE1QixFQUFrQyxTQUFTLEVBQTNDO0FBRUU7QUFBQTtBQUFBO0FBQU07QUFBTjtBQUZGO0FBREYsR0FEYyxDQUFoQjtBQVFBLHNGQUl1QkQsT0FKdkIsd0lBTWlDLG1DQUFVRCxNQUFNRyxRQUFOLEVBQVYsRUFBNEIsRUFBQ0MsUUFBUSxJQUFULEVBQTVCLENBTmpDO0FBWUQsQyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlclRvU3RyaW5nfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7U3RhdGljUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7cmVuZGVyUm91dGVzfSBmcm9tICdyZWFjdC1yb3V0ZXItY29uZmlnJztcbmltcG9ydCBSb3V0ZXMgZnJvbSAnUm91dGVzJztcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnc2VyaWFsaXplLWphdmFzY3JpcHQnO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxLCBzdG9yZSkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEucGF0aH0gY29udGV4dD17e319PlxuICAgICAgICB7LyogdGhpcyByZXBsYWNlcyB0aGUgdHlwaWNhbCA8Um91dGVzIC8+IGNvbXBvbmVudCAgKi99XG4gICAgICAgIDxkaXY+e3JlbmRlclJvdXRlcyhSb3V0ZXMpfTwvZGl2PlxuICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbiAgcmV0dXJuIGBcbiAgICA8aHRtbD5cbiAgICAgIDxoZWFkPjwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8ZGl2IGlkPVwicm9vdFwiPiR7Y29udGVudH08L2Rpdj5cbiAgICAgICAgPHNjcmlwdD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWUgZG9jcyBmb3IgdGhpcyBvcHRpb25cbiAgICAgICAgICB3aW5kb3cuSU5JVElBTF9TVEFURSA9ICR7c2VyaWFsaXplKHN0b3JlLmdldFN0YXRlKCksIHtpc0pTT046IHRydWV9KX1cbiAgICAgICAgPC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiYnVuZGxlLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICBgO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9yZW5kZXIuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCI/NDFiZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCJcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCI/MDk1NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'div',\n      null,\n      'I\\'m the homiest pages!'\n    ),\n    _react2.default.createElement(\n      'button',\n      { onClick: function onClick() {\n          return console.log('hey');\n        } },\n      'Click'\n    )\n  );\n};\n\nexports.default = Home;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL0hvbWVQYWdlLmpzP2YzZDEiXSwibmFtZXMiOlsiSG9tZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPLFNBQVBBLElBQU8sR0FBTTs7QUFFakIsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBUSxTQUFTO0FBQUEsaUJBQU1DLFFBQVFDLEdBQVIsQ0FBWSxLQUFaLENBQU47QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFGRixHQURGO0FBTUQsQ0FSRDs7a0JBVWVGLEkiLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+SSdtIHRoZSBob21pZXN0IHBhZ2VzITwvZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnaGV5Jyl9PkNsaWNrPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvcGFnZXMvSG9tZVBhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(1);\n\nvar _actions = __webpack_require__(4);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar UsersList = function (_Component) {\n  _inherits(UsersList, _Component);\n\n  function UsersList() {\n    _classCallCheck(this, UsersList);\n\n    return _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).apply(this, arguments));\n  }\n\n  _createClass(UsersList, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'Here\\'s a list of users:',\n        _react2.default.createElement(\n          'ul',\n          null,\n          this.renderUsers()\n        )\n      );\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.fetchUsers();\n    }\n  }, {\n    key: 'renderUsers',\n    value: function renderUsers() {\n      return this.props.users.map(function (user) {\n        return _react2.default.createElement(\n          'li',\n          { key: user.id },\n          user.name\n        );\n      });\n    }\n  }], [{\n    key: 'loadData',\n    value: function loadData(store) {\n      return store.dispatch((0, _actions.fetchUsers)());\n    }\n  }]);\n\n  return UsersList;\n}(_react.Component);\n\nvar mapState = function mapState(state) {\n  return { users: state.users };\n};\n\nexports.default = (0, _reactRedux.connect)(mapState, { fetchUsers: _actions.fetchUsers })(UsersList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL1VzZXJzTGlzdFBhZ2UuanM/NzRjMCJdLCJuYW1lcyI6WyJVc2Vyc0xpc3QiLCJyZW5kZXJVc2VycyIsInByb3BzIiwiZmV0Y2hVc2VycyIsInVzZXJzIiwibWFwIiwidXNlciIsImlkIiwibmFtZSIsInN0b3JlIiwiZGlzcGF0Y2giLCJtYXBTdGF0ZSIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsUzs7Ozs7Ozs7Ozs7NkJBQ007QUFDUixhQUNFO0FBQUE7QUFBQTtBQUFBO0FBRUU7QUFBQTtBQUFBO0FBQ0csZUFBS0MsV0FBTDtBQURIO0FBRkYsT0FERjtBQVFEOzs7d0NBRW9CO0FBQ25CLFdBQUtDLEtBQUwsQ0FBV0MsVUFBWDtBQUNEOzs7a0NBRWM7QUFDYixhQUFPLEtBQUtELEtBQUwsQ0FBV0UsS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUIsZ0JBQVE7QUFDbEMsZUFBTztBQUFBO0FBQUEsWUFBSSxLQUFLQyxLQUFLQyxFQUFkO0FBQW1CRCxlQUFLRTtBQUF4QixTQUFQO0FBQ0QsT0FGTSxDQUFQO0FBR0Q7Ozs2QkFFZ0JDLEssRUFBTztBQUN0QixhQUFPQSxNQUFNQyxRQUFOLENBQWUsMEJBQWYsQ0FBUDtBQUNEOzs7Ozs7QUFJSCxJQUFNQyxXQUFXLFNBQVhBLFFBQVc7QUFBQSxTQUFVLEVBQUNQLE9BQU9RLE1BQU1SLEtBQWQsRUFBVjtBQUFBLENBQWpCOztrQkFFZSx5QkFBUU8sUUFBUixFQUFrQixFQUFDUiwrQkFBRCxFQUFsQixFQUFnQ0gsU0FBaEMsQyIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7ZmV0Y2hVc2Vyc30gZnJvbSAnYWN0aW9ucyc7XG5cbmNsYXNzIFVzZXJzTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIEhlcmUncyBhIGxpc3Qgb2YgdXNlcnM6XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJVc2VycygpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hVc2VycygpO1xuICB9XG5cbiAgcmVuZGVyVXNlcnMgKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnVzZXJzLm1hcCh1c2VyID0+IHtcbiAgICAgIHJldHVybiA8bGkga2V5PXt1c2VyLmlkfT57dXNlci5uYW1lfTwvbGk+XG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBsb2FkRGF0YSAoc3RvcmUpIHtcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2hVc2VycygpKTtcbiAgfVxuXG59XG5cbmNvbnN0IG1hcFN0YXRlID0gc3RhdGUgPT4gKHt1c2Vyczogc3RhdGUudXNlcnN9KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwge2ZldGNoVXNlcnN9KShVc2Vyc0xpc3QpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9wYWdlcy9Vc2Vyc0xpc3RQYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiPzViZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(6);\n\nvar _reduxThunk = __webpack_require__(18);\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reducers = __webpack_require__(19);\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _axios = __webpack_require__(5);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req) {\n  var customAxios = _axios2.default.create({\n    baseURL: 'http://react-ssr-api.herokuapp.com',\n    headers: { cookie: req.get('cookie') || '' }\n  });\n\n  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(customAxios)));\n\n  return store;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2NyZWF0ZVN0b3JlLmpzP2UxNGYiXSwibmFtZXMiOlsicmVxIiwiY3VzdG9tQXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsImNvb2tpZSIsImdldCIsInN0b3JlIiwid2l0aEV4dHJhQXJndW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlLFVBQUNBLEdBQUQsRUFBUztBQUN0QixNQUFNQyxjQUFjLGdCQUFNQyxNQUFOLENBQWE7QUFDL0JDLGFBQVMsb0NBRHNCO0FBRS9CQyxhQUFTLEVBQUNDLFFBQVFMLElBQUlNLEdBQUosQ0FBUSxRQUFSLEtBQXFCLEVBQTlCO0FBRnNCLEdBQWIsQ0FBcEI7O0FBS0EsTUFBTUMsUUFBUSw0Q0FFWixFQUZZLEVBR1osNEJBQWdCLHFCQUFNQyxpQkFBTixDQUF3QlAsV0FBeEIsQ0FBaEIsQ0FIWSxDQUFkOztBQU1BLFNBQU9NLEtBQVA7QUFDRCxDIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJ3JlZHVjZXJzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEpID0+IHtcbiAgY29uc3QgY3VzdG9tQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6ICdodHRwOi8vcmVhY3Qtc3NyLWFwaS5oZXJva3VhcHAuY29tJyxcbiAgICBoZWFkZXJzOiB7Y29va2llOiByZXEuZ2V0KCdjb29raWUnKSB8fCAnJ30sXG4gIH0pXG5cbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICByZWR1Y2VycyxcbiAgICB7fSxcbiAgICBhcHBseU1pZGRsZXdhcmUodGh1bmsud2l0aEV4dHJhQXJndW1lbnQoY3VzdG9tQXhpb3MpKVxuICApXG5cbiAgcmV0dXJuIHN0b3JlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9jcmVhdGVTdG9yZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzBjMjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LXRodW5rXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(6);\n\nvar _usersReducer = __webpack_require__(20);\n\nvar _usersReducer2 = _interopRequireDefault(_usersReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n  users: _usersReducer2.default\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5kZXguanM/MGExMSJdLCJuYW1lcyI6WyJ1c2VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztrQkFFZSw0QkFBZ0I7QUFDN0JBO0FBRDZCLENBQWhCLEMiLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHVzZXJzUmVkdWNlciBmcm9tICdyZWR1Y2Vycy91c2Vyc1JlZHVjZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICB1c2VyczogdXNlcnNSZWR1Y2VyLFxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _actions = __webpack_require__(4);\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _actions.FETCH_USERS:\n      return action.payload.data;\n    default:\n      return state;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvdXNlcnNSZWR1Y2VyLmpzPzFhMGUiXSwibmFtZXMiOlsic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztrQkFFZSxZQUF3QjtBQUFBLE1BQXZCQSxLQUF1Qix1RUFBZixFQUFlO0FBQUEsTUFBWEMsTUFBVzs7QUFDckMsVUFBUUEsT0FBT0MsSUFBZjtBQUNFO0FBQWtCLGFBQU9ELE9BQU9FLE9BQVAsQ0FBZUMsSUFBdEI7QUFDbEI7QUFBUyxhQUFPSixLQUFQO0FBRlg7QUFJRCxDIiwiZmlsZSI6IjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGRVRDSF9VU0VSU30gZnJvbSAnYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRkVUQ0hfVVNFUlM6IHJldHVybiBhY3Rpb24ucGF5bG9hZC5kYXRhO1xuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHVjZXJzL3VzZXJzUmVkdWNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ })
/******/ ]);