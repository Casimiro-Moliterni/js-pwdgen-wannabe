// PASSWORD GENERATOR 

// nome utente password 

// prendo il nome dall'utente
const UserName = prompt('Dimmi il tuo nome');

// prendo il cognome dall'utente
const UserSecondName = prompt('Dimmi il tuo cognome');

// prendo il colore prefrito dall'utente
const UserColorFavourit = prompt('Dimmi il tuo colore preferito');

// prendo il numero dall'utente
const UserNumber = prompt('Dimmi un numero');

const userAgeAsNumber = parseInt(UserNumber);


// numero di default 

const NumberDefault = 23 ;

// Logica della mia applicazione 

const NumberPass = userAgeAsNumber + NumberDefault ;
console.log(NumberPass)

// password generata 
const UserMessage = `${UserName}${UserSecondName}${UserColorFavourit}${NumberPass}`;
document.getElementById('passwordtitle').innerHTML = UserMessage;
