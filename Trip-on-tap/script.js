function validateForm(){
    let name = document.getElementById("name").value;
    let destination = document.getElementById("places").value;
    let phone = document.getElementById("phone_number").value;
    let ageInput = document.getElementById("Age").value;
    let dateInput = document.getElementById("date").value;
    let number_travellers = document.getElementById("no_travellers").value;

    // let errors = document.getElementsByClassName("error");
    // for(let i=0;i<errors.length;i++){
    //     errors[i].style.display = "block";
    // }

    let isValid = true;

    if(name === ""){
        // document.getElementById("nameerror").style.display = "none";
        alert("Please enter your name.");
        isValid = false;
    }

    
    // for(let i=0;i<name.length();i++){
    //     if(!isNaN(name[i])){
    //         isValid = false;
    //         alert("Please enter your name properly (without numbers and other characters).");
    //         break;
    //     }
    // }

    if(destination === ""){
        // document.getElementById("deserror").style.display = "block";
        alert("Please choose your destination.");
        isValid = false;
    }

    if(isNaN(phone)){
        alert("Please enter the phone number properly.");
        isValid = false;
    }else if(phone.length !==10){
        // document.getElementById("phoneerror").style.display = "block";
        alert("Kindly enter 10 digit phone number only.");
        isValid = false;
    }

    if(dateInput === ""){
        // document.getElementById("dateerror").style.display = "block";
        alert("Kindly select date of travel.");
        isValid = false;
    }else{
        let selecteddate = new Date(dateInput);
        let today = new Date();

        today.setHours(0,0,0,0);

        if(selecteddate < today){
            // document.getElementById("dateerror").innerText = "You cannot book a trip in the past!";
            // document.getElementById("dateerror").style.display = "block";
            alert("kindly select the future date.");
            isValid = false;
        }
    }

    if(ageInput <= 0){
        // document.getElementById("ageerror").style.display = "block";
        alert("kindly enter your age properly.");
        isValid = false;
    }

    if(number_travellers <= 0){
        // document.getElementById("noerror").style.display = "block";
        alert("kindly enter number of traveller properly.");
        isValid = false;
    }
    return isValid;
}

function validateDestinationpac(){
    let name = document.getElementById("Name").value;
    let age = document.getElementById("Age").value;
    let address = document.getElementById("Address").value;
    let number = document.getElementById("phoneno").value;
    let travellers = document.getElementById("number_travellers").value;
    let tradate = document.getElementById("adate").value;

    let isValid = true;

    if(name === ""){
        alert("Please enter your name.");
        isValid = false;
    }

    if(tradate === ""){
        alert("Please select the travel date from the available dates.");
        isValid = false;
    }

    if(age < 0){
        alert("Please enter valide age of traveller.");
        isValid = false;
    }else if(age == 0){
        alert("Please enter your age.");
        isValid = false;
    }

    if(address === "" ){
        alert("Please enter your current address.");
        isValid = false;
    }

    if(number.length() != 10){
        alert("Please enter the valide mobile number(10 digits).");
        isValid = false;
    }

    if(travellers < 0){
        alert("Please enter the valide number of travellers.");
        isValid = false;
    }else if(travellers === 0){
        alert("Please enter the number of travellers");
        isValid = false;
    }
    return isValid;
}

function searchFunction(){
    let input = document.getElementById("searchbox");
    let filter = input.value.toUpperCase();
    let cardgrid = document.querySelector(".card_grid");
    let cards = cardgrid.getElementsByTagName("a");

    for(let i=0;i<cards.length;i++){
        let title = cards[i].querySelector("h3");
        if(title){
            let txtvalue = title.textContent || title.innerText;
            if(txtvalue.toUpperCase().indexOf(filter) > -1){
                cards[i].style.display = "block";
            }else{
                cards[i].style.display = "none";
            }
        }
    }
}