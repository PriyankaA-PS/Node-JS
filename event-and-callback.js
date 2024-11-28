// when they ask difference between event and callbacks

const EventEmitter = require ("event");

const myEmitter = new EventEmitter();

myEmitter.on('done', (callback) =>{
callback();
});

myEmitter.emit('done',() =>{
    console.log("Task completed!!!!");
});

// output : Task completed!!!!
