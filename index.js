console.log(this)
//******* Commenter en javaScript *******/

// Une ligne de commentaire 

/*
   plusieurs lignes 
*/

// Variante

/**
 * Ce code a pour but d`afficher une map intéractive.
 * Elle permet de visualiser ses endroits préferér sur Google Map.
 * Il est nécessaire de s`authentifier pour utiliser cette app.
 */



// 1. Cas pratiques:


// Décrire une variable

const toggleMenu = false; // Cache le menu de base 


// Décrire une fonction 

// Récupére les coordonnés de la sonde Rover 
>function getCoords(x,y){
}



// Expliquer un calcul complexe 

// Calcul du temps de difference entre deux dates.
const dif =(new Date ("19770-1-1 " + end-time) ) - new Date(("1970-1-1" + 
start-time)) / 1000/ 60 / 60;

// Expliquer un regex

// Regex téléphone US
const phone = /(?:^D)/(([2-9]))(?:/d)


// 2. Ce qu`il faut éviter 

// Décrire quelque chose d`évident ;

const time = new Date(); // Donne la date actuelle 
const calcul = 2+2 // Retourne 4
const toggle = chrono > 10 ? true : false; // Si chrono est supérieur à
 10 retourne true sinon false;

 // En faire trop,écrire trop de commentaires.

 // Création de points de navigation
 function createNavigation(){
    // Création d`une div avec la méthode createElement()
    const newDiv = document.createElement("div");
    // On rajoute un attribut class avec la valeur dots
    newDiv.setAttribute("class","dots");

    //on fait une boucle pour créer 3 points
    for(let index = 1; index <totalSlides + 1; index ++) {
        // à chaque itération on crée un bouton 
        const element = document.createElement("button");
        // puis un texte 
        const text = document.createTextNode(index);
        // on rajoute le texte au bouton
        element.appendChild(text);
        // on rajoute la classe dot à l`élément 
        element.setAttribute("class","dot");
        // si currentStep est égale à index on rajoute la classe active à
        l`élément 
        if(currentStep === index) {
         element.classList.add("active");
        }

        // on rajoute l`élément à newDiv
        newDiv.appendChild(element);
    }
 }
 // Il vaut mieux de bon noms de variables / fonctions/ classes etc que des commentaires .

 //
 // Fonction qui ouvre la modale
 function m1(){
 }


 //   
 function openModal(){

 }
