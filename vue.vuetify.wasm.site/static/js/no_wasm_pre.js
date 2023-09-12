var canvas_size_x, canvas_size_y;

/** */
function timestampToTime() {
  var date = new Date() //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-'
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  return Y + M + D + h + m + s
}
/** */
function write_log(title, type, message) {
  /**footer info */
  $("#footer_info")[0].innerText = "-- " + title + " : " + message;
}
/** uuid 生成 */
function uuidv4_UpperCase() {
  // 生成uuid
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16).toUpperCase();
  });
}
/** 禁用canvas上的鼠标右键菜单*/
let canvas_wasm_el = document.querySelector("canvas");
canvas_wasm_el.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
