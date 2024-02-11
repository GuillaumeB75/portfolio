import React from 'react';
import Card from 'react-bootstrap/Card';
import { Element } from "react-scroll";
import "./projects.scss";
import data from "../../assets/data/cards.json"; // Assurez-vous que le chemin est correct


function Cards() {
  return (
    <Element name="Projects" className="projects-container">
     
    <div>
      {data.map((item, index) => (
        <Card key={index} >
          <Card.Img variant="top" src={require(`../../assets/images/${item.imageSrc}`)}  />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.text}
            </Card.Text>
            <Card.Text>
              {item.text2}
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href={item.githubLink}>GitHub Repo</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
    </Element>
  );
}

export default Cards;
