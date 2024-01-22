var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;
var object = {
    height: 40,
    width: 40,
    x: 10,
    y: 10, 
    color: "#FF0000"        
}

document.addEventListener('keydown', function(event) {
    //left
    if(event.keyCode == 37) {
        object.x -= 1;
    }
    //top
    else if(event.keyCode == 38) {
        object.y -= 1;
    }
    //right
    else if(event.keyCode == 39) {
        object.x += 1;
    }
    //bottom
    else if(event.keyCode == 40) {
        object.y += 1;
    }
});

function renderCanvas(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 600, 600);
} 
function renderObject(){
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(object.x, object.y, object.width, object.height);
}
function run(){
    renderCanvas();
    renderObject();
}

setInterval(run, 10);