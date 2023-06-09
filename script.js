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


const hombreContainer = document.getElementById('hombre-container');
const mujerContainer = document.getElementById('mujer-container');
const elecContainer = document.querySelector('.elec-container');
const elecContainer1 = document.getElementById('elec-container1');
const volumenContainer = document.getElementById('volumen-container');
const definicionContainer = document.getElementById('definicion-container');
const formularioMujer = document.getElementById('formulario-mujer');
const resultadoDiv = document.getElementById('resultado');

elecContainer1.style.display = 'none';
formularioMujer.style.display = 'none';

hombreContainer.addEventListener('click', function() {
  elecContainer.style.display = 'none';
  elecContainer1.style.display = 'block';
});

mujerContainer.addEventListener('click', function() {
  elecContainer.style.display = 'none';
  elecContainer1.style.display = 'block';
});

volumenContainer.addEventListener('click', function() {
  elecContainer.style.display = 'none';
  elecContainer1.style.display = 'none';
  formularioMujer.style.display = 'block';
});

definicionContainer.addEventListener('click', function() {
  elecContainer.style.display = 'none';
  elecContainer1.style.display = 'none';
  formularioMujer.style.display = 'block';
});

function calcularCaloriasYMacros(edad, peso, altura, actividad, objetivo) {
  const caloriasBase = objetivo === 'volumen' ? 300 : 200;

  // Cálculo de calorías según la fórmula específica
  const calorias = (10 * peso) + (6.25 * altura) - (5 * edad) + caloriasBase;

  // Cálculo de macronutrientes según el objetivo
  let proteinas, carbohidratos, grasas;

  if (objetivo === 'volumen') {
    proteinas = 2.2 * peso;
    carbohidratos = calorias * 0.5 / 4;
    grasas = calorias * 0.25 / 9;
  } else if (objetivo === 'definicion') {
    proteinas = 2.5 * peso;
    carbohidratos = calorias * 0.4 / 4;
    grasas = calorias * 0.3 / 9;
  }

  return {
    calorias: calorias.toFixed(2),
    proteinas: proteinas.toFixed(2),
    carbohidratos: carbohidratos.toFixed(2),
    grasas: grasas.toFixed(2)
  };
}

formularioMujer.addEventListener('submit', function(e) {
  e.preventDefault();

  const edad = parseInt(document.getElementById('edad').value);
  const peso = parseInt(document.getElementById('peso').value);
  const altura = parseInt(document.getElementById('altura').value);
  const actividad = document.getElementById('actividad').value;
  const objetivo = volumenContainer.classList.contains('seleccionado') ? 'volumen' : 'definicion';

  const resultado = calcularCaloriasYMacros(edad, peso, altura, actividad, objetivo);

  // Mostrar el resultado en el elemento correspondiente
  resultadoDiv.style.display = 'block';
  resultadoDiv.innerHTML = `
    <p>Calorías necesarias por día: ${resultado.calorias} kcal</p>
    <p>Proteínas necesarias por día: ${resultado.proteinas} g</p>
    <p>Carbohidratos necesarios por día: ${resultado.carbohidratos} g</p>
    <p>Grasas necesarias por día: ${resultado.grasas} g</p>
  `;
});

