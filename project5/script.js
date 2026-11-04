
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");


// Open and close sidebar
menuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("open");

    overlay.classList.toggle("show");

});

// Close sidebar when overlay is clicked
overlay.addEventListener("click", () => {

    sidebar.classList.remove("open");

    overlay.classList.remove("show");

});
