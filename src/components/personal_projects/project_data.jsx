const schTags = [
  "https://img.shields.io/badge/Flutter-54C5f8?style=for-the-badge&logo=flutter&logoColor=white",
  "https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white",
  "https://img.shields.io/badge/Firebase-F57C00?style=for-the-badge&logo=Firebase&logoColor=white",
  "https://img.shields.io/badge/Android-A4C639?style=for-the-badge&logo=android&logoColor=white",
  "https://img.shields.io/badge/Android%20Studio-669933.svg?style=for-the-badge&logo=android-studio&logoColor=white",
];

const ftcTags = [
  "https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white",
  "https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white",
  "",
];

export const cardData = [
  {
    title: "Scavenger Hunt",
    description: "This is the Scavenger Hunt Android App",
    img1: "sch1",
    img2: "sch3",
    img3: "sch2",
    img4: "sch4",
    vid: "",
    btn1: (
      <object data="assets/google-play.svg" width="30" height="30"></object>
    ),
    btn2: <object data="assets/github.svg" width="40" height="40"></object>,
    btnLink1:
      "https://play.google.com/store/apps/details?id=com.herokuapp.scavengerhuntapp682",
    btnLink2: "https://github.com/Krishpandya682/scavenger_hunt",
    tags: schTags,
  },
  {
    title: "FitCoin Token",
    description: "This is the FitCoin Token Wallet WebApp",
    img1: "ftc1",
    img2: "ftc3",
    img3: "ftc4",
    img4: "ftc2",
    vid: "FTCVid.mp4",
    btn1: <object data="assets/website.svg" width="40" height="40"></object>,
    btn2: <object data="assets/github.svg" width="40" height="40"></object>,
    btnLink1: "https://krishpandya682.github.io/FitCoinTokenSale/",
    btnLink2: "https://github.com/Krishpandya682/FitCoinTokenSale",
    tags: ftcTags,
  },
  {
    title: "Othello AI",
    description: "Othello AI WebApp",
    img1: "oth1",
    img2: "oth2",
    img3: "oth3",
    img4: "oth4",
    vid: "Othello.mp4",
    // btn1: <object data="assets/website.svg" width="40" height="40"></object>,
    // btn2: <object data="assets/github.svg" width="40" height="40"></object>,
    // btnLink1: "https://krishpandya682.github.io/FitCoinTokenSale/",
    // btnLink2: "https://github.com/Krishpandya682/FitCoinTokenSale",
    tags: ftcTags,
  },
];
