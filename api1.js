const tab = {
    nom : 'cheikh',
    prenom :'tidiane',
    matiere : ['svt','math'],
    afficher(){
        console.log(this.nom)
        console.log(this.matiere)
    }
}
tab.afficher()
const maping= [1,3,4,5,5,6,6,34,17,56,8]
console.log(maping.filter((i)=> i%2==0))