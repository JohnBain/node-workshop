  Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
  };

var request = require('request');
var prompt = require('prompt');

var montreal_location = "https://maps.googleapis.com/maps/api/geocode/json?address=montreal";
var iss = "http://api.open-notify.org/iss-now.json"

function calculateDistance(lat1, lon1, lat2, lon2) {
                  var R = 6371000; // metres
                  var φ1 = lat1.toRadians();
                  var φ2 = lat2.toRadians();
                  var Δφ = (lat2-lat1).toRadians();
                  var Δλ = (lon2-lon1).toRadians();

                  var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                    Math.cos(φ1) * Math.cos(φ2) *
                    Math.sin(Δλ/2) * Math.sin(Δλ/2);
                  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

                  var d = R * c;
                  return d;
}

    
prompt.start();
prompt.get(['location'], function (err, result) {
    console.log("You are located in " + result.location);
    
    request(montreal_location, function(err, result){
        
            var res = JSON.parse(result.body);
            console.log("Your latitude is " + res.results[0].geometry.location.lat.toFixed(2));
            var lat1 = res.results[0].geometry.location.lat;
            console.log("Your longitude is " + res.results[0].geometry.location.lng.toFixed(2));
            var lon1 = res.results[0].geometry.location.lng;
            
            request(iss, function(err, result) {
                var resultObject = JSON.parse(result.body);
                  console.log("The ISS's latitude is:");
                  console.log(resultObject.iss_position.latitude.toFixed(2));
                  var lat2 = resultObject.iss_position.latitude;
                  console.log("The ISS's longitude is:");
                  console.log(resultObject.iss_position.longitude.toFixed(2));
                  var lon2 = resultObject.iss_position.longitude;
                  
                  console.log("The distance between you and the ISS is:")
                  console.log(calculateDistance(lat1, lon1, lat2, lon2).toFixed(2) + " miles")

});

    })
    
});


