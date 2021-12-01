const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
 
/* io.on('connection', (socket) => {  
  socket.on('chat message', msg => { 
    io.emit('chat message', msg);
  });  
}); */
 


io.on('connection', function(socket){
    console.log('a user connected: ' + socket.id); 
	socket.on('disconnect', msg => { 
		io.emit('chat message', " disconnect ");
	});
    socket.on('join', msg => { 
		io.emit('chat message', "on join");
	});
	socket.on('chat message', msg => { 
		io.emit('chat message', msg);
	}); 
});
    
http.listen(port, () => {
  console.log('Socket.IO server running at http://localhost:'+port+'/');
});

