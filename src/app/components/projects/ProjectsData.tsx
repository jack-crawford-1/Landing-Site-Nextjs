export const projectsData: Record<string, Project> = {
  // weatherapi: {
  //   projectName: 'Weather API',
  //   projectLink: 'https://weather-api.pushed.nz/',
  //   imageSrc: '/project/w.png',
  //   altText: 'Weather API Project',
  //   description:
  //     'Allows users to see weather forecasts, including current conditions, temperature, and wind data. This project was a chance to practice using external APIs and deploying a live site with included dotenv files. I based the location on my hometown of Wellington, New Zealand and used the MeteoSource API to source the data.',
  //   comments: '',
  //   learnings:
  //     'It was a good way to practice accessing data at various endpoints and using using Superagent to access the data from the backend. I was interested in deploying the site and using dotenv to keep my API key secure and how I would go about linking the api key in production. I also wanted to included a night mode toggle and spent a bit of time on the CSS to include a custom background. This ended up being a fun back and forward setting up state and using the ternary operator to change the background and text colours.',
  //   future:
  //     'I would like to clean up the UI on mobile devices and add search functionality for other locations. I would also like to add the ability to log in and save a users favourite location',
  //   feature1: '',
  //   technologies: [
  //     'React',
  //     'Express',
  //     'superagent',
  //     'TypeScript',
  //     'Tailwind CSS',
  //     'Weather API',
  //     'React-spinner',
  //     'Vite',
  //   ],
  //   githubLink: 'https://github.com/jack-crawford-1/weather-api',
  //   photos: ['/project/wd2.png', '/project/wd1.png'],
  // },

  communitygarden: {
    projectName: 'Community Garden',
    projectLink: '',
    imageSrc: '/project/gardenmap.png',
    altText: 'Community Garden Project',
    description:
      'This was a personal project that allows users to find, share, and manage green spaces or community gardens. This was built during down-time at the DevAcademy bootcamp as a solo project allowing me to practice full-stack development. Included authentication and database management, as well as integrating external APIs for location and information, and mapping services from Google Maps API.',
    comments:
      'Having spent my 20s living in Melbourne and seeing the poularity of community gardens there, I wanted to create a platform that would allow people to find and share green spaces in their local area but tagging a latitude and longitude on a map, and creating a landing page with site details other users can see. The idea was that people could "propose" a potential site that is not in use and this would allow others to connect and hopefully utilise the space.',
    learnings:
      'I wanted to practice using the Google Maps API and see how I could integrate it with a database and user authentication. I had initially started off using Leaf.js which incorporates OpenStreetMaps but swapped to the Google API when I was looking to inprove the styling. I also wanted to practice using Prisma and SQLite3 for the database, specifically how a user would be able to upload images. I was interested in getting a better hang of Next Auth for authentication and see how I could use it to protect routes and data with the goal of only allowing the user who created the site to edit or delete it. I managed to set up a user profile page from the user data which helped when it came to pre-populating forms with the users info.',
    future:
      'Comment sections for each site would be a big improvement, allowing users to chat or comment on details about a site. Maybe they have legal or speciic skills that could help with the site. I would also like to add a search function to find sites in a specific area and a way to filter sites by tags or categories. I would also like to add a way to upload multiple images to add protected routes.',
    feature1: '',
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
    photos: ['/project/gm1.png', '/project/gm2.png'],
  },

  // todoapp: {
  //   projectName: 'Todo App',
  //   projectLink: 'https://todo-fullstack.pushed.nz/',
  //   imageSrc: '/project/todo-project.png',
  //   altText: 'Todo App Project',
  //   description:
  //     ' The Todo app allow for full CRUD operations on a database with user authentication and protected routes. This was my first time using auth0 for authentication and was a great opportunity to practice full-stack development with React and Express. The app wil show only todos for the specific user that is logged in.',
  //   comments: '',
  //   learnings:
  //     'I learnt a lot about setting up and managing authentication with Auth0 and integrating it with a full-stack application. It was also a good chance to practice creating protected routes and making sure that users can only access their own data. I spent some time working on the UI to make it clean and user-friendly, and it was interesting to see how different libraries like React Query can simplify data fetching and state management.',
  //   future:
  //     'In the future   (should have probably called this section "to do"...), I would like to add the ability to set reminders for todos and integrate with a calendar API as well as checking off a task as complete without deleting fully.',

  //   feature1: '',
  //   technologies: [
  //     'React',
  //     'Express',
  //     'express-jwt',
  //     'auth0',
  //     'TypeScript',
  //     'sqlite3',
  //     'superagent',
  //     'react-query',
  //     'Vite',
  //   ],
  //   githubLink: 'https://github.com/jack-crawford-1/fullstack-todo-app',
  // },

  // nasaapi: {
  //   projectName: 'NASA API',
  //   projectLink: '',
  //   imageSrc: '/project/nasa-img.png',
  //   altText: 'Nasa API Project',
  //   description:
  //     'This app allows users to view the Image Of The Day sourced from the NASA API with React and TypeScript. It was a fun way to practice using external APIs and a good excuse to look at pictures of space.',
  //   comments: '',
  //   learnings:
  //     'I learnt that that NASA takes some epic pictures of space! I also spent some time making sure the API key in use with secure if the app was to be deployed in future. I was interested in using Superagent to fetch the data from the backend and how tokens could be used to access the data. Typescript came in handy when accessing the data and making sure the data was in the correct format and helped me get my head around some of the complex data structures available.',
  //   future:
  //     'I would like to add a search function to find images from a specific date which would involve introducing a filer. I would also like to add a way to save images to a user profile and maybe add a way to share images with other users. The styling is also very basic so I would like to spruce that up a bit.',
  //   feature1: '',
  //   technologies: [
  //     'React',
  //     'Express',
  //     'TypeScript',
  //     'NASA API',
  //     'Superagent',
  //     'Dotenv',
  //     'Vite',
  //   ],
  //   githubLink: 'https://github.com/jack-crawford-1/nasa-api.git',
  // },

  // pokemonapi: {
  //   projectName: 'PokemonAPI',
  //   projectLink: 'https://pokedex-api-sage.vercel.app/',
  //   imageSrc: '/project/pokemon-project.png',
  //   altText: 'Pokemon Project',
  //   description:
  //     'This app allows users to view detailed information about their favorite Pokémon. Built with React Router and the Pokémon API, and deployed via Vercel. Pokémon was huge when I was a kid, and if 10-year-old me knew how to code, this is definitely what I would have made',
  //   comments: ' ',
  //   learnings:
  //     'I was keen to try deploying a React app to Vercel to compare it with their native Next.js deployment. This project was a great way to practice using React Router to navigate between pages and pass data between components. Plus, I wanted to hone my skills in fetching data from APIs, and the Pokémon API seemed like a fun and engaging resource to work with.',
  //   future:
  //     'The current CSS isnt very user-friendly on smaller screens, so a big goal would be to fix the styling to make it more responsive. I also want to add more interactive features to the site. One idea is to gamify it by incorporating some kind of battle system that leverages the Pokémon stats. Theres heaps of potential to make the site more engaging but Im not sure if I will return to this in the short term with new projects on the go.',
  //   feature1: '',
  //   technologies: [
  //     'React',
  //     'Express',
  //     'TypeScript',
  //     'Poke API',
  //     'React Router',
  //     'Vite',
  //   ],
  //   githubLink: 'https://github.com/jack-crawford-1/Pokedex',
  //   photos: ['/project/pkdemo3.png', '/project/pkdemo2.png'],
  // },

  // groupproject: {
  //   projectName: 'DevAcademy Group Project',
  //   projectLink: 'https://optimisticweather.pushed.nz/',
  //   imageSrc: '/project/ow.png',
  //   altText: 'Group Project',
  //   description:
  //     'This was our final group project during the DevAcademy bootcamp, a weather app that allows users to find activities and events for a specific location based on the weather forecast. This was build over 5 days with a team of 4 developers and was a great opportunity to practice working in an agiile environment based on real-world conditions where we problem solved as a group and worked on a shared codebase using git and GitHub',
  //   comments: '',
  //   learnings:
  //     'Being a group project with a tight deadline, we had to be very organised and communicate well to ensure that everyone was on the same page. We used GitHub projects to manage tasks and issues and had daily standups to check in on progress and discuss any blockers. Some of the biggest challenges were integrating the different parts of the app, such as the weather API and the EventFinda API, and ensuring that the data was displayed correctly on the front end. We had a few merge conflicts which ended up being a great way to learn how to approach future group projects and commit strategies.',
  //   future:
  //     'With the course finished, I hope I get an opportunity to work with my classmates again to build out the AI side to better recommend activities as well as getting more detailed information from the EventFinder API. Either way, it ended up being a great experience and I learnt a lot about working in a team and how to manage a project with multiple moving parts.',
  //   feature1: '',
  //   technologies: [
  //     'React',
  //     'Express',
  //     'Knex',
  //     'sqlite3',
  //     'TypeScript',
  //     'openai',
  //     'Weather API',
  //     'EventFinda API',
  //     'supertest',
  //   ],
  //   githubLink: 'https://github.com/tohora-2024/optimisticweather',
  //   photos: ['/project/gp1.png', '/project/gp2.png'],
  // },

  minipiano: {
    projectName: 'Mini Piano using Tone.js',
    projectLink: '',
    imageSrc: '/project/piano.png',
    altText: 'Piano app Tone.js with React',
    description:
      "A mini piano app that uses React with custom CSS for the UI, TypeScript for type safety, and Tone.js for the sound synthesis. It uses React's state management and event handling to manage key presses and chord playback. The app also leverages hooks like useState and useEffect to handle real-time updates and user interactions.",
    comments:
      'Working on this project was a lot of fun, especially as someone who enjoys music. It was cool to see the app come together and to be able to play actual tunes on a virtual piano. In hindsight, I propbably would have gone with a guitar or ukulele as I know how to play those instruments and might have been able to try some more complex chords, instead of googling piano chord structures, but overall it was intersting (and a bit of a time void) messing with the sounds available from the Tone.js framework.',
    technologies: ['React', 'Tone.js', 'TypeScript', 'CSS', 'Vite'],
    learnings:
      'The main challenge was managing the state to handle real-time key presses, especially for combining keys to play minor or seventh chord. Using React useState to track which keys were pressed and useEffect to manage keydown and keyup event listeners was the clear choice. Playing with the config for the oscillator and envelope parameters made the sound to be more realistic and mapping over the chords on screen and using useState worked to show which chords are being played. ',
    future:
      'In the future, Id like to add support for more octaves and more complex chords, as well as the ability to record and playback user input. I would also like to add more features like a metronome and a drum machine. I should also probably make it usable on mobile as it is currently not very responsive.',
    githubLink: 'https://github.com/jack-crawford-1/Piano-app-tonejs-react',
    videoSrc: '/project/piano.mp4',
  },

  boilerplate: {
    projectName: 'React / Express Boilerplate: Fullstack',
    projectLink: 'https://boilerplate.pushed.nz/',
    imageSrc: '/project/boilerplate.png',
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
    photos: ['/project/bpdemo1.png', '/project/bpdemo3.png'],
  },
}
