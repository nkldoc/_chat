const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 5000; 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/clent.html');
}); 
io.on("connection", (socket) => {
	socket.emit("hello", 1, "2",  "user socket id"+ socket.id);
  
 	socket.on('disconnect', msg => { 
		io.emit('chat message', " disconnect " + socket.id);
	}); 
	socket.on('chat message', msg => { 
		io.emit('chat message', msg);
	});  
	
}); 
http.listen(port, () => {
  console.log('Socket.IO server running at http://localhost:'+port+'/');
});

