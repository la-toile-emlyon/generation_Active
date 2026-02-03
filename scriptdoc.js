// je recupere tous les liens de la navigation lateral
// lorsque je clique sur un des liens (jecoute le clic) :
    // je m'assure que il n'y a pas d'autre boutons actifs ? 
    // si y'en a un je lui enleve la classe active
    // je lui donne la classe "active"

let liens = document.querySelectorAll(".carte-navigation a")
liens.forEach(lien=>{
    lien.addEventListener("click",()=>{
        let temp= document.querySelector(".active")
        if(temp){
            temp.classList.remove("active")
        }
        lien.classList.add("active")

    })
})