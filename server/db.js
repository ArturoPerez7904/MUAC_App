const mongoose = require('mongoose');

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try{
        mongoose.connect(process.env.database, connectionParams);
        console.log('Successfully connected to database')
    }
    catch (error){
        console.log(error)
        console.log('Failed to connect to database')
    }
};