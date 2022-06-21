

// the details of the request  is in this folder
function encrypt(data) {
    return 'encrypted data'; 
}
function send(url, data) { 
    const encryptedData = encrypt(data); 
    console.log(`sending ${encryptedData} to ${url}`); 
}
module.exports = {
    // we create an object called send that we set to
    // send:send we would have said that however,since the  function to export
    // is the same as what we used in other module as send we can do the following 
    // we can only mention the send name
    send, 
}
