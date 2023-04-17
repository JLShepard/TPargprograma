//var saludos = prompt ('Ingrese su nombre');
//alert ("Bienvenido a Ruta Zero " + saludos);

const nextBtn = document.querySelector("#next-btn");
const backBtn = document.querySelector("#back-btn");
const step1 = document.querySelector("#step-1");
const step2 = document.querySelector("#step-2");
const step3 = document.querySelector("#step-3");
const summary = document.querySelector("#summary");


nextBtn.addEventListener("click", function() {
    
let name = document.querySelector("#nombre").value;
let apellido = document.querySelector("#apellido").value;
let email = document.querySelector("#email").value;
let celular = document.querySelector("#celular").value;
let mensaje = document.querySelector("#mensaje").value;
    
summary.innerHTML = `Nombre: ${name} <br> Apellido: ${apellido} <br>Email: ${email} <br> Celular: ${celular} <br> Mensaje: ${mensaje}`;
  

step1.style.display = "none";
step2.style.display = "block";
step3.style.display = "block";
});
