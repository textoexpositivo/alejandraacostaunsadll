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
        'duration': 5,
        'callbackFinished': 'Mensaje()',
        'callbackAfter': 'dibujarIndicador()'
    }
});

function Mensaje() {
    var SegmentoSeleccionado = miRuleta.getIndicatedSegment();

    alert('Elemento seleccionado: ' + SegmentoSeleccionado.text + '!');

    miRuleta.stopAnimation(false);
    miRuleta.rotationAngle = 0;

    for (var i = 1; i <= miRuleta.numSegments; i++) {
        if (SegmentoSeleccionado.text == miRuleta.segments[i].text) {
            deleteSegment(i);
        }
    }

    miRuleta.draw();

    dibujarIndicador();

}


function deleteSegment(s) {
    miRuleta.deleteSegment(s);
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

