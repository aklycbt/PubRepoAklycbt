var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelTimesheet = new Schema({ 

        key: '',
        staffCode: '',
        group: '',
        project: '',
        activity: '',
        txDate: {type: Date},
        timeSpent: '',
        submitted: false
},
{
    collection: 'timesheet'
});

module.exports = mongoose.model('ModelTimesheet', ModelTimesheet);