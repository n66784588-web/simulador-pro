// CARGA INICIAL
document.addEventListener("DOMContentLoaded", () => {
  mostrarProductos();
});

// CAMBIAR AMBIENTE
function cambiarAmbiente(nombre) {
  document.getElementById("ambiente").src =
    `img/habitaciones/${nombre}.jpg`;
}

// MOSTRAR PRODUCTOS
function mostrarProductos(lista = productos) {
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = "";

  lista.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("item");

    const img = document.createElement("img");

    // 🔥 RUTA PERFECTA
    img.src = `img/productos/${p.marca}/${p.nombre}.jpg`;

    // SI NO EXISTE LA IMAGEN
    img.onerror = () => {
      img.src = "img/no-image.jpg";
    };

    img.onclick = () => seleccionarProducto(p);

    div.appendChild(img);
    catalogo.appendChild(div);
  });
}

// SELECCIONAR PRODUCTO
function seleccionarProducto(p) {
  document.getElementById("nombre").innerText = p.nombre;

  const ruta = `img/productos/${p.marca}/${p.nombre}.jpg`;

  document.getElementById("preview").src = ruta;

  document.getElementById("piso").style.backgroundImage =
    `url('${ruta}')`;
}

// FILTRO
function filtrarMarca(marca) {
  if (marca === "todas") {
    mostrarProductos(productos);
  } else {
    const filtrados = productos.filter(p => p.marca === marca);
    mostrarProductos(filtrados);
  }
}
