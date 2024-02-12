import React from 'react';
import monCV from '../../assets/data/CV_Guillaume_Bézie.pdf'; 

const DownloadCVButton = () => {
  return (
    <a href={monCV} download="CV_Guillaumme_Bézie.pdf">
      Télécharger ici mon CV
    </a>
  );
};

export default DownloadCVButton;
