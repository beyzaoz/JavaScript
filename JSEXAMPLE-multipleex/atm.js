/**
1-Bakiye Goruntuleme
2-Para cekme
3-Para yatirma
4-cikis

ATM uygulamasi
*/
let newline = "\r\n"
let account = 1000;

let text = '1-Show My Balance' + newline + "2-Withdraw Money" + newline +"3-Deposit Money"+ newline + "4-Exit" + newline + "Please Choose Your Process . "

let choose = prompt(text)


  switch(choose){
    
    case "1":
        console.log("Bakiyeniz: " + account)
        break;

    case "2":
        let withd = prompt("Enter the amount: ")
        if(withd < account){
            console.log("Thank you! Your new balance is: " + (account-withd))
            break;
        } else {
            alert("Please Enter small amount.")
        }
    case "3":
        let deposit = Number(prompt("Enter the amount: "))
        console.log("Your new Balance Is: " + (account + deposit))
        break;

    case "4":
        console.log("Section Ended! ")
        break;

    default:
        console.log("Please Enter Valid Number")
        break;

        }
    



     

