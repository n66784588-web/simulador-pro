const catalogo = document.getElementById("catalogo");
const preview = document.getElementById("preview");
const nombre = document.getElementById("nombre");
const piso = document.getElementById("piso");

let marcaActual = "todas";

// MOSTRAR PRODUCTOS
function mostrarProductos() {
  catalogo.innerHTML = "";

  productos.forEach(p => {
    if (marcaActual === "todas" || p.marca === marcaActual) {

      const img = document.createElement("img");

      // 🔥 RUTA CLAVE
      img.src = `img/productos/${p.nombre}.jpg`;

      img.onerror = () => {
        console.log("No se encontró:", img.src);
      };

      img.onclick = () => seleccionarProducto(p);

      catalogo.appendChild(img);
    }
  });
}

// SELECCIONAR PRODUCTO
function seleccionarProducto(p) {
  nombre.innerText = p.nombre;

  const ruta = `img/productos/${p.nombre}.jpg`;

  preview.src = ruta;
  piso.style.backgroundImage = `url(${ruta})`;
}

// FILTRO
function filtrarMarca(marca) {
  marcaActual = marca;
  mostrarProductos();
}

// CAMBIAR AMBIENTE
function cambiarAmbiente(tipo) {
  document.getElementById("ambiente").src = `img/habitaciones/${tipo}.jpg`;
}

// INICIO
mostrarProductos();
