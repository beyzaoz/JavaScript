//ARRAY
const firstArr = [`1`, `2`, `3`,`4`]

//ARRAY FEATURES

firstArr.push(`5`)  //Bu sekilde arrayin icine dahil edilmis olarak yazdirir.
//console.log(firstArr.push(`5`)) //.push eklemek anlamina geliyor. Fakat burda yazarsak ekranda sadece 5 i gosterir

firstArr.pop()//Arrayin sonundaki elemani sildi.

firstArr.unshift(`0`) //Arrayin basina eleman eklemek icin kullanilir.

console.log(firstArr) 

console.log(firstArr.find(as => as !==`4`)) //Farkli olan elemani bul. 

console.log(firstArr.concat([`5`, `6`])) //birlestirme islemi yapar.

console.log(firstArr.every(as => as == 4))//Her bir eleman eger 4 e esitse true doner.

console.log(firstArr.some(as => as == 2)) //En az bir eleman 2 ye esitse true doner.

//Array de ki elemanlari filtrelemek icin kuulanilan methodlar.

console.log(firstArr.filter(abc => abc === `4`)) //Array de ki elemanlari filtrelemek icin kuulanilir.
//alisveris sitelerinde ayakkabilari filtrelemek istedigimizde kullanilabilen bir ozellik

console.log(firstArr.map(as => as*2)) //Arrayin icindeki degerleri degistirmek icin kullanilir.Mesela burda 2 ile carptik.
console.log(firstArr.map(as => Number(as)))

console.log(firstArr.sort((a,b) => a-b)) //Buyukten kucuge dogru bir siralama islemi verir. ger b-a dersek kucukten buyuge dogru verir.

console.log(firstArr.reduce((a,b) => a+b, 0)) //Her bir elemani topla ve baslangic degerini 0 al.






//OBJECTS

const obj = {

    cs: 'Beyza', //Objelerde esittir isareti yerine iki nokta ust uste kullanilir (yani colon kullanilir)
    ages: 25
}

console.log(obj)
console.log(obj.cs)




const arr = [ //Arrayin icinde de birden farkli obje kullanilabilir.
    {
        cs1: 'Beyzaoz', //Objelerde esittir isareti yerine iki nokta ust uste kullanilir (yani colon kullanilir)
        ages1: 25
    },

    {
        cs1: 'Berk', 
        ages1: 26
    }

]

console.log(arr)
console.log(arr[0]) // cagirmak icinde her bir objenin indexini girerek tek tek cagrilabilir.
console.log(arr.length) //arrayin uzunlugu buyuklugu icin kullanilir.






// node index3.js