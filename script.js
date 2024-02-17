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
    const patrones = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let resultado = '';
    let i = 0;
    while (i < texto.length) {
        let encontrado = false;
        for (let patron in patrones) {
            if (texto.startsWith(patron, i)) {
                resultado += patrones[patron];
                i += patron.length;
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            resultado += texto[i++];
        }
    }
    return resultado;
}



function copiarResultado() {
    const resultadoOutput = document.getElementById('resultadoOutput');
    resultadoOutput.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}


function validarTexto() {
    const textoInput = document.getElementById('textoInput').value;
    const caracteresEspeciales = /[^a-z\s]/;

    if (caracteresEspeciales.test(textoInput)) {
        alert('El texto solo puede contener letras minúsculas y espacios en blanco.');
        document.getElementById('textoInput').value = ''; 
        return;
    }

    encriptarTexto();
}

