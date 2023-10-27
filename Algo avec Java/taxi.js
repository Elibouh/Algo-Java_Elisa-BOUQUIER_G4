
const Musiques = ["Anissa, Wejdene","Paint The Town Red, Doja Cat","Astronaute, Vayn ","Dis-moi que tu m'aimes, Ninho","Should I, Riles"]
  
  function Taxi() {
    let FeuxRouges = 30;
    let Elisa = 10;
  
    function Radio(x) {
      a = Math.floor(Math.random() * x);
    }
  
    while (FeuxRouges != 0 && Elisa != 0) {
      Radio(Musiques.length);
      console.log("Radio : " + Musiques[a] + ".");
  
      if (a === 0) {
        Elisa -= 1;
        console.log("Tu perds 1 vie, il t'en reste " + Elisa + ".");
      } else {
        FeuxRouges -= 1;
        console.log(
          "Il te reste " + FeuxRouges + " feux rouges avant d'arriver !"
        );
      }
    }
    if (Elisa === 0) {
      console.log("Explosion");
    }
    if (FeuxRouges === 0) {
      let Changements = 10 - Elisa;
      console.log("Tu es bien arrivé !");
      console.log("Il t'a fallu " + Changements + " changements de taxi.");
    }
  }
  
  Taxi();
