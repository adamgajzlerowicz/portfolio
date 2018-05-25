
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
    image: 'phg.png',
    description: {
      pl: 'Dla świata - dominuąca firma na rynku afiliacyjnym. Dla mnia - PHP wielkiej skali.',
      en: 'A large scale affiliate market platform that allows product advertisers to monitor their partners and maintain the relationship.',
    },
    title: {
      pl: 'Performance Horizon',
      en: 'Performance Horizon',
    },
    category: 'corporate',
    technologies: ['php', 'react', 'redux', 'mysql', 'redis', 'gitlab', 'REST', 'TDD'],
  },

  {
    image: 'sme.png',
    description: {
      pl: 'Największa w Szkocji platforma do zarządzania biurami nieruchmości. Gigantyczna aplikacja do przechowywania danych dotyczących najemców, wynajmuących oraz danych finansowych.',
      en: 'A biggest property letting platform in Scotland. It allows management of company assets and storing data about tenants and many, many more',
    },
    title: {
      pl: 'SME Professional',
      en: 'SME Professional',
    },
    category: 'corporate',
    technologies: ['php', 'silex', 'mysql', 'jquery'],
  },


  {
    image: 'data_processor.png',
    description: {
      pl: 'Aplikacja przetwarzająca miliony krotek dziennie, weryfikując ich popranowc poprzez kontaktowanie się z zewnętrzym API.',
      en: 'An application that processes a huge amount of data, utilizing multiple processor cores, and verifying its integrity using external API',
    },
    title: {
      pl: 'Procesor danych',
      en: 'Data processor',
    },
    category: 'corporate',
    technologies: ['nodejs', 'mysql', 'unit testing', 'API'],
  },


  {
    image: 'czyjesttarta.png',
    description: {
      pl: 'Strona internetowa do sprawdzania ile kawałków zostało do zjedzenia w pokoju obok :)',
      en: 'A website for checking how many pieces of tart are still on the table... In the next room :)',
    },
    title: {
      pl: 'Czy jest tarta',
      en: 'Is there tart',
    },
    category: 'fun',
    technologies: ['react', 'redux', 'websocket', 'real time'],
  },

  {
    image: 'gajzlerek.png',
    description: {
      pl: 'Aplikacja na telefon Android, ulatwiający wysyłanie wiadomości sms na wybrany numer, oraz monitorowanie raportów ich doręcznia.',
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
      pl: 'Plugin do przeglądarki Chrome pomagający w nauce języka angielskieo poprzez podmianę wybranych wyrazów na ich synonimy, przez co wyraz którego chcemy się naucyczć będzie się pojawiać cześciej w tekście.',
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
      pl: 'Biblioteka do React udostępniająca komponent Dropdown, wspierający wyszkukiwanie oraz nawigację klawiszami.',
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
      pl: 'Biblioteka generuąca listę bardzo dużą liste elementów w jednym widoku, przy czym wszystkie niewidoczne elementy zostają usunięte w niewidoczny dla użytkownika sposób.',
      en: 'Library which generates grid, allowing to display hundreds of thousands of items on one screen without pagination, showing only ones that are in a viewport. This makes developer\'s life so much easier!',
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
      pl: 'Desktopowa aplikacja pozwalajaca na monitorowanie ilość dzieci w sali zabaw.',
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
      en: 'A base for any application that uses modern backend, and provides basic api for user authorization',
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
    technologies: ['laravel', 'mysql', 'migrations'],
  },

];

export default projects;