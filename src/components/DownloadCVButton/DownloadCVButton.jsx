import React from 'react';
import monCV from '/Users/guillaumebezie/Desktop/portfolio/src/assets/data/Lettre de motivation Guillaume BÉZIE.pdf'; 

const DownloadCVButton = () => {
  return (
    <a href={monCV} download="CV_Guillaume_Bézie.pdf">
      Télécharger mon CV
    </a>
  );
};

export default DownloadCVButton;
