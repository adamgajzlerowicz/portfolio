import * as React from 'react';
import { Col, Modal, Button } from 'react-bootstrap';

import translations from '../translations';

class Article extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }


  render() {
    const {
      image, description, title, category, language,
    } = this.props;
    const imagePath = require(`../images/${image}`);
    return (
      <div className="full-height">
        <article>


          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={imagePath} className="promo-image" alt={`logo ${title[language]}`} />
            </Modal.Body>
          </Modal>
          <Col xs={12} sm={4}>
            <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
              <img src={imagePath} className="promo-image" alt="logo" />
            </Button>
          </Col>
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
