// Sample data for the energy consumption graph
const ctx = document.getElementById('energyChart').getContext('2d');
const energyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM'],
        datasets: [{
            label: 'Energy Consumption (kWh)',
            data: [500, 750, 900, 1000, 850, 600],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@greencampus.com" && password === "admin123") {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to dashboard
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
