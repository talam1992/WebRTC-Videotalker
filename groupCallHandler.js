const createPeerServerListeners = (peerServer) => {
    peerServer.on('connection', (client) => {
        console.log('successfully connected to peer js server');
        console.log(client.id);
    });
};

module.exports = {
    createPeerServerListeners
};