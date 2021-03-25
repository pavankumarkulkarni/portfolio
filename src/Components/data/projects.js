import sc from "../images/ShoppingCart.PNG";
import quiz from "../images/quiz.PNG";
import githubFusion from "../images/Github_Fusion.PNG";
import berger from "../images/berger.PNG";
import zelda from "../images/zelda.PNG";
import pixabay from "../images/pixabay.PNG";
import minecraft from "../images/minecraft.PNG";
import movie from "../images/movie.PNG";

const projects = {
  data: [
    {
      _id: 1,
      name: "Shopping Website",
      summary: "MERN stack application for shopping",
      img: sc,
      keywords: ["MERN", "Authentication", "REST", "HOC", "Hooks", "Heroku"],
      appUrl: "https://mernshoppingcartclient.herokuapp.com/",
      githubUrl: [
        "https://github.com/pavankumarkulkarni/shoppingcart_backend",
        "https://github.com/pavankumarkulkarni/shoppingcart_client",
      ],
      details: "lorem ipsum",
    },
    {
      _id: 2,
      name: "Trivia Quiz",
      summary:
        "React trivia quiz application powered by trivia api. User can customize the quiz number of questions, category, difficulty, answer format as well as back ground image. Instant Feedback and summary of correct answers at the end",
      img: quiz,
      keywords: ["React", "TriviaAPI", "Hooks"],
      appUrl: "https://react-trivia-quiz-custom.netlify.app/",
      githubUrl: ["https://github.com/pavankumarkulkarni/react-quiz"],
      details: "lorem ipsum",
    },
    {
      _id: 3,
      name: "Github user",
      summary:
        "Github user profile summary. Key metric charts using fusion charts. Auth0 for authentication",
      img: githubFusion,
      keywords: ["React", "fusion", "Auth0", "Hooks"],
      appUrl: "https://react-github-fusion.netlify.app/",
      githubUrl: ["https://github.com/pavankumarkulkarni/github_search"],
      details: "lorem ipsum",
    },
    {
      _id: 4,
      name: "My Berger",
      summary:
        "React app to build berger. Customize ingredients and submit order. Berger build is visually displayed based on ingredients selected.",
      img: berger,
      keywords: ["MERN", "Auth0", "RESTAPI"],
      appUrl: "https://keen-einstein-3019b1.netlify.app/",
      githubUrl: ["https://github.com/pavankumarkulkarni/MyBurger"],
      details: "lorem ipsum",
    },
    {
      _id: 5,
      name: "Zelda Interface",
      summary:
        "React App for Zelda game interface to configure Zelda with different armory.",
      img: zelda,
      keywords: ["MERN", "Auth0", "REST", "HOC", "Hooks", "Heroku"],
      appUrl: "https://adoring-mccarthy-26b3e6.netlify.app",
      githubUrl: ["https://github.com/pavankumarkulkarni/zelda-interface"],
      details: "lorem ipsum",
    },
    {
      _id: 6,
      name: "Search pixabay pics",
      summary:
        "Search pixabay api with search key words. Displays pictures with key words.",
      img: pixabay,
      keywords: ["React", "tailwindCSS", "pixabay"],
      appUrl: "https://sleepy-golick-0a0a32.netlify.app/",
      githubUrl: [
        "https://github.com/pavankumarkulkarni/react-tailwind-pixabay",
      ],
      details: "lorem ipsum",
    },
    {
      _id: 7,
      name: "Minecraft",
      summary:
        "Search pixabay api with search key words. Displays pictures with key words.",
      img: minecraft,
      keywords: ["React", "tailwindCSS", "pixabay"],
      appUrl: "https://jolly-jennings-41bbeb.netlify.app/",
      githubUrl: ["https://github.com/pavankumarkulkarni/Minesweeper"],
      details: "lorem ipsum",
    },
    {
      _id: 8,
      name: "Search Movie",
      summary:
        "Search pixabay api with search key words. Displays pictures with key words.",
      img: movie,
      keywords: ["React", "tailwindCSS", "pixabay"],
      appUrl: "https://thirsty-liskov-ea5496.netlify.app/",
      githubUrl: ["github.com/pavankumarkulkarni/react-movie-netlify-deploy"],
      details: "lorem ipsum",
    },
  ],
};

export default projects;
