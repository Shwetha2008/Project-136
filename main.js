status = "";
input = " ";

function setup()
{
    canvas = createCanvas(500, 430);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(500, 430);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 500, 430);
}

function start()
{
    objectDetector= ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input = document.getElementById("input").value;
}

function modelLoaded()
{
    console.log("Model is loaded");
    status = true;
}