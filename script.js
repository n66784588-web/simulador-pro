document.addEventListener("DOMContentLoaded", () => {
    cambiarAmbiente("sala");
    mostrarProductos();
});

// ===============================
// CAMBIAR AMBIENTE
// ===============================
function cambiarAmbiente(nombre) {

    const ambiente = document.getElementById("ambiente");

    ambiente.src = `img/habitaciones/${nombre}.jpg`;
}

// ===============================
// MOSTRAR PRODUCTOS
// ===============================
function mostrarProductos(lista = productos) {

    const catalogo = document.getElementById("catalogo");

    catalogo.innerHTML = "";

    lista.forEach(p => {

        const item = document.createElement("div");

        item.classList.add("item");

        // ===============================
        // IMAGEN
        // ===============================
        const img = document.createElement("img");

        // 🔥 RUTA REAL CORREGIDA
        const ruta = `img/pisos/${p.marca}/${p.nombre}.jpg`;

        img.src = ruta;

        // SI NO EXISTE
        img.onerror = () => {

            console.error("NO SE ENCONTRÓ:", ruta);

            img.src = "img/no-image.jpg";
        };

        // CLICK
        img.onclick = () => seleccionarProducto(p);

        // ===============================
        // NOMBRE
        // ===============================
        const texto = document.createElement("p");

        texto.innerText = p.nombre;

        // ===============================
        // AGREGAR
        // ===============================
        item.appendChild(img);

        item.appendChild(texto);

        catalogo.appendChild(item);
    });
}

// ===============================
// SELECCIONAR PRODUCTO
// ===============================
function seleccionarProducto(p) {

    // 🔥 RUTA REAL
    const ruta = `img/pisos/${p.marca}/${p.nombre}.jpg`;

    // NOMBRE
    document.getElementById("nombre").innerText = p.nombre;

    // PREVIEW
    document.getElementById("preview").src = ruta;

    // PISO
    const piso = document.getElementById("piso");

    piso.style.backgroundImage = `url('${ruta}')`;

    piso.style.backgroundSize = "250px";

    piso.style.backgroundRepeat = "repeat";

    piso.style.backgroundPosition = "center";

    piso.style.opacity = "0.95";
}

// ===============================
// FILTROS
// ===============================
function filtrarMarca(marca) {

    if (marca === "todas") {

        mostrarProductos(productos);

    } else {

        const filtrados = productos.filter(p => p.marca === marca);

        mostrarProductos(filtrados);
    }
}
