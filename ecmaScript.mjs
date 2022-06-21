// when require is used then we are using common js
// es6 or ecm uses imports from 
// these modules uses export instead of export{}
// there is increase in adoption of import
// require is still a big thing in node js
// these is how ecma script looks like
// import  may be used smilitaneus as require
// to use ecma we need to name the files as ecma
// we also need to include the extension of mjs to the files
import { send } from './ecmaModuleNodejsRequest.mjs';  
import { read } from './ecmaModuleNodejsResponse.mjs'; 
function makeRequest(url, data) { 
    send(url, data); 
    return read(); 
}
const returnedData = makeRequest('https://google.com', 'hello'); 
console.log(returnedData)