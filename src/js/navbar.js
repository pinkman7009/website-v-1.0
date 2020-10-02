window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById('navbar').style.height = '10vh';
    document.getElementById('navbar').style.opacity = '0.7';
  } else {
    document.getElementById('navbar').style.height = '12vh';
    document.getElementById('navbar').style.opacity = '1';
  }
}
