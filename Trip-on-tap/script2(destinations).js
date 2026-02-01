function validateDestinationpac(event){
    event.preventDefault();
    let name = document.getElementById("Name").value;
    let age = document.getElementById("Age").value;
    let address = document.getElementById("Address").value;
    let number = document.getElementById("phoneno");
    let travellers = document.getElementById("number_travellers").value;
    let tradate = document.getElementById("adate").value;

    // let isValid = true;

    if(name === ""){
        alert("Please enter your name.");
        return false;
    }

    if(tradate === ""){
        alert("Please select the travel date from the available dates.");
        return false;
    }

    if(age < 0){
        alert("Please enter valide age of traveller.");
        return false;
    }else if(age == 0){
        alert("Please enter your age.");
        return false;
    }

    if(address === "" ){
        alert("Please enter your current address.");
        return false;
    }

    number.addEventListener('input', function() {
        const rawphonenumber = number.value;
        const digitonly = rawphonenumber.replace(/\D/g, '');

        const digitcount = digitonly.length;
        if(digitcount !== 10){
            alert("Please enter the valid phone number!");
            return false;
        }
    })

    if(travellers < 0){
        alert("Please enter the valide number of travellers.");
        return false;
    }else if(travellers === 0){
        alert("Please enter the number of travellers");
        return false;
    }
    return true;
}

function handleBooking(event){
    if(validateDestinationpac(event)){
        event.preventDefault();     //prevent the form from the refreshing the page
        alert("Your trip has been booked and can be seen from YourTrips tab.");

        const BookingDetails = {
            id: Date.now(),
            formtype:"Package Booking",
            name: document.getElementById('Name').value,
            email: document.getElementById('email').value,
            address: document.getElementById('Address').value,
            phone_number: document.getElementById('phoneno').value,
            message: document.getElementById('extro').value || "No special requests",
            age: document.getElementById('Age').value,
            destination: document.getElementById('destination').value,
            date: document.getElementById('adate').value,
            guests: document.getElementById('number_travellers').value,
            currentdate: new Date().toLocaleString()
        };

        const existingTrips = JSON.parse(localStorage.getItem('allTrips')) || [];

        existingTrips.push(BookingDetails);

        localStorage.setItem('allTrips' , JSON.stringify(existingTrips));
    }
}

