// the details of the request  is in this folder
function encrypt(data) {
    return 'encrypted data'; 
}
function send(url, data) { 
    const encryptedData = encrypt(data); 
    console.log(`sending ${encryptedData} to ${url}`); 
}
export{
    send, 
}