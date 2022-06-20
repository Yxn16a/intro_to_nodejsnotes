// node allows us to use code 
// therefore we use module
// require takes a java script file and excute it and return it to us 
// we assign the return of the require in the constance
// we can use other modules from other developpers
//Built in modules
// example of http 
// duplicate what happens when we call google 
// the following function takes in the
// http is module which has many functions
// https module is used here for secturity reasons
// The other great practice is to use the following syntax
// ******* const { request } = require('https'); 
// you can replace request by get which only get the data from the database without sending 
// anything to the database like the following. if we put down the get method then we will not 
// to use req.end(); so let us try it and see if it is still working
const { get} = require('https'); 

// it takes a string or request and a call back as a second argument
// the res: response is the result of what we requested in a string argument 
// (www.google.com)
// respond is an event emitter
// we have to include http
// https module is used here for security reasons
// when{request} is used then we remove the dot that allows the access the function from
// the module and make it easy to switch function
// since we used get we will remove(const req = request)from in front of our function and replace
// that with a get
// as the following but when use request we have to put the req and req.end();
get('https://www.google.com', (res) => {
    //on takes a name as a string or a name assigned to the data and a listner 
    // as a call back
    // a chunk is a piece of data
    res.on('data', (chunk) => {
        console.log(`Data Chunk : ${chunk}`);
    });
    // res: emit data when thare no more data
    res.on('end', () => {
        console.log('No more data')
    });
}); 
// this triggers the request to be sent
// we have to all this function because it will allow the request to be sent
//***** req.end(); we need this when request is used
// what happens when we want to request in a secure way from google
// we have to use https
// if we want to sent request security 
// we use https module
// and call that module on the links