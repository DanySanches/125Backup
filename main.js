

function preload() {
     
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  // código para acessar a webcam
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  // definimos a váriavel poseNet, chamamos a biblioteca ml5
  // PoseNet é uma função predefinida de ml5.js usada para inicializar o modelo PoseNet.
  //  temos  dois parametros video, modelLoaded
  poseNet = ml5.poseNet(video, modelLoaded);
  // aonde a variavel armazena a posição, on função predefinida que inicia a execução do poseNet
  // dentro  da  função temos  dois parametros, 'pose' e no 2º gotPoses para  obter as coordenadas x e y das 17 partes do corpo

  poseNet.on('pose', gotPoses);
}

// chamamos a função fora de  setup
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

