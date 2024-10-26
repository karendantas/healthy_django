
const form = document.querySelector(".imc-form");
const height = document.querySelector("#height-input");
const weight = document.querySelector("#weight-input");
const result = document.querySelector(".imc-result");

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    if (!height.value.trim() || !weight.value.trim()) {
        return alert("Preencha os campos!")
        
    } 
    const imc = calculateIMC(Number(height.value), Number(weight.value)); 
    const resultText = document.createElement('span')
    resultText.textContent = `${imc} - ${createImcRestulText(imc)}`;

    result.appendChild(resultText);
    result.classList.remove("disabled")
})

function createImcRestulText(imc){

    if (imc >= 18.4 && imc <=24.9){
        return "Normal"
    }
    if (imc >= 25 && imc <= 29.9){
        return "Sobrepeso"
    }
    if (imc >= 30 && imc <= 34.9){
        return  "Obesidade I"
    }
    if (imc >= 35 && imc <= 39.9){
        return  "Obesidade II"
    }
    if (imc >= 40){
        return "Obesidade mórbida"
    }
    if (imc >= 16 && imc <= 16.9){
        return "Magreza moderada"
    }
    if (imc >= 17 && imc <= 18.5){
       return "Magreza leve"
    }
    if (imc < 16){
        return "Magreza grave"
    }

}
function calculateIMC(height, weight){
    height = height / 100 //transformando em metros
    return (weight/(height*height)).toFixed(2)
}