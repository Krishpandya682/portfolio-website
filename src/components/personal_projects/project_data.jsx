import { badges } from "../../assets/badges";

const schTags = [
  badges["Flutter"],
  badges["Dart"],
  badges["Firebase"],
  badges["Android"],
  badges["Android Studio"]
];

const ftcTags = [
  badges["Ethereum"],
  badges["Solidity"]
];

const othTags = [
  badges["Python"],
  badges["Numpy"],
  badges["Pygame"],
];

export const cardData = [
  {
    title: "Scavenger Hunt",
    description: "Designed and developed an interactive quiz application using Flutter, available on the Google PlayStore. Integrated Firestore Database for real-time data management and Firebase Authentication for secure user access, enhancing both functionality and security.",
    img1: "sch1",
    img2: "sch3",
    img3: "sch2",
    img4: "sch4",
    images : ["sch1","sch2","sch3","sch4"],
    vid: "",
    btn1: (
      <object data="https://firebasestorage.googleapis.com/v0/b/krishpandyaportfolio.appspot.com/o/assets%2Fgoogle-play.svg?alt=media" width="30" height="30"></object>
    ),
    btn2: <object data="https://firebasestorage.googleapis.com/v0/b/krishpandyaportfolio.appspot.com/o/assets%2Fgithub.svg?alt=media" width="40" height="40"></object>,
    btnLink1:
      "https://play.google.com/store/apps/details?id=com.herokuapp.scavengerhuntapp682",
    btnLink2: "https://github.com/Krishpandya682/scavenger_hunt",
    tags: schTags,
  },
  {
    title: "FitCoin Token",
    description: "Created and deployed an ERC-20 token to the Ethereum blockchain using Solidity and Web3. Developed and tested the token and token sale smart contracts with Truffle and Ganache, ensuring robust functionality. Designed a website to host the Initial Coin Offering (ICO), integrating Metamask for seamless web3 interaction and secure payment processing.",
    img1: "ftc1",
    img2: "ftc3",
    img3: "ftc4",
    img4: "ftc2",
    images : ["ftc1","ftc2","ftc3","ftc4"],
    vid: "FTCVid.mp4",
    btn1: (
      <object data="https://firebasestorage.googleapis.com/v0/b/krishpandyaportfolio.appspot.com/o/assets%2Fwebsite.svg?alt=media" width="30" height="30"></object>
    ),
    btn2: <object data="https://firebasestorage.googleapis.com/v0/b/krishpandyaportfolio.appspot.com/o/assets%2Fgithub.svg?alt=media" width="40" height="40"></object>,
   
    btnLink1: "https://krishpandya682.github.io/FitCoinTokenSale/",
    btnLink2: "https://github.com/Krishpandya682/FitCoinTokenSale",
    tags: ftcTags,
  },
  {
    title: "Othello AI",
    description: "Developed an AI agent for Othello using the Minimax algorithm with Alpha-Beta pruning and NumPy for optimized performance. Transitioned from a reinforcement learning model to Minimax for better game state management. Enhanced AI decision-making and performance across various scenarios. Created an interactive game interface with Pygame to demonstrate advanced AI strategies.",
    img1: "oth1",
    img2: "oth2",
    img3: "oth3",
    img4: "oth4",

    images : ["oth1","oth2","oth3","oth4"],
    vid: "Othello.mp4",
    // btn1: <object data="assets/website.svg" width="40" height="40"></object>,
    // btn2: <object data="assets/github.svg" width="40" height="40"></object>,
    // btnLink1: "https://krishpandya682.github.io/FitCoinTokenSale/",
    // btnLink2: "https://github.com/Krishpandya682/FitCoinTokenSale",
    tags: othTags,
  },
];
