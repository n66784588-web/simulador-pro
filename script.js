// CAMBIAR AMBIENTE
function cambiarAmbiente(tipo) {
  document.getElementById("ambiente").src =
    `img/habitaciones/${tipo}.jpg`;
}

const catalogo = document.getElementById("catalogo");

// FUNCIÓN PARA MOSTRAR PRODUCTOS
function mostrarProductos(lista) {
  catalogo.innerHTML = "";

  lista.forEach(p => {
    const img = document.createElement("img");

    img.src = `img/pisos/${p.marca}/${p.nombre}.jpg`;

    img.onclick = () => {
      document.getElementById("preview").src = img.src;
      document.getElementById("nombre").innerText = p.nombre;

      // aplicar piso
      document.getElementById("piso").style.backgroundImage =
        `url(${img.src})`;
    };

    catalogo.appendChild(img);
  });
}

// FILTRO POR MARCA
function filtrarMarca(marca) {
  if (marca === "todas") {
    mostrarProductos(productos);
  } else {
    const filtrados = productos.filter(p => p.marca === marca);
    mostrarProductos(filtrados);
  }
}

// CARGA INICIAL
mostrarProductos(productos);
