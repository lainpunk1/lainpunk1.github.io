let bgShader;

function preload(){
    bgShader = loadShader('shader.vert', 'shader.frag');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
}

function draw() {
    shader(bgShader);

    bgShader.setUniform("iResolution", [width, height]);
    bgShader.setUniform("iTime", frameCount * 0.01);

    rect(0,0,width, height);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
