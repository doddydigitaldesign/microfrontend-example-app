console.info('App Orchestration script loaded.');

const broadcastChannel = new BroadcastChannel('messages');

broadcastChannel.postMessage('Hello from App Orchestration');