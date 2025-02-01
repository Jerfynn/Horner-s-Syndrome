document.getElementById("knowMoreBtn").addEventListener("click", function() {
    const typesSection = document.getElementById("typesSection");
    typesSection.classList.toggle("hidden");
});

document.getElementById("checkSymptomsBtn").addEventListener("click", function() {
    const symptomsSection = document.getElementById("symptomsSection");
    symptomsSection.classList.toggle("hidden");
});

document.getElementById("loginBtn").addEventListener("click", function() {
    const loginForm = document.getElementById("loginForm");
    loginForm.classList.toggle("hidden");
});

document.getElementById("submitLogin").addEventListener("click", function() {
    const name = document.getElementById("nameInput").value;
    const patientId = document.getElementById("patientIdInput").value;
    
    if (name && patientId) {
        alert(`Login Successful!\nName: ${name}\nPatient ID: ${patientId}`);
    } else {
        alert("Please enter both Name and Patient ID.");
    }
});
