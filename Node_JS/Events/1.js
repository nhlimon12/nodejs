// const events = require('events');
// const eventEmitter = new events.EventEmitter();

// // Creating an event handler:
// var eventHandler = () => {
//     console.log("An event has been occurred!");
// }

// // Assign the event handler to an event...
// eventEmitter.on('limon', eventHandler);

// // Firing the event.....
// eventEmitter.emit('limon');


// const events = require('events');
// const fs = require('fs');
// const eventEmitter = new events.EventEmitter();
// const myFunction = () => {
//     fs.writeFile('hello.txt', 'This is some text', (err) => {
//         if(err) {
//             console.log('An error happened!');
//         } else {
//             console.log('File created successfully.🙃');
//         }
//     });
// };
// eventEmitter.on('shout', myFunction);
// eventEmitter.emit('shout');


// const events = require('events');
// const eEmitter = new events.EventEmitter();
// const hello = (message) => {
//     console.log(message);
// };
// eEmitter.on('myEvent', hello);
// eEmitter.on('myEvent', hello);
// eEmitter.on('myEvent', hello);
// eEmitter.emit('myEvent', "Hi there!")
// eEmitter.emit('myEvent', "Hello there!")
// eEmitter.emit('myEvent', "Bye there!")
// eEmitter.on('myEvent', hello);
// eEmitter.emit('myEvent', 'Hi')
// eEmitter.emit('myEvent2', 'Hi there!') // This will not work because myEvent will be fired only once. :)


// Removing listeners:
// const events = require('events');
// const eventEmitter = new events.EventEmitter();
// const func1 = (message) => {
//     console.log(message);
// };
// const func2 = (message) => {
//     console.log(message);
// };
// eventEmitter.addListener('firstEvent', func1);
// eventEmitter.addListener('firstEvent', func2);
// eventEmitter.emit('firstEvent', 'First');
// eventEmitter.emit('firstEvent', 'Second');
// // eventEmitter.removeListener('firstEvent', func1)
// eventEmitter.removeAllListeners('firstEvent');
// eventEmitter.emit('firstEvent', 'Third');


// Getting and setting default max listeners
// const events = require('events');
// const eventEmitter1 = new events.EventEmitter();
// const eventEmitter2 = new events.EventEmitter();
// console.log(`Default max listeners of eventEmitter1 is : ${eventEmitter1.getMaxListeners()}`);
// console.log(`Default max listeners of eventEmitter2 is : ${eventEmitter2.getMaxListeners()}`);

// events.defaultMaxListeners = 5

// console.log(`Default max listeners of eventEmitter1 is : ${eventEmitter1.getMaxListeners()}`);
// console.log(`Default max listeners of eventEmitter2 is : ${eventEmitter2.getMaxListeners()}`);

// eventEmitter1.setMaxListeners(50);
// console.log('---------');
// console.log(`Default max listeners of eventEmitter1 is : ${eventEmitter1.getMaxListeners()}`);
// console.log(`Default max listeners of eventEmitter2 is : ${eventEmitter2.getMaxListeners()}`);


// Getting the listeners:
// const events = require('events');
// const eventEmitter = new events.EventEmitter();
// const f1 = () => {
//     console.log('Hi there!Function1');
// };
// const f2 = () => {
//     console.log('Hi there!Function2');
// };
// const f3 = () => {
//     console.log('Hi there!Function3');
// };
// eventEmitter.on('scream', f1);
// eventEmitter.on('scream', f2);
// eventEmitter.on('scream', f3);
// console.log(eventEmitter.listeners('scream'));
// console.log(eventEmitter.listenerCount('scream'));
// eventEmitter.prependOnceListener('shout', f3);
// eventEmitter.on('shout', f1);
// eventEmitter.on('shout', f2);
// console.log(eventEmitter.listeners('shout'));
// eventEmitter.emit('shout');




// Practices:
// const events = require('events');
// const eventEmitter = new events.EventEmitter();
// const func1 = () => {
//     console.log('Function 1');
// };
// const func2 = () => {
//     console.log('Function 2');
// };
// eventEmitter.on('limon', func1);
// eventEmitter.emit('limon');
// eventEmitter.addListener('myEvent', func1);
// eventEmitter.once('myEvent', func2);
// eventEmitter.emit('myEvent');
// eventEmitter.emit('myEvent');
// --
// eventEmitter.on('myEvent', func1);
// eventEmitter.emit('myEvent');
// eventEmitter.removeListener('myEvent', func1);
// eventEmitter.once('myEvent', func2);
// eventEmitter.emit('myEvent');
// console.log('Removing all listeners');
// eventEmitter.removeAllListeners('myEvent')
// console.log('All listeners removed');
// --
// Getting and setting default max listeners
// const events = require('events');
// const eventEmitter1 = new events.EventEmitter();
// const eventEmitter2 = new events.EventEmitter();
// const func1 = () => {
//     console.log('Function 1');
// };
// const func2 = () => {
//     console.log('Function 2');
// };
// const func3 = () => {
//     console.log('Function 3');
// };
// eventEmitter1.on('myEvent', func1)
// eventEmitter1.on('myEvent', func2)
// eventEmitter1.on('myEvent', func1)
// eventEmitter1.on('myEvent', func2)
// console.log(`Maximum listeners of eventEmitter1 is ${eventEmitter1.getMaxListeners()}`);
// console.log(`Maximum listeners of eventEmitter2 is ${eventEmitter2.getMaxListeners()}`);
// events.defaultMaxListeners = 2;
// console.log(`Maximum listeners of eventEmitter1 is ${eventEmitter1.getMaxListeners()}`);
// console.log(`Maximum listeners of eventEmitter2 is ${eventEmitter2.getMaxListeners()}`);
// for (let i = 0; i < 3; i++) {
//     eventEmitter1.on('myEvent', func1);
// }
// console.log(eventEmitter1.listenerCount('myEvent'));'
// eventEmitter1.setMaxListeners(4);
// console.log(`Maximum listeners of eventEmitter2 is ${eventEmitter2.getMaxListeners()}`);
// for (let i = 1; i < 6; i++) {
//     eventEmitter1.addListener('myEvent', func2);
// };
// console.log(`Maximum listeners of eventEmitter1 is ${eventEmitter1.getMaxListeners()}`);
// console.log(`There are ${eventEmitter1.listenerCount('myEvent')} listeners that are set to eventEmitter1`);
// console.log(eventEmitter1.listeners('myEvent'));




// eventEmitter1.prependListener('myEvent', func2);
// eventEmitter1.prependListener('myEvent', func3);
// eventEmitter1.on('myEvent', func1);
// console.log(eventEmitter1.listeners('myEvent'));


// Special Events:
// Importing events
// const EventEmitter = require('events');

// // Initializing event emitter instances
// var eventEmitter = new EventEmitter();

// // Register to error
// eventEmitter.on('error', (err) => {
// 	console.error('whoops! there was an error');
// });

// // Register to newListener
// eventEmitter.on( 'newListener', (event, listener) => {
// 	console.log(`The listener is added to ${event}`);
// });

// // Register to removeListener
// eventEmitter.on( 'removeListener', (event, listener) => {
// 	console.log(`The listener is removed from ${event}`);
// });

// // Declaring listener fun1 to myEvent1
// var fun1 = (msg) => {
// 	console.log("Message from fun1: " + msg);
// };

// // Declaring listener fun2 to myEvent2
// var fun2 = (msg) => {
// 	console.log("Message from fun2: " + msg);
// };

// // Listening to myEvent with fun1 and fun2
// eventEmitter.on('myEvent', fun1);
// eventEmitter.on('myEvent', fun2);

// // Removing listener
// eventEmitter.off('myEvent', fun1);

// // Triggering myEvent
// eventEmitter.emit('myEvent', 'Event occurred');

// // Triggering error
// eventEmitter.emit('error', new Error('whoops!'));


// const events = require('events');
// const eventEmitter = new events.EventEmitter();
// const f1 = (msg) => {
//     console.log('F1 message: ' + msg);
// };
// const f2 = (msg) => {
//     console.log('F2 message: ' + msg);
// };
// const f3 = (msg) => {
//     console.log('F3 message: ' + msg);
// };
// // Registering the error event:
// eventEmitter.on('error', (err) => {
//     console.log('Oooops! Error!🥲');
//     console.log('Program ended!😥');
// });
// // Registering the newListener event:
// eventEmitter.on('newListener', (event, listener) => {
//     console.log('The listener is added to ' + event);
// });
// // Registering the removeListener event:
// eventEmitter.on('removeListener', (event, listener) => {
//     console.log('The listener is removed from ' + event);
// });

// eventEmitter.emit('newEvent', "My message");
// console.log(eventEmitter.listeners('newEvent'));

// eventEmitter.on('newEvent', f1);
// eventEmitter.on('newEvent', f1);
// eventEmitter.on('myEvent', f2);
// eventEmitter.off('newEvent', f1);

// Triggering error:
// eventEmitter.emit('error', new Error('Oooops!'));


// Asynchrounous events:
// const events = require('events');
// const eventEmitter = new events.EventEmitter();
// const function1 = (message) => {
//     console.log('This is from a sync way!');
// };
// const function2 = (message) => {
//     setImmediate(() => console.log('This is from an async way'), 10000)
// };
// const function3 = (message) => {
//     console.log('This is from a default way');
// };
// const function4 = (message) => {
//     setImmediate(() => console.log('This is from also an async way'), 10000)
// };
// eventEmitter.on('myEvent', function2);
// eventEmitter.on('myEvent', function3);
// eventEmitter.on('myEvent', function4);
// eventEmitter.on('myEvent', function3);
// eventEmitter.on('myEvent', function4);
// eventEmitter.on('myEvent', function1);
// eventEmitter.emit('myEvent', "");