(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/qing-f-c/inquiryManage/inquiry-created"],{

/***/ 146:
/*!************************************************************************************************************!*\
  !*** /Users/lee/Downloads/备份11/轻纺车网/main.js?{"page":"pages%2Fqing-f-c%2FinquiryManage%2Finquiry-created"} ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _inquiryCreated = _interopRequireDefault(__webpack_require__(/*! ./pages/qing-f-c/inquiryManage/inquiry-created.vue */ 147));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_inquiryCreated.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 147:
/*!***************************************************************************************!*\
  !*** /Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/inquiryManage/inquiry-created.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inquiry_created_vue_vue_type_template_id_7d518f43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inquiry-created.vue?vue&type=template&id=7d518f43& */ 148);
/* harmony import */ var _inquiry_created_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inquiry-created.vue?vue&type=script&lang=js& */ 150);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _inquiry_created_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _inquiry_created_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _inquiry_created_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inquiry-created.vue?vue&type=style&index=0&lang=scss& */ 152);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _inquiry_created_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _inquiry_created_vue_vue_type_template_id_7d518f43___WEBPACK_IMPORTED_MODULE_0__["render"],
  _inquiry_created_vue_vue_type_template_id_7d518f43___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/inquiryManage/inquiry-created.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 148:
/*!**********************************************************************************************************************!*\
  !*** /Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/inquiryManage/inquiry-created.vue?vue&type=template&id=7d518f43& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inquiry_created_vue_vue_type_template_id_7d518f43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./inquiry-created.vue?vue&type=template&id=7d518f43& */ 149);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inquiry_created_vue_vue_type_template_id_7d518f43___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inquiry_created_vue_vue_type_template_id_7d518f43___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 149:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/inquiryManage/inquiry-created.vue?vue&type=template&id=7d518f43& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 150:
/*!****************************************************************************************************************!*\
  !*** /Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/inquiryManage/inquiry-created.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inquiry_created_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./inquiry-created.vue?vue&type=script&lang=js& */ 151);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inquiry_created_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inquiry_created_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inquiry_created_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inquiry_created_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inquiry_created_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 151:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/inquiryManage/inquiry-created.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var pickerButton = function pickerButton() {return __webpack_require__.e(/*! import() | components/pickerButton */ "components/pickerButton").then(__webpack_require__.bind(null, /*! @/components/pickerButton.vue */ 685));};var myPicker = function myPicker() {return __webpack_require__.e(/*! import() | components/myPicker-inquiry */ "components/myPicker-inquiry").then(__webpack_require__.bind(null, /*! @/components/myPicker-inquiry.vue */ 720));};var partCheckboxGroup = function partCheckboxGroup() {return __webpack_require__.e(/*! import() | components/partCheckboxGroup */ "components/partCheckboxGroup").then(__webpack_require__.bind(null, /*! @/components/partCheckboxGroup.vue */ 699));};var myPickerSmall = function myPickerSmall() {return __webpack_require__.e(/*! import() | components/myPickerSmall */ "components/myPickerSmall").then(__webpack_require__.bind(null, /*! @/components/myPickerSmall.vue */ 706));};var switchButton = function switchButton() {return __webpack_require__.e(/*! import() | components/switchButton-auto */ "components/switchButton-auto").then(__webpack_require__.bind(null, /*! @/components/switchButton-auto.vue */ 657));};var pickerInput = function pickerInput() {return __webpack_require__.e(/*! import() | components/pickerInput */ "components/pickerInput").then(__webpack_require__.bind(null, /*! @/components/pickerInput.vue */ 713));};var uniIcon = function uniIcon() {return __webpack_require__.e(/*! import() | components/uni-icons/uni-icons */ "components/uni-icons/uni-icons").then(__webpack_require__.bind(null, /*! @/components/uni-icons/uni-icons.vue */ 629));};var popupMe = function popupMe() {return __webpack_require__.e(/*! import() | components/popupMe */ "components/popupMe").then(__webpack_require__.bind(null, /*! @/components/popupMe.vue */ 622));};






























































































































































































































var _this;var _default =
{
  components: {
    pickerButton: pickerButton,
    myPicker: myPicker,
    partCheckboxGroup: partCheckboxGroup,
    myPickerSmall: myPickerSmall,
    switchButton: switchButton,
    pickerInput: pickerInput,
    uniIcon: uniIcon,
    popupMe: popupMe },

  data: function data() {
    return {
      clothBreadth: '', //幅宽
      tradeName: '', //品名
      content: '', //含量
      spec_longitude: '', //规格中的经纱
      spec_latitude: '', //规格中的纬纱
      organize: '', //组织
      style: '', //风格
      grammage: '', //克重
      density_latitude: '', //纬密
      density_longitude: '', //经密
      purchaseQuantity: '', //购买数量
      guamalv: '', //挂码率
      remarks: '', //备注
      inquiryType: [],
      inquiryTypeIndex: 1, //询价类型
      densityUnit: [],
      densityUnitIndex: 1, //密度单位： 条或梭
      grammageUnit: [],
      grammageUnitIndex: 1, //克重单位
      lengthUnit: [],
      lengthUnitIndex: 1, //长度单位
      productSerial: [],
      productSerialIndex: '', //产品系列
      buyer: '',
      buyerCode: '',

      styleSerial: [],
      styleSerialIndex: '', //风格类型
      styleSerialValue: '', //风格输入选择框返回内容

      qualityPosition: [],
      qualityPositionIndex: '', //品质定位

      part: [], //经成分选中label
      partID: [], //经成分选中ID
      partList: [], //经成分列表

      partListLong: [], //纬成分列表
      partLong: [], //纬成分选中label
      partLongID: [], //纬成分选中ID

      sampleType: [], //布样类型
      sampleTypeIndex: 1,

      newPartText: '', //新增经成分
      newPartLongText: '', //新增纬成分

      styleCode: '',
      pictures: [], //上传图片数组
      tempFiles: [] };


  },
  onLoad: function onLoad() {
    _this = this;
    console.log(this.Api.getChannel);

    this.getAllSelect();
  },
  methods: {
    selectBuyer: function selectBuyer() {
      uni.navigateTo({
        url: '/pages/qing-f-c/inquiryManage/selectBuyer',
        success: function success(res) {},
        fail: function fail() {},
        complete: function complete() {} });

    },
    test: function test() {
      var url = 'http://show.jkfb.net.cn:8080/aiwc-show/show/city?cityCode=yuyao';
      var data = {};
      this.myRequest(data, url, 'get').then(function (res) {
        console.log(res);
      }).catch(function (err) {
        wx.showToast({
          title: err.data.errMsg,
          icon: 'none' });

      });
    },
    getAllSelect: function getAllSelect() {
      //请求类型
      var url = this.Api.inquiryType;
      var data = {};
      this.myRequest(data, url, 'get').then(function (res) {
        console.log(res);
        _this.inquiryType = res.data.data.list;
      }).catch(function (err) {
        wx.showToast({
          title: err.data.errMsg,
          icon: 'none' });

      });
      //产品系列选项
      url = this.Api.series;
      data = {};
      this.myRequest(data, url, 'get').then(function (res) {
        console.log(res);
        _this.productSerial = res.data.data.list;
      }).catch(function (err) {
        wx.showToast({
          title: err.data.errMsg,
          icon: 'none' });

      });
      //风格选项
      url = this.Api.style;
      data = {};
      this.myRequest(data, url, 'get').then(function (res) {
        console.log(res);
        _this.styleSerial = res.data.data.list;
      }).catch(function (err) {
        wx.showToast({
          title: err.data.errMsg,
          icon: 'none' });

      });
      //布样类型
      url = this.Api.clothType;
      data = {};
      this.myRequest(data, url, 'get').then(function (res) {
        console.log(res);
        _this.sampleType = res.data.data.list;
      }).catch(function (err) {
        wx.showToast({
          title: err.data.errMsg,
          icon: 'none' });

      });
      //密度单位选择数据
      url = this.Api.densityUnit;
      data = {};
      this.myRequest(data, url, 'get').then(function (res) {
        console.log(res);
        _this.densityUnit = res.data.data.list;
      }).catch(function (err) {
        wx.showToast({
          title: err.data.errMsg,
          icon: 'none' });

      });
      //克重单位选择数据
      url = this.Api.gramWeightUnit;
      data = {};
      this.myRequest(data, url, 'get').then(function (res) {
        console.log(res);
        _this.grammageUnit = res.data.data.list;
      }).catch(function (err) {
        wx.showToast({
          title: err.data.errMsg,
          icon: 'none' });

      });
      //购买数量单位选择数据
      url = this.Api.quantityUnit;
      data = {};
      this.myRequest(data, url, 'get').then(function (res) {
        console.log(res);
        _this.lengthUnit = res.data.data.list;
      }).catch(function (err) {
        wx.showToast({
          title: err.data.errMsg,
          icon: 'none' });

      });
      //获取经成分元素多选数据
      url = this.Api.atom;
      data = {};
      this.myRequest(data, url, 'get').then(function (res) {
        console.log(res);
        _this.partList = res.data.data.list;

      }).catch(function (err) {
        wx.showToast({
          title: err.data.errMsg,
          icon: 'none' });

      });
      //获取纬成分元素多选数据
      this.myRequest(data, url, 'get').then(function (res) {
        console.log(res);
        _this.partListLong = res.data.data.list;

      }).catch(function (err) {
        wx.showToast({
          title: err.data.errMsg,
          icon: 'none' });

      });
      //品质定位
      url = this.Api.getQuality;
      data = {};
      this.myRequest(data, url, 'get').then(function (res) {
        console.log(res);
        _this.qualityPosition = res.data.data.list;

      }).catch(function (err) {
        wx.showToast({
          title: err.data.errMsg,
          icon: 'none' });

      });



    },

    tapPartSelect: function tapPartSelect(labelArr, idArr) {
      var items = this.partList;
      this.part = labelArr;
      this.partID = idArr;
      //从组件发射过来的数组，遍历成分数组对象，如果对象label，在数组中就设置为true，否则就设置为false
      //用，includes方法
      for (var i = 0, lenI = items.length; i < lenI; ++i) {
        var item = items[i];
        if (labelArr.includes(item.label)) {
          this.$set(item, 'isChecked', true);
        } else {
          this.$set(item, 'isChecked', false);
        }
      }
      console.log(this.partID);

    },

    tapPartLongSelect: function tapPartLongSelect(labelArr, idArr) {
      var items = this.partListLong;
      this.partLong = labelArr;
      this.partLongID = idArr;
      for (var i = 0, lenI = items.length; i < lenI; ++i) {
        var item = items[i];
        if (labelArr.includes(item.label)) {
          this.$set(item, 'isChecked', true);
        } else {
          this.$set(item, 'isChecked', false);
        }
      }
      console.log(this.partLongID);
    },
    // ---  弹窗新增经度处理
    tapNewPart: function tapNewPart() {
      this.$refs.latiPart.show();
    },
    tapNewPartLong: function tapNewPartLong() {
      this.$refs.longtiPart.show();
    },
    getContent: function getContent(label, content) {var _this2 = this;
      this.newPartText = content;
      console.log(this.newPartText);
      var url = this.Api.atomAdd;
      var data = {
        atomName: this.newPartText };

      this.myRequest(data, url, 'get').then(function (res) {
        console.log(res);
        if (res.data.status == 0) {
          _this2.getAllSelect();
        }
      }).catch(function (err) {
        wx.showToast({
          title: err.data.errMsg,
          icon: 'none' });

      });
    },

    // ---  弹窗新增纬度处理

    tapPaste: function tapPaste() {
      uni.setClipboardData({
        data: this.spec_longitude });

    },
    tabSwitchChange: function tabSwitchChange(label, event) {
      switch (label) {
        case 'sampleType':
          this.sampleTypeIndex = event;
          console.log(this.sampleTypeIndex);
          break;
        case 'inquiryType':
          this.inquiryTypeIndex = event;
          console.log(this.inquiryTypeIndex);
          break;

        case 'styleChange':
          console.log(event);
          this.styleSerialIndex = event[1] || -1;
          this.styleSerialValue = event[0];
          console.log(this.styleSerialIndex);
          console.log(this.styleSerialValue);
          break;
        case 'productSerial':
          this.productSerialIndex = event;
          console.log(this.productSerialIndex);
          break;
        case 'densityUnit':
          this.densityUnitIndex = event;
          console.log(this.densityUnitIndex);
          break;
        case 'grammageUnit':
          this.grammageUnitIndex = event;
          console.log(this.grammageUnitIndex);
          break;
        case 'qualityPosition':
          this.qualityPositionIndex = event;
          console.log(this.qualityPositionIndex);
          break;
        case 'lengthUnit':
          this.lengthUnitIndex = event;
          console.log(this.lengthUnitIndex);
          break;}


    },
    pickImage: function pickImage() {
      uni.chooseImage({
        sizeType: ['compressed'],
        success: function success(chooseImageRes) {
          var tempFilePaths = chooseImageRes.tempFilePaths;
          _this.pictures = [];
          for (var i = 0; i < tempFilePaths.length; i++) {
            uni.uploadFile({
              url: _this.Api.upload,
              filePath: tempFilePaths[i],
              name: 'file',
              success: function success(uploadFileRes) {
                console.log(uploadFileRes);
                _this.pictures.push(JSON.parse(uploadFileRes.data).data.msg);
                uni.showToast({
                  title: '上传成功',
                  icon: 'none',
                  duration: 1000 });

              } });

          }



        } });

    },
    bindCancel: function bindCancel() {
      uni.navigateBack({
        delta: 1 });

    },
    submit: function submit() {var _this3 = this;


      //判断风格输入内容跟选择编号是否一致，不一致设置为-1

      _this.styleSerial.forEach(function (item) {
        if (item.id == _this.styleSerialIndex) {
          if (item.label != _this.styleSerialValue) {
            _this3.styleSerialIndex = -1;
          }
        }
      });

      var _data = {
        inquiryType: _this.inquiryTypeIndex, //询价类型
        buyOrSellCode: _this.buyerCode, //买家编码
        purchaseQuantity: _this.purchaseQuantity, //购买数量
        quantityUnit: _this.lengthUnitIndex, //购买数量单位
        hangBitRate: _this.guamalv, //挂码率
        remarks: _this.remarks, //备注
        tradeName: _this.tradeName, //品名
        seriesCode: _this.productSerialIndex, //产品系列编码
        ingredientLongitudes: _this.partID, //成分经数组
        ingredientLatitudes: _this.partLongID, //成分纬数组
        content: _this.content, //含量
        specificationLongitude: _this.spec_longitude, //规格经
        specificationLatitude: _this.spec_latitude, //规格纬
        styleCode: _this.styleSerialIndex, //风格编码
        styleName: _this.styleSerialValue, //风格名称
        organization: _this.organize, //组织
        clothType: _this.sampleTypeIndex, //布样类型
        densityLongitude: _this.density_longitude, //密度经
        densityLatitude: _this.density_latitude, //密度纬
        densityUnit: _this.densityUnitIndex, //密度单位
        gramWeight: _this.grammage, //克重
        gramWeightUnit: _this.grammageUnitIndex, // 克重单位
        clothBreadth: _this.clothBreadth, //幅宽
        qualityCode: _this.qualityPositionIndex, //品质定位编码
        pictures: _this.pictures //图片数组
      };


      console.log(_data);
      var url = this.Api.addInquiry;
      this.myRequest(_data, url, 'post').then(function (res) {
        console.log(res);

        if (res.data.status == 0) {
          uni.showToast({
            title: '询价单创建成功',
            icon: 'none',
            duration: 500 });

          var pages = getCurrentPages();
          var currPage = pages[pages.length - 1]; //当前页面
          var prevPage = pages[pages.length - 2]; //上一个页面
          //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
          prevPage.setData({
            isDoRefresh: true });

          uni.redirectTo({

            url: '/pages/qing-f-c/inquiryManage/inquiry-details?inquiryNumber=' + res.data.data.msg,
            success: function success(res) {},
            fail: function fail() {},
            complete: function complete() {} });

        } else {
          uni.showToast({
            title: res.data.message,
            icon: 'none' });

          return;
        }

      }).catch(function (err) {
        wx.showToast({
          title: err.data.errMsg,
          icon: 'none' });

      });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 152:
/*!*************************************************************************************************************************!*\
  !*** /Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/inquiryManage/inquiry-created.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inquiry_created_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./inquiry-created.vue?vue&type=style&index=0&lang=scss& */ 153);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inquiry_created_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inquiry_created_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inquiry_created_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inquiry_created_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inquiry_created_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 153:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/inquiryManage/inquiry-created.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[146,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/qing-f-c/inquiryManage/inquiry-created.js.map