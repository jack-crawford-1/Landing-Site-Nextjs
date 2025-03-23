export const projects = [
  /* GARDEN*/
  {
    id: 1,
    image: '/projects/garden.mp4',
    image1: '/projects/garden.png',
    alt: 'Community garden',
    title: 'Community Garden',
    route: 'communitygarden',
    description:
      'A web app for locating, contributing to, and managing community gardens. Users can add garden locations with latitude and longitude coordinates and provide additional details. Features authentication, Prisma with SQLite for database management, and Google Maps API for mapping. Built with Next.js, TypeScript, and Tailwind CSS, focusing on backend integration and user-generated content.',
    githubUrl: 'https://github.com/jack-crawford-1/Community-Garden-App',
    insetImage: '/project/garden-1a.png',
    learnings:
      'I initially experimented with Leaflet.js due to its lightweight nature, but I quickly realised its limitations, particularly in built-in geocoding. Switching to Google Maps provided much more flexibility, however, I had to fine-tune the controls and UI elements. For file handling, Multer made the process of uploading images straightforward, but I encountered challenges with handling large file sizes and ensuring secure validation. Implementing proper MIME-type checks and file compression was necessary to prevent security vulnerabilities and optimise performance. When integrating authentication, NextAuth.js worked well, but I found that relying solely on in-memory sessions led to issues with persistence, especially across server restarts. Moving to a database-backed session storage significantly improved stability and ensured a more reliable auth flow for users.',

    icons: [
      {
        src: '/logos/next.png',
        alt: 'Next',
      },
      {
        src: '/logos/react.png',
        alt: 'React',
      },

      {
        src: '/logos/sqlite.png',
        alt: 'Sqlite',
      },
      {
        src: '/logos/tailwind.png',
        alt: 'Tailwind CSS',
      },
      {
        src: '/logos/typescript.png',
        alt: 'TypeScript',
      },
      {
        src: '/logos/prisma.png',
        alt: 'Prisma',
      },
      {
        src: '/logos/g-maps.png',
        alt: 'GoogleMaps',
      },
    ],
  },

  /* SUBSCRIBE*/
  {
    id: 2,
    image: '/projects/subscribe.mp4',
    image1: '/projects/subscribe.png',
    alt: 'Subscribe and Pay',
    title: 'Subscribe and Pay',
    route: 'subscribe',
    description:
      'A full-stack app for managing subscriptions and payments via Paystation’s OAuth and Hosted Purchases API. Subscriptions are stored in MongoDB only after a successful payment response. Implements authentication with JWT, bcrypt, and Express, with Mongoose for database management. Includes API routes for payments, subscription handling, and user authentication.',
    githubUrl: 'https://github.com/jack-crawford-1/Subscribe-and-Payments',
    insetImage: '/project/subscribe1a.png',
    icons: [
      {
        src: '/logos/react.png',
        alt: 'React',
      },

      {
        src: '/logos/vite.png',
        alt: 'Vite',
      },
      {
        src: '/logos/tailwind.png',
        alt: 'Tailewind CSS',
      },

      {
        src: '/logos/jwt.svg',
        alt: 'json web token',
      },
      {
        src: '/logos/node.png',
        alt: 'node',
      },

      {
        src: '/logos/nodemon.png',
        alt: 'nodemon',
      },
      {
        src: '/logos/mongodb.png',
        alt: 'MongoDB',
      },
    ],
  },

  /* HIKING*/
  {
    id: 3,
    image: '/projects/hiking.mp4',
    image1: '/projects/hiking.png',
    alt: 'Custom Map',
    title: 'DOC Hiking Trails',
    route: 'hiking',
    description:
      'A full-stack web app for finding, sharing, and managing hiking trails. Uses Google Maps API for route visualisation, external APIs for location data, and PostgreSQL for database storage. Implements authentication, geospatial data handling, and API optimisation. Built as a project to explore integrating mapping tools with backend data, handling route overlays, elevation data, and custom user markers.',
    githubUrl: 'https://github.com/jack-crawford-1/Hiking-App',
    insetImage: '/project/hiking1a.png',
    learnings:
      '​In developing a hiking application, integrating GeoJSON data with Google Maps proved essential. Utilising the Google Maps API as the base, the project incorporated topographical overlays from Land Information New Zealand (LINZ) via an XYZ tile service API, enhancing map detail. The Department of Conservation (DOC) provided GeoJSON datasets for huts and tracks, which required conversion from the NZTM2000 coordinate system to WGS84 to ensure compatibility with Google Maps. The Proj4 JavaScript library facilitated this transformation. Initially, individual points of interest were displayed as markers; however, to represent entire trails, DOCs API endpoints were utilised to fetch trail data, which was then rendered as polylines on the map.',
    icons: [
      {
        src: '/logos/react.png',
        alt: 'React',
      },
      {
        src: '/logos/maptiler.png',
        alt: 'Mapbox',
      },
      {
        src: '/logos/g-maps.png',
        alt: 'google maps',
      },
      {
        src: '/logos/proj4.png',
        alt: 'proj 4',
      },

      {
        src: '/logos/express.png',
        alt: 'express ',
      },
      {
        src: '/logos/jwt.svg',
        alt: 'json web token',
      },
      {
        src: '/logos/psql.png',
        alt: 'MongoDB',
      },
    ],
  },

  /* KEYBOARD*/
  {
    id: 4,
    image: '/projects/keys.mp4',
    image1: '/projects/keys.png',
    alt: 'Keyboard',
    title: 'Tonejs Keyboard',
    route: 'minipiano',
    description:
      'A mini piano app built with React, TypeScript, and Tone.js for real-time sound synthesis. Implements state management to track key presses, play chords, and handle user interactions. Uses custom event listeners for keyboard input and dynamic audio rendering. Focuses on working with audio libraries, handling real-time input, and optimising sound playback.',
    githubUrl: 'https://github.com/jack-crawford-1/Keyboard-Player-React',
    insetImage: '/project/piano.png',
    learnings:
      'The main challenge was managing the state to handle real-time key presses, especially for combining keys to play minor or seventh chord. Using React useState to track which keys were pressed and useEffect to manage keydown and keyup event listeners was the clear choice. Playing with the config for the oscillator and envelope parameters made the sound to be more realistic and mapping over the chords on screen and using useState worked to show which chords are being played. ',
    icons: [
      {
        src: '/logos/react.png',
        alt: 'React',
      },

      {
        src: '/logos/vite.png',
        alt: 'Vite',
      },
      {
        src: '/logos/css.png',
        alt: 'Tailwind CSS',
      },
      {
        src: '/logos/typescript.png',
        alt: 'TypeScript',
      },
      {
        src: '/logos/tonejs.png',
        alt: 'Tonejs',
      },
    ],
  },

  /* KANBAN*/
  // {
  //   image: '/project/kanban.mp4',
  //   alt: 'Kanban board',
  //   title: 'Kanban Board',
  //   route: 'kanban',
  //   description:
  //     'A Kanban Board application built with React and TypeScript, featuring drag-and-drop functionality using dnd-kit. Users can create, update, and delete tasks and columns, with data stored in local storage.',
  //   githubUrl: 'https://github.com/jack-crawford-1/Kanban-Board-React',
  //   icons: [
  //     {
  //       src: '/icons/react.png',
  //       alt: 'React',
  //     },

  //     {
  //       src: '/icons/vite.png',
  //       alt: 'Vite',
  //     },
  //     {
  //       src: '/icons/tailwind.png',
  //       alt: 'Tailwind CSS',
  //     },
  //     {
  //       src: '/icons/typescript.png',
  //       alt: 'TypeScript',
  //     },
  //     {
  //       src: '/icons/dnd.svg',
  //       alt: 'dnd-kit',
  //     },
  //   ],
  // },

  /* POKEMON*/
  // {
  //   image: '/project/pokemon.mp4',
  //   alt: 'pokemon battle game',
  //   title: 'Turn-Based Pokemon Game',
  //   route: 'pokemon',
  //   description:
  //     'A turn-based Pokémon battle game using data from the PokeAPI. Players select Pokémon and battle an AI opponent, with damage calculations based on Pokémon stats. Built with React.',
  //   githubUrl: 'https://github.com/jack-crawford-1/Pokemon-Game-Reactjs',
  //   icons: [
  //     {
  //       src: '/icons/react.png',
  //       alt: 'React',
  //     },

  //     {
  //       src: '/icons/vite.png',
  //       alt: 'Vite',
  //     },
  //     {
  //       src: '/icons/tailwind.png',
  //       alt: 'Tailwind CSS',
  //     },
  //     {
  //       src: '/icons/typescript.png',
  //       alt: 'TypeScript',
  //     },
  //   ],
  // },

  /* GUESS WHO*/
  // {
  //   image: '/project/guesswho.mp4',
  //   alt: 'Guess who board',
  //   title: 'Guess Who Game',
  //   route: 'toguesswhom',
  //   description:
  //     'A digital version of Guess Who, where users ask questions about attributes to determine the character. Uses a decision tree for logical deductions and React Spring for animations and transitions.',
  //   githubUrl: 'https://github.com/jack-crawford-1/Guess-Who-Clone-React',
  //   icons: [
  //     {
  //       src: '/icons/react.png',
  //       alt: 'React',
  //     },

  //     {
  //       src: '/icons/vite.png',
  //       alt: 'Vite',
  //     },
  //     {
  //       src: '/icons/tailwind.png',
  //       alt: 'Tailwind CSS',
  //     },
  //     {
  //       src: '/icons/typescript.png',
  //       alt: 'TypeScript',
  //     },
  //   ],
  // },
];
