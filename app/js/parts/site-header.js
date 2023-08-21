const siteHeader = document.querySelector(".site-header");

if(siteHeader) {
  window.addEventListener("scroll", debounce(addShadow, 150));

  function addShadow() {
    let offsetTop = window.pageYOffset;
    if(offsetTop > 0) {
      siteHeader.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
    } else {
      siteHeader.removeAttribute("style");
    }
  }
}
