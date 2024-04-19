const EventEmitter = require('events');
const event = new EventEmitter();

const message = (channelName)=>{
    console.log(`Thanks For Subscribing to ${channelName}`);
}
event.on('Subscribe', message)

console.log(`Calling event listner before removing the event.`);
event.emit('Subscribe', 'College Wallah');

console.log(`Calling event listner after removing the event`);
event.removeListener('Subscribe', message);
event.emit('Subscribe', 'College Wallah');  