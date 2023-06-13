document.addEventListener("DOMContentLoaded", function() {
    var cookieBar = document.getElementById("cookie-bar");
    var acceptButton = document.getElementById("accept-button");

    acceptButton.addEventListener("click", function() {
        cookieBar.style.display = "none";
        // Establecer la cookie de aceptación
        document.cookie = "cookiesAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    });

    // Verificar si la cookie de aceptación ya está establecida
    if (document.cookie.includes("cookiesAccepted=true")) {
        cookieBar.style.display = "none";
    }
});



const preguntas = document.querySelectorAll(".pregunta_encabezado");

preguntas.forEach((pregunta) => {
	pregunta.addEventListener("click", () => {
		removerClaseActivo();
		pregunta.nextElementSibling.classList.add("activo");
	});
});

function removerClaseActivo() {
	preguntas.forEach((pregunta) => {
		pregunta.nextElementSibling.classList.remove("activo");
	});
}




const container = document.querySelector('div.container#container');

function retornoCardsHTML(producto) {
  return `
    <div class="div-card" onclick="redirectToProductInfo(${producto.codigo})">
      <div class="imagen"><img src="${producto.imagen}" alt=""></div>
      <div class="prenda"><p>${producto.nombre}</p></div>
      <div class="importe"><p>$ ${producto.importe}</p></div>
    </div>`;
}

function redirectToProductInfo(codigo) {
  // Redireccionar a la página "productoinfo.html" pasando el código del producto como parámetro
  window.location.href = `productoinfo.html?codigo=${codigo}`;
}

function cargarProductos() {
  arrayProductos.forEach((producto) => {
    container.innerHTML += retornoCardsHTML(producto);
  });
}

cargarProductos();



