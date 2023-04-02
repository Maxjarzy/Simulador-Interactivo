

  function cartel(mensaje, nodo){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${mensaje}`,
        background: '#043263',
        color: '#fff', 
        confirmButtonColor: '#245CFF',
        didClose: () => { document.querySelector(`'${nodo}`).focus(); }
        
      })
      return
  }

  que