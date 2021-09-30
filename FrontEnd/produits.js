let params = (new URL(document.location)).searchParams;
let id = params.get('id');
console.log(id);


fetch('http://localhost:3000/api/teddies/' + id)

  .then(response => response.json())

  .then(_id => {

    // Pour permettre d'avoir un bloc pour habillage en css
    let carteNounoursDetail = document.createElement("div");

    // on crée nos variables
    let nomDuNounours = document.createElement("H2");
    let imageDuNounoursDetail = document.createElement("img");
    let prixDuNounours = document.createElement("H3");
    let couleurDuNounours = document.createElement("select")
    let descriptionCouleur = document.createElement("p")
    let descriptionQuantite = document.createElement("p")
    let descriptionDuNounours = document.createElement("p")
    let quantiteSelect = document.createElement("select")
    let boutonValider = document.createElement("button")
    // la je declare la variable
    let couleurDuNounoursOption ;

    // parce que c'est un lien
    let urlDuNounours = document.createElement("a");

    // Pour le décorer en css
    nomDuNounours.setAttribute("class", "nounours");
    imageDuNounoursDetail.setAttribute("class", "imageDuNounoursDetail");
    prixDuNounours.setAttribute("class", "nounours");
    couleurDuNounours.setAttribute("class", "BoutonValider");
    descriptionDuNounours.setAttribute("class", "descriptionDuNounours");
    urlDuNounours.setAttribute("class", "nounours");
    carteNounoursDetail.setAttribute("class", "carteNounoursDetail");
    boutonValider.setAttribute("class", "BoutonValider");
    quantiteSelect.setAttribute("class", "BoutonValider");

 
    for (let i = 0; i < _id.colors.length; i++) {

      // Je cree mon option
      couleurDuNounoursOption = document.createElement("option");
      
      // je lui affecte une value de l'attribut valeur
      couleurDuNounoursOption.setAttribute("value", _id.colors[i]);

      // je lui met ensuite un textContent pour que le menu affiche la couleur
      couleurDuNounoursOption.textContent = _id.colors[i];

      // Je ajoute l'enfant couleur (option) dans mon parent (select)
      couleurDuNounours.appendChild(couleurDuNounoursOption);   
         
    }


    nomDuNounours.textContent = _id.name;
    imageDuNounoursDetail.setAttribute("src", _id.imageUrl);
    prixDuNounours.textContent = _id.price;

    prixDuNounours.textContent = prixDuNounours.textContent / 100 + " €";
    descriptionDuNounours.textContent = _id.description;
    descriptionCouleur.option = "Couleur"
    descriptionQuantite.option = "Quantité"

    // Pour mettre du texte dans mon bouton
    boutonValider.textContent = "Valider"

    // on les affiches
    carteNounoursDetail.appendChild(nomDuNounours);
    carteNounoursDetail.appendChild(imageDuNounoursDetail);
    carteNounoursDetail.appendChild(prixDuNounours, );
    carteNounoursDetail.appendChild(descriptionCouleur, );
    carteNounoursDetail.appendChild(couleurDuNounours);
    carteNounoursDetail.appendChild(descriptionDuNounours);
    carteNounoursDetail.appendChild(descriptionQuantite, );
    // carteNounoursDetail.appendChild(quantiteSelect);
    carteNounoursDetail.appendChild(boutonValider);

    document.getElementById("content").appendChild(carteNounoursDetail);

  })