let productosFiltrados = productos;

/* CAMBIAR AMBIENTE */
function cambiarAmbiente(tipo) {
  document.getElementById("ambiente").src =
    `img/habitaciones/${tipo}.jpg`;
}

/* MOSTRAR CATÁLOGO */
function mostrarCatalogo() {
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = "";

  productosFiltrados.forEach(p => {

    if (!p.imagen || !p.marca) return; // 🔥 evita undefined

    let ruta = `img/pisos/${p.marca}/${p.imagen}`;

    const div = document.createElement("div");
    div.className = "item";

    div.innerHTML = `
      <img src="${ruta}" onerror="this.style.display='none'">
      <p>${p.nombre}</p>
    `;

    div.onclick = () => aplicarPiso(ruta, p.nombre);

    catalogo.appendChild(div);
  });
}

/* FILTRO */
function filtrarMarca(marca) {
  if (marca === "todas") {
    productosFiltrados = productos;
  } else {
    productosFiltrados = productos.filter(p => p.marca === marca);
  }

  mostrarCatalogo();
}

/* APLICAR PISO */
function aplicarPiso(ruta, nombre) {

  const piso = document.getElementById("piso");

  piso.style.backgroundImage = `url(${ruta})`;
  piso.style.backgroundRepeat = "repeat";
  piso.style.backgroundSize = "220px";

  document.getElementById("nombre").innerText = nombre;
  document.getElementById("preview").src = ruta;
}

/* INICIO */
mostrarCatalogo();
