/* global window document */

import React, { Component } from 'react';
import StackOverflow from 'react-icons/lib/fa/stack-overflow';
import Steam from 'react-icons/lib/fa/steam';
import Twitter from 'react-icons/lib/fa/twitter';
import LinkedIn from 'react-icons/lib/fa/linkedin';
import Github from 'react-icons/lib/fa/github';
import Email from 'react-icons/lib/fa/envelope';
import Down from 'react-icons/lib/fa/angle-down';
import Up from 'react-icons/lib/fa/angle-up';
import { Col } from 'react-bootstrap';
import FlipMove from 'react-flip-move';

import Article from './article';
import projects from '../projects';
import { scrollToView, checkIfMobile, getPosition } from '../utils';

const getClassName = index => (index % 2 === 0 ? 'dark' : 'light');

class Home extends Component {
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {
      filter: null,
      isMobile: checkIfMobile(),
      floatPortfolio: true
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    window.addEventListener('scroll', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
    window.removeEventListener('scroll', this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      isMobile: checkIfMobile(),
      floatPortfolio:
        getPosition(document.getElementById('portfolio')) - 1 >= window.scrollY
    });
  }

  render() {
    const { language, filter } = this.state;
    const { floatPortfolio: showPortfolioNav } = this.state;

    let index = 1;

    const { isMobile } = this.state;

    return (
      <div className="app">
        <button
          className="home"
          aria-label="go back to top"
          onClick={() => scrollToView('app')}
        >
          <h4>AG</h4>
        </button>

        <header className="app-header">
          <div id="avatar" />
          <h1 className="app-title">Adam Gajzlerowicz</h1>
          <h2 className="app-sub-title">Web application developer</h2>
          <button
            onClick={() => scrollToView('what-i-do')}
            className="down"
            aria-label="Find out what I do"
          >
            <Down alt="go to what i do section" />
          </button>
        </header>

        <main className="container">
          <section
            id="what-i-do"
            className={`center-text section-${getClassName(index++)}`}
          >
            <h1 className="section-heading flex">What I create?</h1>
            <h3 className="center-text center width flex">
              I create awesome and fun web applications!
            </h3>
            <h3 className="center-text center width flex">
              I love creating apps that make people's live easier
            </h3>
            <button
              onClick={() => scrollToView('portfolio')}
              className="down"
              aria-label="go to my portfolio"
            >
              <Down alt="go to my portfolio" />
            </button>
          </section>

          <section
            id="portfolio"
            className={`section-${getClassName(index++)}`}
          >
            <div className="center width">
              <h1 className="section-heading">Past projects</h1>

              <nav
                className={showPortfolioNav ? 'hidden-item' : 'visible-item'}
              >
                <button
                  onClick={() => {
                    scrollToView('portfolio');
                    this.setState({ filter: null });
                  }}
                  className={filter === null ? 'active' : ''}
                >
                  All
                </button>

                <button
                  onClick={() => {
                    scrollToView('portfolio');
                    this.setState({ filter: 'fun' });
                  }}
                  className={filter === 'fun' ? 'active' : ''}
                >
                  Fun
                </button>

                <button
                  onClick={() => {
                    scrollToView('portfolio');
                    this.setState({ filter: 'corporate' });
                  }}
                  className={filter === 'corporate' ? 'active' : ''}
                >
                  Large
                </button>

                <button
                  onClick={() => {
                    scrollToView('portfolio');
                    this.setState({ filter: 'plugin' });
                  }}
                  className={filter === 'plugin' ? 'active' : ''}
                >
                  Plugins
                </button>

                <button
                  onClick={() => {
                    scrollToView('portfolio');
                    this.setState({ filter: 'solo' });
                  }}
                  className={filter === 'solo' ? 'active' : ''}
                >
                  Solo
                </button>
              </nav>

              <FlipMove>
                {projects
                  .filter(project => !filter || project.category === filter)
                  .map(project => (
                    <Article
                      key={project.title}
                      {...project}
                      language={language}
                      isMobile={isMobile}
                    />
                  ))}
              </FlipMove>
            </div>
            <button
              onClick={() => scrollToView('app')}
              className="up"
              aria-label="go to top"
            >
              <Up alt="go up to top" />
            </button>
          </section>
        </main>
        <footer>
          <Col sm={4} xs={12}>
            © {new Date().getFullYear()} Adam Gajzlerowicz
          </Col>

          <Col sm={8} xs={12} className="footer-social">
            <a
              href="https://github.com/adamgajzlerowicz"
              aria-label="see me on github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github alt="see me on github" />
            </a>
            <a
              href="https://stackoverflow.com/users/1333744/adam"
              aria-label="see me on stack overflow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StackOverflow alt="see me on stack overflow" />
            </a>
            <a
              href="https://www.linkedin.com/in/adam-gajzlerowicz-26311934"
              aria-label="see me on linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn alt="see me on linkedin" />
            </a>
            <a
              href="https://steamcommunity.com/id/entity02"
              aria-label="see me on steam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Steam alt="see me on steam" />
            </a>

            <a
              href="mailto:nelf86@gmail.com"
              aria-label="sene me an email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Email alt="send me an email" />
            </a>
          </Col>
        </footer>
      </div>
    );
  }
}

export default Home;
