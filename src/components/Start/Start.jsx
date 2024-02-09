import React, { useEffect, useRef } from 'react';
import { Element } from "react-scroll";
import "./start.scss";
import back from "../../assets/images/back.jpg";

function Start() {
  // Utilisez useRef pour obtenir des références aux éléments DOM que vous allez animer
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);

  // Définissez la vitesse de l'effet de frappe
  const speed = 100;

  // Fonction pour appliquer l'effet de frappe
  const typeEffect = (element, speed) => {
    const text = element.innerHTML;
    element.innerHTML = "";

    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        element.append(text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  };

  // Utilisez useEffect pour exécuter l'animation après le montage du composant
  useEffect(() => {
    if (h1Ref.current && h2Ref.current) {
      typeEffect(h1Ref.current, speed);
      const delay = h1Ref.current.innerHTML.length * speed + speed;

      setTimeout(() => {
        h2Ref.current.style.display = "inline-block";
        typeEffect(h2Ref.current, speed);
      }, delay);
    }
  }, [speed]);

  return (
    <Element
      name="Start"
      className="start-container"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div id="table">
        <div id="centeralign">
          <h1 ref={h1Ref}>Bonjour !</h1>
          <h2 ref={h2Ref} style={{ display: 'none' }}>Je suis Guillaume Bézie, développeur intégrateur Web</h2>
        </div>
      </div>
    </Element>
  );
}

export default Start;
