var express = require('express');
var dataProcessRouter = express.Router();
var ModelTimesheet = require('../models/ModelTimesheet');
var ModelStaff = require('../models/ModelStaff');
var ModelRole = require('../models/ModelRole');
var moment = require('moment');

/******************************************************************************/
/* role
/******************************************************************************/

dataProcessRouter.route('/role').get(function(req, res){
    ModelRole.find(function(err, items){
        if(err){
            console.log("<get error>: Error finding role records");
        } else {
            res.json(items);
        }
    });
    

   // res.send("root detected");
});

dataProcessRouter.route('/role/update/:id').post(function(req, res){

    // res.send("req: ", req)
     var updateKey = req.params.id
 
     console.log("DataProcessRouterLogin => updateKey: ", updateKey)
 
     ModelRole.findOneAndUpdate(
         
         {_id: updateKey}, // conditions
         
         {$set: 
             {role: req.body.role,
                description: req.body.description
           
             }}, 
 
         {new: true}, // return updated record; if false return record before update
 
         (err, newRole) => {
             if (err){
                 console.log("Something wrong when update data", err)
             } else {
             
                 console.log("New role after update: ", newRole)
                 res.json("Record << " + updateKey + " >> updated successfully")
             }
             
 
         }); // ModelRole.findOneAndUpdate
 
     }); //dataProcessRouter.route('/update/:id').post(function(req, res){

dataProcessRouter.route('/role/post').post(function(req, res){

    var _modelRole = new ModelRole();
    _modelRole.role = req.body.role,
    _modelRole.description = req.body.description
   
    console.log("dataProcessRouter => req.method: ", req.method)
    console.log("dataProcessRouter => req.body.role: ", req.body.role)
    console.log("dataProcessRouter => _modelRole: ", JSON.stringify(_modelRole))

        _modelRole.save()

        .then(_modelRole=>{
            res.json("Record added successfully");
        })
        .catch(err=>{
            res.status(400).send("Unable to save record");
        });
});

dataProcessRouter.route('/role/delete/:id').get(function(req, res){
    var deleteKey = req.params.id;
    console.log("DataProcessRouterLogin => deleteKey: ", deleteKey)

    ModelRole.findOneAndDelete(
      //  {_id: "ObjectId("+ deleteKey +")"}, 
      {_id: deleteKey},
        function(err, staff){
        if(err) res.json(err);
        else res.json("Record << " + deleteKey + " >> deleted successfully")
    })
});


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


/******************************************************************************/
/* staff
/*******************************************************************************/
dataProcessRouter.route('/staff').get(function(req, res){
    ModelStaff.find(function(err, items){
        if(err){
            console.log("<Error>: Error finding staff records");
        } else {
            res.json(items);
        }
    });
    

   // res.send("root detected");
});

dataProcessRouter.route('/staff/post').post(function(req, res){

    var _modelStaff = new ModelStaff();
    _modelStaff.txDate = req.body.txDate;
    _modelStaff.staffCode = req.body.staffCode;
    _modelStaff.password = req.body.password;
    _modelStaff.staffName = req.body.staffName;
    _modelStaff.title = req.body.title;
    _modelStaff.department = req.body.department,
    _modelStaff.email = req.body.email,
    _modelStaff.boolPrjSumRptReceiver = req.body.boolPrjSumRptReceiver,
    _modelStaff.boolActualMDGTBillableMD = req.body.boolActualMDGTBillableMD,
    _modelStaff.boolAdjustBillableMD = req.body.boolAdjustBillableMD,
    _modelStaff.boolAssignTeamMembers = req.body.boolAssignTeamMembers,
  //  _modelStaff.testNumber = req.body.testNumber,

    console.log("dataProcessRouter => req.method: ", req.method)
    console.log("dataProcessRouter => req.body.staffCode: ", req.body.staffCode)
    console.log("dataProcessRouter => _modelStaff: ", JSON.stringify(_modelStaff))

        _modelStaff.save()

        .then(_modelStaff=>{
            res.json("Record << " + req.body.staffCode + " >> added successfully");
        })
        .catch(err=>{
            res.status(400).send("Unable to save record");
        });
});

/*
dataProcessRouter.route('/edit/:id').get(function(req, res){
    var id=req.params.id;
    ModelStaff.findById(id, function(err, item){
        if(err){
            console.log("<edit error>: Error finding login records");
        } else {
            res.json(item);
        }
    });
});
*/

dataProcessRouter.route('/staff/update/:id').post(function(req, res){

   // res.send("req: ", req)
    var updateKey = req.params.id

    console.log("DataProcessRouterLogin => updateKey: ", updateKey)

    console.log("req.body.boolPrjSumRptReceiver", req.body.boolPrjSumRptReceiver)
    console.log("req.body.boolActualMDGTBillableMD", req.body.boolActualMDGTBillableMD)
    console.log("req.body.boolAdjustBillableMD", req.body.boolAdjustBillableMD)
    console.log("req.body.boolAssignTeamMembers", req.body.boolAssignTeamMembers)

    ModelStaff.findOneAndUpdate(
        
        {staffCode: updateKey}, // conditions
        
        {$set: 
            {staffName: req.body.staffName,
          
             password: req.body.password,
             title: req.body.title,
             department: req.body.department,
             email: req.body.email,
             
             boolPrjSumRptReceiver: req.body.boolPrjSumRptReceiver,
             boolActualMDGTBillableMD: req.body.boolActualMDGTBillableMD,
             boolAdjustBillableMD: req.body.boolAdjustBillableMD,
             boolAssignTeamMembers: req.body.boolAssignTeamMembers,
             txDate: req.body.txDate
             
       /*     boolPrjSumRptReceiver: 1,
            boolActualMDGTBillableMD: 1,
            boolAdjustBillableMD: 1,
            boolAssignTeamMembers: 1,
             txDate: req.body.txDate,
            */
             //testNumber: req.body.testNumber
            }}, 

        {new: true}, // return updated record; if false return record before update

        (err, newStaff) => {
            if (err){
                console.log("Something wrong when update data", err)
            } else {
            
                console.log("New staff after update: ", newStaff)
                res.json("Record << " + updateKey + " >> updated successfully")
            }
            

        }); // ModelStaff.findOneAndUpdate

    }); //dataProcessRouter.route('/update/:id').post(function(req, res){

dataProcessRouter.route('/staff/delete/:id').get(function(req, res){
    var deleteKey = req.params.id;
    console.log("DataProcessRouterLogin => deleteKey: ", deleteKey)

    ModelStaff.findOneAndDelete(
        {staffCode: deleteKey}, 
        function(err, staff){
        if(err) res.json(err);
        else res.json("Record << " + deleteKey + " >> deleted successfully")
    })
});

module.exports = dataProcessRouter;