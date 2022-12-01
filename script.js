const toggleButton = $(".toggle-button");
const navbarLinks = $(".navbar-links");

toggleButton.click(function() {
    navbarLinks.toggle("active");
})