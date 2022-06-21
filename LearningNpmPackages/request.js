const axios = require('axios'); 
// there are many functions that axios that allows us to do
// uses http model and in the browser
// it useds the XMLHttpRequests
// it also uses promise api
// that it takes in the json data
// cancels the request
// we can created 
axios.get('https:// www.google.com')
    .then((response) => {
        console.log(response);
    });

