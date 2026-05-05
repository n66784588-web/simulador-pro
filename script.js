function cambiarAmbiente(tipo) {
  document.getElementById("ambiente").src =
    `img/habitaciones/${tipo}.jpg`;
}

function aplicarPiso(ruta, nombre) {
  document.getElementById("piso").style.backgroundImage =
    `url(${ruta})`;

  document.getElementById("nombre").innerText = nombre;
  document.getElementById("preview").src = ruta;
}

function cargarCatalogo(lista) {
  const contenedor = document.getElementById("catalogo");
  contenedor.innerHTML = "";

  lista.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("item");

    div.innerHTML = `
      <img src="img/pisos/${p.marca}/${p.imagen}">
      <p>${p.nombre}</p>
    `;

    div.onclick = () => {
      aplicarPiso(`img/pisos/${p.marca}/${p.imagen}`, p.nombre);
    };

    contenedor.appendChild(div);
  });
}

function filtrarMarca(marca) {
  if (marca === "todas") {
    cargarCatalogo(productos);
  } else {
    const filtrados = productos.filter(p => p.marca === marca);
    cargarCatalogo(filtrados);
  }
}

cargarCatalogo(productos);
