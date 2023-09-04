Module = {
  preRun: [],
  postRun: [
    function () {
      let winW = document.body.clientWidth;
      let winH = document.body.clientHeight;
      //   Module._setArticleWidth(500, 800, 500)
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
app.wasm_programe = Module;
