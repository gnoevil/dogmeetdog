'use strict';

var dogs = []; // Dummy profiles are pushed here.

// Pre-populating some arrays with options to pull from for filling out the profile form so that it matches the options used in the dummy profiles.
var agePrefs = ['About the same', 'Younger', 'Older', 'No Preference'];
var sizes = ['Small', 'Medium', 'Large', 'No Preference'];
var neighborhoods = ['Capitol Hill', 'Downtown Seattle', 'West Seattle', 'Ballard', 'Queen Anne', 'Belltown', 'Fremont', 'Unversity District', 'North Seattle', 'Green Lake', 'Beacon Hill', 'South Lake Union', 'Other'];
var fixedPreference = ['Fixed', 'Intact', 'No Preference'];

// The actual constructor function and dummy accounts.
function Dog(name, breed, size, age, sex, fixed, neighborhood, prefAge, prefSize, prefSex, prefFixed, swimming, fetch, walks, running, sunBathing, fileName){
  this.name = name;
  this.breed = breed;
  this.size = size;
  this.age = age;
  this.sex = sex;
  this.fixed = fixed;
  this.neighborhood = neighborhood;
  this.prefAge = prefAge;
  this.prefSize = prefSize;
  this.prefSex = prefSex;
  this.prefFixed = prefFixed;
  this.swimming = swimming;
  this.fetch = fetch;
  this.walks = walks;
  this.running = running;
  this.sunBathing = sunBathing;
  this.filePath = 'Assets/images/profile-photos/' + fileName;
  this.liked = false;
  this.matchPercentage;
  dogs.push(this);
}

new Dog('Allison', 'German Shepherd', 'Large', 4, 'Female', true, 'Capitol Hill', 'About the same', 'Large', 'Female', 'No Preference', 1, 2, 3, 4, 5, 'allison.jpg');
new Dog('Cassius', 'French Bulldog', 'Small', 8, 'Male', true, 'Downtown Seattle', 'Older', 'Small', 'No Preference', 'No Preference', 5, 4, 3, 2, 1, 'cassius.jpg');
new Dog('Buggy', 'Pug', 'Small', 1, 'Female', false, 'West Seattle', 'Younger', 'No Preference', 'No Preference', 'Fixed', 2, 1, 4, 5, 3, 'buggy.jpg');
new Dog('Zeke', 'Husky', 'Medium', 2, 'Male', true, 'University District', 'No Preference', 'No Preference', 'No Preference', 'No Preference', 5, 5, 5, 5, 5, 'zeke.jpg');
new Dog('Cheri', 'Golden Retriever', 'Large', 9, 'Female', true, 'Ballard', 'About the same', 'Large', 'Male', 'Fixed', 1, 1, 1, 1, 1, 'cheri.jpg');
new Dog('Lili', 'Mixed Breed', 3, 'Small', 'Female', false, 'Queen Anne', 'Older', 'Small', 'Female', 'Fixed', 4, 5, 4, 5, 2, 'lili.jpg');
new Dog('Stan', 'Corgi', 5, 'Medium', 'Male', false, 'Belltown', 'Younger', 'No Preference', 'No Preference', 'No Preference', 2, 5, 3, 1, 4, 'stan.jpg');
new Dog('Clara', 'Pit Bull', 6, 'Large', 'Female', true, 'Freemont', 'No Preference', 'Large', 'Male', 'No Preference', 4, 2, 5, 3, 1, 'clara.jpg');
new Dog('Murphy', 'Yellow Lab', 7, 'Large', 'Male', false, 'Green Lake', 'Younger', 'Medium', 'Female', 'No Preference', 3, 4, 3, 4, 5, 'murphy.jpg');
new Dog('Chance', 'Yellow Lab', 4, 'Large', 'Male', true, 'Beacon Hill', 'About the same', 'No Preference', 'No Preference', 'No Preference', 5, 5, 5, 5, 5, 'chance.jpg');

'use strict';

var user = {
  size: 'Large',
  age: '4',
  sex: 'Male',
  fixed: true,
  neighborhood: 'Capitol Hill',
  prefAge: 'About the same',
  prefSex: 'No Preference',
  prefFixed: 'Fixed',
  swimming: 5,
  fetch: 4,
  walks: 3,
  running: 2,
  sunBathing: 1
};

// This part calculates how much a dog matches the user non-numerical values
function matchNeighborhood(i) {
  if (dogs[i].neighborhood === user.neighborhood) {
    totalMatches++;
  }
}

function matchUserAgePref(i) {
  if (user.prefAge === 'Younger' && dogs[i].age < user.prefAge) {
    totalMatches++;
  } else if (user.prefAge === 'Older' && dogs[i].age > user.prefAge) {
    totalMatches++;
  } else if (user.prefAge === 'About the same' && dogs[i].age === user.prefAge) {
    totalMatches++;
  }
}

function matchUserSizePref(i) {
  if (user.prefSize === dogs[i].size || user.prefSize === 'No Preference') {
    totalMatches++;
  }
}

function matchUserSexPref(i) {
  if (user.prefSex === dogs[i].sex || user.prefSex === 'No Preference') {
    totalMatches++;
  }
}

function matchUserFixedPref(i) {
  if (user.prefFixed === 'Fixed' && dogs[i].fixed === true || user.prefFixed === 'No Preference') {
    totalMatches++;
  }
}

// This part calculates how much a user matches a dog's non-numerical values
function matchDogAgePref(i) {
  if (dogs[i].prefAge === 'Younger' && user.age < dogs[i].prefAge) {
    totalMatches++;
  } else if (dogs[i].prefAge === 'Older' && user.age > dogs[i].prefAge) {
    totalMatches++;
  } else if (dogs[i].prefAge === 'About the same' && user.age === dogs[i].prefAge) {
    totalMatches++;
  }
}

function matchDogSizePref(i) {
  if (dogs[i].prefSize === user.size || dogs[i].prefSize === 'No Preference') {
    totalMatches++;
  }
}

function matchDogSexPref(i) {
  if (dogs[i].prefSex === user.sex || dogs[i].prefSex === 'No Preference') {
    totalMatches++;
  }
}

function matchDogFixedPref(i) {
  if (dogs[i].prefFixed === 'Fixed' && user.fixed === true || dogs[i].prefFixed === 'No Preference') {
    totalMatches++;
  }
}

// This part calculates percent match between numerical values;
function compareNumericals(user, dog) {
  var difference = Math.abs(user - dog);
  if (difference === 0) {
    totalMatches += 4;
  } else if (difference === 1) {
    totalMatches += 3;
  } else if (difference === 2) {
    totalMatches += 2;
  } else if (difference === 1) {
    totalMatches += 1;
  }
}

function getNumericalMatches(i) {
  for (var i = 0; i < dogs.length; i++) {
    compareNumericals(user.swimming, dogs[i].swmming);
    compareNumericals(user.fetch, dogs[i].fetch);
    compareNumericals(user.walks, dogs[i].walks);
    compareNumericals(user.running, dogs[i].running);
    compareNumericals(user.SunBathing, dogs[i].sunBathing);
  }
}

// Put it all together, now!
function countMatches(i) {
  matchNeighborhood(i);
  matchUserAgePref(i);
  matchUserSexPref(i);
  matchUserSizePref(i);
  matchUserFixedPref(i);
  matchDogAgePref(i);
  matchDogSexPref(i);
  matchDogSizePref(i);
  matchDogFixedPref(i);
  getNumericalMatches(i);
}

// Converts matches into a percentage.
function getPercentage(i) {
  dogs[i].matchPercentage = Math.round((totalMatches / totalPossible) * 100);
}

// Calculates the percent of matches for each dog and sort by percentage.
var totalMatches = 0;
var totalPossible = 34;
function calculatePercentMatch() {
  for (var i = 0; i < dogs.length; i++) {
    countMatches(i);
    getPercentage(i);
    totalMatches = 0;
  }
  dogs.sort(function(a, b) {
    return b.matchPercentage - a.matchPercentage;
  });
}

calculatePercentMatch();
