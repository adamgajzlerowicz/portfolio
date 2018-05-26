import * as React from 'react';
import LazyLoad from 'react-lazyload';
import { Col, Modal, Button } from 'react-bootstrap';
import t from '../translations';

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
      image, description, title, language, technologies,
    } = this.props;

    // eslint-disable-next-line
    const isWide = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 768;

    const imagePath = require(`../images/${image}`);

    const ImageComponent = ({ addition = '', height = 100 }) => (
      <LazyLoad height={height} >
        <img src={imagePath} className={`promo-image${addition}`} alt={`logo ${title[language]}`} />
      </LazyLoad>
    );

    return (
      <div className="full-height full-screen">
        <article>
          { isWide && (<Modal show={this.state.show} onHide={this.handleClose}> <ImageComponent addition="-modal" height="500" /> </Modal>)}

          <Col xs={12} sm={4}>
            { isWide && (<Button bsStyle="link" onClick={this.handleShow} className="open-item"> <ImageComponent /> </Button>)}
            { !isWide && <ImageComponent /> }

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
