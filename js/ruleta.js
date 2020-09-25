
// alert(screen.width);
let intentos = 5;
let puntos = 0;
var respuesta;

document.getElementById('intentos').innerHTML = `Intentos: ${intentos}`;



var modal = document.getElementById("modal");

var miRuleta = new Winwheel({
    'numSegments': 10,
    'outerRadius': 170,
    'segments': [
        { 'fillStyle': '#02f40f', 'text': '1' },
        { 'fillStyle': '#f1f40f', 'text': '2' },
        { 'fillStyle': '#f1b40f', 'text': '3' },
        { 'fillStyle': '#f1e40f', 'text': '4' },
        { 'fillStyle': '#f1c40f', 'text': '5' },
        { 'fillStyle': '#f1f40f', 'text': '6' },
        { 'fillStyle': '#f1b40f', 'text': '7' },
        { 'fillStyle': '#f1e40f', 'text': '8' },
        { 'fillStyle': '#f1c40f', 'text': '9' },
        { 'fillStyle': '#f1f40f', 'text': '10' },
    ],
    'animation': {
        'type': 'spinToStop',
        'duration': 3,
        'callbackFinished': 'Mensaje()',
        'callbackAfter': 'dibujarIndicador()'
    }
});





function Mensaje() {
    let selSeg = miRuleta.getIndicatedSegment();


    preguntas(selSeg.text,'¿Cómo me llamo?','Pepe','Pablo','Joaquín','B');    

    document.getElementById('modal').setAttribute('style', 'opacity: 1; pointer-events: auto;');
    
    // alert('Elemento seleccionado: ' + selSeg.text + '!');


    miRuleta.stopAnimation(false);
    miRuleta.rotationAngle = 0;

    for (let i = 1; i <= miRuleta.numSegments; i++) {
        if (selSeg.text == miRuleta.segments[i].text){
            miRuleta.deleteSegment(i);

        }
    }

    // miRuleta.draw();
    // dibujarIndicador();
    // console.log('iniciar');
    intentos--
    document.getElementById('intentos').innerHTML = `Intentos: ${intentos}`;

}


// function deleteSegment(s) {
//     miRuleta.deleteSegment(s);
// }

// function preguntas(index){
//     if(index == '1') console.log('Unoooooo');
//     if(index == '2') console.log('DoOOOos');
//     if(index == '3') console.log('Tresesese');
//     if(index == '4') console.log('Cuandootoo');
//     if(index == '5') console.log('Ciencoocooc');
//     if(index == '6') console.log('Seisiesi');
//     if(index == '7') console.log('Sueete');
//     if(index == '8') console.log('Oojhchco');
//     if(index == '9') console.log('Nuuevee');
//     if(index == '10') console.log('Sieeeeeeeeeeeeeeeeeeeez');
// }

function girar(){
    // console.log(puntos);
    if(intentos >= 1){
        miRuleta.startAnimation();
    }else{
        alert('No quedan más intentos');
    };




}



dibujarIndicador();
function dibujarIndicador() {
    var ctx = miRuleta.ctx;
    ctx.strokeStyle = 'navy';
    ctx.fillStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(170, 0); //point sup_i
    ctx.lineTo(230, 0); //point inf_i
    ctx.lineTo(200, 50); //point inf_d
    ctx.lineTo(200, 50); //point sup_d
    ctx.stroke();
    ctx.fill();
}


// oreguntas
function preguntas(num, preg, op1, op2, op3, res){
    document.getElementById('pregNum').innerHTML = `Pregunta Nº ${num}`;
    document.getElementById('preg').innerHTML = preg;
    document.getElementById('op1').innerHTML = `A) ${op1}</br>`;
    document.getElementById('op2').innerHTML = `B) ${op2}</br>`;
    document.getElementById('op3').innerHTML = `C) ${op3}</br>`;
    respuesta = res;
}


function btn(index){

    if(respuesta == document.querySelectorAll('.btn')[index].value) puntos+=2

    document.getElementById('modal').setAttribute('style', 'opacity: 0; pointer-events: none;');
    miRuleta.draw();
    dibujarIndicador();
    if(intentos <1){
        console.log(puntos);
    }
    // console.log('Puntos: '+puntos);
}




function test(){
    document.getElementById('modal').setAttribute('style', 'opacity: 1; pointer-events: auto;')

}



