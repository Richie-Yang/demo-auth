const mongoose = require('mongoose')
const { Schema } = mongoose


const userSchema = new Schema({
    first_name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  }, 
  { timestamps: { 
      createdAt: 'created_at' ,
      updatedAt: 'updated_at'
    } 
  }
)


module.exports = mongoose.model('User', userSchema)