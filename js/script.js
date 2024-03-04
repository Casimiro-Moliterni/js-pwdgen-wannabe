// PASSWORD GENERATOR 

// nome utente password 

// prendo il nome dall'utente
const UserName = prompt('Dimmi il tuo nome');

// prendo il cognome dall'utente
const UserSecondName = prompt('Dimmi il tuo cognome');

// prendo il colore prefrito dall'utente
const UserColorFavourit = prompt('Dimmi il tuo colore preferito');

// numero di default 

const NumberDefault=23;

// password generata 
const UserMessage = `${UserName}${UserSecondName}${UserColorFavourit}${NumberDefault}`;
document.getElementById('passwordtitle').innerHTML = UserMessage;
