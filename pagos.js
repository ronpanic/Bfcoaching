const botonContinuar = document.getElementById('continue-btn');
const inputEmail = document.getElementById('email');
const emailContainer = document.querySelector('.email-container');
const pagosContainer = document.querySelector('.pagos-container');
const pagosInputs = document.querySelectorAll('.pagos-container input, .pagos-container button, .pagos-container select');
const revisarContainer = document.querySelector('.revisar-container');
const botonContinuar1 = document.getElementById('continue-btn1');
const metodoPagoButton = document.querySelector('.metododepago button');
const botonCheckout = document.querySelector('.metododepago button');
const notificationsContainer = document.querySelector('.notifications-container');
const successButtonMain = document.querySelector('.success-button-main');
const pagarBtn = document.querySelector('.pagar-btn');
const checkBtn = document.querySelector('.check-btn');

botonContinuar.addEventListener('click', function() {
  const email = inputEmail.value;

  if (!validateEmail(email)) {
    alert('Ingresar un correo válido');
  } else {
    botonContinuar.style.display = 'none';
    emailContainer.style.height = '160px';
    emailContainer.classList.add('container-shrink-animation');

    setTimeout(function() {
      pagosContainer.style.transform = 'translateY(-4rem)';
      pagosInputs.forEach(function(element) {
        element.style.display = 'block';
        element.classList.add('input-fade-in-animation');
      });
      
      revisarContainer.style.transform = 'translateY(-5rem)';
      revisarContainer.classList.add('container-slide-up-animation');
    }, 100); // Ajusta el tiempo según la duración de la animación en CSS
  }
});

botonContinuar1.addEventListener('click', function() {
  pagosInputs.forEach(function(element) {
    element.classList.add('input-fade-out-animation');
  });
  botonContinuar1.classList.add('input-fade-out-animation');
  setTimeout(function() {
    pagosInputs.forEach(function(element) {
      element.style.display = 'none';
    });
    botonContinuar1.style.display = 'none';
    metodoPagoButton.style.display = 'block';
    metodoPagoButton.classList.add('input-fade-in-animation');
  }, 300); // Ajusta el tiempo según la duración de la animación en CSS
});

botonCheckout.addEventListener('click', function() {
  notificationsContainer.style.display = 'block';
  notificationsContainer.classList.add('container-appear-animation');
});

successButtonMain.addEventListener('click', function() {
  notificationsContainer.style.display = 'none';
  pagarBtn.style.display = 'block';
  checkBtn.style.display = 'none';
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

fetch("https://restcountries.com/v3.1/all")
.then(response => response.json())
.then(data => {
  const select = document.getElementById("country");

  // Generar las opciones del select con los datos obtenidos de la API
  data.forEach(country => {
    const option = document.createElement("option");
    option.value = country.name.common;
    option.textContent = country.name.common;
    select.appendChild(option);
  });
});


