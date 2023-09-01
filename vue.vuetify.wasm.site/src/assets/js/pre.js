/**globle var */
var winW, winH
/** */
Module = {
    preRun: [],
    postRun: [
        function () {
            displayWindowSize()
        },
    ],
    canvas: (function () {
        var n = document.getElementById('canvas')
        n.addEventListener('webglcontextlost', function (n) {}, !1)
        return n
    })(),
}
/** */
export function displayWindowSize() {
    Module._setArticleWidth(winW, winH, winW)
}


  