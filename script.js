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


