let productosFiltrados = [];
let seleccionActual = "";

/* CAMBIAR HABITACION */
function cambiarAmbiente(tipo) {
  document.getElementById("ambiente").src =
    `img/habitaciones/${tipo}.jpg`;
}

/* FILTRAR POR MARCA */
function filtrarMarca(marca) {
  if (marca === "todas") {
    productosFiltrados = productos;
  } else {
    productosFiltrados = productos.filter(p => p.marca === marca);
  }

  mostrarCatalogo();
}

/* MOSTRAR CATALOGO */
function mostrarCatalogo() {
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = "";

  productosFiltrados.forEach(p => {
    const div = document.createElement("div");
    div.className = "item";

    div.innerHTML = `
      <img src="img/pisos/${p.marca}/${p.imagen}">
      <p>${p.nombre}</p>
    `;

    div.onclick = () => aplicarPiso(p);

    catalogo.appendChild(div);
  });
}

/* APLICAR PISO */
function aplicarPiso(p) {
  seleccionActual = `img/pisos/${p.marca}/${p.imagen}`;

  document.getElementById("piso").style.backgroundImage =
    `url(${seleccionActual})`;

  document.getElementById("nombre").innerText = p.nombre;
  document.getElementById("preview").src = seleccionActual;
}

/* INICIO */
productosFiltrados = productos;
mostrarCatalogo();
