var inp_as = document.getElementById('arr_size'); /* Taking arr size storing it in inp_as */ 
var inp_gen=document.getElementById("arr_generate"); /* using id arr_generate and storing it in inp_gen  */ 
var inp_aspeed=document.getElementById("arr_speed");
var array_size = inp_as.value;

var butts_algos=document.querySelectorAll(".algos button"); /* Selecting the buttons */ 

var div_sizes = [];
var divs = [];
var margin_size;

var cont = document.getElementById("container");
cont.style.flexDirection = "row";

inp_gen.addEventListener("click",generate_array);    /* clicking event to generate array button */   
inp_as.addEventListener("input", update_array_size);  

function generate_array() {
    cont.innerHTML = "";

    for (var i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style.margin = "0% " + margin_size + "%";
        divs[i].style.backgroundColor = "blue";
        divs[i].style.width = (100 / array_size - (2 * margin_size)) + "%";
        divs[i].style.height = div_sizes[i] + "%";
    }
}

function update_array_size() {
    array_size = inp_as.value;
    generate_array();
}

window.onload = generate_array; // Call the generate_array function when the window loads

//Running the appropriate algorithm.


function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}
