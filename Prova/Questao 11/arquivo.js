let inGastos = document.getElementById("inGastos");
let btGastos = document.getElementById("btGastos");
let outPromocao = document.getElementById("outPromocao");

btGastos.addEventListener ("click", verificarPromocao);

function verificarPromocao(){
    let gastos = Number(inGastos.value);

    if(gastos <25 ){
        outPromocao.textContent = "Obrigado volte sempre";
    }else if(gastos >= 25 && gastos < 50){
        outPromocao.textContent = "parabens você tem direito a uma paçoca de brinde"
    }else if(gastos >= 50 && gastos < 100){
        outPromocao.textContent = "parabens você tem direito a um refrigerante de 2 litros de brinde";
    }else if((gastos >= 100 && gastos < 150)){
        outPromocao.textContent = "parabens você tem direito a um pudim de brinde";
    }else{
        outPromocao.textContent = "parabens você tem direito a um pote de sorvete de brinde";
    }
}