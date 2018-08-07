const mongoose = require('mongoose');
const {Schema} = mongoose;
const RecipientSchema = require('./recipient');

const surveySchema = new Schema({
title:String,
body:String,
subject:String,
recipients: [RecipientSchema],
yes : {type : Number , default:0},
no : {type : Number , default:0},
_user: {type: Schema.Types.ObjectId, ref:'user'},
dataent: Date , 
lastResponded: Date
});

const Survey=mongoose.model('surveys', surveySchema);

module.exports.Survey = Survey;