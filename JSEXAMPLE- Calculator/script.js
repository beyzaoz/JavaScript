"use";
    var _button = document.getElementsByTagName("button") //butonlara ulasildi
    var _uzunluk= _button.length 
    var i=0
    var _result = document.getElementById("result") //sonuca ulasildi

    //Hesaplama icin for dongusu gerekiyor.

    for(i=0; i<_uzunluk; i++){
        _button[i].onclick = hesapla;
    }


    function hesapla() {


        var _value = this.innerHTML; //InnerHtmlEtiketin içini okuma ve değiştirme için kullanılır
        //This Bir metodun icinde o metoda ait siniftan olusturulan nesneyi tanimlar.
        if(_value === "=") {

            try{
                _result.value = eval(_result.value);
            } catch(e){

                _result.value = "Error";

            }
            return;
        }

        _result.value += _value
        
        
    }


    document.getElementById("clearButton").onclick = ClearAll;

    function ClearAll() {
        _result.value = "";
    }



    