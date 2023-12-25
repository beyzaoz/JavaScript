
//KOSULLU IFADELER

const age3= 22
const name3 = age3 == 26 ? "Beyza" : "bos" //Eger yukaridaki age degeri 26 ise beyza yazsin degilse farkli isim yazilsin.
// == esitligine bakar. === bu da kullanilabilir ancak bu ek olarak birde tip kontrolu yapar.stringe string mi gibi.


const number3 =12
const name4 = number3 != 12 ? "Yes" : "No" //ESIT DEGILSE olarak kullanilir.

console.log(name4)
console.log(name3)


//IF ELSE YAPISI
const number4 =100
if(number4 == 3)// esitlik burayay yazilir 
{
 console.log('Number`s value is 100')

}else{
console.log(`not equal to 100`)

}


//SWITCH KASE YAPISI

switch (number4) {
    case 25:
        console.log(`it is wrong`)
        break;
    case 90:
        console.log(`it is close to real number`)
        break;

    default:

        break;
}


//FUNCTIONS:

//mesela bi buton tanimliyor ve o butona gorevler atiyorsun. ornek.

const nameFunc =() => {
    console.log(`beyza`)
}   // fonksiyonu calistirmak icin disaridan cagirmak zorundasin.

nameFunc() // bu sekilde cagirilir.


const ageFunc =() => {

    let age0 = 25;
    if(age0 == 25) {
        console.log(`You are 25.`)
    }else {
        console.log(`wrong`)

    }
}   // fonksiyonu calistirmak icin disaridan cagirmak zorundasin.

nameFunc() // bu sekilde cagirilir.
ageFunc()



let num1 = 10 
let num2 =20

const numfunc =(A, B) => {
 console.log(A+B)

} 

 //numfunc(num1) //Foksiyonun icine deger gonderilir. (A) degeri gonderilen num1 degerini karsilamak icin kullanilir.
numfunc(num1,num2) //iki ya da daha fazla deger gonderilebilir. ancan yukarida (a, b) seklinde iki farkli deger girilmelidir.


const numfunc2 =(...props) => { //(props) sadece ilk degeri yazdirir. eger (props1,props2) seklinde yazarsan hepsini yazdirir 
 console.log(...props)               // yada (...props) seklinde butun degerleri yazdirabilirsin.
                                     // (a, ... props) olarak kullanilabilir ancak sonda yazilamaz.
} 
numfunc2(num1,num2)


//RETURN KAVRAMI

const ce = 5
const be = 45
const numfunc3 =(A, B) => {
    return A +B                          // disardan gonderilen verileri bir isleme tabi tutmak istersem console yazmadan islemi yaptirmak icin return kullaniriz.
   
} 

console.log(numfunc3(be,ce)) // sonucu yazdirmak icin kullanmaliyiz.










//node index2.js