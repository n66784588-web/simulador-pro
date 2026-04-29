function cambiarAmbiente(tipo) {
  document.getElementById("ambiente").src =
    `img/habitaciones/${tipo}.jpg`;
}

const catalogo = document.getElementById("catalogo");

// MOSTRAR PRODUCTOS
function mostrarProductos(lista) {
  catalogo.innerHTML = "";

  lista.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("producto");

    const img = document.createElement("img");
    img.src = `img/pisos/${p.marca}/${p.nombre}.jpg`;

    const nombre = document.createElement("p");
    nombre.innerText = p.nombre;

    img.onclick = () => {
      document.getElementById("preview").src = img.src;
      document.getElementById("nombre").innerText = p.nombre;

      // PISO
      document.getElementById("piso").style.backgroundImage =
        `url(${img.src})`;

      // MURO
      document.getElementById("muro").style.backgroundImage =
        `url(${img.src})`;
    };

    card.appendChild(img);
    card.appendChild(nombre);

    catalogo.appendChild(card);
  });
}

// FILTRO
function filtrarMarca(marca) {
  if (marca === "todas") {
    mostrarProductos(productos);
  } else {
    mostrarProductos(productos.filter(p => p.marca === marca));
  }
}

// INICIO
mostrarProductos(productos);
