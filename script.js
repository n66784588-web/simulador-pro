let seleccionActual = "";

// CAMBIAR AMBIENTE
function cambiarAmbiente(tipo) {
  document.getElementById("ambiente").src =
    `img/habitaciones/${tipo}.jpg`;
}

const catalogo = document.getElementById("catalogo");

// MOSTRAR PRODUCTOS
function mostrarProductos() {
  catalogo.innerHTML = "";

  productos.forEach(p => {

    const card = document.createElement("div");
    card.classList.add("producto");

    const img = document.createElement("img");
    const ruta = `img/pisos/${p.marca}/${p.nombre}.jpg`;
    img.src = ruta;

    img.onclick = () => {
      seleccionActual = ruta;

      document.getElementById("preview").src = ruta;
      document.getElementById("nombre").innerText = p.nombre;
    };

    card.appendChild(img);
    catalogo.appendChild(card);
  });
}

// 🔥 APLICAR SOLO AL PISO
function aplicarPiso() {
  document.getElementById("piso").style.backgroundImage =
    `url(${seleccionActual})`;
}

// 🔥 APLICAR SOLO AL MURO
function aplicarMuro() {
  document.getElementById("muro").style.backgroundImage =
    `url(${seleccionActual})`;
}

mostrarProductos();
