canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

roverheight = 90;
roverwidth = 100;

marsimgsarray = ["MarsIMG1.jpg", "MarsIMG2.jpg", "MarsIMG3.jpg", "MarsIMG4.jpg"];
arrayrandomno= Math.floor(Math.random() * 4);
console.log(arrayrandomno);


rover_x = 10;
rover_y = 10;

background_img = marsimgsarray[arrayrandomno];
console.log("background_img = " + background_img);

rover_img = "rover.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadbg;
    background_imgTag.src = background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = upload_rover;
    rover_imgTag.src = rover_img;
}

function uploadbg() {
    ctx.drawImage(background_imgTag , 0, 0, canvas.width, canvas.height);
}

function upload_rover() {
    ctx.drawImage(rover_imgTag , rover_x, rover_y, roverwidth, roverheight);
}

window.addEventListener("keydown", mykeyDown);

function mykeyDown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed == '38') {
        up();
        console.log("up");
    }

    if (keypressed == '40') {
        down();
        console.log("down");
    }

    if (keypressed == '37') {
        console.log("left");
        left();
       
    }

    if (keypressed == '39') {
        right();
        console.log("right");
    }

}
function up() {
    if (rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("When Up Arrow Pressed X = " + rover_x + " Y = " + rover_y);
        uploadbg();
        upload_rover();
    }
}

function down() {
    if (rover_y <= 500){
        rover_y = rover_y + 10;
        console.log("When Down Arrow Pressed X = " + rover_x + " Y = " + rover_y);
        uploadbg();
        upload_rover();
    }
}

function left() {
    if (rover_x >= 0){
        rover_x = rover_x - 10;
        console.log("When Left Arrow Pressed X = " + rover_x + " Y = " + rover_y);
        uploadbg();
        upload_rover();
    }
}

function right() {
    if (rover_x <= 700){
        rover_x = rover_x + 10;
        console.log("When Right Arrow Pressed X = " + rover_x + " Y = " + rover_y);
        uploadbg();
        upload_rover();
    }
}
