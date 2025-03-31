/*EJERCICIO 1
console.log("hola");*/

/*EJERCICIO 2*/
let materias = ["matematica", "lengua", "DAI", "EFSI", "Proyecto Final"];
const mostrarArray = (array) =>{
    array.forEach(valor=>{
        console.log(valor);
    })
}
// mostrarArray(materias);

/*EJERCICIO 3*/
materias.push("historia");
// mostrarArray(materias);

/*EJERCICIO 4*/
// console.log(materias.lastIndexOf("lengua"));

/*EJERCICIO 5*/
let notas = [3,4,1,7,3], suma = 0;
const sumarNotas = (acumulador, valor)=>{
    return acumulador+valor;
}
suma = notas.reduce(sumarNotas);
// console.log(suma);

/*EJERCICIO 6*/
materias.reverse();
// mostrarArray(materias);

/*EJERCICIO 7*/
notas.sort();
// mostrarArray(notas);

/*EJERCICIO 8*/
const numerosFiltrados = notas.filter(function(numero) {
    return numero > 5;
  });
// mostrarArray(numerosFiltrados);

/*EJERCICIO 9*/
let contador = 0;
const cantVecesRepetido = (array, elemento) => array.reduce((contador, actual) =>
   (actual === elemento ? contador+1 : contador), 0);

console.log(cantVecesRepetido(notas, 7));

