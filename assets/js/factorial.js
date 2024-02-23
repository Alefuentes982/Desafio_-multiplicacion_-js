
const factorial = (numero) => {
    // verificación de la variable numero
    if (numero !== null) {
        // Ciclo que recorre desde el 1 hasta el "numero" ingresado por usuario
        for (let iteracion = 1; iteracion <= numero; iteracion++) {
            // Factorial que va desde el 1
            let factorial = 1;

            // Ciclo que calcula el factorial
            for (let iteracion_2 = 1; iteracion_2 <= iteracion; iteracion_2++) {
                // Calcular el factorial multiplicandolo por el numero anterior
                factorial *= iteracion_2;
            }

            // Ver en consola
            console.log(`El factorial de ${iteracion}: ${factorial}`);

            //muestra resultados en pagina web

            var h1 = document.createElement("h1");

            var texto = document.createTextNode(`El factorial de ${iteracion}: ${factorial}`);
            h1.appendChild(texto);
            var cuerpo = document.body;
            cuerpo.appendChild(h1);

        }
    }
};


while (true) {
    let num = parseInt(prompt("Ingrese un numero para caclular el factorial: "));
    if (num > 0 && num <= 20) {
        factorial(num);
        break;
    } else {
        console.log("Numero fuera del rango !!!")
    }
}




