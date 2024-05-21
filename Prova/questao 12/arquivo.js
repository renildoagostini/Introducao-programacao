let inPeso = document.getElementById("inPeso");
let inAltura = document.getElementById("inAltura");
let btCalcular = document.getElementById("btCalcular");
let outResultado = document.getElementById("outResultado");

btCalcular.addEventListener("click", calcularIMC);

function calcularIMC(){
   let peso = Number(inPeso.value);
   let altura = Number(inAltura.value);

   imc = peso / (altura * altura);

  if(imc < 18.5){
    outResultado.textContent = "Abaixo do peso";
  }else if(imc >= 18.5 && imc <= 24.9){
    outResultado.textContent = "Peso normal";
  }else if(imc >= 25 && imc < 29.9){
    outResultado.textContent = "Sobrepeso";
  }else if(imc >= 30 && imc <= 34.9){
    outResultado.textContent = "Obesidade grau I";
  }else if(imc >= 35 && imc <= 39.9){
    outResultado.textContent = "Obesidade grau II";
  }else{
    outResultado.textContent = "Obesidade mórbia";
  }
}