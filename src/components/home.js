/* global sessionStorage */

import React, { Component } from 'react';
import StackOverflow from 'react-icons/lib/fa/stack-overflow';
import Steam from 'react-icons/lib/fa/steam';
import Twitter from 'react-icons/lib/fa/twitter';
import LinkedIn from 'react-icons/lib/fa/linkedin';
import Github from 'react-icons/lib/fa/github';
import Email from 'react-icons/lib/fa/envelope';
import Down from 'react-icons/lib/fa/angle-down';
import { Col } from 'react-bootstrap';
import Flag from 'react-world-flags';


import Article from './article';


/**
  corporate and colaboration
  SME Professional
  Performance Horizon
  Shirts with buttons
  CSV extractor

  fun:
  Czy jest tarta
  O ktorej jest obiad
  Gajzlerek
  Skeletoon
  Another day another word

  plugins:
  React Select
  React Infini Grid
  Youtube muter chrome plugin

  solo:
  Chata małolata
  Wilson cater hire
  Lyles-Sutherland CRM
  New Future Me document database

  */

const getClassName = index => (index % 2 === 0 ? 'dark' : 'light');

/* eslint-disable-next-line */
const scrollToView = id => window.scroll({ top: document.getElementById(id).offsetTop, behavior: 'smooth' });

const articles = [
  {
    image: 'placeholder.png',
    description: {
      pl: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ad deleniti temporibus libero pariatur, ratione, facere accusantium cumque vitae, nostrum at atque modi cum amet non, sit consequuntur enim! Maxime.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas blanditiis itaque quaerat, dolore voluptatum, debitis laborum placeat voluptates! Eos reiciendis nulla esse expedita totam vero at quae ullam! Explicabo, soluta.',
    },
    title: {
      pl: 'le name1',
      en: 'le name1',
    },
    category: 'application',
  },
  {
    image: 'placeholder.png',
    description: {
      pl: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ad deleniti temporibus libero pariatur, ratione, facere accusantium cumque vitae, nostrum at atque modi cum amet non, sit consequuntur enim! Maxime.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas blanditiis itaque quaerat, dolore voluptatum, debitis laborum placeat voluptates! Eos reiciendis nulla esse expedita totam vero at quae ullam! Explicabo, soluta.',
    },
    title: {
      pl: 'le name2',
      en: 'le name2',
    },
    category: 'application',
  },
  {
    image: 'placeholder.png',
    description: {
      pl: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ad deleniti temporibus libero pariatur, ratione, facere accusantium cumque vitae, nostrum at atque modi cum amet non, sit consequuntur enim! Maxime.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas blanditiis itaque quaerat, dolore voluptatum, debitis laborum placeat voluptates! Eos reiciendis nulla esse expedita totam vero at quae ullam! Explicabo, soluta.',
    },
    title: {
      pl: 'le name3',
      en: 'le name3',
    },
    category: 'application',
  },
  {
    image: 'placeholder.png',
    description: {
      pl: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ad deleniti temporibus libero pariatur, ratione, facere accusantium cumque vitae, nostrum at atque modi cum amet non, sit consequuntur enim! Maxime.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas blanditiis itaque quaerat, dolore voluptatum, debitis laborum placeat voluptates! Eos reiciendis nulla esse expedita totam vero at quae ullam! Explicabo, soluta.',
    },
    title: {
      pl: 'le name4',
      en: 'le name4',
    },
    category: 'application',

  },
];

const t = {
  jobTitle: {
    pl: 'Inżynier oprogramowania',
    en: 'Software developer',
  },
  pastProjects: {
    pl: 'Projekty',
    en: 'Past projects',
  },
  whatIDo: {
    pl: 'Co tworzę?',
    en: 'What I create?',
  },
  motivationHeading: {
    pl: 'Moja motywacja',
    en: 'Motivation behind my work',
  },
  motivation: {
    pl: 'Lubię budować aplikacje które ułatwiają pracę i sprawiają że wykonywane zadania stają się  przyjemniejsze.',
    en: 'I like to create things that make people\'s live easier',
  },
  toolsIUse: {
    pl: 'Wybrane technologie',
    en: 'Tools I use',
  },
  whatICreate: {
    en: 'I create awesome web applications!',
    pl: 'Fantastyczne aplikacje internetowe!',
  },
  filter: {
    pl: 'Filtr',
    en: 'Filter',
  },
  fun: {
    pl: 'Dla przyjemności',
    en: 'fun',
  },
  corporate: {
    pl: 'Duże projekty',
    en: 'corporate',
  },
  plugins: {
    pl: 'Wtyczki',
    en: 'plugins',
  },
  solo: {
    pl: 'Projekty solo',
    en: 'solo',
  },
};

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
            <div className="col-sm-6 col-sm-push-3 col-xs-12 what-i-do-inner">
              <h1 className="section-heading">{t.whatIDo[language]}</h1>
              <h3 className="center-text">{t.whatICreate[language]}</h3>
              <h3 className="center-text"> {t.motivation[language]} </h3>
              <button onClick={() => scrollToView('portfolio')} className="down"><Down /></button>
            </div>
          </section>

          <section id="portfolio" className={`section-${getClassName(index++)}`}>
            <h1 className="section-heading">{t.pastProjects[language]}</h1>
            <h4> {t.filter[language]} </h4>
            <nav>
              <button> {t.fun[language]} </button> |
              <button> {t.corporate[language]} </button> |
              <button> {t.plugins[language]} </button> |
              <button> {t.solo[language]} </button> |
            </nav>
            {articles
              .filter(article => !filter || article.category === filter)
              .map(article => <Article key={article.title.pl} {...article} language={language} />)
            }
          </section>

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
