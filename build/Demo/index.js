(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	__webpack_require__(5)
	var $app_template$ = __webpack_require__(8)
	var $app_style$ = __webpack_require__(9)
	var $app_script$ = __webpack_require__(10)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(2)
	var $app_style$ = __webpack_require__(3)
	var $app_script$ = __webpack_require__(4)
	
	$app_define$('@app-component/isay', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "iqipao"
	      ],
	      "children": [
	        {
	          "type": "slot",
	          "attr": {}
	        }
	      ]
	    },
	    {
	      "type": "image",
	      "attr": {
	        "src": "../Common/user.png"
	      },
	      "classList": [
	        "icon"
	      ]
	    }
	  ]
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  ".container": {
	    "width": "100%",
	    "marginTop": "20px",
	    "marginBottom": "20px",
	    "justifyContent": "flex-end"
	  },
	  ".iqipao": {
	    "width": "40%",
	    "backgroundColor": "#03a9f4",
	    "borderRadius": "10px",
	    "paddingTop": "5px",
	    "paddingRight": "5px",
	    "paddingBottom": "8px",
	    "paddingLeft": "8px"
	  },
	  ".icon": {
	    "marginLeft": "10px",
	    "width": "10%"
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: {}
	};}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(6)
	var $app_style$ = __webpack_require__(7)
	
	$app_define$('@app-component/shesay', [], function($app_require$, $app_exports$, $app_module$){
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        "src": "../Common/robot.png"
	      },
	      "classList": [
	        "icon"
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "iqipao"
	      ],
	      "children": [
	        {
	          "type": "slot",
	          "attr": {}
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	  ".container": {
	    "width": "100%",
	    "marginTop": "20px",
	    "marginBottom": "20px",
	    "justifyContent": "flex-start"
	  },
	  ".iqipao": {
	    "width": "40%",
	    "backgroundColor": "#03a9f4",
	    "borderRadius": "10px",
	    "paddingTop": "5px",
	    "paddingRight": "5px",
	    "paddingBottom": "8px",
	    "paddingLeft": "8px"
	  },
	  ".icon": {
	    "marginRight": "10px",
	    "width": "10%"
	  }
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "demo-page"
	  ],
	  "children": [
	    {
	      "type": "list",
	      "attr": {
	        "id": "pagelist"
	      },
	      "id": "pagelist",
	      "children": [
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "dialog_l",
	            "id": "pagelist-item"
	          },
	          "id": "pagelist-item",
	          "children": [
	            {
	              "type": "shesay",
	              "attr": {},
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "小主人好！我是机器人小i"
	                  },
	                  "classList": [
	                    "text"
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "block",
	          "attr": {},
	          "repeat": {
	            "exp": function () {return this.dialoguelist},
	            "value": "value"
	          },
	          "children": [
	            {
	              "type": "list-item",
	              "attr": {
	                "type": "dialog_r",
	                "id": "pagelist-item"
	              },
	              "id": "pagelist-item",
	              "children": [
	                {
	                  "type": "isay",
	                  "attr": {},
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.value.isay}
	                      },
	                      "classList": [
	                        "text"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "list-item",
	              "attr": {
	                "type": "dialog_l"
	              },
	              "children": [
	                {
	                  "type": "shesay",
	                  "attr": {},
	                  "shown": function () {return this.value.shesay},
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.value.shesay}
	                      },
	                      "classList": [
	                        "text"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "bottom-bar"
	      ],
	      "children": [
	        {
	          "type": "input",
	          "attr": {
	            "type": "text",
	            "id": "input-bar",
	            "placeholder": "input some text",
	            "value": function () {return this.inputdata}
	          },
	          "id": "input-bar",
	          "events": {
	            "change": "inputChanged"
	          }
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "sendbutton"
	          ],
	          "events": {
	            "click": "requestdata"
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "../Common/send.png",
	                "id": "sendimg"
	              },
	              "id": "sendimg"
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	  ".demo-page": {
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  ".tab-bar": {
	    "backgroundColor": "#03a9f4",
	    "top": "0px",
	    "height": "120px",
	    "width": "100%"
	  },
	  ".bottom-bar": {
	    "position": "fixed",
	    "bottom": "0px",
	    "height": "100px",
	    "width": "100%",
	    "backgroundColor": "#f0f3f6"
	  },
	  ".text": {
	    "color": "#f0f3f6"
	  },
	  "#input-bar": {
	    "marginLeft": "20px",
	    "height": "100%",
	    "width": "75%"
	  },
	  ".sendbutton": {
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": "100%",
	    "width": "25%"
	  },
	  "#sendimg": {
	    "height": "50%"
	  },
	  "#return-content": {
	    "height": "50px",
	    "width": "100%",
	    "backgroundColor": "#00FFFF"
	  },
	  "#pagelist-item": {
	    "width": "100%"
	  },
	  "#pagelist": {
	    "width": "100%",
	    "marginBottom": "100px"
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.fetch');
	
	var _system4 = _interopRequireDefault(_system3);
	
	var _system5 = $app_require$('@app-module/system.prompt');
	
	var _system6 = _interopRequireDefault(_system5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: {
	    inputdata: '',
	    dialoguelist: [],
	    dialogindex: 0
	  },
	
	  onMenuPress: function onMenuPress() {
	    this.$app.showMenu();
	  },
	  inputChanged: function inputChanged(input) {
	    this.inputdata = input.value;
	  },
	  requestdata: function requestdata() {
	    var self = this;
	    var input_bar = self.$element('input-bar');
	    var formdata = {
	      key: "278d857fc8cd48419ceb23f70013867a",
	      loc: "",
	      info: self.inputdata,
	      userid: "808675"
	    };
	    var newdata = { isay: self.inputdata, shesay: "" };
	    self.dialoguelist.push(newdata);
	    self.dialogindex++;
	    _system4.default.fetch({
	      url: "http://www.tuling123.com/openapi/api",
	      method: "POST",
	      data: formdata,
	      success: function success(data) {
	        self.dialoguelist[self.dialoguelist.length - 1].shesay = JSON.parse(data.data).text;
	      },
	      fail: function fail(data, code) {
	        console.log("handling fail, code=" + code);
	      }
	    });
	    self.inputdata = new String("");
	    self.dialogindex++;
	    self.$element('pagelist').scrollTo({
	      index: 0
	    });
	
	    console.log(self.dialogindex);
	  }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map