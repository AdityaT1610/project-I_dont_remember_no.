function setup()
{
    canvas = createCanvas(430, 330);
    video = createCapture(VIDEO);
    video.size(500,300);
}

function take_snapshot() 
{
    save('MyImage.png');
}

function draw()
{
    image( 0, 0, 500, 300);
}