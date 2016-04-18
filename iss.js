var request = require('request');
var address = "http://api.open-notify.org/iss-now.json"
request(address, function(err, result) {
    var resultObject = JSON.parse(result.body);
    console.log("The ISS's latitude is:")
    console.log(resultObject.iss_position.latitude.toFixed(2));
    console.log("The ISS's longitude is:")
    console.log(resultObject.iss_position.longitude.toFixed(2));
});
