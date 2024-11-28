/*
Features of Event Loop:

    Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
    The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
    The event loop allows us to use callbacks and promises.
    The event loop executes the tasks starting from the oldest first.
*/

/*
example for - executes the tasks starting from the oldest first.
*/
const events = require('events');
const eventEmitter = new events.EventEmitter();

// Create an event handler as follows
const connectHandler = function connected() {
   console.log('connection succesful.');
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});

// Fire the connection event 
eventEmitter.emit('connection');
console.log("Program Ended.");

/* Output:
Connection succesful.
Data received succesfully.
Program Ended.
*/