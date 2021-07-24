var cats = [{
        name: "Boss",
        src: "https://live.staticflickr.com/3903/15218475961_963a4c116e_b.jpg"
    },
    {
        name: "Puma",
        src: "https://live.staticflickr.com/3436/3717404325_db41d8d687_b.jpg"

    },
    { 
    	name: "Mirringo", 
    	src: "https://live.staticflickr.com/2106/2207159142_8206ab6984.jpg" 
    },
    { 
    	name: "Tax", 
    	src: "https://live.staticflickr.com/5479/9806556103_bb21b3f223_b.jpg" 
    },
    { 
    	name: "Mancha", 
    	src: "https://live.staticflickr.com/3894/14962688165_04759a8b03_b.jpg" 
    }
];

function incrementarContador(i) {
    contador_i = "contador_" + i;
    contadorAux_i = "contadorAux_" + i;    
    cont = parseInt(document.getElementById(contadorAux_i).value);
    cont += 1;
    document.getElementById(contador_i).innerHTML = "";
    document.getElementById(contador_i).innerHTML = cont;
    document.getElementById(contadorAux_i).value = cont;
}

function construirListaNombresGatos() {
    let contenedor = document.getElementById('list_name_cats');
    for (var i = cats.length - 1; i >= 0; i--) {
        let name = cats[i].name;
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(name));
        li.addEventListener("click", (function(iCopy) {
            return function() {
                displayCat(iCopy);
            }
        })(i));
        contenedor.appendChild(li);
    }
}

function displayCat(i) {
    var list_cats = document.getElementById('list_cats');
    list_cats.innerHTML = "";
    var cont = document.createElement("div");
    cont.setAttribute("class", "w3-third");
    var titulo = document.createElement("h2");
    titulo.innerHTML = cats[i].name;
    cont.appendChild(titulo);
    var img = document.createElement("img");
    img.setAttribute("style", "width:100%;min-height:100px");
    img.setAttribute("src", cats[i].src);
    img.addEventListener('click', (function(icopy) {
        return function() {
            incrementarContador(icopy);
        }
    })(i));
    cont.appendChild(img);
    var contador = document.createElement("h3");
    contador.setAttribute("id", "contador_" + i);
    contador.innerHTML = "0";
    cont.appendChild(contador);
    var contadorAux = document.createElement("input");
    contadorAux.setAttribute("type", "hidden");
    contadorAux.setAttribute("id", "contadorAux_" + i);
    contadorAux.setAttribute("value", "0");
    cont.appendChild(contadorAux);
    list_cats.appendChild(cont);
}

construirListaNombresGatos();