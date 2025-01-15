let grocary1, grocary2, grocary3;

function totalSum(){
    grocary1 = parseFloat(document.getElementById('grocary1').value);
    grocary2 = parseFloat(document.getElementById('grocary2').value);
    grocary3 = parseFloat(document.getElementById('grocary3').value);
    let sum = grocary1+grocary2+grocary3;
    document.getElementById("result").innerText = `Total bill: ${sum}`;
}