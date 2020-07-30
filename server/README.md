## Table Of Contents

- [About-this-project](#About-this-project)
- [what is MEME-Generator?](#what-is-MEME-Generator?)
- [Directory-Structure](#Directory-Structure)
- [Getting-Started](#Getting-Started)
- [Version-Control](#Version-Control)
- [Running-The-Project](#Running-The-Project)
- [Dependancies](#Dependancies)

## About This Project

### What is MEME Generator ?

    
* User can load new image from his/her mobile phone from add image screen.
* Once the user picks up an image from mobile, the user can add two texts(Top and bottom text) on the loaded image into add text screen. From this screen, the user can change the image as well. 
* Once the user is done with text then they can save that particular image with text and user can also change color and move text and  save into his/her phone.
* User can also see this all the edited(Bottom and top text) images with this application into my memes screen. 

  
## Directory Structure

```
+-- /app [Node.js backend using express,Mongoose]
+-- /src
     +-- /controller
        +-- [Express controllers for the REST API]
     +-- /model
        +-- [Mongoose model]
+-- /routes
    +-- [Path of api ]
+-- /public
    +-- /images
        +-- [category wise stickers folder]
+-- /app.js [The main enrty point where the app is started/intialized]

```

## Getting started

  1. Install a git client.

  2. Install an IDE(like visual studio code),visual studio is recommended,beacuse it has great  Commandline integration and javascript building/debugging features.

  3. Install Nodejs 8.10.0 

  4. Add NODE_PATH TO environment variables with values /node_modules.

  5. Enter the project folder and run the following command to get all right files in the right place
     `npm install`

  6. Start Node js via commandline in visual studio code.

  7. Open the project in visual studio code.

  8. The apllication can be accessed locally at http://localhost:3000.

## Version control

* we use git for version control

## Running the project

1. Navigate to your local project root directory in the command line of your choice.

2. Start the mongodb server.

3. Run node server.js or u can use nodemon if u have installed it.


## Dependancies

* Open package.json to see all development and production dependencies or run npm ls in the project     root directory for all installed dependencies


## What is Node-Js?

* Node.js is an open source server environment.
* Node.js is free.
* Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.).
* Node.js uses JavaScript on the server.

## Node-Js version

```json
{
 "version": "8.10.0"
}
```

## What Can Node-js do?

* Node.js can generate dynamic page content.
* Node.js can create, open, read, write, delete, and close files on the server.
* Node.js can collect form data.
* Node.js can add, delete, modify data in your database.
  
### `node server.js`

* Runs the app this sever `node app.js` or `nodemon`


## What is express?

* Express provides a minimal interface to build our applications. It provides us the tools that are     required to build our app. It is flexible as there are numerous modules available on npm, which can   be directly plugged into Express.

## Express Framework version

```json
{
    "express": "^4.16.1"
}
```

## What is Body-parser?

* body-parser extract the entire body portion of an incoming request stream and exposes it on           req.body . The middleware was a part of Express.js earlier but now you have to install it             separately. This body-parser module parses the JSON, buffer, string and URL encoded data submitted    using HTTP POST request.

## Body-Parser version

```json
{
     "body-parser": "^1.18.3"
}
```

