// Estructuras de control

// Dar un ejemplo de la vida real y explicarlo con un if

console.log('Inicio');

let isTired = true;

// Si lo que esta en los parentesis es verdadero se ejecuta, si es false, no se ejecuta
if (isTired === true) {
    console.log('Dormir :D');
} else {
    console.log('Tomar agua');
}

if (isTired === false) {
    console.log('Hacer tarea ;)');
}

// If else anidados
let grade = 9;

// Poner ejemplos con if's dentro del else, el cual mostraria un codigo redundante para despues mejorar como se muestra a continuación
if (grade >= 6) {
    console.log('Aprobaste!');
} else if (grade > 5) {
    console.log('Hechale ganas pa la otra');
} else {
    console.log('Ni como ayudarte :/');
}

console.log('Fin')

/**
 * Ejercicio:
 * Realizar un programa que muestre la nota del alumno como: A, B, C, D , F
 * donde:
 * 
 * A >= 90,
 * B >= 80,
 * C >= 70,
 * D >= 60,
 * F < 60
 */

let grade = 59;

if (grade >= 90) {
    console.log('Tú calificación es: A');
} else if (grade >= 80) {
    console.log('Tú calificación es: B');
} else if (grade >= 70) {
    console.log('Tú calificación es: C');
} else if (grade >= 60) {
    console.log('Tú calificación es: D');
} else {
    console.log('Reprobaste :(');
}
// O tambien se podria de la siguiente pero seria muy redundante
// else if (grade < 60) {
//     console.log('Reprobaste :(');
// }