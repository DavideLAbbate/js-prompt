let firstName = prompt('Inserisci il tuo nome');

let lastName = prompt('Inserisci il tuo cognome');

let luogoNascita = prompt ('dove sei nato/a?');

let dataNascita = prompt('Quando sei nato/a?');

let segnoZodiacale = prompt('Che segno sei?');


document.getElementById("dati").innerHTML= `Nome : ${firstName} <br> Cognome : ${lastName} <br> Luogo di Nascita : ${luogoNascita} <br> Data di Nascita : ${dataNascita} <br> Segno Zodiacale : ${segnoZodiacale}`;

if (segnoZodiacale == 'Leone' || 'leone' & 'Pesci' || 'pesci')
{
    alert('FALLITO')
}

