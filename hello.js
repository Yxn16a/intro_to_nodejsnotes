// mission: the first application
const mission = 'learn'; 
if (mission === 'learn') {
    console.log('time to learn');
} else { 
    console.log(`is ${mission } really more fun?`); 
}
// nodes comes with its own apis that are specific to it
// process.argv: this contains an array of the location of our files
// look at the documentation of the version of node to learn more 
// process in a global that provide access to the node function 
// process.argv[2] this will look to terminal node hello.js (what is added here became the 
// argument that the node js runs or stores)
// example:$ node hello.js explore: in this script there are there lements array
// the 0th is node, the hello.js is firstelement and the exporore is second
// Global
// global.process.argv: 
// global has all functions that we can need 
// example such as console
// GLOBALS THAT NODE PROVIDES
//browser windows: has window, document, history, location, navigator
// node globals: has globals, process, module, __filename, require(); 
// require()
// exports
// setTimeout: this is the same as the one that we have in the browser
// WHATWG: Read more about this
// Java script in the browser is different from the one that we use in nodes
// we used node to provide servers code 
// servers allows the users to login
//backend: what happens behing the scene
// https: is incripted: please go learn a little bit more about https
// node helps to program in both backend and fron end at the same time
// INTERNALS OF NODE
// V8: allows it to run the javascript
//  nod api: http,paths, fils, crypto by encrypting data
// nodejs binding helps with conversion of our code to the machine readable conde suchs as 
// c++ or c
//libuv and V8 are the most two important internal documents
// asynchronous io: take the tasks for me and i will come to is when you are done and that 
// is  how javascript works
// libuv: helps node to be independent of of the operation system
// libforder: has javascript section of node
// src:contain c++ files
//.cc is the same ast 
// LibUV SOURCE CODE
//