const canvas = document.getElementById('unity-canvas');
const ctx = canvas.getContext2D();
var size = 0;

if (window.innerHeight < window.innerWidth) {
	size = innerHeight;
}
else {
	size = innerWidth;
}

ctx.canvas.width = size * 0.48;
ctx.canvas.height = size * 0.27;
