let funcionCalcular = "";
let resultadoCalculado = "";
let primerNumero = "";
let segundoNumero = "";
while (funcionCalcular != 'ESC') {
    funcionCalcular = prompt("Ingrese Operacion + - / *:");
    if (funcionCalcular == "*" || funcionCalcular == "+" || funcionCalcular == "/" || funcionCalcular == "-") {
        primerNumero = Number(prompt("Ingrese primer numero"));
        while (isNaN(primerNumero)) {
            primerNumero = Number(prompt("Por favor ingrese primer numero valido"));
        }
        segundoNumero = Number(prompt("Ingrese segundo numero"));
        while (isNaN(segundoNumero)) {
            segundoNumero = Number(prompt("Por favor ingrese segundo numero valido"));
        }
        
    }

    switch (funcionCalcular) {
        case '*':
            resultadoCalculado = primerNumero * segundoNumero;
            alert("Resultado: " + resultadoCalculado);
            break;
        case '/':
            while (primerNumero == 0) {
                primerNumero = Number(prompt("Por favor ingrese primer numero valido"));
            }
            while (segundoNumero == 0) {
                segundoNumero = Number(prompt("Por favor ingrese segundo numero valido"));
            }
            resultadoCalculado = primerNumero / segundoNumero;
            alert("Resultado: " + resultadoCalculado);
            break;
        case '+':
            resultadoCalculado = primerNumero + segundoNumero;
            alert("Resultado: " + resultadoCalculado);
            break;
        case '-':
            resultadoCalculado = primerNumero - segundoNumero;
            alert("Resultado: " + resultadoCalculado);
            break;
        case 'ESC':
            break;
        default:
            alert("Ingreso una operacion no valida");
            break;
    }
}