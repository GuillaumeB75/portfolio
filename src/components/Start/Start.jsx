// Import des modules nécessaires depuis React et autres bibliothèques
import React, { useEffect, useRef } from 'react';
import { Element } from "react-scroll"; // Permet de créer une navigation fluide entre les éléments de la page
import "./start.scss"; // Importation des styles spécifiques à ce composant
import back from "../../assets/images/back.jpg"; // Importation de l'image de fond

// Définition du composant Start
function Start() {
  // Utilisation des hooks useRef pour garder une référence aux éléments h1, h2 et h3
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const h3Ref = useRef(null);

  const speed = 50; // Définition de la vitesse de l'effet de frappe

  // Fonction pour créer un effet de frappe sur les éléments passés en paramètre
  const typeEffect = (element, speed) => {
    const text = element.innerHTML; // Récupération du texte de l'élément
    element.innerHTML = ""; // Réinitialisation du contenu de l'élément
    let i = 0;
    // Initialisation d'un timer qui ajoute les caractères un par un
    const timer = setInterval(() => {
      if (i < text.length) {
        element.append(text.charAt(i)); // Ajout du caractère suivant
        i++;
      } else {
        clearInterval(timer); // Arrêt du timer une fois le texte complet affiché
      }
    }, speed);
  };

  // Utilisation de useEffect pour déclencher l'effet de frappe une fois les éléments montés
  useEffect(() => {
    // Vérification que les références sont bien attachées aux éléments du DOM
    if (h1Ref.current && h2Ref.current && h3Ref.current) {
      typeEffect(h1Ref.current, speed); // Application de l'effet sur h1
      const delayH1 = h1Ref.current.innerHTML.length * speed + speed;
      
      // Utilisation de setTimeout pour décaler le début de l'effet sur h2
      setTimeout(() => {
        h2Ref.current.style.display = "block"; // Rendre h2 visible
        typeEffect(h2Ref.current, speed); // Application de l'effet sur h2
      }, delayH1);

      const delayH2 = delayH1 + h2Ref.current.innerHTML.length * speed + speed;
      
      // Utilisation de setTimeout pour décaler le début de l'effet sur h3
      setTimeout(() => {
        h3Ref.current.style.display = "block"; // Rendre h3 visible
        typeEffect(h3Ref.current, speed); // Application de l'effet sur h3
      }, delayH2);
    }
  }, [speed]); // Dépendance du useEffect à la variable speed

  // Rendu du composant
  return (
    <Element
      name="Start" // Nom de l'élément pour la navigation fluide
      className="start-container" // Classe pour le styling
      style={{ backgroundImage: `url(${back})` }} // Style inline pour l'image de fond
    >
      <div id="table">
        <div id="centeralign">
          <h1 ref={h1Ref}>Bonjour !</h1> 
          <h2 ref={h2Ref} style={{ display: 'none' }}>Je suis Guillaume Bézie,</h2>
          <h2 ref={h3Ref} style={{ display: 'none' }}>Développeur Intégrateur Web</h2> 
        </div>
      </div>
    </Element>
  );
}

// Exportation du composant pour utilisation dans d'autres parties de l'application
export default Start;
