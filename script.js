// CAMBIAR AMBIENTE
function cambiarAmbiente(tipo) {
  document.getElementById("ambiente").src =
    `img/habitaciones/${tipo}.jpg`;
}

// CARGAR PRODUCTOS
const catalogo = document.getElementById("catalogo");

productos.forEach(p => {
  const img = document.createElement("img");

  // 👇 ESTA ES LA CLAVE POR MARCA
  img.src = `img/pisos/${p.marca}/${p.nombre}.jpg`;

  img.style.width = "120px";
  img.style.margin = "10px";
  img.style.cursor = "pointer";

  img.onclick = () => {
    document.getElementById("preview").src = img.src;
    document.getElementById("nombre").innerText = p.nombre;
  };

  catalogo.appendChild(img);
});
