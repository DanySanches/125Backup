

function preload() {
     
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  // código para acessar a webcam
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();


  poseNet = ml5.poseNet(video, modelLoaded);

  poseNet.on('pose', gotPoses);
}


function modelLoaded() {
  console.log('PoseNet foi inicializado');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);

}

function tirarFoto(){    
  save('myFilterImage.png');
}

