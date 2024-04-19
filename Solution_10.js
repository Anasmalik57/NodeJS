const EventEmitter = require('events');
const event = new EventEmitter();

const message = (channelName) => {
    console.log(`Thanks For Subscribing to ${channelName}`);
}

event.on('Subscribe', message)
event.emit('Subscribe', 'College Wallah')

console.log(`The default maximum numbers of Event Listners are: ${event.getMaxListeners()}`);
event.setMaxListeners(5);
console.log(`The Updated maximum numbers of Event Listners are: ${event.getMaxListeners()}`);