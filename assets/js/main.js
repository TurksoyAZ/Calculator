

const output = document.getElementById("output");

function addElement(parametr) {
  output.innerHTML = output.innerHTML + parametr;
  // output.innerHTML+=parametr;
}

function ergebnis(){

    let ergebnis = eval(output.innerHTML);
    output.innerHTML=ergebnis;
}

function deletElement(){

if(output.innerHTML.endsWith(" ")){
    output.innerHTML = output.innerHTML.slice(0,-3);
}else{
    output.innerHTML = output.innerHTML.slice(0,-1);
}

}

function deletElementAll(){
    output.innerHTML=""
}