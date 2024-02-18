document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const name = document.getElementById('preferred_name').value;
    const zip_code = document.getElementById('zip_code').value;
    const age = document.getElementById('age').value;
    const food_preferences = document.getElementById('food_preferences').value;
    const interests = document.getElementById('interests').value;

  
    // Redirect to profile page with query parameters
    window.location.href = `myprofile.html?name=${name}&zip_code=${zip_code}&age=${age}&food_preferences=${food_preferences}&interests=${interests}`;
});


document.addEventListener('DOMContentLoaded', function() {
    // Parse query parameters
    const queryParams = new URLSearchParams(window.location.search);
  
    // Get individual parameters
    const name = queryParams.get('preferred_name');
    const zip_code = queryParams.get('zip_code');
    const age = queryParams.get('age');
    const food_preferences = queryParams.get('food_preferences');
    const interests = queryParams.get('interests');
  
    // Display profile data
    const profileDataElement = document.getElementById('profileData');
    profileDataElement.innerHTML = `
      <p><strong>Name:</strong> ${preferred_name}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Zip Code:</strong> ${zip_code}</p>
      <p><strong>Food Preferences:</strong> ${food_preferences}</p>
      <p><strong>Interests:</strong> ${interests}</p>
    `;
});