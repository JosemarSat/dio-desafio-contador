var currentNumberWrapper = document.getElementById('currentNumber');
var increm =document.getElementById("btnmais");
var decrem =document.getElementById("btnmenos");
var msg = document.getElementById("msg");
var mensg = "";
var currentNumber = 0;

function increment() {
    msg.style.color = "black";
    mensg = "Adicionando...";
    msg.innerHTML = mensg;
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 0) {        
        currentNumberWrapper.style.color = 'black';
    }
    if (currentNumber == 10) {
        document.getElementById("btnmais").disabled = true;
        mensg = "Botão de Adição desabilitado !!!";
        msg.innerHTML = mensg;
    } else if (currentNumber < 10) {
        document.getElementById("btnmais").disabled = false;
        document.getElementById("btnmenos").disabled = false;
    }
}

function decrement() {
    msg.style.color = "red";
    mensg = "Subtraindo..";
    msg.innerHTML = mensg;
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    }
    if (currentNumber < (-9)) {
        document.getElementById("btnmenos").disabled = true;
        mensg = "Botão de Subtração desabilitado !!!";
        msg.innerHTML = mensg;
    } else if (currentNumber > (-9)) {
        document.getElementById("btnmenos").disabled = false;
        document.getElementById("btnmais").disabled = false;
    }
}

