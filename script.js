// Submit handler 
const handleSubmit = (event) => {
  

  // Get values
  const name = document.getElementById('name').value;
  const song = document.getElementById('song').value;
  const artist = document.getElementById('artist').value;

  // Get song requests div
  const requests = document.querySelector('.song-requests');

  // Create bullet element
  const bullet = document.createElement('span');
  bullet.textContent = '• ';

  // Create p element
  const newRequest = document.createElement('p');

  // Append bullet to p 
  newRequest.appendChild(bullet);

  // Set text for request
  newRequest.textContent += `${name} requested "${song}" by ${artist}`;

  // Append p to requests
  requests.appendChild(newRequest);

  event.preventDefault();
}

// Connect handler to form
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
