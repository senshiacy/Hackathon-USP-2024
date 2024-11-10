
async function receiveName() {
    let response = await fetch('./Data.json');
    let data = await response.json();

    let name = data[0].user;
    let saldo = data[0].creditos;

    document.getElementById("user-name").innerText = "Olá, " + name; 
    document.getElementById("user-balance").innerText = saldo + " créditos";
};

async function sleep(){
    await new Promise(r => setTimeout(r, 2000));
};

function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
};

domReady(function () {

    // If found you qr code
    function onScanSuccess(decodeText, decodeResult) {
        alert("Jogue seu lixo na devida lixeira");
        sleep(5);
        newValue = parseInt(document.getElementById("user-balance").innerText[0]) + 1;
        document.getElementById("user-balance").innerText = newValue + " créditos";
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);
});

function rescueMoney(){
    if(document.getElementById("user-balance").innerText[0] == 0){
        alert('Você não tem saldo :(');
    }
    else{
        alert('Seu dinheiro foi enviado para sua conta pix');
        document.getElementById("user-balance").innerText = "0 créditos";
    }
};

window.onload = () => {
    //receiveName();
    document.getElementById("user-name").innerText = "Olá, Paul Erdős"; 
    document.getElementById("user-balance").innerText = "2 créditos";
};