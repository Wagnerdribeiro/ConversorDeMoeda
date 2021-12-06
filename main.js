function Dolar() {
    var valorElemento = document.getElementById("valorConversao");
    var valor = valorElemento.value; // mostrar o valor numerico
    var valorEmDolarNumerico = parseFloat(valor); // Retorna o numero sem aspas, somente o numero.
    
    var valorEmReal = valorEmDolarNumerico * 5;
    console.log(valorEmReal);
    

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function Euro() {
    
    var valorElemento = document.getElementById("valorConversao");
    var valor = valorElemento.value; 
    var valorEmEuroNumerico = parseFloat(valor); 
    var valorEmReal = valorEmEuroNumerico * 6.34;
    console.log(valorEmReal);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    
    elementoValorConvertido.innerHTML = valorConvertido;
    
}