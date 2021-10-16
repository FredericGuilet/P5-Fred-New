//appel de l'API
fetch('http://localhost:3000/api/teddies')

  //utilisation de then pour récupérer une promesse qui va nous donner une réponse 
  .then(response => response.json())

  //type de format réponse en json
  .then(data => {

    for (let i = 0; i < data.length; i++) {

      let carteNounours = document.createElement("div");

      // on crée nos variables
      let nomDuNounours = document.createElement("H2");
      let imageDuNounours = document.createElement("img");
      let prixDuNounours = document.createElement("H3");
      // parce que c'est un lien
      let urlDuNounours = document.createElement("a");

      // Pour le décorer en css
      nomDuNounours.setAttribute("class", "nounours");
      imageDuNounours.setAttribute("class", "imageDuNounours");
      prixDuNounours.setAttribute("class", "nounours");
      urlDuNounours.setAttribute("class", "nounours");
      carteNounours.setAttribute("class", "carteNounours");

      // on les cherches
      nomDuNounours.textContent = data[i].name;
      imageDuNounours.setAttribute("src", data[i].imageUrl);
      prixDuNounours.textContent = data[i].price;

      // la on met le href correspondant
      urlDuNounours.setAttribute("href", "produits.html?id=" + data[i]._id);

      // la c'est le texte correspondant a l'url
      urlDuNounours.textContent = "Voir ce nounours";
      prixDuNounours.textContent = prixDuNounours.textContent / 100 + " €";

      // on les affiches
      carteNounours.appendChild(imageDuNounours);
      carteNounours.appendChild(nomDuNounours);
      carteNounours.appendChild(prixDuNounours, );
      carteNounours.appendChild(urlDuNounours);

      document.getElementById("content").appendChild(carteNounours);

    }
  })