/* global window */
import * as React from 'react';
import { Col, Modal, Button } from 'react-bootstrap';

import t from '../translations';
import { checkIfMobile } from '../utils';

class Article extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);

    this.state = {
      show: false,
      isMobile: checkIfMobile()
    };
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    this.setState({isMobile: checkIfMobile()});
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const {
      image, description, title, language, technologies,
    } = this.props;

    const { isMobile } = this.state;

    const imagePath = require(`../images/${image}`);

    const ImageComponent = ({ addition = '', height = 100 }) => (
        <img src={imagePath} className={`promo-image${addition}`} alt={`logo ${title[language]}`} />
    );

    return (
      <div className="full-height full-screen">
        <article>
          { !isMobile && (<Modal show={this.state.show} onHide={this.handleClose}> <ImageComponent addition="-modal" height="500" /> </Modal>)}

          <Col xs={12} sm={4}>
            { !isMobile && (<Button bsStyle="link" onClick={this.handleShow} className="open-item"> <ImageComponent /> </Button>)}
            { isMobile && <ImageComponent /> }

          </Col>
          <Col xs={12} sm={8}>
            <h2 className="article-heading">{title[language]}</h2>
            <p className="article-content">{description[language]}</p>
            <p className="tags">{t.tags[language]}: {technologies.map(tech => <span key={Math.random()}> {tech} </span>) }</p>
          </Col>
        </article>
      </div>
    );
  }
}

export default Article;
