
/**
  corporate and colaboration
  SME Professional
  Performance Horizon
  CSV extractor

  fun:
  Czy jest tarta
  O ktorej jest obiad
  Gajzlerek
  Another day another word

  plugins:
  React Select
  React Infini Grid
  Youtube muter chrome plugin

  solo:
  Chata małolata
  Skeletoon
  Wilson cater hire
  Lyles-Sutherland CRM
  New Future Me document database

  */

const projects = [
  {
    image: 'sme.png',
    description: {
      pl: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ad deleniti temporibus libero pariatur, ratione, facere accusantium cumque vitae, nostrum at atque modi cum amet non, sit consequuntur enim! Maxime.',
      en: 'A biggest property letting platform in Scotland. That allows management of assets and makes daily managing of companies much easier.',
    },
    title: {
      pl: 'SME Professional',
      en: 'SME Professional',
    },
    category: 'corporate',
    technologies: ['php', 'silex', 'mysql', 'jquery'],
  },

  {
    image: 'phg.png',
    description: {
      pl: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ad deleniti temporibus libero pariatur, ratione, facere accusantium cumque vitae, nostrum at atque modi cum amet non, sit consequuntur enim! Maxime.',
      en: 'A large scale affiliate market platform that allows product advertisers monitor their relation with partners, making management part of their businesses much easier.',
    },
    title: {
      pl: 'Performance Horizon',
      en: 'Performance Horizon',
    },
    category: 'corporate',
    technologies: ['php', 'react', 'redux', 'mysql', 'redis', 'gitlab', 'REST', 'TDD'],
  },

  {
    image: 'data_processor.png',
    description: {
      pl: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ad deleniti temporibus libero pariatur, ratione, facere accusantium cumque vitae, nostrum at atque modi cum amet non, sit consequuntur enim! Maxime.',
      en: 'An application that processes a hudge amouts of data, usitilising multiple processors.',
    },
    title: {
      pl: 'Procesor danych',
      en: 'Data processor',
    },
    category: 'corporate',
    technologies: ['nodejs', 'mysql', 'unit testing'],
  },


  {
    image: 'czyjesttarta.png',
    description: {
      pl: '',
      en: 'An application that helps people to see how many pieces of tart there still are in the next room, making their lifes easier.',
    },
    title: {
      pl: 'Czy jest tarta',
      en: 'Is there tart',
    },
    category: 'fun',
    technologies: ['react', 'redux', 'websocket'],
  },

  {
    image: 'gajzlerek.png',
    description: {
      pl: '',
      en: 'Android app that sends easily text messages to a particular number and allows for precise tracking of which messages were delivered or not.',
    },
    title: {
      pl: 'Gajzlerek',
      en: 'Gajzlerek',
    },
    category: 'fun',
    technologies: ['react-native', 'session-storage', 'native-modules'],
  },

  {
    image: 'anotherdayanotherword.png',
    description: {
      pl: '',
      en: 'A Google Chrome plugin that uses Thesaurus for finding synonyms for selected words and replaces them on any website you enter.',
    },
    title: {
      pl: 'Another day another word',
      en: 'Another day another word',
    },
    category: 'fun',
    technologies: ['javascript', 'material-design', 'api', 'chrome-extension'],
  },

  {
    image: 'react-select.png',
    description: {
      pl: '',
      en: 'Library that provides searchable dropdown that allows hot options replacement. It made life of many people easier.',
    },
    title: {
      pl: 'React Select',
      en: 'React Select',
    },
    category: 'plugin',
    technologies: ['react', 'redux', 'webpack'],
  },

  {
    image: 'react-infini-grid.png',
    description: {
      pl: '',
      en: 'Libary which generates grid, alowing to display hundreds of tousends of items on one screen without pagination, showing only ones that are in a viewport. This makes developer\'s life so much easier!',
    },
    title: {
      pl: 'React Infini Grid',
      en: 'React Infini Grid',
    },
    category: 'plugin',
    technologies: ['react', 'redux', 'responsive design', 'flexbox'],
  },

  {
    image: 'muter.png',
    description: {
      pl: 'Wtyczka ściszająca reklamy na youtube.',
      en: 'Mute annoying youtube commercials with a chrome plugin. You don\'t need adblock anymore and advertisers still get their money!',
    },
    title: {
      pl: 'Youtube muter',
      en: 'Youtube muter',
    },
    category: 'plugin',
    technologies: ['vanilla javascript', 'chrome-extension'],
  },


  {
    image: 'chata-malolata.png',
    description: {
      pl: 'Aplikacja pozwalajaca na monitorowanie ilość dzieci w sali zabaw.',
      en: 'Helps company owners to monitor how many toddlers are on their business premisses, and now much their paretns will pay for their time!',
    },
    title: {
      pl: 'Chata małolata',
      en: 'Child\'s play',
    },
    category: 'solo',
    technologies: ['react', 'redux', 'electron', 'session storage'],
  },


  {
    image: 'skeletoon.png',
    description: {
      pl: '',
      en: 'A base for any application that uses modern backend, and provides basic api for user authorisation',
    },
    title: {
      pl: 'Skeletoon',
      en: 'Skeletoon',
    },
    category: 'solo',
    technologies: ['graphql', 'react', 'apollo', 'docker', 'JSON webtoken'],
  },

  {
    image: 'wilson.png',
    description: {
      pl: '',
      en: 'A system that allows preorder of quality cathering hire to your wedding. You don\'t need pen and paper anymore! Just add items directly to your requested list!',
    },
    title: {
      pl: 'Wynajem akcesoriow weselnych Wilsona',
      en: 'Wilson catering hire',
    },
    category: 'solo',
    technologies: ['laravel', 'mysql', 'php-deployer'],
  },

  {
    image: 'lyles-sutherland.png',
    description: {
      pl: '',
      en: '',
    },
    title: {
      pl: 'CRM dla firmy Lyles-Sutherland',
      en: 'Lyles-Sutherland CRM',
    },
    category: 'solo',
    technologies: ['symfony', 'e2e testing', 'react', 'mysql'],
  },

  {
    image: 'docstore.png',
    description: {
      pl: '',
      en: '',
    },
    title: {
      pl: 'Baza dokumentów dla New Future Me',
      en: 'New Future Me document database',
    },
    category: 'solo',
    technologies: ['laravel', 'mysql', 'migrations']
  },

];

export default projects;
