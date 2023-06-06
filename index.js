const presupuesto = document.getElementById("presupuesto");
const inputMetros = document.getElementById("inputMetros");
const resultado = document.getElementById("resultado-formulario");

if (presupuesto) {
    const calcularBtn = document.getElementById("calcular");
    calcularBtn.addEventListener("click", () => {
        const metros = parseInt(inputMetros.value);
        const valorPanel = 40000;
        const metrosNecesarios = metros * 0.7;
        const valor = metrosNecesarios * valorPanel;
        resultado.innerHTML = '<div class="bg-warning p-2 mb-3 d-flex justify-content-center align-items-center"><h2 class="fs-4 fw-bold text-center">El valor estimado es de $' + valor + '</h2></div>';
        inputMetros.value=" "
    });
}