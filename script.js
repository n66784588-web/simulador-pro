document.addEventListener("DOMContentLoaded", () => {
  cambiarAmbiente("sala");
  mostrarProductos();
});

// 🔥 FUNCIÓN INTELIGENTE DE CARGA DE IMÁGENES
function cargarImagen(img, base) {
  const formatos = [".jpg", ".png", ".webp"];
  let i = 0;

  function intentar() {
    if (i >= formatos.length) {
      img.src = "img/no-image.jpg";
      return;
    }

    img.src = base + formatos[i];
    i++;

    img.onerror = intentar;
  }

  intentar();
}

// CAMBIAR AMBIENTE
function cambiarAmbiente(nombre) {
  const img = document.getElementById("ambiente");
  const base = `img/habitaciones/${nombre}`;

  cargarImagen(img, base);
}

// MOSTRAR PRODUCTOS
function mostrarProductos(lista = productos) {
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = "";

  lista.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("item");

    const img = document.createElement("img");

    const base = `img/productos/${p.marca}/${p.nombre}`;

    cargarImagen(img, base);

    img.onclick = () => seleccionarProducto(p);

    div.appendChild(img);
    catalogo.appendChild(div);
  });
}

// SELECCIONAR PRODUCTO
function seleccionarProducto(p) {
  const base = `img/productos/${p.marca}/${p.nombre}`;

  document.getElementById("nombre").innerText = p.nombre;

  const preview = document.getElementById("preview");
  cargarImagen(preview, base);

  // 🔥 para piso usamos jpg por compatibilidad
  document.getElementById("piso").style.backgroundImage =
    `url('${base}.jpg')`;
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
