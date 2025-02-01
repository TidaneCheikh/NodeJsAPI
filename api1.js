let user={
  nom:"cheikh",
  code:12
}
let clone={}

for(key in user){
  clone[key]=user[key]
}

clone.nom="papa"
console.log(user.nom, clone.nom)
