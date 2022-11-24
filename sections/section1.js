/**
 * Explicar el console log, corriendo node en la terminal
 * 
 * Y tambien que los programas se ejecutan linea por linea
 * 
 * Explicar los archivos/folders(dependencies, package, etc...)
 * 
 * Correr nodemon y explicarles como funciona
 */
 console.log('Hola Mundo :D');

/**
 * Explicar mas a fondo la programación secuencial
 * 
 * console.log("Linea 1");
 * console.log("Linea 2");
 * console.log("Linea 3");
 * console.log("Linea 4");
 * 
 * Ejercicio: hacer que el numero de linea se haga automaticamente
 */
let numberOfLines = 1;

console.log("Linea #", numberOfLines);
// TODO:
numberOfLines = numberOfLines + 1; // Se ve algo confuso y mucho texto

console.log("Linea #", numberOfLines);
// TODO:
numberOfLines++;

console.log("Linea #", numberOfLines);
// TODO:
numberOfLines += 1;

console.log("Linea #", numberOfLines);

/**
 * Introducción a funciones
 * 
 * explicar que el contador se repite mucho en nuestro codigo
 * 
 * explicar que es una funcion: una función es un bloque de código que realiza alguna operación
 * 
 */

/**
 * Explicar que hay distintas manera de crear funciones, pero no indagar mucho en el tema por ahorita
 * 
 * explicar que tenemos todo de manera centralizada y podemos hacer cambios solo 1 vez
 * y aplicarlos en todos los lugares donde usemos la funcion
 * ejemplo: aumentar de 2 en 2, etc
 */
function increasedLineNumber() {
    numberOfLines++;

    /**
     * numberOfLines++;
     * numberOfLines++;
     * 
     * ó
     * numberOfLines = numberOfLines + 2;
     * 
     * ó
     * 
     * numberOfLines += 2;
     */
}

/**
 * Hablar sobre los errores
 * "no tengan miedo a los errores, tengan miedo a que la aplicación fallé y no aparezca ningun error xd"
 * 
 * distintos tipos de errores:
 * sintaxis, logica, advertencias, ejecución, etc...
 * 
 * explicar algunos tipos de errores, modificando el codigo que acabamos de escribir
 * logica: son errores dificiles porque en teoria hace lo que tiene que hacer, pero no de la manera esperada
 */

/**
 * Ejercicio: crear una funcion en donde agregar el console.log y el incremento de linea
 * 
 * tiene que aparecer en la terminar/consola
 * Linea #1
 * Linea #2
 * Linea #3
 * Linea #4
 */

let numberOfLines2 = 1;

function printLineNumber() {
    numberOfLines2++;
    console.log('Linea #', numberOfLines2);
}
/**
 * Explicar y dejar que piensen porque imprime 2,3,4,5 en lugar de 1,2,3,4
 */
printLineNumber();
printLineNumber();
printLineNumber();
printLineNumber();

/**
 * Hay infinitas soluciones para un problema, por el momento no se preocupen y resuelvan los problemas como ustedes puedan :)
 */
