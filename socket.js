let io;

module.exports = {
    init: httpServer => {
        io = require('socket.io')(httpServer, {
            cors: {
                origin: ['http://localhost:3000', 'http://localhost:3001', 'https://lab23nodejs.netlify.app'],
                methods: ["GET", "POST"]
            }
        });
        return io;
    },
    getOI: () => {
        if (!io) {
            throw new Error('Socket.io has not initialized!');
        }
        return io;
    }
};