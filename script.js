const contenedor = document.getElementById("catalogo");

function mostrarProductos(filtro = "todos") {
    contenedor.innerHTML = "";

    productos
        .filter(p => filtro === "todos" || p.marca === filtro)
        .forEach(p => {

            const div = document.createElement("div");
            div.classList.add("producto");

            const img = document.createElement("img");

            // 🔥 RUTA CORRECTA
            img.src = `img/productos/${p.nombre}.jpg`;

            // 🔥 IMAGEN FALLBACK (para detectar errores)
            img.onerror = () => {
                img.src = "img/no-image.png";
                console.error("No se encontró:", p.nombre);
            };

            const nombre = document.createElement("p");
            nombre.textContent = p.nombre;

            div.appendChild(img);
            div.appendChild(nombre);

            contenedor.appendChild(div);
        });
}

// cargar todos al inicio
mostrarProductos();
