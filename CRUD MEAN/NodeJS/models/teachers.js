const mongoose = require('mongoose');

var Teacher = mongoose.model('Teacher', {
    name: {type:String},
    position: {type: String},
    office: {type: String},
    salary: {type: String}
});

module.exports = { Teacher };