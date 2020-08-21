(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/qing-f-c/regionalManager/customer-admin"],{

/***/ 610:
/*!*************************************************************************************************************!*\
  !*** /Users/lee/Downloads/备份11/轻纺车网/main.js?{"page":"pages%2Fqing-f-c%2FregionalManager%2Fcustomer-admin"} ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _customerAdmin = _interopRequireDefault(__webpack_require__(/*! ./pages/qing-f-c/regionalManager/customer-admin.vue */ 611));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_customerAdmin.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 611:
/*!****************************************************************************************!*\
  !*** /Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/regionalManager/customer-admin.vue ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customer_admin_vue_vue_type_template_id_2c15668d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-admin.vue?vue&type=template&id=2c15668d& */ 612);
/* harmony import */ var _customer_admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-admin.vue?vue&type=script&lang=js& */ 614);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _customer_admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _customer_admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _customer_admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-admin.vue?vue&type=style&index=0&lang=css& */ 616);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _customer_admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _customer_admin_vue_vue_type_template_id_2c15668d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _customer_admin_vue_vue_type_template_id_2c15668d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _customer_admin_vue_vue_type_template_id_2c15668d___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/regionalManager/customer-admin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 612:
/*!***********************************************************************************************************************!*\
  !*** /Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/regionalManager/customer-admin.vue?vue&type=template&id=2c15668d& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_admin_vue_vue_type_template_id_2c15668d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./customer-admin.vue?vue&type=template&id=2c15668d& */ 613);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_admin_vue_vue_type_template_id_2c15668d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_admin_vue_vue_type_template_id_2c15668d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_admin_vue_vue_type_template_id_2c15668d___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_admin_vue_vue_type_template_id_2c15668d___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 613:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/regionalManager/customer-admin.vue?vue&type=template&id=2c15668d& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 614:
/*!*****************************************************************************************************************!*\
  !*** /Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/regionalManager/customer-admin.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./customer-admin.vue?vue&type=script&lang=js& */ 615);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 615:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/regionalManager/customer-admin.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 20));var _components$data$onRe;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var dropMenuRegion = function dropMenuRegion() {__webpack_require__.e(/*! require.ensure | components/dropMenuRegion */ "components/dropMenuRegion").then((function () {return resolve(__webpack_require__(/*! @/components/dropMenuRegion.vue */ 1983));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var dropMenuDeputy = function dropMenuDeputy() {__webpack_require__.e(/*! require.ensure | components/dropMenuDeputy */ "components/dropMenuDeputy").then((function () {return resolve(__webpack_require__(/*! @/components/dropMenuDeputy.vue */ 1990));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var dropMenuLevel = function dropMenuLevel() {__webpack_require__.e(/*! require.ensure | components/dropMenuLevel */ "components/dropMenuLevel").then((function () {return resolve(__webpack_require__(/*! @/components/dropMenuLevel.vue */ 1997));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniIcon = function uniIcon() {__webpack_require__.e(/*! require.ensure | components/uni-icons/uni-icons */ "components/uni-icons/uni-icons").then((function () {return resolve(__webpack_require__(/*! @/components/uni-icons/uni-icons.vue */ 136));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniLoadMore = function uniLoadMore() {__webpack_require__.e(/*! require.ensure | components/uni-load-more/uni-load-more */ "components/uni-load-more/uni-load-more").then((function () {return resolve(__webpack_require__(/*! @/components/uni-load-more/uni-load-more.vue */ 1469));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};
























































































































































var pageSize = 20;
var _this, _postCode, _regionCode, timer;
var JsyServer = __webpack_require__(/*! @/services/jsy-server.js */ 42);var _default = (_components$data$onRe = {


  components: {
    uniIcon: uniIcon,
    uniLoadMore: uniLoadMore,
    dropMenuRegion: dropMenuRegion,
    dropMenuDeputy: dropMenuDeputy,
    dropMenuLevel: dropMenuLevel },

  data: function data() {
    return {
      showAllocation: false,
      regionList: [],
      tabTwo: 0,
      compileing: false,
      allPitchOn: false,
      //是否全部选中
      inputValueOne: '',
      setOver: false,
      //返回该页是否刷新
      selectContent: [],
      bindSelect: false,
      //是否点开搜素类别
      loadingType: 'more',
      loading: false,
      numOne: 0,
      numTwo: 0,
      numThree: 0,
      customerList: [],
      isFilterBuyer: false,
      isFilterSeller: false,
      pageNum: 1, //当前页
      buyOrSell: -1, //-1全部，1买家，2卖家
      isAllocation: -1, //-1全部，1已分配，0未分配
      isLastPage: false, //是否最后一页面
      codeValue: [],
      isDoRefresh: false,
      totalPage: '',
      userCode: '',
      privateLevel: '',
      companyLevel: '',
      regionCode: '',
      postCode: '',
      totalCount: '' };

  },

  onReachBottom: function onReachBottom() {
    if (timer != null) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      _this.getMoreCustomer();
    }, 1000);



  },
  onPullDownRefresh: function onPullDownRefresh() {
    _this.getCustomerList();

  },
  onShow: function onShow() {

    //  let pages = getCurrentPages();
    //  let currPage = pages[pages.length-1];
    //  if (currPage.data.isDoRefresh == true){
    // currPage.data.isDoRefresh = false;
    // this.pageNum =1
    // this.getCustomerList();
    // this.dmCount()
    // 	 }
    this.getCustomerList();
  },
  onLoad: function onLoad(options) {
    _this = this;
    this.postCode = uni.getStorageSync('pupDefault');
    this.regionCode = this.$store.state.regionCode;
    this.getRegionCode();
    if (this.checkLogin()) {
      this.getCustomerList();
      //this.getRegionCode()
      //this.dmCount()
      //获取职位

    }
  },
  onNavigationBarButtonTap: function onNavigationBarButtonTap(val) {
    // if (this.tabTwo>0) {
    // this.tapCompile() 
    // }
    this.tapCompile();

  } }, _defineProperty(_components$data$onRe, "components",
{}), _defineProperty(_components$data$onRe, "props",
{}), _defineProperty(_components$data$onRe, "methods",
{
  getRegionCode: function getRegionCode() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (

                _this2.$http.get('/cm/region_deputy'));case 2:res = _context.sent;
              _this2.regionList = res.data.data.list;
              _this2.tapRegion(_this2.regionCode);
              console.log(res);case 6:case "end":return _context.stop();}}}, _callee);}))();
  },
  tapRegion: function tapRegion(e) {var _this3 = this;
    console.log(e);

    this.regionList.forEach(function (item, index) {
      if (item.regionCode == e) {
        _this3.$refs.refDeputy.selectContent = _this3.regionList[index].list;
        if (_this3.regionList[index].list.length > 6) {
          _this3.$refs.refDeputy.index = 2;
        } else {
          _this3.$refs.refDeputy.index = 1;
        }
      }
    });


  },
  tapSelectLevel: function tapSelectLevel(e) {
    console.log(e);
    this.companyLevel = e;
    this.pageNum = 1;
    this.loadingType = 'more';
    this.getCustomerList();
  },
  tapSelectDeputy: function tapSelectDeputy(e) {
    console.log(e);
    this.userCode = e;
    this.pageNum = 1;
    this.loadingType = 'more';
    this.getCustomerList();
  },
  getMoreCustomer: function getMoreCustomer() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var _data, res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:if (!(

              _this.loadingType !== 'more')) {_context2.next = 2;break;}return _context2.abrupt("return",
              false);case 2:

              _this.loadingType = 'loading';
              uni.showNavigationBarLoading(); //显示加载动画

              _data = {
                keyword: _this.inputValueOne, //搜索关键字
                regionCode: _this.regionCode, //区域编码，空为全部区域
                // buyOrSell: _this.buyOrSell,			//-1全部，0未知，1买家，2卖家
                isAllocation: _this.isAllocation, //-1全部，1已分配，0未分配
                pageNum: _this.pageNum, //当前页
                pageSize: pageSize, // 页面大小
                postCode: _this4.postCode,
                userCode: _this4.userCode, //用户编码&
                companyLevel: _this4.companyLevel, //客户等级&
                privateLevel: _this4.privateLevel //私有等级&
              };_context2.next = 7;return (


                _this4.$http.get('/cm/list', { data: _data }));case 7:res = _context2.sent;if (!(
              res.data.data.list.length == 0)) {_context2.next = 13;break;} //没有数据
              console.log("no data");
              _this.loadingType = '';
              uni.hideNavigationBarLoading(); //关闭加载动画
              return _context2.abrupt("return");case 13:

              _this.pageNum++; //每触底一次 page +1
              console.log(res);
              _this.customerList = _this.customerList.concat(res.data.data.list);
              _this.loadingType = 'more'; //将loadingType归0重置
              uni.hideNavigationBarLoading(); //关闭加载动画
            case 18:case "end":return _context2.stop();}}}, _callee2);}))();

  },
  getCustomerList: function getCustomerList() {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var _data, res, __data;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
              _this.pageNum = 1;
              _this.loadingType = 'more';
              uni.showNavigationBarLoading();
              _data = {
                keyword: _this.inputValueOne, //搜索关键字
                regionCode: _this.regionCode, //区域编码，空为全部区域
                // buyOrSell: _this.buyOrSell,			//-1全部，0未知，1买家，2卖家
                isAllocation: _this.isAllocation, //-1全部，1已分配，0未分配
                pageNum: _this.pageNum, //当前页
                pageSize: pageSize, // 页面大小
                postCode: _this5.postCode,
                userCode: _this5.userCode, //用户编码&
                companyLevel: _this5.companyLevel, //客户等级&
                privateLevel: _this5.privateLevel //私有等级&
              };

              console.log('客户请求参数', _data);_context3.next = 7;return (
                _this5.$http.get('/cm/list', { data: _data }));case 7:res = _context3.sent;

              console.log("客户信息===", res);
              _this.pageNum++; //每触底一次 page +1
              _this.customerList = res.data.data.list;
              _this5.totalCount = res.data.data.totalCount;
              _this.isLastPage = res.data.data.isLastPage;
              _this.totalPage = res.data.data.totalPage;


              __data = {
                keyword: _this.inputValueOne, //关键词
                regionCode: _this5.regionCode, //区域编码
                buyOrSell: _this.buyOrSell, //买卖家
                postCode: _this5.postCode };

              JsyServer.dmCount(__data).then(function (res) {
                console.log("客户数量===", res);
                _this.numOne = res.data.data.all;
                _this.numTwo = res.data.data.isAllocation;
                _this.numThree = res.data.data.notAllocation;
              }).catch(function (err) {
                console.log("getBSList=err==", res);
              });
              _this.loadingType = 'more'; //将loadingType归0重置
              uni.hideNavigationBarLoading(); //关闭加载动画
            case 18:case "end":return _context3.stop();}}}, _callee3);}))();},


  checkboxChange: function checkboxChange(e) {

    this.codeValue = e.detail.value;


  },
  tabAllPitchOn: function tabAllPitchOn() {
    this.allPitchOn = !this.allPitchOn;
    console.log('quanxuankuang', this.allPitchOn);
    var temp = [];
    if (this.allPitchOn) {

      this.customerList.forEach(function (item) {
        temp.push(item.companyCode);
      });
      _this.codeValue = temp;
    } else {
      _this.codeValue = [];
    }

  },
  blurInput: function blurInput(e) {
    console.log(this.inputValueOne, e.detail.value);

    //     if (this.tabOne == 0) {
    //       // this.setData({
    //       //   inputValueOne: e.detail.value
    //       // });
    // this.inputValue = e.detail.value
    //     } else {
    //       this.inputValue = e.detail.value
    //     }
  },
  tapBuyFilter: function tapBuyFilter(e) {
    this.buyOrSell = 1;
    this.isFilterBuyer = true;
    this.isFilterSeller = false;
    var regionCode;
    if (this.selectContent[0].id == 0) {
      regionCode = '';
    } else {
      regionCode = this.selectContent[0].id;
    }
    this.getCustomerList(this.pageNum, this.isAllocation, this.buyOrSell, regionCode);


  },
  tapSellFilter: function tapSellFilter() {
    this.buyOrSell = 2;
    this.isFilterBuyer = false;
    this.isFilterSeller = true;
    var regionCode;
    if (this.selectContent[0].id == 0) {
      regionCode = '';
    } else {
      regionCode = this.selectContent[0].id;
    }
    this.getCustomerList(this.pageNum, this.isAllocation, this.buyOrSell, regionCode);

  },
  bindSearch: function bindSearch(e) {

    // this.setData({
    //   inputValue: e.detail.value
    // });

  },
  // 点开搜索下拉选项
  bindSelectFunc: function bindSelectFunc() {
    // this.setData({
    //    bindSelect: !this.bindSelect
    // });
    this.bindSelect = !this.bindSelect;
  },

  // 点击搜索
  tapSearch: function tapSearch() {

    uni.showLoading({
      title: '搜索中...' });

    this.pageNum = 1;
    this.isAllocation = -1;
    this.buyOrSell = -1;
    this.getCustomerList();

    setTimeout(function () {
      uni.hideLoading();
    }, 1000);


  },

  setNavButton: function setNavButton(val) {
    var pages = getCurrentPages();
    var page = pages[pages.length - 1];
    var currentWebview = page.$getAppWebview();
    var titleObj = currentWebview.getStyle().titleNView;

    titleObj.buttons[0].text = val;
    currentWebview.setStyle({
      titleNView: titleObj });


  },
  tapTabTwo: function tapTabTwo(e) {
    var index = e.currentTarget.dataset.index;
    //重新请求已分配客户列表
    this.tabTwo = index;
    console.log(index);
    if (index == 0) {
      //this.customerList = this.orginalList
      // this.setNavButton("")
      this.isAllocation = -1;
      this.compileing = false;


    }
    if (index == 1) {
      // this.setNavButton("编辑") 
      //重新请求已分配客户列表
      this.isAllocation = 1;
      this.compileing = true;
      this.pageNum = 1;

    }
    if (index == 2) {
      //重新请求未分配客户列表
      // this.setNavButton("编辑") 
      this.isAllocation = 0;
      this.compileing = true;
      this.pageNum = 1;
      console.log("分配状态：", this.isAllocation);

    }
    this.getCustomerList();
  },
  // 点击编辑
  tapCompile: function tapCompile() {
    this.showAllocation = !this.showAllocation;
    // if (this.tabTwo>0){
    // 	this.compileing = true
    // }else {
    // 	this.compileing = false
    // }
    // this.compileing = false;
    // if (this.compileing){
    // 		  this.setNavButton('完成')
    // }else {
    // 		  this.setNavButton('编辑')
    // }

  },
  // 点击全部



  //设置当前时间
  setTime: function setTime() {
    var newDate = new Date();
    var month = newDate.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    var newTime = newDate.getFullYear() + '-' + month + '-' + newDate.getDate();
    // this.setData({
    //   newTime: newTime
    // });
    this.newTime = newTime;
  },
  toSingleAllo: function toSingleAllo(companyCode) {
    _this.codeValue = [];
    _this.codeValue.push(companyCode);
    this.toAllotAreaManager();
  },
  delSingleAllo: function delSingleAllo(companyCode) {

    _this.codeValue = [];
    _this.codeValue.push(companyCode);
    this.deleteAllot();
  },

  // 跳转到选中区域经理页
  toAllotAreaManager: function toAllotAreaManager() {var _this6 = this;


    var optionList = _this.codeValue;
    var _temp = [];
    _this.codeValue.forEach(function (s) {
      _this6.customerList.forEach(function (item) {
        if (item.companyCode == s) {
          _temp.push(item.buyOrSell);
        }
      });
    });

    if (_temp.includes(1) && _temp.includes(2)) {
      uni.showToast({
        title: '不能同时选择买家和卖家',
        icon: 'none' });

      return;
    }

    var buyOrSell = optionList;
    console.log("optionList===", optionList.length);
    if (optionList.length > 0) {
      optionList = JSON.stringify(optionList);
      uni.navigateTo({
        url: '/pages/qing-f-c/regionalManager/deputy-list?optionList=' + optionList + '&buyOrSell=' + _temp[0]
        // url: '/pages/qing-f-c/sales_director/deputy-list?optionList=' + optionList + '&type=1'
      });
    } else {
      uni.showToast({
        title: '至少选择一个客户',
        icon: 'none' });

    }
  },

  deleteAllot: function deleteAllot() {var _this7 = this;
    uni.showModal({
      title: '移除分配',
      content: '确认要移除该分配吗？不要请返回',
      showCancel: true,
      cancelText: '返回',
      confirmText: '我要移除',
      success: function success(res) {
        if (res.confirm) {
          var optionList = _this.codeValue;
          var _data = {
            companyCodes: optionList };

          var url = _this7.Api.managerDel;
          _this7.myRequest(_data, url, 'post').then(function (res) {
            console.log("区域经理删除分配", res);
            if (res.data.status == 0) {
              wx.showToast({
                title: '成功删除分配' });

              _this7.getCustomerList(_this7.pageNum, _this7.isAllocation);
            }


          }).catch(function (err) {
            console.log("getBSList=err==", res);
          });
        } else if (res.cancel) {
          return;
        }


      },
      fail: function fail() {},
      complete: function complete() {} });



  },


  // 跳转到客户详情页
  toClientDetail: function toClientDetail(e) {

    console.log(e);
    wx.navigateTo({
      url: '/pages/qing-f-c/regionalManager/customer-details?companyCode=' + e });


  }

  // 重置时间
  // bindReset: function () {
  //   this.setData({
  //     startDate: "",
  //     endDate: "",
  //     inputValue: ''
  //   });
  //   recordPage = 1;
  //   this.getRecordList();
  // },
}), _components$data$onRe);exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 616:
/*!*************************************************************************************************************************!*\
  !*** /Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/regionalManager/customer-admin.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./customer-admin.vue?vue&type=style&index=0&lang=css& */ 617);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_admin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 617:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/regionalManager/customer-admin.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[610,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/qing-f-c/regionalManager/customer-admin.js.map