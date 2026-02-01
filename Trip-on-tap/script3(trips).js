const trips = JSON.parse(localStorage.getItem('allTrips')) || [];
const container = document.getElementById('trip-list');

if(trips.length === 0){
    container.innerHTML = "<div class='no-trips'><h3>No Trips found yet!</h3></div>";
}else{
    trips.forEach((trips, index) => {
        const cardHTML = `
            <div class="trip-card">
                <h2>Trip ${index + 1}</h2>
                
                <div class="trip-detail"><span class="label">Form Type:</span> ${trips.formtype}</div>
                <div class="trip-detail"><span class="label">Name:</span> ${trips.name}</div>
                <div class="trip-detail"><span class="label">Email:</span> ${trips.email}</div>
                <div class="trip-detail"><span class="label">Destination:</span> ${trips.destination}</div>
                <div class="trip-detail"><span class="label">Travel Date:</span> ${trips.date}</div>
                <div class="trip-detail"><span class="label">Number of Travelers:</span> ${trips.guests}</div>
                <div class="trip-detail"><span class="label">Age:</span> ${trips.age}</div>
                <div class="trip-detail"><span class="label">Phone:</span> ${trips.phone_number}</div>
                <div class="trip-detail"><span class="label">Address:</span> ${trips.address}</div>
                <div class="trip-detail"><span class="label">Message:</span> ${trips.message}</div>
                <div class="trip-detail"><span class="label">Booked On:</span> ${trips.currentdate}</div>

                <button class="delete-btn" onclick="return deleteTrip(${trips.id})">Delete Trip</button>
            </div>
            `;

            container.innerHTML += cardHTML;
    });
}

function deleteTrip(id){
    if(confirm("Are you sure you want to delete this trip?")){
        const updatedTrips = trips.filter(trips => trips.id !== id);

        localStorage.setItem('allTrips', JSON.stringify(updatedTrips));

        location.reload();
    }
}