const nameAndAge = ["I am Sazzad Hossain and 25. "];
const profession = ["I am a web developer. "];
const passion = ['I love "Javascript"'];

const addReference = nameAndAge + profession + passion;
console.log(addReference);

const totalReference = addReference;
console.log(totalReference);

const demoProfile = {
  firstName: "sazzad",
  age: 25,
  profession: "web develope",
  "previous prof": "Enginner",
};
console.log(demoProfile["previous prof"]);

demoProfile.futureProf = "Ai";

console.log(demoProfile);
demoProfile.numbeAdd = "100";
console.log(demoProfile);

const information = {
  myName: "I am sazzad Hossain and I am 25.",
  myProfession: "I'm a web developer.",
  passion: 'I love "Javascript"',
};

const makeSentenceAdd =
  information.myName + information.myProfession + information.passion;

const toatl = makeSentenceAdd;
console.log(toatl);

// //-------------------------------------

const someObject = {};
someObject._name = "Hedwig";

someObject.age = 6;
var prop = "color";
someObject[prop] = "red";
// someObject.123 = true; syntaxError number ta unexpected
console.log(someObject);

//-------------------------------------------
const allMovie = [
  {
    id: 1,
    name: "sample Movie-1 ",
    rating: 4,
    category: "action",
  },
  {
    id: 2,
    name: "sample Movie-2 ",
    rating: 5,
    category: "drama",
  },
  {
    id: 3,
    name: "sample Movie-3 ",
    rating: 3,
    category: "funny",
  },
  {
    id: 4,
    name: "sample Movie-4 ",
    rating: 5,
    category: "comedy",
  },
  {
    id: 5,
    name: "sample Movie-5 ",
    rating: 4,
    category: "romantic",
  },
  {
    id: 6,
    name: "sample Movie-6 ",
    rating: 4,
    category: "action",
  },
  {
    id: 7,
    name: "sample Movie-7 ",
    rating: 4,
    category: "drama",
  },
  {
    id: 8,
    name: "sample Movie-8 ",
    rating: 4,
    category: "emotional",
  },
  {
    id: 9,
    name: "sample Movie-9 ",
    rating: 4,
    category: "detectiv",
  },
  {
    id: 10,
    name: "sample Movie-10 ",
    rating: 4,
    category: "action",
  },
];

const indexOfMovie = allMovie[0];

console.log(indexOfMovie.id);
console.log(indexOfMovie.name);
indexOfMovie.name + indexOfMovie.rating + indexOfMovie.category;
console.log(indexOfMovie);
