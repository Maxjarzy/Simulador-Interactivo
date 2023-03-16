let montoUnaCuota = 0;
let montoDosCuotas = 0;
let montoTresCuotas = 0;
let montoSeisCuotas = 0;
let montoDoceCuotas = 0;
let gastosTotales = [];
//let fila;


 
const datosFormulario = document.querySelector('.formularioIngreso');/*
const donde = document.querySelector('#formDonde');
const cuanto = document.querySelector('#formCantidad');
const cuotas = document.querySelector('input[name="cuotas"]:checked');
const fecha = document.querySelector('#formCuando'); */


class gastoNuevo {
    constructor(localDeCompra,gasto, cuotas, mes){
        this.dondeCompro = localDeCompra;
        this.importe = gasto;
        this.cantidadCuotas = cuotas;
        this.mesDeCompra = mes;
        
    }
    getCuota(){
        return this.importe/ this.cantidadCuotas;
    }
}


datosFormulario.addEventListener('submit', validar);

    
 function validar(evt){
    evt.preventDefault();
    const donde = document.querySelector('#formDonde').value;
    const cantidad = Number(document.querySelector('#formCantidad').value);
    const cuotas = Number(document.querySelector('input[name="cuotas"]:checked').value);
    const cuando = document.querySelector('#formCuando').value; 

    const compra = new gastoNuevo(donde, cantidad, cuotas, cuando);

    const tabla = document.querySelector('.tablaBody');

    if(typeof(compra) != undefined){
        const tablaEncabeza = document.querySelector('thead');
        tablaEncabeza.className = "mostrar";
    }

    function crearTR(){
        fila = document.createElement('tr');
            fila.innerHTML = ` 
                                    <td>${donde}</td>
                                    <td>${cuando}</td>
                                    <td>$${cantidad}</td>
                                    <td>${cuotas} </td>
                                    <td>$${compra.getCuota()} </td>
                            `;
            tabla.appendChild(fila);
            datosFormulario.reset();
    }
    
    switch (cuotas) {
        case 1:
            crearTR();
            //montoUnaCuota += cantidad;
            gastosTotales.push(compra);
            break;
        case 2:
            crearTR();
           // montoUnaCuota += compra.getCuota().toFixed(2);
           // montoDosCuotas += compra.getCuota().toFixed(2);   
            gastosTotales.push(compra);
            break;
        case 3:
            crearTR();
            //montoUnaCuota += compra.getCuota().toFixed(2);
            //montoDosCuotas += compra.getCuota().toFixed(2);   
            //montoTresCuotas += compra.getCuota().toFixed(2);   
            gastosTotales.push(compra);
            break;
        case 6:
            crearTR();
           // montoUnaCuota += compra.getCuota().toFixed(2);
            //montoDosCuotas += compra.getCuota().toFixed(2);   
            //montoTresCuotas += compra.getCuota().toFixed(2); 
           // montoSeisCuotas += compra.getCuota().toFixed(2);
            gastosTotales.push(compra);
            break;
        case 12:
            crearTR();
           // montoUnaCuota += compra.getCuota().toFixed(2);
            //montoDosCuotas += compra.getCuota().toFixed(2);   
            //montoTresCuotas += compra.getCuota().toFixed(2); 
            //montoSeisCuotas += compra.getCuota().toFixed(2);
            //montoDoceCuotas += compra.getCuota().toFixed(2);
            gastosTotales.push(compra);
            break;         
    }
    
    const arrayGastosUnaCuota = gastosTotales.filter((nuevoGasto) => nuevoGasto.cantidadCuotas == 1);
    const arrayGastosDosCuotas = gastosTotales.filter((nuevoGasto) => nuevoGasto.cantidadCuotas == 2);
    const arrayGastosTresCuotas = gastosTotales.filter((nuevoGasto) => nuevoGasto.cantidadCuotas == 3);
    const arrayGastosSeisCuotas = gastosTotales.filter((nuevoGasto) => nuevoGasto.cantidadCuotas == 6);
    const arrayGastosDoceCuotas = gastosTotales.filter((nuevoGasto) => nuevoGasto.cantidadCuotas == 12);


    console.log("Gastos totales " + gastosTotales);
            console.log("Gastos 1 " + arrayGastosUnaCuota);
            console.log("Gastos 2 " + arrayGastosDosCuotas);
            console.log("Gastos 3 " + arrayGastosTresCuotas);
            console.log("Gastos 6 " + arrayGastosSeisCuotas);
            console.log("Gastos 12 " + arrayGastosDoceCuotas);
  

    sessionStorage.setItem('unaCuota', JSON.stringify(arrayGastosUnaCuota));
    sessionStorage.setItem('dosCuotas', JSON.stringify(arrayGastosDosCuotas));
    sessionStorage.setItem('tresCuotas', JSON.stringify(arrayGastosTresCuotas));
    sessionStorage.setItem('seisCuotas', JSON.stringify(arrayGastosSeisCuotas));
    sessionStorage.setItem('doceCuotas', JSON.stringify(arrayGastosDoceCuotas)); 

}


const boton = document.querySelector('#botonDescripcion');

boton.addEventListener('click', imprimirCompras);


 function imprimirCompras(){


    //Agrego los gastos en 1 cuota

    unaCuota = JSON.parse(sessionStorage.getItem('unaCuota'));
    let gastoUna = document.querySelector('#seccionUnaCuota');
    let titulo  = document.querySelector('#tituloUno');
    titulo.className = "tituloSecciones mostrar";
   for(let gasto of unaCuota) {

        let nuevoGasto = document.createElement('div');
        
        nuevoGasto.className = "card";
        nuevoGasto.style.width="18rem";
        nuevoGasto.innerHTML = `
        <div class="card-header">${gasto.dondeCompro}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${gasto.cantidadCuotas}</li>
          <li class="list-group-item">${gasto.importe}</li>
          <li class="list-group-item">${gasto.mesDeCompra}</li>
        </ul>
        `;
        gastoUna.appendChild(nuevoGasto);
        sessionStorage.removeItem('unaCuota');
        for( let gasto of gastosTotales){
            if(gasto.cantidadCuotas == 1){
                gastosTotales.splice(gastosTotales.indexOf('gasto'), 1);
            }
        }   
    }
    
    //Agrego los gastos en 2 cuotas

    dosCuotas = JSON.parse(sessionStorage.getItem('dosCuotas'));
    let gastoDos = document.querySelector('#seccionDosCuotas');
    let tituloDos  = document.querySelector('#tituloDos');
    tituloDos.className = "tituloSecciones mostrar";
   for(let gasto of dosCuotas) {
    
        let nuevoGasto = document.createElement('div');
        
        nuevoGasto.className = "card";
        nuevoGasto.style.width="18rem";
        nuevoGasto.innerHTML = `
        <div class="card-header">${gasto.dondeCompro}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${gasto.cantidadCuotas}</li>
          <li class="list-group-item">${gasto.importe}</li>
          <li class="list-group-item">${gasto.mesDeCompra}</li>
        </ul>
        `;
        gastoDos.appendChild(nuevoGasto);
        sessionStorage.removeItem('dosCuotas');
        for( let gasto of gastosTotales){
            if(gasto.cantidadCuotas == 2){
                gastosTotales.splice(gastosTotales.indexOf('gasto'), 1);
            }
        } 
    }

    //Agrego los gastos en 3 cuotas

    tresCuotas = JSON.parse(sessionStorage.getItem('tresCuotas'));
    let gastoTres = document.querySelector('#seccionTresCuotas');
    let tituloTres  = document.querySelector('#tituloTres');
    tituloTres.className = "tituloSecciones mostrar";
   for(let gasto of tresCuotas) {
    
        let nuevoGasto = document.createElement('div');
        
        nuevoGasto.className = "card";
        nuevoGasto.style.width="18rem";
        nuevoGasto.innerHTML = `
        <div class="card-header">${gasto.dondeCompro}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${gasto.cantidadCuotas}</li>
          <li class="list-group-item">${gasto.importe}</li>
          <li class="list-group-item">${gasto.mesDeCompra}</li>
        </ul>
        `;
        gastoTres.appendChild(nuevoGasto);
        sessionStorage.removeItem('tresCuotas');
        for( let gasto of gastosTotales){
            if(gasto.cantidadCuotas == 3){
                gastosTotales.splice(gastosTotales.indexOf('gasto'), 1);
            }
        }
    }

    //Agrego los gastos en 6 cuotas

    seisCuotas = JSON.parse(sessionStorage.getItem('seisCuotas'));
    let gastoSeis = document.querySelector('#seccionSeisCuotas');
    let tituloSeis  = document.querySelector('#tituloSeis');
    tituloSeis.className = "tituloSecciones mostrar";
   for(let gasto of seisCuotas) {
    
        let nuevoGasto = document.createElement('div');
        
        nuevoGasto.className = "card";
        nuevoGasto.style.width="18rem";
        nuevoGasto.innerHTML = `
        <div class="card-header">${gasto.dondeCompro}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${gasto.cantidadCuotas}</li>
          <li class="list-group-item">${gasto.importe}</li>
          <li class="list-group-item">${gasto.mesDeCompra}</li>
        </ul>
        `;
        gastoSeis.appendChild(nuevoGasto);
        sessionStorage.removeItem('seisCuotas');
        for( let gasto of gastosTotales){
            if(gasto.cantidadCuotas == 6){
                gastosTotales.splice(gastosTotales.indexOf('gasto'), 1);
            }
        }
    }

    //Agrego los gastos en 12 cuotas

    doceCuotas = JSON.parse(sessionStorage.getItem('doceCuotas'));
    let gastoDoce = document.querySelector('#seccionDoceCuotas');
    let tituloDoce  = document.querySelector('#tituloDoce');
    tituloDoce.className = "tituloSecciones mostrar";
   for(let gasto of doceCuotas) {
    
        let nuevoGasto = document.createElement('div');
        
        nuevoGasto.className = "card";
        nuevoGasto.style.width="18rem";
        nuevoGasto.innerHTML = `
        <div class="card-header">${gasto.dondeCompro}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${gasto.cantidadCuotas}</li>
          <li class="list-group-item">${gasto.importe}</li>
          <li class="list-group-item">${gasto.mesDeCompra}</li>
        </ul>
        `;
        gastoDoce.appendChild(nuevoGasto);
        sessionStorage.removeItem('doceCuotas');
        for( let gasto of gastosTotales){
            if(gasto.cantidadCuotas == 12){
                gastosTotales.splice(gastosTotales.indexOf('gasto'), 1);
            }
        }
    }


    for( let gasto of gastosTotales){
        gastosTotales.splice(0, gastosTotales.length)
    }

} 
