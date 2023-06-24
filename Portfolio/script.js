$(document).ready(function() {
    // Handle form submission
    $('#contactForm').submit(function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get form data
      var formData = $(this).serialize();
  
      // Send AJAX request
      $.ajax({
        type: 'POST',
        url: 'data.php', // Replace with your server-side script URL
        data: formData,
        success: function(response) {
          // Handle success
          console.log(response);
          alert('Form submitted successfully!');
        },
        error: function(xhr, status, error) {
          // Handle error
          console.log(xhr.responseText);
          alert('Form submission failed. Please try again later.');
        }
      });
    });
  });