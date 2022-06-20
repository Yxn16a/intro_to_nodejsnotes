const EventEmitter = require('events');
// this emit the new event
const celebrity = new EventEmitter();
// we have an observer to the one to the celeberity
celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log('Congratulations you are the best');
    }

})
// what is happening above is that when eventemmiter realease an event such as race win
// the observer or the listner which is the the function that prints the on the console 
// will print congratulations you are the best. function is a listner and at the same time a 
// call back function 

// observe 2 may be a competitor to the race winner and they may say boo I would have won that 
// race
celebrity.on('race', (result) => {
    if (result === 'lost') {
        console.log('Boo, I would have won that race loser...');
    }
})
// code = 0 when successful, 
process.on('exit', (code) => {
    console.log('process exist event with code', code);
})

// how do we trigger those events we call a call emit function 
// we can trigger the events by calling a emit function on the celebrity function 
celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');
// using this model we can use this model to create celeblicy and listner
//Process is an instance of event emitter
// process has on function to react to events 
// the process can respond to the exit event by printing the process exit event with code