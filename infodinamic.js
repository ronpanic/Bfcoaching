const urlParams = new URLSearchParams(window.location.search);
const codigoProducto = urlParams.get('codigo');

const producto = arrayProductos.find((producto) => producto.codigo === parseInt(codigoProducto));

if (producto) {
  const tituloInfo = document.getElementById('titulo-info');
  const imagenInfo = document.getElementById('imagen-info');
  const precioInfo = document.getElementById('precio-info');
  const infoPlans = document.getElementById('infoplans');
  const comprarBoton = document.getElementById('paymet-button');

  tituloInfo.textContent = producto.nombre;
  precioInfo.textContent = `$ ${producto.importe.toFixed(2)}`;

  // Separar el texto de infoAdicional por puntos y agregarlo como elementos de una lista
  const infoAdicionalList = producto.infoAdicional.split('.').map(item => item.trim());

  // Asignar cada elemento de la lista a un párrafo separado en el HTML
  infoPlans.innerHTML = '';
  infoAdicionalList.forEach(item => {
    const paragraph = document.createElement('p');
    paragraph.textContent = item;
    infoPlans.appendChild(paragraph);
  });

  comprarBoton.addEventListener('click', () => {
    // Redirigir a diferentes lugares según el producto
    if (producto.codigo === 1) {
      window.location.href = `/pages/pago.html?codigo=${producto.codigo}`;
    } else if (producto.codigo === 2) {
      window.location.href = `/pages/pago.html?codigo=${producto.codigo}`;
    } else if (producto.codigo === 3) {
      window.location.href = `/pages/pago.html?codigo=${producto.codigo}`;
    } else if (producto.codigo === 4) {
      window.location.href = `/pages/pago.html?codigo=${producto.codigo}`;
    } else if (producto.codigo === 5) {
      window.location.href = `/pages/pago.html?codigo=${producto.codigo}`;
    } else if (producto.codigo === 6) {
      window.location.href = `/pages/pago.html?codigo=${producto.codigo}`;
    }

    // Agrega más condiciones para los demás productos según tus necesidades
  });
}
