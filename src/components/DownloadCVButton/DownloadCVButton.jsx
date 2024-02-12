import React from 'react';
import monCV from '../../assets/images/guillaume bézie.png'; 

const DownloadCVButton = () => {
  return (
    <a href={monCV} download="guillaume bézie.png">
      Afficher mon CV
    </a>
  );
};

export default DownloadCVButton;
