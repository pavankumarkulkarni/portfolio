import sc from "../images/ShoppingCart.PNG";
import sc2 from "../images/ShoppingCart2.PNG";
import quiz from "../images/quiz.PNG";
import quiz2 from "../images/quiz2.PNG";
import githubFusion from "../images/Github_Fusion.PNG";
import githubFusion2 from "../images/Github_Fusion2.PNG";
import berger from "../images/berger.PNG";
import berger2 from "../images/berger2.PNG";
import zelda from "../images/zelda.PNG";
import zelda2 from "../images/zelda2.PNG";
import pixabay from "../images/pixabay.PNG";
import pixabay2 from "../images/pixabay2.PNG";
import minecraft from "../images/minecraft.PNG";
import minecraft2 from "../images/minecraft2.PNG";
import movie from "../images/movie.PNG";
import movie2 from "../images/movie2.PNG";

const projects = {
  data: [
    {
      _id: 1,
      name: "Shopping Website",
      summary:
        "Full MERN stack shopping application. Sign/up and Google sign in for profile creation. Registered user can save cards and addresses and favorites. Admin can view and delete orders.",
      img: [sc, sc2],
      keywords: ["MERN", "Authentication", "REST", "HOC", "Hooks", "Heroku"],
      appUrl: "https://mernshoppingcartclient.herokuapp.com/",
      githubUrl: [
        "https://github.com/pavankumarkulkarni/shoppingcart_backend",
        "https://github.com/pavankumarkulkarni/shoppingcart_client",
      ],
      details: [
        "Full MERN stack shopping application. Sign/up and Google sign in for profile creation. Registered user can save cards and addresses and favorites. Admin can view and delete orders.",
        "Product screen can be sorted by  price and recency. It can be filtered by size.",
        "Sign up/registration is implemented by JWT tokens and encryption.",
        "Registered user can validate saved addresses via USPS validator service.",
        "Admin Screen is also responsive to screen size.",
      ],
    },
    {
      _id: 2,
      name: "Trivia Quiz",
      summary:
        "React trivia quiz application powered by opentriviadb api. User can customize the quiz number of questions, category, difficulty, answer format as well as back ground image. Instant Feedback and summary of correct answers at the end",
      img: [quiz, quiz2],
      keywords: ["React", "TriviaAPI", "React-Router", "React-hooks"],
      appUrl: "https://react-trivia-quiz-custom.netlify.app/",
      githubUrl: ["https://github.com/pavankumarkulkarni/react-quiz"],
      details: [
        "React trivia quiz application powered by opentriviadb api. User can customize the quiz number of questions, category, difficulty, answer format as well as back ground image. Instant result of correct/incorrect by color coding answers. Summary of correct answers at the end.",
        "React Router dom is used to mimic multiple page functionality. Fetch question set and answers from opentdb api. Media query to to make the app responsive by changin font and size. Icon8 icons are used for setting and difficulty level indicator",
        "React functional components and reacthooks are used to set states.",
      ],
    },
    {
      _id: 3,
      name: "Github user",
      summary:
        "Github user profile summary. Key metric charts using fusion charts. Auth0 for authentication",
      img: [githubFusion, githubFusion2],
      keywords: [
        "React",
        "fusion charts",
        "Auth0",
        "React-Hooks",
        "react-router",
      ],
      appUrl: "https://react-github-fusion.netlify.app/",
      githubUrl: ["https://github.com/pavankumarkulkarni/github_search"],
      details: [
        "Implemented Auth0 for signup and sign in with email id and password. Alternatively user can log in with google sign in",
        "Pie chart, bar chart and column charts are implemented using fusion charts. They chart top languages, forked and starred repos.",
        "github APIs are used to search github users and gather user profiles, followers and repo stats",
        "React router dom for different url end points. Protect dashboard only for signed in user.",
      ],
    },
    {
      _id: 4,
      name: "My Berger",
      summary:
        "React app to build berger. Customize ingredients and submit order. Berger build is visually displayed based on ingredients selected.",
      img: [berger, berger2],
      keywords: ["React", "css modules", "HOC", "favicon", "responsive"],
      appUrl: "https://keen-einstein-3019b1.netlify.app/",
      githubUrl: ["https://github.com/pavankumarkulkarni/MyBurger"],
      details: [
        "React app to build berger. Customize ingredients and submit order. Berger build is visually displayed based on ingredients selected.",
        "CSS is used to draw buns and ingredients choosen to make the berger. css modules is used to localise the style for specific component",
        "Higher Order Compoents are used to implement the modal popups. Media queries are used for responsiveness. React class and functional compoenents are used.",
        "Code is structured by components for modularization. Realtime update of price based on ingredients choosen. Dynamic display of button to add or remove ingredients based on selection.",
      ],
    },
    {
      _id: 5,
      name: "Zelda Interface",
      summary:
        "React App for Zelda game interface to configure Zelda with different armor, shield and weapons.",
      img: [zelda, zelda2],
      keywords: ["React", "Responsive", "Animation"],
      appUrl: "https://adoring-mccarthy-26b3e6.netlify.app",
      githubUrl: ["https://github.com/pavankumarkulkarni/zelda-interface"],
      details: [
        "React App for Zelda game interface to configure Zelda with different armor, shield and weapons.",
        "Keyboard as well as mouse navigation. Sound effect when moving from item to item. CSS animation highlighting item in focus. Typewriter effect of description text.",
      ],
    },
    {
      _id: 6,
      name: "Search pixabay pics",
      summary:
        "Search pixabay api with search key words. Displays pictures with key words.",
      img: [pixabay, pixabay2],
      keywords: ["React", "tailwindCSS", "pixabay"],
      appUrl: "https://sleepy-golick-0a0a32.netlify.app/",
      githubUrl: [
        "https://github.com/pavankumarkulkarni/react-tailwind-pixabay",
      ],
      details: ["lorem ipsum"],
    },
    {
      _id: 7,
      name: "Minesweep",
      summary:
        "Classic minesweep game in 2 modes simple and large. Guessing all landmines by righclicking wins the game. Running timer shows time elapsed since start of game.",
      img: [minecraft, minecraft2],
      keywords: ["React", "functional components", "react-hooks"],
      appUrl: "https://jolly-jennings-41bbeb.netlify.app/",
      githubUrl: ["https://github.com/pavankumarkulkarni/Minesweeper"],
      details: [
        "Classic minesweep game in 2 modes simple and large. Guessing all landmines by righclicking wins the game.",
        "Running timer shows time elapsed since start of game. Shows how many more landmines remains to be guessed. In case of loosing the game, it highlights all the actual landmines.",
        "React for UI build for interactivity and state management. Latest functional components with hooks (useState). Componentwise code structure for modularity.",
      ],
    },
    {
      _id: 8,
      name: "Search Movie",
      summary:
        "Search pixabay api with search key words. Displays pictures with key words.",
      img: [movie, movie2],
      keywords: ["React", "React-Router", "movieDB API fetch", "responsive"],
      appUrl: "https://thirsty-liskov-ea5496.netlify.app/",
      githubUrl: [
        "https://github.com/pavankumarkulkarni/react-movie-netlify-deploy",
      ],
      details: [
        "Search for movies by title or key word like actor etc.Powered by MovieDB API. Click a specific movie card opens up details of the movie with key stats like budget, revenue etc",
        "React functional components. React-hooks. Fetch data from MovieDB API. Async await functions",
        "Mediaqueries to make Movie search result is reponsive with larger screen >900px displaying 2 columns. Smaller screens displaying 1 column",
      ],
    },
  ],
};

export default projects;
