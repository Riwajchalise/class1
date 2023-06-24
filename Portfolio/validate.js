// Get the form element
var form = document.querySelector('#contact form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from being submitted

  // Get the input field values
  var nameInput = document.querySelector('#name');
  var emailInput = document.querySelector('#email');
  var messageInput = document.querySelector('#message');

  // Validate the name field
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return; // Stop further execution
  }

  // Validate the email field
  var email = emailInput.value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    alert('Please enter your email address.');
    emailInput.focus();
    return;
  } else if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return;
  }

  // Validate the message field
  if (messageInput.value.trim() === '') {
    alert('Please enter your message.');
    messageInput.focus();
    return;
  }

  // If all validations pass, you can proceed with form submission
  // Uncomment the following line to submit the form
  form.submit();

  // Optionally, you can reset the form after successful submission
  // form.reset();
});