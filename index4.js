

 


//FOR DONGULERI



for (let i = 0; i < 10; i++) {  //0 dan basla degerleri bir arttir 10 dan kusukse yazdir.
    console.log(i)
    
}


[`1`,`2`,`3`,`4`,`5`,`6`].forEach(as =>{  //For each bu elemanlari tek tek gez as nin icine at.

    console.log(as)
})
//for ile yapilan seyleri foreach ile de yapabilir, Ancak bazi durumlarda for dongusu daha kullanislidir.



//SPREAD OPERATORLERI (...)= Bir arrayin icindeki tum elemanlari al demektir ve basina ... eklenerek kullanilir.

//WHILE DONGUSU

let count = 10
while (count > 0 ) { //count degeri 0 dan buyuk oldugu surece ekrana yazdir.
    
    //count-- //Bir azaltmak demek ya da
    count = count-1
    console.log(count)
}

//For  ve while dongulerinde kosul,dongu baslamadan once kontrol edilir, do while dongusunde ise bu kontrol her donguden sonra gerceklesir.
//Operasyon mantiginda do while dongusu, kosul ne olursa olsun en az bir kere calistirilir.



//DO WHILE DONGUSU
/*do {
    
} while (condition);  */


//BREAK ve CONTINOE
const newfun = () => {
    let arr = [`1`,`2`,`3`,`4`,`5`,`1`,`2`,`3`,`4`,`5`]
    for(let i = 0 ;i < arr.length; i++) {
        //return i //1.secenek ---Disarida sonuc olarak dondurmek istiyorum Sonuc yalnizca 0.
        //console.log(i) //2. secenek----1 den 9 a kadar yazdirdi.

        if (i === 2) {
            continue; // 5 i almadan ekrana bastiriyor ve 5 geldiginde atlayip devam ediyor.
           // break; //5, indexe kadar yazdiricak.
        }
        
     console.log(i)

    }
    

}

newfun();
//console.log(newfun())



//node index4.js




