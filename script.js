const menu = document.querySelector(".header-nav");
console.log(menu);
menu.addEventListener('click', function(){
    if (menu.style.display == "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
});