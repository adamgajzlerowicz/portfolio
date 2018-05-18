import React, { Component } from 'react';
import Article from './article';

const LANGUGE = 'en';

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
  whatDoIDo:{
    pl: 'Czym się zajmuję',
    en: 'What do I do',
  },



}

class Home extends Component {
  render() {
    return (
      <div className="app">

        <header className="app-header">
          <h1 className="app-title">Adam Gajzlerowicz</h1>
          <h2 className="app-sub-title">{t.jobTitle[LANGUGE]}</h2>
        </header>

        <main className="container">

          <section className="section-light">
            <h1 className="section-heading">{t.pastProjects[LANGUGE]}</h1>
            {articles.map((article)=><Article key={article.title.pl} {...article} />)}
          </section>

          <section className="section-dark">
            <h1 className="section-heading">{t.pastProjects[LANGUGE]}</h1>
            <article>
              <dl>
                <dt>Front-end</dt>
                  <dd>Javascript, React, Redux, CSS3, ES6</dd>
                <dt>Back-end</dt>
                  <dd>Rest API, Graphql, NodeJS, PHP, Relational Databases</dd>
                <dt>Apps</dt>
                  <dd>Mobile, Electron</dd>
                <dt>CMS</dt>
                  <dd>Home made CMS</dd>
                </dl>
              </article>
          </section>

        </main>
        <footer>
          © {new Date().getFullYear()} Adam Gajzlerowicz

        </footer>
      </div>
    );
  }
}

export default Home;
