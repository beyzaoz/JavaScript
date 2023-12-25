
// MAP

const b = new Map([["a", 5]]) //a bes degerine esit
b.set('b',6)  //yeni degerler olarak ayaradi
console.log(b.size) //boyutunu gosterdi
console.log(b.delete('a')) //sildi
console.log(b)


//SETTIMEOUT
//Zamanlayici olarak kullanilir
setTimeout(() => {
    console.log('beyza')  //beyza kelimesini 2 sn bekledikten sonra ekrana yazdirir.
}, 2000);

//SETINTERVAL
//her saniye basi calistirir
/*setInterval(() => {
    console.log('beyza') //beyza kelimesini 2 sn de bir ekrana yazdirir.
}, 2000); */

/*let count =60
setInterval(() => {
    count++
    console.log(count)
}, 1000); */


//MATH OBJECT

let number6 = 10.99999876
console.log(Math.floor(number6)) //tabana yuvarladi
console.log(Math.ceil(number6)) //tavana yuvarladi

let number7 = -10.99999876
console.log(Math.abs(number7))

console.log(Math.random()*7) //random olarak sayi ureticek 0 ile 7 arasinda

console.log(Math.floor(Math.random()*9)+1) //eger sonuna +1 eklerseniz 0 ile 9 olan araligi 1 ile 10 a cikartir.


//DATE OJESI


console.log(new Date(2056,10,30)) //tarih gosterir







// node index5.js 