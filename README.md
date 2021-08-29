# PubRepoAklycbt

MERN is a user-friendly full-stack JavaScript framework ideal for building dynamic websites and applications. It is a free and open-source stack designed to supply developers with a quick and organized method for creating rapid prototypes of MERN-based web applications. One of the main benefits of the MERN stack is that a single language, JavaScript, runs on every level of the application, making it an efficient and modern approach to web development. 

#### (1) This project is a simple implementation of the Javascript __MERN__ stack: _MongoDB, ExpressJS, ReactJS_ and _NodeJS._

__The architecture is as follows:__

![image](https://user-images.githubusercontent.com/87492917/131129130-ffec1355-47b0-42c8-b642-42a836b310c9.png)

__MongoDB__ is a document-oriented NoSQL database used for high volume data storage. Instead of using tables and rows as in the traditional relational databases, MongoDB makes use of collections and documents. Documents consist of key-value pairs which are the basic unit of data in MongoDB. Collections contain sets of documents and function which is the equivalent of relational database tables.

__ExpressJS__ is a Node.js web application framework. It is designed to utilize Node.js for running web server and greatly reduce the coding needs to implement server-side integrations for Node.js.

__ReactJS__ is a JavaScript library created for building fast and interactive user interfaces for web applications. It is an open-source, component-based, front-end library responsible only for the application’s view layer. In Model View Controller (MVC) architecture, the view layer is responsible for how the app looks and feels.

__NodeJS__ is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). It provides a rich library of various JavaScript modules which simplifies the development of web applications to a great extent.

#### (2) A sample Timesheet System is used to showcase the key technical components of the application and their interactions.

![image](https://user-images.githubusercontent.com/87492917/131128790-88561357-a428-4d15-a7b0-3e330a6e9a56.png)

The Timesheet System is for managing timesheet records of the project team members who participate in a project for client.

#### 1. Data Model

The timesheet record is made up of the following attributes:
* __key__:        The unique key for identifying the record
* __staffCode__:  The staff participating in the project
* __group__:      The client for which the project is conducted
* __project__:    The project in which the staff is participating
* __activity__:   The project activity to be recorded (e.g. _Planning, Requirement, SAnD, Programming, Unit Test, ... etc_)
* __txDate__:     The transaction date of the timesheet record
* __timeSpent__:  The time spent in the activity in unit of hour in a working day
* __submitted__:  Whether the timesheet record has been submitted or not

![image](https://user-images.githubusercontent.com/87492917/131149829-e5743d1b-ae17-423d-9911-e0dc71c80498.png)

__Mongoose reference for defining model__: http://mongoosejs.com/docs/guide.html

#### 2. Back-end

Port 4200 is used for listening to any server request.  The request is routed to the associated API endpoint for processing with use of ExpressJS (i.e. _var express = require('express');_ ).

![image](https://user-images.githubusercontent.com/87492917/131130549-d7af6d5d-afae-4d7f-8ea8-609bc9b6d641.png)

__Mongoose reference for connecting MongoDB__: http://mongoosejs.com/docs/connections.html

#### 3. Routing

![image](https://user-images.githubusercontent.com/87492917/131130829-2ff1e201-71d1-49f8-a899-c7f7f94e44b2.png)

__React-Router-Dom reference for routing__: https://reactrouter.com/web/guides/quick-start

#### 4. API

####    4.1 Add

![image](https://user-images.githubusercontent.com/87492917/131141596-0eae6713-1384-4340-8e49-ce6e1027440b.png)

####    4.2 Update

![image](https://user-images.githubusercontent.com/87492917/131141682-9ffeaae5-2248-4794-a074-7f70332fba9a.png)

####    4.3 Delete

![image](https://user-images.githubusercontent.com/87492917/131141730-676fded3-8c79-48f7-9c41-fce7532f5bd0.png)

#### (3) System Output

#### 1. Start MongoDB

![image](https://user-images.githubusercontent.com/87492917/131142680-61ed339d-df50-47ca-a597-e0ba1cd6e41f.png)

#### 2. Start Mongosh

![image](https://user-images.githubusercontent.com/87492917/131142650-4fdb76e1-d043-4aae-a9a5-3f4d07a3c335.png)

#### 3. Start Server

__Server Console:__

![image](https://user-images.githubusercontent.com/87492917/131142958-73e22c00-143a-4fa7-98b5-df6a54c55979.png)

#### 4. Start Client

![image](https://user-images.githubusercontent.com/87492917/131142593-3e58155a-4867-4817-95a1-9a0f02f61a78.png)

#### 5. Screen - Login

__The login screen will be displayed automatically after starting the Client.__

![image](https://user-images.githubusercontent.com/87492917/131144678-444e3873-be24-41de-96e3-a03f98dfe9a1.png)

#### 6. Screen - Adding Timesheet Record

__After logging in, the main menu for timesheet record editing is shown:__

![image](https://user-images.githubusercontent.com/87492917/131145038-1e2c592f-2a25-460e-9d98-d79754f701b6.png)
![image](https://user-images.githubusercontent.com/87492917/131145112-4e606d65-cf09-4436-a89b-6d428b8c833e.png)

__After adding record:__

![image](https://user-images.githubusercontent.com/87492917/131145155-f3826eb9-a72b-4ba2-bca0-4466bc61f482.png)

__Checking added record at server console:__

![image](https://user-images.githubusercontent.com/87492917/131145439-916463da-37c2-4ecd-ab0c-0e48bd43df80.png)

#### 7. Screen - Updating Timesheet Record

![image](https://user-images.githubusercontent.com/87492917/131240611-31de1f71-212f-4ff4-8679-38e9dd0262d2.png)

__Checking updated record at server console:__

![image](https://user-images.githubusercontent.com/87492917/131240623-415c718c-ef95-42d1-822f-c01184ce22f2.png)

#### 8. Screen - Deleting Timesheet Record

![image](https://user-images.githubusercontent.com/87492917/131147909-8ebbeab0-f2aa-4a38-a002-96ec00db8eac.png)

__Checking deleted record at server console:__

![image](https://user-images.githubusercontent.com/87492917/131148108-a0fca6eb-eef4-4e97-9e2c-fc677622bea5.png)

