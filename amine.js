console.log("Portfolio loaded successfully!");
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".profile-img, .hi-text, .name, .title, .bio, .social-links"
  );

  elements.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";

    setTimeout(() => {
      element.style.transition = "all 0.6s ease";
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, index * 200);
  });
});
document.querySelector(".discord-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const discordUsername = "Nissem#1234";

  navigator.clipboard.writeText(discordUsername).then(() => {
    const icon = this.querySelector("i");
    const originalClass = icon.className;

    icon.className = "fas fa-check";

    setTimeout(() => {
      icon.className = originalClass;
    }, 2000);
  });
});
