// Description: This file contains the JavaScript code for the terms and privacy modals.
var termsModal = document.getElementById("terms-modal");
var privacyModal = document.getElementById("privacy-modal");

var termsLink = document.getElementById("terms-link");
var privacyLink = document.getElementById("privacy-link");

var closeTerms = document.getElementById("close-terms");
var closePrivacy = document.getElementById("close-privacy");

termsLink.onclick = function() {
    termsModal.style.display = "block";
}
privacyLink.onclick = function() {
    privacyModal.style.display = "block";
}

closeTerms.onclick = function() {
    termsModal.style.display = "none";
}
closePrivacy.onclick = function() {
    privacyModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == termsModal) {
        termsModal.style.display = "none";
    }
    if (event.target == privacyModal) {
        privacyModal.style.display = "none";
    }
}

function signup() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  fetch('http://localhost:5500/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function signin() {
  const email = document.getElementById('signin-email').value;
  const password = document.getElementById('signin-password').value;

  fetch('http://localhost:5500/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.token) {
      localStorage.setItem('token', data.token);
      alert('Signed in successfully');
    } else {
      alert('Error: ' + data.error);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
