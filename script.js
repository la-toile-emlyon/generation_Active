AOS.init({
  once: false,      // permet de rejouer l'animation à chaque entrée dans le viewport
  mirror: true      // permet aussi de rejouer l'animation quand on sort et revient
});



// On sélectionne les 3 blocs de personnes à gauche
let personnes = document.querySelectorAll(
  "#avisclient .w-48:first-child > div > div"
);

// Partie droite
let nom = document.querySelector("#avisclient .w-48:last-child h3");
let texte = document.querySelector("#avisclient .w-48:last-child p");

function afficherAvis(daniel) {
  //  gestion du bouton actif
  personnes.forEach(p => p.classList.remove("active"));
  personnes[daniel].classList.add("active");

  //  contenu témoignage
  if (daniel === 0) {
    nom.textContent = "Abdel Mouloud";
    texte.textContent =
      "Très intuitive et bien pensée. La création et le suivi d’une association sont clairs, rapides et structurés étape par étape.";
  } else if (daniel === 1) {
    nom.textContent = "Dj Cake";
    texte.textContent =
      "Une plateforme efficace et moderne. Elle m’a permis d’organiser mes projets associatifs sans prise de tête.";
  } else if (daniel === 2) {
    nom.textContent = "Bruno Bounty";
    texte.textContent =
      "Un outil puissant pour fédérer et structurer une communauté. Simple, efficace et accessible à tous.";
  }
}

// Écoute du clic
personnes.forEach((personne, index) => {
  personne.addEventListener("click", () => {
    afficherAvis(index);
  });
});

// 🔹 sélection par défaut
afficherAvis(0);

