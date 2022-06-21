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
// this is helpful when deloping different with different modules
// const internal = require('./internals')  this is indirect access from index module
// this is destructuring the two folders that we have fron index module
const { send, read } = require('./internals')

// const {send} = require('./commonModuleNodejsRequest')
// const {read} = require('./commonModuleNodejsResponse')
function makeRequest(url, data) { 
    //send(url, data); this was from {send}
    // this next line is from internals
  //internal.request.send(url, data);  this was indirect access from the index module
    // direct acess will be like the following
    send(url, data)
  //  return read();  this comefrom {read}
    //return internal.response.read();  this was the indirect access to the
    // the index module
    // Direct acess can be like the following 
    return read()
}
const returnedData = makeRequest('https://google.com', 'hello'); 
console.log(returnedData)