const express = require('express');
const path = require('path');
const app = express();

// Définir le dossier des fichiers statiques
app.use(express.static(__dirname));

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Gestion des erreurs 404
app.use((req, res) => {
    res.status(404).send('Page non trouvée');
});

// Définir le port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

