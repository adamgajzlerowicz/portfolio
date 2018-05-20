import React, { Component } from 'react';
import StackOverflow from 'react-icons/lib/fa/stack-overflow';
import Steam from 'react-icons/lib/fa/steam';
import Twitter from 'react-icons/lib/fa/twitter';
import LinkedIn from 'react-icons/lib/fa/linkedin';
import Github from 'react-icons/lib/fa/github';
import Email from 'react-icons/lib/fa/envelope';
import { Col } from 'react-bootstrap';
import Flag from 'react-world-flags'


import Article from './article';
import avatar from '../images/avatar.jpg';


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

const getClassName = index => index % 2 === 0 ? 'dark' : 'light';


// categories: fun, corporate, plugins, solo
const articles = [
  {
    image: 'placeholder.png',
    description: {
      pl : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ad deleniti temporibus libero pariatur, ratione, facere accusantium cumque vitae, nostrum at atque modi cum amet non, sit consequuntur enim! Maxime.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas blanditiis itaque quaerat, dolore voluptatum, debitis laborum placeat voluptates! Eos reiciendis nulla esse expedita totam vero at quae ullam! Explicabo, soluta.'
    },
    title: {
      pl: 'le name1',
      en: 'le name1'
    },
    category: 'application'
  },
  {
    image: 'placeholder.png',
    description: {
      pl : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ad deleniti temporibus libero pariatur, ratione, facere accusantium cumque vitae, nostrum at atque modi cum amet non, sit consequuntur enim! Maxime.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas blanditiis itaque quaerat, dolore voluptatum, debitis laborum placeat voluptates! Eos reiciendis nulla esse expedita totam vero at quae ullam! Explicabo, soluta.'
    },
    title: {
      pl: 'le name2',
      en: 'le name2'
    },
    category: 'application'
  },
  {
    image: 'placeholder.png',
    description: {
      pl : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ad deleniti temporibus libero pariatur, ratione, facere accusantium cumque vitae, nostrum at atque modi cum amet non, sit consequuntur enim! Maxime.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas blanditiis itaque quaerat, dolore voluptatum, debitis laborum placeat voluptates! Eos reiciendis nulla esse expedita totam vero at quae ullam! Explicabo, soluta.'
    },
    title: {
      pl: 'le name3',
      en: 'le name3'
    },
    category: 'application'
  },
  {
    image: 'placeholder.png',
    description: {
      pl : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ad deleniti temporibus libero pariatur, ratione, facere accusantium cumque vitae, nostrum at atque modi cum amet non, sit consequuntur enim! Maxime.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas blanditiis itaque quaerat, dolore voluptatum, debitis laborum placeat voluptates! Eos reiciendis nulla esse expedita totam vero at quae ullam! Explicabo, soluta.'
    },
    title: {
      pl: 'le name4',
      en: 'le name4'
    },
    category: 'application'
  },
];

const t = {
  jobTitle: {
    pl: 'Inżynier oprogramowania',
    en: 'Software developer'
  },
  pastProjects: {
    pl: 'Projekty',
    en: 'Past projects'
  },
  whatIDo:{
    pl: 'Co buduje?',
    en: 'What I create?',
  },
  motivationHeading: {
    pl: 'Moja motywacja',
    en: 'Motivation behind my work'
  },
  motivation: {
    pl: 'Lubię budować aplikacje które ułatwiają pracę i sprawiają że wykonywane zadania stają się  przyjemniejsze.',
    en: 'I like to create things that make people\'s live easier'
  },
  toolsIUse: {
    pl: 'Wybrane technologie',
    en: 'Tools I use'
  },
  whatICreate: {
    en: 'I create awesome web applications!',
    pl: 'Fantastyczne aplikacje internetowe!'
  }
}

class Home extends Component {
  constructor(props){
    super(props);

    const language = sessionStorage.getItem('language') || 'pl';

    this.state = { language };
  }

  render() {
    let index = 0;
    const otherLangage = this.state.language === 'pl' ? 'en' : 'pl';
    return (
      <div className="app">

        <header className={`app-header section-${getClassName(index++)}`}>
          <div
            onClick={()=>{
              this.setState({ language: otherLangage })
              sessionStorage.setItem('language', otherLangage);
            }}
            className="language">
              <Flag code={ otherLangage === 'pl' ? 'pl' : 'gb' } height="16"/>
          </div>
          <h1 className="app-title">Adam Gajzlerowicz</h1>
          <h2 className="app-sub-title">{t.jobTitle[this.state.language]}</h2>
          <div id="avatar" />
        </header>

        <main className="container">


          <section className={`section-${getClassName(index++)}`}>
            <div className="col-sm-6 col-sm-push-3 col-xs-12">
              <h1 className="section-heading">{t.whatIDo[this.state.language]}</h1>
              <p className="center-text article-content">{t.whatICreate[this.state.language]}</p>
              <p className="center-text article-content"> {t.motivation[this.state.language]} </p>
            </div>
          </section>


          <section className={`section-${getClassName(index++)}`}>
            <h1 className="section-heading">{t.pastProjects[this.state.language]}</h1>
              {articles.map((article)=><Article key={article.title.pl} {...article} language={this.state.language}/>)}
          </section>

        </main>
        <footer>
          <Col sm={4}> © {new Date().getFullYear()} Adam Gajzlerowicz </Col>

          <Col sm={8} className="footer-social">
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
