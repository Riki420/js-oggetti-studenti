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



//creo una variabile per derscrivere uno studente
var student = {
    firstName: 'Filberto',
    secondName: 'Forestiero',
    age: '784'
}

var studentElement = document.getElementById('students');

//creo un ciclo for per girare dentro l'oggetto e stamparne il contenuto in console
for(var key in student){
    console.log(student[key]);
}

