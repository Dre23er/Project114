function preload() {

}

function setup() {
    canvas =  createCanvas (400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    posNet = ml5.posNet(video,modelLoaded)
}

function modelLoaded() {
console.log("posNet is Initialized");
}

function draw() {
Image(video,0,0,400,400);
}

function take_snapshot() {
    save("MyFilterImage.png");
}

function gotPoses (results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}