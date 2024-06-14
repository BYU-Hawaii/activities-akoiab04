document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    var name =document.getElementById('name').value;
    var phone=document.getElementById('phone').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    var nameValid = /^[a-zA-Z]{3,}$/.test(name);
    var phoneValid = /^[0-9]{3,}$/.test(phone);
    var usernameValid = /^[a-zA-Z0-9]{5,}$/.test(username); // Username should be at least 5 characters long and contain only letters and numbers
    var emailValid = /^[^@]+@\w+(\.\w+)+\w$/.test(email); // Simple email pattern check
    var passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password); // Password should be at least 8 characters long, contain numbers and both lowercase and uppercase letters

    document.getElementById('usernameFeedback').style.display = usernameValid ? 'none' : 'block';
    document.getElementById('phoneFeedback').style.display = phoneValid ? 'none' : 'block';
    document.getElementById('nameFeedback').style.display = nameValid ? 'none' : 'block';
    document.getElementById('emailFeedback').style.display = emailValid ? 'none' : 'block';
    document.getElementById('passwordFeedback').style.display = passwordValid ? 'none' : 'block';

    document.getElementById('usernameFeedback').textContent = usernameValid ? '' : 'Username should be at least 5 characters long and contain only letters and numbers.';
    document.getElementById('phoneFeedback').textContent = phoneValid ? '' : 'Please Enter our phone number';
    document.getElementById('nameFeedback').textContent = nameValid ? '': 'Please Enter your name';
    document.getElementById('emailFeedback').textContent = emailValid ? '' : 'Please enter a valid email address.';
    document.getElementById('passwordFeedback').textContent = passwordValid ? '' : 'Password should be at least 8 characters long, contain numbers and both lowercase and uppercase letters.';

    var formValid =nameValid && phoneValid && usernameValid && emailValid && passwordValid;

    if (formValid) {
        document.getElementById('registrationFeedback').textContent = 'Your user registration was accepted!';
        document.getElementById('registrationFeedback').style.display = 'block';
        // Here you can also handle the form submission, e.g. send data to the server
    } else {
        document.getElementById('registrationFeedback').textContent = '';
        document.getElementById('registrationFeedback').style.display = 'none';
    }
});
