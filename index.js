//Formulario presupuesto
const presupuesto = document.getElementById("presupuesto");
const inputMetros = document.getElementById("inputMetros");
const resultado = document.getElementById("resultado-formulario");

if (presupuesto) {
    presupuesto.addEventListener("submit", (e) => {
        e.preventDefault();
        const metros = parseInt(inputMetros.value);
        //Valor de panel de 3m x 1m => $120000
        //Por lo tanto valor de m2 de panel solar => $40000
        const valorPanel = 40000;
        //Se recomienda tener el 70% de los m2 de piscina de paneles solares
        const metrosNecesarios = metros * 0.7;
        //Por lo tanto el valor estimado es igual a los metros necesarios por el valor del m2 de panel
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
    var patron = /^[a-zA-Z]+$/; // Expresión regular para permitir solo letras

    if(inputNombre.value==""){
        alert("Debes ingresar un nombre")
    }else if(!isNaN(inputNombre.value)){
        alert("El nombre no puede ser un número")
    } else if (!patron.test(inputNombre.value)){
        alert("El nombre solo debe contener letras");
    }

    if(inputApellido.value==""){
        alert("Debes ingresar un apellido")
    }else if(!isNaN(inputNombre.value)){
        alert("El apellido no puede ser un número")
    } else if (!patron.test(inputNombre.value)){
        alert("El apellido solo debe contener letras");
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