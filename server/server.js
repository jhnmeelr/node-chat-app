import path from 'path';
import http from 'http';
import express from 'express';
import socketIO from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected')

    socket.emit('newMessage', {
        from: 'John',
        text: 'See you then',
        createdAt: 123
    })

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected')
    });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})