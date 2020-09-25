
// alert(screen.width);
let intentos = 5;
let puntos = 0;
var respuesta;
var arrResp = [];

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
    arrResp.push(selSeg.text);
    if(selSeg.text == '1'){
        preguntas(selSeg.text,
            '¿Qué es un texto expositivo?',
            'Texto que ayuda a comprender aspectos disciplinarios de las ciencias de manera accesible.',
            'Texto que expone argumentos para convencer al lector.',
            'Texto cuya finalidad es crear belleza a través del lenguaje.',
            'A'
            )
    }else if(selSeg.text == '2'){
        preguntas(selSeg.text,
            'El Paratexto es:',
            'El cuerpo del texto.',
            'Elemento que acompaña al texto.',
            'Sólo imágenes del texto.',
            'B'
            )
    }else if(selSeg.text == '3'){
        preguntas(selSeg.text,
            'En el texto “A la Carta” ¿cómo se crearía la comida con la tecnología?',
            'A través de imágenes de los alimentos.',
            'Con una impresora 3D creando comida con microestructuras.',
            'Con cartuchos en polvo.',
            'B'
            )
    }
    else if(selSeg.text == '4'){
        preguntas(selSeg.text,
            'En el texto “Cielos despejados” ¿Cuál es el sentido de la presencia del glosario?',
            'Para explicar características de Saturno.',
            'Para caracterizar al WASP-96b.',
            'Datos del Extremely Large Telescope ubicado en el desierto de Atacama, Chile.',
            'B'
            )
    }else if(selSeg.text == '5'){
        preguntas(selSeg.text,
            'En el texto “Al límite” por el calentamiento global qué se perdería en mayor cantidad.',
            'Plantas.',
            'Vertebrados.',
            'Insectos.',
            'C'
            )
    }else if(selSeg.text == '6'){
        preguntas(selSeg.text,
            'El texto “La ballena” responde a un modo de organización:',
            'Secuencial.',
            'Descriptiva.',
            'Comparativa.',
            'B'
            )
    }else if(selSeg.text == '7'){
        preguntas(selSeg.text,
            'En el texto “Cocodrilos en Egipto: temidos y venerados”¿qué datos aporta el paratexto?',
            'El hábitat y consideración del cocodrilo para los egipcios.',
            'Composición biológica del cocodrilo.',
            'Veneración al cocodrilo.',
            'A'
            )
    }else if(selSeg.text == '8'){
        preguntas(selSeg.text,
            'Explique a qué se refiere la siguiente frase del texto “Cocodrilos en Egipto: temidos y venerados”: “Pero el cocodrilo no era sólo una fiera terrorífica. También suscitó especial reverencia…”',
            'Porque vaticinaban morir a causa del cocodrilo y le rendían veneración para que no los comiera.',
            'Por la creación de un cocodrilo de cera que cobra vida.',
            'Porque muchas divinidades tomaban su forma. Por ejemplo Horus y Sobek.',
            'C'
            )
    }else if(selSeg.text == '9'){
        preguntas(selSeg.text,
            '¿Cómo clasificaría el siguiente fragmento? “ Dentro de la poblada fauna del Nilo, el cocodrilo ha sido siempre una de las presencias más características e inquietantes. Con hasta seis metros de longitud, su poderosa mandíbula y su escudo de escamas, representaba una amenaza constante y angustiosa para los antiguos egipcios… No es extraño por ello que este temible animal ocupara un lugar destacado en la cultura faraónica”',
            'Argumento.',
            'Definición.',
            'Ejemplo.',
            'B'
            )
    }else if(selSeg.text == '10'){
        preguntas(selSeg.text,
            'Si titularas cada párrafo del texto que opción elegirías',
            'Hábitat del cocodrilo. El cocodrilo en los jeroglíficos. Amenaza a la orilla del Nilo. Vaticinio de muerte del hijo del rey. Horus se transforma en cocodrilo. Sobek, patrón de la realeza. Horus con cuerpo de cocodrilo, Tueris con cola de cocodrilo y Ammit con cabeza de cocodrilo.',
            'El cocodrilo en la cultura faraónica. Imagen de agresividad. Tópico literario. Historias sobre el cocodrilo. Divinidades toman forma del cocodrilo. Sobek, el dios cocodrilo. Híbridos de cocodrilo y otros animales.',
            'Otra',
            'B'
            )
    }


    document.getElementById('modal').setAttribute('style', 'opacity: 1; pointer-events: auto;');
    
    // alert('Elemento seleccionado: ' + selSeg.text + '!');


    miRuleta.stopAnimation(false);
    miRuleta.rotationAngle = 0;

    for (let i = 1; i <= miRuleta.numSegments; i++) {
        if (selSeg.text == miRuleta.segments[i].text){
            miRuleta.deleteSegment(i);
        }
    }

    intentos--
    document.getElementById('intentos').innerHTML = `Intentos: ${intentos}`;

}



function girar(){
    // console.log(puntos);
    document.getElementById('girar').setAttribute('style', 'pointer-events: none');
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

    if(respuesta == document.querySelectorAll('.btn')[index].value){
        puntos+=20
        arrResp.push('Correcta')
    }else{
        arrResp.push('Incorrecta')
    }
    document.getElementById('modal').setAttribute('style', 'opacity: 0; pointer-events: none;');
    document.getElementById('girar').setAttribute('style', 'pointer-events: auto');
    miRuleta.draw();
    dibujarIndicador();
    if(intentos <1){
        resultadoTotal(puntos, arrResp);
        document.getElementById('resultado').setAttribute('style', 'opacity: 1; pointer-events: auto;')
    }
}




// function test(){
//     resultadoTotal(puntos, arrResp);
//     document.getElementById('resultado').setAttribute('style', 'opacity: 1; pointer-events: auto;')

// }

function btnOk(){
    document.getElementById('resultado').setAttribute('style', 'opacity: 0; pointer-events: none;');
}


function resultadoTotal(puntos, arrResp){
    document.getElementById('resTotal').innerHTML = `¡Obtuviste ${puntos} puntos!`
    document.getElementById('res1').innerHTML = `${arrResp[0]}) ${arrResp[1]}</br>`;
    document.getElementById('res2').innerHTML = `${arrResp[2]}) ${arrResp[3]}</br>`;
    document.getElementById('res3').innerHTML = `${arrResp[4]}) ${arrResp[5]}</br>`;
    document.getElementById('res4').innerHTML = `${arrResp[6]}) ${arrResp[7]}</br>`;
    document.getElementById('res5').innerHTML = `${arrResp[8]}) ${arrResp[9]}</br>`;
}
