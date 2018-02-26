var friendData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {

    var newScore = req.body.scores;
    var results = [];
    var match = 0;
    
    //Goes through friendsArray, compares scores, and pushes the difference of each comparison to results array
    for (var i=0; i<friendData.length; i+=1) {
      var difference = 0;
      //Goes through newUserScore array and compares each score with each individual user in the array
      for (var j=0; j<newScore.length; j+=1) {
        console.log(friendsData[i].scores[j])
        difference += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newScore[j])))
      };
      //pushes to results array
      results.push(difference);
    }

    console.log(results);

    //Goes through the results array
    for (var i=0; i<results.length; i+=1) {
      console.log(results[i]);
      //Compares if the difference is less than or equal to the first result index, if less or equal match gets reassigned and compared again until loop is complete
      if(results[i] <= results[match]) {
        match = i
        console.log(match);
      }
    };

    //new variable get assigned the best match and gets sent out
    var bestFriend = friendData[match]; 
    
    console.log(bestFriend.name);
    friendData.push(req.body);
    res.json(bestFriend);

  });

};
