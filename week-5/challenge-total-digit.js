function totalDigitRekursif(angka) {
    strAngka = String(angka);
    if(strAngka.length < 2){
        return angka;
    }
    else {
        firstNumber = Number(strAngka[0]);
        leftNumbers = Number(strAngka.slice(1));
        return firstNumber + totalDigitRekursif(leftNumbers);
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5