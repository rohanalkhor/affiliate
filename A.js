
let button, inp, url = [] , curl = [];
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
    inp = createInput('Enter Amazon Product Link');

    inp.position(100, 19);
    inp.size(100,50);
    button = createButton('Convert');
    button.position(19, 19);
    button.mousePressed(convert);
}
function convert(){
    background(220);
    textSize(15);
    fill(0, 102, 153);
    url = inp.value();
    let splitString = split(url, '/');
    for(let j  =0;  j<splitString.length ; j++){
        let refCheck = splitString[j][0] + splitString[j][1] + splitString[j][2];
        if( refCheck == 'ref'){
            splitString[j] = 'ref=' + 'github04d-21'

        }
        text(splitString[j], 20, 70 + 20 * j);
        curl += splitString[j] + '/';
    
    
    }
    
    window.open(curl);
    
    

}
