var altura = 48;
var edad = 11
var minimoEdad = 10;
var minimoAltura = 52

    if (altura > minimoAltura)
    {
        console.log("¡Subete, chico!");
    }
    else if (altura < minimoAltura || edad < minimoEdad ) 
    {
        console.log("Lo siento, chico. tal vez el proximo año");
    }
    // Se asegura que no sea menor a 52 y menor a 10. 
    //Por lo que si UNO de eso 2 (minimoAltura o minimoEdad) no se cumple, no puede subir
    //Teniendo en cuenta la altura NO PUEDE subir, por que es menor a 52

    
