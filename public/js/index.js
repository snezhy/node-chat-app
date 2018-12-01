let socket = io();
socket.on('connect', function () {
    console.log('connected to server');
});

socket.on('newMessage', function(message) {
    console.log('New Message', message);
});

socket.on('disconnect', function () {
    console.log('disconnected from server');
});

