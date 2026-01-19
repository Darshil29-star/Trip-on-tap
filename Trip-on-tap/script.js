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