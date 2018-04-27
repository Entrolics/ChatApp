# Entrolics Chat App

This is a very simple chat app to illustrate a sample use of NodeJS to the Entrolics Team

## Running the Program

In the chatapp directory, run the following command into terminal
(note: you will need to have installed node.js)

```
$ node server.js
```

Now open a web browser instance and go to localhost:3000

## Front End Structure

### HTML

The primary interface consists of a text box on the left side to serve as the "username" field, a text box on the bottom that serves as the input area for a message, and a central scrollable box where messages are displayed.

### CSS

Bootstrap is used to style the page as well as align content

### Javascript

The javascript code is included in the base index.html file and it controls capturing data from the above fields and sending them to the backend in order to be added to the "database".
AJAX is used for these requests, as well as polling the server frequently to synchronize messages. 

## Back End Structure

### Node JS

A file called server.js includes the entirety of the backend server. This server is responsible for sending index.html to any client who connects, as well as storing chat messages and updating clients that request the latest message.

## Conclusion

This chat app was designed in a short time as an introduction to NodeJs. Please familiarize yourself with this code (and improve upon it if you can!) as the technologies used here can allow us to build web applications that are scalable and efficient.
