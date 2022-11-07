
console.log("----- EXERCICI 1 ------")
function vAleatori(m) {
    return Math.floor(Math.random() * m);
}

console.log(vAleatori(4))


console.log("----- EXERCICI 2 ------")
function daus(x, n) {
    let repeticions = 0
    for (let i = 0; i<n; i++) {
        let random_result = vAleatori(6)
        if(random_result == x) {
            repeticions++
        }
    }
    return repeticions
}

console.log(daus(2, 50))


console.log("----- EXERCICI 3 ------")
function comptarLletra(c, l) {
    let repeticions = 0
    for(let i = 0; i<c.length; i++){
        if (c[i] == l){
            repeticions++
        }
    }
    return repeticions
}

let cadena = "Les meves contradiccions son les meves esperances"
let resultat = comptarLletra(cadena, "e");
console.log(resultat);


console.log("----- EXERCICI 4 ------")
function exercici4(array) {
    let valor = 0
    for(let i = array.length-1; i>=0; i--){
        array[i] = valor
        valor++
    }
    return array
}

let taula = Array(1000)
console.log(exercici4(taula))


console.log("----- EXERCICI 5.1 ------")
function exercici51(matriu) {
    let suma = 0
    for (let i=0; i<matriu.length; i++) {
        suma = suma + matriu[i]
    }
    return suma
}

let matriu = [[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]];
console.log(exercici51(matriu[0]))


console.log("----- EXERCICI 5.2 ------")
function exercici52(matriu) {
    let resultat = []
    for (let i=0; i<matriu.length; i++) {
        let fila = matriu[i]
        let suma = exercici51(fila)
        resultat.push(suma)
    }
    return resultat
}

console.log(exercici52(matriu))