function meuEscopo() {

    const resultado = document.querySelector('.resultado')
    const form = document.querySelector('.form');
    const pegarPeso = document.querySelector('.peso')
    const pegarAltura = document.querySelector('.altura')

    capturarEventoForm = evento => {
        evento.preventDefault()
        let peso = Number(pegarPeso.value);
        let altura = Number(pegarAltura.value);

        let imc = peso / (altura * altura)

        function calcularImc(imc) {
            if (imc < 18.5) {
                return 'Você está magro'
            } else if (imc >= 18.5 && imc <= 24.9) {
                return 'Seu peso é normal'
            } else if (imc >= 24.9 && imc <= 30) {
                return 'Você está com sobrepeso'
            } else if (imc > 30) {
                return 'Você está obesidade'
            }

        }

        console.log(calcularImc(imc))
        
        resultado.innerHTML = `<p>
            ${calcularImc(imc)}
        </p>`


    }

    form.addEventListener('submit', capturarEventoForm)

}

meuEscopo()