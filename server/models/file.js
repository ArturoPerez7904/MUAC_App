const mongoose = require('mongoose');
const Joi = require('joi');

const fileSchema = new mongoose.Schema({
    fileName: {type: String, required: true},
    creator: {type: String, required: true}
})

const File = mongoose.model("file", fileSchema);

const validate = (data) => {
    const schema = Joi.object({
        fileName: Joi.string().required().label("File Name"),
        creator: Joi.string().required().label("Creator")
    });
    return schema.validate(data)
};

module.exports = {File, validate};