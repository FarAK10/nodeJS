const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name,id) => {
  console.log('data received '+name);
})

customEmitter.on('response', () => {
  console.log('data changed');
})




customEmitter.emit('response','fara');