

let params = (new URL(document.location)).searchParams;
let id = params.get('id');
console.log (id);


fetch('http://localhost:3000/api/teddies/'+id)

  .then(response => response.json())

  .then(data => {
    
    console.log(data);
    
    let carteNounours = document.createElement("div");

    // on crée nos variables
    let nomDuNounours = document.createElement("H2");
    let imageDuNounours = document.createElement("img");
    let prixDuNounours = document.createElement("H3");
    let couleurDuNounours = document.createElement("H4")
    let descriptionDuNounours = document.createElement("p")

    // parce que c'est un lien
    let urlDuNounours = document.createElement("a");

    // Pour le décorer en css
    nomDuNounours.setAttribute("class", "nounours");
    imageDuNounours.setAttribute("class", "imageDuNounours");
    prixDuNounours.setAttribute("class", "nounours");
    couleurDuNounours.setAttribute("class", "nounours");
    descriptionDuNounours.setAttribute("class", "descriptionDuNounours");
    urlDuNounours.setAttribute("class", "nounours");

    // on les cherches
    nomDuNounours.textContent = data[1].name;
    imageDuNounours.setAttribute("src", data[id].imageUrl);
    prixDuNounours.textContent = data[id].price;

    // la on met le href correspondant
    urlDuNounours.setAttribute("href", "produits.html?id="+ data[id]._id);

    // la c'est le texte correspondant a l'url
    urlDuNounours.textContent = "Voir ce nounours";
    prixDuNounours.textContent = prixDuNounours.textContent / 100 +" €";
    couleurDuNounours.textContent = data[i].colors;
    descriptionDuNounours.textContent = data[i].description;

    // on les affiches
    carteNounours.appendChild(nomDuNounours);
    carteNounours.appendChild(imageDuNounours);
    carteNounours.appendChild(prixDuNounours,);
    carteNounours.appendChild(urlDuNounours);

    document.getElementById("content").appendChild(carteNounours);

    // c'est parti
  })
