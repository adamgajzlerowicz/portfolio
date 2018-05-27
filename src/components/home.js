/* global sessionStorage */

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
import PL from 'svg-country-flags/svg/pl.svg';
import GB from 'svg-country-flags/svg/gb.svg';

import Article from './article';
import projects from '../projects';
import t from '../translations';
import { scrollToView } from '../utils';

const getClassName = index => (index % 2 === 0 ? 'dark' : 'light');

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

    let nextId = projects[1].title[language].split(' ').join('');

    return (
      <div className="app">
        <div
          onClick={() => {
            this.setState({ language: otherLangage });
            sessionStorage.setItem('language', otherLangage);
          }}
          className="language"
        >
          {language === 'pl' && <img src={GB} height="16" alt="change display language to english" />}
          {language === 'en' && <img src={PL} height="16" alt="ustaw jezyk polski" />}

        </div>

        <header className="app-header">
          <div id="avatar" />
          <h1 className="app-title">Adam Gajzlerowicz</h1>
          <h2 className="app-sub-title">{t.jobTitle[this.state.language]}</h2>
          <button onClick={() => scrollToView('what-i-do')} className="down"><Down alt="go to what i do section" /></button>
        </header>

        <main className="container">

          <section id="what-i-do" className={`center-text section-${getClassName(index++)}`}>
            <h1 className="section-heading flex">{t.whatIDo[language]}</h1>
            <h3 className="center-text center width flex">{t.whatICreate[language]}</h3>
            <h3 className="center-text center width flex"> {t.motivation[language]} </h3>
            <button onClick={() => scrollToView('portfolio')} className="down"><Down alt="go to my portfolio" /></button>
          </section>

          <section id="portfolio" className={`section-${getClassName(index++)}`}>
            <div className="center width">
              <h1 className="section-heading">{t.pastProjects[language]}</h1>

              <nav>
                <button
                  onClick={() => this.setState({ filter: null })}
                  className={filter === null ? 'active' : ''}
                > {t.all[language]}
                </button>

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

              </nav>

              <FlipMove>
                {projects
                  .filter(project => !filter || project.category === filter)
                  .map((project, projectIndex, projectsClosure) => {
                      if (projectIndex >= projectsClosure.length - 1) {
                        nextId = null;
                      } else {
                        nextId = projectsClosure[projectIndex + 1].title[language].split(' ').join('');
                      }

                    return (
                      <Article
                        key={project.title.pl}
                        {...project}
                        language={language}
                        currentId={project.title[language].split(' ').join('')}
                        nextId={nextId}
                      />
                    );
                })
                }
              </FlipMove>
            </div>


          </section>
          <section className="section-dark up-container">
            <button onClick={() => scrollToView('portfolio')} className="up"><Up alt="go up to portfolio section" /></button>
          </section>
        </main>
        <footer>
          <Col sm={4} xs={12}> © {new Date().getFullYear()} Adam Gajzlerowicz </Col>

          <Col sm={8} xs={12} className="footer-social">
            <a href="https://twitter.com/nelf86" target="_blank" rel="noopener noreferrer" ><Twitter alt="see me on twitter" /></a>
            <a href="https://steamcommunity.com/id/entity02" target="_blank" rel="noopener noreferrer" ><Steam alt="see me on steam" /></a>
            <a href="https://www.linkedin.com/in/adam-gajzlerowicz-26311934" target="_blank" rel="noopener noreferrer" ><LinkedIn alt="see me on linkedin" /></a>
            <a href="https://github.com/adamgajzlerowicz" target="_blank" rel="noopener noreferrer" ><Github alt="see me on github" /></a>
            <a href="https://stackoverflow.com/users/1333744/adam" target="_blank" rel="noopener noreferrer" ><StackOverflow alt="see me on stack overflow" /></a>
            <a href="mailto:nelf86@gmail.com" target="_blank" rel="noopener noreferrer" ><Email alt="send me an email" /></a>
          </Col>

        </footer>
      </div>
    );
  }
}

export default Home;
