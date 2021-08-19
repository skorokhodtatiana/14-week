function saveResult() {
    let firstNumberInput = Number(document.getElementById('oneNumber').value);
    console.log(firstNumberInput);
    document.getElementById('oneNumber').value = "";
    let twoNumberInput = Number(document.getElementById('twoNumber').value);
    console.log(twoNumberInput);
    document.getElementById('twoNumber').value = "";

    document.getElementById('derivation').value = firstNumberInput + twoNumberInput;
}

function subtraction() {
    let firstNumberInput = Number(document.getElementById('oneNumber').value);
    console.log(firstNumberInput);
    document.getElementById('oneNumber').value = "";
    let twoNumberInput = Number(document.getElementById('twoNumber').value);
    console.log(twoNumberInput);
    document.getElementById('twoNumber').value = "";

    document.getElementById('derivation2').value = firstNumberInput - twoNumberInput;
}

function division() {
    let firstNumberInput = Number(document.getElementById('oneNumber').value);
    console.log(firstNumberInput);
    document.getElementById('oneNumber').value = "";
    let twoNumberInput = Number(document.getElementById('twoNumber').value);
    console.log(twoNumberInput);
    document.getElementById('twoNumber').value = "";

    document.getElementById('derivation3').value = firstNumberInput / twoNumberInput;
}

function multiplication() {
    let firstNumberInput = Number(document.getElementById('oneNumber').value);
    console.log(firstNumberInput);
    document.getElementById('oneNumber').value = "";
    let twoNumberInput = Number(document.getElementById('twoNumber').value);
    console.log(twoNumberInput);
    document.getElementById('twoNumber').value = "";

    document.getElementById('derivation4').value = firstNumberInput * twoNumberInput;
}