// #1 Escribe un bucle for que recorra un arreglo de números e imprima cada número.

var arr1 = [8, 6, 7, 5, 3, 0, 9];
for (var i = 0; i < arr1.length ; i++)
  {
    console.log(arr1[i]);
  }


// #2 Escribe un ciclo for que recorra un arreglo de números e imprima 
//la suma del número y el índice del número en el arreglo.

var arr2 = [4, 7, 13, 13, 19, 37, -2];
var suma = 0;
for (var i = 0; i < arr2.length ; i++)
  {
    suma = arr2[i] + i;
    console.log(suma);
  }

//#3 Escribe un bucle for que recorra un arreglo de números e imprima 
//SOLO los números mayores a 5.

var arr3 = [6, 2, 12, 14, -24, 5, 0];
for(var i = 0; i < arr3.length ; i++)
{
  if (arr3[i] > 5)
    {
      console.log("¡Es un numero mayor a 5!");
      console.log(arr3[i]);
    }
}

//BONUS NINJA: modifica tu solución para el #3 para que cualquier número en el arreglo que NO 
//sea mayor que 5 se reemplace con una cadena de "No hay dados". Esta cadena NO debe imprimirse.

var arr3 = [6, 2, 12, 14, -24, 5, 0];
for(var i = 0; i < arr3.length ; i++)
{
    if (arr3[i] > 5)
    {
        console.log("¡Es un numero mayor a 5!");
        console.log(arr3[i]);
    }
    else 
    {
        arr3[i] = 'No hay dados';
    }
}