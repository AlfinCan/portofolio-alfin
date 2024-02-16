// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("menu-icon").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function redirInstagram() {
    window.location.href = "https://instagram.com/alfinihsan_"
}

function redirWhatsapp() {
    window.location.href = "https://wa.me/+6285641995098"
}

