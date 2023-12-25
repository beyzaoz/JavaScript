//ASYNCRN KULLANIMI
//veri cekme islemi tamamlanana kadar bekler ve undefined donen verileri defined olarak dondurulmesini saglar.

const { default: axios } = require("axios");

const getAll =async() =>{
  let arr = []  //verilerin cekilebilecegi bos bir array olusturuldu ve push metodu ile icine veri gonderilebilir.
  const data = await axios.get('https://restcountries.com/v3.1/all') //axios uzerinden veri alma islemi yapicaz ve url i yazicaz.
  console.log(data)
  arr.push(data)
  return arr


// console.log(arr) 


}

getAll();

