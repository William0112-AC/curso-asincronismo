import fetch from 'node'; 
const API = 'hhtps://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    return fetch(urlApi);

};

//fetchData('${API}/products')
 //.then(Response => {Response.json()})
//.then(products => {
  //  console.log(products);
//})
//.then(() => {
  //  console.log('hola')
//})

//.catch(error => console.log(error));
fetchData('${API}/products')
.then(response => response.json())
.then(products => {
    return fetchData('${API}/products/${products[0].id}')

})
.then(response => response.json)
.then(products => {
    return fetchData('${categories/${products.category.id}}')
})
.then(response => response.json())
.then(category => {
    console.log(category.name);
})