//Désactive le bouton au début
document.getElementById("bouton").disabled = true;

//Crée un écouteur d'événements qui écoute les modifications de l'entrée
document.getElementById("texte").addEventListener("texte", function(event){
    
  //Obtient le contenu de l'entrée
    var contend = document.getElementById("texte").value;
  
    //Valide le contenu de l'entrée
    if (contend !== null && contend !== '') {
      //Active le bouton
      document.getElementById("bouton").disabled = false;
    } else {
      //Désactive le bouton si le contenu de l'entrée est vide
      document.getElementById("bouton").disabled = true;
      
    }
});