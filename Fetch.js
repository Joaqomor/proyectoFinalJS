


const recuperarProductos = async () => {
  
  fetch (URL)
  .then((response) => response.json())

  .then((data) => {
    stockProductos = data
    data.forEach(contenido => { retornoContenido(contenido) 
  
      }) 
  })
  .catch(error => {
    stockProductos= "se produjo un error"
  })
  .finally(() =>{
    spinner.innerHTML = "" 
    console.log ("se recuperaron satisfactoriamente los datos")
  })

  
}



