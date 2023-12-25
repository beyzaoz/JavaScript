//1
//Js Etkilesimli websayfasi olusturmak icin kullanilir.
/* yorum satiri 2 (sATIR SONU NOKTALI VRGUL KONABILIR)*/

//console.log("beyza") //Print olarak kullanilir, string olursa " kullanilir"


//2
//Alan adi tanimlama CONST-VAR-LET ucude aynidir fakat Aralarindaki farklar:

 /* const name ="Beyza"       
 name="Deneme" CONST U SONRADAN DEGISTIREMEZSIN, Degisim icin ya VAR yada LET kullanilir. */


/* var name ="Beyza"       
name ="Deneme" // Bu sekilde namee esit olan beyza yi deneme ile degistirmis oluyoruz.
console.log(name)  */

let name="Byz"
const age= 25 
const age2= "10"
const number1= 32.7 // Eger string olarak toplama yaparsan yanyana yazar birlestirir.
const result= true; //noktali virgul koymak zorunlu

name="Beyza"

console.log("Toplama=" ,number1+age)
console.log(name, age, result)

console.log(typeof age2) //Typeof kedinden sonra gelen ifadenin tipini belirtir(string,boolean..)
console.log(typeof Number(age2)) //Bu ifade string i number a ceviriyor.
console.log(Number(name))// Stringiyani harfleri numbera ceviremezsin.


//3

console.log(Number(number1)+ age.toString()) // .toString() ifadeyi stringe cevirdi.

const number2= 10.9876543213456
console.log(number2.toFixed(2)) //.toFixed() noktali ifadelerde virgulden sonra kac sayi alinarak yazilmasini istiyprsan ona gore yazip kullanilir.
console.log(parseFloat(314e-2)) //parseFloat() karmasik degerlerin sonucunu verir. Eger kusuratsiz sonucunu istiyorsan parseInt() kullanilmali.


//4
var name1="javascript"
var name2="class"
console.log(name1.concat(name2)) // .concat() ----Metinsel iki ifaadeyi birlestirir
console.log(name1.concat("25"))

console.log(name1.replace('a' , 'A'))// .replace()-----yerdegistirme olarak kullanilir. KARSISINA ILK GELENI DEGISTIRI FAKAT DIGERLERINI DEGISTIRMEZ
console.log(name1.replaceAll('a' , 'A')) //Bu sekilde tamamini degistirir.
console.log(name1.replaceAll('a' , '')) // silme islemi yapar

console.log(name1.split('').join('')) //.Split()--------- arraye donusturdu.
                                      //.join()----------Arraye donusturdugu seyleri eski halline tekrar donusturur


console.log(name1.substring(0,5)) //.substring()--------- yazidaki 0 dan 5. indexe kadar olan karakterleri yazdirir ve gerisini siler.
console.log(name1.slice(1,3)) //.slice()------------yazidaki 1 den 3. indexe kadar olan karakterleri yazdirir ve gerisini siler.
console.log(name1.toLowerCase())
console.log(name1.toUpperCase())
console.log(name1.trim()) //Sag veya soldaki bosluklari siler.

console.log(name1.includes('a')) // .includes()-----True yada False olarak doner. icinde o harf yada kelime geciyor mu gecmiyor mu ona bakar.
console.log(name1.search('a')) //.search()------Arama yapar ve index sayisini soyler.
console.log(name1.charAt(2)) //.charat()----- index sayisinin degerini verir.
console.log(name1.charAt(2).toUpperCase())








// node index.js