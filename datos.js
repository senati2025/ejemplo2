const usuarios = [
  {
    nombre: "Reiser Soplin Ramos",
    direccion: "Av. Tupac Amaru km 23",
    id: 1522611
  },
  {
    nombre: "ROJAS CHIROQUE GIACOMO",
    direccion: "UCV 35 LOTE 32 HUAYCAN",
    id: 1518271
  },
  {
    nombre: "Maria Fatima",
    direccion: "Mz K lote 3",
    id: 1548358
  },
  {
    nombre: "Karel de la torre",
    direccion: "Ancón ",
    id: 1534541
  },
  {
    nombre: "Piero Javier Chacpi Tahua",
    direccion: "Calle Limoncillos 102 lote 16",
    id: 1540314
  }
];

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
