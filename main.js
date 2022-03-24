function inView() {
  var elements = document.getElementsByClassName('circle');
  for(var i = 0; i < elements.length; i++){
    const box = elements[i].getBoundingClientRect();
    if(box.top < window.innerHeight && box.bottom >= 0){
      elements[i].style.animation="progress 1s ease-out forwards"
    }
  }
}
