/* global window */
import * as React from 'react';
import LazyLoad from 'react-lazyload';
import Down from 'react-icons/lib/fa/angle-down';
import Up from 'react-icons/lib/fa/angle-up';
import { Col, Modal, Button } from 'react-bootstrap';

import { scrollToView } from '../utils';
import t from '../translations';

class Article extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);

    this.state = {
      show: false,
    };
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    this.forceUpdate();
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {

    const {
      image, description, title, language, technologies, nextId, currentId
    } = this.props;

    // eslint-disable-next-line
    const isWide = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 768;

    const imagePath = require(`../images/${image}`);

    const ImageComponent = ({ addition = '', height = 100 }) => (
      <LazyLoad height={height} >
        <img src={imagePath} className={`promo-image${addition}`} alt={`logo ${title[language]}`} />
      </LazyLoad>
    );
    console.log(nextId);
    return (
      <div className="full-height full-screen" id={currentId}>
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
          <Col xs={12}>
            { nextId && <button onClick={() => scrollToView(nextId)} className="down scroller"><Down alt="go to what i do section" /></button> }
            { !nextId && <button onClick={() => scrollToView('portfolio')} className="up"><Up alt="go up to portfolio section" /></button> }
          </Col>
        </article>
      </div>
    );
  }
}

export default Article;
