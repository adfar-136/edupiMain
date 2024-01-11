function validateForm() {
    // Validate name and phone number using regex
    var fullName = document.getElementById('fullName').value.trim();
    var phoneNumber = document.getElementById('phoneNumber').value.trim();

    // Use a simple regex for name validation (you can adjust it as needed)
    var nameRegex = /^[a-zA-Z\s]+$/;

    if (!nameRegex.test(fullName)) {
        alert("Please enter a valid name.");
        return false;
    }

    // Phone number validation is handled by the pattern attribute in the input field

    // If both validations pass, show the thank you message
    document.getElementById('thankYouMessage').classList.remove('hidden');
    return false; // returning false to prevent form submission for this example
}