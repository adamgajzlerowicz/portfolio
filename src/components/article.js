import * as React from 'react';
import { Col, Modal, Button } from 'react-bootstrap';

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
      image, description, title, language, technologies
    } = this.props;

    // eslint-disable-next-line
    const isWide = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 768;

    const imagePath = require(`../images/${image}`);
    return (
      <div className="full-height">
        <article>
          { isWide && (
          <Modal show={this.state.show} onHide={this.handleClose}>
            <img src={imagePath} className="promo-image-modal" alt={`logo ${title[language]}`} />
          </Modal>
          )}

          <Col xs={12} sm={4}>
            { isWide && (
              <Button bsStyle="link" onClick={this.handleShow} className="open-item">
                <img src={imagePath} className="promo-image" alt="logo" />
              </Button>
              )}
            { !isWide && <img src={imagePath} className="promo-image" alt="logo" />}

          </Col>
          <Col xs={12} sm={8}>
            <h2 className="article-heading">{title[language]}</h2>
            <p className="article-content">{description[language]}</p>
            <p className="tags">{technologies.map(t => <span key={Math.random()}> {t} </span>) }</p>
          </Col>
          <Col xs={12}> <hr /> </Col>
        </article>
      </div>
    );
  }
}

export default Article;
