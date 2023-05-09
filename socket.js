let io;

module.exports = {
    init: httpServer => {
        io = require('socket.io')(httpServer, {
            cors: {
                origin: "http://localhost:3000",
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