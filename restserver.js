var http = require('http');
var url = require("url");
var fs = require("fs");
var querystring = require("querystring");

var chat = [];

var handle = {};
handle["/"] = index;
handle["/addchat"] = addchat;
handle["/update"] = update;

http.createServer(onRequest).listen(3000);

function onRequest(request,response) {
	
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");
	
	if (typeof handle[pathname] === 'function') {
		var postdata = "";
		request.addListener("data", function(chunk){
			postdata += chunk;
		});
		request.addListener("end", function(chunk){
			//postdata = querystring.parse(postdata).text;
			handle[pathname](response, request, postdata);	
		});
	} 
	else {
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/html"});
		response.write("404 Not found");
		response.end();
	}
	
}

function index(response) {
	console.log("Entering index handler");
	fs.readFile("index.html", function(err, data){
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(data);
		response.end();
	});
}

function addchat(response,request,postdata) {
	
	var message = querystring.parse(postdata).username + ": " + querystring.parse(postdata).chatdata;
	chat.push(message);
	response.writeHead(200, {"Content-Type": "text/html"});
    response.end();
}

function update(response, request, postdata) {
	
	var chatSize = querystring.parse(postdata).chatSize;
	
	if (chatSize != chat.length){
		console.log("Chat clearly not same size");
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write('{"chatSize": "'+ chat.length + '", "lastMessage" : "' + chat[chat.length - 1] + '"}');
		response.end();
		
	}
	else {
		
		console.log("chat still same size");
		response.writeHead(404, {"Content-Type": "text/html"});
		response.write("404 Not found");
		response.end();
		
	}
	
}
