class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        return Math.random() < this.luck
    }

    attackPokemon(defenseur) {
        if(this.isLucky()){
            let damage = this.attack - defenseur.defense
            defenseur.hp -= damage
            console.log(defenseur.name+" à perdu "+damage+" hp")
            console.log("il lui reste "+ defenseur.hp)
        }
        else {
            console.log("l'attaque à échouée")
        }
    }
}

let pikachu = new Pokemon("Pikachu", 50, 25, 120, 0.7)
let evoli = new Pokemon("Evoli", 35, 30, 150, 0.8)

while(evoli.hp > 0 && pikachu.hp > 0) {

    evoli.attackPokemon(pikachu)

    if(pikachu.hp <= 0){
        console.log("Pikachu est KO")
        break;
    }

    pikachu.attackPokemon(evoli)

    if(evoli.hp <= 0){
        console.log("Evoli est KO")
        break;
    }
}