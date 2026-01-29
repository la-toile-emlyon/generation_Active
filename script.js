let temoins = document.querySelectorAll('.temoin');
let nom = document.getElementById('temoin-nom');
let texte = document.getElementById('temoin-texte');

temoins.forEach(temoin => {
    temoin.addEventListener('click', () => {

        // gestion couleur active
        temoins.forEach(t => t.classList.remove('active'));
        temoin.classList.add('active');

        let id = temoin.dataset.id;

        if (id === "jimi") {
            nom.textContent = "Jimi Anderson";
            texte.textContent = "Application très intuitive et bien pensée. La création et le suivi d’une association sont clairs, rapides et structurés.";

        } else if (id === "dino") {
            nom.textContent = "Dino Jemes";
            texte.textContent = "Une application moderne et efficace. J’ai pu gérer mon projet artistique sans difficulté.";

        } else if (id === "barak") {
            nom.textContent = "Barak Obama";
            texte.textContent = "A very powerful tool to help communities organize and move forward together.";
        }
    });
});
