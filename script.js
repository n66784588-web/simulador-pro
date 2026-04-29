// CAMBIAR AMBIENTE
function cambiarAmbiente(tipo) {
  document.getElementById("ambiente").src =
    `img/habitaciones/${tipo}.jpg`;
}

// CARGAR CATÁLOGO
const catalogo = document.getElementById("catalogo");

productos.forEach(p => {
  const img = document.createElement("img");

  img.src = `img/pisos/${p.marca}/${p.nombre}.jpg`;

  img.onclick = () => {
    document.getElementById("preview").src = img.src;
    document.getElementById("nombre").innerText = p.nombre;
    document.getElementById("medida").innerText = "";
  };

  catalogo.appendChild(img);
});
