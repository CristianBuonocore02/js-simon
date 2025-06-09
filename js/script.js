//Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
// BONUS:
// Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
// Consigli del giorno:
// Pensate prima in italiano.
// Dividete in piccoli problemi la consegna.
// Individuate gli elementi di cui avete bisogno per realizzare il programma.
// Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"






//mostrare numeri casuali 
//Generiamo 5 numeri casuali , visibili in html 



const numberGenerate = []// numberGenerate.length

while (numberGenerate.length < 5) {
    const numberRamdom = Math.floor(Math.random() * 100) + 1;

    if (!numberGenerate.includes(numberRamdom)) {
        numberGenerate.push(numberRamdom)
    }

}
console.log(numberGenerate);


// for (let i = 0; numberGenerate.length < 5; i++) {
// }

const number = document.getElementById("numbers-list")

for (let i = 0; i < numberGenerate.length; i++) {
    const li = document.createElement("li")
    li.textContent = numberGenerate[i]
    number.appendChild(li)
}

const countdown = document.getElementById("countdown")
const input = document.getElementById("answers-form")

let countDownValue = 30 // 30 secondi a scalare
countdown.innerText = countDownValue

const intervalId = setInterval(() => {
    countDownValue -= 1
    countdown.innerText = countDownValue

    if (countDownValue === 0) {
        clearInterval(intervalId)
        number.remove()
        //dobbiamo far apparire al loro posto gli input
        input.classList.remove("d-none")
    }

}, 1000);

