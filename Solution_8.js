const EventEmitter = require('events');
const event = new EventEmitter();

const message = (channelName)=>{
    console.log(`Thanks For Subscribing to ${channelName}`);
}

event.on('Subscribe', message)
event.emit('Subscribe', 'College Wallah')