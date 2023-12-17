function validateForm() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const num = document.getElementById('num').value;

    // Vérifie si le nom et le prénom ne contiennent pas de chiffres
    if (!/^[a-zA-Z]+$/.test(nom) || !/^[a-zA-Z]+$/.test(prenom)) {
        alert('Le nom et le prénom ne doivent contenir que des lettres.');
        return false;
    }

    // Vérifie si le numéro a 8 chiffres
    if (!/^\d{8}$/.test(num)) {
        alert('Le numéro doit avoir 8 chiffres.');
        return false;
    }

    // Vous pouvez ajouter d'autres validations selon vos besoins

    // Si toutes les validations sont passées, le formulaire est soumis
    alert('Formulaire soumis avec succès!');
    return true;
}
