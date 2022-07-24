const {Schema,model} = require('mongoose');

const apodSchema = Schema({
    date: {type: Date, require:true},
    explanation: {type: String},
    hdurl: {type: String},
    media_type:{type: String},
    service_version:{type: String},
    title:{type: String},
    url:{type: String}
})


const Apod = new model('apod', apodSchema);

module.exports = Apod;







