var tratta = prompt("Inserisci il numero dei km da percorrere")
console.log(tratta)
document.getElementById('tratta').innerHTML = tratta


var eta = prompt("Inserisci la tua età")
console.log(eta)
document.getElementById('eta').innerHTML = eta

var prezzo = 0.21 * tratta

if (eta < 18) {
  sconto = prezzo * 0.2;
}

else if (eta > 64) {
  sconto = prezzo * 0.4;
}

else {
  sconto = 0;
}

var totale = prezzo - sconto

document.getElementById('prezzo').innerHTML = prezzo.toFixed(2) + "€"

document.getElementById('sconto').innerHTML = sconto.toFixed(2) + "€"

document.getElementById('totale').innerHTML = totale.toFixed(2) + "€"
