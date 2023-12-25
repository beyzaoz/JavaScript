const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const movie = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');
getFromStorage();
calculateTotal();
container.addEventListener('click', function (e) { //e means is just action that is taking from outside.
    /* if(e.target.classList.contains('seat')){ // with thiss code we can see just elements that have seat class on console.
         console.log(e.target)
     }
     */

    /*if(e.target.classList.contains('seat') && e.target.classList.contains('reserved')){ // with thiss code we can see just elements that have seat class on console.
        console.log(e.target)
        //just it shows elements have seat ANDDD!!! reserved on console.
    }
    */

    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) { // with thiss code we can see just elements that have seat class on console.
        e.target.classList.toggle('selected') //when you click the seats on the screen it is assign it to as a selected and it turn to yellow that we assign colorfor selected.
        calculateTotal();
    }

});

movie.addEventListener('change', function(e){ //you selected the seat for one of movies and you change the movie So, price will change too.
    calculateTotal();
})

function calculateTotal() {
    let selectedSeats = container.querySelectorAll('.seat.selected');
    console.log(selectedSeats)
    let selectedSeatCount = selectedSeats.length;
    console.log(seats);

    //We create a list and we will push the selected seats to the list.
    const selectedSeatArr = [];
    const seatsArr =[];
    selectedSeats.forEach(function(seat){
        selectedSeatArr.push(seat);

    })

    seats.forEach(function(seat){
        seatsArr.push(seat);
    })

    let selectedSeatsIndex =selectedSeatArr.map(function(seat){
        return seatsArr.indexOf(seat);  // kac numarali index secildiyse o gelicek.
    })

    console.log(selectedSeatsIndex);

    //I will calculate the number of seat and price. So I need to know How many.
    //I need to searc in seat and selected classes.

    let price = parseInt(movie.value); // Assuming movie.value is a string representing the price and ParseInt() make it an integer.
    console.log(price);

    count.innerText = selectedSeatCount; // Update the count in the HTML

    let totalPrice = selectedSeatCount * price;
    amount.innerText = totalPrice;


    SaveToLocalStorage(selectedSeatsIndex);
}

//We need to take the information from storage even if refresh the page.
function getFromStorage(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedseats')); //need to transfer the data jsons to normal that we can see on the page.
    
    if(selectedSeats !=null && selectedSeats.length > 0){  // you should check null kontrol and check the length means if the data is empty or not.
        seats.forEach(function(seat,index){
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        })
    }
    
    const selectedMovieIndex = localStorage.getItem(`selectedMovies`);

    if(selectedMovieIndex !=null){ // if the movie is not empty!
        movie.selectedIndex = selectedMovieIndex;
    }


}


function SaveToLocalStorage(indexs){
    localStorage.setItem('selectedseats', JSON.stringify(indexs));
    localStorage.setItem('selectedMovies', JSON.stringify(movie.value));
}
//We need to stare all selected for seeing the selected when we refresh the page.Letss store it on Local Storage.
// That way is making datas permanent!!!

