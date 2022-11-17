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


let Role= memberTeam.Role
Role.replace(" ", "-")





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
    return stringaImg=".img/"+name+role+".jpg"
}