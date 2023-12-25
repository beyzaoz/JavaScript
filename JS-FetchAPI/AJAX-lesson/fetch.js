/*const { response } = require("express");


function getStudents(url){

    fetch(url)
    .then((response) =>{  //  promise(response tipinde) dondu ve then ile yakaladik
        return response.json}) //.json ile  veriyi yakaladik ama bu json metodu da promise dondugu icin tekrar bir then ile yakaladik.
    .then((data) => console.log(data))
    .catch((err) => console.log(err)) //Eger hata olursa da catche gireicek.


}

getStudents('student.json');
*/


function getData(url){
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log (err))
}

getData("https://jsonplaceholder.typicode.com/users")


//other way to write fetch:

function gettdata(urll) {
    fetch(urll)
}

gettdata("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json)
.then((data) => console.log(data))
.catch



//dataya disardan veri yuklemek icin kullanilan bir yoldur.
function students() {
    fetch("https://jsonplaceholder.typicode.com/albums", { 
        method:"Post",   
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSONstringify(data)
        
    
    }) 

}