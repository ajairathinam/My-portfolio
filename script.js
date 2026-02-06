const roles = [
  "Android Developer",
  "Python Programmer",
  "Web Developer",
  "Tech Enthusiast"
];

let index = 0;
const roleElement = document.getElementById("role");

function changeRole() {
  roleElement.classList.remove("show");

  setTimeout(() => {
    roleElement.textContent = roles[index];
    roleElement.classList.add("show");
    index = (index + 1) % roles.length;
  }, 300);
}

changeRole();
setInterval(changeRole, 2000);
// Select all navbar links
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault(); // prevent default jump

    const targetId = this.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);

    // Scroll with offset for fixed navbar (90px)
    window.scrollTo({
      top: targetSection.offsetTop - 80,
      behavior: "smooth"
    });
  });
});
