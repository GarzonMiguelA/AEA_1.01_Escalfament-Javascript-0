function comparaNumeros(a, b) {
    if (a < b) alert(b);
    else alert(a);
}

function suma1a100() {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i;
    }
    alert(suma);
}

function PedraPaper() {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            alert("Tijeras");
        } else if (i % 5 === 0) {
            alert("Papel");
        } else if (i % 3 === 0) {
            alert("Piedra");
        } else alert(i);
    }
}

function esParell(num) {
    if (num % 2 === 0) {
        alert("Es par");
    } else alert("Es impar");
}

function revertirCadena(cadena) {
    let palabra = cadena.split("").reverse().join("");
    alert(palabra);
}

function factorial(n) {
    let resultat = 1;
    for (let i = 1; i <= n; i++) {
        resultat *= i;
    }

    alert(`${resultat}`);
}

function filtrarPositius(cadena) {
    let subcadena = cadena.split(',');
    let result = [];
    for (let i = 0; i < subcadena.length; i++) {
        let num = parseFloat(subcadena[i].trim());
        if (num > 0) {
            result.push(num);
        }
    }
    alert(result);
}