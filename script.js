
// Get the button element
const button = document.getElementById("generate-btn");

// Function to generate a random user
async function generateUser() {

    try {
        // Fetch user data from API
        const response = await fetch("https://randomuser.me/api");

        // Convert response into JSON
        const data = await response.json();

        // Get the first user from the results
        const user = data.results[0];

        // Get user details
        const picture = user.picture.large;
        const name = user.name.first + " " + user.name.last;
        const email = user.email;
        const location = user.location.city + ", " +
                         user.location.country;
        const phone = user.phone;

        // Display user details on webpage
        document.getElementById("profile-pic").src = picture;
        document.getElementById("name").textContent = name;
        document.getElementById("email").textContent = email;
        document.getElementById("location").textContent = location;
        document.getElementById("phone").textContent = phone;

    } catch (error) {
        console.log("Error fetching user:", error);
        alert("Unable to generate user. Please try again.");
    }
}

// Add click event to button
button.addEventListener("click", generateUser);
