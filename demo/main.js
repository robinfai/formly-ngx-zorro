(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"submit(model)\">\n  <formly-form [form]=\"form\" [fields]=\"fields\" [model]=\"model\">\n    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n  </formly-form>\n</form>\n<pre>{{model|json}}</pre>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'example';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.model = {
            email: 'email@gmail.com',
        };
        this.nodes = [
            new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTreeNode"]({
                title: 'root1',
                key: '1001',
                children: [
                    {
                        title: 'child1',
                        key: '10001',
                        children: [
                            {
                                title: 'child1.1',
                                key: '100011',
                                children: []
                            },
                            {
                                title: 'child1.2',
                                key: '100012',
                                children: [
                                    {
                                        title: 'grandchild1.2.1',
                                        key: '1000121',
                                        isLeaf: true,
                                        disabled: true
                                    },
                                    {
                                        title: 'grandchild1.2.2',
                                        key: '1000122',
                                        isLeaf: true
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }),
            new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTreeNode"]({
                title: 'root2',
                key: '1002',
                children: [
                    {
                        title: 'child2.1',
                        key: '10021',
                        children: [],
                        disableCheckbox: true
                    },
                    {
                        title: 'child2.2',
                        key: '10022',
                        children: [
                            {
                                title: 'grandchild2.2.1',
                                key: '100221',
                                isLeaf: true
                            }
                        ]
                    }
                ]
            })
        ];
        this.fields = [
            {
                key: 'input',
                type: 'input',
                templateOptions: {
                    label: 'input',
                    required: true,
                }
            },
            {
                key: 'autocomplete',
                type: 'autocomplete',
                templateOptions: {
                    label: 'autocomplete',
                    options: [
                        {
                            'label': '1232',
                            'value': '1232',
                        },
                    ],
                    required: true,
                }
            },
            {
                key: 'cascader',
                type: 'cascader',
                templateOptions: {
                    label: 'cascader',
                    options: [{
                            value: 'zhejiang',
                            label: 'Zhejiang',
                            children: [{
                                    value: 'hangzhou',
                                    label: 'Hangzhou',
                                    children: [{
                                            value: 'xihu',
                                            label: 'West Lake',
                                            isLeaf: true
                                        }]
                                }, {
                                    value: 'ningbo',
                                    label: 'Ningbo',
                                    isLeaf: true
                                }]
                        }, {
                            value: 'jiangsu',
                            label: 'Jiangsu',
                            children: [{
                                    value: 'nanjing',
                                    label: 'Nanjing',
                                    children: [{
                                            value: 'zhonghuamen',
                                            label: 'Zhong Hua Men',
                                            isLeaf: true
                                        }]
                                }]
                        }],
                    required: true,
                }
            },
            {
                key: 'checkbox',
                type: 'checkbox',
                templateOptions: {
                    label: 'checkbox',
                    options: [
                        { label: 'Apple', value: 'Apple' },
                        { label: 'Pear', value: 'Pear' },
                        { label: 'Orange', value: 'Orange' }
                    ],
                    required: true,
                }
            },
            {
                key: 'radio',
                type: 'radio',
                templateOptions: {
                    label: 'radio',
                    options: [
                        { label: 'Apple', value: 'Apple' },
                        { label: 'Pear', value: 'Pear' },
                        { label: 'Orange', value: 'Orange' }
                    ],
                    required: true,
                }
            },
            {
                key: 'date-picker',
                type: 'date-picker',
                templateOptions: {
                    label: 'date-picker',
                    required: true,
                    showTime: true
                }
            },
            {
                key: 'date-picker',
                type: 'date-picker',
                templateOptions: {
                    label: 'date-picker no time',
                    required: true,
                    showTime: false
                }
            },
            {
                key: 'number',
                type: 'number',
                templateOptions: {
                    label: 'number',
                    required: true,
                }
            },
            {
                key: 'rate',
                type: 'rate',
                templateOptions: {
                    label: 'rate',
                    required: true,
                }
            },
            {
                key: 'select',
                type: 'select',
                templateOptions: {
                    label: 'select',
                    required: true,
                    options: [
                        { label: 'Apple', value: 'Apple' },
                        { label: 'Pear', value: 'Pear' },
                        { label: 'Orange', value: 'Orange' }
                    ]
                }
            },
            {
                key: 'slider',
                type: 'slider',
                templateOptions: {
                    label: 'slider',
                    required: true,
                }
            },
            {
                key: 'switch',
                type: 'switch',
                templateOptions: {
                    label: 'switch',
                    required: true,
                }
            },
            {
                key: 'time-picker',
                type: 'time-picker',
                templateOptions: {
                    label: 'time-picker',
                    required: true,
                }
            },
            {
                key: 'tree-select',
                type: 'tree-select',
                templateOptions: {
                    label: 'tree-select',
                    options: this.nodes,
                    checkable: true,
                    required: true,
                }
            },
        ];
    }
    AppComponent.prototype.submit = function (model) {
        console.log(model);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var formly_ngx_zorro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! formly-ngx-zorro */ "./node_modules/formly-ngx-zorro/fesm5/formly-ngx-zorro.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_7___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                formly_ngx_zorro__WEBPACK_IMPORTED_MODULE_8__["FormlyNgxZorroModule"].forRoot()
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["zh_CN"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rodriguez/PhpstormProjects/formly-ngx-zorro/example/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map