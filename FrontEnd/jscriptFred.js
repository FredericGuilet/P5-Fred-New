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
    // console.log(data);
    // let monArray = [‘a’, ’b’, ’c’];
    // console.log(data[1]); // donnera la srtrucyre dy nounours car c’est le premier élément du tableau

    // console.log(data[1].name); //( deuxieme nouounous ddans les tablo)
    // document.getElementById("blog__image").src = teddies.imageUrl
    // document.getElementById("content").textContent = data[0].name;  
    // document.getElementById("content").imageUrl = data[0].imageUrl;  
    // document.getElementById("img").textContent = data[1].imageUrl;
    //methode marianick

    // document.getElementById("content").innerHTML = "<H1>" + data[1].name + "</H1>"; // methode aurelien
    let titre = document.createElement("H2")
    let titre2 = document.createElement("H2")
    titre.setAttribute("class", "nomours"); // ca c'est pour le décorer en css
    titre2.setAttribute("class", "nomours"); // ca c'est pour le décorer en css
    titre.textContent = data[1].name;
    titre2.textContent = data[1].imageUrl;
    document.getElementById("content").appendChild(titre);
    document.getElementById("content").appendChild(titre2);
    // document.getElementById("content").appendChild(titre)

    // objectif parcourir le tableau des nounounous et l'afficher 

  });


// fetch("http://localhost:3000/api/teddies")
// // const myAnchor = document.getElementById('5be9c8541c9d440000665243');

// .then(function(id) {
//     if (id.ok) {
//       return res.json();
//     }
//   })
//   .then(function(value) {
//     console.log(value);
//   })
//   .catch(function(err) {
//     // Une erreur est survenue
//   });


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