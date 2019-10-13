const { 
  QUALITY, 
  POSITION, 
  GLOSS, 
  STOCK_TYPES,
  BUY_ORDER, 
  BUY_BACK_ORDER, 
  SELL_ORDER, 
  COMPLETE,
  
  COST_PERFORMANCE,
  REAL_RATE,
  BREAK_OUT,
  STOP_BRIGHT,
  STOP_DIM,
  DARK_STRIP } = require("./const.js");

function formatTime(date) {
  if (date) {
    let oDate = date.slice(0, date.indexOf(".")); // 截取时间戳 . 前面的数
    
    oDate = oDate.replace(/T/g, ' ').replace(/(-)/g, '/');

    let nDate = new Date(oDate);

    let year = nDate.getFullYear();
    let month = nDate.getMonth() + 1;
    let day = nDate.getDate();

    let h = nDate.getHours();
    let m = nDate.getMinutes();
    let s = nDate.getSeconds();
  	console.log(h,m,s)
    return [year, month, day].map(formatNumber).join('-');
  //  + ' ' + [hour, minute, second].map(formatNumber).join(':')
  } else {
    return '';
  }  
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 返回key所对应的值
 */
function change(obj, num) {
  let value = '';
  let n = parseInt(num);
  obj.map(function (item) {
    if (item.key == num) value = item.value;
  })
  return value;
}
/**
 * 返回key所对应的值
 */
function changeMore(obj, num) {
  if (num) {
    let value = [];
    let n = parseInt(num);
    obj.map(function (item) {
      if (item.key & num) {
        value.push(item.value);
      }
    });
    return value.join('、');
  }
}

/**
 * 品质要求
 */
function pipeQuality(num) {
  return changeMore(QUALITY, num);
}

/**
 * 品质定位
 */
function pipePosition(num) {
  return changeMore(POSITION, num);
}

/**
 * 特性
 */
function pipeGloss(num) {
  return changeMore(GLOSS, num);
}

/**
 * 现货详情-库存状态
 */
function pipeStock(num) {
  return changeMore(STOCK_TYPES, num);
}

/**
 * 找布状态
 */
function pipeStatus(num) {
  let newNum = parseInt(num);
  let sI = 0; // 状态

  if (newNum == 1) {
    sI = 0;
  } else if (newNum == 2) {
    sI = 1;
  } else if (newNum == 4) {
    sI = 2;
  } else if (newNum < 0) {
    sI = 3;
  }
  return sI;
}

/**
 * 认证状态
 */
function approveState(oData) {
  // currentType：0: 未认证；1: 个人认证；2: 企业认证
  // status：0: 认证中；1: 认证通过；2: 认证失败
  // applyType：1：个人认证中；2：企业认证中

  // 未认证：404
  // 个人认证-审核中 status:0 currentType:null
  // 个人认证失败-重新审核 status:2 currentType:null（0）
  // 个人认证-通过：status:1 currentType:1
  // 企业认证-审核中：status:0 currentType:null
  // 企业认证 status:1 currentType:2
  // 企业认证失败-重新审核：status:2 currentType:0
  let current = oData.currentType;
  let state = oData.status;

  if (state == 0) {
    return 1; // 认证中
  } else if (state == 2) {
    return 2; // 认证失败，重新认证
  } else if (current == 1 && state == 1) {
    return 3; // 个人认证
  } else if (current == 2 && state == 1) {
    return 4; // 企业认证
  } else {
    return 0;
  }
}


/**
 * 采购订单状态转换
 *    总状态：1：正常；2：取消(0)；3：完成(7)
 *    分状态(总状态：1)：1：待支付；2：支付处理中；3：待结算；4：结算处理中；5：待收货；6：订单完成;9:买家支付中
 */
function changeBuyState(obj) {

  let oState = 1;
  let stateText = "";
  let buyState = obj.buyOrder.status;

  // if (obj.status == 1) { // 订单处理中
    
  // }
  // else 
  if (obj.status == 2) { // 取消订单
    if (buyState == 3 && !obj.buyOrder.refundBankId) {
      oState = -1;
    } else if (buyState == 3 && obj.buyOrder.refundBankId) {
      oState = -4;
    } else {
      oState = buyState == -4 ? buyState : buyState == -5 ? buyState : -1;
    }
    stateText = buyBackOrderState(oState);
  } else {
    oState = buyState;
    stateText = buyOrderState(oState);
  }
  // else if (obj.status == 3) { // 完成订单
  //   oState = buyState == 7 ? buyState : 9;
  //   stateText = buyState == 7 ? "线下订单" : "订单完成";
  // }

  return {
    state: oState,
    text: stateText
  }
}



/**
 * 销售订单状态转换
 *    总状态(item.status)：1：正常；2：取消；3：完成
 *    分状态(item.sellOrder.status)：1：等待代付；2：代付处理中；3：待发货；4：订单完成
 */
function changeSellState(obj) {
  let oState = 1;
  let stateText = "";
  let sellState = obj.sellOrder.status;

  if (obj.status == 1 || obj.status == 3) {
    oState = sellState;
    stateText = obj.sellOrder.cardid == null && sellState == 1 ? "待确认" : sellOrderState(sellState);
  } else if (obj.status == 2) {
    oState = -1;
    stateText = "订单已取消";
  }
  //  else if (obj.status == 3) {
  //   oState = sellState == 5 ? sellState : 9;
  //   stateText = sellState == 5 ? "线下订单" : "订单完成"
  // }

  return {
    state: oState,
    text: stateText
  }
}




/**
 * 交易订单--状态转换
 */
// 采购订单
function buyOrderState(state) {
  return change(BUY_ORDER, state);
}
// 采购退款订单
function buyBackOrderState(state) {
  return change(BUY_BACK_ORDER, state);
}
// 销售订单
function sellOrderState(state) {
  return change(SELL_ORDER, state);
}

/**
 * 订单流水--退款结果
 */
function pipeComplete(state) {
  return change(COMPLETE, state);
}


/**
 * 采购订单评价--性价比
 */
function pipeCost(num) {
  return changeMore(COST_PERFORMANCE, num);
}
/**
 * 采购订单评价--实码率
 */
function pipeReal(num) {
  return changeMore(REAL_RATE, num);
}
/**
 * 采购订单评价--断经、断纬
 */
function pipeBreak(num) {
  return changeMore(BREAK_OUT, num);
}
/**
 * 采购订单评价--停车明档
 */
function pipeBright(num) {
  return changeMore(STOP_BRIGHT, num);
}
/**
 * 采购订单评价--停车暗档
 */
function pipeDim(num) {
  return changeMore(STOP_DIM, num);
}
/**
 * 采购订单评价--暗条
 */
function pipeDark(num) {
  return changeMore(DARK_STRIP, num);
}

// 获取时间戳
function getTimeStamp() {
	let myDate = new Date();
	let Y = myDate.getFullYear().toString().slice(2);
	let M = (myDate.getMonth() + 1) < 10 ? "0" + (myDate.getMonth() + 1) : (myDate.getMonth() + 1).toString();
	let D = myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate().toString();
	let h = myDate.getHours().toString();
	let m = myDate.getMinutes().toString();
	let s = myDate.getSeconds() < 10 ? "0" + myDate.getSeconds() : myDate.getSeconds().toString();
	let ms = myDate.getMilliseconds() < 10 ? "00" + myDate.getMilliseconds() : (myDate.getMilliseconds() < 100 ? "0" + myDate.getMilliseconds() : myDate.getMilliseconds());
	let timeId = Y + M + D + h + m + s + ms;
	return timeId
}
function timeName(time){
	if(!time){
		return ''
	}
	let myDate = new Date(time);
	let Y = myDate.getFullYear().toString();
	let M = (myDate.getMonth() + 1) < 10 ? "0" + (myDate.getMonth() + 1) : (myDate.getMonth() + 1).toString();
	let D = myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate().toString();
	let h = myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours().toString();
	let m = myDate.getMinutes()<10 ? "0" + myDate.getMinutes() : myDate.getMinutes().toString();
	let s = myDate.getSeconds() < 10 ? "0" + myDate.getSeconds() : myDate.getSeconds().toString();
	let timeId = Y +'-'+ M +'-'+ D +' '+ h +':'+ m +':'+ s;
	return timeId
}

// 设置时间
function setTime(time) {
	if(time&&time.indexOf("T")!=-1){
		let date = new Date(time),
			Y = date.getFullYear() + '-',
			M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-',
			D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ',
			h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':',
			m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':',
			s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
		console.log("data", date)
		return (Y + M + D + h + m + s)
	}else{
		return time
	}
}
module.exports = {
  formatTime,
  pipeStatus,
  pipeQuality,
  pipePosition,
  pipeGloss,
  pipeStock,
  approveState,
  changeBuyState,
  changeSellState,
  buyOrderState,
  buyBackOrderState,
  sellOrderState,
  pipeComplete,
	getTimeStamp,
  // 采购订单评价
  pipeCost,
  pipeReal,
  pipeBreak,
  pipeBright,
  pipeDim,
  pipeDark,
	timeName,
	setTime
}