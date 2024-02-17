import React from 'react';
import Card from 'react-bootstrap/Card';
import { Element } from "react-scroll";
import "./projects.scss";
import data from "../../assets/data/cards.json"; 


function Cards() {
  return (
    <Element name="Projects" className="projects-container">
  <div className="projects-box">
  <h2>Projets</h2>
    <div>
      {data.map((item, index) => (
        <Card key={index} >
          <Card.Img variant="top" src={require(`../../assets/images/${item.imageSrc}`)} alt={item.imageAlt || 'Image du projet'} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.text}
            </Card.Text>
            <Card.Text>
              {item.text2}
            </Card.Text>
            <Card.Text>
              {item.text3}
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href={item.githubLink}>Lien GitHub</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
    </div>
    </Element>
  );
}

export default Cards;
