/**
 * Explicar que es el swtich con mis palabras
 * Switch evalua una expresion, haciendo match con el valor que se le pasa como parametro
 */

let weekDay = 1;

// switch( weekDay ) {
//     case 1: // Explicar que se puede colocar como strings u otro tipo de datos
//         console.log('Lunes');
//         break; // Explicar el break
//     case 2:
//         console.log('Martes');
//         break;
//     case 3:
//         console.log('Miércoles');
//         break;
//     default:
//         console.log('Ingresa un dia válido');
// }

// Explicar como funcionaria con un if, validando que el usuario ingrese un dia valido

if (weekDay >= 1 && weekDay <= 7) {
    switch( weekDay ) {
        case 1:
            console.log('Lunes');
            break; // Explicar el break
        case 2:
            console.log('Martes');
            break;
        case 3:
            console.log('Miércoles');
            break;
        default:
            console.log('Ingresa un dia válido');
    }
} else {
    console.log('Error, ingresa un número valido');
}
