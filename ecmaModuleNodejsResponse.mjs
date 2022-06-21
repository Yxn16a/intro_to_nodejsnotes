function decrypt(data) { 
    return 'decrypted data'
}
function read() { 
    return decrypt('data'); 
}
// no need of mentioning module 
// in front of the  export
export { 
    read,
}