// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ ES 1                                                                         │
// │ Creare un oggetto che descriva uno studente, con le seguenti proprietà:      │
// │ nome, cognome e                                                              │
// │ età.                                                                         │
// │ Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le           │
// │ proprietà                                                                    │
// │ dell'oggetto.                                                                │
// │ ES 2                                                                         │
// │ Creare un array di oggetti di studenti.                                      │
// │ Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e          │
// │ cognome.                                                                     │
// │ Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un      │
// │ nuovo oggetto studente inserendo nell’ordine: nome, cognome e                │
// │ età.                                                                         │
// └──────────────────────────────────────────────────────────────────────────────┘


//--------------------------------------------------------------------------------------//
//                                     ESERCIZIO 1                                      //
//--------------------------------------------------------------------------------------//

//*1 Creo una variabile oggetto che descriva uno studente con proprietà: nome, cognome ed età
//*2 Stampo in pagina con un ciclo for le informazioni dell'utente

//--------------------------------------------------------------------------------------//
//                                     ESERCIZIO 2                                      //
//--------------------------------------------------------------------------------------//

//*1 Creo un array di oggetti degli studenti
//*2 Ciclo con for sopra ognuno di essi
//*3 Stampo per ogni studente nome e cognome
//*4 Tramite 3 prompt chiedo all'utente di inserire un nuovo studente con nome, cognome ed età







//  *************************** ESERCIZIO 1 ***********************************************

console.log('------LO STUDENTE SOLITARIO-----')

//creo una variabile per derscrivere uno studente
var student = {
    nome: 'Filberto',
    cognome: 'Forestiero',
    anni: '45'
}

var stringa = '';

//creo un ciclo for per girare dentro l'oggetto e stamparne il contenuto in console
for(var key in student){
    console.log(key + ' ' + student[key]);
    stringa += '<li>' + key + ': ' + student[key] + '</li>';

}
document.getElementById('es1').innerHTML = stringa;

 



//  *************************** ESERCIZIO 2 ***********************************************



//creo un array di oggetti con altri studenti
console.log('------LISTA STUDENTI-----')
var studentsList = [
    {nome: 'Giacomino',
    cognome: 'Stambecco',
    anni: '23'},
    {nome: 'Jack',
    cognome: 'Herer',
    anni: '420'},
    {nome: 'Filberto',
    cognome: 'Forestiero',
    anni: '784'},
    {nome: 'Gennaro',
    cognome: 'Il Benzinaio',
    anni: '34'}
];


//con un ciclo for vado a raccogliere tutti i dati e li stampo nome e cognome per ogni studente
for(var key in studentsList){               //ciclo dentro ogni elemento per trovare i nomi e i cognomi di tutti gli studenti presenti
    console.log(studentsList[key].nome + ' ' + studentsList[key].cognome);
}


//creo i prompt necessari per permettere all'utente di creare un nuovo utente
var userName = prompt('inserisci un nome').trim().toLowerCase();
var userSurname = prompt('inserisci il cognome').trim().toLowerCase();
var ageUser = prompt("inserisci l'età").trim().toLowerCase();

//creo un nuovo oggetto da pushare, che contiene i dati inseriti dall'utente
console.log('------NUOVO STUDENTE IN ARRIVO------');


var newUser = {
    nome: userName,
    cognome: userSurname,
    anni: ageUser
}

studentsList.push(newUser);                 //pusho dentro array studentList l'oggetto con i dati dell'utente

var studentListString = '';

//con un ciclo for stampo il nome e cognome degli studenti
    for(var key in studentsList){               
        console.log(studentsList[key].nome + ' ' + studentsList[key].cognome);
        studentListString += '<li>' + studentsList[key].nome + ' ' + studentsList[key].cognome + '</li>';   
    }
    document.getElementById('students').innerHTML = studentListString;


