/* global */
import * as React from 'react';
import { Col, Modal, Button } from 'react-bootstrap';

class Article extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
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
      image,
      description,
      title,
      language,
      technologies,
      isMobile
    } = this.props;

    const imagePath = require(`../images/${image}`);

    const Image = ({ addition = '' }) => (
      <img
        src={imagePath}
        className={`promo-image${addition}`}
        alt={`logo ${title[language]}`}
      />
    );

    return (
      <div className="full-height full-screen">
        <article>
          {!isMobile && (
            <Modal show={this.state.show} onHide={this.handleClose}>
              <div onClick={() => this.setState({ show: false })}>
                <Image addition="-modal" width="1000" />
              </div>
            </Modal>
          )}

          <Col xs={12} sm={4}>
            {!isMobile && (
              <Button
                bsStyle="link"
                onClick={this.handleShow}
                className="open-item"
              >
                <Image />
              </Button>
            )}
            {isMobile && <Image />}
          </Col>
          <Col xs={12} sm={8}>
            <h2 className="article-heading">{title}</h2>
            <p className="article-content">{description}</p>
            <p className="tags">
              Technologies used:
              <span>{technologies.join(', ')}</span>
            </p>
          </Col>
        </article>
      </div>
    );
  }
}

export default Article;
