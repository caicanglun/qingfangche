(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-qing-f-c-inquiryManage-inquiry-created-copy"],{"2e81":function(t,e,i){var n=i("b492");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("d2dbce76",n,!0,{sourceMap:!1,shadowMode:!1})},7530:function(t,e,i){"use strict";i.r(e);var n=i("cb5d"),a=i("c75d");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("7d4e");var o=i("2877"),l=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"25c2f21b",null);e["default"]=l.exports},"7d4e":function(t,e,i){"use strict";var n=i("2e81"),a=i.n(n);a.a},9548:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("6762"),i("2fdb"),i("ac6a");var a,s=n(i("1015")),o=n(i("bd6e")),l=n(i("c8bc")),c=n(i("3209")),r=n(i("2cc1")),d=n(i("f107")),u=n(i("2cee")),p=n(i("cb0f")),f={components:{pickerButton:s.default,myPicker:o.default,partCheckboxGroup:l.default,myPickerSmall:c.default,switchButton:r.default,pickerInput:d.default,uniIcon:u.default,popupMe:p.default},data:function(){return{clothBreadth:"",tradeName:"",content:"",spec_longitude:"",spec_latitude:"",organize:"",style:"",grammage:"",density_latitude:"",density_longitude:"",purchaseQuantity:"",guamalv:"",remarks:"",inquiryType:[],inquiryTypeIndex:1,densityUnit:[],densityUnitIndex:1,grammageUnit:[],grammageUnitIndex:2,lengthUnit:[],lengthUnitIndex:1,productSerial:[],productSerialIndex:"",productSerialValue:"",buyer:"",buyerCode:"",productType:"",productTypeIndex:"",styleSerial:[],styleSerialIndex:"",styleSerialValue:"",qualityPosition:[],qualityPositionIndex:"",qualityName:"",part:[],partID:[],partList:[],partListLong:[],partLong:[],partLongID:[],sampleType:[],sampleTypeIndex:1,mainProductName:"",newPartText:"",newPartLongText:"",styleCode:"",pictures:[],tempFiles:[],goAnalysisSample:""}},onLoad:function(t){a=this,console.log(t),a.goAnalysisSample=JSON.parse(t.data),console.log(this.goAnalysisSample),t.inquiryType?this.inquiryTypeIndex=t.inquiryType:this.inquiryTypeIndex=2,console.log(a.goAnalysisSample),a.clothBreadth=a.goAnalysisSample.clothBreadth,a.tradeName=a.goAnalysisSample.tradeName,a.content=a.goAnalysisSample.content,a.spec_longitude=a.goAnalysisSample.specificationLongitude,a.spec_latitude=a.goAnalysisSample.specificationLatitude,a.organize=a.goAnalysisSample.organization,a.grammage=a.goAnalysisSample.gramWeight,a.density_latitude=a.goAnalysisSample.densityLatitude,a.density_longitude=a.goAnalysisSample.densityLongitude,a.densityUnitIndex=a.goAnalysisSample.densityUnitCode,a.grammageUnitIndex=a.goAnalysisSample.gramWeightUnitCode,a.productSerialIndex=a.goAnalysisSample.seriesCode,a.productSerialValue=a.goAnalysisSample.seriesName,console.log(a.productSerialValue),a.productTypeIndex=a.goAnalysisSample.mainProductCode,a.mainProductName=a.goAnalysisSample.mainProductName,a.qualityPositionIndex=a.goAnalysisSample.qualityCode,a.qualityName=a.goAnalysisSample.qualityName,a.sampleTypeIndex=a.goAnalysisSample.clothTypeCode,a.styleSerialIndex=a.goAnalysisSample.styleCode,a.styleSerialValue=a.goAnalysisSample.styleName,this.getAllSelect()},methods:{selectBuyer:function(){uni.navigateTo({url:"/pages/qing-f-c/inquiryManage/selectBuyer",success:function(t){},fail:function(){},complete:function(){}})},test:function(){var t="http://show.jkfb.net.cn:8080/aiwc-show/show/city?cityCode=yuyao",e={};this.myRequest(e,t,"get").then(function(t){console.log(t)}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},getAllSelect:function(){var t=this,e=this.Api.getMainProduct,i={};this.myRequest(i,e,"get").then(function(t){console.log(t),a.productType=t.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),e=this.Api.inquiryType,i={},this.myRequest(i,e,"get").then(function(e){console.log(e),a.inquiryType=e.data.data.list,a.inquiryType.forEach(function(e){e.id==a.inquiryTypeIndex&&t.$set(e,"isChecked",!0)})}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),e=this.Api.series,i={},this.myRequest(i,e,"get").then(function(t){console.log(t),a.productSerial=t.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),e=this.Api.style,i={},this.myRequest(i,e,"get").then(function(t){console.log(t),a.styleSerial=t.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),e=this.Api.clothType,i={},this.myRequest(i,e,"get").then(function(e){console.log(e),a.sampleType=e.data.data.list,a.sampleType=t.setIsChecked(a.sampleType,a.sampleTypeIndex)}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),e=this.Api.densityUnit,i={},this.myRequest(i,e,"get").then(function(e){console.log(e),a.densityUnit=e.data.data.list,a.densityUnit=t.setIsChecked(a.densityUnit,a.densityUnitIndex)}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),e=this.Api.gramWeightUnit,i={},this.myRequest(i,e,"get").then(function(e){console.log(e),a.grammageUnit=e.data.data.list,a.grammageUnit=t.setIsChecked(a.grammageUnit,a.grammageUnitIndex)}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),e=this.Api.quantityUnit,i={},this.myRequest(i,e,"get").then(function(e){console.log(e),a.lengthUnit=e.data.data.list,a.lengthUnit=t.setIsChecked(a.lengthUnit,a.lengthUnitIndex)}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),e=this.Api.atom,i={},this.myRequest(i,e,"get").then(function(t){console.log(t),a.partList=t.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),this.myRequest(i,e,"get").then(function(t){console.log(t),a.partListLong=t.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),e=this.Api.getQuality,i={},this.myRequest(i,e,"get").then(function(t){console.log(t),a.qualityPosition=t.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},tapPartSelect:function(t,e){var i=this.partList;this.part=t,this.partID=e;for(var n=0,a=i.length;n<a;++n){var s=i[n];t.includes(s.label)?this.$set(s,"isChecked",!0):this.$set(s,"isChecked",!1)}console.log(this.partID)},tapPartLongSelect:function(t,e){var i=this.partListLong;this.partLong=t,this.partLongID=e;for(var n=0,a=i.length;n<a;++n){var s=i[n];t.includes(s.label)?this.$set(s,"isChecked",!0):this.$set(s,"isChecked",!1)}console.log(this.partLongID)},tapNewPart:function(){this.$refs.latiPart.show()},tapNewPartLong:function(){this.$refs.longtiPart.show()},getContent:function(t,e){var i=this;this.newPartText=e,console.log(this.newPartText);var n=this.Api.atomAdd,a={atomName:this.newPartText};uni.showLoading({title:"创建中",mask:!0}),this.myRequest(a,n,"get").then(function(t){console.log(t),uni.hideLoading(),0==t.data.status&&i.getAllSelect()}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},tapPaste:function(){uni.setClipboardData({data:this.spec_longitude})},tabSwitchChange:function(t,e){var i=this;switch(t){case"sampleType":this.sampleTypeIndex=e,this.sampleType.forEach(function(t){t.id==i.sampleTypeIndex?i.$set(t,"isChecked",!0):i.$set(t,"isChecked",!1)}),console.log(this.sampleTypeIndex);break;case"inquiryType":this.inquiryTypeIndex=e,this.inquiryType.forEach(function(t){t.id==i.inquiryTypeIndex?i.$set(t,"isChecked",!0):i.$set(t,"isChecked",!1)}),console.log(this.inquiryTypeIndex);break;case"styleChange":console.log(e),this.styleSerialIndex=e[1]||-1,this.styleSerialValue=e[0],"101346541950"==this.styleSerialIndex&&(this.organize="1/1"),console.log(this.styleSerialIndex),console.log(this.styleSerialValue);break;case"productSerial":this.productSerialIndex=e[1]||-1,this.productSerialValue=e[0],console.log(this.productSerialValue),console.log(this.productSerialIndex);break;case"densityUnit":this.densityUnitIndex=e,this.densityUnit.forEach(function(t){t.id==i.densityUnitIndex?i.$set(t,"isChecked",!0):i.$set(t,"isChecked",!1)}),console.log(this.densityUnitIndex);break;case"grammageUnit":this.grammageUnitIndex=e,this.grammageUnit.forEach(function(t){t.id==i.grammageUnitIndex?i.$set(t,"isChecked",!0):i.$set(t,"isChecked",!1)}),console.log(this.grammageUnitIndex),console.log(this.grammageUnit);break;case"qualityPosition":this.qualityPositionIndex=e,console.log(this.qualityPositionIndex);break;case"lengthUnit":this.lengthUnitIndex=e,this.lengthUnit.forEach(function(t){t.id==i.lengthUnitIndex?i.$set(t,"isChecked",!0):i.$set(t,"isChecked",!1)}),console.log(this.lengthUnitIndex);break}},pickImage:function(){uni.chooseImage({sizeType:["compressed"],success:function(t){var e=t.tempFilePaths;a.pictures=[];for(var i=0;i<e.length;i++)uni.uploadFile({url:a.Api.upload,filePath:e[i],name:"file",success:function(t){console.log(t),a.pictures.push(JSON.parse(t.data).data.msg),uni.showToast({title:"上传成功",icon:"none",duration:1e3})}})}})},bindCancel:function(){uni.navigateBack({delta:1})},submit:function(){var t=this;a.styleSerial.forEach(function(e){e.id==a.styleSerialIndex&&e.label!=a.styleSerialValue&&(t.styleSerialIndex=-1)}),a.productSerial.forEach(function(e){e.id==a.productSerialIndex&&e.label!=a.productSerialValue&&(t.productSerialIndex=-1)});var e={number:"",inquiryType:a.inquiryTypeIndex,buyOrSellCode:a.buyerCode,purchaseQuantity:a.purchaseQuantity,quantityUnit:a.lengthUnitIndex,hangBitRate:a.guamalv,remarks:a.remarks,tradeName:a.tradeName,seriesCode:a.productSerialIndex,seriesName:a.productSerialValue,ingredientLongitudes:a.partID,ingredientLatitudes:a.partLongID,content:a.content,mainProduct:a.productTypeIndex,specificationLongitude:a.spec_longitude,specificationLatitude:a.spec_latitude,styleCode:a.styleSerialIndex,styleName:a.styleSerialValue,organization:a.organize,clothType:a.sampleTypeIndex,densityLongitude:a.density_longitude,densityLatitude:a.density_latitude,densityUnit:a.densityUnitIndex,gramWeight:a.grammage,gramWeightUnit:a.grammageUnitIndex,clothBreadth:a.clothBreadth,qualityCode:a.qualityPositionIndex,pictures:a.pictures};if(1!=a.grammageUnitIndex||0!=a.clothBreadth){console.log(e);var i=this.Api.addInquiry;uni.showLoading({title:"提交中",mask:!0}),this.myRequest(e,i,"post").then(function(t){if(console.log(t),uni.hideLoading(),0==t.data.status){uni.showToast({title:"询价单创建成功",icon:"none",duration:500});var e=getCurrentPages(),i=(e[e.length-1],e[e.length-2]);i.setData({isDoRefresh:!0}),1==a.inquiryTypeIndex?uni.redirectTo({url:"/pages/qing-f-c/inquiryManage/inquiry-details?inquiryNumber="+t.data.data.msg,success:function(t){},fail:function(){},complete:function(){}}):uni.redirectTo({url:"/pages/qing-f-c/inquiryManage/sampleInquiry/buyDeputy/inquiry-details?inquiryNumber="+t.data.data.msg,success:function(t){},fail:function(){},complete:function(){}})}else uni.showToast({title:t.data.message,icon:"none"})}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})}else uni.showToast({title:"幅宽必填",icon:"none",duration:500})}}};e.default=f},b492:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-25c2f21b]{background:#f4f4f4}.form_box[data-v-25c2f21b]{background-color:#fff;font-size:14px;margin-bottom:%?20?%}.list[data-v-25c2f21b]{margin:0 %?30?%;\n  /* padding:0 10upx; */border-bottom:%?1?% solid hsla(0,0%,86.7%,.3);line-height:%?87?%;color:#333236}.box-borer[data-v-25c2f21b]{box-sizing:border-box}.list_part[data-v-25c2f21b]{margin:0 %?20?%;padding:0 %?10?%;line-height:%?87?%;color:#333236}.list_right[data-v-25c2f21b]{width:%?250?%}.list_right_content[data-v-25c2f21b]{margin:0 %?20?%;padding:0 %?10?%;line-height:%?87?%;border-bottom:%?1?% solid hsla(0,0%,86.7%,.3)}.color_888[data-v-25c2f21b]{color:#888890}.select_btn[data-v-25c2f21b]{padding:0 %?20?%;height:%?48?%;box-sizing:border-box;border:%?2?% solid #ee603f;border-radius:%?6?%;line-height:%?46?%;text-align:center}.wid_2x[data-v-25c2f21b]{width:%?192?%}.input[data-v-25c2f21b]{width:%?446?%;background-color:#fff;font-size:14px;padding-left:%?30?%}.input_300[data-v-25c2f21b]{width:%?300?%;background-color:#fff;font-size:13px;padding-left:%?30?%}.input-half-width[data-v-25c2f21b]{width:%?200?%;background-color:#fff;font-size:13px;padding-left:%?30?%}.plr_20[data-v-25c2f21b]{padding-right:%?20?%;padding-left:%?20?%;padding-top:10rx}.selet_tion[data-v-25c2f21b]{color:#fff;background-color:#ee603f}.select_btn uni-view[data-v-25c2f21b]{width:50%}.wid_462[data-v-25c2f21b]{width:%?462?%}.mr_30[data-v-25c2f21b]{margin-right:%?30?%}.btn_left[data-v-25c2f21b]{width:50%;background-color:#fff;color:#ff6000;border-radius:0;font-size:16px;line-height:%?98?%}.btn_right[data-v-25c2f21b]{width:50%;background-color:#ff6000;color:#fff;border-radius:0;font-size:16px;line-height:%?98?%}uni-button[data-v-25c2f21b]:after{border-radius:0}.fixed_bottom[data-v-25c2f21b]{width:%?750?%;position:fixed;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;z-index:999}.border_none[data-v-25c2f21b]{border:none;padding-bottom:%?10?%}.x-image[data-v-25c2f21b]{margin-left:%?40?%}.bottom_img[data-v-25c2f21b]{width:%?48?%;height:%?48?%;box-shadow:0 %?4?% %?8?% 0 rgba(0,0,0,.2)}.textareBox[data-v-25c2f21b]{width:%?670?%;height:%?140?%;background-color:#f4f4f4;border-radius:%?6?%;padding:%?20?%;box-sizing:border-box}.textareBox>uni-textarea[data-v-25c2f21b]{background-color:#f4f4f4;font-size:%?24?%;padding:0;height:%?80?%;line-height:1.1}.textareBox_title[data-v-25c2f21b]{color:#888890;text-align:right;line-height:1.1;font-size:%?24?%}.flexend130[data-v-25c2f21b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:0;-webkit-flex:0 0 %?130?%;flex:0 0 %?130?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.unit[data-v-25c2f21b]{font-size:14px;line-height:%?48?%;width:%?80?%;height:%?48?%;text-align:center;border:%?2?% solid #ee603f;box-sizing:border-box}.borderright[data-v-25c2f21b]{border-top-right-radius:%?6?%;border-bottom-right-radius:%?6?%}.borderleft[data-v-25c2f21b]{border-top-left-radius:%?6?%;border-bottom-left-radius:%?6?%}.unitselect[data-v-25c2f21b]{color:#fff;background-color:#ee603f}.unitunselect[data-v-25c2f21b]{color:#888890;background-color:#fff}.line[data-v-25c2f21b]{width:%?4?%;height:15px;border-radius:%?2?%;background-color:#ee603f;margin-right:%?10?%;margin-left:%?-14?%}.isOption[data-v-25c2f21b]{width:%?152?%;text-align:center;background-color:#ee603f;border-radius:%?6?%;line-height:%?48?%;color:#fff}.explain[data-v-25c2f21b]{color:#9b9b9b;margin-top:%?20?%;padding-bottom:%?30?%;font-size:12px;line-height:1;padding-left:%?40?%}.width_112[data-v-25c2f21b]{width:%?112?%}.pl_40[data-v-25c2f21b]{padding-left:%?40?%}.width_160[data-v-25c2f21b]{width:%?160?%}.mr_40[data-v-25c2f21b]{margin-right:%?40?%}.width_450[data-v-25c2f21b]{width:%?450?%}.right_img[data-v-25c2f21b]{width:%?14?%;height:%?24?%}.wid_430[data-v-25c2f21b]{width:%?430?%}.bottomWrapper[data-v-25c2f21b]{position:fixed;bottom:0;background-color:#fff;width:100%;padding:%?16?% %?10?%;border-top:1px solid #c8c7cc}.buttonWrapper[data-v-25c2f21b]{text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;color:#333}.publishWrapper[data-v-25c2f21b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.publishWrapper uni-input[data-v-25c2f21b]{border:1px solid #c8c7cc;border-radius:%?40?%;padding-left:%?20?%;width:70%}.newPart[data-v-25c2f21b]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:14px;width:%?170?%;height:%?60?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border:%?2?% solid #dcdcdc;box-sizing:border-box;border-radius:%?30?%;color:#fff;background-color:#ff6000;margin-left:%?10?%}.newPartCancel[data-v-25c2f21b]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:14px;width:%?170?%;height:%?60?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border:%?2?% solid #dcdcdc;box-sizing:border-box;border-radius:%?30?%;color:#000;background-color:#fff;margin-left:%?10?%}.textarea_border[data-v-25c2f21b]{border:%?2?% solid #dcdcdc;height:%?140?%;width:%?450?%;padding-right:%?20?%;background-color:#f7f7f7}.iconClose[data-v-25c2f21b]{position:absolute;top:%?2?%;right:%?2?%}.popTitle[data-v-25c2f21b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.Clipboard[data-v-25c2f21b]{text-align:center;width:%?100?%;height:%?40?%;background-color:#ff6000;color:#fff;line-height:%?40?%;border-radius:%?20?%}.justify-content[data-v-25c2f21b]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.color_909090[data-v-25c2f21b]{color:#909090}.uploadFile[data-v-25c2f21b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?100?%}.IconStyle[data-v-25c2f21b]{height:%?200?%;width:%?200?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#efefef}.iconCenter[data-v-25c2f21b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?100?%}.smallFont[data-v-25c2f21b]{color:#999;font-size:12px}.picture_style[data-v-25c2f21b]{margin:%?0?% %?20?%;width:%?180?%;height:%?180?%}body.?%PAGE?%[data-v-25c2f21b]{background:#f4f4f4}',""])},c75d:function(t,e,i){"use strict";i.r(e);var n=i("9548"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},cb5d:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"form_box box_shadow"},[i("v-uni-view",{staticClass:"flex_c list"},[i("v-uni-view",{staticClass:"font_we_bold fs_16"},[t._v("询价单基本信息")])],1),i("pickerButton",{attrs:{items:t.inquiryType,name:"询价类型"},on:{buttonChange:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSwitchChange("inquiryType",e)}}}),i("pickerInput",{attrs:{items:t.productSerial,firstLabel:t.productSerialValue,name:"产品系列",fontSize:"font-size:14px;"},on:{mychange:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSwitchChange("productSerial",e)}}}),i("v-uni-view",{staticClass:"flex_c list"},[i("v-uni-view",{staticClass:"list_right"},[t._v("品名（别名）：")]),i("v-uni-input",{staticClass:"input",attrs:{"placeholder-class":"color_909090 fs_13",placeholder:"请填写品名",name:"tradeName"},model:{value:t.tradeName,callback:function(e){t.tradeName=e},expression:"tradeName"}})],1),i("myPicker",{attrs:{items:t.productType,name:"产品类型",firstLabel:t.mainProductName},on:{mychange:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSwitchChange("productType",e)}}}),i("v-uni-view",{staticClass:"flex_c list",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectBuyer.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"list_right"},[t._v("买家：")]),i("v-uni-view",{class:""==t.buyer?"color_909090 wid_400":"wid_400"},[t._v(t._s(""==t.buyer?"请选择":t.buyer))]),i("v-uni-view",[i("uniIcon",{attrs:{type:"forward",size:"20",color:"#ACACAC"}})],1)],1)],1),i("popupMe",{ref:"latiPart",attrs:{title:"新增经纱成份"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.getContent("lati",e)}}}),i("popupMe",{ref:"longtiPart",attrs:{title:"新增纬纱成份"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.getContent("longti",e)}}}),i("v-uni-view",{staticClass:"form_box box_shadow"},[i("v-uni-view",{staticClass:"flex_c list"},[i("v-uni-view",{staticClass:"font_we_bold fs_16"},[t._v("产品要素")])],1),i("v-uni-view",{staticClass:"flex_c list_part"},[i("v-uni-view",[t._v("成份"),i("v-uni-text",{staticClass:"fs_12 color_909090 pl_20"},[t._v("(可多选,按顺序勾选,可手动添加属性)")])],1)],1),i("v-uni-view",{staticClass:"flex_sb list_part"},[i("v-uni-view",{staticClass:"fs_13 wid_550 box-borer"},[t._v("经："),t._l(t.part,function(e,n){return[i("v-uni-text",{key:n+"_0",staticClass:"pl_10"},[t._v(t._s(n+1)+"、"+t._s(e))])]})],2),i("v-uni-view",{staticClass:"fs_13 color_FF6000",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapNewPart.apply(void 0,arguments)}}},[t._v("+新增")])],1),i("v-uni-view",{staticClass:"flex_c list"},[i("partCheckboxGroup",{attrs:{items:t.partList},on:{selectChange:function(e){arguments[0]=e=t.$handleEvent(e),t.tapPartSelect.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"flex_sb list_part"},[i("v-uni-view",{staticClass:"fs_13 wid_550 box-borer"},[t._v("纬："),t._l(t.partLong,function(e,n){return[i("v-uni-text",{key:n+"_0",staticClass:"pl_10"},[t._v(t._s(n+1)+"、"+t._s(e))])]})],2),i("v-uni-view",{staticClass:"fs_13 color_FF6000",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapNewPartLong.apply(void 0,arguments)}}},[t._v("+新增")])],1),i("v-uni-view",{staticClass:"flex_c list"},[i("partCheckboxGroup",{attrs:{items:t.partListLong},on:{selectChange:function(e){arguments[0]=e=t.$handleEvent(e),t.tapPartLongSelect.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"flex_c list_right_content"},[i("v-uni-view",{staticClass:"fs_13"},[t._v("含量：")]),i("v-uni-input",{staticClass:"input",attrs:{"placeholder-class":"color_909090 fs_13",placeholder:"请输入，例如涤75%/氨10%/棉5%",name:"content"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1),i("v-uni-view",{staticClass:"form_box box_shadow"},[i("v-uni-view",{staticClass:"flex_c list_part"},[i("v-uni-view",[t._v("规格")])],1),i("v-uni-view"),i("v-uni-view",{staticClass:"flex_c list_right_content justify-content"},[i("v-uni-view",{staticClass:"flex_c"},[i("v-uni-view",{staticClass:"fs_13"},[t._v("经：")]),i("v-uni-input",{staticClass:"input",attrs:{"placeholder-class":"color_909090 fs_13",placeholder:"例如T50d/72Ffdy+t50d/72Ffdy",name:"spec_longitude"},model:{value:t.spec_longitude,callback:function(e){t.spec_longitude=e},expression:"spec_longitude"}})],1),i("v-uni-view",{staticClass:"Clipboard",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapPaste.apply(void 0,arguments)}}},[t._v("复制")])],1),i("v-uni-view",{staticClass:"flex_c list_right_content"},[i("v-uni-view",{staticClass:"fs_13"},[t._v("纬：")]),i("v-uni-input",{staticClass:"input",attrs:{"placeholder-class":"color_909090 fs_13",placeholder:"例如T50d/72Ffdy+t50d/72Ffdy",name:"spec_latitude"},model:{value:t.spec_latitude,callback:function(e){t.spec_latitude=e},expression:"spec_latitude"}})],1)],1),i("v-uni-view",{staticClass:"form_box box_shadow"},[i("pickerInput",{attrs:{items:t.styleSerial,name:"风格",firstLabel:t.styleSerialValue,fontSize:"font-size:13px;"},on:{mychange:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSwitchChange("styleChange",e)}}}),i("v-uni-view",{staticClass:"flex_c list_right_content"},[i("v-uni-view",{staticClass:"fs_13"},[t._v("组织：")]),i("v-uni-input",{staticClass:"input",attrs:{"placeholder-class":"color_909090 fs_13",placeholder:"请输入风格的组织，如2/1",name:"organize"},model:{value:t.organize,callback:function(e){t.organize=e},expression:"organize"}})],1)],1),i("v-uni-view",{staticClass:"form_box box_shadow"},[i("pickerButton",{attrs:{items:t.sampleType,name:"布样类型"},on:{buttonChange:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSwitchChange("sampleType",e)}}}),i("v-uni-view",{staticClass:"flex_c list_part"},[i("v-uni-view",[t._v("密度"),i("v-uni-text",{staticClass:"pl_20"},[t._v("("+t._s(1==t.sampleTypeIndex?"坯布":"成品")+")")])],1)],1),i("v-uni-view",{staticClass:"flex_c list_right_content"},[i("v-uni-view",{staticClass:"fs_13"},[t._v("经:")]),i("v-uni-input",{staticClass:"input-half-width",attrs:{"placeholder-class":"color_909090 fs_13",placeholder:"请输入数量",name:"density_longitude",type:"number"},model:{value:t.density_longitude,callback:function(e){t.density_longitude=e},expression:"density_longitude"}}),i("v-uni-view",{staticClass:"fs_13"},[t._v("纬：")]),i("v-uni-input",{staticClass:"input-half-width",attrs:{"placeholder-class":"color_909090 fs_13",placeholder:"请输入数量",name:"density_latitude",type:"number"},model:{value:t.density_latitude,callback:function(e){t.density_latitude=e},expression:"density_latitude"}}),i("switchButton",{attrs:{items:t.densityUnit},on:{buttonChange:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSwitchChange("densityUnit",e)}}})],1),i("v-uni-view",{staticClass:"flex_sb list_right_content"},[i("v-uni-view",{staticClass:"flex_c"},[i("v-uni-view",{staticClass:"fs_13"},[t._v("克重"),i("v-uni-text",{staticClass:"pl_20"},[t._v("("+t._s(1==t.sampleTypeIndex?"坯布":"成品")+")：")])],1),i("v-uni-input",{staticClass:"input_300",attrs:{"placeholder-class":"color_909090 fs_13",placeholder:"请输入数量",name:"grammage",type:"number"},model:{value:t.grammage,callback:function(e){t.grammage=e},expression:"grammage"}})],1),i("v-uni-view",{staticClass:"flex_c"},[i("switchButton",{attrs:{items:t.grammageUnit},on:{buttonChange:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSwitchChange("grammageUnit",e)}}})],1)],1),i("v-uni-view",{staticClass:"flex_sb list_right_content"},[i("v-uni-view",{staticClass:"flex_c"},[i("v-uni-view",{staticClass:"fs_13"},[t._v("幅宽"),i("v-uni-text",{staticClass:"pl_20"},[t._v("("+t._s(1==t.sampleTypeIndex?"坯布":"成品")+")：")])],1),i("v-uni-input",{staticClass:"input_300",attrs:{"placeholder-class":"color_909090 fs_13",placeholder:"请输入数量",name:"clothBreadth",type:"number"},model:{value:t.clothBreadth,callback:function(e){t.clothBreadth=e},expression:"clothBreadth"}})],1),i("v-uni-view",[t._v("cm")])],1)],1),i("v-uni-view",{staticClass:"form_box box_shadow"},[i("myPickerSmall",{attrs:{firstLabel:t.qualityName,items:t.qualityPosition,name:"品质定位"},on:{mychange:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSwitchChange("qualityPosition",e)}}}),i("v-uni-view",{staticClass:"flex_sb list_right_content"},[i("v-uni-view",{staticClass:"flex_c"},[i("v-uni-view",{staticClass:"fs_13"},[t._v("购买数量：")]),i("v-uni-input",{staticClass:"input_300",attrs:{"placeholder-class":"color_909090 fs_13",placeholder:"请输入数量",name:"purchaseQuantity",type:"number"},model:{value:t.purchaseQuantity,callback:function(e){t.purchaseQuantity=e},expression:"purchaseQuantity"}})],1),i("v-uni-view",{staticClass:"flex_c"},[i("switchButton",{attrs:{items:t.lengthUnit},on:{buttonChange:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSwitchChange("lengthUnit",e)}}})],1)],1),i("v-uni-view",{staticClass:"flex_sb list_right_content"},[i("v-uni-view",{staticClass:"flex_c"},[i("v-uni-view",{staticClass:"fs_13"},[t._v("挂码率：")]),i("v-uni-input",{staticClass:"input_300",attrs:{"placeholder-class":"color_909090 fs_13",placeholder:"请输入",name:"guamalv",type:"number"},model:{value:t.guamalv,callback:function(e){t.guamalv=e},expression:"guamalv"}})],1),i("v-uni-view",[t._v("%")])],1),i("v-uni-view",{staticClass:"flex_c list_right_content"},[i("v-uni-view",{staticClass:"fs_13"},[t._v("备注：")]),i("v-uni-input",{staticClass:"input",attrs:{"placeholder-class":"color_909090 fs_13",placeholder:"非必填",name:"remarks"},model:{value:t.remarks,callback:function(e){t.remarks=e},expression:"remarks"}})],1),2==t.inquiryTypeIndex?i("v-uni-view",{staticClass:"uploadFile list_right_content"},[i("v-uni-view",[i("v-uni-text",{staticClass:"fs_14;"},[t._v("布样照片")]),i("v-uni-text",{staticClass:"smallFont"},[t._v("（最多可上传9张）")])],1),i("v-uni-view",{staticClass:"flex_wrap"},[t._l(t.pictures,function(t,e){return[i("v-uni-view",[i("v-uni-image",{staticClass:"picture_style",attrs:{src:t,mode:"aspectFill"}})],1)]}),i("v-uni-view",{staticClass:"IconStyle",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pickImage.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"iconCenter"},[i("v-uni-view",[i("uniIcon",{attrs:{type:"plus",color:"#CECECE",size:"30"}})],1),i("v-uni-view",{staticStyle:{"margin-top":"-40upx"}},[i("v-uni-text",{staticStyle:{"font-size":"14px",color:"#B1B1B1"}},[t._v("添加图片")])],1)],1)],1)],2),i("v-uni-view",{staticStyle:{height:"80upx",width:"100%",color:"#FFFFFF"}})],1):t._e()],1),i("v-uni-view",{staticClass:"placeholder-view"}),i("v-uni-view",{staticClass:"fixed_bottom box_shadow_btn"},[i("v-uni-button",{staticClass:"btn_left",attrs:{"hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindCancel.apply(void 0,arguments)}}},[t._v("取消")]),i("v-uni-button",{staticClass:"btn_right",attrs:{"hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})}}]);