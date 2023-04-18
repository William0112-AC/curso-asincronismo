const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; 6.8k (gzipped: 2.7k)
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; 
const API = 'http;//api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();
    xhhtp.open('GET, urlApi, true')
    xhhtp.onreadystatechange = function (event) {
        if (xhhtp.readyState === 4 ) {
            if(xhttp.status === 200) {
            callback(null, JSON.parse(xhttp.responseText));
            }else {
                const error = new Error('Error' +urlApi)
                return callback(error, null)
            }
            
        } 
    }
    xhhtp.send();
}
fetchData('${API}/products', function (error1, data1) {
    if (error1) returnconsole.error(error1);
fetchData('${API}/products/${data1[0].id}', function(error2, data2){
    if( error2) returnconsole.error(error2);
    fetchData('${API}/categories/${data2?.category.id}', function(erro3, data3){
        if (error3) return console.error(erro3);
        console.log(data1[0]);
        console.log(data2.title);
        console.log(data3.name);
    })
  })
});