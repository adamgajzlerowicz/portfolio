import * as React from 'react';
import { Col } from 'react-bootstrap';

const translations = {
  tags: {
    pl: 'Tagi',
    en: 'Tags',
  },
};

class Article extends React.PureComponent {
  render() {
    const {
      image, description, title, category, language,
    } = this.props;
    const imagePath = require(`../images/${image}`);
    return (
      <div className="full-height">
        <article className="col-sm-8 col-sm-push-2 col-xs-12">
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
