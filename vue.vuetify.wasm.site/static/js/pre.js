Module = {
  preRun: [],
  postRun: [
    function () {
      // app.wasm_programe = Module;
      // console.log(app.wasm_programe)
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

