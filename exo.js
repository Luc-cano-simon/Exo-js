/* Exercice 1 

var toto = 'bonjour';
alert(toto);


/* Exercice 2  

var nom = 'Cano';
var prenom = 'Luc';
var ville = 'Fleurance';

alert('Nom : '+nom+'\nprenom :'+prenom+'\n ville :'+ville); 
*/

var reponse = prompt("ton prénom est ?", "<mettre votre prénom ici>");
if( reponse == null ){
    alert("Tu as annulé la question :( ");
} else {
    alert("Hey " + reponse + ", comment ça va ?");
}
