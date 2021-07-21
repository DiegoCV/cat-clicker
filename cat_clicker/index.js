var elem = document.getElementById('image_cat');
var cont = 0;
elem.addEventListener('click', function(){
  	cont += 1;
	document.getElementById("contador").textContent = cont;
}, false);