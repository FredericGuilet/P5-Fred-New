let params = (new URL(document.location)).searchParams;
let id = params.get('id');
console.log(id);


fetch('http://localhost:3000/api/teddies/' + id)

  .then(response => response.json())

  .then(_id => {

    // console.log(data);

    let carteNounoursDetail = document.createElement("div");

    // on crée nos variables
    let nomDuNounours = document.createElement("H2");
    let imageDuNounoursDetail = document.createElement("img");
    let prixDuNounours = document.createElement("H3");
    let couleurDuNounours = document.createElement("select")
    let descriptionDuNounours = document.createElement("p")
    let boutonValider = document.createElement("button")

    // parce que c'est un lien
    let urlDuNounours = document.createElement("a");

    // Pour le décorer en css
    nomDuNounours.setAttribute("class", "nounours");
    imageDuNounoursDetail.setAttribute("class", "imageDuNounoursDetail");
    prixDuNounours.setAttribute("class", "nounours");
    couleurDuNounours.setAttribute("class", "nounours");
    descriptionDuNounours.setAttribute("class", "descriptionDuNounours");
    urlDuNounours.setAttribute("class", "nounours");
    carteNounoursDetail.setAttribute("class", "carteNounoursDetail");
    boutonValider.setAttribute("class", "BoutonValider");

    // on les cherches
    nomDuNounours.textContent = _id.name;
    imageDuNounoursDetail.setAttribute("src", _id.imageUrl);
    prixDuNounours.textContent = _id.price;

    prixDuNounours.textContent = prixDuNounours.textContent / 100 + " €";
    couleurDuNounours.textContent = _id.colors;
    descriptionDuNounours.textContent = _id.description;

    boutonValider.textContent = "Valider"



    // on les affiches
    carteNounoursDetail.appendChild(nomDuNounours);
    carteNounoursDetail.appendChild(imageDuNounoursDetail);
    carteNounoursDetail.appendChild(prixDuNounours, );
    carteNounoursDetail.appendChild(couleurDuNounours);
    carteNounoursDetail.appendChild(descriptionDuNounours);
    carteNounoursDetail.appendChild(boutonValider);

    function myFunction() {
      document.getElementById("demo").innerHTML = "Hello World";
    }

    document.getElementById("content").appendChild(carteNounoursDetail);

    // c'est parti
  })