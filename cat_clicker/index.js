var cats = [
	{
		name:"Boss",
		src:"https://live.staticflickr.com/3903/15218475961_963a4c116e_b.jpg"
	},
	{
		name:"Puma",
		src:"https://live.staticflickr.com/3436/3717404325_db41d8d687_b.jpg"
	},
];
var list_cats = document.getElementById('list_cats');
for (var i = cats.length - 1; i >= 0; i--) {
	var cont = document.createElement("div");
	cont.setAttribute("class", "w3-third");
	var titulo = document.createElement("h2");	
	titulo.innerHTML = cats[i].name;
	cont.appendChild(titulo);
	var img = document.createElement("img");
	img.setAttribute("style", "width:100%;min-height:100px");
	img.setAttribute("src", cats[i].src);
	var a = "contador_"+i;
	var b = "contadorAux_"+i;	
	img.setAttribute("onclick", "incrementarContador('"+a+"','"+b+"');");	
	cont.appendChild(img);
	var contador = document.createElement("h3");
	contador.setAttribute("id", "contador_" + i);
	contador.innerHTML = "0";
	cont.appendChild(contador);
	var contadorAux = document.createElement("input");
	contadorAux.setAttribute("type", "hidden");
	contadorAux.setAttribute("id", "contadorAux_"+i);
	contadorAux.setAttribute("value", "0");	
	cont.appendChild(contadorAux);
	list_cats.appendChild(cont);
}
function incrementarContador(contador, contadorAux){	
	cont = parseInt(document.getElementById(contadorAux).value);
	cont += 1;
	document.getElementById(contador).innerHTML = "";
	document.getElementById(contador).innerHTML = cont;
	document.getElementById(contadorAux).value = cont;
}









