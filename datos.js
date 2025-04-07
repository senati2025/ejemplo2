// Lista de usuarios (puedes agregar más)
const usuarios = [
    {
      nombre: "ROJAS CHIROQUE GIACOMO",
      direccion: "UCV 35 LOTE 32 HUAYCAN",
      id: 1518271
    },
    {
      nombre: "Luis Pérez",
      direccion: "Av. Libertad 456, Ciudad B",
      id: 102
    },
    {
      nombre: "Marta Díaz",
      direccion: "Calle Luna 789, Ciudad C",
      id: 103
    }
  ];
  
  // Mostrar usuarios en el HTML
  const resultadosContainer = document.getElementById("resultadosContainer");
  
  usuarios.forEach(usuario => {
    const item = document.createElement("div");
    item.classList.add("resultado-item");
  
    item.innerHTML = `
      <p><strong>Nombre:</strong> ${usuario.nombre}</p>
      <p><strong>Dirección:</strong> ${usuario.direccion}</p>
      <p><strong>ID:</strong> ${usuario.id}</p>
    `;
  
    resultadosContainer.appendChild(item);
  });
  