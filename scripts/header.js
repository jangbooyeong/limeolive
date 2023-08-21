// topButton 함수
window.onscroll = function() {
  const topButton = document.getElementById("topButton");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};
  // scrollToTop 함수
  function scrollToTop() {  
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


