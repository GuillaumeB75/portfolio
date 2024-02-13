import React, { useEffect, useRef } from 'react';
import { Element } from "react-scroll";
import "./start.scss";
import back from "../../assets/images/back.jpg";

function Start() {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const h3Ref = useRef(null);

  const speed = 100; // Vitesse de l'effet de frappe

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

  useEffect(() => {
    if (h1Ref.current && h2Ref.current && h3Ref.current) {
      typeEffect(h1Ref.current, speed);
      const delayH1 = h1Ref.current.innerHTML.length * speed + speed;
      
      setTimeout(() => {
        h2Ref.current.style.display = "block"; 
        typeEffect(h2Ref.current, speed);
      }, delayH1);

      const delayH2 = delayH1 + h2Ref.current.innerHTML.length * speed + speed;
      
      setTimeout(() => {
        h3Ref.current.style.display = "block"; 
        typeEffect(h3Ref.current, speed);
      }, delayH2);
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
          <h2 ref={h2Ref} style={{ display: 'none' }}>Je suis Guillaume Bézie,</h2>
          <h2 ref={h3Ref} style={{ display: 'none' }}>Développeur Intégrateur Web</h2>
        </div>
      </div>
    </Element>
  );
}

export default Start;
