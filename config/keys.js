// This file is used to return the credentials based on the ENVIRONMENT 

if(process.env.NODE_ENV == 'production' ){
    // This is PRODUCTION ENVIRONMENT - return Production keys
    module.exports = require('./prod')
}else{
    // This is DEVELOPMENT ENVIRONMET - return Development keys
    module.exports = require('./dev')
}