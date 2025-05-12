const dogs = ["Bella", "Max", "Luna", "Charlie", "Cooper", "Lucy", "Buddy"];

const [, dog2, dog3] = dogs;



const cat = {
    name: "Whiskers",
    age: 3,
    breed: "Maine Coon",
    owner: {
      firstName: "Alice",
      lastName: "Johnson",
      contact: "alice@example.com"
    },
    favoriteToys: ["feather wand", "laser pointer", "catnip mouse"]
  };

  //opg 2
  //const {name, breed, owner:{contact}} = cat;
  
  //opg 3
  function printCatInfo({ name, favoriteToys }) {
    console.log("Name:", name);
    console.log("Favorite Toys:", favoriteToys);
  }
  
  printCatInfo(cat);

  //opg4
  const [dogA, dogB, ...rest] = dogs;
  const otherDogs = rest; 
  console.log(rest);

  //const dogsWithC = [otherDogs[1], otherDogs[2]];
  //console.log(dogsWithC);

  //opg 5
  dogsWithC = otherDogs.filter(dog => dog.startsWith("C"));
  console.log(dogsWithC);

  //opg 6
  const { breed, ...otherInformation } = cat
  console.log(breed, otherInformation)


///


const smallRabbitBreeds = ["Netherland Dwarf", "Holland Lop", "Polish"];
const largeRabbitBreeds = ["Flemish Giant", "Checkered Giant"];

//opg 7
const rabbitBreeds = [...smallRabbitBreeds, ...largeRabbitBreeds];
console.log(rabbitBreeds);

const checkeredGiantBasic = {
    breedName: "Checkered Giant",
    origin: "France and Germany",
    size: "Large",
    averageWeight: "11-13 pounds (5-6 kg)",
    lifespan: "5-8 years"
  };
  
  const checkeredGiantTraits = {
    colorPattern: "White with black or blue markings",
    bodyShape: "Full-arch body type",
    notableFeatures: ["Butterfly-shaped nose marking", "Eye circles", "Side spots", "Striped spine"],
    temperament: ["Energetic", "Independent", "Not typically cuddly", "Needs space to move"],
    careNeeds: ["Large enclosure or free-roam space", "Regular grooming", "Daily exercise"]
  };

  //opg 8
  const checkeredGiantInfo = [{...checkeredGiantBasic, ...checkeredGiantTraits}];
  console.log(checkeredGiantInfo);


///


  const westernMovies = [
    {
      id: 1,
      title: "The Good, the Bad and the Ugly",
      details: {
        director: "Sergio Leone",
        year: 1966
      }
    },
    {
      id: 2,
      title: "High Noon"
    },
    {
      id: 3,
      title: "Once Upon a Time in the West",
      details: {
        director: "Sergio Leone",
        year: 1968
      }
    },
    {
      id: 4,
      title: "Shane"
    }
  ];

  //opg 9
  westernMovies.forEach((movie) => {
  console.log(movie.details?.director)
  });

  //opg 10
  //const person = "Tina"
  const person = ""
  //const personsBesked =
  person ? console.log(`${person}, er dig der koder`) : console.log("der findes ikke nogen person");
