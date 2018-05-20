import * as React from 'react';
import { Col } from 'react-bootstrap';

const Article = ({ image, description, title, category, language})=>{
    const imagePath = require('../images/' + image);
    return (
        <div className="full-height">
            <article className="col-sm-6 col-sm-push-3 col-xs-12">
                <Col xs={12} md={4}> <img src={imagePath} className="promo-image" alt="logo" /> </Col>
                <Col xs={12} md={8}>
                    <h2 className="article-heading">{title[language]}</h2>
                    <p className="article-content">{description[language]}</p>
                </Col>
                <Col xs={12}> <hr/> </Col>
            </article>
        </div>
    );
};

export default Article;
