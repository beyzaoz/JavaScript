 //kaktuslerin belli bir sureden sonra daha sik gelmesini saglamak?
 
 var currentIndex = 0;
 var intervalTime = 4000;
 
 var dinosour =  document.getElementById('dinosour');
 var cactus =  document.getElementById('cactus');


 function updateImage() {
    cactus.style.left = '100%'; // Move the cactus back to the right side
    cactus.src = cactusImages[currentIndex];
    currentIndex = (currentIndex + 5) % cactusImages.length;
  }
  
 function jump() {
    if(dinosour.classList != 'jump'){ //dinosour sinifinin jump i icerip icermedigini kontrol eder.
       dinosour.classList.add('jump'); // mevcut degilse jump i ekle

       setTimeout(function() {
           dinosour.classList.remove('jump');},200)
           //bu adin atlamayi 300 ms sonra kaldirir ve gecici olmasini saglar

    }
      
 }
 
 var isAlive = setInterval(function(){

    var dinosourtop = parseInt(window.getComputedStyle(dinosour).getPropertyValue('top'));
    var cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
// konumlari kontrol etmek icin window karsilatirma yapar.
    if (cactusleft < 50 && cactusleft > 0 && dinosourtop >=130) {
       alert('game over');
}
 }, 10);

 document.addEventListener('keydown', function(event){
     jump();}     
 ) // tuslari dinler ve tusa basinca  islem cagrilir.

 // Set up the interval for cactus appearance
var cactusIntervalId = setInterval(updateImage, cactusIntervalTime);

// Set up the interval for regular image updates
var intervalTime = 4000
var intervalId = setInterval(updateImage, intervalTime);


 console.log(cactusleft)
 console.log(dinosourtop)