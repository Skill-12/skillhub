   function toggleMenu() {
      document.getElementById("menu").classList.toggle("active");
    }


    window.onscroll = function() {
  const btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top on click
document.getElementById("scrollTopBtn").onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};