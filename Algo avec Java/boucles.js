
let a=3

/*Boucle For*/

for (let i=0 ; i<a ; i++) {console.log("Oklm.")}

/*Boucle While*/

while (a<9) {
    a++
    if (a==8) {
        break
    }
    if (a==7) {
        continue
    }
    console.log(a)
}
console.log('J ai casse la boucle au bout de '+a+' tours')