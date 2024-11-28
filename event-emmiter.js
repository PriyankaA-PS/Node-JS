// 1

// event emitter basic

// example 1

/**
 * Create an event emitter instance and register a couple of callbacks
 */
const events = require('events');
const eventEmitter = new events.EventEmitter();

function listenerOne() {
   console.log('First Listener Executed');
}

function listenerTwo() {
   console.log('Second Listener Executed');
}

eventEmitter.on('listenerOne', listenerOne); // Register for listenerOne
eventEmitter.on('listenerOne', listenerTwo); // Register for listenerOne

// When the event "listenerOne" is emitted, both the above callbacks should be invoked.
eventEmitter.emit('listenerOne');


// Output
// First Listener Executed
// Second Listener Executed////-----------------------------------------------------------------------------------------------------------
// example 2

/** 
Registering for the event to be fired only one time using once.
Emit Events Once

*/

const events = require('events');
const eventEmitter = new events.EventEmitter();

function listenerOnce() {
   console.log('listenerOnce fired once');
}

eventEmitter.once('listenerOne', listenerOnce); // Register listenerOnce
eventEmitter.emit('listenerOne');

// Output
//listenerOnce fired once

//--------------------------------------------------------------------------------------------------

// example 3

/*
Registering for the event with callback parameters

Callback Events with Parameters

*/

const events = require('events');
const eventEmitter = new events.EventEmitter();

function listener(code, msg) {
   console.log(`status ${code} and ${msg}`);
}

eventEmitter.on('status', listener); // Register listener
eventEmitter.emit('status', 200, 'ok');

// Output
//status 200 and ok

