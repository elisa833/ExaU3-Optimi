const esPalindromo = (texto) => {
    texto = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    let izquierdo = 0;
    let derecho = texto.length - 1;
    while (izquierdo < derecho) {
        if (texto[izquierdo] !== texto[derecho]) {
            return false;
        }
        izquierdo ++;
        derecho --;
    }
    return true;
}
if (esPalindromo("Anita lava la tina")) {
    console.log("Es un palindromo");
} else {
   console.log("No es un palindromo");
}