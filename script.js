function cambiarAmbiente(tipo) {
  document.getElementById("ambiente").src =
    `img/habitaciones/${tipo}.jpg`;
}

const catalogo = document.getElementById("catalogo");

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
      const ruta = img.src;

      document.getElementById("preview").src = ruta;
      document.getElementById("nombre").innerText = p.nombre;

      // SOLO PISO
      document.getElementById("piso").style.backgroundImage =
        `url(${ruta})`;

      // LIMPIA MURO
      document.getElementById("muro").style.backgroundImage = "none";
    };

    card.appendChild(img);
    card.appendChild(nombre);
    catalogo.appendChild(card);
  });
}

function filtrarMarca(marca) {
  if (marca === "todas") {
    mostrarProductos(productos);
  } else {
    mostrarProductos(productos.filter(p => p.marca === marca));
  }
}

mostrarProductos(productos);
