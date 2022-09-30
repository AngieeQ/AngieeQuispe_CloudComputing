//¿Cómo sabemos que necesitamos un bucle aquí? Porque me establecen ciertas condiciones para deducir porque es un FOr , como el punto de partida, limite y cunto se incrementa
//¿Cuál es el punto de partida del bucle? El punto arranca en 0
//¿Cuándo debe detenerse el bucle? Cuando llegue al bucle decimo deja de sumar
//¿Cómo sabrá parar? Porque en la condicion del FOR estableci i <10 ue limita el loop
//¿Cuál es el incremento para cada iteración del bucle? En este caso es de 3 segun el enunciado
//¿Qué variables necesitamos? La variable para el for en este caso i

for(var i = 0; i < 10 ; i += 3)
{
    console.log("¡Pasaron los 3km! toma un caramelo ");
}
console.log("Se pasó del limite para dar caramelos ¡Lo siento!");