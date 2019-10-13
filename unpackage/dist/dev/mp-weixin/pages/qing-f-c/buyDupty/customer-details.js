(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/qing-f-c/buyDupty/customer-details"],{

/***/ 57:
/*!********************************************************************************************************!*\
  !*** /Users/lee/Downloads/备份11/轻纺车网/main.js?{"page":"pages%2Fqing-f-c%2FbuyDupty%2Fcustomer-details"} ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _customerDetails = _interopRequireDefault(__webpack_require__(/*! ./pages/qing-f-c/buyDupty/customer-details.vue */ 58));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_customerDetails.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 58:
/*!***********************************************************************************!*\
  !*** /Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/buyDupty/customer-details.vue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customer_details_vue_vue_type_template_id_e6d64970___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-details.vue?vue&type=template&id=e6d64970& */ 59);
/* harmony import */ var _customer_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-details.vue?vue&type=script&lang=js& */ 61);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _customer_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _customer_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _customer_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-details.vue?vue&type=style&index=0&lang=scss& */ 63);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _customer_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _customer_details_vue_vue_type_template_id_e6d64970___WEBPACK_IMPORTED_MODULE_0__["render"],
  _customer_details_vue_vue_type_template_id_e6d64970___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/buyDupty/customer-details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/*!******************************************************************************************************************!*\
  !*** /Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/buyDupty/customer-details.vue?vue&type=template&id=e6d64970& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_details_vue_vue_type_template_id_e6d64970___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./customer-details.vue?vue&type=template&id=e6d64970& */ 60);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_details_vue_vue_type_template_id_e6d64970___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_details_vue_vue_type_template_id_e6d64970___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 60:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/buyDupty/customer-details.vue?vue&type=template&id=e6d64970& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 61:
/*!************************************************************************************************************!*\
  !*** /Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/buyDupty/customer-details.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./customer-details.vue?vue&type=script&lang=js& */ 62);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 62:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/buyDupty/customer-details.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var JsyServer = __webpack_require__(/*! ../../../services/jsy-server.js */ 21);
var _this, _id;var _default =

{
  data: function data() {
    return {
      identity: 2,
      //1为买帮办，2为卖帮办
      customerInfo: '',
      //客户详情
      isProduct: false,
      //是否有产品
      admin: false, //是否是管理人员
      isDisplay: false,
      activeIndex: -1,
      items: ['公司信息', '联系人', '经营状况', '竞争对手'] };

  },

  onPullDownRefresh: function onPullDownRefresh() {
    this.getCustomerInfo();
  },
  onShow: function onShow() {
    this.getCustomerInfo();
  },
  onLoad: function onLoad(options) {
    _this = this;
    //this.setIdentity();
    _id = options.id;
  },
  onPageScroll: function onPageScroll(res) {
    console.log(res.scrollTop);
    if (res.scrollTop > 180) {
      this.isDisplay = true;
    } else
    {
      this.isDisplay = false;
    }
  },
  components: {},
  props: {},
  methods: {

    tabSwitch: function tabSwitch(index) {
      this.activeIndex = index;
      switch (index) {
        case 0:
          this.selectorQuery("#outView", "#companyInfo");
          break;
        case 1:
          this.selectorQuery("#outView", "#contact");
          break;
        case 2:
          this.selectorQuery("#outView", "#condition");
          break;
        case 3:
          this.selectorQuery("#outView", "#competitor");
          break;}


    },
    selectorQuery: function selectorQuery(outView, currentView) {
      uni.createSelectorQuery().select(outView).boundingClientRect(function (data) {
        uni.createSelectorQuery().select(currentView).boundingClientRect(function (res) {
          uni.createSelectorQuery().select("#inTabbar").boundingClientRect(function (tab) {
            console.log(res.top, data.top, tab.height);
            uni.pageScrollTo({
              duration: 0,
              scrollTop: res.top - data.top - tab.height });

          }).exec();
        }).exec();
      }).exec();
    },
    //返回
    backto: function backto() {
      uni.navigateBack({
        delta: 1 });

    },
    // 设置身份
    setIdentity: function setIdentity() {
      var userInfo = wx.getStorageSync("userInfo");
      this.setData({
        userInfo: userInfo });

      var role = userInfo.authority[0].name;

      if (role == "ROLE_BUY_DEPUTY") {
        this.setData({
          identity: 1 });

      } else if (role == "ROLE_SELL_DEPUTY") {
        this.setData({
          identity: 2 });

      }

      if (userInfo.authorityOther == 7 || role == 'ROLE_SALES_DIRECTOR') {
        this.setData({
          admin: true });

      }
    },
    getCustomerInfo: function getCustomerInfo() {
      // JsyServer.getCustomerInfo(_id).then(res => {
      //   wx.stopPullDownRefresh();
      //   console.log("res==", res);

      //   _this.setData({
      //     customerInfo: res.data
      //   });
      // }).catch(err => {
      //   wx.stopPullDownRefresh();
      //   console.log("Err===", err);
      // });
      this.customerInfo = {
        characteristics: {
          channelStatus: "原有采购渠道较窄,优势不大",
          characterTraits: "认真",
          costEffective: "以价格为上/质量过关即可",
          createdBy: "8a9efd266d38ecab016d3944c82a0308",
          createdDate: "2019-10-08T06:30:10Z",
          customerId: "B2019100851256123",
          developmentPotential: "经营者/老板格局思维一般，公司发展潜力一般",
          id: "8a9efd266d7c8aff016daa0f917f15d2",
          identity: "雇员",
          lastModifiedBy: "8a9efd266d38ecab016d3944c82a0308",
          lastModifiedDate: "2019-10-08T06:30:10Z",
          managementIdea: null,
          managementState: "爱冒险",
          modelAccreditation: null,
          priceSensitivity: "中",
          productPrice: null },

        concerted: "中",
        cooperationIntention: "信任",
        corporateAddress: "盛泽",
        corporateName: "海西纺织有限公司",
        createdBy: "8a9efd266d38ecab016d3944c82a0308",
        createdDate: "2019-10-08T06:14:16Z",
        customerBaseInfo: [
        {
          avatar: null,
          contName: "马云",
          contPhone: "13434334434",
          corporateName: "海西纺织有限公司",
          createdBy: "8a9efd266d38ecab016d3944c82a0308",
          createdDate: "2019-10-08T06:14:16Z",
          customerId: "B2019100851256123",
          deputyId: "8a9efd266d38ecab016d3944c82a0308",
          id: "8a9efd266d7c8aff016daa0103bf15c7",
          lastModifiedBy: "8a9efd266d38ecab016d3944c82a0308",
          lastModifiedDate: "2019-10-08T06:14:16Z",
          status: 0,
          type: 2,
          userid: null }],



        depositApproval: 0,
        depositNum: 0,
        deputyId: "8a9efd266d38ecab016d3944c82a0308",
        factoryAddress: "",
        id: "B2019100851256123",
        isSalesDepart: 0,
        lastModifiedBy: "8a9efd266d38ecab016d3944c82a0308",
        lastModifiedDate: "2019-10-08T06:14:16Z",
        lv: "小型客户（年销售1500-3000万）",
        ppNum: 0,
        productInfo: "",
        region: "盛泽",
        salesDepart: "",
        showId: "SS04357W",
        source: "线下",
        status: 0,
        transactionNum: 0,
        type: 2,
        type1: "贸易公司",
        zyDemandNum: 0,
        zyResultNum: 0,
        competitor: [{
          name: "轻纺车有限公司",
          channel: "渠道宽,优势较大",
          productType: "梭织化纤面料 纬编化纤面料 纬编棉类面料 梭织化纤面料 梭织棉类面料",
          purchase: "中间商+厂家直采",
          scope: "大客户(年销售5000万及以上)",
          quality: "高级订单",
          model: "厂家分销",
          address: "盛泽",
          machineType: "织布机",
          machineNum: "500" }],


        operationStatus: {
          capitalStatus: "很好",
          createdBy: "8a9efd266d38ecab016d3944c82a0308",
          createdDate: "2019-10-08T06:34:57Z",
          credit: "良",
          customerId: "B2019100851256123",
          condition: "健康成长",
          level: "信任级",
          customerVolume: null,
          id: "8a9efd266d7c8aff016daa13f2cb15d5",
          lastModifiedBy: "8a9efd266d38ecab016d3944c82a0308",
          lastModifiedDate: "2019-10-08T06:34:57Z",
          lastyearOutput: null,
          lastyearOutputUnit: null,
          lastyearOutputvalue: null,
          modeProduction: null,
          modeProductionProportion: null,
          peakSeason: "2月,7月",
          procurementMethods: null,
          procurementMethodsProportion: null,
          salesMethods: null,
          salesMethodsProportion: null } };



    },
    //跳转到新建客户页面
    goCustomerCreated: function goCustomerCreated() {
      var detail = this.customerInfo;
      var odata = {
        id: detail.id,
        corporateName: detail.corporateName,
        contName: detail.contName,
        contPhone: detail.contPhone,
        region: detail.region,
        corporateAddress: detail.corporateAddress,
        isSalesDepart: detail.isSalesDepart,
        salesDepart: detail.salesDepart,
        factoryAddress: detail.factoryAddress,
        type1: detail.type1,
        source: detail.source,
        lv: detail.lv,
        cooperationIntention: detail.cooperationIntention,
        concerted: detail.concerted,
        depositApproval: detail.depositApproval,
        isWx: detail.isWx };

      console.log(odata);
      odata = JSON.stringify(odata);
      wx.navigateTo({
        url: '/pages/jin-suo-yun/customer-admin/customer-created?odata=' + odata + '&type=' + detail.type });

    },
    // 跳转跟进记录详情（总）
    toRecordDetails: function toRecordDetails() {
      var userId = this.customerInfo.id;
      wx.navigateTo({
        url: '/pages/jin-suo-yun/customer-admin/record-details?userId=' + userId + '&name=' + this.customerInfo.corporateName });

    },
    //跳转保证金管理页面
    goMarginControl: function goMarginControl() {
      var userId = this.customerInfo.id;
      wx.navigateTo({
        url: '/pages/jin-suo-yun/customer-admin/margin-control?userId=' + userId });

    },
    // 跳转保证金详情
    toBondDetail: function toBondDetail() {
      var userId = this.customerInfo.id;
      var id = ""; // if (this.data.customerInfo.deposit) {
      //   id = this.data.customerInfo.deposit.id;
      //   wx.navigateTo({
      //     url: '/pages/jin-suo-yun/customer-admin/bond-details?userId=' + userId + "&id=" + id,
      //   })
      // } else {
      // 	wx.navigateTo({
      // 		url: '/pages/jin-suo-yun/customer-admin/margin-control?userId=' + userId,
      // 	})
      // }

      if (this.customerInfo.type == 2) {
        wx.showToast({
          title: '开发中...',
          icon: 'none' });

      } else {
        wx.navigateTo({
          url: '/pages/jin-suo-yun/customer-admin/bond-list?id=' + userId });

      }
    },
    //跳转到添加竞争对手
    addCompetitor: function addCompetitor(e) {
      var customerId = this.customerInfo.id;
      uni.navigateTo({
        url: '/pages/qing-f-c/buyDupty/add-competitor?customerId=' + customerId,
        success: function success(res) {
          console.log(res);
        },
        fail: function fail(err) {
          console.log(err);
        },
        complete: function complete() {} });

    },
    detailCompetitor: function detailCompetitor(index) {
      var customerId = this.customerInfo.id;
      var odata = JSON.stringify(this.customerInfo.competitor[index]);
      uni.navigateTo({
        url: '/pages/qing-f-c/buyDupty/detail-competitor?competitor=' + odata + "&customerId=" + customerId,
        success: function success(res) {
          console.log(res);
        },
        fail: function fail(err) {
          console.log(err);
        },
        complete: function complete() {} });


    },
    // 跳转添加联系人
    addContacts: function addContacts(e) {
      var userId = this.customerInfo.id;
      console.log(e);
      var type = e.currentTarget.dataset.type;
      var list = ['编辑联系人', '删除联系人'];

      if (type == 1) {
        var index = e.currentTarget.dataset.index;
        var odata = JSON.stringify(this.customerInfo.customerBaseInfo[index]);
        var id = this.customerInfo.customerBaseInfo[index].id;

        if (this.customerInfo.customerBaseInfo.length == 1) {
          list = ['编辑联系人'];
        }

        wx.showActionSheet({
          itemList: list,
          success: function success(res) {
            if (!res.cancel) {
              if (res.tapIndex == 0) {
                wx.navigateTo({
                  url: '/pages/jin-suo-yun/customer-admin/add-contacts?userId=' + userId + '&odata=' + odata });

              } else if (res.tapIndex == 1) {
                wx.showModal({
                  title: '删除联系人',
                  content: '删除联系人后该联系人的信息将作废，确定删除该联系人？',

                  success: function success(res) {
                    if (res.confirm) {
                      JsyServer.deleBaseInfo(id).then(function (res) {
                        wx.showToast({
                          title: '删除成功' });


                        _this.getCustomerInfo();
                      }).catch(function (err) {
                        wx.showToast({
                          title: '删除失败',
                          icon: 'none' });

                      });
                    } else if (res.cancel) {
                      console.log('用户点击取消');
                    }
                  } });


              }
            }
          } });

      } else {
        wx.navigateTo({
          url: '/pages/jin-suo-yun/customer-admin/add-contacts?userId=' + userId });

      }
    },
    //跳转设置经营状况页面
    toSetManagementCondition: function toSetManagementCondition() {
      var userId = this.customerInfo.id;
      var type = this.customerInfo.type;
      var id = "",
      data = "";

      if (this.customerInfo.operationStatus) {
        id = this.customerInfo.operationStatus.id;
        data = JSON.stringify(this.customerInfo.operationStatus);
      }

      wx.navigateTo({
        url: '/pages/jin-suo-yun/customer-admin/set-management-condition?userId=' + userId + "&id=" + id + '&data=' + data + '&type=' + type });

    },
    // 跳转身份特征页面
    toSetIdentity: function toSetIdentity() {
      var userId = this.customerInfo.id;
      var type = this.customerInfo.type;
      var id = "",
      data = "";

      if (this.customerInfo.characteristics) {
        id = this.customerInfo.characteristics.id;
        data = JSON.stringify(this.customerInfo.characteristics);
      }

      wx.navigateTo({
        url: '/pages/jin-suo-yun/customer-admin/set-identity?userId=' + userId + "&id=" + id + '&data=' + data + '&type=' + type });

    },
    // 产品信息
    toSetOpi: function toSetOpi() {
      var userId = this.customerInfo.id;
      var id = "",
      data = "";

      if (this.customerInfo.productInfo) {
        id = this.customerInfo.productInfo.id;
        data = JSON.stringify(this.customerInfo.productInfo);
      }

      wx.navigateTo({
        url: '/pages/jin-suo-yun/customer-admin/set-opi?userId=' + userId + "&id=" + id + '&data=' + data });

    },
    // 跳转询价管理
    toInquiry: function toInquiry() {
      wx.navigateTo({
        url: '/pages/jin-suo-yun/customer-admin/sampling-record?id=' + _id });

    },
    // 跳转到产品展示
    toProductPage: function toProductPage() {
      var isProduct = this.customerInfo.productInfo;
      var url;

      if (isProduct) {
        url = '/pages/jin-suo-yun/customer-admin/product-display?customerId=' + _id;
      } else {
        url = '/pages/jin-suo-yun/customer-admin/add-productpage?type=' + this.customerInfo.type + '&customerid=' + _id;
      }

      wx.navigateTo({
        url: url });

    },
    bindNull: function bindNull() {
      wx.showToast({
        title: '待开发...',
        icon: 'none' });

    },
    tapDelete: function tapDelete() {
      if (!this.admin) {
        return;
      }

      var list = ['删除客户'];
      var id = this.customerInfo.id;
      wx.showActionSheet({
        itemList: list,
        success: function success(res) {
          wx.showModal({
            title: '删除客户',
            content: '删除客户后该客户的信息将作废，确定删除该客户？',

            success: function success(res) {
              if (res.confirm) {
                JsyServer.deleteCompany(id).then(function (res) {
                  var pages = getCurrentPages();
                  var prevPage = pages[pages.length - 2];
                  prevPage.setData({
                    setOver: true });

                  wx.showToast({
                    title: '删除客户成功' });

                  var timer = setTimeout(function () {
                    wx.navigateBack({});
                  }, 1000);
                }).catch(function (err) {
                  console.log("删除失败err=>", err);
                  wx.showToast({
                    title: "删除客户失败",
                    icon: 'none' });

                });
              } else if (res.cancel) {
                console.log('用户点击取消');
              }
            } });


          console.log("111Res---", res);
        } });

    },
    setData: function setData(obj) {
      var that = this;
      var keys = [];
      var val, data;
      Object.keys(obj).forEach(function (key) {
        keys = key.split('.');
        val = obj[key];
        data = that.$data;
        keys.forEach(function (key2, index) {
          if (index + 1 == keys.length) {
            that.$set(data, key2, val);
          } else {
            if (!data[key2]) {
              that.$set(data, key2, {});
            }
          }

          data = data[key2];
        });
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 63:
/*!*********************************************************************************************************************!*\
  !*** /Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/buyDupty/customer-details.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./customer-details.vue?vue&type=style&index=0&lang=scss& */ 64);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_customer_details_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 64:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lee/Downloads/备份11/轻纺车网/pages/qing-f-c/buyDupty/customer-details.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[57,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/qing-f-c/buyDupty/customer-details.js.map