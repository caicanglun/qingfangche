/**
 * 品质要求
 */
let QUALITY = [
  { key: 1 << 3, value: '包染色' },
  { key: 1 << 2, value: '染白色' },
  { key: 1 << 1, value: '染黑色' },
  { key: 1, value: '不包染色' }
];

/** 品质定位
 * 
 */
const POSITION = [
  { key: 1, value: '品牌订单' },
  { key: 1 << 1, value: '高级订单' },
  { key: 1 << 2, value: '一般订单' },
  { key: 1 << 3, value: '市场订单' }
];

/** 特性
 * 
 */
const GLOSS = [
  { key: 1 << 2, value: '有光' },
  { key: 1 << 1, value: '半光' },
  { key: 1, value: '消光' }
];

/**
 * 库存状态
 */
const STOCK_TYPES = [
  { key: 1, value: '有现货并生产中' },
  { key: 1 << 1, value: '有现货' },
  { key: 1 << 2, value: '生产中' },
  { key: 1 << 3, value: '可定织' },
  { key: 1 << 4, value: '已售罄' }
];

/** 采购订单
 *    总状态：1：正常；2：取消(0)；3：完成(7)
 *    分状态(总状态：1)：1：待支付；2：支付处理中；3：待结算；4：结算处理中；5：待收货；6：订单完成;9:买家支付中
 */
const BUY_ORDER = [
  { key: 1, value: "待支付" },
  { key: 2, value: "已支付，银行处理中" },
  { key: 3, value: "支付成功" },
  { key: 4, value: "支付成功" },
  { key: 5, value: "待收货" },
  { key: 6, value: "已收货" },
  { key: 7, value: "线下订单" },
  { key: 8, value: "订单完成" },
  { key: 9, value: "支付中" }
];

/**
 * 采购订单
 *    总状态：1：正常；2：取消(0)；3：完成(7)
 *    分状态(总状态：2)：-4：退款中；-5：已退款
 */
const BUY_BACK_ORDER = [
  { key: -1, value: "订单已取消" },
  // { key: -3, value: "待退款" },
  { key: -4, value: "退款中" },
  { key: -5, value: "已退款" }
];

/** 
 * 销售订单
 *    总状态：1：正常；2：取消；3：完成
 *    分状态：1：等待代付；2：代付处理中；3：待发货；4：订单完成
 * 
 *    待确认；已确认；买家已支付，待发货；已发货；订单完成；订单已取消
 */
const SELL_ORDER = [
  { key: 1, value: "已确认" },
  { key: 2, value: "已确认" },
  { key: 3, value: "买家已支付，待发货" },
  { key: 4, value: "已发货" },
  { key: 5, value: "线下订单" },
  { key: 6, value: "订单完成" }
];

/**
 * 订单退款结果
 */
const COMPLETE = [
  { key: -1, value: "退款失败"},
  { key: 0, value: "退款中" },
  { key: 1, value: "退款成功" }
]


/**
 * 采购订单评价--性价比
 */
const COST_PERFORMANCE = [
  { key: 1, value: '性价比偏高' },
  { key: 1 << 1, value: '性价比合理' },
  { key: 1 << 2, value: '性价比偏低' }
];

/**
 * 采购订单评价--实码率
 */
const REAL_RATE = [
  { key: 1, value: '实码率正常' },
  { key: 1 << 1, value: '实码率偏低' },
];

/**
 * 采购订单评价--断经、断纬
 */
const BREAK_OUT = [
  { key: 1, value: '断经、断纬偶尔' },
  { key: 1 << 1, value: '断经、断纬较多' },
  { key: 1 << 2, value: '断经、断纬多' }
];

/**
 * 采购订单评价--停车明档
 */
const STOP_BRIGHT = [
  { key: 1, value: '停车明档偶尔' },
  { key: 1 << 1, value: '停车明档较多' },
  { key: 1 << 2, value: '停车明档多' }
];

/**
 * 采购订单评价--停车暗档
 */
const STOP_DIM = [
  { key: 1, value: '停车暗档偶尔' },
  { key: 1 << 1, value: '停车暗档较多' },
  { key: 1 << 2, value: '停车暗档多' }
];

/**
 * 采购订单评价--暗条
 */
const DARK_STRIP = [
  { key: 1, value: '暗条偶尔' },
  { key: 1 << 1, value: '暗条较多' },
  { key: 1 << 2, value: '暗条多' }
];

module.exports = {
  QUALITY,
  POSITION,
  GLOSS,
  STOCK_TYPES,
  BUY_ORDER,
  BUY_BACK_ORDER,
  SELL_ORDER,
  COMPLETE,

  // 采购订单评价
  COST_PERFORMANCE,
  REAL_RATE,
  BREAK_OUT,
  STOP_BRIGHT,
  STOP_DIM,
  DARK_STRIP
}