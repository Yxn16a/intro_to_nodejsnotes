// this is a special file in node js
// this file is a path to the export of the files that are located 
// inside the module folder
// we can export our modules here like this
// after we write the following code 
// we can go to the commonModuleNodejs1.js and access the returned object from index file
// this object come from on of the module in the internals folder
// const request = require('./commonModuleNodejsRequest');
// const response = require('./commonModuleNodejsResponse')
// module.exports = {
//     // request: require ('./commonModuleNodejsRequest'),
//     // response: require('./commonModuleNodejsResponse')
//     // you can access this directly like the following
//     send: request.send,
//     read: response.read
// }
// we can also use spread and all the properties fron the modules 
// will be extracted
// Then we can comment out all the stuff above
// when you want to be fency
// you can do this
module.exports = {
    ...require('./commonModuleNodejsRequest'),
    ... require('./commonModuleNodejsResponse')
}
// AFTER ALL OF THESE SHOULD WE USE INDEX FILE
// IT SIMPLIFIES IMPORTS
// INDEX CAN ADD UNEXPECTED BEHAVIORS THEREFORE AVOID TO USED IT 
// OVER TIME, IT led to confusion and it adds complexity
