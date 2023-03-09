const XMLHttpRequest = require('xmlhttprequest'); 
const API = 'http;//api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhhtp.open('GET, urlApi, true')
    xhhtp.onreadystatechange = function (event) {
        if (xhhtp.readyState === 4 ) {
            if(xhttp.status === 200) {
            callback(null, JSON.parse(xhhtp.resposeText))

            }

        } else {
            const error = new Error('Error' +urlApi)
            return callback(error, null)
        }
    }
    xhhtp.send();
}