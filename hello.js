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
// LibUV SOURCE CODE: has many bindings for different languages such as python, Ruby
// and other laguage
//mac os, and lunix  is a decendent of unix (fun fact); 
//libuv used c instead of c++
// libuv calls function using unit 
//SYNC: go through one by one 
//ASYNC: takes more tasks while doing other tasks
//ASYNC: Node is good at this process
// Node is asyc
// Call back functions: are functions that are called when certan activity is done
// call backs are 
//NON BLOCKING FUNCTION
// Blocking code work sysnchroniously
//setTime excute in the back groud
// node asynchronious and this helps with the blockig functio

// Is java script sync or Async: java script is sync excute line by like
// javascript can be manipulated to be async
// is node js multithreaded: one function can be run by two threads
// threads lives in the code and under the processes
// threads are independent of each other
//(look the locks and threads in java and deadslock)
// threads: Java scripts is a single threaded
// nodes:runs java script async
// in node we have one single threads that runs libuv, and v8 engine
//lib uv handles file system and netword
// EVENT LOOP
// ASYN functions are put in the events Loop and then when complete the result is brought 
// back
// lib uv has a collection of threads and are set to take work as they come
// there are 4 threads seating waiting(ASYNCH)
// file system libuv send it to one of thread then event loop 
// WHERE POSSIBLE LIB UV DOES USE OPERATING SYSTEM AND WE DO NOT USE THREADS
// THIS ALLOWS TO RUN ASYNCHRONOUS I/O
// NODE DOES NOT COMPLICATE LIFE BY USING FEW THREAD
// EVENT loops: 
// event loop allows to run node to as asynchronous 
// it checks if node process should exit and if not then it process all the events sent to it 
// this loop works when the node is running and the actual loop lives in lib uv and implemented in c
// How does LOOP WORKS
// it uses a queu like when the time is done for call 
// when the time has passed then what happens is that the new call back is passed to the callback queue
// HOW EVENTS PROCESSES EVENTS
// there are several call back queue
// there are difference queues that handles each phase of operations
// EVENT LOOP PHASES: these phases have queues and thes phase are as follows: 
// Timers
// I/O callbacks
// setImmediate
// close callbacks
// for example: 
// a call for set timer goes to timers queue
// TIMERS: 
// setTimeout
// setTimeInterval
// setImmediate
// all of those above time goes to timers phase
// EVENT LOOP
// setImmediate: is excuted immediatly but it does not excute immediary
// when the loop start: TIMERS ARE CHECKED TO SEE IF THERE ARE TIMERS FUNCTION
// THIS FUNCTION IS CALLED ticks
//time functions then i/o callbacks then setImmediate(called this because after i/o) then close
// callbacks is called
// COMPARING NODE, PHP, PYTHON(ALL ARE LIKE JAVASCRIPT)
// NODE BECAME SO POPULAT BECAUSE OF NON BLOCKING 
// ENGINE - LIBUV- THEN EVENT LOOPS SOME TIME THE LIBUV SEND SOME TO THE PROCESS DIRECT TO THE 
// OPERATING SYSTEM
// PHP: Create crazy threads for each crient when used with apatch
// WHEN DO WE USED NODE: 
// It is not good for machine learning because they are blocking
// node is good at servers
// email and authetication 
// works well input and output
// good for serving data for such as sending and receiving data
// node is made for modern web
// NODE is an vent driven
// Design pattern: helps us to not invent a wheel
// obsever design pattern 
// a subject that notifies many observer
// OBSERVER PATTERN IN NODE: 
//EVENTS ARE NOTIFIED USING CALLBACK FUNCTIONS
//EVENTS MODULES
// LISTNERS ARE CALLED BACK FUNCTIONS
//EVENTS EMMITTERS: calls require functions 
// require allows us to use event module