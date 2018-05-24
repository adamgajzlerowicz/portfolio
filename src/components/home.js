/* global sessionStorage */

import React, { Component } from 'react';
import StackOverflow from 'react-icons/lib/fa/stack-overflow';
import Steam from 'react-icons/lib/fa/steam';
import Twitter from 'react-icons/lib/fa/twitter';
import LinkedIn from 'react-icons/lib/fa/linkedin';
import Github from 'react-icons/lib/fa/github';
import Email from 'react-icons/lib/fa/envelope';
import Down from 'react-icons/lib/fa/angle-down';
import Up from 'react-icons/lib/fa/caret-up';
import { Col } from 'react-bootstrap';
import Flag from 'react-world-flags';
import FlipMove from 'react-flip-move';

import Article from './article';
import projects from '../projects';
import t from '../translations';

const getClassName = index => (index % 2 === 0 ? 'dark' : 'light');

/* eslint-disable-next-line */
const scrollToView = id => window.scroll({ top: document.getElementById(id).offsetTop, behavior: 'smooth' });

class Home extends Component {
  constructor(props) {
    super(props);
    const language = sessionStorage.getItem('language') || 'pl';
    this.state = { language, filter: null };
  }

  render() {
    const { language, filter } = this.state;
    let index = 1;
    const otherLangage = language === 'pl' ? 'en' : 'pl';

    return (
      <div className="app">
        <div
          onClick={() => {
            this.setState({ language: otherLangage });
            sessionStorage.setItem('language', otherLangage);
          }}
          className="language"
        >
          <Flag code={otherLangage === 'pl' ? 'pl' : 'gb'} height="16" />
        </div>

        <header className="app-header">
          <div id="avatar" />
          <h1 className="app-title">Adam Gajzlerowicz</h1>
          <h2 className="app-sub-title">{t.jobTitle[this.state.language]}</h2>
          <button onClick={() => scrollToView('what-i-do')} className="down"><Down /></button>
        </header>

        <main className="container">

          <section id="what-i-do" className={`center-text section-${getClassName(index++)}`}>
            <h1 className="section-heading flex">{t.whatIDo[language]}</h1>
            <h3 className="center-text center width flex">{t.whatICreate[language]}</h3>
            <h3 className="center-text center width flex"> {t.motivation[language]} </h3>
            <button onClick={() => scrollToView('portfolio')} className="down"><Down /></button>
          </section>

          <section id="portfolio" className={`section-${getClassName(index++)}`}>
            <div className="center width">
              <h1 className="section-heading">{t.pastProjects[language]}</h1>

              <nav>
                <button
                  onClick={() => this.setState({ filter: 'fun' })}
                  className={filter === 'fun' ? 'active' : ''}
                >
                  {t.fun[language]}
                </button>
                <button
                  onClick={() => this.setState({ filter: 'corporate' })}
                  className={filter === 'corporate' ? 'active' : ''}
                >
                  {t.corporate[language]}
                </button>
                <button
                  onClick={() => this.setState({ filter: 'plugin' })}
                  className={filter === 'plugin' ? 'active' : ''}
                >
                  {t.plugins[language]}
                </button>
                <button
                  onClick={() => this.setState({ filter: 'solo' })}
                  className={filter === 'solo' ? 'active' : ''}
                >
                  {t.solo[language]}
                </button>
                <button
                  onClick={() => this.setState({ filter: null })}
                  className={filter === null ? 'active' : ''}
                > {t.all[language]}
                </button>
              </nav>

              <FlipMove>
                {projects
                  .filter(article => !filter || article.category === filter)
                  .map(article => <Article key={article.title.pl} {...article} language={language} />)
                }
              </FlipMove>
            </div>

          </section>
          <Up onClick={() => scrollToView('portfolio')} className="up" />

        </main>
        <footer>
          <Col sm={4} xs={12}> © {new Date().getFullYear()} Adam Gajzlerowicz </Col>

          <Col sm={8} xs={12} className="footer-social">
            <a href="https://twitter.com/nelf86"><Twitter /></a>
            <a href="https://steamcommunity.com/id/entity02"><Steam /></a>
            <a href="https://www.linkedin.com/in/adam-gajzlerowicz-26311934"><LinkedIn /></a>
            <a href="https://github.com/adamgajzlerowicz"><Github /></a>
            <a href="https://stackoverflow.com/users/1333744/adam"><StackOverflow /></a>
            <a href="mailto:nelf86@gmail.com"><Email /></a>
          </Col>

        </footer>
      </div>
    );
  }
}

export default Home;
