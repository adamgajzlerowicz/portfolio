
const projects = [



  {
    image: 'sme.jpeg',
    description: {
      pl: 'Największa w Szkocji platforma do zarządzania biurami nieruchmości. Gigantyczna aplikacja do przechowywania danych dotyczących najemców, wynajmuących oraz danych finansowych.',
      en: 'A biggest property letting platform in Scotland. It allows management of company assets and storing data about tenants and much, much more',
    },
    title: {
      pl: 'SME Professional',
      en: 'SME Professional',
    },
    category: 'corporate',
    technologies: ['php', 'silex', 'mysql', 'jquery'],
  },


  {
    image: 'data_processor.jpeg',
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
    image: 'czyjesttarta.jpeg',
    description: {
      pl: 'Strona internetowa do sprawdzania ile kawałków zostało do zjedzenia w pokoju obok :)',
      en: 'A website for checking how many pieces of tart are still on the table... In the next room :)',
    },
    title: {
      pl: 'Czy jest tarta',
      en: 'Is there a tart',
    },
    category: 'fun',
    technologies: ['react', 'redux', 'websocket', 'real time'],
  },

  {
    image: 'phg.jpeg',
    description: {
      pl: 'Dla świata - dominuąca firma na rynku afiliacyjnym. Dla mnie - PHP wielkiej skali.',
      en: 'A large scale affiliate market platform that allows product advertisers to monitor their partners and maintain the relationship.',
    },
    title: {
      pl: 'Performance Horizon',
      en: 'Performance Horizon',
    },
    category: 'corporate',
    technologies: ['php', 'react', 'redux', 'mysql', 'redis', 'gitlab', 'rest', 'tdd'],
  },

  {
    image: 'gajzlerek.png',
    description: {
      pl: 'Aplikacja na telefon Android, ułatwiający wysyłanie wiadomości sms na wybrany numer, oraz monitorowanie raportów ich doręcznia.',
      en: 'Android app that sends easily text messages to a particular number and allows for precise tracking of which messages were delivered and which not.',
    },
    title: {
      pl: 'Gajzlerek',
      en: 'Gajzlerek',
    },
    category: 'fun',
    technologies: ['react-native', 'session-storage', 'native-modules'],
  },

  {
    image: 'anotherdayanotherword.jpeg',
    description: {
      pl: 'Plugin do przeglądarki Chrome pomagający w nauce języka angielskieo poprzez podmianę wybranych wyrazów na ich synonimy, przez co wyraz którego chcemy się nauczyć będzie się pojawiać cześciej w tekście.',
      en: 'A Google Chrome plugin that uses Thesaurus for finding synonyms for selected words and replaces them inside of content on any website you enter.',
    },
    title: {
      pl: 'Another day another word',
      en: 'Another day another word',
    },
    category: 'fun',
    technologies: ['javascript', 'material-design', 'api', 'chrome-extension'],
  },

  {
    image: 'react-select.jpeg',
    description: {
      pl: 'Biblioteka do React udostępniająca komponent Dropdown, wspierający wyszkukiwanie oraz nawigację klawiszami.',
      en: 'Library that provides searchable dropdown component supporting keyboard navigation. It made life of many people way easier.',
    },
    title: {
      pl: 'React Select',
      en: 'React Select',
    },
    category: 'plugin',
    technologies: ['react', 'redux', 'webpack'],
  },

  {
    image: 'react-infini-grid.jpeg',
    description: {
      pl: 'Biblioteka generuąca listę bardzo dużą liste elementów w jednym widoku, przy czym wszystkie niewidoczne elementy zostają usunięte w niewidoczny dla użytkownika sposób.',
      en: 'Library which generates grid, allowing to display hundreds of thousands of items on one screen without pagination, showing only ones that are in a viewport. There is need to implement pagination for the data set.',
    },
    title: {
      pl: 'React Infini Grid',
      en: 'React Infini Grid',
    },
    category: 'plugin',
    technologies: ['react', 'redux', 'responsive design', 'flexbox'],
  },

  {
    image: 'muter.jpeg',
    description: {
      pl: 'Wtyczka ściszająca reklamy na youtube. Jest to alternatywa dla adblocka, gdzie reklamy sa wyswietlane, lecz bez dzwięku.',
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
    image: 'chata-malolata.jpeg',
    description: {
      pl: 'Desktopowa aplikacja pozwalajaca na monitorowanie ilość dzieci w sali zabaw.',
      en: 'Helps company owners to monitor how many toddlers are on their business premisses, and how much money their parents will pay for their stay!',
    },
    title: {
      pl: 'Chata małolata',
      en: 'Child\'s play',
    },
    category: 'solo',
    technologies: ['react', 'redux', 'electron', 'session storage'],
  },



  {
    image: 'wilson.jpeg',
    description: {
      pl: 'Aplikacja internetowa która pozwala na dodanie wynajmowanych akresoriów weselnych do koszyka, przyspieszający czas i realizaję zamówienia.',
      en: 'A system that allows preorder of quality catering hire to a wedding. You don\'t need pen and paper for this anymore! Just add items directly to your request list!',
    },
    title: {
      pl: 'Wynajem akcesoriow weselnych',
      en: 'Wilson catering hire',
    },
    category: 'solo',
    technologies: ['laravel', 'mysql', 'php-deployer'],
  },

  {
    image: 'lyles-sutherland.jpeg',
    description: {
      pl: 'Aplikacja wewnętrzna Lyles-Sutherland, wykożystywana do celów administracyjnych',
      en: 'Internal CRM application for Lyles-Sutherland, used for company administration tasks.',
    },
    title: {
      pl: 'CRM dla firmy Lyles-Sutherland',
      en: 'Lyles-Sutherland CRM',
    },
    category: 'solo',
    technologies: ['symfony', 'e2e testing', 'react', 'mysql'],
  },

  {
    image: 'docstore.jpeg',
    description: {
      pl: 'Baza do zamieszczania i udostepniania dokumentów studentom przypisanym do danego kursu.',
      en: 'Document upload and student management database.',
    },
    title: {
      pl: 'New future me',
      en: 'New future me',
    },
    category: 'solo',
    technologies: ['laravel', 'mysql', 'migrations'],
  },


  {
    image: 'skeletoon.jpeg',
    description: {
      pl: 'Pakiet startowy dla dowolnej aplikacji. Wspierją komunikację z bazą danych, rejestrację użytkowników i zabezpieczanie ścieżek url.',
      en: 'A base for any application that uses modern backend, and provides basic api for user authorization.',
    },
    title: {
      pl: 'Skeletoon',
      en: 'Skeletoon',
    },
    category: 'solo',
    technologies: ['graphql', 'react', 'apollo', 'docker', 'json webtoken'],
  },

];

export default projects;
