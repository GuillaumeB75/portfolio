import React from 'react';
import monCV from '/Users/guillaumebezie/Desktop/portfolio/src/assets/pdf/CV_Guillaume_Bézie.pdf'; 

const DownloadCVButton = () => {
  return (
    <a href={monCV} download="CV_Guillaume_Bézie.pdf">
      Télécharger mon CV
    </a>
  );
};

export default DownloadCVButton;
