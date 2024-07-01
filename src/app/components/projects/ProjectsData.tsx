interface Project {
  projectName: string
  projectLink: string
  imageSrc: string
  altText: string
  description: string
  comments?: string
  feature1?: string
  feature2?: string
  feature3?: string
  feature4?: string
  feature5?: string
  future?: string
  technologies: string[]
  learnings?: string
  githubLink: string
}

export const projectsData: Record<string, Project> = {
  weatherapi: {
    projectName: 'Weather API',
    projectLink: 'https://weather-api.pushed.nz/',
    imageSrc: '/w.png',
    altText: 'Weather API Project',
    description:
      'Allows users to see weather forecasts, including current conditions, temperature, and wind data. This project was a chance to practice using external APIs and deploying a live site with included dotenv files. I based the location on my hometown of Wellington, New Zealand and used the MeteoSource API to source the data.',
    technologies: [
      'React',
      'Express',
      'superagent',
      'TypeScript',
      'Tailwind CSS',
      'Weather API',
      'React-spinner',
      'Vite',
    ],
    githubLink: 'https://github.com/jack-crawford-1/weather-api',
  },
  communitygarden: {
    projectName: 'Community Garden',
    projectLink: '',
    imageSrc: '/gardenmap.png',
    altText: 'Community Garden Project',
    description:
      'This was a personal project that allows users to find, share, and manage green spaces or community gardens. This was built during bootcamp as a solo project allowing me to practice full-stack development including authentication and database management, as well as integrating external APIs for location and information, and mapping services from Google Maps API. Have deployed a previous version of this project using Dokku and plan to deploy this version to Vercel.',
    technologies: [
      'Next JS',
      'Next Auth',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'SQLite3',
      'Google Maps API',
      'Multer',
      'Dotenv',
    ],
    githubLink: 'https://github.com/jack-crawford-1/garden-map',
  },
  todoapp: {
    projectName: 'Todo App',
    projectLink: 'https://todo-fullstack.pushed.nz/',
    imageSrc: '/todo-project.png',
    altText: 'Todo App Project',
    description:
      ' The Todo app allow for full CRUD operations on a database with user authentication and protected routes. This was my first time using auth0 for authentication and was a great opportunity to practice full-stack development with React and Express. The app wil show only todos for the specific user that is logged in.',
    technologies: [
      'React',
      'Express',
      'express-jwt',
      'auth0',
      'TypeScript',
      'sqlite3',
      'superagent',
      'react-query',
      'Vite',
    ],
    githubLink: 'https://github.com/jack-crawford-1/fullstack-todo-app',
  },
  nasaapi: {
    projectName: 'Nasa API',
    projectLink: '',
    imageSrc: '/nasa-img.png',
    altText: 'Nasa API Project',
    description:
      '(NOT CURRENTLY DEPLOYED) This app allows users to view the Image Of The Day sourced from the NASA API with React and TypeScript. It was a fun way to practice using external APIs and a good excuse to look at pictures of space.',
    technologies: [
      'React',
      'Express',
      'TypeScript',
      'NASA API',
      'Superagent',
      'Dotenv',
      'Vite',
    ],
    githubLink: 'https://github.com/jack-crawford-1/nasa-api.git',
  },
  pokemonapi: {
    projectName: 'PokemonAPI',
    projectLink: 'https://pokedex-api-sage.vercel.app/',
    imageSrc: '/pokemon-project.png',
    altText: 'Pokemon Project',
    description:
      'This app allows users to view detailed information on their favorite Pokemon. Using React Router and the Pokemon API and deployed through Vercel, this was an extension of a challenge in class to practice using external APIs and routing in React.',
    technologies: [
      'React',
      'Express',
      'TypeScript',
      'Poke API',
      'React Router',
      'Vite',
    ],
    githubLink: 'https://github.com/jack-crawford-1/Pokedex',
  },
  groupproject: {
    projectName: 'DevAcademy Group Project',
    projectLink: 'https://optimisticweather.pushed.nz/',
    imageSrc: '/ow.png',
    altText: 'Group Project',
    description:
      'This was our final group project during bootcamp, a weather app that allows users to find activities and events for a specific location based on the weather forecast. This was build over 5 days with a team of 4 developers and was a great opportunity to practice working in an agiile environment based on real-world conditions where we problem solved as a group and worked on a shared codebase using git and GitHub',
    technologies: [
      'React',
      'Express',
      'Knex',
      'sqlite3',
      'TypeScript',
      'openai',
      'Weather API',
      'EventFinda API',
      'supertest',
    ],
    githubLink: 'https://github.com/tohora-2024/optimisticweather',
  },
  minipiano: {
    projectName: 'Mini Piano using Tone.js',
    projectLink: '',
    imageSrc: '/piano.png',
    altText: 'Piano app Tone.js with React',
    description:
      "A mini piano app that uses React with custom CSS for the UI, TypeScript for type safety, and Tone.js for the sound synthesis. It uses React's state management and event handling to manage key presses and chord playback. The app also leverages hooks like useState and useEffect to handle real-time updates and user interactions.",
    comments:
      'Working on this project was a lot of fun, especially as someone who enjoys music. It was rewarding to see the app come together and to be able to play actual tunes on a virtual piano. In hindsigt, I propbably would have gone with a guitar or ukulele as I know how to play those instruments and might have been able to try some more complex chords.',
    technologies: ['React', 'Tone.js', 'TypeScript', 'CSS', 'Vite'],
    learnings:
      'One of the main challenges was managing the state of the application to handle real-time key preses and audio playback. I learned a lot about how to manage state in React and how to use hooks to handle user interactions and updates in real-time. I also learned a lot about how to use Tone.js to create and manage audio in the browser, and how to use TypeScript to ensure type safety in my codebase',
    future:
      'In the future, Id like to add support for more octaves and more complex chords, as well as the ability to record and playback user input. I would also like to add more features like a metronome and a drum machine.',
    githubLink: 'https://github.com/jack-crawford-1/Piano-app-tonejs-react',
  },

  boilerplate: {
    projectName: 'React / Express Boilerplate: Fullstack',
    projectLink: 'https://boilerplate.pushed.nz/',
    imageSrc: '/boilerplate.png',
    altText: 'Fullstack Boilerplate Project',
    description: `This full-stack app boilerplate leverages modern technologies and best practices to provide a robust foundation for building web applications. The project includes authentication setup using Auth0 and features well-structured API endpoints for both server-side functionality and external data fetching. Internal routes handle server-side logic and responses, while external routes use fetch and superagent to retrieve data from third-party APIs.`,
    comments: `This was an extension of a template used in a class while at bootcamp. I wanted to be able to quickly spin up a full stack website with React and Express and have it be ready to deploy with a usable interface, authentication, and database. I spent some time making sure the code was clean and well organised so that I could easily update it in the future.`,
    feature1: `Authentication: Secure user authentication using Auth0, ensuring that user data is protected and that access is granted only to authorised users.`,
    feature2: ` API: The application features well-structured API interactions, utilising fetch and superagent to handle external data requests.`,
    feature3: `Database Management: Database operations are managed using Knex and SQLite. This setup allows for data handling and storage.`,
    feature4: `Reusable Components: The project is built with a modular component structure, which promotes ease of use and maintenance. Components are organised in a way that allows for easy reuse across different parts of the application.`,
    feature5: `Middleware: Custom middleware functions are included for purposes such as logging. This adds an additional layer of functionality and control over the data flow within the application.`,
    learnings: `This project was a great opportunity to practice full-stack development and to learn more about the technologies involved in building a modern web application. I gained experience in setting up and managing authentication, working with APIs, and structuring a full-stack project for scalability and maintainability. I had not split certain part of code up in the past so was interesting to see how that could be done into things like controllers vs routes and better use of props. This has made me think more about how I can structure my code in the future and how I can make it more maintainable.`,
    future: `I would like to add a testing suite to the project to ensure that the code is robust and that future changes do not introduce bugs. I would also like to improve error handling and loading states to provide a better user experience. This will likely morph over time as tech changes and I get more experience in other areas. Animations and transitions would a fun extra and may look at trying out Three.js for some 3D elements.`,
    technologies: [
      'React',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'Auth0',
      'Knex',
      'SQLite',
      'Jsonwebtoken',
      'Superagent',
      'TypeScript',
      'Vite',
    ],
    githubLink: 'https://github.com/jack-crawford-1/React-Express-Boilerplate',
  },
}
