let montoUnaCuota = 0;
let montoDosCuotas = 0;
let montoTresCuotas = 0;
let montoSeisCuotas = 0;
let montoDoceCuotas = 0;
let gastosTotales = [];
//var nuevoGasto;
let subtitulo = "0";
const datosFormulario = document.querySelector('.formularioIngreso');

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

function imprimirCartel(mensaje, nodo){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${mensaje}`,
        background: '#043263',
        color: '#fff', 
        confirmButtonColor: '#245CFF',
        didClose: () => { document.querySelector(`${nodo}`).focus(); }
      })
      return
}

datosFormulario.addEventListener('submit', validar);

function validar(evt){
    evt.preventDefault();
    const donde = document.querySelector('#formDonde').value;
    const cantidad = Number(document.querySelector('#formCantidad').value);
    const cuotas = Number(document.querySelector('input[name="cuotas"]:checked').value);
    const cuando = document.querySelector('#formCuando').value; 

    if(donde == "" && (cantidad == 0 || cantidad < 0) && cuando == "" ){
        imprimirCartel("El formulario debe estar completo!", "#formDonde" )
        
    }else if(donde == ""){
        imprimirCartel("El lugar de compra no puede estár vacío!", "#formDonde" )

    }else if(cantidad <= 0){
        imprimirCartel("El importe no puede ser 0, ni menor!", "#formCantidad")

    }else if(cuando == ""){
        imprimirCartel("La fecha debe completarse!", "#formCuando")

    }else{
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
                                    <td>$${compra.getCuota().toFixed(2)} </td>
                            `;
            tabla.appendChild(fila);
            datosFormulario.reset();
    }
    
    switch (cuotas) {
        case 1:
            crearTR();
            montoUnaCuota += cantidad;
            gastosTotales.push(compra);
            break;
        case 2:
            crearTR();
            montoUnaCuota += compra.getCuota().toFixed(2);
            montoDosCuotas += compra.getCuota().toFixed(2);   
            gastosTotales.push(compra);
            break;
        case 3:
            crearTR();
            montoUnaCuota += compra.getCuota().toFixed(2);
            montoDosCuotas += compra.getCuota().toFixed(2);   
            montoTresCuotas += compra.getCuota().toFixed(2);   
            gastosTotales.push(compra);
            break;
        case 6:
            crearTR();
            montoUnaCuota += compra.getCuota().toFixed(2);
            montoDosCuotas += compra.getCuota().toFixed(2);   
            montoTresCuotas += compra.getCuota().toFixed(2); 
            montoSeisCuotas += compra.getCuota().toFixed(2);
            gastosTotales.push(compra);
            break;
        case 12:
            crearTR();
            montoUnaCuota += compra.getCuota().toFixed(2);
            montoDosCuotas += compra.getCuota().toFixed(2);   
            montoTresCuotas += compra.getCuota().toFixed(2); 
            montoSeisCuotas += compra.getCuota().toFixed(2);
            montoDoceCuotas += compra.getCuota().toFixed(2);
            gastosTotales.push(compra);
            break;         
    }
    
    filtrarGuardarArrays()
  }
}
 

const boton = document.querySelector('#botonDescripcion');

boton.addEventListener('click', imprimirCompras);

function imprimirCard(gasto){
     nuevoGasto = document.createElement('div');
                console.log(gasto)
                nuevoGasto.className = "card";
                nuevoGasto.style.width="18rem";
                nuevoGasto.innerHTML = `
                <div class="card-header">${gasto.dondeCompro}</div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">${gasto.cantidadCuotas}</li>
                <li class="list-group-item">$${gasto.importe}</li>
                <li class="list-group-item">${gasto.mesDeCompra}</li>
                </ul>
                `;
}

function imprimirCompras(){
    recuperarArrays()
        if(unaCuota == null || dosCuotas == null || tresCuotas == null || seisCuotas == null || doceCuotas == null ){
            imprimirCartel("Debe ingresar datos!", "#formDonde")
        }else{
            let gastosDetalle = document.querySelector('#gastosDetalle');
            let contenidoDetalle = document.createElement('ul');
                contenidoDetalle.innerHTML=     `
                                                    <li><h3>La primer cuota va a ser:$ ${montoUnaCuota}</h3></li>                
                                                    <li><h3>La segunda cuota va a ser:$ ${montoDosCuotas}</h3></li>
                                                    <li><h3>La primer cuota va a ser:$ ${montoTresCuotas}</h3></li> 
                                                    <li><h3>La primer cuota va a ser:$ ${montoSeisCuotas}</h3></li> 
                                                    <li><h3>La primer cuota va a ser:$ ${montoDoceCuotas}</h3></li>
                                                `
                gastosDetalle.appendChild(contenidoDetalle)
                gastosDetalle.innerHTML = "";
                gastosDetalle.appendChild(contenidoDetalle);

            let gastoUna = document.querySelector('#seccionUnaCuota');
            let titulo  = document.querySelector('#tituloUno');
            if(titulo.className == "mostrar"){
                subtitulo = document.createElement('h3');
                subtitulo.textContent = `El total de la primer cuota será:$ ${montoUnaCuota}`;
                gastoUna.appendChild(subtitulo);
            }else{
                subtitulo.textContent = `El total de la primer cuota será:$ ${montoUnaCuota}`;
            }
            titulo.className = "tituloSecciones mostrar";
                for(let gasto of unaCuota) {
                        imprimirCard(gasto)
                        gastoUna.appendChild(nuevoGasto);
                        localStorage.removeItem('unaCuota');
                        for( let gasto of gastosTotales){
                            if(gasto.cantidadCuotas == 1){
                                gastosTotales.splice(gastosTotales.indexOf('gasto'), 1);
                            }
                        }   
                    }

            let gastoDos = document.querySelector('#seccionDosCuotas');
            let tituloDos  = document.querySelector('#tituloDos');
            tituloDos.className = "tituloSecciones mostrar";
                for(let gasto of dosCuotas) {
                        imprimirCard(gasto)
                        gastoDos.appendChild(nuevoGasto);
                        localStorage.removeItem('dosCuotas');
                        for( let gasto of gastosTotales){
                            if(gasto.cantidadCuotas == 2){
                                gastosTotales.splice(gastosTotales.indexOf('gasto'), 1);
                            }
                        } 
                    }

            let gastoTres = document.querySelector('#seccionTresCuotas');
            let tituloTres  = document.querySelector('#tituloTres');
            tituloTres.className = "tituloSecciones mostrar";
                for(let gasto of tresCuotas) {
                        imprimirCard(gasto)
                        gastoTres.appendChild(nuevoGasto);
                        localStorage.removeItem('tresCuotas');
                        for( let gasto of gastosTotales){
                            if(gasto.cantidadCuotas == 3){
                                gastosTotales.splice(gastosTotales.indexOf('gasto'), 1);
                            }
                        }
                    }

        
            let gastoSeis = document.querySelector('#seccionSeisCuotas');
            let tituloSeis  = document.querySelector('#tituloSeis');
            tituloSeis.className = "tituloSecciones mostrar";
                for(let gasto of seisCuotas) {
                        imprimirCard(gasto)
                        gastoSeis.appendChild(nuevoGasto);
                        localStorage.removeItem('seisCuotas');
                        for( let gasto of gastosTotales){
                            if(gasto.cantidadCuotas == 6){
                                gastosTotales.splice(gastosTotales.indexOf('gasto'), 1);
                            }
                        }
                    }
        
            let gastoDoce = document.querySelector('#seccionDoceCuotas');
            let tituloDoce  = document.querySelector('#tituloDoce');
            tituloDoce.className = "tituloSecciones mostrar";
                for(let gasto of doceCuotas) {
                        imprimirCard(gasto)
                        gastoDoce.appendChild(nuevoGasto);
                        localStorage.removeItem('doceCuotas');
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
} 

function filtrarGuardarArrays(){
    const arrayGastosUnaCuota = gastosTotales.filter((nuevoGasto) => nuevoGasto.cantidadCuotas == 1);
    const arrayGastosDosCuotas = gastosTotales.filter((nuevoGasto) => nuevoGasto.cantidadCuotas == 2);
    const arrayGastosTresCuotas = gastosTotales.filter((nuevoGasto) => nuevoGasto.cantidadCuotas == 3);
    const arrayGastosSeisCuotas = gastosTotales.filter((nuevoGasto) => nuevoGasto.cantidadCuotas == 6);
    const arrayGastosDoceCuotas = gastosTotales.filter((nuevoGasto) => nuevoGasto.cantidadCuotas == 12);

    localStorage.setItem('unaCuota', JSON.stringify(arrayGastosUnaCuota));
    localStorage.setItem('dosCuotas', JSON.stringify(arrayGastosDosCuotas));
    localStorage.setItem('tresCuotas', JSON.stringify(arrayGastosTresCuotas));
    localStorage.setItem('seisCuotas', JSON.stringify(arrayGastosSeisCuotas));
    localStorage.setItem('doceCuotas', JSON.stringify(arrayGastosDoceCuotas)); 
}


function recuperarArrays(){
    unaCuota = JSON.parse(localStorage.getItem('unaCuota'));
    dosCuotas = JSON.parse(localStorage.getItem('dosCuotas'));
    tresCuotas = JSON.parse(localStorage.getItem('tresCuotas'));
    seisCuotas = JSON.parse(localStorage.getItem('seisCuotas'));
    doceCuotas = JSON.parse(localStorage.getItem('doceCuotas'));
}

  