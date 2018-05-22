import * as React from 'react';
import { Col } from 'react-bootstrap';

import translations from '../translations';

class Article extends React.PureComponent {
  render() {
    const {
      image, description, title, category, language,
    } = this.props;
    const imagePath = require(`../images/${image}`);
    return (
      <div className="full-height">
        <article>
          <Col xs={12} sm={4}> <img src={imagePath} className="promo-image" alt="logo" /> </Col>
          <Col xs={12} sm={8}>
            <h2 className="article-heading">{title[language]}</h2>
            <p className="article-content">{description[language]}</p>
            <p className="article-category">{translations.tags[language]}: {category}</p>
          </Col>
          <Col xs={12}> <hr /> </Col>
        </article>
      </div>
    );
  }
}

export default Article;
