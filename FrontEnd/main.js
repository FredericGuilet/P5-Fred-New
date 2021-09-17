//appel de l'API
fetch('http://localhost:3000/api/teddies')

//utilisation de then pour récupérer une promesse qui va nous donner une réponse 
  .then(response => response.json())
  
//type de format réponse en json
  .then(data => {

    for (let i = 0; i < data.length; i++) {

      // on crée un oject/class qui regroupe tous les éléments d'un nounours 
      // ca je sais pas faire faut que je demande a Mariannick
      // Ensuite le mettre avec bootstrap mais je vais encore me faire engueler


let carteNounours = document.createElement("div");

      // on crée nos variables
      let nomDuNounours = document.createElement("H2");
      let imageDuNounours = document.createElement("img");
      let prixDuNounours = document.createElement("H3");
      // let couleurDuNounours = document.createElement("H4")
      // let descriptionDuNounours = document.createElement("p")

      // parce que c'est un lien
      let urlDuNounours = document.createElement("a");

      // Pour le décorer en css
      nomDuNounours.setAttribute("class", "nounours");
      imageDuNounours.setAttribute("class", "imageDuNounours");
      prixDuNounours.setAttribute("class", "nounours");
      // couleurDuNounours.setAttribute("class", "nounours");
      // descriptionDuNounours.setAttribute("class", "descriptionDuNounours");
      urlDuNounours.setAttribute("class", "nounours");
      carteNounours.setAttribute("class", "carteNounours");

      // on les cherches
      nomDuNounours.textContent = data[i].name;
      imageDuNounours.setAttribute("src", data[i].imageUrl);
      prixDuNounours.textContent = data[i].price;

      // la on met le href correspondant
      urlDuNounours.setAttribute("href", "produits.html?id="+ data[i]._id);

      // la c'est le texte correspondant a l'url
      urlDuNounours.textContent = "Voir ce nounours";
      prixDuNounours.textContent = prixDuNounours.textContent / 100 +" €";
      // couleurDuNounours.textContent = data[i].colors;
      // descriptionDuNounours.textContent = data[i].description;

      // on les affiches
      carteNounours.appendChild(imageDuNounours);
      carteNounours.appendChild(nomDuNounours);
      carteNounours.appendChild(prixDuNounours,);
      carteNounours.appendChild(urlDuNounours);

      document.getElementById("content").appendChild(carteNounours);
      
      // Quatre jours que je tourne en rond j'attends le mentorat avec Mariannick
      // let params = (new URL(document.location)).searchParams;
      // let name = params.get('_id');


      // document.getElementById("content").appendChild(couleurDuNounours);
      // document.getElementById("content").appendChild(descriptionDuNounours) ;

      // const urlSearchParams = produits.html.searchParams;
      // let params = (new URL(URL.urlSearchParams)).searchParams;
      // let name = params.get('_id');
      // onclick="location.href='produits.html'._id;"

    }
  })

  