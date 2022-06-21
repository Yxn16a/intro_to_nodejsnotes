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
// the use of brackets around the function is a good way to decrease number of code 
// and being specific where the function come from
const {send} = require('./modulenodejsrequest')
const {read} = require('./modulenodejsresponse')
function makeRequest(url, data) { 
    send(url, data); 
    return read(); 
}
const returnedData = makeRequest('https://google.com', 'hello'); 
console.log(returnedData)