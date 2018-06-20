const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection('mongodb://bunny_thop:unlock321@ds163330.mlab.com:63330/bunny_rest')
autoIncrement.initialize(connection);

const studentSchema = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  mobile:{
    type:String,
    required:true
  },
  email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
  h_no:{
    type:String,
    required:true
  }
})
studentSchema.plugin(autoIncrement.plugin, 'Student');
module.exports = mongoose.model('Student', studentSchema);
