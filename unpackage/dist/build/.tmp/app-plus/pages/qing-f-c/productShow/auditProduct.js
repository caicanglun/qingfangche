(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/productShow/auditProduct"],{"0ec0":function(t,e,i){"use strict";i.r(e);var a=i("ea42"),n=i("5cdc");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("8fbd");var s,d=i("f0c5"),c=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=c.exports},"3a8e":function(t,e,i){"use strict";(function(t){i("3b9b"),i("921b");a(i("66fd"));var e=a(i("0ec0"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},"5cdc":function(t,e,i){"use strict";i.r(e);var a=i("6df1"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"6df1":function(t,e,i){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,o=function(){return i.e("components/pickerButton-edit").then(i.bind(null,"1015"))},s=function(){return i.e("components/myPicker-inquiry").then(i.bind(null,"bd6e"))},d=function(){return i.e("components/partCheckboxGroup").then(i.bind(null,"c8bc"))},c=function(){return i.e("components/myPickerSmall").then(i.bind(null,"3209"))},u=function(){return i.e("components/switchButton-auto").then(i.bind(null,"12e7"))},r=function(){return i.e("components/switchButton-edit").then(i.bind(null,"2cc1"))},l=function(){return i.e("components/pickerInput").then(i.bind(null,"f107"))},h=function(){return i.e("components/uni-icons/uni-icons").then(i.bind(null,"2cee"))},g=function(){return i.e("components/popupMe").then(i.bind(null,"cb0f"))},p=function(){return i.e("components/popupMeSeason").then(i.bind(null,"e6a6"))},m={components:{pickerButton:o,myPicker:s,partCheckboxGroup:d,myPickerSmall:c,switchButton:u,pickerInput:l,uniIcon:h,popupMe:g,switchButtonEdit:r,popupMeSeason:p},data:function(){return{companyCode:"",machineCount:"",dailyProduction:"",machineStatus:[],machineStatusIndex:1,inStock:[],inStockIndex:1,months:[{id:1,label:"一月"},{id:2,label:"二月"},{id:3,label:"三月"},{id:4,label:"四月"},{id:5,label:"五月"},{id:6,label:"六月"},{id:7,label:"七月"},{id:8,label:"八月"},{id:9,label:"九月"},{id:10,label:"十月"},{id:11,label:"十一月"},{id:12,label:"十二月"}],highSeasonTimeCode:"",clothBreadth:"",tradeName:"",content:"",spec_longitude:"",spec_latitude:"",organize:"",style:"",grammage:"",density_latitude:"",density_longitude:"",purchaseQuantity:"",guamalv:"",remarks:"",inquiryType:[],inquiryTypeIndex:1,densityUnit:[],densityUnitIndex:1,grammageUnit:[],grammageUnitIndex:2,lengthUnit:[],lengthUnitIndex:1,productSerial:[],productSerialIndex:"",productSerialValue:"",buyer:"",buyerCode:"",productType:"",productTypeIndex:1,mainProductName:"",styleSerial:[],styleSerialIndex:"",styleSerialValue:"",qualityPosition:[],qualityPositionIndex:"",qualityName:"",part:[],partID:[],partList:[],ingredient:"",ingredientLongitude:"",ingredientLatitude:"",partListLong:[],partLong:[],partLongID:[],sampleType:[],sampleTypeIndex:1,newPartText:"",newPartLongText:"",styleCode:"",pictures:[],tempFiles:[],season:[],seasonCode:[],seasonName:"",machineType:[],machineTypeIndex:-1,machineTypeValue:"",machineBrand:[],machineBrandIndex:"",machineBrandValue:"",goodsCount:"",goodsDetail:""}},onLoad:function(e){var i=this;n=this,this.goodsDetail=JSON.parse(e.goodsDetail),t("log",this.goodsDetail," at pages/qing-f-c/productShow/auditProduct.vue:349"),this.tradeName=this.goodsDetail.tradeName,this.highSeasonTimeCode=this.goodsDetail.highSeasonTimeCode;var a=this.highSeasonTimeCode.split(",");t("log",a," at pages/qing-f-c/productShow/auditProduct.vue:353"),this.months.forEach(function(t){a.includes(t.id.toString())&&i.$set(t,"isChecked",!0)}),t("log",this.months," at pages/qing-f-c/productShow/auditProduct.vue:359"),this.productTypeIndex=n.goodsDetail.mainProductCode||"",this.mainProductName=n.goodsDetail.mainProductName,n.productSerialIndex=n.goodsDetail.seriesCode,n.productSerialValue=n.goodsDetail.seriesName,n.styleSerialIndex=n.goodsDetail.styleCode,n.styleSerialValue=n.goodsDetail.styleName,n.content=n.goodsDetail.content,n.spec_longitude=n.goodsDetail.specificationLongitude,n.spec_latitude=n.goodsDetail.specificationLatitude,n.organize=n.goodsDetail.organization,n.grammage=n.goodsDetail.gramWeight,n.density_latitude=n.goodsDetail.densityLatitude,n.density_longitude=n.goodsDetail.densityLongitude,n.densityUnitIndex=n.goodsDetail.densityUnitCode||1,n.grammageUnitIndex=n.goodsDetail.gramWeightUnitCode||2,n.sampleTypeIndex=n.goodsDetail.clothTypeCode,n.qualityPositionIndex=n.goodsDetail.qualityCode,n.qualityName=n.goodsDetail.qualityName,n.clothBreadth=n.goodsDetail.clothBreadth,n.ingredient=n.goodsDetail.ingredient,n.ingredientLatitude=n.goodsDetail.ingredientLatitude,n.ingredientLongitude=n.goodsDetail.ingredientLongitude,this.getAllSelect()},methods:{getAllSelect:function(){var e=this,i=this.Api.getMainProduct,a={};this.myRequest(a,i,"get").then(function(e){t("log",e," at pages/qing-f-c/productShow/auditProduct.vue:395"),n.productType=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),i=this.Api.series,a={},this.myRequest(a,i,"get").then(function(e){t("log",e," at pages/qing-f-c/productShow/auditProduct.vue:408"),n.productSerial=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),i=this.Api.style,a={},this.myRequest(a,i,"get").then(function(e){t("log",e," at pages/qing-f-c/productShow/auditProduct.vue:420"),n.styleSerial=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),i=this.Api.clothType,a={},this.myRequest(a,i,"get").then(function(i){t("log",i," at pages/qing-f-c/productShow/auditProduct.vue:432"),n.sampleType=i.data.data.list,n.sampleType=e.setIsChecked(n.sampleType,n.sampleTypeIndex)}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),i=this.Api.densityUnit,a={},this.myRequest(a,i,"get").then(function(i){t("log",i," at pages/qing-f-c/productShow/auditProduct.vue:445"),n.densityUnit=i.data.data.list,n.densityUnit=e.setIsChecked(n.densityUnit,n.densityUnitIndex)}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),i=this.Api.gramWeightUnit,a={},this.myRequest(a,i,"get").then(function(i){t("log",i," at pages/qing-f-c/productShow/auditProduct.vue:458"),n.grammageUnit=i.data.data.list,n.grammageUnit=e.setIsChecked(n.grammageUnit,n.grammageUnitIndex),t("log",n.grammageUnit," at pages/qing-f-c/productShow/auditProduct.vue:462")}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),i=this.Api.quantityUnit,a={},this.myRequest(a,i,"get").then(function(i){t("log",i," at pages/qing-f-c/productShow/auditProduct.vue:473"),n.lengthUnit=i.data.data.list,n.lengthUnit=e.setIsChecked(n.lengthUnit,n.lengthUnitIndex)}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),i=this.Api.atom,a={},this.myRequest(a,i,"get").then(function(e){t("log",e," at pages/qing-f-c/productShow/auditProduct.vue:486"),n.partList=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),this.myRequest(a,i,"get").then(function(e){t("log",e," at pages/qing-f-c/productShow/auditProduct.vue:497"),n.partListLong=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),i=this.Api.getQuality,a={},this.myRequest(a,i,"get").then(function(e){t("log",e," at pages/qing-f-c/productShow/auditProduct.vue:510"),n.qualityPosition=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),i=this.Api.machineStatus,a={},this.myRequest(a,i,"get").then(function(i){t("log",i," at pages/qing-f-c/productShow/auditProduct.vue:523"),n.machineStatus=i.data.data.list,n.machineStatus=e.setIsChecked(n.machineStatus,n.machineStatusIndex)}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),i=this.Api.inStock,a={},this.myRequest(a,i,"get").then(function(i){t("log",i," at pages/qing-f-c/productShow/auditProduct.vue:537"),n.inStock=i.data.data.list,n.inStock=e.setIsChecked(n.inStock,n.inStockIndex)}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),i=this.Api.machineType,a={},this.myRequest(a,i,"get").then(function(e){t("log",e," at pages/qing-f-c/productShow/auditProduct.vue:551"),n.machineType=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),i=this.Api.machineBrand,a={},this.myRequest(a,i,"get").then(function(e){t("log",e," at pages/qing-f-c/productShow/auditProduct.vue:564"),n.machineBrand=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},tapPartSelect:function(e,i){var a=this.partList;this.part=e,this.partID=i;for(var n=0,o=a.length;n<o;++n){var s=a[n];e.includes(s.label)?this.$set(s,"isChecked",!0):this.$set(s,"isChecked",!1)}t("log",this.partID," at pages/qing-f-c/productShow/auditProduct.vue:593")},tapPartLongSelect:function(e,i){var a=this.partListLong;this.partLong=e,this.partLongID=i;for(var n=0,o=a.length;n<o;++n){var s=a[n];e.includes(s.label)?this.$set(s,"isChecked",!0):this.$set(s,"isChecked",!1)}t("log",this.partLongID," at pages/qing-f-c/productShow/auditProduct.vue:609")},tapNewPart:function(){this.$refs.latiPart.show()},tapNewPartLong:function(){this.$refs.longtiPart.show()},getContent:function(e,i){var n=this;this.newPartText=i,t("log",this.newPartText," at pages/qing-f-c/productShow/auditProduct.vue:620");var o=this.Api.atomAdd,s={atomName:this.newPartText};a.showLoading({title:"创建中",mask:!0}),this.myRequest(s,o,"get").then(function(e){t("log",e," at pages/qing-f-c/productShow/auditProduct.vue:630"),a.hideLoading(),0==e.data.status&&n.getAllSelect()}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},handleSeason:function(e){n.months=e,t("log",n.months," at pages/qing-f-c/productShow/auditProduct.vue:645"),n.months.forEach(function(t){1==t.isChecked&&n.seasonCode.push(t.id)}),n.seasonName=n.seasonCode.join(","),t("log",n.seasonName," at pages/qing-f-c/productShow/auditProduct.vue:652")},tapPaste:function(){a.setClipboardData({data:this.spec_longitude})},tabSwitchChange:function(e,i){var a=this;switch(e){case"sampleType":this.sampleTypeIndex=i,this.sampleType.forEach(function(t){t.id==a.sampleTypeIndex?a.$set(t,"isChecked",!0):a.$set(t,"isChecked",!1)}),t("log",this.sampleTypeIndex," at pages/qing-f-c/productShow/auditProduct.vue:673");break;case"inquiryType":this.inquiryTypeIndex=i,this.inquiryType.forEach(function(t){t.id==a.inquiryTypeIndex?a.$set(t,"isChecked",!0):a.$set(t,"isChecked",!1)}),t("log",this.inquiryTypeIndex," at pages/qing-f-c/productShow/auditProduct.vue:684");break;case"styleChange":t("log",i," at pages/qing-f-c/productShow/auditProduct.vue:688"),this.styleSerialIndex=i[1]||-1,this.styleSerialValue=i[0],"101346541950"==this.styleSerialIndex&&(this.organize="1/1"),t("log",this.styleSerialIndex," at pages/qing-f-c/productShow/auditProduct.vue:694"),t("log",this.styleSerialValue," at pages/qing-f-c/productShow/auditProduct.vue:695");break;case"productSerial":this.productSerialIndex=i[1]||-1,this.productSerialValue=i[0],t("log",this.productSerialIndex," at pages/qing-f-c/productShow/auditProduct.vue:701"),t("log",this.productSerialValue," at pages/qing-f-c/productShow/auditProduct.vue:702");break;case"densityUnit":this.densityUnitIndex=i,t("log",this.densityUnitIndex," at pages/qing-f-c/productShow/auditProduct.vue:706");break;case"grammageUnit":this.grammageUnitIndex=i,this.grammageUnit.forEach(function(t){t.id==a.grammageUnitIndex?a.$set(t,"isChecked",!0):a.$set(t,"isChecked",!1)}),t("log",this.grammageUnitIndex," at pages/qing-f-c/productShow/auditProduct.vue:717");break;case"qualityPosition":this.qualityPositionIndex=i,t("log",this.qualityPositionIndex," at pages/qing-f-c/productShow/auditProduct.vue:721");break;case"lengthUnit":this.lengthUnitIndex=i,t("log",this.lengthUnitIndex," at pages/qing-f-c/productShow/auditProduct.vue:725");break;case"productType":this.productTypeIndex=i,t("log",this.productTypeIndex," at pages/qing-f-c/productShow/auditProduct.vue:729");break;case"machineStatus":this.machineStatusIndex=i,t("log",this.machineStatusIndex," at pages/qing-f-c/productShow/auditProduct.vue:733"),this.machineStatus.forEach(function(t){t.id==a.machineStatusIndex?a.$set(t,"isChecked",!0):a.$set(t,"isChecked",!1)});break;case"inStock":this.inStockIndex=i,t("log",this.inStockIndex," at pages/qing-f-c/productShow/auditProduct.vue:744"),this.inStock=this.setIsChecked(this.inStock,this.inStockIndex);break;case"machineType":this.machineTypeIndex=i[1]||-1,this.machineTypeValue=i[0],t("log",this.machineBrandIndex," at pages/qing-f-c/productShow/auditProduct.vue:751"),t("log",this.machineTypeValue," at pages/qing-f-c/productShow/auditProduct.vue:752");break;case"machineBrand":this.machineBrandIndex=i[1]||-1,this.machineBrandValue=i[0],t("log",this.machineBrandIndex," at pages/qing-f-c/productShow/auditProduct.vue:759"),t("log",this.machineTypeValue," at pages/qing-f-c/productShow/auditProduct.vue:760");break}},pickImage:function(){a.chooseImage({sizeType:["compressed"],success:function(e){var i=e.tempFilePaths;n.pictures=[];for(var o=0;o<i.length;o++)a.uploadFile({url:n.Api.upload,filePath:i[o],name:"file",success:function(e){t("log",e," at pages/qing-f-c/productShow/auditProduct.vue:778"),n.pictures.push(JSON.parse(e.data).data.msg),a.showToast({title:"上传成功",icon:"none",duration:1e3})}})}})},bindCancel:function(){a.navigateBack({delta:1})},pickSeason:function(){this.$refs.season.show()},submit:function(){var e=this;n.styleSerial.forEach(function(t){t.id==n.styleSerialIndex&&t.label!=n.styleSerialValue&&(e.styleSerialIndex=-1)}),n.productSerial.forEach(function(t){t.id==n.productSerialIndex&&t.label!=n.productSerialValue&&(e.productSerialIndex=-1)});var i={goodsCode:n.goodsDetail.goodsCode,tradeName:n.tradeName,seriesCode:n.productSerialIndex,seriesName:n.productSerialValue,ingredientLongitudes:n.ingredientLongitude,ingredientLatitudes:n.ingredientLatitude,content:n.content,mainProduct:n.productTypeIndex,specificationLongitude:n.spec_longitude,specificationLatitude:n.spec_latitude,styleCode:n.styleSerialIndex,styleName:n.styleSerialValue,organization:n.organize,clothType:n.sampleTypeIndex,densityLongitude:n.density_longitude,densityLatitude:n.density_latitude,densityUnit:n.densityUnitIndex,gramWeight:n.grammage,gramWeightUnit:n.grammageUnitIndex,clothBreadth:n.clothBreadth,qualityCode:n.qualityPositionIndex};if(1!=n.grammageUnitIndex||0!=n.clothBreadth){t("log",i," at pages/qing-f-c/productShow/auditProduct.vue:861"),a.showLoading({title:"加载中",mask:!0});var o=this.Api.goodsAudit;this.myRequest(i,o,"post").then(function(e){t("log",e," at pages/qing-f-c/productShow/auditProduct.vue:868"),a.hideLoading(),0==e.data.status?(a.showToast({title:"审核通过",icon:"none",duration:1e3}),a.navigateBack({delta:1})):a.showToast({title:e.data.message,icon:"none"})}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})}else a.showToast({title:"幅宽必填",icon:"none",duration:500})}}};e.default=m}).call(this,i("0de9")["default"],i("6e42")["default"])},"8fbd":function(t,e,i){"use strict";var a=i("ec6b"),n=i.n(a);n.a},ea42:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},ec6b:function(t,e,i){}},[["3a8e","common/runtime","common/vendor"]]]);