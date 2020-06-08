const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketio(server);
const chemin = {
    root: __dirname + '/front'
};

// Middlewares
app.use(express.static(chemin.root));

// Routes
app.get('/', (req, res) => {
    res.render('/index.html');
})

// socket.io
let value = '';
let checked;
io.on('connection', function (socket) {
    // console.log('socket open');
    socket.on('value', function (valueContent) {
        value = valueContent;
    })

    socket.on('valueSearch', function () {
        console.log(value);
        socket.emit('valueReception', value);
    })

    socket.on('changeColor', function (buttonCkecked) {
        // console.log(buttonCkecked)
        checked = buttonCkecked;
        socket.emit('changeColorBackground', checked);
    })

    socket.on('changeBackground', function () {
        // console.log(checked);
        socket.emit('changeColorBackground', checked);
    })
})

// Lancement de l'application
server.listen(process.env.PORT || 5234, () => console.log("Serveur ouvert sur le port 5234"));