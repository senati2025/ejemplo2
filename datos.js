document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById("nombreInput").value;
    const direccion = document.getElementById("direccionInput").value;
    const id = document.getElementById("idInput").value;
  
    document.getElementById("nombre").textContent = nombre;
    document.getElementById("direccion").textContent = direccion;
    document.getElementById("id").textContent = id;
  
    const mensaje = document.getElementById("mensaje");
    mensaje.classList.add("visible");
  
    setTimeout(() => {
      mensaje.classList.remove("visible");
    }, 3000);
  });
  