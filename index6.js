//npm ile surekli node index.js yazmaya gerek kalmadan her kaydediliste terminalde gorulur.

//


console.log('1')

const funcOne = (a,cb) => {
    setTimeout(() => { // bu gibi fonksiyonlara callback fonksiyon denir.
        cb(a) 
    }, 2000);
}

let val = funcOne('2' , (val) =>{

    console.log(val)
})


console.log('3')

//


console.log('1')

const funcOnee = (a,cb) => {
   return new Promise((resolve, reject) => {
    let statues= true
    setTimeout(() => {
        if (statues) resolve(a)
        reject('hataa')
        
    }, 3000);
   })
}

let vall = funcOnee('2')

vall.then((result) =>{ //thenden sonra ki seyler resolve yani sonuclari gosterir.
    console.log(result)

}) .catch((err) => {  // catch den sonraki seylerde olusan hatalari gostermektedir.
    console.log(err)

});


console.log('3')