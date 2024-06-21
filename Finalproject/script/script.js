document.getElementById('ratingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var comments = document.getElementById('comments').value;
    var rating = document.getElementById('rating').value;

    var  nameValid = /^[a-zA-Z]{3,}$/.test(name);
    var emailValid =/^[^@]+@\w+(\.\w+)+\w$/.test(email);
    var commentsValid = comments.trim() !== '';
    var ratingValid = rating >= 1 && rating <=5;

    document.getElementById('nameFeedback').style.display = nameValid ? 'none' : 'block';
    document.getElementById('emailFeedback').style.display = emailValid ? 'none' : 'block';
    document.getElementById('commentFeedback').style.display = commentsValid ? 'none' : 'block';
    document.getElementById('ratingFeedback').style.display = ratingValid ? 'none' : 'block';

    document.getElementById('nameFeedback').textContent = nameValid ? '': 'Please Enter your name';
    document.getElementById('emailFeedback').textContent = emailValid ? '' : 'Please enter a valid email address.';
    document.getElementById('commentsFeedback').textContent = commentsValid ? '' : 'Please give comments';
    document.getElementById('ratingFeedback').textContent = ratingValid ? ' ': 'Please give rate.';

    var formValid = nameValid && emailValid && commentsValid && ratingValid;

    if (formValid) {
        document.getElementById('ratingsFeedback').textContent = 'Your rating was accepted!';
        document.getElementById('ratingsFeedback').style.display = 'block';
        // Here you can also handle the form submission, e.g. send data to the server
    } else {
        document.getElementById('ratingsFeedback').textContent = '';
        document.getElementById('ratingsFeedback').style.display = 'none';
    }
});
