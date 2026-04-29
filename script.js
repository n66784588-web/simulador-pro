function cambiarAmbiente(tipo) {
  document.getElementById("ambiente").src =
    `img/habitaciones/${tipo}.jpg`;
}
const catalogo = document.getElementById("catalogo");

productos.forEach(p => {
  const img = document.createElement("img");

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
