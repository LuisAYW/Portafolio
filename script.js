function encriptarTexto() {
    const textoInput = document.getElementById('textoInput').value.toLowerCase();
    const resultado = encriptarTextoLogica(textoInput);
    document.getElementById('resultadoOutput').value = resultado;
    document.getElementById('textoInput').value = '';
}

function desencriptarTexto() {
    const textoInput = document.getElementById('textoInput').value.toLowerCase();
    const resultado = desencriptarTextoLogica(textoInput);
    document.getElementById('resultadoOutput').value = resultado;
    document.getElementById('textoInput').value = '';
}

function encriptarTextoLogica(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptarTextoLogica(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}


function copiarResultado() {
    const resultadoOutput = document.getElementById('resultadoOutput');
    resultadoOutput.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}


function validarTexto() {
    const textoInput = document.getElementById('textoInput').value;
    const caracteresEspeciales = /[!@#$%^&*(),.?":{}|<>]/;

    if (caracteresEspeciales.test(textoInput)) {
        alert('El texto no puede contener caracteres especiales.');
        return;
    }

    encriptarTexto();
}
