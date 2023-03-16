

let cuotas;
let operacion;
let gasto;
let montoTotalDeGastos = 0;
let montoUnaCuota = 0;
let montoDosCuotas = 0;
let montoTresCuotas = 0;
let montoSeisCuotas = 0;
let montoDoceCuotas = 0;
let montoErroneo = 0;

let gastosTotales = [];

class gastoNuevo {
    constructor(gasto, cuotas, mes, localDeCompra){
        this.importe = gasto;
        this.cantidadCuotas = cuotas;
        this.mesDeCompra = mes;
        this.dondeCompro = localDeCompra;
    }
    getCuota(){
        return this.importe/ this.cantidadCuotas;
    }
}


do{
    do {
        gasto = Number(prompt("Ingrese monto del gasto"));
        if(gasto == 0){
            alert("El importe no puede ser 0")
        }
    } while (gasto === 0);
    
   
    cuotas = Number(prompt("Ingrese la opción correspondiente: \n 1 --> 1 Cuota \n 2 --> 2 Cuotas \n 3 --> 3 Cuotas \n 6 --> 6 Cuotas \n 12 --> 12 Cuotas"));

    if(cuotas === 0){
        cuotas = Number(prompt("La opción seleccionada no es correcta. Ingrese nuevamente: \n 1 --> 1 Cuota \n 2 --> 2 Cuotas \n 3 --> 3 Cuotas \n 6 --> 6 Cuotas \n 12 --> 12 Cuotas"));
    }

    let fecha = new Date ();
    fechaDeCompra = fecha.getMonth();
    localDeCompra = prompt("¿Dónde realizó la compra?").toUpperCase();

    switch(fechaDeCompra){
        case 0:
            fechaDeCompra = "Enero";
            break;
        case 1:
            fechaDeCompra = "Febrero";
            break;
        case 2:
            fechaDeCompra = "Marzo";
            break;
        case 3:
            fechaDeCompra = "Abril";
            break;
        case 4:
            fechaDeCompra = "Mayo";
            break;
        case 5:
            fechaDeCompra = "Junio";
            break;
        case 6:
            fechaDeCompra = "Julio";
            break;
        case 7:
            fechaDeCompra = "Agosto";
            break;
        case 8:
            fechaDeCompra = "Septiembre";
            break;
        case 9:
            fechaDeCompra = "Octubre";
            break;
        case 10:
            fechaDeCompra = "Noviembre";
            break;
        case 11:
            fechaDeCompra = "Diciembre";
            break;
    }

let compra = new gastoNuevo(gasto, cuotas, fechaDeCompra, localDeCompra);


    operacion = prompt('Para ingresar mas datos presione "+", para terminar la carga ingrese "="');

    gastosTotales.push(compra);
    

    switch (cuotas) {
        case 1:
            document.write("$" + Number(gasto.toFixed(2)) + " ");
            document.write("<br>")
            montoUnaCuota += gasto;
            break;
        case 2:
            document.write("<br>")
            for(let i = 1; i <= 2; i += 1){
                document.write("$" + compra.getCuota().toFixed(2) + " ");
                if(i == 1){
                    montoUnaCuota += compra.getCuota();
            }else{
                montoDosCuotas += compra.getCuota()
            }
        }   
            document.write("<br>")
            break;
        case 3:
            document.write("<br>")
            for(let i = 1; i <= 3; i += 1){
                document.write("$" + compra.getCuota().toFixed(2) + " ");
                if(i == 1){
                    montoUnaCuota += compra.getCuota();
            }else if(i == 2){
                montoDosCuotas += compra.getCuota()
            }else{
                montoTresCuotas += compra.getCuota();
            }
            }
            document.write("<br>")
            break;
        case 6:
            document.write("<br>")
            for(let i = 1; i <= 6; i += 1){
                document.write("$" + compra.getCuota().toFixed(2) + " ");
                switch(i){
                    case 1:
                        montoUnaCuota += compra.getCuota();
                        break;
                    case 2:
                        montoDosCuotas += compra.getCuota();
                        break;
                    case 3:
                        montoTresCuotas += compra.getCuota();
                        break;
                    case 6:
                        montoSeisCuotas += compra.getCuota();
                        break;
                }
            }
            document.write("<br>")
            break;
        case 12:
            document.write("<br>")
            for(let i = 1; i <= 12; i += 1){
                document.write("$" + compra.getCuota().toFixed(2) + " ");
                switch(i){
                    case 1:
                        montoUnaCuota += compra.getCuota();
                        break;
                    case 2:
                        montoDosCuotas += compra.getCuota();
                        break;
                    case 3:
                        montoTresCuotas += compra.getCuota();
                        break;
                    case 6:
                        montoSeisCuotas += compra.getCuota();
                        break;
                    case 12:
                        montoDoceCuotas += compra.getCuota();
                        break;
                }
            }
            document.write("<br>")
            break;
        default:
            alert('Error al cargar el número de cuotas. Ingrese el monto nuevamente .');
            document.write("Error de carga del importe: $" + gasto);
            break;          
    }

    document.write("<hr>")
    
}while(operacion != "=" )

    document.write("En la primer cuota vas pagar : $" + montoUnaCuota.toFixed(2) + "<br>");
    document.write("En la segunda cuota vas a pagar: $" + montoDosCuotas.toFixed(2) + "<br>");
    document.write("En la tercera cuota vas a pagar: $" + montoTresCuotas.toFixed(2) + "<br>");
    document.write("Desde la cuarta hasta la sexta cuota vas a pagar: $" + montoSeisCuotas.toFixed(2) + "<br>");
    document.write("Desde la séptima hasta deuodécima cuota vas a pagar: $" + montoDoceCuotas.toFixed(2) + "<br>");



const arrayGastosUnaCuota = gastosTotales.filter((nuevoGasto) => nuevoGasto.cantidadCuotas == 1);
const arrayGastosDosCuotas = gastosTotales.filter((nuevoGasto) => nuevoGasto.cantidadCuotas == 2);
const arrayGastosTresCuotas = gastosTotales.filter((nuevoGasto) => nuevoGasto.cantidadCuotas == 3);
const arrayGastosSeisCuotas = gastosTotales.filter((nuevoGasto) => nuevoGasto.cantidadCuotas == 6);
const arrayGastosDoceCuotas = gastosTotales.filter((nuevoGasto) => nuevoGasto.cantidadCuotas == 12);



function imprimirArray(gastos){
    for(let gasto of gastos){
        document.write("Importe: "+ gasto.importe + "<br>");
        document.write("Cantidad de cuotas: " + gasto.cantidadCuotas + "<br>");
        document.write("Importe cuota: " + gasto.getCuota() + "<br>")    ;
        document.write("Mes de compra: " + gasto.mesDeCompra + "<br>");
        document.write("Lugar de compra: " + gasto.dondeCompro + "<br>");
        document.write("---------------- <br>")

    }
    } 

document.write("-------------------------------------------------------------------------------- <br>")
document.write("Gastos en una cuota:" + "<br>");
imprimirArray(arrayGastosUnaCuota);
document.write("-------------------------------------------------------------------------------- <br>") 
document.write("Gasos en dos cuotas:" + "<br>");
imprimirArray(arrayGastosDosCuotas);
document.write("-------------------------------------------------------------------------------- <br>")
document.write("Gasos en tres cuotas:" + "<br>");
imprimirArray(arrayGastosTresCuotas);
document.write("-------------------------------------------------------------------------------- <br>")
document.write("Gasos en seis cuotas:" + "<br>");
imprimirArray(arrayGastosSeisCuotas);
document.write("-------------------------------------------------------------------------------- <br>")
document.write("Gasos en doce cuotas:" + "<br>");
imprimirArray(arrayGastosDoceCuotas); 
