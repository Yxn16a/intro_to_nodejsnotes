// a module is like a box
// and these modules have name and we combine these modules
// WHY MODULES
// to reuse the code
// to organize the code
// only expose the functionality that we need
// creaing your own modules
// CREATING OUR OWN HTTPS MODULE
// url for destination to get data url and data to get
// single dot means that different levels or current folder

const request = require('./modulenodejsrequest')
const response = require('./modulenodejsresponse')
function makeRequest(url, data) { 
    request.send(url, data); 
    return response.read(); 
}
const returnedData = makeRequest('https://google.com', 'hello'); 
console.log(returnedData)