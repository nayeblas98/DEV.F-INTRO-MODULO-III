//Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log().

let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'augost', 'september', 'octuber', 'november', 'december'];


console.log(months)

//Escribir el código de una función a la que se pasa como parámetro un número entero y 
//devuelve como resultado una cadena de texto que indica si el número es par o impar. 
//Mostrar por pantalla el resultado devuelto por la función.

function number(num){
    if (num%2 == 0 ){
        return 'Es un número par'
    }else {
        return 'Es un número impar'
    }
}

console.log(number(6))

//Definir una función que muestre información sobre una cadena de texto que 
//se le pasa como argumento. A partir de la cadena que se le pasa, la función 
//determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function verify (phrase){
    if(phrase == phrase.toUpperCase()){
        return 'Your phrase is in uppercase.';
    }else if(phrase == phrase.toLowerCase()){
        return 'Your phrase is in lowercase.';
    }else{
        return 'Your phrase is in both uppercase and lowercase.';
    }
}

console.log(verify('Hello! My name is Mariana.'))
console.log(verify('hello! my name is mariana.'))

//El factorial de un número entero n es una operación matemática que consiste en multiplicar todos 
//los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 
//5! = 5 x 4 x 3 x 2 x 1 = 120 Utilizando la estructura for, crear un script que calcule el factorial de un número entero.

let result = 1;

for(let i = 4; i >= 1; i--){
    result = result * i;
    result = result;
}

console.log(result);

//Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, 
//si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo:
//"La ruta nos aporto otro paso natural".

function palindromo(cadena) {
    let splitCadena = cadena.split('');
    let reverseCadena = cadena.split('').reverse();
    let joinCadena = reverseCadena.join('');

    if(cadena === joinCadena){
        return 'Es palindromo';
    }else{
        return 'No es palindromo';
    }
}


console.log(palindromo("madam"))

//Escribir una función que simule el lanzamiento de dos dados. 
//Hacer uso de la función Math.random para obtener números aleatorios 
//entre 1 y 6 para cada uno de los lanzamientos de los dados. 
//Sumar el resultado de lanzar dos dados y anotar en un array el número 
//de apariciones de dicha suma, repitiendo 36.000 veces esta operación.

var sums = [];
let repeats = {};77
var sum = 0; 
var i = 0;

function dados(){

    while(i < 36000){
        var dado1 = parseInt(6*Math.random()+1);
        var dado2 = parseInt(6*Math.random()+1);
        sum = dado1 + dado2;
        sums.push(sum);
        i++
    }

    sums.forEach((number) => {
        repeats[number] = (repeats[number] || 0) + 1;
    }); 
    return repeats;

}

console.log(dados());