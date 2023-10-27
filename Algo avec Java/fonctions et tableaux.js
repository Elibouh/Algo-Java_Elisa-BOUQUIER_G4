
/* Exercice Fonction*/

let a = "Jean"
let b = "Paul"
let result = checkName(a,b)

function checkName(nom1,nom2){
    if (nom1 == nom2){ 
        console.log("Les deux prénoms sont identiques.")
    } else {
        console.log("Les deux prénoms sont différents.")
    }
}


/* Exercice Tableau*/

let names = []

    names.push ("Vincent","Paul","Arthur")

    names.forEach ((names) => {console.log(names += " va à la pêche")})

