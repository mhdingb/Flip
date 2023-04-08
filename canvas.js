const unitycanvas = document.getElementById('unity-canvas');
const ctx = unitycanvas.getContext('2d');
var size = 0;

if (window.innerHeight < window.innerWidth) {
	size = innerHeight;
}
else {
	size = innerWidth;
}

ctx.canvas.width = size * 0.48;
ctx.canvas.height = size * 0.27;
