fetch('http://localhost:3000/api/teddies')

  .then(response => response.json())

  .then(data => {

    for (let i = 0; i < data.length; i++) {

      // on crée un oject/class qui regroupe tous les éléments d'un nounours 
      // ca je sais pas faire faut que je demande a Mariannick
      // Ensuite le mettre avec bootstrap mais je vais encore me faire engueler

      // on crée nos variables
      let nomDuNounours = document.createElement("H2");
      let imageDuNounours = document.createElement("img");
      let prixDuNounours = document.createElement("H3");
      // let couleurDuNounours = document.createElement("H4")
      // let descriptionDuNounours = document.createElement("p")
      let urlDuNounours = document.createElement("url");

      // Pour le décorer en css
      nomDuNounours.setAttribute("class", "nounours");
      imageDuNounours.setAttribute("class", "imageDuNounours");
      prixDuNounours.setAttribute("class", "nounours");
      // couleurDuNounours.setAttribute("class", "nounours");
      // descriptionDuNounours.setAttribute("class", "descriptionDuNounours");
      urlDuNounours.setAttribute("class", "nounours");

      // on les cherches
      nomDuNounours.textContent = data[i].name;
      imageDuNounours.setAttribute("src", data[i].imageUrl);
      prixDuNounours.textContent = data[i].price;
      urlDuNounours.textContent = data[i]._id;
      prixDuNounours.textContent = prixDuNounours.textContent / 100 +" €";
      // couleurDuNounours.textContent = data[i].colors;
      // descriptionDuNounours.textContent = data[i].description;

      // on les affiches
      document.getElementById("content").appendChild(nomDuNounours);
      document.getElementById("content").appendChild(imageDuNounours);
      document.getElementById("content").appendChild(prixDuNounours,);
      document.getElementById("content").appendChild(urlDuNounours);

      
      // Quatre jours que je tourne en rond j'attends le mentorat avec Mariannick
      // let params = (new URL(document.location)).searchParams;
      // let name = params.get('_id');


      // document.getElementById("content").appendChild(couleurDuNounours);
      // document.getElementById("content").appendChild(descriptionDuNounours) ;

      // const urlSearchParams = produits.html.searchParams;
      // let params = (new URL(URL.urlSearchParams)).searchParams;
      // let name = params.get('_id');
      onclick="location.href='produits.html'._id;"

    }
  })

  // onclick open.urlDuNounours;
  // <a href="produit.html?id=${teddies._id}" id="lien" class="lien"><img alt="image" id="image" src="" url(${teddies.imageUrl}></a>
// document.location.href="produits.html"; 