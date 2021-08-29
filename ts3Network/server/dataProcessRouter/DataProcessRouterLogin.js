var express = require('express');
var dataProcessRouter = express.Router();
var ModelTimesheet = require('../models/ModelTimesheet');
var moment = require('moment');


/******************************************************************************/
/* timesheet
/******************************************************************************/
dataProcessRouter.route('/timesheet').get(function(req, res){
    ModelTimesheet.find(function(err, items){
        if(err){
            console.log("<Error>: Error finding timesheet records");
        } else {
            res.json(items);
        }
    });
    
   // res.send("root detected");
});


dataProcessRouter.route('/timesheet/find/:id').get(function(req, res){
    ModelTimesheet.findOne({key: req.params.id}, function(err, items){
        if(err){
            console.log("<Error>: Error finding timesheet records");
        } else {
            res.json(items);
        }
    });
    
});


dataProcessRouter.route('/timesheet/update/:id').post(function(req, res){

    // res.send("req: ", req)
     var updateKey = req.params.id
     var _key = moment(req.body.txDate).format("L") +
                req.body.staffCode +
                req.body.group +
                req.body.project +
                req.body.activity 

     console.log("DataProcessRouterLogin => updateKey: ", updateKey)
 
 
     ModelTimesheet.findOneAndUpdate(
         
         {_id: updateKey}, // conditions
         
         {$set: 
             {staffCode: req.body.staffCode,
              key: _key,
              project: req.body.project,
              group: req.body.group,
              activity: req.body.activity,
              timeSpent: req.body.timeSpent,      
              txDate: req.body.txDate,
           
             }}, 
 
         {new: true}, // return updated record; if false return record before update
 
         (err, newTimesheet) => {
             if (err){
                 console.log("Something wrong when update data", err)
             } else {
             
                 console.log("New timesheet after update: ", newTimesheet)
                 res.json("Record << " + updateKey + " >> updated successfully")
             }
             
 
         }); // ModelTimesheet.findOneAndUpdate
 
     }); //dataProcessRouter.route('/update/:id').post(function(req, res){

dataProcessRouter.route('/timesheet/post').post(function(req, res){

    var _modelTimesheet = new ModelTimesheet();
    _modelTimesheet.key = req.body.key;
    _modelTimesheet.txDate = req.body.txDate;
    _modelTimesheet.staffCode = req.body.staffCode;
    _modelTimesheet.group = req.body.group;
    _modelTimesheet.project = req.body.project;
    _modelTimesheet.activity = req.body.activity;
    _modelTimesheet.timeSpent = req.body.timeSpent;
   
    console.log("dataProcessRouter => req.method: ", req.method)
    console.log("dataProcessRouter => req.body.staffCode: ", req.body.staffCode)
    console.log("dataProcessRouter => _modelTimesheet: ", JSON.stringify(_modelTimesheet))

        _modelTimesheet.save()

        .then(_modelTimesheet=>{
            res.json("Record added successfully");
        })
        .catch(err=>{
            res.status(400).send("Unable to save record");
        });
});

dataProcessRouter.route('/timesheet/delete/:id').get(function(req, res){
    var deleteKey = req.params.id;
    console.log("DataProcessRouterLogin => deleteKey: ", deleteKey)

    ModelTimesheet.findOneAndDelete(
      //  {_id: "ObjectId("+ deleteKey +")"}, 
      {_id: deleteKey},
        function(err, staff){
        if(err) res.json(err);
        else res.json("Record << " + deleteKey + " >> deleted successfully")
    })
});

module.exports = dataProcessRouter;