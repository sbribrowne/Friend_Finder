var friendsArray = [
  {
    Name: "Kylie",
    Scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
  	Name: "Nate",
  	Scores: [2, 1, 3, 5, 2, 1, 4, 5, 1, 1]
  },
  {
  	Name: "Jack",
  	Scores: [1, 2, 3, 4, 5, 4, 3, 2, 4, 4]
  },
  {
  	Name: "Amanda",
  	Scores: [5, 2, 2, 3, 1, 1, 2, 4, 4, 1]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;