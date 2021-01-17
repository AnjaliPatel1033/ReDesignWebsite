var acc = document.getElementsByClassName("faq-question");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var active=document.getElementsByClassName('active')
    if(active.length && active[0]!=this){
      active[0].classList.remove('active');
    }
    this.classList.toggle("active");
  });
}