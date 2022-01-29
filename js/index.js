function main() {
    const canvas = document.querySelector("#glCanvas");
    //initialize the gl context
    const gl = canvas.getContext("webgl");
    //only continue if webgl is available and working
    if (gl === null) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    } else {
        console.log("Initialized WebGL. Your browser is supported!");
    }
    resizeCanvasToDisplaySize(gl.canvas);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    //set clear color to #3c6dc7, fully opaque
    gl.clearColor(0.231, 0.427, 0.796, 1.0);
    //clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
}
function resizeCanvasToDisplaySize(canvas) {
    //lookup the size the browser is displaying the canvas in css pixels.
    const displayWidth  = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;
    console.log("Viewport Size = " + displayHeight + "H" + displayWidth + "W");
    //check if the canvas is not the same size.
    const needResize = canvas.width  !== displayWidth ||
                       canvas.height !== displayHeight;   
    if (needResize) {
        console.log("Canvas Size = " + canvas.height + "H" + canvas.width + "W");
        console.log("Resizing now.");
        //make the canvas the same size
        canvas.width  = displayWidth;
        canvas.height = displayHeight;
    }
    return needResize;
}
window.onload = main;