import React from 'react';
import "./downloadCVButton.scss";

const DownloadCVButton = () => {
  // Fonction pour gérer le téléchargement
  const handleDownloadCV = () => {
    // Créez un élément a temporaire pour déclencher le téléchargement
    const link = document.createElement('a');
    link.href = 'CV_Guillaume_Bézie.pdf'; // Le chemin vers le fichier CV dans le dossier public
    link.download = 'CV_Guillaume_Bézie.pdf'; // Le nom sous lequel le fichier sera téléchargé
    document.body.appendChild(link); // Ajouter à la page
    link.click(); // Simuler un clic pour déclencher le téléchargement
    document.body.removeChild(link); // Nettoyer en supprimant l'élément
  };

  return (
    <button onClick={handleDownloadCV}>Télécharger mon CV</button>
  );
};

export default DownloadCVButton;
