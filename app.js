var express = require('express');
var app = express();
var port = 4200;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var dataProcessRouter = require('./dataProcessRouter/DataProcessRouterLogin');

mongoose.connect('mongodb://127.0.0.1:27017/Timesheet')
    .then(()=>{
        console.log("MongoDB <Timesheet> connected successfully");
    })
    .catch(err=>{
        console.log('Problem connecting MongoDB <Timesheet>', err.stack);
        process.exit(1);
    })

app.use(express.static('public'))
app.use(cors());

/*
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}))
*/



//app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

app.use(bodyParser.json({limit: '50mb'}));

app.use('/', dataProcessRouter);

app.listen(port, function(){
    console.log('Listening to server port 4200 ...');
})