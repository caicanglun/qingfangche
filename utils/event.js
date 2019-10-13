/**
 * 触摸开始事件
 */
let touch = {
  interval: null,
  touchDot: 0,
  time: 0,
  tmpFlag: true
}

function touchStart(e, that) {
  touch.touchDot = e.touches[0].pageX; // 获取手指起始坐标

  if (touch.interval) clearInterval(touch.interval);

  touch.interval = setInterval(function () {
    touch.time++;
  }, 100)
}
/**
 * 触摸移动事件
 */
function touchMove(e, tabIndex, nthMax, fn) {
  let touchMove = e.touches[0].pageX; // 移动的X轴坐标
  let time = touch.time; // 触发时长
  let tmpFlag = touch.tmpFlag;
  let moveLen = touchMove - touch.touchDot;

  // 向左滑动   
  if (tmpFlag && tabIndex < (nthMax - 1) && moveLen <= -120 && time < 6) {
    tabIndex++;
    touch.tmpFlag = false;

    fn && fn(tabIndex);
  }
  // 向右滑动
  if (tmpFlag && tabIndex > 0 && moveLen >= 120 && time < 6) {
    tabIndex--;
    touch.tmpFlag = false;

    fn && fn(tabIndex);
  }
}
/**
 * 触摸结束事件
 */
function touchEnd() {
  clearInterval(touch.interval); // 清除setInterval

  touch = {
    interval: null,
    touchDot: 0,
    time: 0,
    tmpFlag: true
  }
}


module.exports = {
  touchStart,
  touchMove,
  touchEnd
}