
let button, inp, url = [] , curl = [];
function setup() {
    createCanvas(1000,500);
    background(220);
    inp = createInput('https://www.amazon.in/BITSAT-Year-wise-Solved-Papers-2019-2009/dp/9389418038/ref=pd_cart_bmx_2_1/257-3746552-3229513?_encoding=UTF8&pd_rd_i=9389418038&pd_rd_r=ff809024-2fc2-487e-8b38-9584e75d8656&pd_rd_w=KAtn1&pd_rd_wg=7vJ8L&pf_rd_p=a037f030-675a-4199-88ae-483e9b15581d&pf_rd_r=WG3ST3ADD1H7WM2DSTWA&psc=1&refRID=WG3ST3ADD1H7WM2DSTWA');

    inp.position(100, 19);
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
