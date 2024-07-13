import { badges } from "../../assets/badges";

const cmsc131Tags = [
  badges["Java"],
  badges["Object-Oriented Programming"],
  badges["Software Design"],
];

const cmsc132Tags = [
  badges["Data Structures"],
  badges["Algorithms"],
  badges["Java"],
];

const cmsc216Tags = [
  badges["C Programming"],
  badges["Systems Programming"],
  badges["Linux"],
];

const cmsc250Tags = [
  badges["Discrete Mathematics"],
  badges["Algorithms"],
  badges["Logic"],
];

const cmsc330Tags = [
  badges["Programming Languages"],
  badges["Functional Programming"],
  badges["Syntax and Semantics"],
];

const cmsc351Tags = [
  badges["Algorithms"],
  badges["Time Complexity"],
  badges["Algorithm Analysis"],
];

const cmsc320Tags = [
  badges["Data Science"],
  badges["Data Analysis"],
  badges["Machine Learning"],
];

const cmsc424Tags = [
  badges["Database Systems"],
  badges["SQL"],
  badges["Data Management"],
];

const cmsc414Tags = [
  badges["Computer Security"],
  badges["Cryptography"],
  badges["Network Security"],
];

const cmsc420Tags = [
  badges["Algorithms"],
  badges["Data Structures"],
  badges["Computational Geometry"],
];

const cmsc436Tags = [
  badges["Mobile Development"],
  badges["iOS"],
  badges["Swift"],
];

const cmsc335Tags = [
  badges["JavaScript"],
  badges["Web Development"],
  badges["Full-Stack Development"],
];

const cmsc498ETags = [
  badges["Robotics"],
  badges["Artificial Intelligence"],
  badges["Control Systems"],
];

const cmsc421Tags = [
  badges["Artificial Intelligence"],
  badges["Machine Learning"],
  badges["Search Algorithms"],
];

export const courses = [
  {
    id: "CMSC131",
    name: "Object-Oriented Programming I",
    details:
      "Introduction to programming and computer science. Emphasis on problem-solving, object-oriented programming principles, and software design using Java. Students will develop skills in writing, testing, and debugging programs.",
    tags: cmsc131Tags,
  },
  {
    id: "CMSC132",
    name: "Object-Oriented Programming II",
    details:
      "Continuation of programming and computer science concepts introduced in CMSC131. Focus on data structures, algorithms, and advanced object-oriented programming using Java. Students will learn about linked lists, stacks, queues, trees, and more.",
    tags: cmsc132Tags,
  },
  {
    id: "CMSC216",
    name: "Introduction to Computer Systems",
    details:
      "Introduction to the fundamental concepts of computer systems. Topics include C programming, systems programming, memory management, and Unix-based development. Students will gain practical experience with low-level programming and system-level concepts.",
    tags: cmsc216Tags,
  },
  {
    id: "CMSC250",
    name: "Discrete Structures",
    details:
      "Introduction to discrete mathematics used in computer science. Covers topics such as sets, relations, functions, graphs, combinatorics, and logic. Essential for developing the mathematical foundation necessary for advanced study in computer science.",
    tags: cmsc250Tags,
  },
  {
    id: "CMSC330",
    name: "Organization of Programming Languages",
    details:
      "Exploration of the principles of programming languages. Topics include syntax and semantics, functional programming, and language paradigms. Students will study different programming languages and their features, focusing on both theory and practical applications.",
    tags: cmsc330Tags,
  },
  {
    id: "CMSC351",
    name: "Algorithms",
    details:
      "Study of algorithms and their efficiency. Topics include sorting, searching, graph algorithms, and algorithm design techniques. Emphasis on time complexity analysis and the theoretical foundations of algorithm performance.",
    tags: cmsc351Tags,
  },
  {
    id: "CMSC320",
    name: "Introduction to Data Science",
    details:
      "Comprehensive introduction to data science. Topics include data collection, data cleaning, data analysis, and machine learning. Students will gain hands-on experience with data science tools and techniques to analyze and interpret complex datasets.",
    tags: cmsc320Tags,
  },
  {
    id: "CMSC424",
    name: "Database Design",
    details:
      "In-depth study of database systems. Topics include database design, SQL, and data management. Students will learn about relational databases, normalization, query processing, and database administration.",
    tags: cmsc424Tags,
  },
  {
    id: "CMSC414",
    name: "Computer and Network Security",
    details:
      "Study of computer and network security fundamentals. Topics include cryptography, network security protocols, and security in operating systems. Emphasis on understanding and mitigating security threats.",
    tags: cmsc414Tags,
  },
  {
    id: "CMSC420",
    name: "Advanced Data Structures",
    details:
      "In-depth study of data structures and algorithms. Topics include balanced trees, graph algorithms, and computational geometry. Focus on advanced techniques for efficient data organization and manipulation.",
    tags: cmsc420Tags,
  },
  {
    id: "CMSC436",
    name: "Programming Handheld Systems (iOS)",
    details:
      "This course covers the fundamental principles and concepts underlying the programming of handheld systems, with a focus on iOS development. Emphasis is on practical application of concepts such as limited display size, power, memory and CPU speed, as well as new input modalities. Projects will be written in Swift using the iOS SDK.",
    tags: cmsc436Tags,
  },
  {
    id: "CMSC335",
    name: "Web Application Development with JavaScript",
    details:
      "Provides an introduction to modern ways of developing Web Applications/Services using JavaScript for both front-end and back-end. The course covers topics on fundamental JavaScript language constructs, server-side JavaScript, back-end data persistence, and client-side JavaScript to build Web Applications that interact with Web services and back-end databases.",
    tags: cmsc335Tags,
  },
  {
    id: "CMSC498E",
    name: "Introduction to Robotics",
    details:
      "Introduction to the fundamentals of robotics. Topics include robotic kinematics, control systems, and artificial intelligence. Hands-on experience with designing, programming, and testing robotic systems.",
    tags: cmsc498ETags,
  },
  {
    id: "CMSC421",
    name: "Introduction to Artificial Intelligence",
    details:
      "Study of the principles and techniques of artificial intelligence. Topics include search algorithms, machine learning, and knowledge representation. Emphasis on building intelligent systems and applications.",
    tags: cmsc421Tags,
  },
];
