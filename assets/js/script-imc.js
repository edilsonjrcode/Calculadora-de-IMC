const calcularImc = () => {

    const form = document.querySelector('#form');
    const peso = form.querySelector('#peso');
    const altura = form.querySelector('#altura');
    const botao = form.querySelector('#botao');
    const resultado = form.querySelector('#resultado');

    function fazCalculo(){

        if (peso.value == '' || altura.value == ''){
            alert("Campos incompletos. Preencha todos os campos corretamente")
        } 
        
        else {
            
            let imc = (Number(peso.value)/Number((altura.value)**2)).toFixed(2)
            
            if (imc >= 0 && imc < 18.5){
                resultado.value = `IMC: ${imc} - Abaixo do Peso`
                resultado.style.backgroundColor = '#fff'
                resultado.style.color = '#360b41'
                resultado.style.border = '1px solid #360b41'
            }
            else if (imc >= 18.5 && imc <= 24.9){
                resultado.value = `IMC: ${imc} - Peso normal`
                resultado.style.backgroundColor = '#fff'
                resultado.style.color = '#360b41'
                resultado.style.border = '1px solid #360b41'

            }
            else if (imc >= 25 && imc <= 29.9){
                resultado.value = `IMC: ${imc} - Sobrepeso`
                resultado.style.backgroundColor = '#fff'
                resultado.style.color = '#360b41'
                resultado.style.border = '1px solid #360b41'
            }
            else if (imc >= 30 && imc <= 34.9){
                resultado.value = `IMC: ${imc} - Obesidade Grau 1`
                resultado.style.backgroundColor = '#fff'
                resultado.style.color = '#360b41'
                resultado.style.border = '1px solid #360b41'

            }
            else if (imc >= 35 && imc <= 39.9){
                resultado.value = `IMC: ${imc} - Obesidade Grau 2`
                resultado.style.backgroundColor = '#fff'
                resultado.style.color = '#360b41'
                resultado.style.border = '1px solid #360b41'

            }
            else if (imc >= 40){
                resultado.value = `IMC: ${imc} - Obesidade Grau 3`
                resultado.style.backgroundColor = '#fff'
                resultado.style.color = '#360b41'
                resultado.style.border = '1px solid #360b41'

            }
            else{
                resultado.value = `ERRO: Valores inválidos, digite novamente.`
                resultado.style.backgroundColor = 'rgb(215, 0, 0)'
                resultado.style.color = '#fff'
                resultado.style.border = 'none'
            }

            //Zerando os inputs
            peso.value = ''
            altura. value = ''
        }
    }

        botao.addEventListener('click', fazCalculo)
}

calcularImc()