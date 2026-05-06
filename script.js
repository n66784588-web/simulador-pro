document.addEventListener("DOMContentLoaded", () => {
  cambiarAmbiente("sala");
  mostrarProductos();
});

// CAMBIAR AMBIENTE
function cambiarAmbiente(nombre) {
  const img = document.getElementById("ambiente");
  img.src = `img/habitaciones/${nombre}.jpg`;
}

// MOSTRAR PRODUCTOS
function mostrarProductos(lista = productos) {
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = "";

  lista.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("item");

    const img = document.createElement("img");

    // 🔥 RUTA CORRECTA
    img.src = `img/productos/${p.marca}/${p.nombre}.jpg`;

    // SI NO EXISTE
    img.onerror = () => {
      img.src = "img/no-image.jpg";
      console.error("No se encontró:", p.nombre);
    };

    img.onclick = () => seleccionarProducto(p);

    div.appendChild(img);
    catalogo.appendChild(div);
  });
}

// SELECCIONAR PRODUCTO
function seleccionarProducto(p) {
  const ruta = `img/productos/${p.marca}/${p.nombre}.jpg`;

  document.getElementById("nombre").innerText = p.nombre;
  document.getElementById("preview").src = ruta;

  const piso = document.getElementById("piso");

  // 🔥 PROYECCIÓN REAL
  piso.style.backgroundImage = `url('${ruta}')`;
  piso.style.backgroundSize = "250px";
  piso.style.backgroundRepeat = "repeat";
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
