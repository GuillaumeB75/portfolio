import React, { useState, useEffect } from 'react';
import { Element } from "react-scroll";
import "./start.scss";
import back from "../../assets/images/back.jpg";

// Composant réutilisable pour l'effet machine à écrire
const Typewriter = ({ text, delay = 50, onComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, delay, onComplete]);

  return <span>{currentText}</span>;
};

function Start() {
  const [showLine2, setShowLine2] = useState(false);
  const [showLine3, setShowLine3] = useState(false);

  return (
    <Element name="Start" className="start-container" style={{ backgroundImage: `url(${back})` }}>
      <div id="table">
        <div id="centeralign">
          <h1>
            <Typewriter text="Bonjour !" onComplete={() => setShowLine2(true)} />
          </h1>
          {showLine2 && (
            <h2>
              <Typewriter text="Je suis Guillaume Bézie," onComplete={() => setShowLine3(true)} />
            </h2>
          )}
          {showLine3 && (
            <h2>
              {/* C'est ici que le texte change pour s'aligner sur ton objectif */}
              <Typewriter text=" À la recherche d'une alternance : Chef de Projet IT / PMO" />
            </h2>
          )}
        </div>
      </div>
    </Element>
  );
}

export default Start;
