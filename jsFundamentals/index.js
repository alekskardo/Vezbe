//constructor
/*
        function AnimalMaker(name) {
            return {
                speak: function() {
                    console.log('My name is ', name);

                }
            }
        }
    
        npr . u ovom primeru dolazimo do obj
        var myAnimal = AnimalMaker('Vucko');
        
kada u consoli radimo === myAnimal.speak() dobijamo My name is Vucko, uvek stavljati (). Pozivati funk
moze da se odradi i sa zagradama  === myAnimal['speak']()
    
    */

// looping

/* 
function AnimalMaker(name) {
    return {
        speak: function () {
            console.log('My name is' , name)
        },
        
    }
}

var animalNames =  ['sheep', 'liger', 'Big bird']
var farm = [];

for (var i = 0; i < animalNames.length; i++) {
    var animal = AnimalMaker(animalNames[i])
    farm.push(animal)

    ili moze u jednoj liniji

    farm.push(AnimalMaker(animalNames[i]))
}
*/

// Animal User
// ........Write a function, AnimalTestUser, that has one string parameter, username. It returns an object with a username property.
// var testSheep = AnimalTestUser('CottonBall');
// console.log(testSheep); //{ username: 'CottonBall' }
// In your AnimalTestUser function, create a check that sees how many arguments are passed. If there is more than one argument, create a property, otherArgs that is an array of the remaining arguments. Note: the arguments keyword is not a true array. Remember, it is an array-like object.
// var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3] );
// console.log(testSheep); //{ username: 'CottonBall', otherArgs: [ {'loves dancing': true}, [1,2,3] ] }

// ........Write a constructor function, AnimalCreator that returns a single animal object. The constructor function has 4 parameters: username, species, tagline, and noises. The animal object should have at least 5 properties: username, species, noises, tagline, and friends. The values should all be strings except noises and friends, which are arrays.
// var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
// console.log(sheep);
//       // { username: 'Cloud',
//       //  species: 'sheep',
//       //  tagline: 'You can count on me!',
//       //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
//       //  friends: []
//       // }

// ........Write a function, addFriend that takes an animal object (like the one returned from the AnimalCreator function) and adds another animal object as a friend.
//   addFriend(sheep, cow);
//   console.log(sheep);
//         // { username: 'Cloud',
//         //  species: 'sheep',
//         //  tagline: 'You can count on me!',
//         //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
//         //  friends: [{username: 'Moo', species: 'cow'...}]
//         // }
//   addFriend(sheep, llama);
//   console.log(sheep);
//         // { username: 'Cloud',
//         //  species: 'sheep',
//         //  tagline: 'You can count on me!',
//         //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
//         //  friends: [{username: 'Moo', species: 'cow'...}, {username: 'Zeny', species: 'llama'...}]
//         // }

// ........Change your addFriend function to only add the username of the friend, not the whole object.
//   addFriend(sheep, cow);
//   console.log(sheep);
//         // { username: 'Cloud',
//         //  species: 'sheep',
//         //  tagline: 'You can count on me!',
//         //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
//         //  friends: ['Moo']
//         // }
//   addFriend(sheep, llama);
//   console.log(sheep);
//         // { username: 'Cloud',
//         //  species: 'sheep',
//         //  tagline: 'You can count on me!',
//         //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
//         //  friends: ['Moo', 'Zeny']
//         // }

// .........Create a myFarm collection of at least 3 animal objects. Give them some friends using addFriend, too!
// console.log(myFarm) //[{username: 'Cloud'...},{username: 'Zeny'...},{username: 'CottonBall'...}]
// Create a function, addMatchesArray, that takes a farm (array of animal objects) and adds a new property to each animal object called matches that is an empty array. Hint: you will need a loop.
// addMatchesArray(myFarm);
// console.log(myFarm[0]); // { username: 'Cloud',
//         //  species: 'sheep',
//         //  tagline: 'You can count on me!',
//         //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
//         //  friends: ['Moo', 'Zeny'],
//         //  matches: []
//         // }

// ..........Create a function, giveMatches, that takes a farm collection (aka an array of animal objects) that already has a matches property. It selects a name from the friends array and adds it to the matches array. You can choose how the selection is made (random, the first element, etc). Make sure all your animal objects have friends.
// giveMatches(myFarm);
// console.log(myFarm[0]); // { username: 'Cloud',
//         //  species: 'sheep',
//         //  tagline: 'You can count on me!',
//         //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
//         //  friends: ['Moo', 'Zeny'],
//         //  matches: ['Zeny']
//         // }

function AnimalTestUser(username) {
  var args = arguments.length;
  var otherArgs = [];
  if (args > 1) {
    for (var i = 1; i < args; i++) {
      otherArgs.push(arguments[i]);
    }
  }

  return {
    username: username,
    otherArgs: otherArgs,
  };
}

var testSheep = AnimalTestUser("CottonBall", { "loves dancing": true }, [
  1,
  2,
  3,
]);
console.log(testSheep);
// *************************************************************************************

function AnimalCreator(username, species, tagline, noises) {
  var animal = {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: [],
  };
  return animal;
}

//moze da se uradi i bez ovog donjeg dela, samo da napisemo gore return  {} i ostalo isto. bez var animal

var sheep = AnimalCreator("Cloud", "sheep", "You can count on me!", [
  "baahhh",
  "arrgg",
  "chewchewchew",
]);
console.log(sheep);

//**************************************************************************************** */

function addFriend(animal, friend) {
  animal.friends.push(friend.username);
}

var cow = AnimalCreator("Moo", "cow", "got milk", ["moo", "moooo", "boo"]);
console.log(cow);
var llama = AnimalCreator("Zeny", "llama", "llll", [
  "sdf",
  "dsfasdf",
  "fsfsdf",
]);
console.log(llama);

addFriend(sheep, cow);
console.log(sheep);
addFriend(sheep, llama);
console.log(sheep);

// ****************************************************************************************************

var myFarm = [sheep, cow, llama];
addFriend(cow, sheep);
addFriend(llama, cow);
console.log(myFarm);

// ************************************************************************************************************

function addMatchesArray(farm) {
  for (var animal in farm) {
    farm[animal].matches = [];
  }
}
addMatchesArray(myFarm);
console.log(myFarm[0]);

// \***********************************************************************************

function giveMatches(farm) {
  for (var animal in farm) {
    farm[animal].matches.push(farm[animal].friends[0]); // would be better as a for loop with semi colons
  }
}

giveMatches(myFarm);
console.log(myFarm[0]);
