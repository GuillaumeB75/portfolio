import React from 'react';
import monCV from "../src/assets/data/CV_Guillaume_Bézie.pdf"; // Assurez-vous d'ajuster le chemin d'importation

const DownloadCVButton = () => {
  return (
    <a href={monCV} download="CV_Guillaume_Bézie.pdf" style={{ textDecoration: 'none' }}>
      <button type="button">Télécharger mon CV</button>
    </a>
  );
};

export default DownloadCVButton;
