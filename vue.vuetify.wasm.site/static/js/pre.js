var canvas_size_x, canvas_size_y;

Module = {
  preRun: [],
  postRun: [
    function () {
      let clientX = window.innerWidth;
      canvas_size_x = clientX - 732;
      let clientY = window.innerHeight;
      canvas_size_y = clientY - 115;
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
