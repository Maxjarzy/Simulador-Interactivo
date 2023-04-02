

fetch('assets/js/comentarios.json')
    .then((respuesta) => {return respuesta.json()})
    .then((comentarios) => {
        render(comentarios);
    })
    
    

    function render(listaComentarios) {
    const comentariosContainer = document.querySelector('#comentarios');
    let html = "";
    listaComentarios.forEach(({name, body, image}) => {
        html += `<div class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <div class="d-flex justify-content-start pt-3 pb-3">
                    <i class="fa-solid fa-star fa-lg p-1" style="color: #d4af37;"></i>
                    <i class="fa-solid fa-star fa-lg p-1" style="color: #d4af37;"></i>
                    <i class="fa-solid fa-star fa-lg p-1" style="color: #d4af37;"></i>
                    <i class="fa-solid fa-star fa-lg p-1" style="color: #d4af37;"></i>
                    <i class="fa-solid fa-star fa-lg p-1" style="color: #d4af37;"></i>
                </div>
                <p class="card-text">${body}</p>
            </div>
        </div>`
      
    });
    comentariosContainer.innerHTML = html;

}