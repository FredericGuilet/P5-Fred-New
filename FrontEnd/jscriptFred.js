// const { readlink } = require("fs");

// var element = document.getElementById("5be9c8541c9d440000665243");

// Partie lien entre le front et le BackEnd

// Bon visiblement la ligne du dessus ne sert a rien 
// il faut que je trouve ou est le pont entre le fichier JSON ou l'url du server



// Partie index.html

// il faudrait une sorte de constructor pour me créeer un Object complet

// puis lui donner donner un style un peu sympa
// Puis utiiser le Css ou le style en java

// Une fois tout cela il faut que je lui fasse faire une boucle for pour rappatrier tous les teddys

// Ensuite l'affichage des différents éléments instancié

// Et régler en BootStrap pour un bel affichage en responsive avec md sd etc ....

// Tout cela c'est pour la partie index


fetch('http://localhost:3000/api/teddies')

  .then(response => response.json())

  .then(data => {

    let titre = document.createElement("H2")
    let titre2 = document.createElement("img")
    let titre3 = document.createElement("H2")
    let titre4 = document.createElement("img")

    // Pour le décorer en css
    titre.setAttribute("class", "nounours"); 
    titre2.setAttribute("class", "nounours");
    titre3.setAttribute("class", "nounours");
    titre4.setAttribute("class", "nounours");

    titre.textContent = data[0].name;
    titre2.textContent = data[0].name;
    titre3.textContent = data[1].name;
    titre4.textContent = data[1].name;

    titre2.setAttribute("src", data[0].imageUrl );
    titre4.setAttribute("src", data[1].imageUrl );

    document.getElementById("content").appendChild(titre);
    document.getElementById("content").appendChild(titre2);
    document.getElementById("content").appendChild(titre3);
    document.getElementById("content").appendChild(titre4);
  })



// Partie image du produit

// Voir si un simple javascript qui existe partout pour le voir en grand avec une croix pour la fermeture
// Ou dois je faire une vrai page que pour le produit

// Je suppose qu'il faudra utiliser une sorte de GetSeleted item id



// Partie Panier de commande

// Récupérer les différents produits cochés avec éventuellement leur couleur et surtout la quantité
// Mettre en place un mini formulaire de confirmation avec coordonnées
// Et faire une metode Post


// Partie Confirmation

// Afficher une page lambda pour féliciter le client et mettre le récap de sa commande