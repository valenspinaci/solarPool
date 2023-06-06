//Formulario presupuesto
const presupuesto = document.getElementById("presupuesto");
const inputMetros = document.getElementById("inputMetros");
const resultado = document.getElementById("resultado-formulario");

if (presupuesto) {
    presupuesto.addEventListener("submit", (e) => {
        e.preventDefault();
        const metros = parseInt(inputMetros.value);
        const valorPanel = 40000;
        const metrosNecesarios = metros * 0.7;
        const valor = metrosNecesarios * valorPanel;
        resultado.innerHTML = '<div class="bg-warning p-2 mb-3 d-flex justify-content-center align-items-center"><h2 class="fs-4 fw-bold text-center">El valor estimado es de $' + valor + '</h2></div>';
        inputMetros.value=" "
    });
}


//Formulario contacto
const contacto = document.getElementById("contacto");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputEmail = document.getElementById("email");
const inputComentario = document.getElementById("comentario");

contacto.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(inputNombre.value==""){
        alert("Debes ingresar un nombre")
    }else if(!isNaN(inputNombre.value)){
        alert("El nombre no puede ser un número")
    }

    if(inputApellido.value==""){
        alert("Debes ingresar un apellido")
    }else if(!isNaN(inputNombre.value)){
        alert("El apellido no puede ser un número")
    }

    if(inputEmail.value==""){
        alert("Debes ingresar un mail")
    }

    if(inputComentario.value==""){
        alert("Debes ingresar un comentario")
    }

    inputNombre.value = "" 
    inputApellido.value = "" 
    inputEmail.value = "" 
    inputComentario.value = "" 
})