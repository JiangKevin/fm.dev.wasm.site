var canvas_size_x, canvas_size_y;

Module = {
  preRun: [],
  postRun: [
    function () {
      let clientX = window.innerWidth;
      canvas_size_x = clientX - 414;
      let clientY = window.innerHeight;
      canvas_size_y = clientY - 108;
      /** */
      Module._setArticleWidth(canvas_size_x, canvas_size_y, 0);
    },
  ],
  canvas: (function () {
    var n = document.getElementById("canvas");
    if (n) {
      n.addEventListener("webglcontextlost", function (n) {}, !1);
      return n;
    }
  })(),
};

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
let canvas_timeline_el = document.querySelector("timeline_canvas");
canvas_timeline_el.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
