import * as React from 'react';
import { Col } from 'react-bootstrap';

const Article = ({ image, description, title, category, language})=>{
    const imagePath = require('../images/' + image);
    return (
        <article>
            <Col xs={12} md={4}> <img src={imagePath} className="promo-image" alt="logo" /> </Col>
            <Col xs={12} md={8}> <h2>{title[language]}</h2> <p>{description[language]}</p> </Col>
            <Col xs={12}> <hr/> </Col>
        </article>
    );
};

export default Article;
