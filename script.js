let count = 1;
document.getElementById("radio1").checked = true

setInterval( function(){
    nextImage();
}, 2000)

function nextImage(){
    count++;
    if(count>6){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true
}

document.addEventListener('wheel', (event) => {
    if (event.deltaX !== 0) {
      event.preventDefault(); // Impede o scroll horizontal
    }
  }, { passive: false });
  
  document.addEventListener('touchmove', (event) => {
    const touch = event.touches[0];
    const deltaX = touch.pageX - touch.clientX;
  
    if (deltaX !== 0) {
      event.preventDefault(); // Impede o scroll horizontal no toque
    }
  }, { passive: false });
  