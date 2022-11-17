//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
//Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.

let ourTeam = [
    {
        Name: "Wayne Barnett",
        Role: "Founder & CEO",
        Image: "wayne-barnett-founder-ceo.jpg",
    },
    {
        Name: "Angela Caroll",
        Role: "Chief Editor",
        Image: "angela-caroll-chief-editor.jpg",
    },
    {
        Name: "Walter Gordon",
        Role: "Office Manager",
        Image: "walter-gordon-office-manager.jpg",
    },
    {
        Name: "Angela Lopez",
        Role: "Social Media Manager",
        Image: "angela-lopez-social-media-manager.jpg",
    },
    {
        Name: "Scott Estrada",
        Role: "Developer",
        Image: "scott-estrada-developer.jpg",
    },
    {
        Name: "Barbara Ramos",
        Role: "Graphic Designer",
        Image: "barbara-ramos-graphic-designer.jpg",
    }
];

//MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (memberTeam of ourTeam){
    stampaScheda(memberTeam);

}

//Procedo ad affrontare MILESTONE 2 e Bonus insieme: Stamperò nell'Html le schede del team sotto forma di cards con immagini

for (memberTeam of ourTeam){
    document.getElementById("teamCardsContainer").innerHTML+=`
<div class="col-12 col-md-6 col-lg-3 m-2 bg-white pt-3">
  <img src=${imagePath(memberTeam)} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${memberTeam.Name}</h5>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${memberTeam.Role}</li>
  </ul>
</div>`

}


// -----------Funzioni------------------------

function stampaScheda(memberTeam){
    console.log(`
    
----------- ${memberTeam.Name} -----------

Role: ${memberTeam.Role}

Image: ${memberTeam.Image}

-------------------------------------
    `)
}

function imagePath(memberTeam){
    let role= memberTeam.Role
    role = role.replace(/[^A-Z0-9]/ig, "-");
    role = role.replace("---", "-")
    let name = memberTeam.Name
    name = name.replace (" ", "-")
    return stringaImg="img/"+name+"-"+role+".jpg"
}