//----------------------------------------------------------------------------------------------------------------------------------------------------
// Système de filtre
filterObjects(["toutProjet","toutesMission"]);

var typeDeProjet = "toutProjet";
var typeDeMission = "toutesMission";

//changement des couleurs de boutons
const buttonsProjet = document.querySelectorAll('.typeDeProjet');
const buttonsMission = document.querySelectorAll('.typeDeMission');

//----------------------------------------------------------------------------------------------------------------------------------------------------
function onFilterButtonClic(nouvelleClasseToShow){
    if (nouvelleClasseToShow == "perso" || nouvelleClasseToShow == "scolaire" || nouvelleClasseToShow == "toutProjet"){
        typeDeProjet = nouvelleClasseToShow;
    }
    else if (nouvelleClasseToShow == "dev" || nouvelleClasseToShow == "gd" || nouvelleClasseToShow == "plastic" || nouvelleClasseToShow == "sound" || nouvelleClasseToShow == "toutesMission"){
        typeDeMission = nouvelleClasseToShow;
    }

    filterObjects([typeDeProjet,typeDeMission])
}

function filterObjects(classesToShow){
    // Récupère tous les éléments avec la classe "box"
    var x,i;
    x = document.getElementsByClassName("box");
    
    // Si aucun tableau de classes à afficher n'est fourni, on ajoute la classe "show" par défaut
    if (classesToShow.length === 0) {
        classesToShow.push("show");
    }

    // Boucle à travers tous les éléments avec la classe "box"
    for (i = 0; i < x.length; i++){
        // Supprime la classe "show" de l'élément actuel
        removeClass(x[i], "show");
        // Récupère toutes les classes de l'élément actuel
        var classes = x[i].className.split(" ");
        // Initialise une variable pour indiquer si l'élément doit être affiché
        var showBox = false;
        // Si l'élément actuel possède les deux classes
        if (x[i].classList.contains(classesToShow[0]) && x[i].classList.contains(classesToShow[1])) {
            showBox = true;
        }
        // Si l'élément doit être affiché, ajoute la classe "show"
        if (showBox) {
            addClass(x[i], "show");
        }
    }
}

function addClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.trim().split(" ");
    for (i = 0; i < arr2.length; i++){
        if (arr2[i] !== "" && arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.trim().split(" ");
    for (i = 0; i < arr2.length; i++){
        if (arr2[i] !== ""){
            while (arr1.indexOf(arr2[i]) > -1){
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
    }
    element.className = arr1.join(" ");
}

//----------------------------------------------------------------------------------------------------------------------------------------------------
buttonsProjet.forEach(button => {
  button.addEventListener('click', () => {
    buttonsProjet.forEach(btn => {
      btn.style.color = 'black';
    });
    button.style.color = '#ED6E40';
  });
});

buttonsMission.forEach(button => {
  button.addEventListener('click', () => {
    buttonsMission.forEach(btn => {
      btn.style.color = 'black';
    });
    button.style.color = '#ED6E40';
  });
});