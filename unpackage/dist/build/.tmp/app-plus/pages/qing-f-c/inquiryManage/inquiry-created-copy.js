(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/inquiryManage/inquiry-created-copy"],{"076c":function(e,t,i){"use strict";(function(e){i("3b9b"),i("921b");n(i("66fd"));var t=n(i("7530"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},7530:function(e,t,i){"use strict";i.r(t);var n=i("b46f"),a=i("c75d");for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);i("fd2f");var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);t["default"]=c.exports},7655:function(e,t,i){},"7a17":function(e,t,i){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s=function(){return i.e("components/pickerButton-edit").then(i.bind(null,"1015"))},o=function(){return i.e("components/myPicker-inquiry").then(i.bind(null,"bd6e"))},r=function(){return i.e("components/partCheckboxGroup").then(i.bind(null,"c8bc"))},c=function(){return i.e("components/myPickerSmall").then(i.bind(null,"3209"))},u=function(){return i.e("components/switchButton-edit").then(i.bind(null,"2cc1"))},l=function(){return i.e("components/pickerInput").then(i.bind(null,"f107"))},d=function(){return i.e("components/uni-icons/uni-icons").then(i.bind(null,"2cee"))},g=function(){return i.e("components/popupMe").then(i.bind(null,"cb0f"))},y={components:{pickerButton:s,myPicker:o,partCheckboxGroup:r,myPickerSmall:c,switchButton:u,pickerInput:l,uniIcon:d,popupMe:g},data:function(){return{clothBreadth:"",tradeName:"",content:"",spec_longitude:"",spec_latitude:"",organize:"",style:"",grammage:"",density_latitude:"",density_longitude:"",purchaseQuantity:"",guamalv:"",remarks:"",inquiryType:[],inquiryTypeIndex:1,densityUnit:[],densityUnitIndex:1,grammageUnit:[],grammageUnitIndex:2,lengthUnit:[],lengthUnitIndex:1,productSerial:[],productSerialIndex:"",productSerialValue:"",buyer:"",buyerCode:"",productType:"",productTypeIndex:"",styleSerial:[],styleSerialIndex:"",styleSerialValue:"",qualityPosition:[],qualityPositionIndex:"",qualityName:"",part:[],partID:[],partList:[],partListLong:[],partLong:[],partLongID:[],sampleType:[],sampleTypeIndex:1,mainProductName:"",newPartText:"",newPartLongText:"",styleCode:"",pictures:[],tempFiles:[],goAnalysisSample:""}},onLoad:function(t){a=this,e("log",t," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:309"),a.goAnalysisSample=JSON.parse(t.data),e("log",this.goAnalysisSample," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:311"),e("log",t.inquiryType," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:312"),this.inquiryTypeIndex=t.inquiryType,e("log",a.goAnalysisSample," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:317"),a.clothBreadth=a.goAnalysisSample.clothBreadth,a.tradeName=a.goAnalysisSample.tradeName,a.content=a.goAnalysisSample.content,a.spec_longitude=a.goAnalysisSample.specificationLongitude,a.spec_latitude=a.goAnalysisSample.specificationLatitude,a.organize=a.goAnalysisSample.organization,a.grammage=a.goAnalysisSample.gramWeight,a.density_latitude=a.goAnalysisSample.densityLatitude,a.density_longitude=a.goAnalysisSample.densityLongitude,a.densityUnitIndex=a.goAnalysisSample.densityUnitCode||1,a.grammageUnitIndex=a.goAnalysisSample.gramWeightUnitCode||2,a.productSerialIndex=a.goAnalysisSample.seriesCode||"",a.productSerialValue=a.goAnalysisSample.seriesName,a.productTypeIndex=a.goAnalysisSample.mainProductCode||"",a.mainProductName=a.goAnalysisSample.mainProductName,a.qualityPositionIndex=a.goAnalysisSample.qualityCode,a.qualityName=a.goAnalysisSample.qualityName,a.sampleTypeIndex=a.goAnalysisSample.clothTypeCode,a.styleSerialIndex=a.goAnalysisSample.styleCode,a.styleSerialValue=a.goAnalysisSample.styleName,this.getAllSelect()},methods:{selectBuyer:function(){n.navigateTo({url:"/pages/qing-f-c/inquiryManage/selectBuyer",success:function(e){},fail:function(){},complete:function(){}})},getAllSelect:function(){var t=this,i=this.Api.getMainProduct,n={};this.myRequest(n,i,"get").then(function(t){e("log",t," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:361"),a.productType=t.data.data.list}).catch(function(e){wx.showToast({title:e.data.errMsg,icon:"none"})}),i=this.Api.inquiryType,n={},this.myRequest(n,i,"get").then(function(i){e("log",i," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:373"),a.inquiryType=i.data.data.list,a.inquiryType.forEach(function(e){e.id==a.inquiryTypeIndex&&t.$set(e,"isChecked",!0)})}).catch(function(e){wx.showToast({title:e.data.errMsg,icon:"none"})}),i=this.Api.series,n={},this.myRequest(n,i,"get").then(function(t){e("log",t," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:390"),a.productSerial=t.data.data.list}).catch(function(e){wx.showToast({title:e.data.errMsg,icon:"none"})}),i=this.Api.style,n={},this.myRequest(n,i,"get").then(function(t){e("log",t," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:402"),a.styleSerial=t.data.data.list}).catch(function(e){wx.showToast({title:e.data.errMsg,icon:"none"})}),i=this.Api.clothType,n={},this.myRequest(n,i,"get").then(function(i){e("log",i," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:414"),a.sampleType=i.data.data.list,a.sampleType=t.setIsChecked(a.sampleType,a.sampleTypeIndex)}).catch(function(e){wx.showToast({title:e.data.errMsg,icon:"none"})}),i=this.Api.densityUnit,n={},this.myRequest(n,i,"get").then(function(i){e("log",i," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:427"),a.densityUnit=i.data.data.list,a.densityUnit=t.setIsChecked(a.densityUnit,a.densityUnitIndex)}).catch(function(e){wx.showToast({title:e.data.errMsg,icon:"none"})}),i=this.Api.gramWeightUnit,n={},this.myRequest(n,i,"get").then(function(i){e("log",i," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:440"),a.grammageUnit=i.data.data.list,a.grammageUnit=t.setIsChecked(a.grammageUnit,a.grammageUnitIndex)}).catch(function(e){wx.showToast({title:e.data.errMsg,icon:"none"})}),i=this.Api.quantityUnit,n={},this.myRequest(n,i,"get").then(function(i){e("log",i," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:454"),a.lengthUnit=i.data.data.list,a.lengthUnit=t.setIsChecked(a.lengthUnit,a.lengthUnitIndex)}).catch(function(e){wx.showToast({title:e.data.errMsg,icon:"none"})}),i=this.Api.atom,n={},this.myRequest(n,i,"get").then(function(t){e("log",t," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:467"),a.partList=t.data.data.list}).catch(function(e){wx.showToast({title:e.data.errMsg,icon:"none"})}),this.myRequest(n,i,"get").then(function(t){e("log",t," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:478"),a.partListLong=t.data.data.list}).catch(function(e){wx.showToast({title:e.data.errMsg,icon:"none"})}),i=this.Api.getQuality,n={},this.myRequest(n,i,"get").then(function(t){e("log",t," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:491"),a.qualityPosition=t.data.data.list}).catch(function(e){wx.showToast({title:e.data.errMsg,icon:"none"})})},tapPartSelect:function(t,i){var n=this.partList;this.part=t,this.partID=i;for(var a=0,s=n.length;a<s;++a){var o=n[a];t.includes(o.label)?this.$set(o,"isChecked",!0):this.$set(o,"isChecked",!1)}e("log",this.partID," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:519")},tapPartLongSelect:function(t,i){var n=this.partListLong;this.partLong=t,this.partLongID=i;for(var a=0,s=n.length;a<s;++a){var o=n[a];t.includes(o.label)?this.$set(o,"isChecked",!0):this.$set(o,"isChecked",!1)}e("log",this.partLongID," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:535")},tapNewPart:function(){this.$refs.latiPart.show()},tapNewPartLong:function(){this.$refs.longtiPart.show()},getContent:function(t,i){var a=this;this.newPartText=i,e("log",this.newPartText," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:546");var s=this.Api.atomAdd,o={atomName:this.newPartText};n.showLoading({title:"创建中",mask:!0}),this.myRequest(o,s,"get").then(function(t){e("log",t," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:556"),n.hideLoading(),0==t.data.status&&a.getAllSelect()}).catch(function(e){wx.showToast({title:e.data.errMsg,icon:"none"})})},tapPaste:function(){n.setClipboardData({data:this.spec_longitude})},tabSwitchChange:function(t,i){var n=this;switch(t){case"sampleType":this.sampleTypeIndex=i,this.sampleType.forEach(function(e){e.id==n.sampleTypeIndex?n.$set(e,"isChecked",!0):n.$set(e,"isChecked",!1)}),e("log",this.sampleTypeIndex," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:587");break;case"inquiryType":this.inquiryTypeIndex=i,this.inquiryType.forEach(function(e){e.id==n.inquiryTypeIndex?n.$set(e,"isChecked",!0):n.$set(e,"isChecked",!1)}),e("log",this.inquiryTypeIndex," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:598");break;case"styleChange":e("log",i," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:602"),this.styleSerialIndex=i[1]||-1,this.styleSerialValue=i[0],"101346541950"==this.styleSerialIndex&&(this.organize="1/1"),e("log",this.styleSerialIndex," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:608"),e("log",this.styleSerialValue," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:609");break;case"productSerial":this.productSerialIndex=i[1]||-1,this.productSerialValue=i[0],e("log",this.productSerialValue," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:614"),e("log",this.productSerialIndex," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:615");break;case"densityUnit":this.densityUnitIndex=i,this.densityUnit.forEach(function(e){e.id==n.densityUnitIndex?n.$set(e,"isChecked",!0):n.$set(e,"isChecked",!1)}),e("log",this.densityUnitIndex," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:626");break;case"grammageUnit":this.grammageUnitIndex=i,this.grammageUnit.forEach(function(e){e.id==n.grammageUnitIndex?n.$set(e,"isChecked",!0):n.$set(e,"isChecked",!1)}),e("log",this.grammageUnitIndex," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:637"),e("log",this.grammageUnit," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:638");break;case"qualityPosition":this.qualityPositionIndex=i,e("log",this.qualityPositionIndex," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:642");break;case"lengthUnit":this.lengthUnitIndex=i,this.lengthUnit.forEach(function(e){e.id==n.lengthUnitIndex?n.$set(e,"isChecked",!0):n.$set(e,"isChecked",!1)}),e("log",this.lengthUnitIndex," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:653");break}},pickImage:function(){n.chooseImage({sizeType:["compressed"],success:function(t){var i=t.tempFilePaths;a.pictures=[];for(var s=0;s<i.length;s++)n.uploadFile({url:a.Api.upload,filePath:i[s],name:"file",success:function(t){e("log",t," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:670"),a.pictures.push(JSON.parse(t.data).data.msg),n.showToast({title:"上传成功",icon:"none",duration:1e3})}})}})},bindCancel:function(){n.navigateBack({delta:1})},submit:function(){var t=this;a.styleSerial.forEach(function(e){e.id==a.styleSerialIndex&&e.label!=a.styleSerialValue&&(t.styleSerialIndex=-1)}),a.productSerial.forEach(function(e){e.id==a.productSerialIndex&&e.label!=a.productSerialValue&&(t.productSerialIndex=-1)});var i={number:"",inquiryType:a.inquiryTypeIndex,buyOrSellCode:a.buyerCode,purchaseQuantity:a.purchaseQuantity,quantityUnit:a.lengthUnitIndex,hangBitRate:a.guamalv,remarks:a.remarks,tradeName:a.tradeName,seriesCode:a.productSerialIndex,seriesName:a.productSerialValue,ingredientLongitudes:a.partID,ingredientLatitudes:a.partLongID,content:a.content,mainProduct:a.productTypeIndex,specificationLongitude:a.spec_longitude,specificationLatitude:a.spec_latitude,styleCode:a.styleSerialIndex,styleName:a.styleSerialValue,organization:a.organize,clothType:a.sampleTypeIndex,densityLongitude:a.density_longitude,densityLatitude:a.density_latitude,densityUnit:a.densityUnitIndex,gramWeight:a.grammage,gramWeightUnit:a.grammageUnitIndex,clothBreadth:a.clothBreadth,qualityCode:a.qualityPositionIndex,pictures:a.pictures};if(1!=a.grammageUnitIndex||0!=a.clothBreadth){e("log",i," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:753");var s=this.Api.addInquiry;n.showLoading({title:"提交中",mask:!0}),this.myRequest(i,s,"post").then(function(t){if(e("log",t," at pages/qing-f-c/inquiryManage/inquiry-created-copy.vue:760"),n.hideLoading(),0==t.data.status){n.showToast({title:"询价单创建成功",icon:"none",duration:500});var i=getCurrentPages(),s=(i[i.length-1],i[i.length-2]);s.setData({isDoRefresh:!0}),1==a.inquiryTypeIndex?n.redirectTo({url:"/pages/qing-f-c/inquiryManage/inquiry-details?inquiryNumber="+t.data.data.msg,success:function(e){},fail:function(){},complete:function(){}}):n.redirectTo({url:"/pages/qing-f-c/inquiryManage/sampleInquiry/buyDeputy/inquiry-details?inquiryNumber="+t.data.data.msg,success:function(e){},fail:function(){},complete:function(){}})}else n.showToast({title:t.data.message,icon:"none"})}).catch(function(e){wx.showToast({title:e.data.errMsg,icon:"none"})})}else n.showToast({title:"幅宽必填",icon:"none",duration:500})}}};t.default=y}).call(this,i("0de9")["default"],i("6e42")["default"])},b46f:function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement;e._self._c},s=[];i.d(t,"b",function(){return a}),i.d(t,"c",function(){return s}),i.d(t,"a",function(){return n})},c75d:function(e,t,i){"use strict";i.r(t);var n=i("7a17"),a=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t["default"]=a.a},fd2f:function(e,t,i){"use strict";var n=i("7655"),a=i.n(n);a.a}},[["076c","common/runtime","common/vendor"]]]);