(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input"],{"72b4":function(t,e,n){"use strict";var a=n("f042"),i=n.n(a);i.a},"797f":function(t,e,n){"use strict";n.r(e);var a=n("c10b"),i=n("c011");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("72b4");var u,r=n("f0c5"),o=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=o.exports},a61d:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,s=function(){return n.e("components/pickerButton").then(n.bind(null,"5f6f"))},u=function(){return n.e("components/myPicker").then(n.bind(null,"f08a"))},r=function(){return n.e("components/partCheckboxGroup").then(n.bind(null,"c8bc"))},o=function(){return n.e("components/myPickerSmall").then(n.bind(null,"3209"))},l=function(){return n.e("components/switchButton-auto").then(n.bind(null,"12e7"))},c=function(){return n.e("components/pickerInput").then(n.bind(null,"f107"))},d=function(){return n.e("components/uni-icons/uni-icons").then(n.bind(null,"2cee"))},g=function(){return n.e("components/popupMe").then(n.bind(null,"cb0f"))},p={components:{pickerButton:s,myPicker:u,partCheckboxGroup:r,myPickerSmall:o,switchButton:l,pickerInput:c,uniIcon:d,popupMe:g},data:function(){return{clothBreadth:"",tradeName:"",content:"",spec_longitude:"",spec_latitude:"",organize:"",style:"",grammage:"",density_latitude:"",density_longitude:"",purchaseQuantity:"",guamalv:"",remarks:"",inquiryType:[],inquiryTypeIndex:1,densityUnit:[],densityUnitIndex:1,grammageUnit:[],grammageUnitIndex:1,lengthUnit:[],lengthUnitIndex:1,productSerial:[],productSerialIndex:"",productSerialValue:"",productType:[],productTypeIndex:1,buyer:"",buyerCode:"",styleSerial:[],styleSerialIndex:-1,styleSerialValue:"",qualityPosition:[],qualityPositionIndex:"",part:[],partID:[],partList:[],partListLong:[],partLong:[],partLongID:[],sampleType:[],sampleTypeIndex:1,newPartText:"",newPartLongText:"",styleCode:-1,number:"",orderType:"",pictures:[]}},onLoad:function(e){if(i=this,t("log",e," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:257"),this.number=e.number,t("log",this.number," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:259"),this.orderType=e.orderType,this.qualityPositionIndex=e.qualityPosition,e.data){var n=JSON.parse(e.data);i.productSerialIndex=n.seriesCode||1,i.productSerialValue=n.seriesName,i.styleSerialIndex=n.styleCode||-1,i.styleSerialValue=n.styleName,i.clothBreadth=n.clothBreadth,i.tradeName=n.tradeName,i.content=n.content,i.spec_longitude=n.specificationLongitude,i.spec_latitude=n.specificationLatitude,i.organize=n.organization,i.grammage=n.gramWeight,i.density_latitude=n.densityLatitude,i.density_longitude=n.densityLongitude,i.densityUnitIndex=n.densityUnitCode||1,i.grammageUnitIndex=n.gramWeightUnitCode||1,i.productSerialIndex=n.seriesCode,i.productSerialValue=n.seriesName,i.productTypeIndex=n.mainProductCode||1,i.mainProductName=n.mainProductName,i.qualityPositionIndex=n.qualityCode,i.sampleTypeIndex=n.clothTypeCode||1}this.getAllSelect()},methods:{selectBuyer:function(){a.navigateTo({url:"/pages/qing-f-c/inquiryManage/selectBuyer",success:function(t){},fail:function(){},complete:function(){}})},getAllSelect:function(){var e=this,n=this.Api.getMainProduct,a={};this.myRequest(a,n,"get").then(function(e){t("log",e," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:311"),i.productType=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),n=this.Api.inquiryType,a={},this.myRequest(a,n,"get").then(function(e){t("log",e," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:323"),i.inquiryType=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),n=this.Api.series,a={},this.myRequest(a,n,"get").then(function(e){t("log",e," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:335"),i.productSerial=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),n=this.Api.style,a={},this.myRequest(a,n,"get").then(function(e){t("log",e," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:347"),i.styleSerial=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),n=this.Api.clothType,a={},this.myRequest(a,n,"get").then(function(e){t("log",e," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:359"),i.sampleType=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),n=this.Api.densityUnit,a={},this.myRequest(a,n,"get").then(function(n){t("log",n," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:371"),i.densityUnit=n.data.data.list,i.densityUnit=e.setIsChecked(i.densityUnit,i.densityUnitIndex)}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),n=this.Api.gramWeightUnit,a={},this.myRequest(a,n,"get").then(function(n){t("log",n," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:384"),i.grammageUnit=n.data.data.list,i.grammageUnit=e.setIsChecked(i.grammageUnit,i.grammageUnitIndex)}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),n=this.Api.quantityUnit,a={},this.myRequest(a,n,"get").then(function(e){t("log",e," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:397"),i.lengthUnit=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),n=this.Api.atom,a={},this.myRequest(a,n,"get").then(function(e){t("log",e," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:409"),i.partList=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),this.myRequest(a,n,"get").then(function(e){t("log",e," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:420"),i.partListLong=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),n=this.Api.getQuality,a={},this.myRequest(a,n,"get").then(function(e){t("log",e," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:433"),i.qualityPosition=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},tapPartSelect:function(e,n){var a=this.partList;this.part=e,this.partID=n;for(var i=0,s=a.length;i<s;++i){var u=a[i];e.includes(u.label)?this.$set(u,"isChecked",!0):this.$set(u,"isChecked",!1)}t("log",this.partID," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:461")},tapPartLongSelect:function(e,n){var a=this.partListLong;this.partLong=e,this.partLongID=n;for(var i=0,s=a.length;i<s;++i){var u=a[i];e.includes(u.label)?this.$set(u,"isChecked",!0):this.$set(u,"isChecked",!1)}t("log",this.partLongID," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:477")},tapNewPart:function(){this.$refs.latiPart.show()},tapNewPartLong:function(){this.$refs.longtiPart.show()},getContent:function(e,n){var a=this;switch(e){case"lati":this.newPartText=n,t("log",this.newPartText," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:490");var i=this.Api.atomAdd,s={atomName:this.newPartText};this.myRequest(s,i,"get").then(function(e){t("log",e," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:496"),0==e.data.status&&a.getAllSelect()}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})});break;case"longti":this.newPartLongText=n,t("log",this.newPartLongText," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:509");break}},tapPaste:function(){this.spec_latitude=this.spec_longitude},tabSwitchChange:function(e,n){switch(e){case"sampleType":this.sampleTypeIndex=n,t("log",this.sampleTypeIndex," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:526");break;case"inquiryType":this.inquiryTypeIndex=n,t("log",this.inquiryTypeIndex," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:530");break;case"styleChange":t("log",n," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:534"),this.styleSerialIndex=n[1]||-1,this.styleSerialValue=n[0],"平纹"==this.styleSerialValue&&(this.organize="1/1");break;case"productSerial":this.productSerialIndex=n[1]||-1,this.productSerialValue=n[0],t("log",this.productSerialIndex," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:546");break;case"productType":this.productTypeIndex=n,t("log",this.productTypeIndex," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:550");break;case"densityUnit":this.densityUnitIndex=n,t("log",this.densityUnitIndex," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:555");break;case"grammageUnit":this.grammageUnitIndex=n,t("log",this.grammageUnitIndex," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:559");break;case"qualityPosition":this.qualityPositionIndex=n,t("log",this.qualityPositionIndex," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:563");break;case"lengthUnit":this.lengthUnitIndex=n,t("log",this.lengthUnitIndex," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:567");break}},pickImage:function(){a.chooseImage({sizeType:["compressed"],success:function(e){var n=e.tempFilePaths;i.pictures=[];for(var s=0;s<n.length;s++)a.uploadFile({url:i.Api.upload,filePath:n[s],name:"file",success:function(e){t("log",e," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:584"),i.pictures.push(JSON.parse(e.data).data.msg),a.showToast({title:"上传成功",icon:"none",duration:1e3})}})}})},bindCancel:function(){a.navigateBack({delta:1})},submit:function(){var e=this;i.styleSerial.forEach(function(t){t.id==i.styleSerialIndex&&t.label!=i.styleSerialValue&&(e.styleSerialIndex=-1)}),i.productSerial.forEach(function(t){t.id==i.productSerialIndex&&t.label!=i.productSerialValue&&(e.productSerialIndex=-1)});var n={number:i.number,orderType:i.orderType,mainProductCode:i.productTypeIndex,tradeName:i.tradeName,seriesCode:i.productSerialIndex,seriesName:i.productSerialValue,ingredientLongitudes:i.partID,ingredientLatitudes:i.partLongID,content:i.content,specificationLongitude:i.spec_longitude,specificationLatitude:i.spec_latitude,styleCode:i.styleSerialIndex,styleName:i.styleSerialValue,organization:i.organize,clothType:i.sampleTypeIndex,densityLongitude:i.density_longitude,densityLatitude:i.density_latitude,densityUnit:i.densityUnitIndex,gramWeight:i.grammage,gramWeightUnit:i.grammageUnitIndex,clothBreadth:i.clothBreadth,qualityCode:i.qualityPositionIndex,remarks:i.remarks,pictures:i.pictures};if(1!=i.grammageUnitIndex||0!=i.clothBreadth){var s=this.Api.analystAdd;t("log",n," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:660"),a.showLoading({title:"正在提交",mask:!0}),this.myRequest(n,s,"post").then(function(e){if(t("log",e," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/analyst-input.vue:666"),0==e.data.status){a.hideLoading(),a.showToast({title:"录入分析成功",icon:"none",duration:500});var n=getCurrentPages(),i=(n[n.length-1],n[n.length-2]);i.setData({isDoRefresh:!0}),a.navigateBack({delta:1})}else a.showToast({title:e.data.message,icon:"none"})}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})}else a.showToast({title:"幅宽必填",icon:"none",duration:500})}}};e.default=p}).call(this,n("0de9")["default"],n("6e42")["default"])},c011:function(t,e,n){"use strict";n.r(e);var a=n("a61d"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a},c10b:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return a})},c85b:function(t,e,n){"use strict";(function(t){n("3b9b"),n("921b");a(n("66fd"));var e=a(n("797f"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f042:function(t,e,n){}},[["c85b","common/runtime","common/vendor"]]]);